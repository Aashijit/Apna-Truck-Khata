webpackJsonp([67],{

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewBankAccountPageModule", function() { return AddNewBankAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_new_bank_account__ = __webpack_require__(928);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddNewBankAccountPageModule = /** @class */ (function () {
    function AddNewBankAccountPageModule() {
    }
    AddNewBankAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_new_bank_account__["a" /* AddNewBankAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_new_bank_account__["a" /* AddNewBankAccountPage */]),
            ],
        })
    ], AddNewBankAccountPageModule);
    return AddNewBankAccountPageModule;
}());

//# sourceMappingURL=add-new-bank-account.module.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewBankAccountPage; });
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
 * Generated class for the AddNewBankAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNewBankAccountPage = /** @class */ (function () {
    function AddNewBankAccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddNewBankAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddNewBankAccountPage');
    };
    AddNewBankAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-new-bank-account',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-new-bank-account/add-new-bank-account.html"*/'<!--\n  Generated template for the AddNewBankAccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!--  Bank Details -->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-1 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-7 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-university" aria-hidden="true"></i>\n          BANK DETAILS\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-list class="bank-details">\n<!-- \n      <ion-item>\n        <ion-input type="text" placeholder="ACCOUNT NUMBER"></ion-input>\n      </ion-item> -->\n\n      <div class="label-float" >\n        <input type="text"  placeholder=" " />\n        <label>ACCOUNT NUMBER</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n  \n      </div>\n\n      <div class="label-float" >\n        <input type="text"  placeholder=" " />\n        <label>CONFIRM ACCOUNT NUMBER</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n  \n      </div>\n\n      <div class="label-float" >\n        <input type="text"  placeholder=" " />\n        <label>ACCOUNT HOLDER NAME</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n  \n      </div>\n\n      <div class="label-float" >\n        <input type="text"  placeholder=" " />\n        <label>IFSC CODE</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n  \n      </div>\n\n      <div class="label-float" >\n        <input type="text"  placeholder=" " />\n        <label>BANK NAME</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n  \n      </div>\n    \n      <!-- <ion-item>\n        <ion-input type="text" placeholder="CONFIRM ACCOUNT NUMBER"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="text" placeholder="ACCOUNT HOLDER NAME"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="IFSC CODE"></ion-input>\n      </ion-item> -->\n\n      <!-- <ion-item>\n        <ion-input type="text" placeholder="BANK NAME"></ion-input>\n      </ion-item> -->\n\n     \n      <p style="margin: 20px 0; font-weight: 700;">PASSBOOK/CHEQUE PHOTO</p>\n\n      <ion-row class="profile-picture">\n        <ion-col col-4>\n          <i class="fa fa-camera" aria-hidden="true"></i>\n          <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon>\n\n        </ion-col>\n        <ion-col>\n          <h6>MAX 1</h6> \n        </ion-col>\n\n      </ion-row>\n\n\n    <div class="mt-4 text-right">\n\n      <button ion-button round class="share-button">SHARE &nbsp;<ion-icon ios="ios-share-alt" md="md-share-alt"></ion-icon>\n      </button>\n\n    \n\n    </div>\n\n\n\n      <div class="text-center mt-4">\n        <button ion-button round class="custom-button" >CONFIRM</button>\n      </div>\n      \n      \n\n\n    \n    </ion-list>\n\n  </div>\n</ion-content>  \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-new-bank-account/add-new-bank-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AddNewBankAccountPage);
    return AddNewBankAccountPage;
}());

//# sourceMappingURL=add-new-bank-account.js.map

/***/ })

});
//# sourceMappingURL=67.js.map