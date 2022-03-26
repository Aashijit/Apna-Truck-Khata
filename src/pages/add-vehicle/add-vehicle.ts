import { Push } from '@ionic-native/push';
import { PartsWorkModalPage } from './../parts-work-modal/parts-work-modal';
import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DetailsModalPage } from '../details-modal/details-modal';
import { CameraModalPage } from '../camera-modal/camera-modal';
import { textChangeRangeIsUnchanged } from 'typescript';



@IonicPage()
@Component({
  selector: 'page-add-vehicle',
  templateUrl: 'add-vehicle.html',
})
export class AddVehiclePage {

  isInputFieldShown : boolean = false;
  // vehicle_owner_srth_id;
  vehicle_number = '';
  year_purchase = '';
  vehicle_model = '';
  vehicle_model_custom = '';
  vehicle_brand = '';
  vehicle_type = '';
  vehicle_image_1_id = '';
  vehicle_image_2_id = '';
  vehicle_image_3_id = '';
  vehicle_image_4_id = '';
  vehicle_weight = '';
  vehicle_weight_type = '';
  vehicle_km_reading_current = '';
  is_remove = '';

  brands : any = [];
  models : any = [];



  addWork : boolean = false;

  updatework : boolean = false;


  open_vehicle : boolean = false;
  vehicle_update_id : any = '';
  vehicle_id : any= '';
  vehicle_update_date : any = '';
  vehicle_user_update_id: any = '';
  vehicle_update_details  : any = '';
  vehicle_update_km_reading: any = '';
  vehicle_update_image_id : any = '';
  vehicle_part_work : any = '';
  vehicle_part_work_name : any = '';
  vehicle_part_work_details : any = '';

  workdetails : any = [];
  updateVehicle : Boolean = false;

  
  constructor(private viewController : ViewController,
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private rest : RestProvider,
    private codes : CodesProvider, private alertCtrl : AlertController, private message : MessageProvider) {

      var updateworkpart = this.navParams.get('updateworkpart');
      var updatevehicle = this.navParams.get('updatevehicle');

      this.rest.getModelsBrand().then(resp=> {
        var objs : any = [];
        objs = resp;
        for(let i=0;i<objs.length;i++) {
          this.addBrandsModel(objs[i]);
        }
        console.log(JSON.stringify(this.brands));
      });

      if(updateworkpart == 'true') {
        var vehicledetails = this.navParams.get('vehicle');
        localStorage.setItem(this.codes.ADDED_VEHICLE_ID,vehicledetails['vehicle_id']);
        this.addWork = true;
        this.getworkdetails();
      }
      else if(updatevehicle == 'true') {

        var vehicledetails = this.navParams.get('vehicle');

        this.vehicle_number = vehicledetails['vehicle_number'];
        this.year_purchase = vehicledetails['year_purchase'];
        this.vehicle_model = vehicledetails['vehicle_model'];
        this.vehicle_model_custom = vehicledetails['vehicle_model'];
        this.vehicle_brand = vehicledetails['vehicle_brand'];
        this.vehicle_type = vehicledetails['vehicle_type'];

        this.vehicle_image_1_id = '0';
        this.vehicle_image_2_id = '0';
        this.vehicle_image_3_id = '0';
        this.vehicle_image_4_id = '0';
        
        this.vehicle_weight = vehicledetails['vehicle_weight'];
        this.vehicle_weight_type = vehicledetails['vehicle_weight_type'];
        this.vehicle_km_reading_current = vehicledetails['vehicle_km_reading_current'];

        this.updateVehicle = true;

      }
  }

  selectedBrand() {
    for(let i=0;i<this.brands.length;i++) {
      if(this.brands[i]['name'] == this.vehicle_brand) {
        this.models = this.brands[i]['models'];
      }
    }
  }

  addBrands() {
      if(this.vehicle_model == "Add Model") {
        this.open_vehicle = true;
      } else {
        this.open_vehicle = false;
      }
  }

  addBrandsModel(obj) {

    if(!this.isBrandPresent(obj)) {
      var brandName = {
        "name":obj['brand']
      }
      this.brands.push(brandName);
    }

    for (let i = 0; i < this.brands.length; i++) {
      if (this.brands[i]['name'] == obj['brand']) {
        if (this.brands[i]['models'] == null || this.brands[i]['models'] == undefined) {
          this.brands[i]['models'] = [];
        }
        this.brands[i]['models'].push(obj['model']);
      }
    }
  }

