webpackJsonp([4],{

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDocumentBillPageModule", function() { return VehicleDocumentBillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_document_bill__ = __webpack_require__(983);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VehicleDocumentBillPageModule = /** @class */ (function () {
    function VehicleDocumentBillPageModule() {
    }
    VehicleDocumentBillPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_document_bill__["a" /* VehicleDocumentBillPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_document_bill__["a" /* VehicleDocumentBillPage */]),
            ],
        })
    ], VehicleDocumentBillPageModule);
    return VehicleDocumentBillPageModule;
}());

//# sourceMappingURL=vehicle-document-bill.module.js.map

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleDocumentBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_providers_codes_codes__ = __webpack_require__(159);
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




var VehicleDocumentBillPage = /** @class */ (function () {
    function VehicleDocumentBillPage(navCtrl, navParams, codes, rest, modalCtrl, viewC, ldc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.rest = rest;
        this.modalCtrl = modalCtrl;
        this.viewC = viewC;
        this.ldc = ldc;
        this.vehicles = [];
        this.bill_amount = '';
        this.expiry_date = '';
        this.img = null;
        this.total_bill = 0;
        this.vehicle_id = '';
        this.person_shop_name = '';
        this.document_name = '';
        this.worker_type = '';
        this.worker_id = '';
        this.details = [];
        this.getVehicles();
        this.worker_id = this.navParams.get("worker_id");
        this.worker_type = this.navParams.get("worker_type");
        var action = this.navParams.get("action");
        if (action == 'edit') {
            this.details = this.navParams.get('details');
        }
    }
    VehicleDocumentBillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehicleDocumentBillPage');
    };
    VehicleDocumentBillPage.prototype.dismiss = function () {
        this.viewC.dismiss();
    };
    VehicleDocumentBillPage.prototype.getVehicles = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var lc = this.ldc.create({
            content: 'Loading the vehicles...'
        });
        lc.present();
        var data = {
            "vehicle_owner_srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(function (resp) {
            lc.dismiss();
            if (resp['_ReturnCode'] == '0') {
                _this.vehicles = resp['data'];
            }
        });
    };
    VehicleDocumentBillPage.prototype.addItem = function () {
        var vno = "";
        for (var i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i]['vehicle_id'] == this.vehicle_id)
                vno = this.vehicles[i]['vehicle_number'];
        }
        var item = {
            "bill_amount": this.bill_amount,
            "expiry_date": this.expiry_date,
            "vehicle_id": this.vehicle_id,
            "vehicle_number": vno
        };
        if (this.img != null) {
            item["img"] = this.img['image_id'];
            item['image_url'] = this.img['image_url'];
        }
        this.details.push(item);
        this.changeCost();
        this.bill_amount = "";
        this.vehicle_id = "";
        this.expiry_date = "";
        this.img = null;
    };
    VehicleDocumentBillPage.prototype.removeItem = function (it) {
        var tmpdetails = [];
        for (var i = 0; i < this.details.length; i++) {
            if (this.details[i]['vehicle_id'] == it['vehicle_id'] && this.details[i]['bill_amount'] == it['bill_amount']) {
            }
            else {
                tmpdetails.push(this.details[i]);
            }
        }
        this.details = tmpdetails;
        this.changeCost();
    };
    VehicleDocumentBillPage.prototype.saveBills = function () {
        localStorage.setItem("vehicle_document_bills", JSON.stringify(this.details));
        this.viewC.dismiss();
    };
    VehicleDocumentBillPage.prototype.changeCost = function () {
        // alert(JSON.stringify(det));
        this.total_bill = 0;
        for (var i = 0; i < this.details.length; i++) {
            this.total_bill = Number(this.total_bill) + Number(this.details[i]['bill_amount']);
        }
    };
    VehicleDocumentBillPage.prototype.openCameraPopup = function (det) {
        var _this = this;
        var data = {
            "person_shop_name": this.person_shop_name,
            "document_name": this.document_name
        };
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data2 = {
            "srth_id": json[0]['srth_id'],
            "worker_type": this.worker_type,
            "worker_id": this.worker_id,
            "document_type": "documentbill",
            "type": "bills",
            "file_name": json[0]['srth_id'] + "_" + Date.now() + ".jpg",
            "tags": JSON.stringify(data)
        };
        var cameraModalPage = this.modalCtrl.create('UploadImagePage', { "request": data2 });
        cameraModalPage.onDidDismiss(function (resp) {
            _this.img = JSON.parse(localStorage.getItem("selectedimage"));
        });
        cameraModalPage.present();
    };
    VehicleDocumentBillPage.prototype.openCalendarPopup2 = function (det) {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.expiry_date = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    VehicleDocumentBillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-vehicle-document-bill',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-document-bill/vehicle-document-bill.html"*/'<ion-content padding>\n\n  <p style="float: right !important;" (click)="dismiss()">\n    <ion-icon name="close" style="color: red !important;"></ion-icon>\n  </p>\n\n  <ion-item>\n    <ion-grid>\n      <ion-row>\n      <ion-col col-4 style="text-align: left !important;color: rgb(5, 45, 131) !important;">\n        Vehicle #\n      </ion-col>\n      <ion-col col-3 style="text-align: center !important;color: rgb(5, 45, 131) !important;">\n       Expiry Date\n      </ion-col>\n      <ion-col col-2 style="text-align: right !important;color: rgb(5, 45, 131) !important;">\n        Cost\n      </ion-col>\n      <ion-col col-3 style="text-align: center !important;color: rgb(5, 45, 131) !important;">\n        Image\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-list>\n    <ion-item *ngFor="let det of details">\n      <ion-grid>\n        <ion-row>\n        <ion-col col-4 style="text-align: left !important;color: #000 !important;">\n          {{det[\'vehicle_number\']}}\n        </ion-col>\n        <ion-col col-3 style="text-align: center !important;font-size: 10px;margin-top: 5px;font-weight: 1000;">\n          {{det[\'expiry_date\']}}\n        </ion-col>\n        <ion-col col-2 style="text-align: right !important;color: #000 !important;">\n          ₹  {{det[\'bill_amount\']}}\n        </ion-col>\n        <ion-col col-3 style="text-align: center !important;">\n          <img *ngIf="det[\'image_url\'] != null" style="width: 30%;" [src]="det[\'image_url\']" />\n          <span style="float: right;">\n            <ion-icon name="close-circle" style="color: red;padding-right: 15px;" (click)=\'removeItem(det)\'></ion-icon>\n          </span>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item>\n    <ion-grid>\n      <ion-row>\n      <ion-col col-4 style="text-align: left !important;">\n       \n      </ion-col>\n      <ion-col col-3 style="text-align: center !important;color: #000 !important;">\n       Total\n      </ion-col>\n      <ion-col col-2 style="text-align: right !important;color: #000 !important;">\n        ₹ {{total_bill}}\n      </ion-col>\n      <ion-col col-3 style="text-align: center !important;">\n        \n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-item>\n\n\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-grid style="padding:0px !important; ">\n    <ion-item class="label-select" style="margin-top: 0px !important;padding: 10px !important;background: white !important;">\n      <ion-label floating>SELECT VEHICLE</ion-label>\n      <ion-select interface="action-sheet" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" [(ngModel)]="vehicle_id">\n        <ion-option value="{{vh[\'vehicle_id\']}}" *ngFor="let vh of vehicles">{{vh[\'vehicle_number\']}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-row class="cost-camera-expiry" style="margin: 0px -6px; padding: 10px !important;background: white !important;">\n\n      <ion-col col-5 style="background: white !important;">\n        <div class="label-float" >\n          <input type="tel" [(ngModel)]="bill_amount"  placeholder=" " />\n          <label>COST</label>\n          <i class="fa fa-money" aria-hidden="true"></i>\n    \n        </div>\n      </ion-col>\n    \n      <ion-col col-2 *ngIf="img == null" style="background: white !important;">\n        <div (click)="openCameraPopup()" class="detail-picture">\n          <i class="fa fa-camera" aria-hidden="true"></i>\n        </div>  \n      </ion-col>\n      <ion-col col-2 *ngIf="img != null" style="background: white !important;">\n        <img [src]="img[\'image_url\']" style="opacity: 0.3 !important;"/>\n        <ion-icon class="edit-pencil" ios="ios-create" md="md-create" style="position: absolute;right: 19px;top: 21px;"></ion-icon>       \n      </ion-col>\n      <ion-col col-5 style="background: white !important;">\n        <div class="label-float" >\n          <input type="text"  [(ngModel)]="expiry_date" (click)="openCalendarPopup2()" placeholder=" " />\n          <label>EXPIRY</label>\n          <i class="fa fa-calendar" aria-hidden="true"></i>\n    \n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="cost-camera-expiry" style="margin: 0px -6px; padding: 10px !important;background: white !important;">\n      <ion-col col-6 style="text-align: center !important;">\n      <button ion-button class="custom-button" style="width: 80% !important;" (click)="addItem()">ADD ITEM</button>\n    </ion-col>\n    <ion-col col-6 style="text-align: center !important;">\n      <button ion-button class="custom-button" style="width: 80% !important;" (click)="saveBills()">SAVE BILLS</button>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-document-bill/vehicle-document-bill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__src_providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__src_providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"]])
    ], VehicleDocumentBillPage);
    return VehicleDocumentBillPage;
}());

//# sourceMappingURL=vehicle-document-bill.js.map

/***/ })

});
//# sourceMappingURL=4.js.map