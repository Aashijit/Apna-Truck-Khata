webpackJsonp([48],{

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRenewalPageModule", function() { return DocumentRenewalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_renewal__ = __webpack_require__(952);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentRenewalPageModule = /** @class */ (function () {
    function DocumentRenewalPageModule() {
    }
    DocumentRenewalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__document_renewal__["a" /* DocumentRenewalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__document_renewal__["a" /* DocumentRenewalPage */]),
            ],
        })
    ], DocumentRenewalPageModule);
    return DocumentRenewalPageModule;
}());

//# sourceMappingURL=document-renewal.module.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentRenewalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_providers_codes_codes__ = __webpack_require__(159);
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






var DocumentRenewalPage = /** @class */ (function () {
    function DocumentRenewalPage(navCtrl, navParams, codes, rest, modalCtrl, message, pv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.rest = rest;
        this.modalCtrl = modalCtrl;
        this.message = message;
        this.pv = pv;
        // UPDATE_DOCUMENT_BILL
        this.gender = '';
        this.myDate = '';
        this.vari = '';
        this.isSelectedBill = false;
        this.persons = [];
        this.vehicles = [];
        this.vehicle_string = "";
        this.saveupdatebillid = null;
        this.bill_id = null;
        this.worker_id = '';
        this.person_shop_name = '';
        this.srth_id = '';
        this.vehicle_id = '';
        this.km_reading = '';
        this.bill_date = '';
        this.worker_type = '';
        this.total_bill = 0;
        this.bill_image_id = '';
        this.bill_details = '';
        this.last_maint_id = '';
        this.opt_counte = '';
        this.expiry_date = '';
        this.total_bill_full = 0;
        this.bills = [];
        this.details = [];
        this.is_update = false;
        this.document = '';
        this.img = null;
        this.displayBills = [];
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        this.document = this.navParams.get("document");
        console.log(JSON.stringify(this.document));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                var dt = resp['data'];
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i]['worker_type'] == 'documents' || dt[i]['worker_type'] == 'insurance') {
                        _this.persons.push(dt[i]);
                    }
                }
            }
        });
        var bl = this.navParams.get("bill");
        if (bl != undefined && bl != null) {
            this.is_update = true;
            this.details = bl['details'];
            this.bill_id = bl['bill_id'];
            this.worker_id = bl['worker_id'];
            this.person_shop_name = bl['person_shop_name'];
            this.srth_id = bl['srth_id'];
            this.km_reading = bl['km_reading'];
            this.bill_date = bl['bill_date'];
            this.worker_type = bl['worker_type'];
            this.total_bill = bl['total_bill'];
            this.bill_details = bl['bill_details'];
            this.img = bl['image'];
            if (this.details != undefined) {
                for (var i = 0; i < this.details.length; i++) {
                    this.details[i]['expiry_date'] = this.details[i]['document_expiry_date'];
                }
            }
        }
        if (this.bill_id == null) {
            this.rest.post(this.codes.GET_LAST_BILL_ID, {}).then(function (resp) {
                if (resp['_ReturnCode'] == '0') {
                    _this.bill_id = resp['data'];
                    _this.bill_id = Number(_this.bill_id) + 1;
                }
            });
        }
        if (this.details == undefined || this.details == null) {
            this.details = [];
        }
        this.getVehicles();
    }
    DocumentRenewalPage.prototype.addDocumentBills = function (br) {
        var _this = this;
        var mdl = this.modalCtrl.create('VehicleDocumentBillPage', { 'action': br, 'worker_type': this.worker_type, 'worker_id': this.worker_id, 'details': this.details, "document": this.document });
        mdl.present();
        mdl.onDidDismiss(function (resp) {
            if (localStorage.getItem("vehicle_document_bills") != undefined)
                _this.details = JSON.parse(localStorage.getItem("vehicle_document_bills"));
            _this.bills = [];
            var vhcls = "";
            for (var i = 0; i < _this.details.length; i++) {
                var bill = {
                    "bill_id": _this.bill_id,
                    "vehicle_id": _this.details[i]['vehicle_id'],
                    "expiry_date": _this.details[i]['expiry_date'],
                    "total_bill": _this.details[i]['bill_amount'],
                    "person_shop_name": _this.person_shop_name,
                    "vehicle_number": _this.details[i]['vehicle_number'],
                    "image": _this.details[i]['image_url']
                };
                // console.error("Vehicle number : " + JSON.stringify(this.details[i]));
                // if (this.details[i]['vehicle_number'] == undefined || this.details[i]['vehicle_number'] == "undefined")
                //   vhcls += " ";
                // else
                //   vhcls += this.details[i]['vehicle_number'] + " ";
                _this.bills.push(bill);
                for (var i_1 = 0; i_1 < _this.bills.length; i_1++)
                    _this.bills[i_1]['selected'] = 'false';
            }
            if (_this.displayBills.length > 0) {
                _this.displayBills.push(_this.bills);
            }
            else
                _this.displayBills = _this.bills;
            _this.vehicle_string = vhcls.replace("undefined", "");
            _this.changeCost({});
        });
    };
    DocumentRenewalPage.prototype.getVehicles = function () {
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
    DocumentRenewalPage.prototype.viewBillImage = function (imageUrl) {
        this.pv.show(imageUrl, 'Document Image', { 'share': true });
    };
    DocumentRenewalPage.prototype.updateBill = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "person_shop_name": this.person_shop_name,
            "srth_id": json[0]['srth_id'],
            "vehicle_id": this.vehicle_id,
            "reason": this.document['document_name'],
            "km_reading": this.km_reading,
            "bill_date": this.bill_date,
            "worker_type": this.worker_type,
            "worker_id": this.worker_id,
            "total_bill": this.total_bill,
            "bill_image_id": this.img != null ? this.img['image_id'] : '0',
            "bill_details": this.bill_details,
            "last_maint_id": 'srth-app',
            "opt_counter": '0',
            "expiry_date": this.expiry_date,
            "details": this.details
        };
        if (this.is_update == true) {
            data['bill_id'] = this.bill_id;
            this.saveupdatebillid = this.bill_id;
        }
        this.rest.post(this.codes.UPDATE_DOCUMENT_BILL, data).then(function (resp) {
            _this.bill_date = '';
            _this.km_reading = '';
            _this.bill_details = '';
            _this.total_bill = 0;
            if (resp['_ReturnCode'] == '0') {
                _this.is_update = false;
                _this.bill_id = Number(resp['data']['bill_id']) + 1;
                if (_this.img != null)
                    resp['data']['image_content'] = _this.img['image_content'];
                _this.bills = [];
                resp['data']['details'] = _this.details;
                var exp_date = "";
                for (var j = 0; j < _this.details.length; j++) {
                    exp_date += _this.details[j]['expiry_date'] + " ";
                }
                resp['data']['expiry_date'] = exp_date;
                resp['data']['bill_id'] = _this.saveupdatebillid;
                _this.bills.push(resp['data']);
                for (var i = 0; i < _this.bills.length; i++)
                    _this.bills[i]['selected'] = 'false';
                _this.details = [];
            }
        });
    };
    DocumentRenewalPage.prototype.openDetailPopup = function () {
        var _this = this;
        var detailsModalPage = this.modalCtrl.create('DetailsModalPage', { "details": this.bill_details });
        detailsModalPage.onDidDismiss(function (data) {
            _this.bill_details = localStorage.getItem(_this.codes.DETAILS);
        });
        detailsModalPage.present();
    };
    DocumentRenewalPage.prototype.openCameraPopup = function () {
        var _this = this;
        if (this.person_shop_name == '' || this.person_shop_name == null) {
            this.message.displayToast("Please select shop");
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
            "worker_type": this.worker_type,
            "bill_details": this.bill_details
        };
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data2 = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "document",
            "worker_id": this.worker_id,
            "document_type": "dbill",
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
    DocumentRenewalPage.prototype.addNew = function () {
        var dtls = {
            "bill_amount": "",
            "expiry_date": "",
            "vehicle_id": "",
            "img": null
        };
        this.details.push(dtls);
    };
    DocumentRenewalPage.prototype.changeCost = function (det) {
        // alert(JSON.stringify(det));
        this.total_bill = 0;
        for (var i = 0; i < this.details.length; i++) {
            this.total_bill = Number(this.total_bill) + Number(this.details[i]['bill_amount']);
        }
    };
    DocumentRenewalPage.prototype.saveBill = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        // alert(JSON.stringify(this.img));
        var data = {
            "person_shop_name": this.person_shop_name,
            "srth_id": json[0]['srth_id'],
            "vehicle_id": this.vehicle_id,
            "reason": this.document['document_name'],
            "km_reading": this.km_reading,
            "bill_date": this.bill_date,
            "worker_type": this.worker_type,
            "worker_id": this.worker_id,
            "total_bill": this.total_bill,
            "bill_image_id": this.img != null ? this.img['image_id'] : '0',
            "bill_details": this.bill_details,
            "last_maint_id": 'srth-app',
            "opt_counter": '0',
            "expiry_date": this.expiry_date,
            "details": this.details
        };
        if (this.is_update == true)
            data['bill_id'] = this.bill_id;
        this.rest.post(this.codes.UPDATE_DOCUMENT_BILL, data).then(function (resp) {
            _this.bill_date = '';
            _this.km_reading = '';
            _this.bill_details = '';
            _this.total_bill = 0;
            if (resp['_ReturnCode'] == '0') {
                _this.bill_id = Number(resp['data']['bill_id']) + 1;
                if (_this.img != null)
                    resp['data']['image_content'] = _this.img['image_content'];
                _this.bills = [];
                var exp_date = "";
                for (var j = 0; j < _this.details.length; j++) {
                    exp_date += _this.details[j]['expiry_date'] + " ";
                }
                resp['data']['expiry_date'] = exp_date;
                resp['data']['details'] = _this.details;
                _this.bills.push(resp['data']);
                for (var i = 0; i < _this.bills.length; i++)
                    _this.bills[i]['selected'] = 'false';
                _this.details = [];
            }
        });
    };
    DocumentRenewalPage.prototype.change = function (event) {
        this.vari = event;
        this.isSelectedBill = true;
        for (var i = 0; i < this.persons.length; i++) {
            if (this.persons[i]['worker_id'] == event) {
                this.person_shop_name = this.persons[i]['name'];
                this.worker_type = this.persons[i]['worker_type'];
            }
        }
    };
    DocumentRenewalPage.prototype.openCalendarPopup = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.bill_date = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    DocumentRenewalPage.prototype.openCalendarPopup2 = function (det) {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            det['expiry_date'] = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    DocumentRenewalPage.prototype.selectThis = function (bl) {
        if (bl != undefined && bl != null) {
            this.is_update = true;
            this.details = bl['details'] == undefined ? this.details : bl['details'];
            // alert(JSON.stringify(this.details));
            this.bill_id = bl['bill_id'];
            this.worker_id = bl['worker_id'];
            this.person_shop_name = bl['person_shop_name'];
            this.srth_id = bl['srth_id'];
            this.km_reading = bl['km_reading'];
            this.bill_date = bl['bill_date'] == undefined ? this.bill_date : bl['bill_date'];
            this.worker_type = bl['worker_type'];
            this.total_bill = bl['total_bill'];
            this.bill_details = bl['bill_details'] == undefined ? this.bill_details : bl['bill_details'];
        }
        for (var i = 0; i < this.bills.length; i++)
            if (this.bills[i]['bill_id'] == bl['bill_id'])
                this.bills[i]['selected'] = 'true';
    };
    DocumentRenewalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentRenewalPage');
    };
    DocumentRenewalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-document-renewal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/document-renewal/document-renewal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <!-- <ion-col col-2 class="custom-back-button"> -->\n      <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      <!-- </ion-col> -->\n\n      <ion-col col-10 class="person-name text-left">\n        <ion-title>\n          <ion-icon name="ios-copy"></ion-icon>\n          {{document[\'document_name\']}} - RENEWAL\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-2 class="youtube" style="margin-left: -20px;">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="">\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container white-section">\n\n    <div class="scroll-grid">\n      <div class="scrollmenu">\n        <a href="#about">BILL NUMBER</a>\n        <a href="#home">PERSON</a>\n        <a href="#news">VEHICLE NUMBER</a>\n        <a href="#contact">EXPIRY DATE</a>\n        <a href="#support">COST</a>\n        <a href="#support">IMAGE</a>\n\n        <div *ngFor="let bill of displayBills" (click)="selectThis(bill)">\n          <!-- <div [ngClass]="bill[\'selected\'] == \'true\' ? \'scrollmenu-list\' : \'scrollmenu-list selected\'"> -->\n            <p>{{bill[\'bill_id\']}}</p>\n            <p>{{bill[\'person_shop_name\']}}</p>\n            <p>{{bill[\'vehicle_number\']}}</p>\n            <p>{{bill[\'expiry_date\']}}</p>\n            <p>&#x20b9; {{bill[\'total_bill\']}}</p>\n            <p>\n                <img [src]="bill[\'image\']" style="width:11% !important" (click)="viewBillImage(bill[\'image\'])" />\n            </p>\n          <!-- </div> -->\n        </div>\n\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n\n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n\n      </div>\n    </div>\n\n\n\n\n    <ion-badge color="primary" style="margin-top: 13px;margin-left: 2px;padding: 7px;">Bill # {{bill_id}}</ion-badge>\n\n    <ion-badge color="secondary" style="margin-top: 13px;margin-left: 2px;padding: 7px;" *ngIf="details.length > 0">\n      Total &#x20b9; {{total_bill}}</ion-badge>\n\n\n    <ion-item *ngIf="!isSelectedBill" class="label-select" style="margin-top: 0px !important;">\n      <ion-label floating>SELECT PERSON</ion-label>\n\n      <ion-select interface="action-sheet"\n        style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;"\n        [(ngModel)]="worker_id" (ionChange)="change($event)">\n        <ion-option value="{{per[\'worker_id\']}}" *ngFor="let per of persons">{{per[\'name\']}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-row class="selected-details" *ngIf="isSelectedBill">\n      <ion-col col-4 class="text-center" style="color: white;">\n        <img src="../../assets/saarthi-icon/png/002-folder.png" alt="">\n      </ion-col>\n      <ion-col col-4 class="text-center" style="color: white;">\n        <h6 style="margin-top: 16px;font-size: 14px;color: #fff;font-weight: 1000;">{{person_shop_name}}\n          <br>{{document[\'document_name\']}}</h6>\n      </ion-col>\n      <ion-col col-4 class="text-center">\n\n        <button ion-button round style="margin-top: 15px;" (click)="isSelectedBill = !isSelectedBill">CHANGE</button>\n      </ion-col>\n    </ion-row>\n\n\n    <div style="border: 2px solid #3951b2;margin-top: 10px;border-radius: 10px;">\n      <button ion-button [disabled]="details.length > 0" round class="custom-button"\n        style="width: 150px !important;font-size: 10px !important;height: 25px !important;margin-left: 20px !important;"\n        (click)="addDocumentBills(\'save\')">ADD DOCUMENT BILLS</button>\n\n      <span *ngIf="details.length > 0"\n        style="color: green;font-size: 11px;position: relative;top: -18px;right: -39px;background: #fff;padding-left: 5px;padding-right: 5px;">\n        <ion-icon name="thumbs-up" color="success"></ion-icon>\n        &nbsp;\n        Vehciles Added\n      </span>\n\n      <span style="float: right !important;float: right !important;position: absolute;right: 22px;">\n        <button ion-button clear color="danger" (click)="addDocumentBills(\'edit\')" [disabled]="details.length == 0"\n          style="margin-top: 6px;">\n          Edit &nbsp;\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </span>\n    </div>\n\n    <div class="label-float">\n      <input type="tel" [(ngModel)]="total_bill" placeholder=" " />\n      <label>TOTAL</label>\n    </div>\n\n    <div class="label-float">\n      <input type="text" [(ngModel)]="bill_date" (click)="openCalendarPopup()" />\n      <label>DATE OF BILL</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div>\n\n    <!-- <div class="label-float" (click)="openDetailPopup()">\n      <input type="text" placeholder="" [(ngModel)]="bill_details" />\n      <label>DETAILS</label>\n    </div> -->\n    <ion-row >\n      <ion-col col-9>\n\n        <ion-row >\n          <div class="label-float" style="margin-left: 25px;margin-top: -6px;width: 90%;" >\n            <input type="text" [(ngModel)]="bill_details" (click)="openDetailPopup()" placeholder=" " />\n            <label>DETAILS</label>\n          </div>\n        </ion-row>  \n      </ion-col>\n      <ion-col col-2>\n        <ion-row class="detail-picture" style="margin-top:0px !important;">\n          <ion-col col-4   *ngIf="img == null" (click)="openCameraPopup()">\n            <i class="fa fa-camera" aria-hidden="true"></i>\n            <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n    \n          </ion-col>    \n          <ion-col col-12 *ngIf="img != null" (click)="openCameraPopup()">\n            <img [src]="img[\'image_url\']" style="opacity: 0.3 !important;"/>\n           <ion-icon class="edit-pencil" ios="ios-create" md="md-create" style="position: absolute;right: 19px;top: 21px;"></ion-icon>\n    \n          </ion-col>\n        </ion-row>      \n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n  <div class="text-center mt-4" *ngIf="!is_update">\n    <button ion-button round class="custom-button" (click)="saveBill()"> SAVE</button>\n  </div>\n  <div class="text-center mt-4" *ngIf="is_update">\n    <button ion-button round class="custom-button" (click)="updateBill()"> UPDATE</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/document-renewal/document-renewal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__src_providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_2__src_providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], DocumentRenewalPage);
    return DocumentRenewalPage;
}());

//# sourceMappingURL=document-renewal.js.map

/***/ })

});
//# sourceMappingURL=48.js.map