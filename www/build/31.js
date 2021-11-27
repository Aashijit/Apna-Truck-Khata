webpackJsonp([31],{

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MechanicKhataPageModule", function() { return MechanicKhataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mechanic_khata__ = __webpack_require__(990);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MechanicKhataPageModule = /** @class */ (function () {
    function MechanicKhataPageModule() {
    }
    MechanicKhataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mechanic_khata__["a" /* MechanicKhataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__mechanic_khata__["a" /* MechanicKhataPage */]),
            ],
        })
    ], MechanicKhataPageModule);
    return MechanicKhataPageModule;
}());

//# sourceMappingURL=mechanic-khata.module.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MechanicKhataPage; });
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





var MechanicKhataPage = /** @class */ (function () {
    function MechanicKhataPage(alertCtrl, navCtrl, navParams, rest, codes, message, modalCtrl, ldctrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.message = message;
        this.modalCtrl = modalCtrl;
        this.ldctrl = ldctrl;
        this.bills = [];
        this.isupdate = false;
        this.isupdate1 = false;
        this.filterbills = '';
        this.searchTerm = '';
        this.billDetails = [];
        this.filterbillDetails = [];
        this.shops = [];
        this.search = [];
        this.displayfilter = false;
        this.displaysearchitems = [];
        this.selectedfilters = [];
    }
    MechanicKhataPage.prototype.selectThisDetails = function (bill) {
        for (var i = 0; i < this.billDetails.length; i++) {
            this.billDetails[i]['selected'] = 'false';
        }
        for (var i = 0; i < this.filterbillDetails.length; i++) {
            this.filterbillDetails[i]['selected'] = 'false';
        }
        bill['selected'] = 'true';
        this.isupdate1 = true;
        //Fetch bill by bill id
        var data = {
            "bill_id": bill['bill_id']
        };
        this.rest.post(this.codes.GET_BILL_DETAILS_BY_BILL_ID, data).then(function (resp) {
            console.debug("GET BILL DETAILS : " + JSON.stringify(resp));
            var bill_details = resp['data'];
            localStorage.setItem('bill_details', JSON.stringify(bill_details));
        });
    };
    MechanicKhataPage.prototype.shopBuyReport = function () {
        var modalCtrl = this.modalCtrl.create('ReportModalPage', { "name": "mechanicbuyreport" });
        modalCtrl.present();
    };
    MechanicKhataPage.prototype.shopBillReport = function () {
        var modalCtrl = this.modalCtrl.create('ReportModalPage', { "name": "mechanicbillreport" });
        modalCtrl.present();
    };
    MechanicKhataPage.prototype.getShops = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                var dt = resp['data'];
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i]['worker_type'] == 'mechanic') {
                        _this.shops.push(dt[i]);
                    }
                }
                for (var i = 0; i < _this.shops.length; i++) {
                    var searchobj = {
                        "type": "mechanic",
                        "name": _this.shops[i]['name'],
                        "id": "",
                        "amount": ""
                    };
                    _this.search.push(searchobj);
                }
                for (var i = 0; i < _this.bills.length; i++) {
                    var searchobj2 = {
                        "type": "bills",
                        "id": _this.bills[i]['bill_id'],
                        "name": _this.bills[i]['person_shop_name'],
                        "amount": _this.bills[i]['total_bill']
                    };
                    _this.search.push(searchobj2);
                }
            }
        });
    };
    MechanicKhataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MechanicKhataPage');
    };
    MechanicKhataPage.prototype.openMechanicBillPage = function () {
        this.navCtrl.push('MechanicBillPage', { 'update': 'false' });
    };
    MechanicKhataPage.prototype.update = function () {
        this.navCtrl.push('MechanicBillPage', { 'update': 'true' });
    };
    MechanicKhataPage.prototype.updateDetails = function () {
        this.navCtrl.push('ShopBillDetailsPage', { "worker_type": "mechanic", 'update': 'true' });
    };
    MechanicKhataPage.prototype.ionViewWillEnter = function () {
        var ld = this.ldctrl.create({
            'content': 'Loading the bills ...'
        });
        this.getBillsBySrthId(ld);
        this.getBillDetailsBySrthId();
    };
    MechanicKhataPage.prototype.getBillsBySrthId = function (ld) {
        var _this = this;
        this.isupdate = false;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "mechanic"
        };
        ld.present();
        this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID, data).then(function (resp) {
            ld.dismiss();
            if (resp['_ReturnCode'] == '0') {
                _this.bills = resp['data'];
                _this.filterbills = _this.bills;
                var _loop_1 = function (i) {
                    _this.bills[i]['selected'] = 'false';
                    _this.filterbills[i]['selected'] = 'false';
                    localStorage.setItem("mechanic_bills", JSON.stringify(_this.bills));
                    dt = {
                        "image_id": _this.bills[i]['bill_image_id']
                    };
                    _this.rest.post(_this.codes.GET_IMAGE_BY_IMAGE_ID, dt).then(function (resp) {
                        if (resp['data'].length > 0) {
                            _this.bills[i]['image_content'] = resp['data'][0]['image_content'];
                            _this.filterbills[i]['image_content'] = resp['data'][0]['image_content'];
                        }
                    });
                };
                var dt;
                for (var i = 0; i < _this.bills.length; i++) {
                    _loop_1(i);
                }
                _this.getShops();
            }
        });
    };
    MechanicKhataPage.prototype.getBillDetailsBySrthId = function () {
        var _this = this;
        this.isupdate = false;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "mechanic"
        };
        this.rest.post(this.codes.GET_PROBLEM_PARTS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.billDetails = resp['data'];
                _this.filterbillDetails = _this.billDetails;
                for (var i = 0; i < _this.billDetails.length; i++) {
                    _this.billDetails[i]['selected'] = 'false';
                    _this.filterbillDetails[i]['selected'] = 'false';
                }
            }
        });
    };
    MechanicKhataPage.prototype.selectThis = function (bill) {
        for (var i = 0; i < this.bills.length; i++) {
            this.bills[i]['selected'] = 'false';
        }
        for (var i = 0; i < this.filterbills.length; i++) {
            this.filterbills[i]['selected'] = 'false';
        }
        bill['selected'] = 'true';
        this.isupdate = true;
        localStorage.setItem('bill', JSON.stringify(bill));
    };
    MechanicKhataPage.prototype.presentConfirmDelete = function () {
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
    MechanicKhataPage.prototype.deletebill = function () {
        var _this = this;
        var bill = JSON.parse(localStorage.getItem('bill'));
        var ld = this.ldctrl.create({
            'content': 'Refreshing the bill list : ' + bill['bill_id']
        });
        var data = {
            "bill_id": bill['bill_id']
        };
        this.rest.post(this.codes.DELETE_BILL_EXPENSE, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have deleted a bill.');
                _this.getBillsBySrthId(ld);
            }
        });
    };
    MechanicKhataPage.prototype.openShopBillDetailsPage = function () {
        this.navCtrl.push('ShopBillDetailsPage', { "worker_type": "mechanic" });
    };
    MechanicKhataPage.prototype.clickedsearchitem = function (sr) {
        this.displayfilter = false;
        this.displaysearchitems = this.search;
        if (sr['type'] == 'mechanic') {
            this.searchTerm = sr['name'];
            this.filterbills = [];
            for (var i = 0; i < this.bills.length; i++) {
                if (this.bills[i]['person_shop_name'] == sr['name']) {
                    this.filterbills.push(this.bills[i]);
                }
            }
        }
        else if (sr['type'] == 'bills') {
            for (var i = 0; i < this.bills.length; i++) {
                if (this.bills[i]['bill_id'] == sr['id']) {
                    this.filterbills = [];
                    this.searchTerm = sr['id'];
                    this.filterbills.push(this.bills[i]);
                    this.selectThis(this.bills[i]);
                }
            }
        }
    };
    MechanicKhataPage.prototype.clicksearchbar = function () {
        this.displayfilter = true;
        this.displaysearchitems = this.search;
    };
    MechanicKhataPage.prototype.closesearchbar = function () {
        this.displayfilter = false;
        this.displaysearchitems = this.search;
    };
    MechanicKhataPage.prototype.searchBillDetails = function () {
        var _this = this;
        var mdl = this.modalCtrl.create('BuyDetailsSearchModalPage');
        mdl.onDidDismiss(function (data) {
            if (localStorage.getItem("searchbilldetails") != undefined) {
                _this.selectedfilters = JSON.parse(localStorage.getItem("searchbilldetails"));
                if (_this.selectedfilters.length == 0) {
                    _this.filterbillDetails = _this.billDetails;
                    return;
                }
                _this.filterbillDetails = [];
                for (var i = 0; i < _this.selectedfilters.length; i++) {
                    if (_this.selectedfilters[i]['type'] == 'problems') {
                        for (var j = 0; j < _this.billDetails.length; j++) {
                            if (_this.billDetails[j]['problem_id'] == _this.selectedfilters[i]['id']) {
                                _this.filterbillDetails.push(_this.billDetails[j]);
                            }
                        }
                    }
                    else if (_this.selectedfilters[i]['type'] == 'vehicles') {
                        for (var j = 0; j < _this.billDetails.length; j++) {
                            if (_this.billDetails[j]['vehicle_id'] == _this.selectedfilters[i]['id']) {
                                _this.filterbillDetails.push(_this.billDetails[j]);
                            }
                        }
                    }
                    else if (_this.selectedfilters[i]['type'] == 'mechanic') {
                        for (var j = 0; j < _this.billDetails.length; j++) {
                            if (_this.billDetails[j]['person_shop_name'] == _this.selectedfilters[i]['name']) {
                                _this.filterbillDetails.push(_this.billDetails[j]);
                            }
                        }
                    }
                    else if (_this.selectedfilters[i]['type'] == 'bills') {
                        for (var j = 0; j < _this.billDetails.length; j++) {
                            if (_this.billDetails[j]['bill_id'] == _this.selectedfilters[i]['id']) {
                                _this.filterbillDetails.push(_this.billDetails[j]);
                            }
                        }
                    }
                }
                console.error(JSON.stringify(_this.filterbillDetails));
            }
        });
        mdl.present();
    };
    MechanicKhataPage.prototype.removeTerm = function (sc) {
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
            this.filterbillDetails = this.billDetails;
            return;
        }
        this.filterbillDetails = [];
        for (var i = 0; i < this.selectedfilters.length; i++) {
            if (this.selectedfilters[i]['type'] == 'problems') {
                for (var j = 0; j < this.billDetails.length; j++) {
                    if (this.billDetails[j]['problem_id'] == this.selectedfilters[i]['id']) {
                        this.filterbillDetails.push(this.billDetails[j]);
                    }
                }
            }
            else if (this.selectedfilters[i]['type'] == 'vehicles') {
                for (var j = 0; j < this.billDetails.length; j++) {
                    if (this.billDetails[j]['vehicle_id'] == this.selectedfilters[i]['id']) {
                        this.filterbillDetails.push(this.billDetails[j]);
                    }
                }
            }
            else if (this.selectedfilters[i]['type'] == 'mechanic') {
                for (var j = 0; j < this.billDetails.length; j++) {
                    if (this.billDetails[j]['person_shop_name'] == this.selectedfilters[i]['name']) {
                        this.filterbillDetails.push(this.billDetails[j]);
                    }
                }
            }
            else if (this.selectedfilters[i]['type'] == 'bills') {
                for (var j = 0; j < this.billDetails.length; j++) {
                    if (this.billDetails[j]['bill_id'] == this.selectedfilters[i]['id']) {
                        this.filterbillDetails.push(this.billDetails[j]);
                    }
                }
            }
        }
    };
    MechanicKhataPage.prototype.getItems = function ($event) {
        var _this = this;
        if (this.searchTerm != '') {
            this.displayfilter = true;
            this.displaysearchitems = this.search;
        }
        if (this.searchTerm == '') {
            this.displayfilter = false;
            this.displaysearchitems = this.search;
            this.filterbills = this.bills;
            this.isupdate = false;
            for (var i = 0; i < this.bills.length; i++) {
                this.bills[i]['selected'] = 'false';
            }
            for (var i = 0; i < this.filterbills.length; i++) {
                this.filterbills[i]['selected'] = 'false';
            }
        }
        this.displaysearchitems = this.search.filter(function (wp) {
            if (_this.searchTerm != '') {
                var str = wp.id + wp.name;
                return (str.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            }
            else
                return _this.search;
        });
    };
    MechanicKhataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-mechanic-khata',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/mechanic-khata/mechanic-khata.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>\n          MECHANIC KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube text-right">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-row class="document-button">\n      <ion-col col-6 (click)="shopBuyReport()">\n        <div>\n          MECHANIC REPAIR REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n        <!-- <button ion-button round outline small></button> -->\n      </ion-col>\n      <ion-col col-6 (click)="shopBillReport()">\n        <div>\n          MECHANIC BILL REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n        <!-- <button ion-button round outline small></button> -->\n      </ion-col>\n    </ion-row>\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="searchTerm" (click)="clicksearchbar()" (ionInput)="getItems($event)" placeholder="SEARCH MECHANIC, BILL NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true" (click)="closesearchbar()"></i>\n    </div>\n\n    <ion-card *ngIf="displayfilter">\n      <ion-card-content>\n        <ion-list >\n          <ion-item *ngFor="let sr of displaysearchitems" (click)="clickedsearchitem(sr)">\n           <div *ngIf="sr[\'type\']==\'mechanic\'">\n            <p style="color: #000;">{{sr[\'name\']}}</p>\n             <p>Mechanic</p>\n            </div>\n           <div *ngIf="sr[\'type\']==\'bills\'">\n              <p style="color: #000;">{{sr[\'id\']}} ~ {{sr[\'amount\']}}</p>\n              <p>Mechanic : {{sr[\'name\']}}</p>\n           </div>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    \n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n        <a href="#home">MECHANIC</a>\n        <a href="#news">BILL NUMBER</a>\n        <a href="#contact">VEHICLE NUMBER</a>\n        <a href="#about">PURCHASE DATE</a>\n        <a href="#support">BILL</a>\n        <a href="#blog">DETAIL</a>\n        <a href="#tools">IMAGE</a>\n        \n        <div [ngClass]="bill[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" *ngFor="let bill of filterbills" (click)="selectThis(bill)" >\n          <div>\n          <p>{{bill[\'person_shop_name\']}}</p>\n          <p>{{bill[\'bill_id\']}}</p>\n          <p>{{bill[\'vehicle_number\']}}</p>\n          <p>{{bill[\'bill_date\']}}</p>\n          <p>{{bill[\'total_bill\']}}</p>\n          <p>{{bill[\'bill_details\']}}</p>\n          <p>\n            <span *ngIf="bill[\'image_content\'] != null && bill[\'image_content\'] != undefined">\n              <img [src]="bill[\'image_content\']" style="width:11% !important" imageViewer />\n            </span>\n          </p>\n        </div>\n\n        </div>\n  \n     \n        </div>\n    \n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="update()">Change &nbsp; <ion-icon name="create" class="ion-icon-w"></ion-icon> </button>\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="presentConfirmDelete()">Erase &nbsp; <ion-icon name="ios-trash" class="ion-icon-w"></ion-icon> </button>\n  \n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n  \n    \n \n\n\n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openMechanicBillPage()">MECHANIC BILL</button>\n    </div>\n\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" (click)="searchBillDetails()" placeholder="SEARCH BILL NUMBER, VEHICLE NUMBER, TYPE OF WORK, ITEM, SHOP"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n    <p style="padding-left: 9px !important;padding-right: 9px !important; padding-bottom: 5px !important;">\n      <ion-chip *ngFor="let sc of selectedfilters" style="margin-right: 5px !important; margin-left: 5px !important;">\n        <ion-label *ngIf="sc[\'type\'] == \'bills\'" >Bill # {{sc[\'id\']}}</ion-label>\n        <ion-label *ngIf="sc[\'type\'] == \'problems\' || sc[\'type\'] == \'vehicles\' || sc[\'type\'] == \'mechanic\'" >{{sc[\'name\']}}</ion-label>\n        <ion-icon name="close" style="margin-right: 6px;background:transparent !important; color: red !important;" (click)="removeTerm(sc)"></ion-icon>\n      </ion-chip>\n      </p>\n\n\n\n\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n       \n      <a href="#home">BILL NUMBER</a>\n      <a href="#news">MECHANIC</a>\n      <!-- <a href="#news">BUSINESS NAME</a> -->\n      <a href="#contact">VEHICLE</a>\n      <a href="#about">REPAIR DATE</a>\n      <!-- <a href="#about">EXCHANGE DATE</a> -->\n      <a href="#support">PROBLEM</a>\n      <!-- <a href="#blog">PARTS</a> -->\n      <!-- <a href="#tools">QUANTITY</a>\n      <a href="#tools">RATE/PC</a> --> \n      <a href="#tools">TOTAL</a>\n      <a href="#tools">DETAIL</a>\n      <!-- <a href="#tools">ID(OPTIONAL)</a> --> \n      <a href="#tools">KM READING</a>\n\n\n      <!-- (click)="selectThis(1)" -->\n  \n        <div *ngFor="let detail of filterbillDetails" [ngClass]="detail[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" (click)="selectThisDetails(detail)">\n          <p>{{detail[\'bill_id\']}}</p>\n          <p>{{detail[\'person_shop_name\']}}</p>\n          <!-- <p>XYZ BUSINESS</p> -->\n          <p>{{detail[\'vehicle_number\']}}</p>\n          <p>{{detail[\'date_of_repair\']}}</p>\n          <!-- <p>MECHANICAL</p> -->\n          <p>{{detail[\'problem_name\']}}</p>\n          <!-- <p>ONE</p> -->\n          <!-- <p>RS 200</p> -->\n          <p>RS {{detail[\'total_amount\']}}</p>\n          <p>{{detail[\'additional_info\']}}</p>\n          <!-- <p>{{detail[\'\']}}</p> -->\n          <!-- <p>ID123</p> -->\n          <p>{{detail[\'km_reading\']}}</p>\n     \n        </div>\n  \n       \n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n        <button ion-button class="custom-button-u" *ngIf="isupdate1" (click)="updateDetails()">Change &nbsp; <ion-icon name="create" class="ion-icon-w"></ion-icon> </button>\n      \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openShopBillDetailsPage()">BILL REPAIR DETAILS</button>\n    </div>\n\n\n  </div>\n</ion-content> \n\n\n\n\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-1 class="custom-back-button">\n      </ion-col>\n    \n      <ion-col col-8 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          MECHANIC KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-row class="document-button">\n      <ion-col col-6 >\n        <div>\n          MECHANIC REPAIR REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n      </ion-col>\n      <ion-col col-6 >\n        <div>\n          MECHANIC BILL REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="searchTerm" (ionInput)="getItems($event)" placeholder="SEARCH MECHANIC NAME,BILL NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n    \n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n       \n        <a href="#home">MECHANIC NAME</a>\n        <a href="#news">BILL NUMBER</a>\n        <a href="#contact">VEHICLE NUMBER</a>\n        <a href="#about">BILL DATE</a>\n        <a href="#support">BILL</a>\n        <a href="#blog">DETAIL</a>\n        <a href="#tools">IMAGE</a>\n\n\n        <div [ngClass]="bill[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" *ngFor="let bill of filterbills" (click)="selectThis(bill)" >\n          <div>\n          <p>{{bill[\'person_shop_name\']}}</p>\n          <p>{{bill[\'bill_id\']}}</p>\n          <p>{{bill[\'vehicle_id\']}}</p>\n          <p>{{bill[\'bill_date\']}}</p>\n          <p>{{bill[\'total_bill\']}}</p>\n          <p>{{bill[\'bill_details\']}}</p>\n          <p></p>\n        </div>\n\n        </div>\n\n       \n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="update()">Update</button>\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="presentConfirmDelete()">Delete</button>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n \n   \n\n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openMechanicBillPage()">MECHANIC BILL</button>\n    </div>\n\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH BILL NUMBER, VEHICLE NUMBER, TYPE OF REPAIR, MECHANIC"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n  \n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n\n        <a href="#home">BILL NUMBER</a>\n        <a href="#news">MECHANIC NAME</a>\n        <a href="#contact">VEHICLE</a>\n        <a href="#about">REPAIR DATE</a>\n        <a href="#about">EXCHANGE DATE</a>\n        <a href="#support">REPAIR TYPE</a>\n        <a href="#blog">ITEM</a>\n        <a href="#tools">QUANTITY</a>\n        <a href="#tools">RATE PER PC</a>\n        <a href="#tools">TOTAL</a>\n        <a href="#tools">DETAIL</a>\n        <a href="#tools">ID(OPTIONAL)</a>\n        <a href="#tools">KM READING</a>\n\n        <div class="scrollmenu-list" id="1" (click)="selectThis(1)">\n          <p>BILL1234</p>\n          <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>12/09/2020</p>\n          <p>Tyre</p>\n          <p>Item none</p>\n          <p>1</p>\n          <p>RS 200</p>\n          <p>RS 500</p>\n          <p>THIS HAS BEEN REPAIRED</p>\n          <p>ID23</p>\n          <p>12KM</p>\n        </div>\n  \n        <div class="scrollmenu-list" id="2" (click)="selectThis(2)">\n          <p>BILL1234</p>\n          <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>12/09/2020</p>\n          <p>Tyre</p>\n          <p>Item none</p>\n          <p>1</p>\n          <p>RS 200</p>\n          <p>RS 500</p>\n          <p>THIS HAS BEEN REPAIRED</p>\n          <p>ID23</p>\n          <p>12KM</p>\n        </div>\n  \n        <div class="scrollmenu-list" id="3" (click)="selectThis(3)">\n          <p>BILL1234</p>\n          <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>12/09/2020</p>\n          <p>Tyre</p>\n          <p>Item none</p>\n          <p>1</p>\n          <p>RS 200</p>\n          <p>RS 500</p>\n          <p>THIS HAS BEEN REPAIRED</p>\n          <p>ID23</p>\n          <p>12KM</p>\n        </div>\n  \n        <div class="scrollmenu-list" id="4" (click)="selectThis(4)">\n          <p>BILL1234</p>\n          <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>12/09/2020</p>\n          <p>Tyre</p>\n          <p>Item none</p>\n          <p>1</p>\n          <p>RS 200</p>\n          <p>RS 500</p>\n          <p>THIS HAS BEEN REPAIRED</p>\n          <p>ID23</p>\n          <p>12KM</p>\n        </div>\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openBillDescriptionPage()">BILL REPAIR DETAILS</button>\n    </div>\n\n\n  </div>\n</ion-content> \n -->\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/mechanic-khata/mechanic-khata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"]])
    ], MechanicKhataPage);
    return MechanicKhataPage;
}());

