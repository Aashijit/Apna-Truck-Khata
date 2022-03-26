webpackJsonp([22],{

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDriverFromAccountPageModule", function() { return RemoveDriverFromAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remove_driver_from_account__ = __webpack_require__(982);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RemoveDriverFromAccountPageModule = /** @class */ (function () {
    function RemoveDriverFromAccountPageModule() {
    }
    RemoveDriverFromAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__remove_driver_from_account__["a" /* RemoveDriverFromAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__remove_driver_from_account__["a" /* RemoveDriverFromAccountPage */]),
            ],
        })
    ], RemoveDriverFromAccountPageModule);
    return RemoveDriverFromAccountPageModule;
}());

//# sourceMappingURL=remove-driver-from-account.module.js.map

/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveDriverFromAccountPage; });
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


var RemoveDriverFromAccountPage = /** @class */ (function () {
    function RemoveDriverFromAccountPage(viewController, navCtrl, navParams) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RemoveDriverFromAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RemoveDriverFromAccountPage');
    };
    RemoveDriverFromAccountPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    RemoveDriverFromAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-remove-driver-from-account',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/remove-driver-from-account/remove-driver-from-account.html"*/'<!--\n  Generated template for the RemoveDriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <!-- <ion-col col-2 class="custom-back-button"> -->\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      <!-- </ion-col> -->\n      \n      <ion-col col-12 class="person-name text-center">\n        <ion-title>        \n          <i class="fa fa-user-circle" aria-hidden="true"></i>\n          REMOVE DRIVER\n        </ion-title>\n\n      </ion-col>\n      <!-- <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col> -->\n    </ion-row>\n  </ion-navbar>\n</ion-header> \n\n<ion-content padding>\n\n  <div class="container white-section">\n    <ion-row class="driver-modal">\n       \n      <ion-col col-8>\n        VEHICLE NUMBER:  <span class="text-color-primary">XDMW-2123</span>\n      </ion-col>\n      <ion-col col-1>\n        <div style=" width: 10px; height: 10px; background-color: #4EC576; border-radius: 50%;"></div>\n  \n      </ion-col>\n      <ion-col col-3>\n        AVAILABLE\n      </ion-col>\n      <ion-col col-12>\n        TYPE: <span class="text-color-primary">TRUCK OPEN BODY</span>\n      </ion-col>\n      <ion-col col-12>\n        CURRENT DRIVER: <span class="text-color-primary">NOT PRESENT</span>\n      </ion-col>\n  \n      <ion-col col-12>\n        <div class="label-float" >\n          <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n          <label>DRIVER REMOVE DATE</label>\n          <i class="fa fa-calendar" aria-hidden="true"></i>\n    \n        </div>\n      </ion-col>\n  \n  <ion-col col-12>\n    <div class="label-float" >\n      <input type="text"  placeholder=" " />\n      <label>REASON/DETAILS</label>\n      <!-- <i class="fa fa-file" aria-hidden="true"></i> -->\n  \n    </div>\n  </ion-col>\n  \n  <!-- <ion-col col-12>\n    <div class="label-float" >\n      <input type="text"  placeholder=" " />\n      <label>KM</label>\n      <i class="fa fa-file" aria-hidden="true"></i>\n  \n    </div>\n  </ion-col> -->\n  \n  \n      \n   \n  \n  </ion-row> \n  </div>\n\n  <ion-row>\n    <ion-col col-6 class="text-center">\n  \n      <button ion-button round class="custom-button">SAVE</button>\n    </ion-col>\n  \n    <ion-col col-6 class="text-center">\n      <button ion-button round class="exit-button" (click)="exitModal()">\n        EXIT\n      </button>\n    </ion-col>\n    \n  </ion-row>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/remove-driver-from-account/remove-driver-from-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RemoveDriverFromAccountPage);
    return RemoveDriverFromAccountPage;
}());

//# sourceMappingURL=remove-driver-from-account.js.map

/***/ })

});
//# sourceMappingURL=22.js.map