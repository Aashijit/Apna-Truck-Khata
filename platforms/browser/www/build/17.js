webpackJsonp([17],{

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModalPageModule", function() { return ReportModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_modal__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportModalPageModule = /** @class */ (function () {
    function ReportModalPageModule() {
    }
    ReportModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_modal__["a" /* ReportModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__report_modal__["a" /* ReportModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModule"]
            ]
        })
    ], ReportModalPageModule);
    return ReportModalPageModule;
}());

//# sourceMappingURL=report-modal.module.js.map

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportModalPage; });
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




var ReportModalPage = /** @class */ (function () {
    function ReportModalPage(navCtrl, navParams, rest, codes, modalCtrl, viewCont) {
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
        this.reporttype = '';
        // type: 'object'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
        this.optionsMulti = {
            pickMode: 'range',
            from: this.dt,
            to: 0,
            showMonthPicker: true,
            showToggleButtons: true,
            color: 'primary'
        };
        this.reporttype = this.navParams.get("name");
        if (this.reporttype == 'shopbuyreport') {
            this.apiendpoint = this.codes.SHOP_BUY_REPORT;
            this.downloadendpoint = this.codes.SHOP_BUY_REPORT_DOWNLOAD;
            this.getShops();
        }
        else if (this.reporttype == 'shopbillreport') {
            this.apiendpoint = this.codes.SHOP_BILL_REPORT;
            this.downloadendpoint = this.codes.SHOP_BILL_REPORT_DOWNLOAD;
            this.getShops();
        }
        else if (this.reporttype == 'mechanicbuyreport') {
            this.apiendpoint = this.codes.MECHANIC_BUY_REPORT;
            this.downloadendpoint = this.codes.MECHANIC_BUY_REPORT_DOWNLOAD;
            this.getMechanic();
        }
        else if (this.reporttype == 'mechanicbillreport') {
            this.apiendpoint = this.codes.MECHANIC_BILL_REPORT;
            this.downloadendpoint = this.codes.MECHANIC_BILL_REPORT_DOWNLOAD;
            this.getMechanic();
        }
        this.getVehicles();
    }
    ReportModalPage.prototype.dismiss = function () {
        this.viewCont.dismiss();
    };
    ReportModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportModalPage');
    };
    ReportModalPage.prototype.openCalendar = function () {
        this.displayCalendar = true;
    };
    ReportModalPage.prototype.generateReport = function () {
        var _this = this;
        this.displayCalendar = false;
        if (this.reporttype == 'shopbuyreport' || this.reporttype == 'shopbillreport') {
            if (this.worker_id == 0)
                this.worker_id = null;
            if (this.vehicle_id == 0)
                this.vehicle_id = null;
            var data = {
                "worker_id": this.worker_id,
                "vehicle_id": this.vehicle_id,
                "date_from": this.dateRange['from'],
                "date_to": this.dateRange['to']
            };
            this.rest.post(this.apiendpoint, data).then(function (resp) {
                console.log(resp);
                document.getElementById("report").innerHTML = resp['data'];
                _this.html = resp['data'];
            });
            this.downloadURL = this.downloadendpoint + "?worker_id=" + this.worker_id + "&vehicle_id=" + this.vehicle_id + "&date_from=" + this.dateRange['from'] + "&date_to=" + this.dateRange['to'];
        }
        else if (this.reporttype == 'mechanicbuyreport' || this.reporttype == 'mechanicbillreport') {
            if (this.worker_id == 0)
                this.worker_id = null;
            if (this.vehicle_id == 0)
                this.vehicle_id = null;
            var data = {
                "worker_id": this.worker_id,
                "vehicle_id": this.vehicle_id,
                "date_from": this.dateRange['from'],
                "date_to": this.dateRange['to']
            };
            this.rest.post(this.apiendpoint, data).then(function (resp) {
                console.log(resp);
                document.getElementById("report").innerHTML = resp['data'];
                _this.html = resp['data'];
            });
            this.downloadURL = this.downloadendpoint + "?worker_id=" + this.worker_id + "&vehicle_id=" + this.vehicle_id + "&date_from=" + this.dateRange['from'] + "&date_to=" + this.dateRange['to'];
        }
    };
    ReportModalPage.prototype.getShops = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                var dt = resp['data'];
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i]['worker_type'] == 'shop') {
                        _this.shops.push(dt[i]);
                    }
                }
            }
        });
    };
    ReportModalPage.prototype.getMechanic = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                var dt = resp['data'];
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i]['worker_type'] == 'mechanic') {
                        _this.shops.push(dt[i]);
                    }
                }
            }
        });
    };
    ReportModalPage.prototype.getVehicles = function () {
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
    ReportModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-report-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/report-modal/report-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <!-- <ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon> -->\n          REPORTS\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube text-right" (click)="dismiss()">\n        <ion-icon name="close" color="light" style="margin-top: 11px;font-size:2.2rem;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-6>\n      <ion-item>\n        <ion-label floating>\n          <span *ngIf="reporttype==\'shopbuyreport\' || reporttype == \'shopbillreport\'">\n            Shop\n          </span>\n          <span *ngIf="reporttype==\'mechanicbuyreport\' || reporttype == \'mechanicbillreport\'">\n            Mechanic\n          </span>\n        </ion-label>\n        <ion-select interface="popover" [(ngModel)]="worker_id">\n          <ion-option value="0">All</ion-option>\n          <ion-option value="{{shop[\'worker_id\']}}" *ngFor="let shop of shops">\n            {{shop[\'name\']}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6>\n      <ion-item>\n        <ion-label floating>\n          Vehicles\n        </ion-label>\n        <ion-select interface="popover" [(ngModel)]="vehicle_id">\n          <ion-option value="0">All</ion-option>\n          <ion-option value="{{vh[\'vehicle_id\']}}" *ngFor="let vh of vehicles">\n            {{vh[\'vehicle_number\']}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-11 >\n      <ion-item style="margin-top: 24px;">\n        <ion-label>\n          Date Range : <span *ngIf="this.dateRange[\'from\'] != undefined"> {{this.dateRange[\'from\'] + " - " + this.dateRange[\'to\']}} </span>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1>\n      <ion-icon name="calendar" (click)="openCalendar()" style="position: absolute; top: 45px;"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-calendar *ngIf="displayCalendar" [(ngModel)]="dateRange"\n              [options]="optionsMulti"\n              type="string"\n              [format]="\'YYYY-MM-DD\'">\n  </ion-calendar>\n\n<p style="text-align: center !important;">\n  <button round class="custom-button" ion-button (click)="generateReport()">Report</button>\n</p>\n\n\n<div id="report">\n\n</div>\n\n<p style="text-align: center;">\n <a [href]="downloadURL">Download Report</a>\n</p>\n\n  <!-- <ion-card>\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label floating>\n          Shop\n        </ion-label>\n        <ion-select>\n          <ion-option value="{{shop[\'worker_id\']}}" *ngFor="let shop of shops">\n            {{shop[\'name\']}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>\n          Vehicles\n        </ion-label>\n        <ion-select>\n          <ion-option value="{{vh[\'vehicle_id\']}}" *ngFor="let vh of vehicles">\n            {{vh[\'vehicle_number\']}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n\n\n      <button ion-button (click)="generateReport()">\n        Generate Report\n      </button>\n\n\n      <a href="https://manpuriaproducts.org/SaarthiReport/public/accountkhatareport">\n        Download Pdf\n      </a>\n\n    </ion-card-content>\n  </ion-card> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/report-modal/report-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"]])
    ], ReportModalPage);
    return ReportModalPage;
}());

//# sourceMappingURL=report-modal.js.map

/***/ })

});
//# sourceMappingURL=17.js.map