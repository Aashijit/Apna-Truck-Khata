webpackJsonp([32],{

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerPageModule", function() { return LedgerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ledger__ = __webpack_require__(973);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LedgerPageModule = /** @class */ (function () {
    function LedgerPageModule() {
    }
    LedgerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ledger__["a" /* LedgerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__ledger__["a" /* LedgerPage */]),
            ],
        })
    ], LedgerPageModule);
    return LedgerPageModule;
}());

//# sourceMappingURL=ledger.module.js.map

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedgerPage; });
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





var LedgerPage = /** @class */ (function () {
    function LedgerPage(navCtrl, navParams, modalCtrl, codes, rest, message) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.codes = codes;
        this.rest = rest;
        this.message = message;
        this.isPaymentOptionShown = false;
        this.worker = '';
        this.total = 0.00;
        this.img = null;
        this.payment_id = '';
        this.payment_number = null;
        this.payid = '';
        this.paid_to_worker_id = '';
        this.date_of_payment = '';
        this.mode_of_payment = '';
        this.details = '';
        this.payment_amount = '';
        this.payment_image_1_id = '0';
        this.payment_image_2_id = '0';
        this.payment_date = '';
        this.last_maint_id = 'srth-app';
        this.opt_counter = '0';
        this.bill_ids = [];
        this.bills = [];
        this.filterbills = [];
        this.money_to_pay = 0.00;
        this.totalBill = 0.00;
        this.paidMoney = 0.00;
        this.dueMoney = 0.00;
        this.payment = '';
        this.isUpdate = false;
        this.worker = JSON.parse(localStorage.getItem("worker"));
        var data = {
            "worker_id": this.worker['worker_id']
        };
        this.rest.post(this.codes.GET_WORKER_BY_WORKER_ID, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.worker = resp['data'][0];
                _this.dueMoney = Number(_this.worker['total_bill_money']) - Number(_this.worker['paid_money']);
            }
        });
        // this.worker = JSON.parse(localStorage.getItem("worker"));
        // this.dueMoney = Number(this.worker['total_bill_money']) - Number(this.worker['paid_money']);
        if (this.navParams.get("payment") != undefined) {
            this.getAllBillsByWorkerId();
            this.payment = this.navParams.get("payment");
            this.payment_id = this.payment['payment_id'];
            this.payment_number = this.payment['payment_number'];
            this.payment_amount = this.payment['payment_amount'];
            this.date_of_payment = this.payment['date_of_payment'];
            this.mode_of_payment = this.payment['mode_of_payment'];
            this.details = this.payment['details'];
            this.img = this.payment['payment_image_1_id'];
            var bilds = [];
            for (var i = 0; i < this.payment['bills'].length; i++) {
                bilds.push(String(this.payment['bills'][i]['bill_id']));
            }
            this.bill_ids = bilds;
            console.log("BUILD ID  : " + JSON.stringify(this.bill_ids));
            this.isUpdate = true;
        }
        else {
            this.getBillsByWorkerId();
        }
    }
    LedgerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LedgerPage');
    };
    LedgerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_LAST_PAYMENT_ID, data).then(function (resp) {
            _this.payment_number = Number(resp['data']) + 1;
        });
    };
    LedgerPage.prototype.openCalendarPopup = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.date_of_payment = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    LedgerPage.prototype.showPaymentOption = function () {
        this.isPaymentOptionShown = true;
    };
    LedgerPage.prototype.openDetailPopup = function () {
        var _this = this;
        var detailsModalPage = this.modalCtrl.create('DetailsModalPage', { 'details': this.details });
        detailsModalPage.onDidDismiss(function (data) {
            _this.details = localStorage.getItem(_this.codes.DETAILS);
        });
        detailsModalPage.present();
    };
    LedgerPage.prototype.openCameraPopup = function () {
        var _this = this;
        if (this.date_of_payment == '' || this.date_of_payment == null) {
            this.message.displayToast("Please select date of payment");
            return;
        }
        if (this.mode_of_payment == '' || this.mode_of_payment == null) {
            this.message.displayToast("Please select mode of payment");
            return;
        }
        if (this.details == '' || this.details == null) {
            this.message.displayToast("Please enter payment details");
            return;
        }
        var data = {
            "payment_details": this.details,
            "mode_of_payment": this.mode_of_payment,
            "date_of_payment": this.date_of_payment,
            "worker_type": this.worker['worker_type'],
            "payment_id": this.payment_number
        };
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data2 = {
            "srth_id": json[0]['srth_id'],
            "worker_type": this.worker['worker_type'],
            "worker_id": this.worker['worker_id'],
            "document_type": "payment",
            "type": "bills",
            "file_name": json[0]['srth_id'] + "_" + Date.now() + ".jpg",
            "tags": JSON.stringify(data)
        };
        var cameraModalPage = this.modalCtrl.create('UploadImagePage', { "request": data2, 'image': this.img });
        cameraModalPage.onDidDismiss(function (resp) {
            if (localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined) {
                var image = JSON.parse(localStorage.getItem("selectedimage"));
                _this.img = image['image_url'];
            }
            else
                _this.img = null;
        });
        cameraModalPage.present();
    };
    LedgerPage.prototype.update = function () {
        var _this = this;
        var data = {
            'payment_id': this.payment_id,
            "payment_number": this.payment_number,
            "paid_to_worker_id": this.worker['worker_id'],
            "date_of_payment": this.date_of_payment,
            "mode_of_payment": this.mode_of_payment,
            "payment_amount": this.payment_amount,
            "details": this.details,
            "payment_image_1_id": this.img != undefined ? this.img['image_url'] : "0",
            "payment_image_2_id": '0',
            "payment_date": this.date_of_payment,
            "bill_ids": this.bill_ids,
            "last_maint_id": 'srth-app',
            "opt_counter": '0'
        };
        this.rest.post(this.codes.UPDATE_PAYMENT, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have updated a payment!');
                _this.worker['paid_money'] = Number(_this.worker['paid_money']) + Number(_this.payment_amount);
                _this.dueMoney = Number(_this.worker['total_bill_money']) - Number(_this.worker['paid_money']);
                localStorage.setItem("worker", JSON.stringify(_this.worker));
                _this.date_of_payment = '';
                _this.mode_of_payment = '';
                _this.details = '';
                _this.payment_amount = '';
                _this.bill_ids = [];
            }
        });
    };
    LedgerPage.prototype.save = function () {
        var _this = this;
        var data = {
            "paid_to_worker_id": this.worker['worker_id'],
            "payment_number": this.payment_number,
            "date_of_payment": this.date_of_payment,
            "mode_of_payment": this.mode_of_payment,
            "payment_amount": this.payment_amount,
            "details": this.details,
            "payment_image_1_id": this.img != undefined ? this.img['image_url'] : "0",
            "payment_image_2_id": '0',
            "payment_date": this.date_of_payment,
            "bill_ids": this.bill_ids,
            "last_maint_id": 'srth-app',
            "opt_counter": '0'
        };
        console.log(JSON.stringify(this.bill_ids));
        this.rest.post(this.codes.CREATE_PAYMENT, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have made a payment!');
                _this.worker['paid_money'] = Number(_this.worker['paid_money']) + Number(_this.payment_amount);
                _this.dueMoney = Number(_this.worker['total_bill_money']) - Number(_this.worker['paid_money']);
                localStorage.setItem("worker", JSON.stringify(_this.worker));
                _this.date_of_payment = '';
                _this.mode_of_payment = '';
                _this.details = '';
                _this.payment_amount = '';
                _this.bill_ids = [];
                var json = JSON.parse(localStorage.getItem(_this.codes.K_ACCOUNT_INFO));
                var data1 = {
                    "srth_id": json[0]['srth_id']
                };
                _this.rest.post(_this.codes.GET_LAST_PAYMENT_ID, data1).then(function (resp) {
                    _this.payment_number = Number(resp['data']) + 1;
                });
            }
        });
    };
    LedgerPage.prototype.updateAmount = function () {
        this.money_to_pay = this.payment_amount;
    };
    LedgerPage.prototype.getAllBillsByWorkerId = function () {
        var _this = this;
        var data = {
            "worker_id": this.worker['worker_id'],
            "worker_type": localStorage.getItem('worker_type')
        };
        this.rest.post(this.codes.GET_EXPENSE_BILL_BY_WORKER_ID, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.bills = resp['data'];
            }
        });
    };
    LedgerPage.prototype.getBillsByWorkerId = function () {
        var _this = this;
        // this.isupdate = false;
        var data = {
            "worker_id": this.worker['worker_id'],
            "worker_type": localStorage.getItem('worker_type')
        };
        this.rest.post(this.codes.GET_EXPENSE_BILL_BY_WORKER_ID_UNPAID, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.bills = resp['data'];
            }
        });
    };
    LedgerPage.prototype.change = function (billIds) {
        if (this.payment_amount != '')
            return;
        this.totalBill = 0.00;
        for (var i = 0; i < billIds.length; i++) {
            this.totalBill = Number(this.totalBill) + Number(this.getBillMoney(billIds[i]));
        }
        this.payment_amount = this.totalBill;
        this.money_to_pay = this.payment_amount;
    };
    LedgerPage.prototype.getBillMoney = function (billId) {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i]['bill_id'] == billId) {
                return Number(this.bills[i]['total_bill']);
            }
        }
    };
    LedgerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-ledger',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/ledger/ledger.html"*/'<!-- Document -->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-money" aria-hidden="true"></i>\n          PAYMENT\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container document">\n    <ion-row class="profile-details">\n      <ion-col col-12 class="profile-picture">\n        <img width="120px" height="120px" *ngIf="worker[\'profile_image_id\'] == \'0\' || worker[\'profile_image_id\'] == null || worker[\'profile_image_id\'] == undefined" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="">\n        <img width="120px" height="120px" *ngIf="worker[\'profile_image_id\'] != \'0\' && worker[\'profile_image_id\'] != null && worker[\'profile_image_id\'] != undefined" [src]="worker[\'profile_image_id\']" alt="">\n      </ion-col>      \n      <ion-col col-6>\n        NAME: <span class="text-color-primary"> <br> {{worker[\'name\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        PHONE: <br>  <span class="text-color-primary">{{worker[\'phone_number\']}} <i style="font-size: 18px; margin-left: 10px;" class="fa fa-phone" aria-hidden="true"></i>\n        </span>\n      </ion-col>\n      <ion-col col-6>\n        STATUS: <span  class="text-color-primary"> <br> {{worker[\'worker_type\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        LOCATION: <span class="text-color-primary"> <br> {{worker[\'city\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        BUSINESS NAME: <br>  <span class="text-color-primary">{{worker[\'name\']}}</span>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row class="report-statement">\n      <ion-col col-6>\n        <div class="full-report-statement">\n          <i class="fa fa-file-o" aria-hidden="true"></i>\n\n          FULL REPORT\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="monthy-statement">\n          <i class="fa fa-file" aria-hidden="true"></i>\n\n          MONTHY STATEMENT\n        </div>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row class="bill">\n      <ion-col col-4>\n        <p class="total-bill">TOTAL BILL</p>\n        <div class="ammount">&#x20b9;{{this.worker[\'total_bill_money\']}}</div>\n      </ion-col>\n      <ion-col col-4>\n        <p class="paid-money">PAID MONEY</p>\n        <div class="ammount">&#x20b9;{{this.worker[\'paid_money\']}}</div>\n      </ion-col>\n      <ion-col col-4>\n        <p class="due-money">DUE MONEY</p>\n        \n        <div class="ammount">&#x20b9;{{dueMoney}}</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-badge color="primary" style="margin-top: 13px;margin-left: 2px;padding: 7px;">Payment # {{payment_number}}</ion-badge>\n\n    <div class="white-section"> \n      <div class="label-float" >\n        <input type="tel" [(ngModel)]="payment_amount" (keyup)="updateAmount()"  placeholder=" " />\n        <label>GIVE MONEY</label>\n        <i class="fa fa-money" aria-hidden="true"></i>\n  \n      </div>\n  \n  \n      <div class="total-due-amount">\n        <p><small>&#x20b9; {{dueMoney}} - &#x20b9; {{money_to_pay}} = &#x20b9; {{dueMoney - money_to_pay}} </small></p>\n        <p><small>DUE MONEY - GIVE MONEY = NEW DUE MONEY </small></p>\n      </div>\n  \n  \n      <div class="label-float" >\n        <input type="text" [(ngModel)]="date_of_payment" (click)="openCalendarPopup()"/>\n        <label>DATE OF PAYMENT</label>\n        <i class="fa fa-calendar" aria-hidden="true"></i>\n  \n      </div>\n \n  \n      <!-- <p class="text-color-primary mode-of-payment" style="margin-top: 25px;" (click)="showPaymentOption()">MODE OF PAYMENT</p> -->\n\n\n      <ion-item  class="label-select">\n        <ion-label floating>MODE OF PAYMENT</ion-label>\n        <ion-select interface="popover" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" [(ngModel)]="mode_of_payment">\n          <ion-option value="CASH">CASH</ion-option>\n          <ion-option value="BANK">BANK</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-row >\n        <ion-col col-9>\n          <ion-row >\n            <ion-col col-10 style="margin-top: -11px;margin-left: 21px;"  (click)="openDetailPopup()">\n              <div class="label-float" >\n                <input type="text" [(ngModel)]="details"  placeholder=" " />\n                <label>DETAILS</label>\n              </div>\n            </ion-col>    \n          </ion-row>  \n        </ion-col>\n        <ion-col col-2>\n          <ion-row class="detail-picture">\n            <ion-col col-4   *ngIf="img == null" (click)="openCameraPopup()">\n              <i class="fa fa-camera" aria-hidden="true"></i>\n              <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n      \n            </ion-col>    \n            <ion-col col-12 *ngIf="img != null" (click)="openCameraPopup()">\n              <img [src]="img" style="opacity: 0.3 !important;"/>\n             <ion-icon class="edit-pencil" ios="ios-create" md="md-create" style="position: absolute;right: 19px;top: 21px;"></ion-icon>\n      \n            </ion-col>\n          </ion-row>      \n        </ion-col>\n      </ion-row>\n  \n    \n  \n      <ion-row style="margin: 0;">\n        <ion-col col-12>\n          <ion-item  class="label-select" style="margin-top: -15px;margin-left: -3px;">\n            <ion-label floating>CHOOSE BILL #</ion-label>\n            <ion-select multiple="true" [(ngModel)]="bill_ids" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" (ionChange)="change($event)">\n              <ion-option value="{{bill[\'bill_id\']}}" *ngFor="let bill of bills">{{bill[\'bill_id\']+" - "+"&#x20b9; "+bill[\'total_bill\']}}</ion-option>\n            </ion-select>\n          </ion-item>\n      \n        </ion-col>\n        <!-- <ion-col col-4>\n          <button ion-button disabled="true" round class="share-button">SHARE &nbsp;<ion-icon ios="ios-share-alt" md="md-share-alt"></ion-icon>\n          </button>\n        </ion-col> -->\n      </ion-row>\n  \n    </div>\n\n  \n\n    <div class="text-center" *ngIf="!isUpdate">\n      <button ion-button round class="custom-button" (click)="save()">SAVE</button>\n    </div>\n\n    <div class="text-center" *ngIf="isUpdate">\n      <button ion-button round class="custom-button" (click)="update()">UPDATE</button>\n    </div>\n\n\n  </div>\n</ion-content>  \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/ledger/ledger.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */]])
    ], LedgerPage);
    return LedgerPage;
}());

//# sourceMappingURL=ledger.js.map

/***/ })

});
//# sourceMappingURL=32.js.map