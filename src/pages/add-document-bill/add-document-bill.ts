import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../../src/providers/rest/rest';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DocumentRenewalPage } from '../document-renewal/document-renewal';

@IonicPage()
@Component({
  selector: 'page-add-document-bill',
  templateUrl: 'add-document-bill.html',
})
export class AddDocumentBillPage {

  document : any = '';
  bills : any = [];
  isupdate : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private codes : CodesProvider, private rest : RestProvider, 
    private message : MessageProvider,private alertCtrl : AlertController) {
    this.document = this.navParams.get("document");
    console.log(JSON.stringify(this.document));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDocumentBillPage');
    this.getBillsBySrthId();
  }

  getBillsBySrthId(){
    // this.isupdate = false;
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"documents"
    };

    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        var bls = resp['data'];
        for(let i=0;i<bls.length;i++){
          if(bls[i]['reason'] == this.document['document_name']){
            bls[i]['selected'] = 'false';
            this.bills.push(bls[i]);

          }
        }
      }
    });
  }


  openRenewalDocumentPage() {
    this.navCtrl.push('DocumentRenewalPage',{"document":this.document});
  }

  selectThis(bill) {
   this.isupdate = true;
   for(let i=0;i<this.bills.length;i++)
    this.bills[i]['selected'] = 'false';
    
   bill['selected'] = 'true';
   localStorage.setItem("bill",JSON.stringify(bill));
  }

  update() {
    var bill = JSON.parse(localStorage.getItem("bill"));
    this.navCtrl.push('DocumentRenewalPage',{"document":this.document,"bill":bill});
  }

  presentConfirmDelete() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to delete this bill?',
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
            this.deletebill();
          }
        }
      ]
    });
    alert.present();
  }

  deletebill(){
    var bill = JSON.parse(localStorage.getItem('bill'));
    var data = {
      "bill_id":bill['bill_id']
    };  

    this.rest.post(this.codes.DELETE_BILL_EXPENSE,data).then(resp=> {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have deleted a bill.'); 
        this.getBillsBySrthId();
      }
    });
  }

}