// import { MessageProvider } from './../../providers/message/message';
// import { CodesProvider } from './../../providers/codes/codes';
// import { RestProvider } from './../../providers/rest/rest';
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { MechanicPage } from '../mechanic/mechanic';
// import { BillDescriptionPage } from '../bill-description/bill-description';
// import { MechanicBillPage } from '../mechanic-bill/mechanic-bill';
// @IonicPage()
// @Component({
//   selector: 'page-mechanic-khata',
//template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/mechanic-khata/mechanic-khata.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>\n          MECHANIC KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube text-right">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-row class="document-button">\n      <ion-col col-6 (click)="shopBuyReport()">\n        <div>\n          MECHANIC REPAIR REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n        <!-- <button ion-button round outline small></button> -->\n      </ion-col>\n      <ion-col col-6 (click)="shopBillReport()">\n        <div>\n          MECHANIC BILL REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n        <!-- <button ion-button round outline small></button> -->\n      </ion-col>\n    </ion-row>\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="searchTerm" (click)="clicksearchbar()" (ionInput)="getItems($event)" placeholder="SEARCH MECHANIC, BILL NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true" (click)="closesearchbar()"></i>\n    </div>\n\n    <ion-card *ngIf="displayfilter">\n      <ion-card-content>\n        <ion-list >\n          <ion-item *ngFor="let sr of displaysearchitems" (click)="clickedsearchitem(sr)">\n           <div *ngIf="sr[\'type\']==\'mechanic\'">\n            <p style="color: #000;">{{sr[\'name\']}}</p>\n             <p>Mechanic</p>\n            </div>\n           <div *ngIf="sr[\'type\']==\'bills\'">\n              <p style="color: #000;">{{sr[\'id\']}} ~ {{sr[\'amount\']}}</p>\n              <p>Mechanic : {{sr[\'name\']}}</p>\n           </div>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    \n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n        <a href="#home">MECHANIC</a>\n        <a href="#news">BILL NUMBER</a>\n        <a href="#contact">VEHICLE NUMBER</a>\n        <a href="#about">PURCHASE DATE</a>\n        <a href="#support">BILL</a>\n        <a href="#blog">DETAIL</a>\n        <a href="#tools">IMAGE</a>\n        \n        <div [ngClass]="bill[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" *ngFor="let bill of filterbills" (click)="selectThis(bill)" >\n          <div>\n          <p>{{bill[\'person_shop_name\']}}</p>\n          <p>{{bill[\'bill_id\']}}</p>\n          <p>{{bill[\'vehicle_number\']}}</p>\n          <p>{{bill[\'bill_date\']}}</p>\n          <p>{{bill[\'total_bill\']}}</p>\n          <p>{{bill[\'bill_details\']}}</p>\n          <p>\n            <span *ngIf="bill[\'image_content\'] != null && bill[\'image_content\'] != undefined">\n              <img [src]="bill[\'image_content\']" style="width:11% !important" imageViewer />\n            </span>\n          </p>\n        </div>\n\n        </div>\n  \n     \n        </div>\n    \n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="update()">Change &nbsp; <ion-icon name="create" class="ion-icon-w"></ion-icon> </button>\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="presentConfirmDelete()">Erase &nbsp; <ion-icon name="ios-trash" class="ion-icon-w"></ion-icon> </button>\n  \n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n  \n    \n \n\n\n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openMechanicBillPage()">MECHANIC BILL</button>\n    </div>\n\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" (click)="searchBillDetails()" placeholder="SEARCH BILL NUMBER, VEHICLE NUMBER, TYPE OF WORK, ITEM, SHOP"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n    <p style="padding-left: 9px !important;padding-right: 9px !important; padding-bottom: 5px !important;">\n      <ion-chip *ngFor="let sc of selectedfilters" style="margin-right: 5px !important; margin-left: 5px !important;">\n        <ion-label *ngIf="sc[\'type\'] == \'bills\'" >Bill # {{sc[\'id\']}}</ion-label>\n        <ion-label *ngIf="sc[\'type\'] == \'problems\' || sc[\'type\'] == \'vehicles\' || sc[\'type\'] == \'mechanic\'" >{{sc[\'name\']}}</ion-label>\n        <ion-icon name="close" style="margin-right: 6px;background:transparent !important; color: red !important;" (click)="removeTerm(sc)"></ion-icon>\n      </ion-chip>\n      </p>\n\n\n\n\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n       \n      <a href="#home">BILL NUMBER</a>\n      <a href="#news">MECHANIC</a>\n      <!-- <a href="#news">BUSINESS NAME</a> -->\n      <a href="#contact">VEHICLE</a>\n      <a href="#about">REPAIR DATE</a>\n      <!-- <a href="#about">EXCHANGE DATE</a> -->\n      <a href="#support">PROBLEM</a>\n      <!-- <a href="#blog">PARTS</a> -->\n      <!-- <a href="#tools">QUANTITY</a>\n      <a href="#tools">RATE/PC</a> --> \n      <a href="#tools">TOTAL</a>\n      <a href="#tools">DETAIL</a>\n      <!-- <a href="#tools">ID(OPTIONAL)</a> --> \n      <a href="#tools">KM READING</a>\n\n\n      <!-- (click)="selectThis(1)" -->\n  \n        <div *ngFor="let detail of filterbillDetails" [ngClass]="detail[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" (click)="selectThisDetails(detail)">\n          <p>{{detail[\'bill_id\']}}</p>\n          <p>{{detail[\'person_shop_name\']}}</p>\n          <!-- <p>XYZ BUSINESS</p> -->\n          <p>{{detail[\'vehicle_number\']}}</p>\n          <p>{{detail[\'date_of_repair\']}}</p>\n          <!-- <p>MECHANICAL</p> -->\n          <p>{{detail[\'problem_name\']}}</p>\n          <!-- <p>ONE</p> -->\n          <!-- <p>RS 200</p> -->\n          <p>RS {{detail[\'total_amount\']}}</p>\n          <p>{{detail[\'additional_info\']}}</p>\n          <!-- <p>{{detail[\'\']}}</p> -->\n          <!-- <p>ID123</p> -->\n          <p>{{detail[\'km_reading\']}}</p>\n     \n        </div>\n  \n       \n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n        <button ion-button class="custom-button-u" *ngIf="isupdate1" (click)="updateDetails()">Change &nbsp; <ion-icon name="create" class="ion-icon-w"></ion-icon> </button>\n      \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openShopBillDetailsPage()">BILL REPAIR DETAILS</button>\n    </div>\n\n\n  </div>\n</ion-content> \n\n\n\n\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-1 class="custom-back-button">\n      </ion-col>\n    \n      <ion-col col-8 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          MECHANIC KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-row class="document-button">\n      <ion-col col-6 >\n        <div>\n          MECHANIC REPAIR REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n      </ion-col>\n      <ion-col col-6 >\n        <div>\n          MECHANIC BILL REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="searchTerm" (ionInput)="getItems($event)" placeholder="SEARCH MECHANIC NAME,BILL NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n    \n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n       \n        <a href="#home">MECHANIC NAME</a>\n        <a href="#news">BILL NUMBER</a>\n        <a href="#contact">VEHICLE NUMBER</a>\n        <a href="#about">BILL DATE</a>\n        <a href="#support">BILL</a>\n        <a href="#blog">DETAIL</a>\n        <a href="#tools">IMAGE</a>\n\n\n        <div [ngClass]="bill[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" *ngFor="let bill of filterbills" (click)="selectThis(bill)" >\n          <div>\n          <p>{{bill[\'person_shop_name\']}}</p>\n          <p>{{bill[\'bill_id\']}}</p>\n          <p>{{bill[\'vehicle_id\']}}</p>\n          <p>{{bill[\'bill_date\']}}</p>\n          <p>{{bill[\'total_bill\']}}</p>\n          <p>{{bill[\'bill_details\']}}</p>\n          <p></p>\n        </div>\n\n        </div>\n\n       \n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="update()">Update</button>\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="presentConfirmDelete()">Delete</button>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n \n   \n\n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openMechanicBillPage()">MECHANIC BILL</button>\n    </div>\n\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH BILL NUMBER, VEHICLE NUMBER, TYPE OF REPAIR, MECHANIC"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div>\n\n  \n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n\n        <a href="#home">BILL NUMBER</a>\n        <a href="#news">MECHANIC NAME</a>\n        <a href="#contact">VEHICLE</a>\n        <a href="#about">REPAIR DATE</a>\n        <a href="#about">EXCHANGE DATE</a>\n        <a href="#support">REPAIR TYPE</a>\n        <a href="#blog">ITEM</a>\n        <a href="#tools">QUANTITY</a>\n        <a href="#tools">RATE PER PC</a>\n        <a href="#tools">TOTAL</a>\n        <a href="#tools">DETAIL</a>\n        <a href="#tools">ID(OPTIONAL)</a>\n        <a href="#tools">KM READING</a>\n\n        <div class="scrollmenu-list" id="1" (click)="selectThis(1)">\n          <p>BILL1234</p>\n          <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>12/09/2020</p>\n          <p>Tyre</p>\n          <p>Item none</p>\n          <p>1</p>\n          <p>RS 200</p>\n          <p>RS 500</p>\n          <p>THIS HAS BEEN REPAIRED</p>\n          <p>ID23</p>\n          <p>12KM</p>\n        </div>\n  \n        <div class="scrollmenu-list" id="2" (click)="selectThis(2)">\n          <p>BILL1234</p>\n          <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>12/09/2020</p>\n          <p>Tyre</p>\n          <p>Item none</p>\n          <p>1</p>\n          <p>RS 200</p>\n          <p>RS 500</p>\n          <p>THIS HAS BEEN REPAIRED</p>\n          <p>ID23</p>\n          <p>12KM</p>\n        </div>\n  \n        <div class="scrollmenu-list" id="3" (click)="selectThis(3)">\n          <p>BILL1234</p>\n          <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>12/09/2020</p>\n          <p>Tyre</p>\n          <p>Item none</p>\n          <p>1</p>\n          <p>RS 200</p>\n          <p>RS 500</p>\n          <p>THIS HAS BEEN REPAIRED</p>\n          <p>ID23</p>\n          <p>12KM</p>\n        </div>\n  \n        <div class="scrollmenu-list" id="4" (click)="selectThis(4)">\n          <p>BILL1234</p>\n          <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>12/09/2020</p>\n          <p>Tyre</p>\n          <p>Item none</p>\n          <p>1</p>\n          <p>RS 200</p>\n          <p>RS 500</p>\n          <p>THIS HAS BEEN REPAIRED</p>\n          <p>ID23</p>\n          <p>12KM</p>\n        </div>\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="openBillDescriptionPage()">BILL REPAIR DETAILS</button>\n    </div>\n\n\n  </div>\n</ion-content> \n -->\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/mechanic-khata/mechanic-khata.html"*/,
// })
// export class MechanicKhataPage {
//   bills : any = [];
//   isupdate : boolean = false;
//   filterbills :any = '';
//   searchTerm : any = '';
//   constructor(private alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, 
//     private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider) {
//   }
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad MechanicKhataPage');
//   }
//   ionViewWillEnter(){
//     this.getBillsBySrthId();
//   }
//   getBillsBySrthId(){
//     this.isupdate = false;
//     var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
//     var data = {
//       "srth_id":json[0]['srth_id'],
//       "worker_type":"mechanic"
//     };
//     this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID,data).then(resp => {
//       if(resp['_ReturnCode'] == '0'){
//         this.bills = resp['data'];
//         this.filterbills = this.bills;
//         for(let i=0;i<this.bills.length;i++){
//           this.bills[i]['selected'] = 'false';
//           this.filterbills[i]['selected'] = 'false';
//         }
//       }
//     });
//   }
//   openBillDescriptionPage() {
//     this.navCtrl.push(BillDescriptionPage);
//   }
//   openMechanicBillPage() {
//     this.navCtrl.push(MechanicBillPage,{'update':'false'});
//   }
//   update(){
//     this.navCtrl.push(MechanicBillPage,{'update':'true'});
//   }
//   selectThis(bill){
//     for(let i=0;i<this.bills.length;i++){
//       this.bills[i]['selected'] = 'false';
//       this.filterbills[i]['selected'] = 'false';
//     }
//     bill['selected'] = 'true';
//     this.isupdate = true;
//     localStorage.setItem('bill',JSON.stringify(bill));
//   }
//   presentConfirmDelete() {
//     let alert = this.alertCtrl.create({
//       title: 'Confirm',
//       message: 'Are you sure you want to delete this bill?',
//       buttons: [
//         {
//           text: 'Cancel',
//           role: 'cancel',
//           handler: () => {
//             console.log('Cancel clicked');
//           }
//         },
//         {
//           text: 'Delete',
//           handler: () => {
//             this.deletebill();
//           }
//         }
//       ]
//     });
//     alert.present();
//   }
//   deletebill(){
//     var bill = JSON.parse(localStorage.getItem('bill'));
//     var data = {
//       "bill_id":bill['bill_id']
//     };  
//     this.rest.post(this.codes.DELETE_BILL_EXPENSE,data).then(resp=> {
//       if(resp['_ReturnCode'] == '0'){
//         this.message.displayToast('Congratulations! You have deleted a bill.'); 
//         this.getBillsBySrthId();
//       }
//     });
//   }
//   getItems($event){
//     this.filterbills = this.bills.filter(wp => {
//       if (this.searchTerm != '') {
//         var str = wp.person_shop_name+wp.bill_id+wp.vehicle_id+wp.reason+wp.km_reading+wp.bill_date+wp.bill_details+wp.worker_id;
//         return (str.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
//       }
//       else 
//         return this.bills;
//     });
//   }
// }
//# sourceMappingURL=mechanic-khata.js.map

/***/ })

});
//# sourceMappingURL=31.js.map