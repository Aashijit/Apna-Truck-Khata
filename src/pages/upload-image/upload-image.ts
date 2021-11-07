import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { s } from '@angular/core/src/render3';


@IonicPage()
@Component({
  selector: 'page-upload-image',
  templateUrl: 'upload-image.html',
})
export class UploadImagePage {

  data : any = '';
  uploadImage : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private view : ViewController,private cm : Camera, private ldcontroller : LoadingController, 
    private rest : RestProvider, private codes : CodesProvider) {
    
      this.data = this.navParams.get("request");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadImagePage');
  }

  camera(){
    this.getImage("camera");
  }

  gallery() {
    this.getImage("gallery");
  }

  getImage(img) {

    if(img == 'camera'){
      const options: CameraOptions = {
        quality: 10,
        destinationType: this.cm.DestinationType.DATA_URL,
        encodingType: this.cm.EncodingType.JPEG,
        mediaType: this.cm.MediaType.PICTURE,
        sourceType:this.cm.PictureSourceType.CAMERA
      }    

      this.cm.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.uploadImage = base64Image;

        let ldcon =  this.ldcontroller.create({
          content: 'Saving the image ... '
        });
    
        ldcon.present();

        this.data['image_content'] = this.uploadImage;

        this.rest.post(this.codes.SAVE_IMAGE,this.data).then(resp => {
          localStorage.setItem("selectedimage",JSON.stringify(resp['data']));
          ldcon.dismiss();
          this.view.dismiss();
        });


       }, (err) => {
        // Handle error
       });

    }else {
      const options: CameraOptions = {
        quality: 10,
        destinationType: this.cm.DestinationType.DATA_URL,
        encodingType: this.cm.EncodingType.JPEG,
        mediaType: this.cm.MediaType.PICTURE,
        sourceType:this.cm.PictureSourceType.PHOTOLIBRARY
      }  

      this.cm.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.uploadImage = base64Image;

        let ldcon =  this.ldcontroller.create({
          content: 'Saving the image ... '
        });
    
        ldcon.present();

        this.data['image_content'] = this.uploadImage;

        this.rest.post(this.codes.SAVE_IMAGE,this.data).then(resp => {
          localStorage.setItem("selectedimage",JSON.stringify(resp['data']));
          ldcon.dismiss();
          this.view.dismiss();
        });



       }, (err) => {
        // Handle error
       });

    }
  }

  close(){
    this.view.dismiss();
  }

}
