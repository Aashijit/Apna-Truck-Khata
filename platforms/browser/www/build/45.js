webpackJsonp([45],{

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverExpensePageModule", function() { return DriverExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_expense__ = __webpack_require__(960);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DriverExpensePageModule = /** @class */ (function () {
    function DriverExpensePageModule() {
    }
    DriverExpensePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__driver_expense__["a" /* DriverExpensePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__driver_expense__["a" /* DriverExpensePage */]),
                __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__["CalendarModule"]
            ],
        })
    ], DriverExpensePageModule);
    return DriverExpensePageModule;
}());

//# sourceMappingURL=driver-expense.module.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverExpensePage; });
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




var DriverExpensePage = /** @class */ (function () {
    function DriverExpensePage(navCtrl, navParams, rest, codes, modalCtrl, viewCont, zone) {
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
    DriverExpensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportFullPage');
        if (this.navParams.get('worker_type') == 'driver') {
            this.getDrivers();
        }
        else {
            this.getPersons();
        }
    };
    DriverExpensePage.prototype.getDrivers = function () {
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
    DriverExpensePage.prototype.getPersons = function () {
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
    DriverExpensePage.prototype.openCalendar = function () {
        this.displayCalendar = true;
    };
    DriverExpensePage.prototype.generateReport = function () {
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
        this.rest.post(this.codes.DRIVER_EXPENSE_REPORT, data).then(function (resp) {
            console.log(resp);
            document.getElementById("report").innerHTML = resp['data'];
            _this.zone.run(function () {
                console.log("screen refreshed");
            });
            // this.html = resp['data'];
        });
        this.downloadURL = this.codes.DRIVER_EXPENSE_REPORT_DOWNLOAD + "?worker_id=" + this.worker_id + "&date_from=" + this.dateRange['from'] + "&date_to=" + this.dateRange['to'];
    };
    DriverExpensePage.prototype.getMonthIndex = function (monthString) {
        for (var i = 0; i < this.month.length; i++) {
            if (this.month[i] == monthString)
                return (i + 1);
        }
        return 0;
    };
    DriverExpensePage.prototype.dismiss = function () {
        this.viewCont.dismiss();
    };
    DriverExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-driver-expense',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver-expense/driver-expense.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title *ngIf="isfullreport">        \n          DRIVER EXPENSE REPORT \n        </ion-title>\n        <ion-title *ngIf="!isfullreport">        \n          MONTHLY REPORT          \n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube text-right" (click)="dismiss()">\n        <ion-icon name="close" color="light" style="margin-top: 11px;font-size:2.2rem;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row >\n    <ion-col col-12>\n      <ion-item>\n        <ion-label floating>\n          Person\n        </ion-label>\n        <ion-select interface="popover" [(ngModel)]="worker_id">\n          <ion-option value="0">All</ion-option>\n          <ion-option value="{{shop[\'worker_id\']}}" *ngFor="let shop of shops">\n            {{shop[\'name\'] + " -  " + shop[\'worker_type\'] }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-11 *ngIf="isfullreport">\n      <ion-item style="margin-top: 24px;">\n        <ion-label>\n          Date Range : <span *ngIf="this.dateRange[\'from\'] != undefined"> {{this.dateRange[\'from\'] + " - " + this.dateRange[\'to\']}} </span>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1 *ngIf="isfullreport">\n      <ion-icon name="calendar" (click)="openCalendar()" style="position: absolute; top: 45px;"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-calendar *ngIf="displayCalendar" [(ngModel)]="dateRange"\n              [options]="optionsMulti"\n              type="string"\n              [format]="\'YYYY-MM-DD\'">\n  </ion-calendar>\n\n  <ion-item *ngIf="!isfullreport">\n    <ion-label>Month</ion-label>\n    <ion-select interface="popover" [(ngModel)]="currentMonth">\n      <ion-option *ngFor="let m of month; let i" value="{{i}}">{{m}}</ion-option>\n    </ion-select>\n    <ion-select interface="popover" [(ngModel)]="currentYear">\n      <ion-option *ngFor="let years of allYears" value="{{years}}">{{years}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n\n<p style="text-align: center !important;">\n  <button round class="custom-button" ion-button (click)="generateReport()">Report</button>\n</p>\n\n\n<div id="report">\n\n</div>\n\n<p style="text-align: center;">\n  <a [href]="downloadURL">Download Report</a>\n </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver-expense/driver-expense.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"]])
    ], DriverExpensePage);
    return DriverExpensePage;
}());

//# sourceMappingURL=driver-expense.js.map

/***/ })

});
//# sourceMappingURL=45.js.map