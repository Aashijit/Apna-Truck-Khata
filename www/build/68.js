webpackJsonp([68],{

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPermitPageModule", function() { return AddPermitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_permit__ = __webpack_require__(935);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPermitPageModule = /** @class */ (function () {
    function AddPermitPageModule() {
    }
    AddPermitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_permit__["a" /* AddPermitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_permit__["a" /* AddPermitPage */]),
            ],
        })
    ], AddPermitPageModule);
    return AddPermitPageModule;
}());

//# sourceMappingURL=add-permit.module.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPermitPage; });
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


/**
 * Generated class for the AddPermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPermitPage = /** @class */ (function () {
    function AddPermitPage(viewController, navCtrl, navParams, modalCtrl) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AddPermitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPermitPage');
    };
    AddPermitPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    AddPermitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-permit',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-permit/add-permit.html"*/'<!--\n  Generated template for the AddPermitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>ADD </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div class="container">\n      \n      <ion-row class="profile-picture">\n        <ion-col col-4>\n          <i class="fa fa-camera" aria-hidden="true"></i>\n          <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon>\n\n        </ion-col>\n        <ion-col col-6>\n          <h6 style="margin-top: 30px;margin-left: 0px;">UPLOAD PICTURE</h6> \n        </ion-col>\n\n       \n       \n      </ion-row>\n    \n      <div class="label-float" >\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        <label>EXPIRY DATE</label>\n        <i class="fa fa-calendar" aria-hidden="true"></i>\n\n      </div>\n\n      <div class="label-float" >\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        <label>REMINDER DATE</label>\n        <i class="fa fa-calendar" aria-hidden="true"></i>\n\n      </div>\n\n      <ion-row>\n        <ion-col col-6 class="text-center">\n          <button ion-button round class="custom-button" > SAVE </button>\n  \n        </ion-col>\n        <ion-col col-6 class="text-center">\n          <button ion-button round (click)="exitModal()" class="custom-button">\n            Exit\n          </button>\n        </ion-col>\n      </ion-row>\n    \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-permit/add-permit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], AddPermitPage);
    return AddPermitPage;
}());

//# sourceMappingURL=add-permit.js.map

/***/ })

});
//# sourceMappingURL=68.js.map