webpackJsonp([21],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveDriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RemoveDriverPage = /** @class */ (function () {
    function RemoveDriverPage(viewController, navCtrl, navParams, codes, message, rest, modalCtrl) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.message = message;
        this.rest = rest;
        this.modalCtrl = modalCtrl;
        this.vehicle = '';
        this.worker = '';
        this.driver_end_date = '';
        this.driver_end_details = '';
        this.driver_end_km = '';
        this.vehicle_id = '';
        this.driver_id = '';
        this.driver_start_date = '';
        this.driver_start_details = '';
        this.driver_start_km = '';
        this.vehicle = JSON.parse(localStorage.getItem("vehicle_details"));
        this.worker = JSON.parse(localStorage.getItem("worker"));
        if (this.vehicle['driver_details'] != undefined && this.vehicle['driver_details'] != null) {
            this.worker = '';
        }
    }
    RemoveDriverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RemoveDriverPage');
    };
    RemoveDriverPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    RemoveDriverPage.prototype.openCalendarPopup = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.driver_end_date = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    RemoveDriverPage.prototype.save = function () {
        var _this = this;
        var data = {
            "type": "remove",
            "vehicle_id": this.vehicle['vehicle_id'],
            "driver_id": this.driver_id,
            "driver_end_date": this.driver_end_date,
            "driver_end_details": this.driver_end_details,
            "driver_end_km": this.driver_end_km
        };
        this.rest.post(this.codes.UPDATE_VEHICLE_DRIVER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have removed the driver successfully!');
                _this.navCtrl.pop();
            }
        });
    };
    RemoveDriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-remove-driver',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/remove-driver/remove-driver.html"*/'<!--\n  Generated template for the RemoveDriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <!-- <ion-col col-2 class="custom-back-button"> -->\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      <!-- </ion-col> -->\n      \n      <ion-col col-12 class="person-name text-center">\n        <ion-title>        \n          <i class="fa fa-user-circle" aria-hidden="true"></i>\n          REMOVE DRIVER\n        </ion-title>\n\n      </ion-col>\n      <!-- <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col> -->\n    </ion-row>\n  </ion-navbar>\n</ion-header> \n\n<ion-content padding>\n\n  <div class="container white-section">\n    <ion-row class="driver-modal">\n       \n      <ion-col col-8>\n        VEHICLE NUMBER:  <span class="text-color-primary">{{vehicle[\'vehicle_number\']}}</span>\n      </ion-col>\n      <ion-col col-1>\n        <div style=" width: 10px; height: 10px; background-color: #4EC576; border-radius: 50%;"></div>\n  \n      </ion-col>\n      <ion-col col-3>\n        DRIVER\n      </ion-col>\n      <ion-col col-12>\n        TYPE: <span class="text-color-primary">{{vehicle[\'vehicle_type\']}}</span>\n      </ion-col>\n      <ion-col col-12>\n        CURRENT DRIVER: <span class="text-color-primary" *ngIf="worker != \'\'">{{worker[\'name\']}}</span>\n        <span class="text-color-primary" *ngIf="vehicle[\'driver_details\'] != undefined && vehicle[\'driver_details\'] != null">{{vehicle[\'driver_details\'][\'name\']}}</span>\n      </ion-col>\n  \n      <ion-col col-12>\n\n        <div class="label-float" >\n          <input type="text" [(ngModel)]="driver_end_date" (click)="openCalendarPopup()"/>\n          <label>DRIVER REMOVE DATE</label>\n          <i class="fa fa-calendar" aria-hidden="true"></i>\n        </div>\n\n      </ion-col>\n  \n  <ion-col col-12>\n    <div class="label-float" >\n      <input type="text" [(ngModel)]="driver_end_details"  placeholder=" " />\n      <label>REASON/DETAILS</label>\n      <!-- <i class="fa fa-file" aria-hidden="true"></i> -->\n  \n    </div>\n  </ion-col>\n  \n  <ion-col col-12>\n    <div class="label-float" >\n      <input type="text" [(ngModel)]="driver_end_km"  placeholder=" " />\n      <label>KM</label>\n      <!-- <i class="fa fa-file" aria-hidden="true"></i> -->\n  \n    </div>\n  </ion-col>\n  \n  \n      \n\n    \n  \n  </ion-row> \n  </div>\n\n  <ion-row>\n    <ion-col col-6 class="text-center">\n  \n      <button ion-button round class="custom-button" (click)="save()">SAVE</button>\n    </ion-col>\n  \n    <ion-col col-6 class="text-center">\n      <button ion-button round class="exit-button" (click)="exitModal()">\n        Exit\n      </button>\n    </ion-col>\n  </ion-row>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/remove-driver/remove-driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"]])
    ], RemoveDriverPage);
    return RemoveDriverPage;
}());

//# sourceMappingURL=remove-driver.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDriverPageModule", function() { return RemoveDriverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remove_driver__ = __webpack_require__(1005);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RemoveDriverPageModule = /** @class */ (function () {
    function RemoveDriverPageModule() {
    }
    RemoveDriverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__remove_driver__["a" /* RemoveDriverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__remove_driver__["a" /* RemoveDriverPage */]),
            ],
        })
    ], RemoveDriverPageModule);
    return RemoveDriverPageModule;
}());

//# sourceMappingURL=remove-driver.module.js.map

/***/ })

});
//# sourceMappingURL=21.js.map