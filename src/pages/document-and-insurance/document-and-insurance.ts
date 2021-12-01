import { RestProvider } from './../../../src/providers/rest/rest';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-document-and-insurance',
  templateUrl: 'document-and-insurance.html',
})
export class DocumentAndInsurancePage {

  segment : any = "all";
  documents : any =  [];
  docs : any = [];
  ok : boolean = false;
  expired : boolean = false;
  all : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private codes : CodesProvider, private rest : RestProvider) {
    
  }

  ionViewWillEnter(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var req = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_DOCUMENT_INFO_BY_SRTH_ID, req).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.documents = resp['data'];
        this.docs = [];

        for(let i=0;i<this.documents.length;i++){
          this.docs = this.insertIntoArray(this.docs,this.documents[i]);
        }

      }
    });

  }

  insertIntoArray(docs, document){
    var flag = false;
    for(let i=0;i<docs.length;i++){
      if(docs[i]['document_name'] == document['document_name']){
    
        var expiryDate = new Date(document['document_expiry_date']+"T00:00:00");


        if(expiryDate.getTime() <= new Date().getTime()) {
          docs[i]['expiryCount'] ++;
        }

           docs[i]['count'] ++;
           flag = true;
      }
    }

    if(!flag){
    
      var expiryDate = new Date(document['document_expiry_date']+"T00:00:00");

      var dtr = {
        "document_name":document['document_name'],
        "count":1
      };
      if(expiryDate.getTime() <= new Date().getTime()) {
        dtr['expiryCount'] =1;
      } else 
      dtr['expiryCount'] = 0;

      docs.push(dtr);
    }
    return docs;
  }

  displayOk(){
    this.all = false;
    this.ok = true;
    this.expired = false;
  }

  displayExpired(){
    this.all = false;
    this.ok = false;
    this.expired = true;
  }

  displayALL(){
    this.all = true;
    this.ok = false;
    this.expired = false;
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentAndInsurancePage');
  }

  openDocumentBill() {
    this.navCtrl.push('AddDocumentBillPage');
  }
  openDocumentBillA(avr){

    var doc = '';
    for(let i=0;i<this.documents.length;i++){
      if(this.documents[i]['document_name'] == avr){
        
        doc = this.documents[i];
        break;
      }
    }

    this.navCtrl.push('AddDocumentBillPage',{"document":doc});
  }



  getItems($event){

  }

}