  isBrandPresent(obj) {
    for(let i=0;i<this.brands.length;i++) {
      if(this.brands[i]['name'] == obj['brand'])
        return true;
    }
    return false;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddVehiclePage');
  }

  showInputField() {
    // alert(this.isInputFieldShown);
    this.isInputFieldShown = true;
  }

  selectThis(wd) {  


    for(let i=0;i<this.workdetails.length;i++)
      this.workdetails[i]['selected'] = false;

    this.vehicle_update_date = wd['vehicle_update_date'];
    this.vehicle_user_update_id = wd['vehicle_user_update_id'];
    this.vehicle_update_details = wd['vehicle_update_details'];
    this.vehicle_update_km_reading = wd['vehicle_update_km_reading'];
    this.vehicle_part_work = wd['vehicle_part_work'];
    this.vehicle_part_work_name = wd['vehicle_part_work_name'];
    this.vehicle_part_work_details=wd['vehicle_part_work_details'];
    this.vehicle_update_id = wd['vehicle_update_id'];
    wd['selected'] = true;

    this.updatework = true;

  }

  openPartsWorkDialog(){
    let partsWorkModal = this.modalCtrl.create('PartsWorkModalPage');
    partsWorkModal.present();

    partsWorkModal.onDidDismiss(data=> {

      //Fetch from the localstorage
      var data = JSON.parse(localStorage.getItem(this.codes.SELECTED_WORK_PART));
      this.vehicle_part_work = data['type'];
      this.vehicle_part_work_details = data['details'];
      this.vehicle_part_work_name = data['name'];

    });
  }

