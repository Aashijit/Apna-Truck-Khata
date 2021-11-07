import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-problem-work-part-modal',
  templateUrl: 'problem-work-part-modal.html',
})
export class ProblemWorkPartModalPage {

  problem : any ='';
  part : any = '';
  id : any = '';
  searchTerm :any = '';

  addWorkPart : Boolean = false;

  problems : any = [];
  filterproblems : any = [];

  selectedProblems : any = [];

  constructor(private viewController : ViewController,
    public navCtrl: NavController, public navParams: NavParams, private rest : RestProvider, private codes : CodesProvider) {
    this.getrepair();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProblemWorkPartModalPage');
  }

  saverepair(){
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":userinfo[0]['srth_id'],
      "problem_name":this.problem,
      "vehicle_part_name":this.part,
      "vehicle_part_id":this.id,
      "last_maint_id":"srth-app",
      "opt_counter":"0"
    };

    this.rest.post(this.codes.SAVE_PROBLEM, data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.addWorkPart = false;
        this.getrepair();
      }
    });
  }

  getrepair(){
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":userinfo[0]['srth_id']
    };

    this.rest.post(this.codes.GET_PROBLEM, data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.problems = resp['data'];
        var prb_sel = this.navParams.get("problems");
        for(let i=0;i<this.problems.length;i++){
          this.problems[i]['selected'] = false;
          if(prb_sel != undefined && prb_sel != null) {
            for(let j=0;j<prb_sel.length;j++) {
              if(prb_sel[j]['problem_id'] == this.problems[i]['problem_id']) {
                this.problems[i]['selected'] = true;
                this.problems[i]['parts'] = prb_sel[j]['parts'];
              }
             
            }
          }
        }
      }
    });
  }

  problemsSelected(){
    var prblems = [];
    for(let i=0;i<this.problems.length;i++){
      if(this.problems[i]['selected'] == true){
        prblems.push(this.problems[i]);
      }
    }
    localStorage.setItem("problem_id",JSON.stringify(prblems));
    this.viewController.dismiss();
  }

  selectedProblem(problem){

    localStorage.setItem("problem_id",problem['problem_id']);
    this.viewController.dismiss();

  }

  filterList(event){
    this.filterproblems = this.problems.filter(wp => {
      if (this.searchTerm != '') {
        return (wp.problem_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      }
      else 
        return this.problems;
    });
  }

}
