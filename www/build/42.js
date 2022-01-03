webpackJsonp([42],{

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverPageModule", function() { return DriverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver__ = __webpack_require__(954);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverPageModule = /** @class */ (function () {
    function DriverPageModule() {
    }
    DriverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver__["a" /* DriverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__driver__["a" /* DriverPage */]),
            ],
        })
    ], DriverPageModule);
    return DriverPageModule;
}());

//# sourceMappingURL=driver.module.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverPage = /** @class */ (function () {
    function DriverPage(viewController, navCtrl, navParams, modalCtrl, rest, codes, message, alertCtrl, pv) {
        var _this = this;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.rest = rest;
        this.codes = codes;
        this.message = message;
        this.alertCtrl = alertCtrl;
        this.pv = pv;
        this.isShown = false;
        this.driver = '';
        this.due = 0.00;
        this.payments = [];
        this.filterpayments = [];
        this.searchTerm = '';
        this.driverhistory = [];
        this.vehicle_number = '';
        this.vehicle_joining_date = '';
        this.type = '';
        this.updatebill = false;
        this.updatepayment = false;
        this.selectedbill = '';
        this.selectedpayment = '';
        this.selectedfilters = [];
        this.img = null;
        this.driver = JSON.parse(localStorage.getItem("worker"));
        console.log(JSON.stringify(this.driver));
        this.due = Number(this.driver['total_bill_money']) - Number(this.driver['paid_money']);
        var data = {
            "driver_id": this.driver['worker_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_BY_WORKER_ID, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.driverhistory = resp['data'];
                for (var i = 0; i < _this.driverhistory.length; i++) {
                    if (_this.driverhistory[i]['is_remove'] == '0') {
                        localStorage.setItem("vehicle_details", JSON.stringify(_this.driverhistory[i]['vehicle']));
                        _this.vehicle_number = _this.driverhistory[i]['vehicle']['vehicle_number'];
                        _this.vehicle_joining_date = _this.driverhistory[i]['vehicle']['vehicle_start_date'];
                    }
                }
            }
        });
    }
    DriverPage.prototype.checkChange = function () {
    };
    DriverPage.prototype.update = function () {
        this.navCtrl.push('AddDriverPage', { "update": "true" });
    };
    DriverPage.prototype.viewImage = function (imageUrl) {
        this.pv.show(imageUrl, 'Payment Image', { 'share': true });
    };
    DriverPage.prototype.viewBillImage = function (imageUrl) {
        this.pv.show(imageUrl, 'Bill Image', { 'share': true });
    };
    DriverPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var data = {
            "worker_id": this.driver['worker_id']
        };
        this.rest.post(this.codes.GET_DISPLAY_BILL_BY_WORKER_ID, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.payments = resp['data'];
                _this.filterpayments = _this.payments;
            }
        });
    };
    DriverPage.prototype.goToBillPaymentSearch = function () {
    };
    DriverPage.prototype.deleteWorker = function () {
        var _this = this;
        var data = {
            "worker_id": this.driver['worker_id']
        };
        this.rest.post(this.codes.DELETE_WORKER, data).then(function (resp) {
            _this.message.displayToast('You have successfully deleted this worker!');
            _this.navCtrl.pop();
        });
    };
    DriverPage.prototype.presentConfirmDelete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: "Are you sure you want to delete this worker?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.deleteWorker();
                    }
                }
            ]
        });
        alert.present();
    };
    DriverPage.prototype.showMore = function () {
        if (this.isShown) {
            document.getElementById("fa-arrow-circle-down-driver").classList.remove("fa-arrow-circle-up");
            document.getElementById("fa-arrow-circle-down-driver").classList.add("fa-arrow-circle-down");
        }
        else {
            document.getElementById("fa-arrow-circle-down-driver").classList.remove("fa-arrow-circle-down");
            document.getElementById("fa-arrow-circle-down-driver").classList.add("fa-arrow-circle-up");
        }
        this.isShown = !this.isShown;
    };
    DriverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverPage');
    };
    DriverPage.prototype.openRemoveDriverFromKhata = function () {
        // let removeModal = this.modalCtrl.create(RemoveDriverFromAccountPage);
        // removeModal.present();
        var changeDriverModal = this.modalCtrl.create('RemoveDriverPage');
        changeDriverModal.present();
    };
    DriverPage.prototype.getItems = function ($event) {
        var _this = this;
        this.filterpayments = this.payments.filter(function (wp) {
            if (_this.searchTerm != '') {
                var str = wp.payment_id + wp.details;
                return (str.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            }
            else
                return _this.payments;
        });
    };
    DriverPage.prototype.openLedgePage = function () {
        localStorage.setItem("worker_type", "driver");
        this.navCtrl.push('LedgerPage', { "worker": this.driver });
    };
    DriverPage.prototype.selectThisPayment = function (payment) {
        this.updatebill = false;
        this.updatepayment = true;
        this.selectedpayment = payment;
        for (var i = 0; i < this.filterpayments.length; i++) {
            if (this.filterpayments[i]['payment_id'] == payment['payment_id']) {
                this.filterpayments[i]['selected'] = 'true';
            }
            this.filterpayments[i]['selected'] = 'false';
        }
        for (var i = 0; i < payment.bills.length; i++) {
            payment.bills[i]['selected'] = 'false';
        }
        payment['selected'] = 'true';
    };
    DriverPage.prototype.selectThisBill = function (bill, payment) {
        this.updatepayment = false;
        this.updatebill = true;
        this.selectedpayment = payment;
        this.selectedbill = bill;
        for (var i = 0; i < this.filterpayments.length; i++) {
            if (this.filterpayments[i]['payment_id'] == payment['payment_id']) {
                this.filterpayments[i]['selected'] = 'true';
            }
            this.filterpayments[i]['selected'] = 'false';
        }
        for (var i = 0; i < payment.bills.length; i++) {
            payment.bills[i]['selected'] = 'false';
        }
        bill['selected'] = 'true';
    };
    DriverPage.prototype.addProfilePic = function () {
        var _this = this;
        var data = {
            "person_shop_name": this.driver['name'],
            "phone_number": this.driver['phone_number'],
            "worker_type": 'driver'
        };
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data2 = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "driver",
            "worker_id": this.driver['worker_id'],
            "document_type": "profile",
            "type": "profile",
            "file_name": json[0]['srth_id'] + "_" + Date.now() + ".jpg",
            "tags": JSON.stringify(data)
        };
        var cameraModalPage = this.modalCtrl.create('UploadImagePage', { "request": data2, 'image': this.img });
        cameraModalPage.onDidDismiss(function (resp) {
            if (localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined)
                _this.img = JSON.parse(localStorage.getItem("selectedimage"));
            else
                _this.img = null;
        });
        cameraModalPage.present();
    };
    DriverPage.prototype.viewBill = function () {
        var mdl = this.modalCtrl.create('ViewPaymentPage', { 'payment': this.selectedpayment });
        mdl.present();
    };
    DriverPage.prototype.updateBill = function () {
        localStorage.setItem('bill', JSON.stringify(this.selectedbill));
        this.navCtrl.push('AddDriverExpensesPage', { 'update': 'true' });
    };
    DriverPage.prototype.deleteBill = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: "Are you sure you want to delete this bill?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.deleteBillByBillId();
                    }
                }
            ]
        });
        alert.present();
    };
    DriverPage.prototype.deleteBillByBillId = function () {
        var _this = this;
        var data = {
            "bill_id": this.selectedbill['bill_id']
        };
        this.rest.post(this.codes.DELETE_BILL_EXPENSE, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have deleted a bill.');
                _this.ionViewWillEnter();
            }
        });
    };
    DriverPage.prototype.viewPayment = function () {
        var mdl = this.modalCtrl.create('ViewPaymentPage', { 'payment': this.selectedpayment });
        mdl.present();
    };
    DriverPage.prototype.updatePayment = function () {
        localStorage.setItem("worker_type", "driver");
        this.navCtrl.push('LedgerPage', { "worker": this.driver, 'payment': this.selectedpayment, 'isupdate': 'true' });
    };
    DriverPage.prototype.deletePayment = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: "Are you sure you want to delete this payment?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.deletePaymentByPaymentId();
                    }
                }
            ]
        });
        alert.present();
    };
    DriverPage.prototype.deletePaymentByPaymentId = function () {
        var _this = this;
        var data = {
            "payment_id": this.selectedpayment['payment_id']
        };
        this.rest.post(this.codes.DELETE_PAYMENT, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have deleted a payment.');
                _this.ionViewWillEnter();
            }
        });
    };
    DriverPage.prototype.searchBillDetails = function () {
        var _this = this;
        var mdl = this.modalCtrl.create('BillPaymentSearchPage', { "worker_type": "driver", "worker_id": this.driver['worker_id'] });
        mdl.onDidDismiss(function (data) {
            if (localStorage.getItem("bill_payment_search") != undefined) {
                _this.selectedfilters = JSON.parse(localStorage.getItem("bill_payment_search"));
                if (_this.selectedfilters.length == 0) {
                    _this.filterpayments = _this.payments;
                    return;
                }
                _this.filterpayments = [];
                for (var i = 0; i < _this.selectedfilters.length; i++) {
                    if (_this.selectedfilters[i]['type'] == 'reasons') {
                        for (var j = 0; j < _this.payments.length; j++) {
                            for (var k = 0; k < _this.payments[j]['bills'].length; k++) {
                                if (_this.payments[j]['bills'][k]['reason'] == _this.selectedfilters[i]['name']) {
                                    _this.filterpayments.push(_this.payments[j]);
                                }
                            }
                        }
                    }
                    else if (_this.selectedfilters[i]['type'] == 'payments') {
                        for (var j = 0; j < _this.payments.length; j++) {
                            if (_this.payments[j]['payment_id'] == _this.selectedfilters[i]['id']) {
                                _this.filterpayments.push(_this.payments[j]);
                            }
                        }
                    }
                    else if (_this.selectedfilters[i]['type'] == 'bills') {
                        for (var j = 0; j < _this.payments.length; j++) {
                            for (var k = 0; k < _this.payments[j]['bills'].length; k++) {
                                if (_this.payments[j]['bills'][k]['bill_id'] == _this.selectedfilters[i]['id']) {
                                    _this.filterpayments.push(_this.payments[j]);
                                }
                            }
                        }
                    }
                }
                console.error(JSON.stringify(_this.filterpayments));
            }
        });
        mdl.present();
    };
    DriverPage.prototype.removeTerm = function (sc) {
        var sFilters = [];
        for (var i = 0; i < this.selectedfilters.length; i++) {
            if (this.selectedfilters[i]['type'] == sc['type'] && this.selectedfilters[i]['id'] == sc['id']) {
            }
            else {
                sFilters.push(this.selectedfilters[i]);
            }
        }
        this.selectedfilters = sFilters;
        if (this.selectedfilters.length == 0) {
            this.filterpayments = this.payments;
            return;
        }
        this.filterpayments = [];
        for (var i = 0; i < this.selectedfilters.length; i++) {
            if (this.selectedfilters[i]['type'] == 'reasons') {
                for (var j = 0; j < this.payments.length; j++) {
                    for (var k = 0; k < this.payments[j]['bills'].length; k++) {
                        if (this.payments[j]['bills'][k]['reason'] == this.selectedfilters[i]['name']) {
                            this.filterpayments.push(this.payments[j]);
                        }
                    }
                }
            }
            else if (this.selectedfilters[i]['type'] == 'payments') {
                for (var j = 0; j < this.payments.length; j++) {
                    if (this.payments[j]['payment_id'] == this.selectedfilters[i]['id']) {
                        this.filterpayments.push(this.payments[j]);
                    }
                }
            }
            else if (this.selectedfilters[i]['type'] == 'bills') {
                for (var j = 0; j < this.payments.length; j++) {
                    for (var k = 0; k < this.payments[j]['bills'].length; k++) {
                        if (this.payments[j]['bills'][k]['bill_id'] == this.selectedfilters[i]['id']) {
                            this.filterpayments.push(this.payments[j]);
                        }
                    }
                }
            }
        }
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-driver',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver/driver.html"*/'<!-- Driver -->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-user" aria-hidden="true"></i>\n          DRIVER\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container driver">\n\n    <ion-row class="profile-details" style="padding-top: 0px !important;">\n      <ion-col col-12 style="text-align: right !important;">\n        <button ion-button outline (click)="update()">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button outline color="danger" (click)="presentConfirmDelete()">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-12 class="profile-picture text-center">\n        <img width="80px" height="80px" *ngIf="img==null" src="../../assets/saarthi-icon/png/driver.png" alt="">\n        <img width="80px" height="80px" *ngIf="img!=null" [src]="img[\'image_url\']" alt="">\n        <p style="margin-top: 10px" (click)="addProfilePic()">ADD PHOTO</p>\n      </ion-col>\n      <ion-col col-6>\n        NAME: <br> <span class="text-color-primary">{{driver[\'name\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        PHONE: <br>  <span class="text-color-primary">{{driver[\'phone_number\']}} <i style="font-size: 18px; margin-left: 10px;" class="fa fa-phone" aria-hidden="true"></i>\n        </span>\n      </ion-col>\n      <ion-col col-6>\n        STATUS:<br>  <span  class="text-color-primary">{{driver[\'worker_type\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        LOCATION: <br>  <span class="text-color-primary">{{driver[\'city\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        JOINED SINCE: <br>  <span  class="text-color-primary">{{vehicle_joining_date}}</span>\n      </ion-col>\n      <ion-col col-6>\n        VEHICLE NUMBER:  <br>  <span class="text-color-primary">{{vehicle_number}}</span>\n      </ion-col>\n\n      <ion-col col-6>\n      \n      </ion-col>\n\n\n      <ion-col col-12 (click)="showMore()" class="text-right">\n        <i id="fa-arrow-circle-down-driver" class="fa fa-arrow-circle-down"  aria-hidden="true" style="font-size: 20px;color: #0752af;"></i>\n      </ion-col>\n\n      \n        <ion-col col-6 *ngIf="isShown">\n          SALARY: <br>  <span  class="text-color-primary">{{driver[\'salary\']}}</span>\n        </ion-col>\n        <ion-col col-6 *ngIf="isShown"> \n          REFERENCE: <br>  <span class="text-color-primary">{{driver[\'reference_person\']}}</span>\n        </ion-col>\n  \n        <ion-col col-12 *ngIf="isShown">\n          <ion-row style="padding: 15px;">\n            <ion-col col-7 class="pt-5">\n              DOCUMENT NUMBER: <br>\n              <span class="text-color-primary" *ngIf="driver[\'aadhar_card_number\'] != null">AADHAR - {{driver[\'aadhar_card_number\']}}</span>\n              <span class="text-color-primary" *ngIf="driver[\'pan_card_number\'] != null">PAN - {{driver[\'pan_card_number\']}}</span>\n                      \n            </ion-col>\n            <ion-col col-5 >\n              <img src="../../assets/imgs/logo.png" alt="" width="100px">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-12 *ngIf="isShown">\n          <ion-row style="padding: 15px;">\n            <ion-col col-7 class="pt-5">\n              DRIVER LICENSE: <br>\n              <span class="text-color-primary">{{driver[\'license_number\']}}</span>\n              \n            </ion-col>\n            <ion-col col-5 >\n              <img src="../../assets/imgs/logo.png" alt="" width="100px">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-12 *ngIf="isShown">\n          <ion-row style="padding: 15px;">\n            <ion-col col-7 class="pt-5">\n              BANK DETAILS: <br>\n              <span class="text-color-primary">{{driver[\'account_number\']}}</span>\n              \n            </ion-col>\n            <ion-col col-5 >\n              <img src="../../assets/imgs/logo.png" alt="" width="100px">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n\n        <ion-col col-12>\n          <div class="scroll-grid" *ngIf="isShown">\n            <div class="scrollmenu">\n             \n              <a href="#home">VEHICLE NUMBER(S)</a>\n              <a href="#news">JOINING DATE</a>\n              <a href="#contact">LEAVING DATE</a>\n              <a href="#about">REASON/DETAILS</a>\n              <a href="#about">JOINING KM</a>\n              <a href="#about">LEAVING KM</a>\n\n          \n              <div class="scrollmenu-list" id="1" *ngFor="let drv of driverhistory">\n                <p>{{drv[\'vehicle\'][\'vehicle_number\']}}</p>\n                <p>{{drv[\'driver_start_date\']}}</p>\n                <p>{{drv[\'driver_end_date\']}}</p>\n                <p>{{drv[\'driver_start_details\']}}</p>\n                <p>{{drv[\'driver_start_km\']}} KM</p>\n                <p>{{drv[\'driver_end_km\']}} KM</p>\n              </div>\n        \n            \n            </div>\n            <div class="show-arrows">\n              <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n        \n              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n        \n            </div>\n          </div>\n        </ion-col>\n\n        <ion-col col-12>\n          <div class="text-center">\n            <button ion-button round class="remove-driver" (click)="openRemoveDriverFromKhata()"> REMOVE DRIVER</button>\n          </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="report-statement">\n      <ion-col col-6>\n        <div class="full-report-statement" (click)="navCtrl.push(\'ReportFullPage\',{\'person\':this.driver})">\n          <i class="fa fa-file-o" aria-hidden="true"></i>\n\n          FULL REPORT\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="monthy-statement" (click)="navCtrl.push(\'ReportFullPage\',{\'person\':this.driver})">\n          <i class="fa fa-file" aria-hidden="true"></i>\n\n          MONTHY STATEMENT\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="bill">\n      <ion-col col-4>\n        <p class="total-bill">TOTAL BILL</p>\n        <div class="ammount">₹{{driver[\'total_bill_money\'] }}</div>\n      </ion-col>\n      <ion-col col-4>\n        <p class="paid-money">PAID MONEY</p>\n        <div class="ammount">₹{{driver[\'paid_money\']}}</div>\n      </ion-col>\n      <ion-col col-4>\n        <p class="due-money">DUE MONEY</p>\n        \n        <div class="ammount">₹{{due}}</div>\n      </ion-col>\n    </ion-row>\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="searchTerm" (click)="searchBillDetails()" placeholder="SEARCH"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n    <ion-row radio-group mode="ios" [(ngModel)]="type" (ionChange)="checkChange()">\n      <ion-col col-4>\n        <ion-item>\n          <ion-label>Bill #</ion-label>\n          <ion-radio value="bno"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label>Payment #</ion-label>\n          <ion-radio value="pno"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label>All</ion-label>\n          <ion-radio value="ano"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <p style="padding-left: 9px !important;padding-right: 9px !important; padding-bottom: 5px !important;">\n      <ion-chip *ngFor="let sc of selectedfilters" style="margin-right: 5px !important; margin-left: 5px !important;">\n        <ion-label *ngIf="sc[\'type\'] == \'bills\'" >Bill # {{sc[\'id\']}}</ion-label>\n        <ion-label *ngIf="sc[\'type\'] == \'payments\'" >Payment # {{sc[\'id\']}}</ion-label>\n        <ion-label *ngIf="sc[\'type\'] == \'reasons\'" >{{sc[\'name\']}}</ion-label>\n        <ion-icon name="close" style="margin-right: 6px;background:transparent !important; color: red !important;" (click)="removeTerm(sc)"></ion-icon>\n      </ion-chip>\n      </p>\n\n      <div class="scroll-grid" >\n        <div class="scrollmenu">\n         \n          <a href="#home">BILL# / PAYMENT#</a>\n          <a href="#news">BILL / PAYMENT</a>\n          <a href="#contact">VEHICLES</a>\n          <a href="#about">COST / PAID</a>\n          <a href="#about">DETAILS</a>\n          <a href="#about">IMAGE</a>\n  \n          <div *ngIf="filterpayments.length == 0" style="padding: 15px;text-align: center;">\n              <ion-spinner></ion-spinner>\n              <br/>\n            <span style="color: rgb(63, 63, 63);">\n              Loading\n            </span>\n          </div>\n      \n          <div class="scrollmenu-list total-bill " *ngFor="let payment of filterpayments" >\n            <div *ngIf="type==\'pno\' || type == \'\'" (click)="selectThisPayment(payment)">\n            <div [ngClass]="payment[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'">\n            <p>{{payment[\'payment_id\']}}</p>\n            <p>{{payment[\'date_of_payment\']}}</p>\n            <p></p>\n            <p>₹ {{payment[\'payment_amount\']}}</p>\n            <p>{{payment[\'details\']}}</p>\n            <p>\n              <span *ngIf="payment[\'payment_image_1_id\'] != null && payment[\'payment_image_1_id\'] != undefined">\n                <img [src]="payment[\'payment_image_1_id\']" style="width:11% !important" (click)="viewImage(payment[\'payment_image_1_id\'])" />\n              </span>\n            </p>\n            </div>\n            </div>\n  \n            <div *ngIf="type==\'bno\'  || type == \'\'">\n            <div class="scrollmenu-list paid-money " *ngFor="let bill of payment[\'bills\']" (click)="selectThisBill(bill,payment)">\n              <div [ngClass]="bill[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'">\n              <p>{{bill[\'bill_id\']}}</p>\n              <p>{{bill[\'bill_date\']}}</p>\n              <p>{{bill[\'vehicle_number\']}}</p>\n              <p>₹ {{bill[\'total_bill\']}}</p>\n              <p>{{bill[\'bill_details\']}}</p>\n              <p>\n                <span *ngIf="bill[\'image\'] != null && bill[\'image\'] != undefined">\n                  <img [src]="bill[\'image\'][\'image_url\']" style="width:11% !important" (click)="viewBillImage(bill[\'image\'])" />\n                </span>\n              </p>\n              </div>\n            </div>\n          </div>\n          <div *ngIf="type==\'ano\'  || type == \'\'" (click)="selectThisPayment(payment)">\n            <div [ngClass]="payment[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'">\n            <p>{{payment[\'payment_id\']}}</p>\n            <p>{{payment[\'date_of_payment\']}}</p>\n            <p></p>\n            <p>₹ {{payment[\'payment_amount\']}}</p>\n            <p>{{payment[\'details\']}}</p>\n            <p>\n              <span *ngIf="payment[\'payment_image_1_id\'] != null && payment[\'payment_image_1_id\'] != undefined">\n                <img [src]="payment[\'payment_image_1_id\']" style="width:11% !important" (click)="viewImage(payment[\'payment_image_1_id\'])" />\n              </span>\n            </p>\n            <div class="scrollmenu-list paid-money " *ngFor="let bill of payment[\'bills\']" (click)="selectThisBill(bill,payment)">\n              <div [ngClass]="bill[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'">\n              <p>{{bill[\'bill_id\']}}</p>\n              <p>{{bill[\'bill_date\']}}</p>\n              <p>{{bill[\'reason\']}}</p>\n              <p>₹ {{bill[\'total_bill\']}}</p>\n              <p>{{bill[\'bill_details\']}}</p>\n              <p>\n                <span *ngIf="bill[\'image\'] != null && bill[\'image\'] != undefined">\n                  <img [src]="bill[\'image\'][\'image_url\']" style="width:11% !important" (click)="viewBillImage(bill[\'image\'])" />\n                </span>\n              </p>\n              </div>\n            </div>\n            </div>\n          </div>\n  \n          </div>\n    \n         \n        </div>\n        <div class="show-arrows">\n          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n  \n          <button ion-button class="custom-button-u" style="width: 34px !important;" *ngIf="updatebill" (click)="viewBill()"> <ion-icon name="eye" class="ion-icon-w"></ion-icon> </button>\n          <button ion-button class="custom-button-u" *ngIf="updatebill" (click)="updateBill()">  &nbsp;  Change  &nbsp;  <ion-icon name="create" class="ion-icon-w"></ion-icon> </button>\n          <button ion-button class="custom-button-u" *ngIf="updatebill" (click)="deleteBill()"> &nbsp;Erase  &nbsp;  <ion-icon name="ios-trash" class="ion-icon-w"></ion-icon> </button>\n   \n          <button ion-button class="custom-button-u" style="width: 34px !important;" *ngIf="updatepayment" (click)="viewPayment()"> <ion-icon name="eye" class="ion-icon-w"></ion-icon> </button>\n          <button ion-button class="custom-button-u" *ngIf="updatepayment" (click)="updatePayment()">  &nbsp;  Change  &nbsp;  <ion-icon name="create" class="ion-icon-w"></ion-icon> </button>\n          <button ion-button class="custom-button-u" *ngIf="updatepayment" (click)="deletePayment()"> &nbsp;Erase  &nbsp;  <ion-icon name="ios-trash" class="ion-icon-w"></ion-icon> </button>\n   \n    \n          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n    \n        </div>\n      </div>\n\n    \n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openLedgePage()">GIVE MONEY</button>\n    </div>\n\n  </div>\n</ion-content> \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver/driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_message_message__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ })

});
//# sourceMappingURL=42.js.map