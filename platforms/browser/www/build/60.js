webpackJsonp([60],{

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModalPageModule", function() { return CalendarModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_modal__ = __webpack_require__(945);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalendarModalPageModule = /** @class */ (function () {
    function CalendarModalPageModule() {
    }
    CalendarModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__calendar_modal__["a" /* CalendarModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__calendar_modal__["a" /* CalendarModalPage */]),
                __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__["CalendarModule"]
            ],
        })
    ], CalendarModalPageModule);
    return CalendarModalPageModule;
}());

//# sourceMappingURL=calendar-modal.module.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarModalPage = /** @class */ (function () {
    function CalendarModalPage(navCtrl, navParams, codes, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.view = view;
        this.dt = new Date(2000, 1, 1);
        this.selectedDate = '';
        this.optionsMulti = {
            pickMode: 'single',
            from: this.dt,
            to: 0,
            showMonthPicker: true,
            showToggleButtons: true,
            color: 'primary'
        };
    }
    CalendarModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarModalPage');
    };
    CalendarModalPage.prototype.change = function (date) {
        localStorage.setItem(this.codes.DATE, date);
        this.view.dismiss();
    };
    CalendarModalPage.prototype.select = function () {
        localStorage.setItem(this.codes.DATE, this.selectedDate);
        this.view.dismiss();
    };
    CalendarModalPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    CalendarModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-calendar-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/calendar-modal/calendar-modal.html"*/'<ion-content padding style="background-color: rgba(0,0,0,0.8);">\n\n  <ion-icon name="close" (click)="dismiss()" style="float: right;font-size: 3rem !important;color: red;padding: 20px"></ion-icon>\n\n  <ion-card>\n    <ion-calendar [(ngModel)]="selectedDate" [options]="optionsMulti" type="string" [format]="\'YYYY-MM-DD\'" (onChange)="change($event)">\n    </ion-calendar>\n\n    <!-- <button ion-button clear (click)="select()">\n      Select\n    </button> -->\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/calendar-modal/calendar-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"]])
    ], CalendarModalPage);
    return CalendarModalPage;
}());

//# sourceMappingURL=calendar-modal.js.map

/***/ })

});
//# sourceMappingURL=60.js.map