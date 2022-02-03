webpackJsonp([40],{

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeModalPageModule", function() { return ExchangeModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange_modal__ = __webpack_require__(962);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExchangeModalPageModule = /** @class */ (function () {
    function ExchangeModalPageModule() {
    }
    ExchangeModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exchange_modal__["a" /* ExchangeModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__exchange_modal__["a" /* ExchangeModalPage */]),
            ],
        })
    ], ExchangeModalPageModule);
    return ExchangeModalPageModule;
}());

//# sourceMappingURL=exchange-modal.module.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(493);
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





var ExchangeModalPage = /** @class */ (function () {
    function ExchangeModalPage(viewController, navCtrl, navParams, modalCtrl, codes, rest, msg) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.codes = codes;
        this.rest = rest;
        this.msg = msg;
        this.vehicle_id = '';
        this.exchange_vehicle_id = '';
        this.exchange_date = '';
        this.item_id = '';
        this.item_name = '';
        this.item_number = '';
        this.item_id_2 = '';
        this.item_name_2 = '';
        this.item_number_2 = '';
        this.last_maint_id = '';
        this.last_maint_ts = '';
        this.opt_counter = '';
        this.vehicles = [];
        this.vehicle = '';
        this.vehicle = this.navParams.get("vehicle");
        this.getVehicles();
    }
    ExchangeModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExchangeModalPage');
    };
    ExchangeModalPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    ExchangeModalPage.prototype.openCalendarPopup = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.exchange_date = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    ExchangeModalPage.prototype.saveExchangeModel = function () {
        var _this = this;
        var dt = {
            "vehicle_id": this.vehicle['vehicle_id'],
            "exchange_vehicle_id": this.exchange_vehicle_id,
            "exchange_date": this.exchange_date,
            "item_id": this.item_name,
            "item_name": '',
            "item_number": '',
            "item_id_2": this.item_name_2,
            "item_name_2": '',
            "item_number_2": '',
            "last_maint_id": 'srth_app',
            "opt_counter": '0'
        };
        this.rest.post(this.codes.SAVE_EXCHANGE_PART, dt).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.msg.displayToast('Exchange part is saved !!!');
                _this.exchange_vehicle_id = '';
                _this.item_id = '';
                _this.item_id_2 = '';
                _this.exchange_date = '';
                return;
            }
        });
    };
    ExchangeModalPage.prototype.openPartsWorkModal = function (id) {
        var _this = this;
        var mdl = this.modalCtrl.create('PartsWorkModalPage');
        mdl.onDidDismiss(function (data) {
            if (id == '1') {
                var work_part = JSON.parse(localStorage.getItem(_this.codes.SELECTED_WORK_PART));
                _this.item_name = work_part['name'];
            }
            else if (id == '2') {
                var work_part = JSON.parse(localStorage.getItem(_this.codes.SELECTED_WORK_PART));
                _this.item_name_2 = work_part['name'];
            }
        });
        mdl.present();
    };
    ExchangeModalPage.prototype.getVehicles = function () {
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
    ExchangeModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-exchange-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/exchange-modal/exchange-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>EXCHANGE PART</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="container white-section">\n\n    <div class="label-float" >\n      <input type="text" [(ngModel)]="exchange_date" (click)="openCalendarPopup()"/>\n      <label>EXHCANGE DATE</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div>\n  \n    \n    <ion-row class="exchange-details" style="margin: 0; padding-top: 20px;">\n      <ion-col col-6 class="text-center">\n        VEHICLE NUMBER\n      </ion-col>\n      <ion-col col-6 class="text-center text-color-primary ">\n        {{vehicle[\'vehicle_number\']}}\n      </ion-col>\n    </ion-row>\n\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="item_name"  (click)="openPartsWorkModal(\'1\')" placeholder="ITEM AND ID NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n    <div class="text-center">\n      <i class="fa fa-exchange" aria-hidden="true" style="transform: rotate(90deg);"></i>\n    </div>\n\n\n    <ion-item class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px">\n      <ion-label>SELECT VEHICLE</ion-label>\n      <ion-select interface="action-sheet" [(ngModel)]="exchange_vehicle_id">\n        <ion-option value="{{vh[\'vehicle_id\']}}" *ngFor="let vh of vehicles">{{vh[\'vehicle_number\']}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="item_name_2" (click)="openPartsWorkModal(\'2\')" placeholder="ITEM AND ID NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n  </div>\n\n  <ion-row>\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button" (click)="saveExchangeModel()"> SAVE</button>\n\n    </ion-col>\n    <ion-col col-6 class="text-center">\n      <button ion-button round (click)="exitModal()" class="custom-button">\n        Exit\n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/exchange-modal/exchange-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */]])
    ], ExchangeModalPage);
    return ExchangeModalPage;
}());

//# sourceMappingURL=exchange-modal.js.map

/***/ })

});
//# sourceMappingURL=40.js.map