webpackJsonp([24],{

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(980);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.openEditProfilePage = function () {
        this.navCtrl.push('EditProfilePage');
    };
    ProfilePage.prototype.openLanguagePage = function () {
        this.navCtrl.push('LanguagePage');
    };
    ProfilePage.prototype.openAddNewBankPage = function () {
        this.navCtrl.push('AddNewBankAccountPage');
    };
    ProfilePage.prototype.openSettingsPage = function () {
        this.navCtrl.push('SettingsPage');
    };
    ProfilePage.prototype.openSecurityAndBackup = function () {
        this.navCtrl.push('SecurityAndBackupPage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          &nbsp;\n          PROFILE\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-card class="profile-card">\n      <button ion-item text-wrap>\n        <i class="fa fa-user-circle-o" aria-hidden="true" item-start></i>\n        <div>\n          <h6>Personal Identity</h6>\n          <p>Name,Business name ...</p>\n        </div>\n        <button item-end ion-button round class="edit-button" (click)="openEditProfilePage()">EDIT</button>\n\n        <!-- <button item-end class="" style=" padding: 5px;">EDIT</button> -->\n\n      </button>\n    </ion-card>\n      \n    <ion-card class="profile-card" >\n      <ion-list>\n        <!-- <button ion-item text-wrap (click)="openLanguagePage()">\n         \n            \n          <i class="fa fa-language" aria-hidden="true" item-start></i>\n          <div>\n            <h6>LANGUAGE</h6>\n            <p>CHOOSE YOUR DESIRED LANGUAGE</p>\n          </div>\n          <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n\n        </button> -->\n    \n        <button ion-item text-wrap (click)="openSecurityAndBackup()">\n          <i class="fa fa-lock" aria-hidden="true" item-start></i>\n          <div>\n            <h6>PIN CHANGE</h6>\n            <p>SECURE YOUR APP WITH PIN</p>\n          </div>        \n          <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n\n        </button>\n    \n        <button ion-item text-wrap (click)="openAddNewBankPage()">\n          <i class="fa fa-university" aria-hidden="true" item-start></i>\n          <div>\n            <h6>BANK DETAILS</h6>\n            <p>SHARE YOUR BANK/UPI DETAILS TO REQUEST FASTER PAYMENTS</p>\n          </div>        \n          <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n        </button>\n  \n    \n      </ion-list>\n    </ion-card>\n\n    <!-- <ion-card class="profile-card"  (click)="openSettingsPage()" >\n      <button ion-item>\n        <i class="fa fa-cog" aria-hidden="true" item-start></i>\n        <div>\n          <h6>SETTINGS</h6>\n          <p>MANAGE THE APP SETTINGS</p>\n        </div>        \n        <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n\n      </button>\n    </ion-card> -->\n\n    <!-- <ion-card class="profile-card">\n      <button ion-item>\n        <i class="fa fa-sign-out" aria-hidden="true" item-start></i>\n        <div>\n          <h6>LOGOUT</h6>\n        </div>        \n        <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n\n      </button>\n    </ion-card> -->\n\n  </div>\n</ion-content> \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=24.js.map