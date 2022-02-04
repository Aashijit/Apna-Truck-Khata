webpackJsonp([26],{

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemWorkPartModalPageModule", function() { return ProblemWorkPartModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem_work_part_modal__ = __webpack_require__(974);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProblemWorkPartModalPageModule = /** @class */ (function () {
    function ProblemWorkPartModalPageModule() {
    }
    ProblemWorkPartModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__problem_work_part_modal__["a" /* ProblemWorkPartModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__problem_work_part_modal__["a" /* ProblemWorkPartModalPage */]),
            ],
        })
    ], ProblemWorkPartModalPageModule);
    return ProblemWorkPartModalPageModule;
}());

//# sourceMappingURL=problem-work-part-modal.module.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemWorkPartModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProblemWorkPartModalPage = /** @class */ (function () {
    function ProblemWorkPartModalPage(viewController, navCtrl, navParams, rest, codes) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.problem = '';
        this.part = '';
        this.id = '';
        this.searchTerm = '';
        this.addWorkPart = false;
        this.problems = [];
        this.filterproblems = [];
        this.selectedProblems = [];
        this.getrepair();
    }
    ProblemWorkPartModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProblemWorkPartModalPage');
    };
    ProblemWorkPartModalPage.prototype.saverepair = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": userinfo[0]['srth_id'],
            "problem_name": this.problem,
            "vehicle_part_name": this.part,
            "vehicle_part_id": this.id,
            "last_maint_id": "srth-app",
            "opt_counter": "0"
        };
        this.rest.post(this.codes.SAVE_PROBLEM, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.addWorkPart = false;
                _this.getrepair();
            }
        });
    };
    ProblemWorkPartModalPage.prototype.getrepair = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_PROBLEM, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.problems = resp['data'];
                var prb_sel = _this.navParams.get("problems");
                for (var i = 0; i < _this.problems.length; i++) {
                    _this.problems[i]['selected'] = false;
                    if (prb_sel != undefined && prb_sel != null) {
                        for (var j = 0; j < prb_sel.length; j++) {
                            if (prb_sel[j]['problem_id'] == _this.problems[i]['problem_id']) {
                                _this.problems[i]['selected'] = true;
                                _this.problems[i]['parts'] = prb_sel[j]['parts'];
                            }
                        }
                    }
                }
            }
        });
    };
    ProblemWorkPartModalPage.prototype.problemsSelected = function () {
        var prblems = [];
        //Fetch the parts
        var parts = [];
        for (var i = 0; i < this.problems.length; i++) {
            if (this.problems[i]['parts'] != undefined && this.problems[i]['parts'] != null && this.problems[i]['parts'] != []) {
                parts = this.problems[i]['parts'];
                break;
            }
        }
        for (var i = 0; i < this.problems.length; i++) {
            if (this.problems[i]['selected'] == true) {
                this.problems[i]['parts'] = parts;
                prblems.push(this.problems[i]);
            }
        }
        localStorage.setItem("problem_id", JSON.stringify(prblems));
        this.viewController.dismiss();
    };
    ProblemWorkPartModalPage.prototype.selectedProblem = function (problem) {
        localStorage.setItem("problem_id", problem['problem_id']);
        this.viewController.dismiss();
    };
    ProblemWorkPartModalPage.prototype.filterList = function (event) {
        var _this = this;
        this.filterproblems = this.problems.filter(function (wp) {
            if (_this.searchTerm != '') {
                return (wp.problem_name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            }
            else
                return _this.problems;
        });
    };
    ProblemWorkPartModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-problem-work-part-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/problem-work-part-modal/problem-work-part-modal.html"*/'<ion-content padding style="background: rgba(0,0,0,0.8) !important;">\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12>\n          <ion-searchbar mode="md" (ionInput)="filterList($event)" [(ngModel)]="searchTerm"></ion-searchbar>\n        </ion-col>\n        <ion-col col-12 style="text-align: center;">\n          <button ion-button round class="custom-button" (click)="addWorkPart=!addWorkPart"> ADD REPAIR  &nbsp; <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon> </button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-grid *ngIf="addWorkPart">\n        <ion-row>\n          <ion-col col-12>\n            <h2>Add Repair</h2>\n          </ion-col>\n          \n          <ion-col col-12>\n            <div class="label-float" >\n              <input type="text"  placeholder=" " [(ngModel)]="problem" />\n              <label>PROBLEM/WORK</label>\n            </div>\n          </ion-col>\n          <ion-col col-12>\n            <div class="label-float" >\n              <input type="text"  placeholder=" " [(ngModel)]="part" />\n              <label>PART</label>\n            </div>\n          </ion-col>\n          <ion-col col-12>\n            <div class="label-float" >\n              <input type="text"  placeholder=" " [(ngModel)]="id" />\n              <label>ID</label>\n            </div>\n          </ion-col>\n          <ion-col col-12 style="text-align: center;">\n            <button ion-button round class="custom-button" (click)="saverepair()"> ADD REPAIR  </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-row>\n        <ion-col col-12>\n        <ion-list>\n          <!-- (click)="selectedProblem(wp)" -->\n          <ion-item *ngFor="let wp of problems" >\n              <ion-label style="font-size: 10px;">{{wp[\'problem_name\'] + " "+wp[\'vehicle_part_name\'] +" "+ wp[\'vehicle_part_id\']}}</ion-label>\n              <ion-checkbox [(ngModel)]="wp[\'selected\']" slot="start"></ion-checkbox>\n            <!-- <ion-card>\n              <ion-card-content>\n            <ion-row>\n               [(ngModel)]="wp[\'selected\']" \n              <ion-col style="text-align: center;" col-12>\n                <ion-item>\n                  \n              </ion-item>\n              </ion-col>\n              <ion-col style="text-align: center;"> \n                {{wp[\'problem_name\']}}\n              </ion-col>\n              <ion-col style="text-align: center;"> \n                {{wp[\'vehicle_part_name\']}}\n              </ion-col>\n              <ion-col style="text-align: center;">\n                {{wp[\'vehicle_part_id\']}}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n          </ion-card> -->\n          </ion-item>\n        </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 class="text-center">\n          <button ion-button round class="custom-button" (click)="problemsSelected()">Save</button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/problem-work-part-modal/problem-work-part-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */]])
    ], ProblemWorkPartModalPage);
    return ProblemWorkPartModalPage;
}());

//# sourceMappingURL=problem-work-part-modal.js.map

/***/ })

});
//# sourceMappingURL=26.js.map