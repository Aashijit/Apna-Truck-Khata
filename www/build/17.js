webpackJsonp([17],{

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityAndBackupPageModule", function() { return SecurityAndBackupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_and_backup__ = __webpack_require__(976);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SecurityAndBackupPageModule = /** @class */ (function () {
    function SecurityAndBackupPageModule() {
    }
    SecurityAndBackupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__security_and_backup__["a" /* SecurityAndBackupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__security_and_backup__["a" /* SecurityAndBackupPage */]),
            ],
        })
    ], SecurityAndBackupPageModule);
    return SecurityAndBackupPageModule;
}());

//# sourceMappingURL=security-and-backup.module.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityAndBackupPage; });
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
 * Generated class for the SecurityAndBackupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecurityAndBackupPage = /** @class */ (function () {
    function SecurityAndBackupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SecurityAndBackupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SecurityAndBackupPage');
    };
    SecurityAndBackupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-security-and-backup',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/security-and-backup/security-and-backup.html"*/'<!--\n  Generated template for the SecurityAndBackupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- Security and Backup -->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <!-- <ion-col col-2 class="custom-back-button"> -->\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      <!-- </ion-col> -->\n      \n      <ion-col col-9 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-lock" aria-hidden="true"></i>\n          SECURITY AND BACKUP\n        </ion-title>\n\n      </ion-col>\n      <!-- <ion-col col-1></ion-col> -->\n      <ion-col col-2 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-list class="security-details">\n\n      <!-- <ion-item>\n        <ion-input type="text" placeholder="4 DIGIT CURRENT PIN CODE"></ion-input>\n      </ion-item> -->\n\n      <div class="label-float" >\n        <input type="text"  placeholder=" " />\n        <label>4 DIGIT CURRENT PIN CODE</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n  \n      </div>\n\n      <div class="label-float" >\n        <input type="text"  placeholder=" " />\n        <label>4 DIGIT NEW PIN CODE</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n  \n      </div>\n  \n\n\n      <div class="text-center mt-4">\n        <button ion-button round class="custom-button" >CONFIRM</button>\n      </div>\n      \n      \n\n\n    \n    </ion-list>\n\n  </div>\n</ion-content> \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/security-and-backup/security-and-backup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SecurityAndBackupPage);
    return SecurityAndBackupPage;
}());

//# sourceMappingURL=security-and-backup.js.map

/***/ })

});
//# sourceMappingURL=17.js.map