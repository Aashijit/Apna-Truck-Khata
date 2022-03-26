webpackJsonp([13],{

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopBillDetailsPageModule", function() { return ShopBillDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_bill_details__ = __webpack_require__(991);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopBillDetailsPageModule = /** @class */ (function () {
    function ShopBillDetailsPageModule() {
    }
    ShopBillDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop_bill_details__["a" /* ShopBillDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_bill_details__["a" /* ShopBillDetailsPage */]),
            ],
        })
    ], ShopBillDetailsPageModule);
    return ShopBillDetailsPageModule;
}());

//# sourceMappingURL=shop-bill-details.module.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopBillDetailsPage; });
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





var ShopBillDetailsPage = /** @class */ (function () {
    function ShopBillDetailsPage(viewController, navCtrl, navParams, modalCtrl, codes, rest, message, ldctrl) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.codes = codes;
        this.rest = rest;
        this.message = message;
        this.ldctrl = ldctrl;
        this.vari = '';
        this.isSelectedBill = false;
        this.header_name = '';
        this.worker_type = '';
        this.problems_parts = '';
        this.bill = '';
        this.bills = [];
        this.bill_id = '';
        this.date_of_repair = '';
        this.details = '';
        this.km_reading = '';
        this.img = null;
        this.worker_type = this.navParams.get("worker_type");
        if (this.worker_type == 'mechanic')
            this.header_name = 'MECHANIC REPAIR DETALLS';
        else
            this.header_name = 'PARTS BILL DETALLS';
        this.getBillsBySrthId();
        var objRec = localStorage.getItem("bill_details");
        var isupd = this.navParams.get("update");
        if (objRec != undefined && objRec != null && isupd == 'true') {
            this.isSelectedBill = true;
            this.bill = JSON.parse(objRec);
            this.details = this.bill['bill_details'];
            this.date_of_repair = this.bill['bill_date'];
            this.km_reading = this.bill['km_reading'];
            if (this.bill['image'] != undefined && this.bill['image'] != null) {
                this.img = this.bill['image'];
            }
            console.error("CHECK : " + JSON.stringify(this.bill));
            var total = 0.00;
            for (var i = 0; i < this.bill['problems_parts'].length; i++) {
                total = total + Number(this.bill['problems_parts'][i]['rate']);
                this.bill['problems_parts'][i]['parts'] = [];
            }
            for (var i = 0; i < this.bill['problems_parts'].length; i++) {
                var parts = {
                    "part_name": this.bill['problems_parts'][i]['part_name'],
                    "rate_per_pc": this.bill['problems_parts'][i]['rate'],
                    "is_full": false,
                    "qty": this.bill['problems_parts'][i]['qty'],
                    "id": this.bill['problems_parts'][i]['id_details'],
                    "total": total
                };
                this.bill['problems_parts'][i]['parts'].push(parts);
            }
            this.problems_parts = this.bill['problems_parts'];
        }
    }
    ShopBillDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopBillDetailsPage');
    };
    ShopBillDetailsPage.prototype.openCameraPopup = function () {
        var _this = this;
        if (this.bill == '') {
            this.message.displayToast("Please select a bill");
            return;
        }
        var data = {
            "bill_id": this.bill_id,
            "person_shop_name": this.bill['person_shop_name'],
            "vehicle_id": this.bill['vehicle_id'],
            "bill_date": this.bill['bill_date'],
            "worker_type": 'shop',
            "bill_details": this.bill['bill_details']
        };
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data2 = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "mechanic",
            "worker_id": this.bill['worker_id'],
            "document_type": "mbill",
            "type": "bills",
            "file_name": json[0]['srth_id'] + "_" + Date.now() + ".jpg",
            "tags": JSON.stringify(data)
        };
        var cameraModalPage = this.modalCtrl.create('UploadImagePage', { "request": data2, "image": this.img });
        cameraModalPage.onDidDismiss(function (resp) {
            _this.img = JSON.parse(localStorage.getItem("selectedimage"));
        });
        cameraModalPage.present();
    };
    // openCameraPopup() {
    //   var type = this.worker_type == 'mechanic' ? 'mbills' : 'sbills';
    //   let cameraModalPage = this.modalCtrl.create('AllImageKhataPage',{"isselect":true,"type":type});
    //   cameraModalPage.onDidDismiss(resp => {
    //     this.img = JSON.parse(localStorage.getItem("selectedimage"));
    //   });
    //   cameraModalPage.present();
    // }
    ShopBillDetailsPage.prototype.openCalendarPopup = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.date_of_repair = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    ShopBillDetailsPage.prototype.change = function (bill_id) {
        this.isSelectedBill = true;
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i]['bill_id'] == bill_id) {
                this.bill = this.bills[i];
                this.details = this.bill['bill_details'];
                this.date_of_repair = this.bill['bill_date'];
                if (this.bill['image'] != undefined && this.bill['image'] != null) {
                    this.img = this.bill['image'];
                    // var dt = {
                    //   "image_id" : this.bill['bill_image_id']
                    // };
                    // this.rest.post(this.codes.GET_IMAGE_BY_IMAGE_ID, dt).then(resp => {
                    //   if(resp['_ReturnCode'] == '0')
                    //     this.img = resp['data'][0];
                    // });
                }
            }
        }
    };
    ShopBillDetailsPage.prototype.changeagain = function () {
        // this.selectbill.open();
        this.isSelectedBill = false;
    };
    ShopBillDetailsPage.prototype.getProblemName = function (problemParts) {
        var problemName = "";
        for (var i = 0; i < problemParts.length; i++) {
            problemName = problemName + problemParts[i]['problem_name'] + " ";
        }
        return problemName;
    };
    ShopBillDetailsPage.prototype.getBillsBySrthId = function () {
        var _this = this;
        var bls_temp = "";
        if (this.worker_type == 'shop')
            bls_temp = localStorage.getItem("shop_bills");
        else if (this.worker_type == 'mechanic')
            bls_temp = localStorage.getItem("mechanic_bills");
        //  alert(this.worker_type);
        if (bls_temp != undefined && bls_temp != null && bls_temp != "") {
            this.bills = JSON.parse(bls_temp);
        }
        else {
            var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
            var ld_1 = this.ldctrl.create({
                'content': 'Loading the bills ...'
            });
            ld_1.present();
            var data = {
                "srth_id": json[0]['srth_id'],
                "worker_type": this.worker_type
            };
            this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID, data).then(function (resp) {
                ld_1.dismiss();
                if (resp['_ReturnCode'] == '0') {
                    _this.bills = resp['data'];
                }
            });
        }
    };
    ShopBillDetailsPage.prototype.addParts = function (vr) {
        var _this = this;
        if (vr == 'save') {
            var partsBillDetailModal = this.modalCtrl.create('PartsBillDetailsModalPage', { "worker_type": this.worker_type, "image": this.img, "bill": this.bill, "action": "save" });
            partsBillDetailModal.onDidDismiss(function (data) {
                _this.problems_parts = JSON.parse(localStorage.getItem("problem_part"));
                console.error(JSON.stringify(_this.problems_parts));
            });
            partsBillDetailModal.present();
        }
        else {
            var partsBillDetailModal = this.modalCtrl.create('PartsBillDetailsModalPage', { "worker_type": this.worker_type, "image": this.img, "bill": this.bill, "action": "edit", "problem_part": this.problems_parts });
            partsBillDetailModal.onDidDismiss(function (data) {
                _this.problems_parts = JSON.parse(localStorage.getItem("problem_part"));
                console.error(JSON.stringify(_this.problems_parts));
            });
            partsBillDetailModal.present();
        }
    };
    ShopBillDetailsPage.prototype.openShopBillDetailsPage = function () {
        this.navCtrl.push('ShopBillDescriptionPage');
    };
    ShopBillDetailsPage.prototype.openDetailPopup = function () {
        var _this = this;
        var detailsModalPage = this.modalCtrl.create('DetailsModalPage', { "details": this.details });
        detailsModalPage.onDidDismiss(function (data) {
            _this.details = localStorage.getItem(_this.codes.DETAILS);
        });
        detailsModalPage.present();
    };
    ShopBillDetailsPage.prototype.saveShopBillDetails = function () {
        var _this = this;
        for (var i = 0; i < this.problems_parts.length; i++) {
            this.problems_parts[i]['date_of_repair'] = this.date_of_repair;
            this.problems_parts[i]['additional_info'] = this.details;
            this.problems_parts[i]['km_reading'] = this.km_reading;
            this.problems_parts[i]['mechanic_name'] = '';
            this.problems_parts[i]['mechanic_phone_number'] = '';
            this.problems_parts[i]['bill_image_id'] = this.img != undefined ? this.img['image_id'] : '0';
        }
        console.log(JSON.stringify(this.problems_parts));
        this.rest.post(this.codes.SAVE_PROBLEM_PARTS, this.problems_parts).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Saved the problem part of this bill successfully!');
                _this.navCtrl.pop();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('selectBill'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Select"])
    ], ShopBillDetailsPage.prototype, "selectbill", void 0);
    ShopBillDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-shop-bill-details',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/shop-bill-details/shop-bill-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <ion-icon name="ios-copy"></ion-icon>\n          {{header_name}}\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container white-section">\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n\n        <a href="#contact">PROBLEM/WORK</a>\n        <a href="#support">PARTS</a>\n        <a href="#blog">QUANTITY(PC/LTR)</a>\n        <a href="#tools">RATE</a>\n        <a href="#tools">TOTAL</a>\n       \n        <div *ngIf="problems_parts.length > 0">\n        <div class="scrollmenu-list" id="5" *ngFor="let prb of problems_parts[0][\'parts\']">\n          <p>{{getProblemName(problems_parts)}}</p>\n          <p>{{prb[\'part_name\']}}</p>\n          <p>{{prb[\'qty\']}}</p>\n          <p> &#x20b9; {{prb[\'rate_per_pc\']}} <sup *ngIf="prb[\'is_full\']">Full</sup> <sup *ngIf="!prb[\'is_full\']">Per pc</sup> </p>\n          <p> &#x20b9; {{prb[\'total\']}}</p>\n        \n        </div>\n      </div>\n\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n  \n    <ion-item *ngIf="!isSelectedBill" class="label-select">\n      <ion-label floating>BILL NUMBER</ion-label>\n      <ion-select interface="action-sheet" mode="ios" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" [(ngModel)]="bill_id" (ionChange)="change($event)" >\n        <ion-option value="{{bill[\'bill_id\']}}" *ngFor="let bill of bills">{{bill[\'bill_id\']+" ~ &#x20b9; "+bill[\'total_bill\']+" "+bill[\'person_shop_name\']}}</ion-option>\n      </ion-select>\n    </ion-item> \n\n    <ion-row class="selected-details" *ngIf="isSelectedBill" >\n      <ion-col col-6 class="text-center" style="color: white;">\n        <p  style="margin-top: 10px; color: white;">Bill # {{bill[\'bill_id\']}}</p>\n        <p  style="margin-top: 10px;">{{bill[\'bill_date\']}}</p>\n      </ion-col>\n      <ion-col col-6 class="text-center"  style="color: white;">\n        <p  style="margin-top: 10px;"> {{bill[\'vehicle_number\']}}</p>\n        <p  style="margin-top: 10px;" >&#x20b9; {{bill[\'total_bill\']}}</p>\n\n      </ion-col>\n      <ion-col col-4 class="text-center"> \n        <img *ngIf="worker_type==\'shop\'" src=\'../../assets/saarthi-icon/png/004-shop.png\' style="width: 36% !important;" />\n        <img *ngIf="worker_type==\'mechanic\'" src=\'../../assets/saarthi-icon/png/007-mechanic.png\' style="width: 36% !important;" />\n      </ion-col>\n      <ion-col col-4 class="text-center" style="padding: 0px !important;margin-top: 4px;margin-left: -11px ;margin-right: 11px;"> \n        <p  style="margin-top: 10px;color: white;" >{{bill[\'person_shop_name\']}}</p>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button round (click)="changeagain()">CHANGE</button>\n      </ion-col>\n    </ion-row>\n  \n\n       \n    <div style="border: 2px solid #3951b2;margin-top: 10px;border-radius: 10px;">\n      <button ion-button round class="custom-button" style="width: 120px !important;font-size: 10px !important;height: 25px !important;margin-left: 20px !important;"  [disabled]="problems_parts.length > 0" (click)="addParts(\'save\')">ADD BILL PARTS</button>\n\n      <span *ngIf="problems_parts.length > 0" style="color: green;font-size: 11px;position: relative;top: -18px;right: -39px;background: #fff;padding-left: 5px;padding-right: 5px;">\n        <ion-icon name="thumbs-up" color="success"></ion-icon> \n        &nbsp; \n        Parts added\n      </span>\n\n      <span style="float: right !important;float: right !important;position: absolute;right: 22px;">\n        <button ion-button clear color="danger" (click)="addParts(\'edit\')" [disabled]="problems_parts.length == 0" style="margin-top: 6px;">\n          Edit &nbsp;\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </span>\n    </div>\n\n\n    <div class="label-float" >\n      <input type="text" [(ngModel)]="date_of_repair" (click)="openCalendarPopup()" />\n      <label>DATE OF REPAIR</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div>\n    \n    \n    <ion-row >\n      <ion-col col-9 style="margin-top: -5px;margin-left: 10px;">\n        <div class="label-float">\n          <input type="text" [(ngModel)]="details" (click)="openDetailPopup()" placeholder=" " />\n          <label>DETAILS</label>\n          <i class="fa fa-money" aria-hidden="true"></i>\n        </div> \n      </ion-col>\n      <ion-col col-2 style="margin-left: -6px;">\n        <ion-row class="detail-picture">\n          <ion-col *ngIf="img == null" col-4 (click)="openCameraPopup()">\n            <i class="fa fa-camera" aria-hidden="true"></i>\n          </ion-col>    \n          <ion-col col-12 *ngIf="img != null" (click)="openCameraPopup()">\n            <img [src]="img[\'image_url\']" style="opacity: 0.3 !important;"/>\n           <ion-icon class="edit-pencil" ios="ios-create" md="md-create" style="position: absolute;right: 19px;top: 21px;"></ion-icon>\n    \n          </ion-col>\n        </ion-row>      \n      </ion-col>\n    </ion-row>\n\n    <div class="label-float"  style="margin-top: -8px;" >\n      <input type="tel" [(ngModel)]="km_reading"  placeholder=" " />\n      <label>KM READING(OPTIONAL)</label>\n    </div>\n\n  </div>\n\n\n  <div class="text-center mt-4">\n    <button ion-button round class="custom-button" (click)="saveShopBillDetails()"> SAVE</button>\n\n  </div>\n</ion-content> \n\n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/shop-bill-details/shop-bill-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"]])
    ], ShopBillDetailsPage);
    return ShopBillDetailsPage;
}());

//# sourceMappingURL=shop-bill-details.js.map

/***/ })

});
//# sourceMappingURL=13.js.map