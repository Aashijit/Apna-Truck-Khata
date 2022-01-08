webpackJsonp([4],{

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleWorkReportPageModule", function() { return VehicleWorkReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vehicle_work_report__ = __webpack_require__(992);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VehicleWorkReportPageModule = /** @class */ (function () {
    function VehicleWorkReportPageModule() {
    }
    VehicleWorkReportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__vehicle_work_report__["a" /* VehicleWorkReportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__vehicle_work_report__["a" /* VehicleWorkReportPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__["CalendarModule"]
            ],
        })
    ], VehicleWorkReportPageModule);
    return VehicleWorkReportPageModule;
}());

//# sourceMappingURL=vehicle-work-report.module.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleWorkReportPage; });
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




var VehicleWorkReportPage = /** @class */ (function () {
    function VehicleWorkReportPage(navCtrl, navParams, rest, codes, modalCtrl, viewCont) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.modalCtrl = modalCtrl;
        this.viewCont = viewCont;
        this.problem = '';
        this.problems = [];
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
        if (this.navParams.get("vehicle") != null || this.navParams.get("vehicle") != undefined) {
            this.vehicle_id = this.navParams.get("vehicle")['vehicle_id'];
        }
    }
    VehicleWorkReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehicleWorkReportPage');
    };
    VehicleWorkReportPage.prototype.ionViewWillEnter = function () {
        this.getrepair();
        this.getVehicles();
    };
    VehicleWorkReportPage.prototype.openCalendar = function () {
        this.displayCalendar = true;
    };
    VehicleWorkReportPage.prototype.getrepair = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_PROBLEM, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.problems = resp['data'];
                for (var i = 0; i < _this.problems.length; i++) {
                    _this.problems[i]['selected'] = false;
                }
            }
        });
    };
    VehicleWorkReportPage.prototype.getVehicles = function () {
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
    VehicleWorkReportPage.prototype.generateReport = function () {
        var _this = this;
        this.displayCalendar = false;
        if (this.vehicle_id == 0)
            this.vehicle_id = null;
        var data = {
            "vehicle_id": this.vehicle_id,
            "problem": this.problem,
            "date_from": this.dateRange['from'],
            "date_to": this.dateRange['to']
        };
        this.rest.post(this.codes.VEHICLE_WORK_REPORT, data).then(function (resp) {
            console.log(resp);
            document.getElementById("report").innerHTML = resp['data'];
            _this.html = resp['data'];
        });
        this.downloadURL = this.codes.VEHICLE_WORK_REPORT_DOWNLOAD + "?vehicle_id=" + this.vehicle_id + "&problem=" + this.problem + "&date_from=" + this.dateRange['from'] + "&date_to=" + this.dateRange['to'];
    };
    VehicleWorkReportPage.prototype.dismiss = function () {
        this.viewCont.dismiss();
    };
    VehicleWorkReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-vehicle-work-report',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-work-report/vehicle-work-report.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <!-- <ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon> -->\n          VEHICLE WORK REPORT\n        </ion-title>\n\n      </ion-col>\n      \n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-6>\n      <ion-item>\n        <ion-label floating>\n          Vehicles\n        </ion-label>\n        <ion-select interface="popover" [(ngModel)]="vehicle_id">\n          <ion-option value="0">All</ion-option>\n          <ion-option value="{{vehicle[\'vehicle_id\']}}" *ngFor="let vehicle of vehicles">\n            {{vehicle[\'vehicle_number\']}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6>\n      <ion-item>\n        <ion-label floating>\n          Problem\n        </ion-label>\n        <ion-select interface="popover" [(ngModel)]="problem">\n          <ion-option value="0">All</ion-option>\n          <ion-option value="{{problem[\'problem_name\']}}" *ngFor="let problem of problems">\n            {{problem[\'problem_name\']}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-11 >\n      <ion-item style="margin-top: 24px;">\n        <ion-label>\n          Date Range : <span *ngIf="this.dateRange[\'from\'] != undefined"> {{this.dateRange[\'from\'] + " - " + this.dateRange[\'to\']}} </span>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col col-1>\n      <ion-icon name="calendar" (click)="openCalendar()" style="position: absolute; top: 45px;"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-calendar *ngIf="displayCalendar" [(ngModel)]="dateRange"\n              [options]="optionsMulti"\n              type="string"\n              [format]="\'YYYY-MM-DD\'">\n  </ion-calendar>\n\n  <p style="text-align: center !important;">\n    <button round class="custom-button" ion-button (click)="generateReport()">Report</button>\n  </p>\n  \n  \n  <div id="report">\n  \n  </div>\n  \n  <p style="text-align: center;">\n    <a [href]="downloadURL">Download Report</a>\n  </p>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-work-report/vehicle-work-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"]])
    ], VehicleWorkReportPage);
    return VehicleWorkReportPage;
}());

//# sourceMappingURL=vehicle-work-report.js.map

/***/ })

});
//# sourceMappingURL=4.js.map