webpackJsonp([77],{

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_0__about__["a" /* AboutPage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/about/about.html"*/'\n\n\n\n\n\n<!-- Document -->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-3 class="custom-back-button">\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n      </ion-col>\n      \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-file-o" aria-hidden="true"></i>\n          DOCUMENT\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img width="50px" src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png">\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container document">\n\n    <ion-row>\n      <ion-col col-12 class="profile-picture">\n        <img width="120px" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="">\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="profile-details">\n      <ion-col col-6>\n        NAME: <span class="text-color-primary">AGENT</span>\n      </ion-col>\n      <ion-col col-6>\n        PHONE: <span class="text-color-primary">45434234235235</span>\n      </ion-col>\n      <ion-col col-6>\n        STATUS: <span  class="text-color-primary">DOCUMENT</span>\n      </ion-col>\n      <ion-col col-6>\n        LOCATION: <span class="text-color-primary">KOLKATA</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="report-statement">\n      <ion-col col-6>\n        <div class="full-report-statement">\n          <i class="fa fa-file-o" aria-hidden="true"></i>\n\n          FULL REPORT\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="monthy-statement">\n          <i class="fa fa-file" aria-hidden="true"></i>\n\n          MONTHY STATEMENT\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="bill">\n      <ion-col col-4>\n        TOTAL BILL\n        <div class="ammount">40.00</div>\n      </ion-col>\n      <ion-col col-4>\n        PAID MONEY\n        <div class="ammount">10.00</div>\n      </ion-col>\n      <ion-col col-4>\n        DUE MONEY\n        <div class="ammount due">30.00</div>\n      </ion-col>\n    </ion-row>\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n    <div class="bill-details">\n      <div>\n        BILL/PAYMENT NUMBER\n      </div>\n      <div>\n        DATE OF BILL/PAYMENT\n      </div>\n      <div>\n        VEHICLE NUMBER(S)\n      </div>\n      <div>\n        BILL/PAID MONEY\n      </div>\n      <div>\n        DETAILS\n      </div>\n    </div>\n    <div class="bill-details-description">\n      <i class="fa fa-angle-down" aria-hidden="true" style=""></i>\n\n    </div>\n\n    <div class="give-money">\n      <button>\n        GIVE MONEY\n      </button>\n    </div>\n\n\n  </div>\n</ion-content>  -->\n\n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=77.js.map