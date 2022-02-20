webpackJsonp([44],{

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverKhataSearchPageModule", function() { return DriverKhataSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_khata_search__ = __webpack_require__(956);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverKhataSearchPageModule = /** @class */ (function () {
    function DriverKhataSearchPageModule() {
    }
    DriverKhataSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver_khata_search__["a" /* DriverKhataSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__driver_khata_search__["a" /* DriverKhataSearchPage */]),
            ],
        })
    ], DriverKhataSearchPageModule);
    return DriverKhataSearchPageModule;
}());

//# sourceMappingURL=driver-khata-search.module.js.map

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverKhataSearchPage; });
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





var DriverKhataSearchPage = /** @class */ (function () {
    function DriverKhataSearchPage(alertCtrl, navCtrl, navParams, rest, codes, message, modalCtrl) {
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
        this.drivers = [];
        this.search = [];
        this.displayfilter = false;
        this.displaysearchitems = [];
        this.problems = [];
        this.reasons = [];
        this.selectedfilters = [];
        this.getVehicles();
    }
    DriverKhataSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverKhataSearchPage');
    };
    DriverKhataSearchPage.prototype.getVehicles = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "vehicle_owner_srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.vehicles = resp['data'];
                _this.getreason();
            }
        });
    };
    DriverKhataSearchPage.prototype.getreason = function () {
        var _this = this;
        this.rest.post(this.codes.GET_REASON, {}).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.reasons = resp['data'];
                _this.getDrivers();
            }
        });
    };
    DriverKhataSearchPage.prototype.getDrivers = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                var dt = resp['data'];
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i]['worker_type'] == 'driver') {
                        _this.drivers.push(dt[i]);
                    }
                }
                for (var i = 0; i < _this.vehicles.length; i++) {
                    var searchobj = {
                        "type": "vehicles",
                        "name": _this.vehicles[i]['vehicle_number'],
                        "id": String(_this.vehicles[i]['vehicle_id']),
                        "amount": ""
                    };
                    _this.search.push(searchobj);
                }
                for (var i = 0; i < _this.drivers.length; i++) {
                    var searchobj = {
                        "type": "driver",
                        "name": _this.drivers[i]['name'],
                        "id": String(_this.drivers[i]['worker_id']),
                        "amount": ""
                    };
                    _this.search.push(searchobj);
                }
                for (var i = 0; i < _this.reasons.length; i++) {
                    var searchobj = {
                        "type": "reasons",
                        "id": "",
                        "name": _this.reasons[i]['reason'],
                        "amount": ""
                    };
                    _this.search.push(searchobj);
                }
                _this.displaysearchitems = _this.search;
                console.log(JSON.stringify(_this.search));
            }
        });
    };
    DriverKhataSearchPage.prototype.clickedTerm = function (sr) {
        for (var i = 0; i < this.selectedfilters.length; i++) {
            if (this.selectedfilters[i]['type'] == sr['type'] && this.selectedfilters[i]['id'] == sr['id']) {
                return;
            }
        }
        this.selectedfilters.push(sr);
    };
    DriverKhataSearchPage.prototype.removeTerm = function (sr) {
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
    DriverKhataSearchPage.prototype.searchGrid = function () {
        localStorage.setItem("searchdriver", JSON.stringify(this.selectedfilters));
        this.navCtrl.pop();
    };
    DriverKhataSearchPage.prototype.filterDetails = function (event) {
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
    DriverKhataSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-driver-khata-search',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver-khata-search/driver-khata-search.html"*/'<ion-header>\n  <ion-searchbar (ionInput)="filterDetails($event)" [(ngModel)]="searchTerm"></ion-searchbar>\n\n\n\n</ion-header>\n<ion-content padding>\n\n  <p style="padding-left: 9px !important;padding-right: 9px !important; padding-bottom: 5px !important;">\n    <ion-chip *ngFor="let sc of selectedfilters" style="margin-right: 5px !important; margin-left: 5px !important;">\n      <!-- <ion-label *ngIf="sc[\'type\'] == \'bills\'" >Bill # {{sc[\'id\']}}</ion-label> -->\n      <ion-label *ngIf="sc[\'type\'] == \'reasons\' || sc[\'type\'] == \'vehicles\' || sc[\'type\'] == \'drivers\'" >{{sc[\'name\']}}</ion-label>\n      <ion-icon name="close" style="margin-right: 6px;background:transparent !important; color: red !important;" (click)="removeTerm(sc)"></ion-icon>\n    </ion-chip>\n    </p>\n\n\n  <ion-list style="margin-top: 20px;">\n\n    <p *ngFor="let sr of displaysearchitems" >\n \n      <ion-item *ngIf="sr[\'type\'] == \'vehicles\'" (click)="clickedTerm(sr)">\n        <h2>{{sr[\'name\']}}</h2>\n        <p>Vehicle</p>\n      </ion-item>\n\n      <ion-item *ngIf="sr[\'type\'] == \'shopname\'" (click)="clickedTerm(sr)">\n        <h2>{{sr[\'name\']}}</h2>\n        <p>Driver</p>\n      </ion-item>\n\n      <ion-item *ngIf="sr[\'type\'] == \'reasons\'" (click)="clickedTerm(sr)">\n        <h2>{{sr[\'name\']}}</h2>\n        <p>Reason</p>\n      </ion-item>\n    </p>\n\n\n\n  </ion-list>\n\n\n\n\n</ion-content>\n<ion-footer>\n  <button ion-button full (click)="searchGrid()">\n    Search\n  </button>\n</ion-footer>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver-khata-search/driver-khata-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"]])
    ], DriverKhataSearchPage);
    return DriverKhataSearchPage;
}());

//# sourceMappingURL=driver-khata-search.js.map

/***/ })

});
//# sourceMappingURL=44.js.map