  presentConfirm(msg) {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: msg,
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
            this.savevehicledetails();
          }
        }
      ]
    });
    alert.present();
  }


  updatevehicledetails(){
    var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      vehicle_id : localStorage.getItem(this.codes.ADDED_VEHICLE_ID),
      vehicle_owner_srth_id : userdata[0]['srth_id'],
      vehicle_number  : this.vehicle_number,
      year_purchase : this.year_purchase,
      vehicle_model : this.vehicle_model == 'Add Model' ? this.vehicle_model_custom : this.vehicle_model,
      vehicle_brand : this.vehicle_brand,
      vehicle_type : this.vehicle_type,
      vehicle_image_1_id : 0,
      vehicle_image_2_id : 0,
      vehicle_image_3_id : 0,
      vehicle_image_4_id : 0,
      vehicle_weight : this.vehicle_weight,
      vehicle_weight_type : this.vehicle_weight_type,
      vehicle_km_reading_current : this.vehicle_km_reading_current,
      is_remove : 0,
      last_maint_id : 'srth-app',
      opt_counter : '0'
    };

    this.rest.post(this.codes.UPDATE_VEHICLE_DETAILS,data).then(resp => {

      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have updated your vehicle.'); 
        this.navCtrl.pop();
      }

    });
  }

  savevehicledetails(){
  
    var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      vehicle_owner_srth_id : userdata[0]['srth_id'],
      vehicle_number  : this.vehicle_number,
      year_purchase : this.year_purchase,
      vehicle_model : this.vehicle_model == 'Add Model' ? this.vehicle_model_custom : this.vehicle_model,
      vehicle_type : this.vehicle_type,
      vehicle_image_1_id : 0,
      vehicle_image_2_id : 0,
      vehicle_image_3_id : 0,
      vehicle_image_4_id : 0,
      vehicle_weight : this.vehicle_weight,
      vehicle_weight_type : this.vehicle_weight_type,
      vehicle_km_reading_current : this.vehicle_km_reading_current,
      is_remove : 0,
      last_maint_id : 'srth-app',
      opt_counter : '0'
    };

    this.rest.post(this.codes.SAVE_VEHICLE_DETAILS,data).then(resp => {

      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have added a vehicle. Now you may update its work history.'); 
        localStorage.setItem(this.codes.ADDED_VEHICLE_ID,resp['vehicle_id']);
        // this.addWork = true;
        this.navCtrl.pop();
      }

    });



  }

  presentConfirmDelete() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: "Are you sure you want to delete this work detail?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteVehicleWork();
          }
        }
      ]
    });
    alert.present();
  }

  updateVehicleWork() {

    var data = {
      "vehicle_update_id":this.vehicle_update_id,
      "vehicle_id":localStorage.getItem(this.codes.ADDED_VEHICLE_ID),
      "vehicle_update_date":this.vehicle_update_date,
      "vehicle_user_update_id":this.vehicle_user_update_id,
      "vehicle_update_details":this.vehicle_update_details,
      "vehicle_update_km_reading":this.vehicle_update_km_reading,
      "vehicle_update_image_id":this.vehicle_update_image_id,
      "vehicle_part_work":this.vehicle_part_work,
      "vehicle_part_work_name":this.vehicle_part_work_name,
      "vehicle_part_work_details":this.vehicle_part_work_details,
      "last_maint_id":"srth-app",
      "opt_counter":'0'
    };

    this.rest.post(this.codes.UPDATE_WORK_UPDATE, data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have updated a work detail to your vehicle.'); 
        this.vehicle_update_date="";
        this.vehicle_user_update_id="";
        this.vehicle_update_details="";
        this.vehicle_update_km_reading="";
        this.vehicle_update_image_id=0;
        this.vehicle_part_work_details="";
        this.getworkdetails();
      }
    });

  }


  deleteVehicleWork(){
      var data = {
        "vehicle_update_id":this.vehicle_update_id
      };


      this.rest.post(this.codes.UPDATE_WORK_DELETE, data).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          this.message.displayToast('Congratulations! You have deleted a work detail to your vehicle.'); 
          this.getworkdetails();
        }
      });

  }

  getworkdetails(){
    var data = {
      "vehicle_id":localStorage.getItem(this.codes.ADDED_VEHICLE_ID)
    };

    this.rest.post(this.codes.GET_UPDATE_WORK_DETAILS, data).then(resp => {
      this.workdetails = resp['data'];

      for(let i=0;i<this.workdetails.length;i++){
        this.workdetails[i]['selected'] = false;
      }

    });
  }


  saveVehicleWork(){

    var data = {
      "vehicle_id":localStorage.getItem(this.codes.ADDED_VEHICLE_ID),
      "vehicle_update_date":this.vehicle_update_date,
      "vehicle_user_update_id":this.vehicle_user_update_id,
      "vehicle_update_details":this.vehicle_update_details,
      "vehicle_update_km_reading":this.vehicle_update_km_reading,
      "vehicle_update_image_id":this.vehicle_update_image_id,
      "vehicle_part_work":this.vehicle_part_work,
      "vehicle_part_work_name":this.vehicle_part_work_name,
      "vehicle_part_work_details":this.vehicle_part_work_details,
      "last_maint_id":"srth-app",
      "opt_counter":'0'
    }

    this.rest.post(this.codes.UPDATE_WORK_DETAILS,data).then(resp => {

      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have added a work detail to your vehicle.'); 
        this.vehicle_update_date="";
        this.vehicle_user_update_id="";
        this.vehicle_update_details="";
        this.vehicle_update_km_reading="";
        this.vehicle_update_image_id=0;
        this.vehicle_part_work_details="";
        this.getworkdetails();
      }

    });

  }

  

  openDetailPopup() {
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage');

    detailsModalPage.onDidDismiss(data=> {
      this.vehicle_update_details = localStorage.getItem(this.codes.DETAILS);
    });

    detailsModalPage.present();
  }

  // openCameraPopup() {
  //   let cameraModalPage = this.modalCtrl.create('CameraModalPage');
  //   cameraModalPage.present();
  // }

  openCameraPopup() {
    var data = {
      "brand":this.vehicle_brand
    };
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data2 = {
      "srth_id":json[0]['srth_id'],
      "worker_type":'',
      "worker_id":0,
      "document_type":"vehicle_part",
      "type":"vehicle part",
      "file_name":json[0]['srth_id']+"_"+Date.now()+".jpg",
      "tags":JSON.stringify(data)
    }

    var img = {
      "image_url":this.vehicle_update_image_id
    };

    let cameraModalPage = this.modalCtrl.create('UploadImagePage',{"request":data2,'image':img});

    cameraModalPage.onDidDismiss(resp => {
      if(localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined)
        {
          img = JSON.parse(localStorage.getItem("selectedimage"));
          this.vehicle_update_image_id = img['image_url'];
        }
    });
    
    cameraModalPage.present();
  }

}
