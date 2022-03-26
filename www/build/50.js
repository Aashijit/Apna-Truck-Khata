webpackJsonp([50],{

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDateReportPageModule", function() { return DocumentDateReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_date_report__ = __webpack_require__(955);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentDateReportPageModule = /** @class */ (function () {
    function DocumentDateReportPageModule() {
    }
    DocumentDateReportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__document_date_report__["a" /* DocumentDateReportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__document_date_report__["a" /* DocumentDateReportPage */]),
            ],
        })
    ], DocumentDateReportPageModule);
    return DocumentDateReportPageModule;
}());

//# sourceMappingURL=document-date-report.module.js.map

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentDateReportPage; });
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




var DocumentDateReportPage = /** @class */ (function () {
    function DocumentDateReportPage(navCtrl, navParams, rest, codes, modalCtrl, viewCont) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.modalCtrl = modalCtrl;
        this.viewCont = viewCont;
        this.shops = [];
        this.vehicles = [];
        this.html = '';
        this.vehicle_id = '';
        this.from_date = '';
        this.to_date = '';
        this.worker_id = '';
        this.dt = new Date(2000, 1, 1);
        this.displayCalendar = false;
        this.dateRange = { from: '', to: '' };
        this.downloadURL = '';
        this.apiendpoint = '';
        this.downloadendpoint = '';
        this.optionsMulti = {
            pickMode: 'range',
            from: this.dt,
            to: 0,
            showMonthPicker: true,
            showToggleButtons: true,
            color: 'primary'
        };
    }
    DocumentDateReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentBillReportPage');
    };
    DocumentDateReportPage.prototype.generateReport = function () {
        var _this = this;
        this.displayCalendar = false;
        if (this.worker_id == 0)
            this.worker_id = null;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "date_from": this.dateRange['from'],
            "date_to": this.dateRange['to'],
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.DOCUMENT_DATE_REPORT, data).then(function (resp) {
            console.log(resp);
            document.getElementById("report").innerHTML = resp['data'];
            _this.html = resp['data'];
        });
        this.downloadURL = this.codes.DOCUMENT_DATE_REPORT_DOWNLOAD + "?worker_id=" + this.worker_id + "&date_from=" + this.dateRange['from'] + "&date_to=" + this.dateRange['to'];
    };
    DocumentDateReportPage.prototype.dismiss = function () {
        this.viewCont.dismiss();
    };
    DocumentDateReportPage.prototype.openCalendar = function () {
        this.displayCalendar = true;
    };
    DocumentDateReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-document-date-report',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/document-date-report/document-date-report.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <!-- <ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon> -->\n          DOCUMENT DATE REPORT\n        </ion-title>\n\n      </ion-col>\n      <!-- <ion-col col-3 class="youtube text-right" (click)="dismiss()">\n        <ion-icon name="close" color="light" style="margin-top: 11px;font-size:2.2rem;"></ion-icon>\n      </ion-col> -->\n    </ion-row>\n  </ion-navbar>\n</ion-header> \n\n<ion-content padding>\n \n<p style="text-align: center !important;">\n<button round class="custom-button" ion-button (click)="generateReport()">Report</button>\n</p>\n\n\n<div class="zoom" style="margin-top:5%" id="report">\n\n</div>\n\n\n<p style="text-align: center;margin-top:20%">\n<a [href]="downloadURL">Download Report</a>\n</p>\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/document-date-report/document-date-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"]])
    ], DocumentDateReportPage);
    return DocumentDateReportPage;
}());

//# sourceMappingURL=document-date-report.js.map

/***/ })

});
//# sourceMappingURL=50.js.map