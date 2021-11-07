import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MessageProvider } from './../../../src/providers/message/message';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-parts-bill-details-modal',
  templateUrl: 'parts-bill-details-modal.html',
})
export class PartsBillDetailsModalPage {

  problems : any = [];
  bill : any = '';
  amount : any = 0.00;
  part_name  :any = '';
  id : any = '';
  rate : any = '';
  is_full : boolean = false;
  work_part : any = '';
  qty : any = '';
  img : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl : ModalController, 
    private viewController : ViewController, private codes : CodesProvider, private message : MessageProvider,
     private pv : PhotoViewer) {

      if(this.navParams.get("action") == "edit"){
          this.problems = this.navParams.get("problem_part");

          for(let i=0;i<this.problems[0]['parts'].length;i++){
            this.amount += Number(this.problems[0]['parts'][i]['total']);
          }


      }

      this.img = this.navParams.get("image");
      this.bill = this.navParams.get("bill");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartsBillDetailsModalPage');
  }

  addRow(problem){
    var parts = {
      "part_name":"",
      "rate_per_pc":"",
      "is_full":"",
      "qty":"",
      "id":""
    };
    problem['parts'].push(parts);
  }

  openPartsWorkModal(){
    let mdl = this.modalCtrl.create('PartsWorkModalPage');

    mdl.onDidDismiss(data => {
      this.work_part = JSON.parse(localStorage.getItem(this.codes.SELECTED_WORK_PART));
      this.part_name = this.work_part['name'];
    });

    mdl.present();
  
  }

  removeProblem(problem){



    console.log("PROBLEM : "+JSON.stringify(this.problems));

    if(this.problems.length == 1) {
      this.message.displayToast('Atleast one problem is needed for the parts. Please add a different problem and then delete this.');
      return;
    }

    var prblms = [];
    var parts = [];
    for(let i=0;i<this.problems.length;i++){
      if(i==0) {
        parts = this.problems[i]['parts'];
      }
      if(this.problems[i]['problem_id'] == problem['problem_id']) {
      }else {
        this.problems[i]['parts'] = parts;
        prblms.push(this.problems[i]);
      }
    } 


    console.log("PROBLEM NEW : "+JSON.stringify(this.problems));


    
    // console.debug(JSON.stringify(prblms));
    this.problems = prblms;
  }

  viewImage(imageUrl) {
    this.pv.show(imageUrl,"Bill Image",{share:true});
  }

  removeRow(problem){
    problem['parts'].pop();
  }

  removePart(prt) {
    var prts = [];
    for(let i=0;i<this.problems[0]['parts'].length;i++){
      if(this.problems[0]['parts'][i]['part_name'] != prt['part_name'])
        prts.push(this.problems[0]['parts'][i]);
      else if(this.problems[0]['parts'][i]['part_name'] == prt['part_name'])
        this.amount -= Number(prt['total']);
    }
    this.problems[0]['parts'] = prts;
  }

  openProblemModal(){
    let problemModal = this.modalCtrl.create('ProblemWorkPartModalPage',{"problems" : this.problems});

    problemModal.onDidDismiss(data=> {
      this.problems = JSON.parse(localStorage.getItem("problem_id"));
      console.log("PROBLEMS GOT : "+JSON.stringify(this.problems));
      var parts = [];
      for(let i=0;i<this.problems.length;i++){
        if(this.problems[i]['parts'] != undefined && this.problems[i]['parts'] != null)
          parts = this.problems[i]['parts'];
        else 
          this.problems[i]['parts'] = [];
      }

      for(let i=0;i<this.problems.length;i++){
        this.problems[i]['parts'] = parts;
      }
      
    });

    problemModal.present();
  }

  savePartsBill(){
    for(let i=0;i<this.problems.length;i++){
      this.problems[i]['bill_id'] = this.bill['bill_id'];
    }
    localStorage.setItem("problem_part",JSON.stringify(this.problems));
    this.viewController.dismiss();
  }

  addPartsBill(){

    for(let i=0;i<this.problems.length;i++){
      var parts = {};
      if(this.is_full)
       parts = {
        "part_name":this.part_name,
        "rate_per_pc":this.rate,
        "is_full":this.is_full,
        "qty":this.qty,
        "id":this.id,
        "total":this.rate
      };
      else 
       parts = {
        "part_name":this.part_name,
        "rate_per_pc":this.rate,
        "is_full":this.is_full,
        "qty":this.qty,
        "id":this.id,
        "total":Number(this.rate) * Number(this.qty)
      };


      if(i == 0) {
      this.amount += Number(parts['total']);

      if(this.amount > Number(this.bill['total_bill'])){
        this.message.displayToast('The amount is crossing the bill amount! Cannot be added.');
        this.amount -= Number(parts['total']);

        return;
      }
    }

      this.problems[i]['parts'].push(parts);

      console.log("PROBLEM : "+JSON.stringify(this.problems));
    }

    this.part_name = '';
    this.rate = '';
    this.is_full = false;
    this.qty = '';
    this.id = '';

  }


}
