webpackJsonp([20],{

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFullPageModule", function() { return ReportFullPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_full__ = __webpack_require__(976);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportFullPageModule = /** @class */ (function () {
    function ReportFullPageModule() {
    }
    ReportFullPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__report_full__["a" /* ReportFullPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__report_full__["a" /* ReportFullPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__["CalendarModule"]
            ],
        })
    ], ReportFullPageModule);
    return ReportFullPageModule;
}());

//# sourceMappingURL=report-full.module.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFullPage; });
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




var ReportFullPage = /** @class */ (function () {
    function ReportFullPage(navCtrl, navParams, rest, codes, modalCtrl, viewCont) {
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
        if (this.navParams.get("person") != null || this.navParams.get("person") != undefined) {
            this.worker_id = this.navParams.get("person")['worker_id'];
        }
    }
    ReportFullPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportFullPage');
        this.getPersons();
    };
    ReportFullPage.prototype.getPersons = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.shops = resp['data'];
            }
        });
    };
    ReportFullPage.prototype.openCalendar = function () {
        this.displayCalendar = true;
    };
    ReportFullPage.prototype.generateReport = function () {
        var _this = this;
        this.displayCalendar = false;
        if (this.worker_id == 0)
            this.worker_id = null;
        var data = {
            "worker_id": this.worker_id,
            "date_from": this.dateRange['from'],
            "date_to": this.dateRange['to']
        };
        this.rest.post(this.codes.FULL_REPORT, data).then(function (resp) {
            console.log(resp);
            document.getElementById("report").innerHTML = resp['data'];
            _this.html = resp['data'];
        });
        this.downloadURL = this.codes.FULL_REPORT_DOWNLOAD + "?worker_id=" + this.worker_id + "&date_from=" + this.dateRange['from'] + "&date_to=" + this.dateRange['to'];
    };
    ReportFullPage.prototype.dismiss = function () {
        this.viewCont.dismiss();
    };
    ReportFullPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-report-full',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/report-full/report-full.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <!-- <ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon> -->\n          FULL REPORT\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube text-right" (click)="dismiss()">\n        <ion-icon name="close" color="light" style="margin-top: 11px;font-size:2.2rem;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n      <ion-item>\n        <ion-label floating>\n          Person\n        </ion-label>\n        <ion-select interface="popover" [(ngModel)]="worker_id">\n          <ion-option value="0">All</ion-option>\n          <ion-option value="{{shop[\'worker_id\']}}" *ngFor="let shop of shops">\n            {{shop[\'name\'] + " -  " + shop[\'worker_type\'] }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-11 >\n      <ion-item style="margin-top: 24px;">\n        <ion-label>\n          Date Range : <span *ngIf="this.dateRange[\'from\'] != undefined"> {{this.dateRange[\'from\'] + " - " + this.dateRange[\'to\']}} </span>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1>\n      <ion-icon name="calendar" (click)="openCalendar()" style="position: absolute; top: 45px;"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-calendar *ngIf="displayCalendar" [(ngModel)]="dateRange"\n              [options]="optionsMulti"\n              type="string"\n              [format]="\'YYYY-MM-DD\'">\n  </ion-calendar>\n\n<p style="text-align: center !important;">\n  <button round class="custom-button" ion-button (click)="generateReport()">Report</button>\n</p>\n\n\n<div id="report">\n\n</div>\n\n<p style="text-align: center;">\n  <a [href]="downloadURL">Download Report</a>\n </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/report-full/report-full.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"]])
    ], ReportFullPage);
    return ReportFullPage;
}());

//# sourceMappingURL=report-full.js.map

/***/ })

});
//# sourceMappingURL=20.js.map