webpackJsonp([27],{

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemModalPageModule", function() { return ProblemModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem_modal__ = __webpack_require__(974);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProblemModalPageModule = /** @class */ (function () {
    function ProblemModalPageModule() {
    }
    ProblemModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__problem_modal__["a" /* ProblemModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__problem_modal__["a" /* ProblemModalPage */]),
            ],
        })
    ], ProblemModalPageModule);
    return ProblemModalPageModule;
}());

//# sourceMappingURL=problem-modal.module.js.map

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProblemModalPage = /** @class */ (function () {
    function ProblemModalPage(viewController, navCtrl, navParams) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addNewField = false;
    }
    ProblemModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProblemModalPage');
    };
    ProblemModalPage.prototype.addNew = function () {
        this.addNewField = true;
    };
    ProblemModalPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    ProblemModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-problem-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/problem-modal/problem-modal.html"*/'\n\n<ion-content padding style="background-color: rgba(0, 0, 0, 0.8) !important;">\n\n\n\n  <ion-card class="modal-card-details">\n    <ion-card-header class="custom-card-header">\n      PROBLEMS\n    </ion-card-header>\n    <ion-card-content>\n      \n\n      <ion-row style="margin: 0;">\n        <ion-col col-8>\n          <div class="custom-searchbar-div" style="position: relative;">\n            <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH "></ion-searchbar>\n            <i class="fa fa-angle-down" aria-hidden="true"></i>\n          </div>\n        </ion-col>\n        <ion-col col-4 class="text-center">\n          <button ion-button round class="add-new custom-button"  (click)="addNew()" style="margin-top: 20px;"> ADD + </button>\n\n          <!-- <p class="custom-button" style="margin-top: 20px;">ADD NEW</p> -->\n        </ion-col>\n\n        <ion-col col-12 *ngIf="addNewField">\n          <div class="label-float" >\n            <input type="text"  placeholder=" " />\n            <label>ADD</label>\n            <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n      \n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-10>\n          <ion-item>\n            <ion-label>Daenerys Targaryen</ion-label>\n            <ion-checkbox checked="true"></ion-checkbox>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-2>\n          <i style="margin-top: 10px;\n          font-size: 20px !important;\n          color: #0752af;"  class="fa fa-times-circle" aria-hidden="true"></i>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-10>\n          <ion-item>\n            <ion-label>Daenerys Targaryen</ion-label>\n            <ion-checkbox checked="true"></ion-checkbox>\n\n          </ion-item>\n        </ion-col>\n        <ion-col col-2>\n          <i style="margin-top: 10px;\n          font-size: 20px !important;\n          color: #0752af;"  class="fa fa-times-circle" aria-hidden="true"></i>\n\n        </ion-col>\n      </ion-row>\n\n\n      <!-- <div class="label-float" >\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        <label>DATE</label>\n        <i class="fa fa-calendar" aria-hidden="true"></i>\n\n      </div> -->\n      \n        <ion-row class="justify-content-center">\n          <ion-col col-6 class="text-center">\n            <button ion-button round class="custom-button" > SAVE </button>\n    \n          </ion-col>\n          <ion-col col-6 class="text-center">\n            <button ion-button round (click)="exitModal()" class="custom-button exit-button">\n              EXIT\n            </button>\n          </ion-col>\n        </ion-row>\n      \n\n     </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/problem-modal/problem-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ProblemModalPage);
    return ProblemModalPage;
}());

//# sourceMappingURL=problem-modal.js.map

/***/ })

});
//# sourceMappingURL=27.js.map