webpackJsonp([75],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountKhataPageModule", function() { return AccountKhataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_khata__ = __webpack_require__(922);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountKhataPageModule = /** @class */ (function () {
    function AccountKhataPageModule() {
    }
    AccountKhataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account_khata__["a" /* AccountKhataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__account_khata__["a" /* AccountKhataPage */]),
            ],
        })
    ], AccountKhataPageModule);
    return AccountKhataPageModule;
}());

//# sourceMappingURL=account-khata.module.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountKhataPage; });
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




var AccountKhataPage = /** @class */ (function () {
    function AccountKhataPage(modalCtrl, navCtrl, navParams, rest, codes) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.workers = [];
        this.filterworkers = [];
        this.mechanicshop = false;
        this.ms = [];
        this.documentinsurance = false;
        this.di = [];
        this.driver = false;
        this.dr = [];
        this.all = true;
        this.displayfilter = false;
        this.displaysearchitems = [];
        this.searchTerm = '';
        this.search = [];
        this.total_bill = 0.00;
        this.paid_money = 0.00;
        this.due_money = 0.00;
    }
    AccountKhataPage.prototype.details = function (worker) {
        localStorage.setItem("worker", JSON.stringify(worker));
        if (worker['worker_type'] == 'driver') {
            this.navCtrl.push('DriverPage');
        }
        else if (worker['worker_type'] == 'mechanic') {
            this.navCtrl.push('MechanicPage');
        }
        else if (worker['worker_type'] == 'shop') {
            this.navCtrl.push('ShopPage');
        }
        else if (worker['worker_type'] == 'documents') {
            this.navCtrl.push('DocumentPage');
        }
        else if (worker['worker_type'] == 'insurance') {
            this.navCtrl.push('InsurancePage');
        }
    };
    AccountKhataPage.prototype.fullreport = function () {
        var modalCtrl = this.modalCtrl.create('ReportFullPage');
        modalCtrl.present();
    };
    AccountKhataPage.prototype.clicksearchbar = function () {
        this.displayfilter = true;
        this.displaysearchitems = this.search;
    };
    AccountKhataPage.prototype.filterWorker = function (event) {
        var _this = this;
        if (this.searchTerm != '') {
            this.displayfilter = true;
            this.displaysearchitems = this.search;
        }
        if (this.searchTerm == '') {
            this.displayfilter = false;
            this.displaysearchitems = this.search;
            this.filterworkers = this.workers;
        }
        this.displaysearchitems = this.search.filter(function (wp) {
            if (_this.searchTerm != '') {
                var str = wp.type + wp.name;
                return (str.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            }
            else
                return _this.search;
        });
    };
    AccountKhataPage.prototype.clickedsearchitem = function (sr) {
        this.displayfilter = false;
        this.displaysearchitems = this.search;
        if (sr['type'] == 'name') {
            this.searchTerm = sr['name'];
            this.filterworkers = [];
            for (var i = 0; i < this.workers.length; i++) {
                if (this.workers[i]['name'] == sr['name']) {
                    this.filterworkers.push(this.workers[i]);
                }
            }
        }
        else if (sr['type'] == 'type') {
            for (var i = 0; i < this.workers.length; i++) {
                if (this.workers[i]['worker_type'] == sr['name']) {
                    this.filterworkers = [];
                    this.searchTerm = sr['name'];
                    this.filterworkers.push(this.workers[i]);
                }
            }
        }
    };
    AccountKhataPage.prototype.num = function (str) {
        return Number(str);
    };
    AccountKhataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountKhataPage');
    };
    AccountKhataPage.prototype.selectMechanicShop = function () {
        this.documentinsurance = false;
        this.driver = false;
        this.all = false;
        this.mechanicshop = true;
    };
    AccountKhataPage.prototype.selectDocumentInsurance = function () {
        this.mechanicshop = false;
        this.driver = false;
        this.all = false;
        this.documentinsurance = true;
    };
    AccountKhataPage.prototype.selectDriver = function () {
        this.documentinsurance = false;
        this.mechanicshop = false;
        this.all = false;
        this.driver = true;
    };
    AccountKhataPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": userdata[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.workers = resp['data'];
                _this.ms = [];
                _this.di = [];
                _this.dr = [];
                _this.total_bill = 0.00;
                _this.due_money = 0.00;
                _this.paid_money = 0.00;
                _this.search = [];
                for (var i = 0; i < _this.workers.length; i++) {
                    // alert(this.workers[i]['worker_type']);
                    _this.total_bill = _this.total_bill + Number(_this.workers[i]['total_bill_money']);
                    _this.paid_money = _this.paid_money + Number(_this.workers[i]['paid_money']);
                    _this.filterworkers = _this.workers;
                    var searchobj = {
                        "type": "name",
                        "name": _this.workers[i]['name'],
                    };
                    _this.search.push(searchobj);
                    if (_this.workers[i]['worker_type'] == 'driver')
                        _this.dr.push(_this.workers[i]);
                    else if (_this.workers[i]['worker_type'] == 'mechanic' || _this.workers[i]['worker_type'] == 'shop')
                        _this.ms.push(_this.workers[i]);
                    else if (_this.workers[i]['worker_type'] == 'documents' || _this.workers[i]['worker_type'] == 'insurance')
                        _this.di.push(_this.workers[i]);
                }
                console.debug("Drivers : " + JSON.stringify(_this.dr));
                console.debug("DI : " + JSON.stringify(_this.di));
                console.debug("MS : " + JSON.stringify(_this.ms));
            }
            searchobj = {
                "type": "type",
                "name": "mechanic",
            };
            _this.search.push(searchobj);
            searchobj = {
                "type": "type",
                "name": "shop",
            };
            _this.search.push(searchobj);
            searchobj = {
                "type": "type",
                "name": "documents",
            };
            _this.search.push(searchobj);
            searchobj = {
                "type": "type",
                "name": "driver",
            };
            _this.search.push(searchobj);
            searchobj = {
                "type": "type",
                "name": "insurance",
            };
            _this.search.push(searchobj);
            _this.due_money = _this.total_bill - _this.paid_money;
        });
    };
    AccountKhataPage.prototype.openDriverAddPage = function () {
        this.navCtrl.push('AddDriverPage', { "update": "false" });
    };
    AccountKhataPage.prototype.openDriverPage = function () {
        this.navCtrl.push('DriverPage');
    };
    AccountKhataPage.prototype.openDocumentPage = function () {
        this.navCtrl.push('DocumentPage');
    };
    AccountKhataPage.prototype.openInsurancePage = function () {
        this.navCtrl.push('InsurancePage');
    };
    AccountKhataPage.prototype.openShopPage = function () {
        this.navCtrl.push('ShopPage');
    };
    AccountKhataPage.prototype.openMechanicPage = function () {
        this.navCtrl.push('MechanicPage');
    };
    AccountKhataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-account-khata',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/account-khata/account-khata.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-7 class="person-name text-left">\n        <ion-title style="margin-left: -30px;">        \n          <i style="margin-left: 10px" class="fa fa-file-text" aria-hidden="true"></i> &nbsp; ACCOUNT KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <!-- <ion-row class="justify-content-center">\n      <ion-col col-3 class="total-cost selected">\n        TOTAL COST\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="total-cost">\n        TOTAL PAID\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="total-cost">\n        TOTAL DUE\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <ion-row class="bill">\n      <ion-col col-4>\n        <p class="total-bill">TOTAL BILL</p>\n        <div class="ammount">₹ {{total_bill}}</div>\n      </ion-col>\n      <ion-col col-4>\n        <p class="paid-money">PAID MONEY</p>\n        <div class="ammount">₹ {{paid_money}}</div>\n      </ion-col>\n      <ion-col col-4>\n        <p class="due-money">DUE MONEY</p>\n        \n        <div class="ammount">₹ {{due_money}}</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="full-report"> \n      <ion-col col-12 (click)="fullreport()">\n          FULL REPORT <i style="margin-left: 10px" class="fa fa-file-text" aria-hidden="true"></i>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="justify-content-center">\n      <ion-col col-3 [ngClass]="mechanicshop == true ? \'sort-option mechanic selected\' : \'sort-option mechanic\'" (click)="selectMechanicShop()">\n        MECHANIC SHOP\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 [ngClass]="documentinsurance== true ? \'sort-option document selected\' : \'sort-option document\'"  (click)="selectDocumentInsurance()">\n        DOCUMENT INSURANCE\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 [ngClass]="driver== true ? \'sort-option drive selected\' : \'sort-option drive\'" (click)="selectDriver()">\n        DRIVER\n\n      </ion-col>\n\n    </ion-row>\n    <!-- (ionInput)="getItems($event)" -->\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="searchTerm" (click)="clicksearchbar()" (ionInput)="filterWorker($event)"  placeholder="SEARCH"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n    <ion-card *ngIf="displayfilter">\n      <ion-card-content>\n        <ion-list >\n          <ion-item *ngFor="let sr of displaysearchitems" (click)="clickedsearchitem(sr)">\n           <div *ngIf="sr[\'type\']==\'name\'">\n            <p style="color: #000;">{{sr[\'name\']}}</p>\n             <p>Person</p>\n            </div>\n           <div *ngIf="sr[\'type\']==\'type\'">\n              <p style="color: #000;">{{sr[\'name\']}}</p>\n              <p>Status</p>\n           </div>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-row class="justify-content-center">\n      <ion-col col-3 class="details driver-name">\n        NAME\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="details status">\n        STATUS\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="details">\n        DUE AMOUNT\n      </ion-col>\n    </ion-row>\n    <div *ngIf="all && !documentinsurance && !mechanicshop && !driver">\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of filterworkers"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="documentinsurance && !all && !mechanicshop && !driver">\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of di"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of ms"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of dr"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="mechanicshop && !all && !documentinsurance && !driver">\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of ms"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of di"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of dr"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="driver && !all && !mechanicshop && !documentinsurance">\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of dr"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of di"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n    <ion-row class="every-details justify-content-center" *ngFor="let worker of ms"  (click)="details(worker)">\n      <ion-col col-4 class="name" >\n        {{worker[\'name\']}}\n      </ion-col>\n      <ion-col col-4 >\n        {{worker[\'worker_type\']}}\n      </ion-col>\n      <ion-col col-4 class="money">\n        {{num(worker[\'total_bill_money\']) - num(worker[\'paid_money\'])}}\n      </ion-col>\n    </ion-row>\n  </div>\n\n    <div class="fixed-div text-center mt-4" >\n      <button ion-button round class="custom-button" (click)="openDriverAddPage()">+ ADD PERSON</button>\n    </div>\n    \n  </div>\n</ion-content>  \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/account-khata/account-khata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */]])
    ], AccountKhataPage);
    return AccountKhataPage;
}());

//# sourceMappingURL=account-khata.js.map

/***/ })

});
//# sourceMappingURL=75.js.map