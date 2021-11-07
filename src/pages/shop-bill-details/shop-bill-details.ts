import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, ViewController, ModalController, NavController, NavParams, LoadingController, Select } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-shop-bill-details',
  templateUrl: 'shop-bill-details.html',
})
export class ShopBillDetailsPage {

  @ViewChild('selectBill') selectbill : Select;



  vari : any = '';
  isSelectedBill : boolean = false;
  header_name : any = '';
  worker_type : any = '';

  problems_parts : any = '';
  bill : any = '';
  bills : any = [];
  bill_id : any= '';
  date_of_repair : any = '';
  details : any = '';
  km_reading : any = '';
  img : any = null;



  constructor(private viewController : ViewController,
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private codes : CodesProvider,
    private rest : RestProvider, private message : MessageProvider, private ldctrl : LoadingController) {


      this.worker_type = this.navParams.get("worker_type");
      if(this.worker_type == 'mechanic')
        this.header_name = 'MECHANIC REPAIR DETALLS';
      else 
        this.header_name = 'PARTS BILL DETALLS';


      this.getBillsBySrthId();
      


      var objRec = localStorage.getItem("bill_details");

      var isupd = this.navParams.get("update");

      if(objRec != undefined && objRec != null && isupd == 'true') {
        this.isSelectedBill = true;
        this.bill = JSON.parse(objRec);
        this.details = this.bill['bill_details'];
        this.date_of_repair = this.bill['date_of_repair'];
        this.km_reading = this.bill['km_reading'];

        console.error("CHECK : "+JSON.stringify(this.bill));

        var total = 0.00;

        for(let i=0;i<this.bill['problems_parts'].length;i++){
          total = total + Number(this.bill['problems_parts'][i]['rate']);
          this.bill['problems_parts'][i]['parts'] = [];
        }

     

        for(let i=0;i<this.bill['problems_parts'].length;i++){
          var parts = {
            "part_name":this.bill['problems_parts'][i]['part_name'],
            "rate_per_pc":this.bill['problems_parts'][i]['rate'],
            "is_full":false,
            "qty":this.bill['problems_parts'][i]['qty'],
            "id":this.bill['problems_parts'][i]['id_details'],
            "total":total
          };
          this.bill['problems_parts'][i]['parts'].push(parts);
        }
        this.problems_parts = this.bill['problems_parts'];
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopBillDetailsPage');
  }

  openCameraPopup() {

    if(this.bill == '') {
      this.message.displayToast("Please select a bill");
      return;
    }

    var data = {
      "bill_id":this.bill_id,
      "person_shop_name":this.bill['person_shop_name'],
      "vehicle_id":this.bill['vehicle_id'],
      "bill_date":this.bill['bill_date'],
      "worker_type":'shop',
      "bill_details":this.bill['bill_details']
    };
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data2 = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"mechanic",
      "worker_id":this.bill['worker_id'],
      "document_type":"mbill",
      "type":"bills",
      "file_name":json[0]['srth_id']+"_"+Date.now()+".jpg",
      "tags":JSON.stringify(data)
    }
   
    let cameraModalPage = this.modalCtrl.create('UploadImagePage',{"request":data2});

    cameraModalPage.onDidDismiss(resp => {
      this.img = JSON.parse(localStorage.getItem("selectedimage"));
    });
    
    cameraModalPage.present();
  }

  // openCameraPopup() {
  //   var type = this.worker_type == 'mechanic' ? 'mbills' : 'sbills';
  //   let cameraModalPage = this.modalCtrl.create('AllImageKhataPage',{"isselect":true,"type":type});

  //   cameraModalPage.onDidDismiss(resp => {
  //     this.img = JSON.parse(localStorage.getItem("selectedimage"));
  //   });
    
  //   cameraModalPage.present();
  // }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.date_of_repair = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  


  change(bill_id){
    this.isSelectedBill = true;
    for(let i=0;i<this.bills.length;i++){
      if(this.bills[i]['bill_id'] == bill_id){
        this.bill = this.bills[i];
        this.details = this.bill['bill_details'];

        if(this.bill['image'] != undefined && this.bill['image'] != null){
          this.img = this.bill['image'];
          // var dt = {
          //   "image_id" : this.bill['bill_image_id']
          // };
          // this.rest.post(this.codes.GET_IMAGE_BY_IMAGE_ID, dt).then(resp => {
          //   if(resp['_ReturnCode'] == '0')
          //     this.img = resp['data'][0];
          // });
        }

      }
    }
  }

  changeagain(){
    // this.selectbill.open();
    this.isSelectedBill = false;
  }

  getBillsBySrthId(){
    var bls_temp = "";
    if(this.worker_type == 'shop')
       bls_temp = localStorage.getItem("shop_bills");
    else if(this.worker_type == 'mechanic')
       bls_temp = localStorage.getItem("mechanic_bills");

    if(bls_temp != undefined  && bls_temp != null && bls_temp != "") {
      this.bills = JSON.parse(bls_temp);
    } else {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    let ld = this.ldctrl.create({
      'content':'Loading the bills ...'
    });
    ld.present();
    var data = {
      "srth_id":json[0]['srth_id'],
      "worker_type":this.worker_type
    };

    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID,data).then(resp => {
      ld.dismiss();
      if(resp['_ReturnCode'] == '0'){
        this.bills = resp['data'];
      }
    });
  }
  }

  addParts(vr){

    if(vr == 'save') { 
    let partsBillDetailModal = this.modalCtrl.create('PartsBillDetailsModalPage',{"worker_type":this.worker_type,"image":this.img,"bill":this.bill,"action":"save"});

    partsBillDetailModal.onDidDismiss(data => {
        this.problems_parts = JSON.parse(localStorage.getItem("problem_part"));      
        console.error(JSON.stringify(this.problems_parts));
    });

    partsBillDetailModal.present();
    }  else {
      let partsBillDetailModal = this.modalCtrl.create('PartsBillDetailsModalPage',{"worker_type":this.worker_type,"image":this.img,"bill":this.bill,"action":"edit","problem_part":this.problems_parts});

      partsBillDetailModal.onDidDismiss(data => {
          this.problems_parts = JSON.parse(localStorage.getItem("problem_part"));      
          console.error(JSON.stringify(this.problems_parts));
      });
  
      partsBillDetailModal.present();
    }
  }
    

  openShopBillDetailsPage() {
    this.navCtrl.push('ShopBillDescriptionPage');
  }

  openDetailPopup() {
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage');
    detailsModalPage.present();
  }


  saveShopBillDetails() {
    for(let i=0;i<this.problems_parts.length;i++){
      this.problems_parts[i]['date_of_repair'] = this.date_of_repair;
      this.problems_parts[i]['additional_info'] = this.details;
      this.problems_parts[i]['km_reading'] = this.km_reading;
      this.problems_parts[i]['mechanic_name'] = '';
      this.problems_parts[i]['mechanic_phone_number'] = '';
      this.problems_parts[i]['bill_image_id'] = this.img['image_id'];
    }
    console.log(JSON.stringify(this.problems_parts));
    this.rest.post(this.codes.SAVE_PROBLEM_PARTS,this.problems_parts).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Saved the problem part of this bill successfully!');
        this.navCtrl.pop();
      }
    }); 

  }

}