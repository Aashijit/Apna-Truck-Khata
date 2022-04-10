webpackJsonp([68],{

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllDriverReportPageModule", function() { return AllDriverReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_driver_report__ = __webpack_require__(937);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllDriverReportPageModule = /** @class */ (function () {
    function AllDriverReportPageModule() {
    }
    AllDriverReportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_driver_report__["a" /* AllDriverReportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__all_driver_report__["a" /* AllDriverReportPage */]),
            ],
        })
    ], AllDriverReportPageModule);
    return AllDriverReportPageModule;
}());

//# sourceMappingURL=all-driver-report.module.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllDriverReportPage; });
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




var AllDriverReportPage = /** @class */ (function () {
    function AllDriverReportPage(navCtrl, navParams, rest, codes, modalCtrl, viewCont, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.modalCtrl = modalCtrl;
        this.viewCont = viewCont;
        this.zone = zone;
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
        this.srth_id = '';
        this.month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.monthDays = [31, 27, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.yearFrom = 1900;
        this.currentYear = null;
        this.currentMonth = 0;
        this.allYears = [];
        this.selectedMonth = 0;
        this.apiendpoint = '';
        this.downloadendpoint = '';
        this.isfullreport = true;
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
        if (this.navParams.get("isfullreport") != null || this.navParams.get("isfullreport") != undefined) {
            this.isfullreport = this.navParams.get("isfullreport");
        }
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        this.srth_id = json[0]['srth_id'];
        var currentDate = new Date();
        this.currentMonth = this.month[currentDate.getMonth()];
        this.currentYear = currentDate.getFullYear();
        for (var i = this.currentYear; i >= this.yearFrom; i--) {
            this.allYears.push(i);
        }
    }
    AllDriverReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportFullPage');
        if (this.navParams.get('worker_type') == 'driver') {
            this.getDrivers();
        }
        else {
            this.getPersons();
        }
    };
    AllDriverReportPage.prototype.getDrivers = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                var data = resp['data'];
                for (var i = 0; i < data.length; i++) {
                    if (data[i]['worker_type'] == 'driver')
                        _this.shops.push(data[i]);
                }
            }
        });
    };
    AllDriverReportPage.prototype.getPersons = function () {
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
    AllDriverReportPage.prototype.openCalendar = function () {
        this.displayCalendar = true;
    };
    AllDriverReportPage.prototype.generateReport = function () {
        var _this = this;
        this.displayCalendar = false;
        if (this.worker_id == 0)
            this.worker_id = null;
        var data = {};
        if (this.isfullreport) {
            data = {
                "worker_id": this.worker_id,
                "date_from": this.dateRange['from'],
                "date_to": this.dateRange['to'],
                "srth_id": this.srth_id
            };
        }
        else {
            data = {
                "worker_id": this.worker_id,
                "srth_id": this.srth_id,
                "date_from": this.currentYear + "-" + this.getMonthIndex(this.currentMonth) + "-1",
                "date_to": this.currentYear + "-" + this.getMonthIndex(this.currentMonth) + "-" + this.monthDays[this.getMonthIndex(this.currentMonth) - 1]
            };
        }
        this.rest.post(this.codes.ALL_DRIVER_REPORT, data).then(function (resp) {
            console.log(resp);
            document.getElementById("report").innerHTML = resp['data'];
            _this.zone.run(function () {
                console.log("screen refreshed");
            });
            // this.html = resp['data'];
        });
        this.downloadURL = this.codes.ALL_DRIVER_REPORT_DOWNLOAD + "?worker_id=" + this.worker_id + "&date_from=" + this.dateRange['from'] + "&date_to=" + this.dateRange['to'] + "&srth_id=" + this.srth_id;
    };
    AllDriverReportPage.prototype.getMonthIndex = function (monthString) {
        for (var i = 0; i < this.month.length; i++) {
            if (this.month[i] == monthString)
                return (i + 1);
        }
        return 0;
    };
    AllDriverReportPage.prototype.dismiss = function () {
        this.viewCont.dismiss();
    };
    AllDriverReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-all-driver-report',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/all-driver-report/all-driver-report.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title *ngIf="isfullreport">        \n          ALL DRIVER REPORT \n        </ion-title>\n        <ion-title *ngIf="!isfullreport">        \n          MONTHLY REPORT          \n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube text-right" (click)="dismiss()">\n        <ion-icon name="close" color="light" style="margin-top: 11px;font-size:2.2rem;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row >\n    <ion-col col-12>\n      <ion-item>\n        <ion-label floating>\n          Person\n        </ion-label>\n        <ion-select interface="popover" [(ngModel)]="worker_id">\n          <ion-option value="0">All</ion-option>\n          <ion-option value="{{shop[\'worker_id\']}}" *ngFor="let shop of shops">\n            {{shop[\'name\'] + " -  " + shop[\'worker_type\'] }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n\n\n<p style="text-align: center !important;">\n  <button round class="custom-button" ion-button (click)="generateReport()">Report</button>\n</p>\n\n\n<div id="report">\n\n</div>\n\n<p style="text-align: center;">\n  <a [href]="downloadURL">Download Report</a>\n </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/all-driver-report/all-driver-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"]])
    ], AllDriverReportPage);
    return AllDriverReportPage;
}());

//# sourceMappingURL=all-driver-report.js.map

/***/ })

});
//# sourceMappingURL=68.js.map