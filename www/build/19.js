webpackJsonp([19],{

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportKhataPageModule", function() { return ReportKhataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_khata__ = __webpack_require__(987);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportKhataPageModule = /** @class */ (function () {
    function ReportKhataPageModule() {
    }
    ReportKhataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_khata__["a" /* ReportKhataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__report_khata__["a" /* ReportKhataPage */]),
            ],
        })
    ], ReportKhataPageModule);
    return ReportKhataPageModule;
}());

//# sourceMappingURL=report-khata.module.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportKhataPage; });
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


var ReportKhataPage = /** @class */ (function () {
    function ReportKhataPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportKhataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportKhataPage');
    };
    ReportKhataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report-khata',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/report-khata/report-khata.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-file-image-o" aria-hidden="true"></i>\n          REPORT KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="report">\n\n  <div class="container">\n    <ion-row>\n      <ion-col col-6 class="text-center" (click)="navCtrl.push(\'ReportAllCompPage\',{\'worker_type\':\'vehicle\'})">\n        <div class="report-div">\n          <img src="../../assets/saarthi-icon/png/006-delivery-truck.png" alt="">\n          <h4>VEHICLE</h4>\n        </div>\n       \n      </ion-col>\n      <ion-col col-6 class="text-center" (click)="navCtrl.push(\'ReportAllCompPage\',{\'worker_type\':\'driver\'})">\n        <div class="report-div">\n          <img src="../../assets/saarthi-icon/png/driver.png" alt="">\n          <h4>DRIVER</h4>\n        </div>\n    \n      </ion-col>\n      <ion-col col-6 class="text-center" (click)="navCtrl.push(\'ReportAllCompPage\',{\'worker_type\':\'shop\'})">\n        <div class="report-div">\n          <img src="../../assets/saarthi-icon/png//004-shop.png" alt="">\n          <h4>SHOP</h4>\n        </div>\n    \n      </ion-col>\n      <ion-col col-6 class="text-center" (click)="navCtrl.push(\'ReportAllCompPage\',{\'worker_type\':\'mechanic\'})">\n        <div class="report-div">\n          <img src="../../assets/saarthi-icon/png/007-mechanic.png" alt="">\n          <h4>MECHANIC</h4>\n        </div>\n      \n      </ion-col>\n      <ion-col col-6 class="text-center" (click)="navCtrl.push(\'ReportAllCompPage\',{\'worker_type\':\'documents\'})">\n        <div class="report-div">\n          <img src="../../assets/saarthi-icon/png/002-folder.png" alt="">\n          <h4>DOCUMENTS</h4>\n        </div>\n       \n      </ion-col>\n      <ion-col col-6 class="text-center" (click)="navCtrl.push(\'ReportAllCompPage\',{\'worker_type\':\'insurance\'})">\n        <div class="report-div">\n          <img src="../../assets/saarthi-icon/png/002-folder.png" alt="">\n          <h4>INSURANCE</h4>\n        </div>\n      \n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/report-khata/report-khata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ReportKhataPage);
    return ReportKhataPage;
}());

//# sourceMappingURL=report-khata.js.map

/***/ })

});
//# sourceMappingURL=19.js.map