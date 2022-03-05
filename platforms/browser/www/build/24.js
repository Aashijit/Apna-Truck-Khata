webpackJsonp([24],{

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(976);
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

/***/ 976:
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
            selector: 'page-profile',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          &nbsp;\n          PROFILE\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-card class="profile-card">\n      <button ion-item text-wrap>\n        <i class="fa fa-user-circle-o" aria-hidden="true" item-start></i>\n        <div>\n          <h6>Personal Identity</h6>\n          <p>Name,Business name ...</p>\n        </div>\n        <button item-end ion-button round class="edit-button" (click)="openEditProfilePage()">EDIT</button>\n\n        <!-- <button item-end class="" style=" padding: 5px;">EDIT</button> -->\n\n      </button>\n    </ion-card>\n      \n    <ion-card class="profile-card" >\n      <ion-list>\n        <button ion-item text-wrap (click)="openLanguagePage()">\n         \n            \n          <i class="fa fa-language" aria-hidden="true" item-start></i>\n          <div>\n            <!-- <svg width="38" height="38" viewBox="3 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M21.0559 12.0004H19.0559C18.7907 12.0004 18.5364 12.1057 18.3488 12.2933C18.1613 12.4808 18.0559 12.7352 18.0559 13.0004C18.0559 13.2656 18.1613 13.5199 18.3488 13.7075C18.5364 13.895 18.7907 14.0004 19.0559 14.0004V16.0004H17.8699C17.9887 15.6802 18.0513 15.3419 18.0549 15.0004C18.0549 14.34 17.837 13.6981 17.435 13.1742C17.0329 12.6503 16.4693 12.2736 15.8314 12.1027C15.1935 11.9318 14.5171 11.9761 13.907 12.2288C13.2968 12.4815 12.7872 12.9285 12.4569 13.5004C12.3902 13.6141 12.3467 13.74 12.3288 13.8706C12.311 14.0013 12.3191 14.1342 12.3528 14.2617C12.3865 14.3892 12.4451 14.5088 12.5252 14.6136C12.6054 14.7183 12.7054 14.8062 12.8196 14.8721C12.9338 14.9381 13.0599 14.9808 13.1907 14.9978C13.3215 15.0148 13.4544 15.0057 13.5816 14.9712C13.7089 14.9366 13.8281 14.8772 13.9323 14.7964C14.0365 14.7156 14.1238 14.615 14.1889 14.5004C14.2767 14.3484 14.4029 14.2221 14.5549 14.1344C14.707 14.0466 14.8794 14.0004 15.0549 14.0004C15.3202 14.0004 15.5745 14.1057 15.762 14.2933C15.9496 14.4808 16.0549 14.7352 16.0549 15.0004C16.0549 15.2656 15.9496 15.5199 15.762 15.7075C15.5745 15.895 15.3202 16.0004 15.0549 16.0004C14.7897 16.0004 14.5354 16.1057 14.3478 16.2933C14.1603 16.4808 14.0549 16.7352 14.0549 17.0004C14.0549 17.2656 14.1603 17.5199 14.3478 17.7075C14.5354 17.895 14.7897 18.0004 15.0549 18.0004C15.3202 18.0004 15.5745 18.1057 15.762 18.2933C15.9496 18.4808 16.0549 18.7352 16.0549 19.0004C16.0549 19.2656 15.9496 19.5199 15.762 19.7075C15.5745 19.895 15.3202 20.0004 15.0549 20.0004C14.8794 20.0004 14.707 19.9542 14.5549 19.8664C14.4029 19.7786 14.2767 19.6524 14.1889 19.5004C14.1238 19.3857 14.0365 19.2851 13.9323 19.2043C13.8281 19.1235 13.7089 19.0641 13.5816 19.0296C13.4544 18.995 13.3215 18.986 13.1907 19.003C13.0599 19.02 12.9338 19.0627 12.8196 19.1286C12.7054 19.1945 12.6054 19.2824 12.5252 19.3872C12.4451 19.492 12.3865 19.6115 12.3528 19.739C12.3191 19.8665 12.311 19.9994 12.3288 20.1301C12.3467 20.2608 12.3902 20.3866 12.4569 20.5004C12.7872 21.0723 13.2968 21.5192 13.907 21.7719C14.5171 22.0246 15.1935 22.0689 15.8314 21.898C16.4693 21.7271 17.0329 21.3505 17.435 20.8266C17.837 20.3027 18.0549 19.6607 18.0549 19.0004C18.0513 18.6589 17.9887 18.3206 17.8699 18.0004H19.0549V21.0004C19.0549 21.2656 19.1603 21.5199 19.3478 21.7075C19.5354 21.895 19.7897 22.0004 20.0549 22.0004C20.3202 22.0004 20.5745 21.895 20.762 21.7075C20.9496 21.5199 21.0549 21.2656 21.0549 21.0004V14.0004C21.3202 14.0004 21.5745 13.895 21.762 13.7075C21.9496 13.5199 22.0549 13.2656 22.0549 13.0004C22.0549 12.7352 21.9496 12.4808 21.762 12.2933C21.5745 12.1057 21.3202 12.0004 21.0549 12.0004H21.0559ZM9.08594 11.2434C9.11708 11.3716 9.17328 11.4923 9.2513 11.5987C9.32932 11.7051 9.42762 11.795 9.54053 11.8632C9.65344 11.9314 9.77874 11.9766 9.9092 11.9962C10.0397 12.0158 10.1727 12.0094 10.3007 11.9773C10.4286 11.9453 10.549 11.8882 10.6548 11.8094C10.7606 11.7306 10.8498 11.6317 10.9172 11.5183C10.9847 11.4049 11.029 11.2793 11.0476 11.1487C11.0663 11.0181 11.0589 10.8851 11.0259 10.7574L9.26893 3.72737C9.14603 3.23356 8.86145 2.79505 8.46051 2.48167C8.05957 2.16829 7.56532 1.99805 7.05643 1.99805C6.54755 1.99805 6.0533 2.16829 5.65236 2.48167C5.25142 2.79505 4.96684 3.23356 4.84393 3.72737L3.08593 10.7574C3.05296 10.8851 3.04559 11.0181 3.06425 11.1487C3.0829 11.2793 3.12721 11.4049 3.19463 11.5183C3.26204 11.6317 3.35123 11.7306 3.45705 11.8094C3.56286 11.8882 3.68322 11.9453 3.81119 11.9773C3.93916 12.0094 4.07221 12.0158 4.20267 11.9962C4.33313 11.9766 4.45843 11.9314 4.57134 11.8632C4.68425 11.795 4.78255 11.7051 4.86057 11.5987C4.93859 11.4923 4.99479 11.3716 5.02593 11.2434L5.58493 9.00037H8.52493L9.08594 11.2434ZM6.08593 7.00037L6.78293 4.21337C6.80396 4.15798 6.84133 4.1103 6.89009 4.07665C6.93885 4.043 6.99669 4.02498 7.05593 4.02498C7.11518 4.02498 7.17302 4.043 7.22178 4.07665C7.27054 4.1103 7.30791 4.15798 7.32893 4.21337L8.02593 7.00037H6.08593ZM14.0559 7.00037H15.0559C15.3211 7.00064 15.5753 7.10608 15.7627 7.29356C15.9502 7.48104 16.0557 7.73524 16.0559 8.00037V9.00037C16.0559 9.26559 16.1613 9.51994 16.3488 9.70748C16.5364 9.89501 16.7907 10.0004 17.0559 10.0004C17.3212 10.0004 17.5755 9.89501 17.763 9.70748C17.9506 9.51994 18.0559 9.26559 18.0559 9.00037V8.00037C18.0551 7.20497 17.7388 6.44236 17.1764 5.87993C16.6139 5.31749 15.8513 5.00117 15.0559 5.00037H14.0559C13.7907 5.00037 13.5364 5.10573 13.3488 5.29326C13.1613 5.4808 13.0559 5.73515 13.0559 6.00037C13.0559 6.26559 13.1613 6.51994 13.3488 6.70748C13.5364 6.89501 13.7907 7.00037 14.0559 7.00037ZM10.0559 16.0004H9.05593C8.7908 16.0001 8.5366 15.8947 8.34912 15.7072C8.16164 15.5197 8.0562 15.2655 8.05593 15.0004V14.0004C8.05593 13.7352 7.95058 13.4808 7.76304 13.2933C7.57551 13.1057 7.32115 13.0004 7.05593 13.0004C6.79072 13.0004 6.53636 13.1057 6.34883 13.2933C6.16129 13.4808 6.05593 13.7352 6.05593 14.0004V15.0004C6.05673 15.7958 6.37305 16.5584 6.93549 17.1208C7.49793 17.6833 8.26053 17.9996 9.05593 18.0004H10.0559C10.3212 18.0004 10.5755 17.895 10.763 17.7075C10.9506 17.5199 11.0559 17.2656 11.0559 17.0004C11.0559 16.7352 10.9506 16.4808 10.763 16.2933C10.5755 16.1057 10.3212 16.0004 10.0559 16.0004Z" fill="#1979C1"/>\n              </svg> -->\n            <h6>LANGUAGE</h6>\n            <p>CHOOSE YOUR DESIRED LANGUAGE</p>\n          </div>\n          <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n\n        </button>\n    \n        <button ion-item text-wrap (click)="openSecurityAndBackup()">\n          <i class="fa fa-lock" aria-hidden="true" item-start></i>\n          <div>\n            <h6>PIN CHANGE</h6>\n            <p>SECURE YOUR APP WITH PIN</p>\n          </div>        \n          <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n\n        </button>\n    \n        <button ion-item text-wrap (click)="openAddNewBankPage()">\n          <i class="fa fa-university" aria-hidden="true" item-start></i>\n          <div>\n            <h6>BANK DETAILS</h6>\n            <p>SHARE YOUR BANK/UPI DETAILS TO REQUEST FASTER PAYMENTS</p>\n          </div>        \n          <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n        </button>\n  \n    \n      </ion-list>\n    </ion-card>\n\n    <ion-card class="profile-card"  (click)="openSettingsPage()" >\n      <button ion-item>\n        <i class="fa fa-cog" aria-hidden="true" item-start></i>\n        <div>\n          <h6>SETTINGS</h6>\n          <p>MANAGE THE APP SETTINGS</p>\n        </div>        \n        <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n\n      </button>\n    </ion-card>\n\n    <!-- <ion-card class="profile-card">\n      <button ion-item>\n        <i class="fa fa-sign-out" aria-hidden="true" item-start></i>\n        <div>\n          <h6>LOGOUT</h6>\n        </div>        \n        <ion-icon item-end name="ios-arrow-round-forward"></ion-icon>\n\n      </button>\n    </ion-card> -->\n\n  </div>\n</ion-content> \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=24.js.map