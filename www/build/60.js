webpackJsonp([60],{

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyFromShopPageModule", function() { return BuyFromShopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy_from_shop__ = __webpack_require__(939);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyFromShopPageModule = /** @class */ (function () {
    function BuyFromShopPageModule() {
    }
    BuyFromShopPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buy_from_shop__["a" /* BuyFromShopPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__buy_from_shop__["a" /* BuyFromShopPage */]),
            ],
        })
    ], BuyFromShopPageModule);
    return BuyFromShopPageModule;
}());

//# sourceMappingURL=buy-from-shop.module.js.map

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyFromShopPage; });
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






var BuyFromShopPage = /** @class */ (function () {
    function BuyFromShopPage(viewController, navCtrl, navParams, rest, codes, message, modalCtrl, pv) {
        var _this = this;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.message = message;
        this.modalCtrl = modalCtrl;
        this.pv = pv;
        this.vari = '';
        this.isSelectedBill = false;
        this.shops = [];
        this.vehicles = [];
        this.reason = '';
        this.bills = [];
        this.drivers = [];
        this.bill_id = null;
        this.worker_id = '';
        this.person_shop_name = '';
        this.srth_id = '';
        this.vehicle_id = '';
        this.km_reading = '';
        this.bill_date = '';
        this.worker_type = '';
        this.total_bill = '';
        this.bill_image_id = '';
        this.bill_details = '';
        this.last_maint_id = '';
        this.opt_counte = '';
        this.is_update = false;
        this.img = null;
        var upd = this.navParams.get("update");
        if (upd == 'true') {
            var bill = JSON.parse(localStorage.getItem("bill"));
            this.bill_id = bill['bill_id'];
            this.worker_id = bill['worker_id'];
            this.person_shop_name = bill['person_shop_name'];
            this.srth_id = bill['srth_id'];
            this.vehicle_id = bill['vehicle_id'];
            this.km_reading = bill['km_reading'];
            this.bill_date = bill['bill_date'];
            this.worker_type = bill['worker_type'];
            this.total_bill = bill['total_bill'];
            this.bill_image_id = bill['bill_image_id'];
            this.bill_details = bill['bill_details'];
            this.reason = bill['reason'];
            this.is_update = true;
        }
        if (this.bill_id == null) {
            this.rest.post(this.codes.GET_LAST_BILL_ID, {}).then(function (resp) {
                if (resp['_ReturnCode'] == '0') {
                    _this.bill_id = resp['data'];
                    _this.bill_id++;
                }
            });
        }
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                var dt = resp['data'];
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i]['worker_type'] == 'shop') {
                        _this.shops.push(dt[i]);
                    }
                }
            }
        });
        this.getVehicles();
    }
    BuyFromShopPage.prototype.getVehicles = function () {
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
    BuyFromShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyFromShopPage');
    };
    BuyFromShopPage.prototype.selectThis = function (bill) {
        for (var i = 0; i < this.bills.length; i++)
            this.bills[i]['selected'] = 'false';
        bill['selected'] = 'true';
        this.bill_id = bill['bill_id'];
        this.worker_id = bill['worker_id'];
        this.person_shop_name = bill['person_shop_name'];
        this.srth_id = bill['srth_id'];
        this.vehicle_id = bill['vehicle_id'];
        this.km_reading = bill['km_reading'];
        this.bill_date = bill['bill_date'];
        this.worker_type = bill['worker_type'];
        this.total_bill = bill['total_bill'];
        this.bill_image_id = bill['bill_image_id'];
        this.bill_details = bill['bill_details'];
        this.reason = bill['reason'];
        this.is_update = true;
    };
    BuyFromShopPage.prototype.change = function ($event) {
        this.vari = $event;
        this.isSelectedBill = true;
    };
    BuyFromShopPage.prototype.addVehicleBill = function () {
        this.navCtrl.push('ShopBillDetailsPage');
    };
    BuyFromShopPage.prototype.openCalendarPopup = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.bill_date = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    BuyFromShopPage.prototype.openDetailPopup = function () {
        var _this = this;
        var detailsModalPage = this.modalCtrl.create('DetailsModalPage', { "details": this.bill_details });
        detailsModalPage.onDidDismiss(function (data) {
            _this.bill_details = localStorage.getItem(_this.codes.DETAILS);
        });
        detailsModalPage.present();
    };
    BuyFromShopPage.prototype.openCameraPopup = function () {
        var _this = this;
        if (this.person_shop_name == '' || this.person_shop_name == null) {
            this.message.displayToast("Please select shop");
            return;
        }
        if (this.vehicle_id == '' || this.vehicle_id == null) {
            this.message.displayToast("Please select vehicle");
            return;
        }
        if (this.bill_date == '' || this.bill_date == null) {
            this.message.displayToast("Please enter bill date");
            return;
        }
        if (this.bill_details == '' || this.bill_details == null) {
            this.message.displayToast("Please enter bill details");
            return;
        }
        var data = {
            "person_shop_name": this.person_shop_name,
            "vehicle_id": this.vehicle_id,
            "bill_date": this.bill_date,
            "worker_type": 'shop',
            "bill_details": this.bill_details
        };
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data2 = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "mechanic",
            "worker_id": this.worker_id,
            "document_type": "mbill",
            "type": "bills",
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
    BuyFromShopPage.prototype.save = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "person_shop_name": this.person_shop_name,
            "srth_id": json[0]['srth_id'],
            "vehicle_id": this.vehicle_id,
            "reason": this.reason,
            "km_reading": this.km_reading,
            "bill_date": this.bill_date,
            "worker_type": 'shop',
            "worker_id": this.worker_id,
            "total_bill": this.total_bill,
            "bill_image_id": this.img != null ? this.img['image_id'] : '0',
            "bill_details": this.bill_details,
            "last_maint_id": 'srth-app',
            "opt_counter": '0'
        };
        this.rest.post(this.codes.ADD_EXPENSE_BILL, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                if (_this.img != null)
                    resp['data']['image_content'] = _this.img['image_url'];
                _this.bills.push(resp['data']);
                // this.worker_id  = '';
                // this.person_shop_name  = '';
                _this.vehicle_id = '';
                _this.km_reading = '';
                _this.bill_date = '';
                // this.worker_type  = '';
                _this.total_bill = '';
                _this.bill_image_id = '';
                _this.bill_details = '';
                _this.img = null;
                _this.bill_id = Number(resp['_LatestBillId']) + 1;
                for (var i = 0; i < _this.bills.length; i++)
                    _this.bills[i]['selected'] = 'false';
            }
        });
    };
    BuyFromShopPage.prototype.selectShop = function (shop) {
        this.isSelectedBill = true;
        for (var i = 0; i < this.shops.length; i++) {
            if (this.shops[i]['worker_id'] == shop) {
                this.person_shop_name = this.shops[i]['name'];
                break;
            }
        }
    };
    BuyFromShopPage.prototype.viewImage = function (imageUrl) {
        this.pv.show(imageUrl, 'Bill Image', { 'share': true });
    };
    BuyFromShopPage.prototype.updateBill = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "bill_id": this.bill_id,
            "person_shop_name": this.person_shop_name,
            "srth_id": json[0]['srth_id'],
            "vehicle_id": this.vehicle_id,
            "reason": this.reason,
            "km_reading": this.km_reading,
            "bill_date": this.bill_date,
            "worker_type": 'shop',
            "worker_id": this.worker_id,
            "total_bill": this.total_bill,
            "bill_image_id": this.img != null ? this.img['image_id'] : '0',
            "bill_details": this.bill_details,
            "last_maint_id": 'srth-app',
            "opt_counter": '0'
        };
        this.rest.post(this.codes.UPDATE_BILL_EXPENSE, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('The bill has been successfully updated');
                // this.navCtrl.pop();
                _this.vehicle_id = '';
                _this.km_reading = '';
                _this.bill_date = '';
                // this.worker_type  = '';
                _this.total_bill = '';
                _this.bill_image_id = '';
                _this.bill_details = '';
                _this.img = null;
                _this.is_update = false;
                _this.bill_id = Number(resp['_LatestBillId']) + 1;
                for (var i = 0; i < _this.bills.length; i++)
                    _this.bills[i]['selected'] = 'false';
            }
        });
    };
    BuyFromShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-buy-from-shop',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/buy-from-shop/buy-from-shop.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-1 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-8 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-pricetag" md="md-pricetag"></ion-icon>\n          ADD PARTS BILL\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container white-section">\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu" >\n       \n        <!-- <a href="#home">PERSON NAME</a> -->\n        <a href="#news">BILL NUMBER</a>\n        <a href="#home">SHOP NAME</a>\n        <a href="#contact">VEHICLE NUMBER</a>\n        <a href="#about">DATE OF BILL</a>\n        <a href="#about">BILL</a>\n        <a href="#blog">DETAIL</a>\n        <a href="#tools">IMAGE</a>\n        \n        <div [ngClass]="bl[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'"  *ngFor="let bl of bills">\n        <div (click)="selectThis(bl)">\n          <p>{{bl[\'bill_id\']}}</p>\n          <p>{{bl[\'person_shop_name\']}}</p>\n          <p>{{bl[\'vehicle_id\']}}</p>\n          <p>{{bl[\'bill_date\']}}</p>\n          <p>{{bl[\'total_bill\']}}</p>\n          <p>{{bl[\'bill_details\']}}</p>\n          <p><img [src]="bl[\'image_url\']" (click)="viewImage(bl[\'image_url\'])" style="width: 11% !important;"/></p>\n        </div>\n        </div>\n  \n        </div>\n    \n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n\n    <ion-badge color="primary" style="margin-top: 13px;margin-left: 2px;padding: 7px;">Bill # {{bill_id}}</ion-badge>\n\n\n    <ion-item *ngIf="!isSelectedBill" class="label-select">\n      <ion-label floating>SELECT SHOP</ion-label>\n      <ion-select interface="action-sheet" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" [(ngModel)]="worker_id" (ionChange)="selectShop($event)">\n        <ion-option value="{{shop[\'worker_id\']}}" *ngFor="let shop of shops" >{{shop[\'name\']}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-row class="selected-details" *ngIf="isSelectedBill" >\n      <ion-col col-4 class="text-center"> \n        <img src=\'../../assets/saarthi-icon/png/004-shop.png\' style="width: 36% !important;" />\n      </ion-col>\n      <ion-col col-4 class="text-center" style="padding: 0px !important;margin-top: 4px;margin-left: -11px ;margin-right: 11px;"> \n        <p  style="margin-top: 10px;color: white;" >{{person_shop_name}}</p>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button round (click)="isSelectedBill = !isSelectedBill">CHANGE</button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-item class="label-select">\n      <ion-label floating>SELECT VEHICLE</ion-label>\n      <ion-select interface="action-sheet" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" [(ngModel)]="vehicle_id">\n        <ion-option value="{{vh[\'vehicle_id\']}}" *ngFor="let vh of vehicles">{{vh[\'vehicle_number\']}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n\n    <div class="label-float" >\n      <input type="text" [(ngModel)]="bill_date" (click)="openCalendarPopup()"/>\n      <label>DATE OF PURCHASE</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div>\n  \n    \n\n    <div class="label-float" >\n      <input type="tel" [(ngModel)]="total_bill" placeholder=" " />\n      <label>TOTAL BILL ₹</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div>\n\n    \n    <ion-row >\n      <ion-col col-9>\n\n        <ion-row >\n          <div class="label-float" style="margin-left: 25px;margin-top: -6px;width: 90%;" >\n            <input type="text" [(ngModel)]="bill_details" (click)="openDetailPopup()" placeholder=" " />\n            <label>DETAILS</label>\n          </div>\n        </ion-row>  \n      </ion-col>\n      <ion-col col-2>\n        <ion-row class="detail-picture">\n          <ion-col col-4   *ngIf="img == null" (click)="openCameraPopup()">\n            <i class="fa fa-camera" aria-hidden="true"></i>\n            <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n    \n          </ion-col>    \n          <ion-col col-12 *ngIf="img != null" (click)="openCameraPopup()">\n            <img [src]="img[\'image_url\']" style="opacity: 0.3 !important;"/>\n           <ion-icon class="edit-pencil" ios="ios-create" md="md-create" style="position: absolute;right: 19px;top: 21px;"></ion-icon>\n    \n          </ion-col>\n        </ion-row>      \n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n  <div class="text-center mt-4">\n    <button ion-button round class="custom-button" *ngIf="!is_update" (click)="save()"> SAVE</button>\n\n  </div>\n  <ion-row>\n  <ion-col col-12 class="text-center">\n    <button ion-button round class="custom-button" *ngIf="is_update" (click)="updateBill()">Update</button>\n  </ion-col>\n</ion-row>\n\n</ion-content> \n\n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/buy-from-shop/buy-from-shop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], BuyFromShopPage);
    return BuyFromShopPage;
}());

//# sourceMappingURL=buy-from-shop.js.map

/***/ })

});
//# sourceMappingURL=60.js.map