webpackJsonp([62],{

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillPaymentSearchPageModule", function() { return BillPaymentSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_payment_search__ = __webpack_require__(937);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BillPaymentSearchPageModule = /** @class */ (function () {
    function BillPaymentSearchPageModule() {
    }
    BillPaymentSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bill_payment_search__["a" /* BillPaymentSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__bill_payment_search__["a" /* BillPaymentSearchPage */]),
            ],
        })
    ], BillPaymentSearchPageModule);
    return BillPaymentSearchPageModule;
}());

//# sourceMappingURL=bill-payment-search.module.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillPaymentSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(493);
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





var BillPaymentSearchPage = /** @class */ (function () {
    // BILL NUMBER, PAYMENT NUMBER, REASONS
    function BillPaymentSearchPage(alertCtrl, navCtrl, navParams, rest, codes, message, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.message = message;
        this.modalCtrl = modalCtrl;
        this.bills = [];
        this.isupdate = false;
        this.filterbills = '';
        this.searchTerm = '';
        this.billDetails = [];
        this.filterbillDetails = [];
        this.shops = [];
        this.vehicles = [];
        this.worker_type = '';
        this.worker_id = '';
        this.search = [];
        this.displayfilter = false;
        this.displaysearchitems = [];
        this.problems = [];
        this.selectedfilters = [];
        this.payments = [];
        this.filterpayments = [];
        this.reasons = [];
        this.worker_type = this.navParams.get("worker_type");
        this.worker_id = this.navParams.get("worker_id");
        this.getBillsBySrthId();
    }
    BillPaymentSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Bill Payment Search Page');
    };
    BillPaymentSearchPage.prototype.clickedTerm = function (sr) {
        for (var i = 0; i < this.selectedfilters.length; i++) {
            if (this.selectedfilters[i]['type'] == sr['type'] && this.selectedfilters[i]['id'] == sr['id']) {
                return;
            }
        }
        this.selectedfilters.push(sr);
    };
    BillPaymentSearchPage.prototype.removeTerm = function (sr) {
        var sFilters = [];
        for (var i = 0; i < this.selectedfilters.length; i++) {
            if (this.selectedfilters[i]['type'] == sr['type'] && this.selectedfilters[i]['id'] == sr['id']) {
            }
            else {
                sFilters.push(this.selectedfilters[i]);
            }
        }
        this.selectedfilters = sFilters;
    };
    BillPaymentSearchPage.prototype.searchGrid = function () {
        localStorage.setItem("bill_payment_search", JSON.stringify(this.selectedfilters));
        this.navCtrl.pop();
    };
    BillPaymentSearchPage.prototype.getReasons = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_REASON, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.reasons = resp['data'];
                for (var i = 0; i < _this.reasons.length; i++) {
                    var searchobj = {
                        "type": "reasons",
                        "id": "",
                        "name": _this.reasons[i]['reason'],
                        "amount": ""
                    };
                    _this.search.push(searchobj);
                }
                for (var i = 0; i < _this.payments.length; i++) {
                    var searchobj = {
                        "type": "payments",
                        "id": String(_this.payments[i]['payment_id']),
                        "name": _this.payments[i]['mode_of_payment'],
                        "amount": String(_this.payments[i]['payment_amount'])
                    };
                    _this.search.push(searchobj);
                }
                for (var i = 0; i < _this.bills.length; i++) {
                    var searchobj = {
                        "type": "bills",
                        "id": String(_this.bills[i]['bill_id']),
                        "name": _this.bills[i]['person_shop_name'],
                        "amount": String(_this.bills[i]['total_bill'])
                    };
                    _this.search.push(searchobj);
                }
                _this.displaysearchitems = _this.search;
                console.log(JSON.stringify(_this.search));
            }
        });
    };
    BillPaymentSearchPage.prototype.getBillsBySrthId = function () {
        var _this = this;
        this.isupdate = false;
        var data = {
            "worker_id": this.worker_id,
            "worker_type": this.worker_type
        };
        this.rest.post(this.codes.GET_EXPENSE_BILL_BY_WORKER_ID, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.bills = resp['data'];
                _this.filterbills = _this.bills;
                for (var i = 0; i < _this.bills.length; i++) {
                    _this.bills[i]['selected'] = 'false';
                    _this.filterbills[i]['selected'] = 'false';
                }
                _this.getPayments();
            }
        });
    };
    BillPaymentSearchPage.prototype.getPayments = function () {
        var _this = this;
        var data = {
            "worker_id": this.worker_id
        };
        this.rest.post(this.codes.GET_DISPLAY_BILL_BY_WORKER_ID, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.payments = resp['data'];
                _this.filterpayments = _this.payments;
                for (var i = 0; i < _this.payments.length; i++) {
                    _this.payments[i]['selected'] = 'false';
                    _this.filterpayments[i]['selected'] = 'false';
                }
                if (_this.worker_type == 'shop' || _this.worker_type == 'mechanic')
                    _this.getVehicles();
                else
                    _this.getReasons();
            }
        });
    };
    BillPaymentSearchPage.prototype.getVehicles = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "vehicle_owner_srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.vehicles = resp['data'];
                for (var i = 0; i < _this.vehicles.length; i++) {
                    var searchobj = {
                        "type": "vehicles",
                        "id": String(_this.vehicles[i]['vehicle_id']),
                        "name": _this.vehicles[i]['vehicle_number'],
                        "amount": ""
                    };
                    _this.search.push(searchobj);
                }
                for (var i = 0; i < _this.payments.length; i++) {
                    var searchobj = {
                        "type": "payments",
                        "id": String(_this.payments[i]['payment_id']),
                        "name": _this.payments[i]['mode_of_payment'],
                        "amount": String(_this.payments[i]['payment_amount'])
                    };
                    _this.search.push(searchobj);
                }
                for (var i = 0; i < _this.bills.length; i++) {
                    var searchobj = {
                        "type": "bills",
                        "id": String(_this.bills[i]['bill_id']),
                        "name": _this.bills[i]['person_shop_name'],
                        "amount": String(_this.bills[i]['total_bill'])
                    };
                    _this.search.push(searchobj);
                }
                _this.displaysearchitems = _this.search;
                console.log(JSON.stringify(_this.search));
            }
        });
    };
    BillPaymentSearchPage.prototype.filterDetails = function (event) {
        var _this = this;
        this.displaysearchitems = this.search.filter(function (wp) {
            if (_this.searchTerm != '') {
                var str = wp.id + wp.name;
                return (str.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            }
            else
                return _this.search;
        });
    };
    BillPaymentSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-bill-payment-search',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/bill-payment-search/bill-payment-search.html"*/'<ion-header>\n  <ion-searchbar (ionInput)="filterDetails($event)" [(ngModel)]="searchTerm"></ion-searchbar>\n\n\n\n</ion-header>\n<ion-content padding>\n\n  <p style="padding-left: 9px !important;padding-right: 9px !important; padding-bottom: 5px !important;">\n    <ion-chip *ngFor="let sc of selectedfilters" style="margin-right: 5px !important; margin-left: 5px !important;">\n      <ion-label *ngIf="sc[\'type\'] == \'bills\'" >Bill # {{sc[\'id\']}}</ion-label>\n      <ion-label *ngIf="sc[\'type\'] == \'payments\'" >Payment # {{sc[\'id\']}}</ion-label>\n      <ion-label *ngIf="sc[\'type\'] == \'reasons\' || sc[\'type\'] == \'vehicles\'" >{{sc[\'name\']}}</ion-label>\n      <ion-icon name="close" style="margin-right: 6px;background:transparent !important; color: red !important;" (click)="removeTerm(sc)"></ion-icon>\n    </ion-chip>\n    </p>\n\n\n  <ion-list style="margin-top: 20px;">\n\n    <p *ngFor="let sr of displaysearchitems" >\n\n      <ion-item *ngIf="sr[\'type\'] == \'vehicles\'" (click)="clickedTerm(sr)">\n        <h2>{{sr[\'name\']}}</h2>\n        <p>Vehicle</p>\n      </ion-item>\n \n      <ion-item *ngIf="sr[\'type\'] == \'reasons\'" (click)="clickedTerm(sr)">\n        <h2>{{sr[\'name\']}}</h2>\n        <p>Reason</p>\n      </ion-item>\n\n      <ion-item *ngIf="sr[\'type\'] == \'payments\'" (click)="clickedTerm(sr)">\n        <h2>Payment # {{sr[\'id\']}}</h2>\n        <p>Shop</p>\n      </ion-item>\n\n      <ion-item *ngIf="sr[\'type\'] == \'bills\'" (click)="clickedTerm(sr)">\n        <h2>Bill # {{sr[\'id\']}}</h2>\n      </ion-item>\n    </p>\n\n\n\n  </ion-list>\n\n\n\n\n</ion-content>\n<ion-footer>\n  <button ion-button full (click)="searchGrid()">\n    Search\n  </button>\n</ion-footer>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/bill-payment-search/bill-payment-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"]])
    ], BillPaymentSearchPage);
    return BillPaymentSearchPage;
}());

//# sourceMappingURL=bill-payment-search.js.map

/***/ })

});
//# sourceMappingURL=62.js.map