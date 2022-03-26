webpackJsonp([43],{

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverKhataPageModule", function() { return DriverKhataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_khata__ = __webpack_require__(961);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverKhataPageModule = /** @class */ (function () {
    function DriverKhataPageModule() {
    }
    DriverKhataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver_khata__["a" /* DriverKhataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__driver_khata__["a" /* DriverKhataPage */]),
            ],
        })
    ], DriverKhataPageModule);
    return DriverKhataPageModule;
}());

//# sourceMappingURL=driver-khata.module.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverKhataPage; });
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






var DriverKhataPage = /** @class */ (function () {
    function DriverKhataPage(alertCtrl, navCtrl, navParams, rest, codes, message, modalCtrl, photoViewer, ldctrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.message = message;
        this.modalCtrl = modalCtrl;
        this.photoViewer = photoViewer;
        this.ldctrl = ldctrl;
        this.bills = [];
        this.filterbills = [];
        this.isupdate = false;
        this.searchTerm = '';
        this.selectedfilters = [];
    }
    DriverKhataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverKhataPage');
    };
    DriverKhataPage.prototype.ionViewWillEnter = function () {
        this.getBillsBySrthId();
    };
    DriverKhataPage.prototype.report = function (key) {
        if (key == 'alldriverreport') {
            var modalCtrl = this.modalCtrl.create('AllDriverReportPage', { "worker_type": 'driver' });
            modalCtrl.present();
        }
        else {
            var modalCtrl = this.modalCtrl.create('DriverExpensePage', { "worker_type": 'driver' });
            modalCtrl.present();
        }
    };
    DriverKhataPage.prototype.viewImage = function (image) {
        this.photoViewer.show(image['image_url'], image['tag_cloud'], { share: true });
    };
    DriverKhataPage.prototype.getBillsBySrthId = function () {
        var _this = this;
        this.isupdate = false;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var ld = this.ldctrl.create({
            'content': 'Loading the drivers ...'
        });
        var data = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "driver"
        };
        this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID, data).then(function (resp) {
            ld.dismiss();
            if (resp['_ReturnCode'] == '0') {
                _this.bills = resp['data'];
                _this.filterbills = _this.bills;
                for (var i = 0; i < _this.bills.length; i++) {
                    _this.bills[i]['selected'] = 'false';
                    _this.filterbills[i]['selected'] = 'false';
                }
            }
        }, function (error) {
            ld.dismiss();
        });
    };
    DriverKhataPage.prototype.selectThis = function (bill) {
        for (var i = 0; i < this.bills.length; i++) {
            this.bills[i]['selected'] = 'false';
            this.filterbills[i]['selected'] = 'false';
        }
        bill['selected'] = 'true';
        this.isupdate = true;
        localStorage.setItem('bill', JSON.stringify(bill));
    };
    DriverKhataPage.prototype.update = function () {
        this.navCtrl.push('AddDriverExpensesPage', { 'update': 'true' });
    };
    DriverKhataPage.prototype.presentConfirmDelete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to delete this bill?',
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
                        _this.deletebill();
                    }
                }
            ]
        });
        alert.present();
    };
    DriverKhataPage.prototype.searchBillDetails = function () {
        var _this = this;
        var mdl = this.modalCtrl.create('DriverDetailsSearchPage');
        mdl.onDidDismiss(function (data) {
            if (localStorage.getItem("searchdriverdetails") != undefined) {
                _this.selectedfilters = JSON.parse(localStorage.getItem("searchdriverdetails"));
                if (_this.selectedfilters.length == 0) {
                    _this.filterbills = _this.bills;
                    return;
                }
                _this.filterbills = [];
                for (var i = 0; i < _this.selectedfilters.length; i++) {
                    if (_this.selectedfilters[i]['type'] == 'reasons') {
                        for (var j = 0; j < _this.bills.length; j++) {
                            if (_this.bills[j]['reason'] == _this.selectedfilters[i]['name']) {
                                _this.filterbills.push(_this.bills[j]);
                            }
                        }
                    }
                    else if (_this.selectedfilters[i]['type'] == 'vehicles') {
                        for (var j = 0; j < _this.bills.length; j++) {
                            if (_this.bills[j]['vehicle_id'] == _this.selectedfilters[i]['id']) {
                                _this.filterbills.push(_this.bills[j]);
                            }
                        }
                    }
                    else if (_this.selectedfilters[i]['type'] == 'drivers') {
                        for (var j = 0; j < _this.bills.length; j++) {
                            if (_this.bills[j]['worker_id'] == _this.selectedfilters[i]['id']) {
                                _this.filterbills.push(_this.bills[j]);
                            }
                        }
                    }
                }
                console.error(JSON.stringify(_this.filterbills));
            }
        });
        mdl.present();
    };
    DriverKhataPage.prototype.removeTerm = function (sc) {
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
            this.filterbills = this.bills;
            return;
        }
        this.filterbills = [];
        for (var i = 0; i < this.selectedfilters.length; i++) {
            if (this.selectedfilters[i]['type'] == 'reasons') {
                for (var j = 0; j < this.bills.length; j++) {
                    if (this.bills[j]['reason'] == this.selectedfilters[i]['name']) {
                        this.filterbills.push(this.bills[j]);
                    }
                }
            }
            else if (this.selectedfilters[i]['type'] == 'vehicles') {
                for (var j = 0; j < this.bills.length; j++) {
                    if (this.bills[j]['vehicle_id'] == this.selectedfilters[i]['id']) {
                        this.filterbills.push(this.bills[j]);
                    }
                }
            }
            else if (this.selectedfilters[i]['type'] == 'drivers') {
                for (var j = 0; j < this.bills.length; j++) {
                    if (this.bills[j]['worker_id'] == this.selectedfilters[i]['id']) {
                        this.filterbills.push(this.bills[j]);
                    }
                }
            }
        }
    };
    DriverKhataPage.prototype.deletebill = function () {
        var _this = this;
        var bill = JSON.parse(localStorage.getItem('bill'));
        var data = {
            "bill_id": bill['bill_id']
        };
        this.rest.post(this.codes.DELETE_BILL_EXPENSE, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have deleted a bill.');
                _this.getBillsBySrthId();
            }
        });
    };
    DriverKhataPage.prototype.openAddDriverExpensePage = function () {
        this.navCtrl.push('AddDriverExpensesPage', { 'update': 'false' });
    };
    DriverKhataPage.prototype.getItems = function ($event) {
        var _this = this;
        this.filterbills = this.bills.filter(function (wp) {
            if (_this.searchTerm != '') {
                var str = wp.bill_id + wp.vehicle_id + wp.reason + wp.km_reading + wp.bill_date + wp.bill_details + wp.worker_id;
                return (str.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            }
            else
                return _this.bills;
        });
    };
    DriverKhataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-driver-khata',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver-khata/driver-khata.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-1 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-8 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          DRIVER KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-row class="document-button">\n      <ion-col col-6 (click)="report(\'alldriverreport\')">\n        <div>\n          ALL DRIVER REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n      </ion-col>\n      <ion-col col-6 (click)="report(\'driverexpensereport\')">\n        <div>\n          DRIVER EXPENSE REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="searchTerm" (ionInput)="getItems($event)" (click)="searchBillDetails()" placeholder="SEARCH DRIVER NAME, VEHICLE NUMBER, REASON"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n    <p style="padding-left: 9px !important;padding-right: 9px !important; padding-bottom: 5px !important;">\n      <ion-chip *ngFor="let sc of selectedfilters" style="margin-right: 5px !important; margin-left: 5px !important;">\n        <ion-label *ngIf="sc[\'type\'] == \'reasons\' || sc[\'type\'] == \'vehicles\' || sc[\'type\'] == \'drivers\'" >{{sc[\'name\']}}</ion-label>\n        <ion-icon name="close" style="margin-right: 6px;background:transparent !important; color: red !important;" (click)="removeTerm(sc)"></ion-icon>\n      </ion-chip>\n      </p>\n  \n    \n\n    <!-- <div class="scrollmenu">\n      <a href="#home">BILL NUMBER</a>\n      <a href="#news">DRIVER NAME</a>\n      <a href="#contact">VEHICLE NUMBER</a>\n      <a href="#about">REASON</a>\n      <a href="#support">COST</a>\n      <a href="#blog">DETAIL</a>\n      <a href="#tools">KM READING</a> -->\n            <!-- <i class="fa fa-angle-down"  aria-hidden="true"></i>\n      <i class="fa fa-angle-right" aria-hidden="true"></i> -->\n\n      <!-- <div style="height: 200px;width: 400px">\n\n      </div> -->\n    <!-- </div> -->\n \n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n\n        <a href="#home">BILL NUMBER</a>\n        <a href="#news">DRIVER NAME</a>\n        <a href="#contact">VEHICLE NUMBER</a>\n        <a href="#about">REASON</a>\n        <a href="#about">DATE OF EVENT</a>\n        <a href="#about">REJOIN DATE</a>\n        <a href="#support">COST</a>\n        <a href="#blog">DETAIL</a>\n        <a href="#tools">KM READING</a>\n        <a href="#tools">IMAGE</a>\n\n        <div [ngClass]="bill[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" *ngFor="let bill of filterbills" (click)="selectThis(bill)" >\n          <div [ngClass]="bill[\'total_bill\'] < 0 ? \'green\' : \'red\'">\n          <p>{{bill[\'bill_number\']}}</p>\n          <p>{{bill[\'worker_name\']}}</p>\n          <p>{{bill[\'vehicle_number\']}}</p>\n          <p>{{bill[\'reason\']}}</p>\n          <p>{{bill[\'bill_date\']}}</p>\n          <p>{{bill[\'rejoin_date\']}}</p>\n          <p>{{bill[\'total_bill\']}}</p>\n          <p>{{bill[\'bill_details\']}}</p>\n          <p>{{bill[\'km_reading\']}}</p>\n          <p>\n            <span *ngIf="bill[\'image\'] != null && bill[\'image\'] != undefined">\n              <img [src]="bill[\'image\'][\'image_url\']" style="width:11% !important" (click)="viewImage(bill[\'image\'])" />\n            </span>\n          </p>\n        </div>\n\n        </div>\n  \n        <!-- <div class="scrollmenu-list" id="6" (click)="selectThis(6)" style="color: #24e289;">\n          <p>TYRE AND TYRE23</p>\n          <p>12-09-2020</p>\n          <p>BILL1234</p>\n          <p>AYAN JANA</p>\n          <p>REPAIR</p>\n          <p>ITEM2</p>\n          <p>1</p>\n         \n\n        </div>\n  \n        <div class="scrollmenu-list" id="7" (click)="selectThis(7)">\n          <p>TYRE AND TYRE23</p>\n          <p>12-09-2020</p>\n          <p>BILL1234</p>\n          <p>AYAN JANA</p>\n          <p>REPAIR</p>\n          <p>ITEM2</p>\n          <p>1</p>\n         \n\n        </div>\n  \n        <div class="scrollmenu-list" id="8" (click)="selectThis(8)">\n          <p>TYRE AND TYRE23</p>\n          <p>12-09-2020</p>\n          <p>BILL1234</p>\n          <p>AYAN JANA</p>\n          <p>REPAIR</p>\n          <p>ITEM2</p>\n          <p>1</p>\n         \n\n        </div> -->\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="update()">Change &nbsp; <ion-icon name="create" style="font-size: 12px !important;margin-top: 7px;"></ion-icon></button>\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="presentConfirmDelete()">Delete &nbsp; <ion-icon name="trash" style="font-size: 12px !important;margin-top: 7px;"></ion-icon></button>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n  \n   \n\n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openAddDriverExpensePage()">EXPENSE ADD/LESS</button>\n    </div>\n\n\n  </div>\n</ion-content> \n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver-khata/driver-khata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"]])
    ], DriverKhataPage);
    return DriverKhataPage;
}());

//# sourceMappingURL=driver-khata.js.map

/***/ })

});
//# sourceMappingURL=43.js.map