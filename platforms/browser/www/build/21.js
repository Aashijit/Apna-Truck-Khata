webpackJsonp([21],{

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportAllCompPageModule", function() { return ReportAllCompPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_all_comp__ = __webpack_require__(978);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportAllCompPageModule = /** @class */ (function () {
    function ReportAllCompPageModule() {
    }
    ReportAllCompPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_all_comp__["a" /* ReportAllCompPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__report_all_comp__["a" /* ReportAllCompPage */]),
            ],
        })
    ], ReportAllCompPageModule);
    return ReportAllCompPageModule;
}());

//# sourceMappingURL=report-all-comp.module.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAllCompPage; });
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




var ReportAllCompPage = /** @class */ (function () {
    function ReportAllCompPage(navCtrl, navParams, rest, codes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.type = '';
        this.object = '';
        this.vehicles = [];
        this.persons = [];
    }
    ReportAllCompPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportAllCompPage');
        this.getVehicles();
        this.getPersons();
    };
    ReportAllCompPage.prototype.getVehicles = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "vehicle_owner_srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.vehicles = resp['data'];
            }
        });
    };
    // (click)="navCtrl.push('ReportFullPage',{'person':this.driver})"
    ReportAllCompPage.prototype.getPersons = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.persons = resp['data'];
            }
        });
    };
    ReportAllCompPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-report-all-comp',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/report-all-comp/report-all-comp.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-1 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-8 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          REPORTS\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Vehicle Reports</h2>\n  <p *ngFor="let veh of vehicles">\n  <button ion-button full (click)="navCtrl.push(\'VehicleWorkReportPage\',{\'vehicle\':veh})">Vehicle Work Report : {{veh[\'vehicle_number\']}}</button>\n  <button ion-button full (click)="navCtrl.push(\'VehicleBillReportPage\',{\'vehicle\':veh})">Vehicle Bill Report : {{veh[\'vehicle_number\']}}</button>\n  </p>  \n  <hr/>\n\n  <h2>Person Reports</h2>\n  <p *ngFor="let per of persons">\n  <button ion-button full (click)="navCtrl.push(\'ReportFullPage\',{\'person\':per})">Report : {{per[\'name\']+" ~ "+per[\'worker_type\']}}</button>\n  </p>  \n  <hr/>\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/report-all-comp/report-all-comp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */]])
    ], ReportAllCompPage);
    return ReportAllCompPage;
}());

//# sourceMappingURL=report-all-comp.js.map

/***/ })

});
//# sourceMappingURL=21.js.map