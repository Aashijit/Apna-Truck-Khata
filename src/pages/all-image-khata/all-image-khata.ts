import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController, IonicPage, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { PhotoViewer } from '@ionic-native/photo-viewer';



@IonicPage()
@Component({
  selector: 'page-all-image-khata',
  templateUrl: 'all-image-khata.html',
})
export class AllImageKhataPage {

  type : any = '';
  upload_image : any = '';
  tp : any = '';
  images : any = [];
  filterimages : any = [];
  isselect : boolean = false;
  keys : any = [];

  searchTerm : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private camera : Camera, private alertCtrl : AlertController, private rest : RestProvider, private codes : CodesProvider, 
    private ldcontroller : LoadingController, private message : MessageProvider, 
    public datetransform : DatePipe, private view : ViewController,private photoViewer: PhotoViewer) {
      this.isselect = this.navParams.get("isselect");
      this.type = this.navParams.get("type");
      this.tp = this.type;

      this.getImagesBySrthId();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllImageKhataPage');
  }



  saveImage(){

    if(this.tp == ''){
      this.message.displayToast("Please add a type ");
      return;
    }

    var data = {};
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    data['image_content'] = this.upload_image;
    data['document_type'] = 'image';
    data['srth_id'] = json[0]['srth_id'];
    
    if(this.tp == 'sbills') {
      data['worker_type'] = 'shop';
      data['type'] = 'bills';
    } else if(this.tp == 'mbills') {
      data['worker_type'] = 'mechanic';
      data['type'] = 'bills';     
    } else if(this.tp == 'preceipts') {
      data['worker_type'] = null;
      data['type'] = 'payment';         
    } else if(this.tp == 'drbills') {
      data['worker_type'] = 'driver';
      data['type'] = 'bills';   
    } else if(this.tp == 'profile') {
      data['worker_type'] = null;
      data['type'] = 'profile';   
    } else if(this.tp == 'drdoc' || this.tp == 'vhdoc') {
      data['worker_type'] = "document";
      data['type'] = 'bills';       
    }

    let ldcon =  this.ldcontroller.create({
      content: 'Uploading image to ATK server ... '
    });

    ldcon.present();

    this.rest.post(this.codes.SAVE_IMAGE,data).then(resp => {
      ldcon.dismiss();
      this.type = this.tp;
      this.upload_image = '';
      this.getImagesByType(this.type);
    });



  }

  filterList(events) {
      this.filterimages = this.images.filter(wp => {
        if (this.searchTerm != '') {
          var sterm = this.searchTerm.trim();
          sterm = sterm.replace(/[^a-zA-Z0-9]/g,"");
          var tag_cloud =  wp.tag_cloud.replace(/[^a-zA-Z0-9]/g,"");
          return (tag_cloud.toLowerCase().indexOf(sterm.toLowerCase()) > -1);
        } 
        else 
          return this.images;
      });
  }

  dismiss(){
    this.view.dismiss();
  }

  selectImage(img) {
    localStorage.setItem("selectedimage",JSON.stringify(img));
    this.view.dismiss();
  }

  viewImage(image) {
    this.photoViewer.show(image['image_url'],image['tag_cloud'], {share: true});
  }

  getImagesBySrthId() {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":json[0]['srth_id']
    };
    let ldcon =  this.ldcontroller.create({
      content: 'Loading all the images ... '
    });

    ldcon.present();
    this.rest.post(this.codes.GET_IMAGES_BY_SRTH_ID,data).then(resp => {
      ldcon.dismiss();
      if(resp['_ReturnCode'] == '0') {
        this.images = resp['data'];

        for(let i=0;i<this.images.length;i++) {
          console.log(this.images[i]['image_tags']);
          var json = JSON.parse(this.images[i]['image_tags']);

          var keys = Object.keys(json);
          this.keys = keys;
          var tagcloud = "";

          for(let j=0;j<keys.length;j++) {
            tagcloud += "#"+json[keys[j]]+" ";
          }
          // keys[j]+":"
          this.images[i]['tag_cloud'] = tagcloud;

        }

        this.filterimages = this.images;

      }
    });

  }

  getImagesByType(event){

    this.tp = event;
    var data = {};
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    data['srth_id'] = json[0]['srth_id'];

    if(this.tp == 'sbills') {
      data['worker_type'] = 'shop';
      data['type'] = 'bills';
    } else if(this.tp == 'mbills') {
      data['worker_type'] = 'mechanic';
      data['type'] = 'bills';     
    } else if(this.tp == 'preceipts') {
      data['worker_type'] = null;
      data['type'] = 'payment';         
    } else if(this.tp == 'drbills') {
      data['worker_type'] = 'driver';
      data['type'] = 'bills';   
    } else if(this.tp == 'profile') {
      data['worker_type'] = null;
      data['type'] = 'profile';   
    } else if(this.tp == 'drdoc' || this.tp == 'vhdoc') {
      data['worker_type'] = "document";
      data['type'] = 'bills';       
    } 

    this.rest.post(this.codes.GET_IMAGE_BY_TYPE_WORKER_TYPE,data).then(resp => {
      if(resp['_ReturnCode'] == '0') {
        this.images = resp['data'];

        for(let i=0;i<this.images.length;i++) {
          var data = {
            "image_id" : this.images[i]['image_id']
          };
          this.rest.post(this.codes.GET_IMAGE_BY_IMAGE_ID, data).then(resp => {
            if(resp['data'].length > 0)
              this.images[i]['image_content'] = resp['data'][0]['image_content'];
          });
        }


      }
    });

  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: "Are you sure you want to save this image?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: () => {
            this.saveImage();
          }
        }
      ]
    });
    alert.present();
  }

  getImage(img) {

    if(img == 'camera'){
      const options: CameraOptions = {
        quality: 10,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType:this.camera.PictureSourceType.CAMERA
      }    

      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.upload_image = base64Image;
       }, (err) => {
        // Handle error
       });

    }else {
      const options: CameraOptions = {
        quality: 10,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
      }  

      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.upload_image = base64Image;
       }, (err) => {
        // Handle error
       });

    }
  }

}
