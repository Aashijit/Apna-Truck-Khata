webpackJsonp([67],{

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriverPageModule", function() { return AddDriverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_driver__ = __webpack_require__(922);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddDriverPageModule = /** @class */ (function () {
    function AddDriverPageModule() {
    }
    AddDriverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_driver__["a" /* AddDriverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_driver__["a" /* AddDriverPage */]),
            ],
        })
    ], AddDriverPageModule);
    return AddDriverPageModule;
}());

//# sourceMappingURL=add-driver.module.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddDriverPage = /** @class */ (function () {
    function AddDriverPage(navCtrl, navParams, contacts, rest, codes, message, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contacts = contacts;
        this.rest = rest;
        this.codes = codes;
        this.message = message;
        this.modalCtrl = modalCtrl;
        this.gender = '';
        this.myDate = '';
        this.vari = '';
        this.typeOfPerson = '';
        this.addMore = false;
        this.worker_id = '';
        this.worker_type = '';
        this.name = '';
        this.salary = '';
        this.phone_number = '';
        this.start_date = '';
        this.city = '';
        this.aadhar_card_number = '';
        this.aadhar_card_front_image_id = '0';
        this.aadhar_card_back_image_id = '0';
        this.pan_card_number = '';
        this.pan_card_front_image_id = '0';
        this.pan_card_back_image_id = '0';
        this.license_number = '';
        this.license_card_front_image_id = '0';
        this.license_card_back_image_id = '0';
        this.account_number = '';
        this.ifsc = '';
        this.reference_person = '';
        this.GSTN = '';
        this.pan = '';
        this.address_line_1 = '';
        this.address_line_2 = '';
        this.state = '';
        this.pincode = '';
        this.paid_money = '0';
        this.due_money = '0';
        this.profile_image_id = '0';
        this.extra_image_1_id = '0';
        this.extra_image_2_id = '0';
        this.last_maint_id = 'srth-app';
        this.opt_counter = '0';
        this.is_update = false;
        var update = this.navParams.get("update");
        if (update == "true") {
            this.is_update = true;
            this.addMore = true;
            var worker = JSON.parse(localStorage.getItem("worker"));
            this.worker_id = worker['worker_id'];
            this.worker_type = worker['worker_type'];
            this.name = worker['name'];
            this.salary = worker['salary'];
            this.phone_number = worker['phone_number'];
            this.start_date = worker['start_date'];
            this.city = worker['city'];
            this.aadhar_card_number = worker['aadhar_card_number'];
            this.aadhar_card_front_image_id = worker['aadhar_card_front_image_id'];
            ;
            this.aadhar_card_back_image_id = worker['aadhar_card_back_image_id'];
            ;
            this.pan_card_number = worker['pan_card_number'];
            this.pan_card_front_image_id = worker['pan_card_front_image_id'];
            this.pan_card_back_image_id = worker['pan_card_back_image_id'];
            this.license_number = worker['license_number'];
            this.license_card_front_image_id = worker['license_card_front_image_id'];
            this.license_card_back_image_id = worker['license_card_back_image_id'];
            this.account_number = worker['account_number'];
            this.ifsc = worker['ifsc'];
            this.reference_person = worker['reference_person'];
            this.GSTN = worker['GSTN'];
            this.pan = worker['pan'];
            this.address_line_1 = worker['address_line_1'];
            this.address_line_2 = worker['address_line_2'];
            this.state = worker['state'];
            this.pincode = worker['pincode'];
            this.paid_money = worker['paid_money'];
            this.due_money = worker['due_money'];
            this.profile_image_id = worker['profile_image_id'];
            this.extra_image_1_id = worker['extra_image_1_id'];
            this.extra_image_2_id = worker['extra_image_2_id'];
            this.last_maint_id = 'srth-app';
            this.opt_counter = '0';
        }
    }
    AddDriverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddDriverPage');
    };
    AddDriverPage.prototype.change = function ($event) {
        this.vari = $event;
    };
    AddDriverPage.prototype.choosePerson = function ($event) {
        this.typeOfPerson = $event;
    };
    AddDriverPage.prototype.storeImage = function (num, type) {
        var _this = this;
        var cameraModalPage = this.modalCtrl.create('AllImageKhataPage', { "isselect": true, "type": "profile" });
        cameraModalPage.onDidDismiss(function (resp) {
            if (type == 'Pancard') {
                if (num == 1) {
                    _this.pan_card_front_image_id = JSON.parse(localStorage.getItem("selectedimage"));
                }
                else {
                    _this.pan_card_back_image_id = JSON.parse(localStorage.getItem("selectedimage"));
                }
            }
            else if (type == 'Aadharcard') {
                if (num == 1) {
                    _this.aadhar_card_front_image_id = JSON.parse(localStorage.getItem("selectedimage"));
                }
                else {
                    _this.aadhar_card_back_image_id = JSON.parse(localStorage.getItem("selectedimage"));
                }
            }
            else if (type == 'LicenseImage') {
                if (num == 1) {
                    _this.license_card_front_image_id = JSON.parse(localStorage.getItem("selectedimage"));
                }
                else {
                    _this.license_card_back_image_id = JSON.parse(localStorage.getItem("selectedimage"));
                }
            }
            else if (type == 'Profile') {
                if (num == 0) {
                    _this.profile_image_id = JSON.parse(localStorage.getItem("selectedimage"));
                }
            }
            else if (type == 'CancelledCheque') {
                if (num == 0) {
                    _this.profile_image_id = JSON.parse(localStorage.getItem("selectedimage"));
                }
            }
        });
        cameraModalPage.present();
    };
    AddDriverPage.prototype.viewContact = function () {
        var _this = this;
        this.contacts.pickContact().then(function (resp) {
            _this.name = resp['displayName'];
            _this.phone_number = resp['phoneNumbers'][0]['value'];
        });
    };
    AddDriverPage.prototype.addMoreDetails = function () {
        this.addMore = !this.addMore;
    };
    AddDriverPage.prototype.openCalendarPopup = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.start_date = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    AddDriverPage.prototype.savePerson = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": userdata[0]['srth_id'],
            "worker_type": this.worker_type,
            "name": this.name,
            "salary": this.salary,
            "phone_number": this.phone_number,
            "start_date": this.start_date,
            "city": this.city,
            "aadhar_card_number": this.aadhar_card_number,
            "aadhar_card_front_image_id": this.aadhar_card_front_image_id != '0' ? this.aadhar_card_front_image_id['image_id'] : '0',
            "aadhar_card_back_image_id": this.aadhar_card_back_image_id != '0' ? this.aadhar_card_back_image_id['image_id'] : '0',
            "pan_card_number": this.pan_card_number,
            "pan_card_front_image_id": this.pan_card_front_image_id != '0' ? this.pan_card_front_image_id['image_id'] : '0',
            "pan_card_back_image_id": this.pan_card_back_image_id != '0' ? this.pan_card_back_image_id['image_id'] : '0',
            "license_number": this.license_number,
            "license_card_front_image_id": this.license_card_front_image_id != '0' ? this.license_card_front_image_id['image_id'] : '0',
            "license_card_back_image_id": this.license_card_back_image_id != '0' ? this.license_card_back_image_id['image_id'] : '0',
            "account_number": this.account_number,
            "ifsc": this.ifsc,
            "reference_person": this.reference_person,
            "GSTN": this.GSTN,
            "pan": this.pan,
            "address_line_1": this.address_line_1,
            "address_line_2": this.address_line_2,
            "state": this.state,
            "pincode": this.pincode,
            "paid_money": this.paid_money,
            "due_money": this.due_money,
            "profile_image_id": this.profile_image_id,
            "extra_image_1_id": this.extra_image_1_id,
            "extra_image_2_id": this.extra_image_2_id,
            "last_maint_id": this.last_maint_id,
            "opt_counter": this.opt_counter
        };
        this.rest.post(this.codes.CREATE_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have added a ' + _this.worker_type + ' successfully!');
                _this.navCtrl.pop();
            }
        });
    };
    AddDriverPage.prototype.updateworker = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "worker_id": this.worker_id,
            "worker_type": this.worker_type,
            "name": this.name,
            "salary": this.salary,
            "phone_number": this.phone_number,
            "start_date": this.start_date,
            "city": this.city,
            "aadhar_card_number": this.aadhar_card_number,
            "aadhar_card_front_image_id": this.aadhar_card_front_image_id,
            "aadhar_card_back_image_id": this.aadhar_card_back_image_id,
            "pan_card_number": this.pan_card_number,
            "pan_card_front_image_id": this.pan_card_front_image_id,
            "pan_card_back_image_id": this.pan_card_back_image_id,
            "license_number": this.license_number,
            "license_card_front_image_id": this.license_card_front_image_id,
            "license_card_back_image_id": this.license_card_back_image_id,
            "account_number": this.account_number,
            "ifsc": this.ifsc,
            "reference_person": this.reference_person,
            "GSTN": this.GSTN,
            "pan": this.pan,
            "address_line_1": this.address_line_1,
            "address_line_2": this.address_line_2,
            "state": this.state,
            "pincode": this.pincode,
            "paid_money": this.paid_money,
            "due_money": this.due_money,
            "profile_image_id": '0',
            "extra_image_1_id": '0',
            "extra_image_2_id": '0',
            "last_maint_id": this.last_maint_id,
            "opt_counter": this.opt_counter
        };
        this.rest.post(this.codes.UPDATE_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have updated a ' + _this.worker_type + ' successfully!');
                localStorage.setItem("worker", JSON.stringify(data));
                _this.navCtrl.pop();
            }
        });
    };
    AddDriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-add-driver',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-driver/add-driver.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-user-circle" aria-hidden="true"></i>\n          ADD PERSON\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container white-section">\n\n    <!-- <ion-list> -->\n    \n      <ion-item class="label-select">\n        <ion-label floating style="margin-left: 10px;">TYPE</ion-label>\n\n        <ion-select interface="popover" [(ngModel)]="worker_type" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" (ionChange)="choosePerson($event)">\n          <ion-option value="mechanic">MECHANIC</ion-option>\n          <ion-option value="shop">SHOP</ion-option>\n          <ion-option value="driver">DRIVER</ion-option>\n\n          <ion-option value="documents">DOCUMENTS</ion-option>\n\n          <ion-option value="insurance">INSURANCE</ion-option>\n        </ion-select>\n\n       \n      </ion-item>\n\n\n    \n\n\n      <ion-row class="profile-picture">\n        <ion-col col-6 class="text-center">\n          <img *ngIf="typeOfPerson  == \'mechanic\'" src="../../assets/saarthi-icon/png/007-mechanic.png" alt="">\n          <img *ngIf="typeOfPerson  == \'shop\'" src="../../assets/saarthi-icon/png/004-shop.png" alt="">\n          <img *ngIf="typeOfPerson  == \'driver\'" src="../../assets/saarthi-icon/png/driver.png" alt="">\n          <img *ngIf="typeOfPerson  == \'documents\'" src="../../assets/saarthi-icon/png/002-folder.png" alt="">\n          <img *ngIf="typeOfPerson  == \'insurance\'" src="../../assets/saarthi-icon/png/002-folder.png" alt="">\n        </ion-col>\n        <ion-col col-6 class="text-center" (click)="storeImage(0,\'Profile\')">\n          <i class="fa fa-camera" *ngIf="profile_image_id == \'0\'" aria-hidden="true" ></i> \n          <span *ngIf="profile_image_id != \'0\'">\n            <img  [src]="profile_image_id[\'image_content\']" />\n          </span>\n\n          <!-- <i class="fa fa-camera" aria-hidden="true"></i> -->\n          <ion-icon class="edit-pencil" ios="ios-create" md="md-create" ></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n\n      <!-- <div class="label-float" >\n        <input type="text" [(ngModel)]="name"  placeholder=" " />\n        <label>NAME</label>\n        <i class="fa fa-user" aria-hidden="true"></i>\n\n      </div> -->\n\n      <!-- <br/>\n      <br/>\n      <br/> -->\n      <!-- (click)="viewContact()" -->\n     \n      <div class="label-float" >\n        <input type="text" [(ngModel)]="phone_number" (click)="viewContact()"  placeholder=" " />\n        <label>NAME & PHONE</label>\n        <i class="fa fa-address-book" aria-hidden="true"></i>\n\n      </div>\n      <p style="margin-left: 6px;font-size: 14px;color: #0752af;">{{name}}</p>\n\n    <div class="label-float" *ngIf="typeOfPerson  == \'driver\'" >\n      <input type="tel" [(ngModel)]="salary"  placeholder=" " />\n      <label>SALARY (MONTHLY) ₹</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n    </div>  \n\n\n\n      <div class="label-float" *ngIf="typeOfPerson  == \'driver\'" (click)="openCalendarPopup()">\n        <input type="text" [(ngModel)]="start_date"/>\n        <label>START DATE</label>\n        <i class="fa fa-calendar" aria-hidden="true"></i>\n\n      </div>\n\n    \n\n    <div *ngIf="addMore">\n\n      <ion-item class="label-select"  >\n        <ion-label style="margin-left: 10px;" floating>DOC</ion-label>\n\n        <ion-select interface="action-sheet" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;"  (ionChange)="change($event)">\n          <ion-option value="Aadharcard">AADHAR CARD</ion-option>\n          <ion-option value="Pancard">PAN CARD</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n\n        <div *ngIf="vari  == \'Aadharcard\'" class="label-float" >\n          <input type="text" [(ngModel)]="aadhar_card_number"  placeholder=" " />\n          <label>AADHAR NUMBER</label>\n          <i class="fa fa-file" aria-hidden="true"></i>\n\n        </div>\n\n        <div *ngIf="vari  == \'Pancard\'" class="label-float" >\n          <input type="text"  [(ngModel)]="pan_card_number"   placeholder=" " />\n          <label>PAN NUMBER</label>\n          <i class="fa fa-file" aria-hidden="true"></i>\n\n        </div>\n\n        <ion-row *ngIf="vari  == \'Aadharcard\'">\n          <ion-col col-6 class="text-center" >\n            <div class="add-circle-div">\n              <button ion-button clear (click)="storeImage(1,\'Aadharcard\')">              \n                <i class="fa fa-camera" *ngIf="aadhar_card_front_image_id == \'0\'" aria-hidden="true" ></i> \n                <span *ngIf="aadhar_card_front_image_id != \'0\'">\n                  <img  [src]="aadhar_card_front_image_id[\'image_content\']" />\n                </span>\n              </button>\n              <p>(DOCUMENT FRONT SIDE)</p>\n            </div>           \n          </ion-col>\n          <ion-col col-6 class="text-center" >\n            <div class="add-circle-div">\n              <button ion-button clear (click)="storeImage(2,\'Aadharcard\')">              \n                <i class="fa fa-camera" *ngIf="aadhar_card_back_image_id == \'0\'" aria-hidden="true" ></i> \n                <span *ngIf="aadhar_card_back_image_id != \'0\'">\n                  <img  [src]="aadhar_card_back_image_id[\'image_content\']" />\n                </span>\n              </button>\n              <p>(DOCUMENT BACK SIDE)</p>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="vari  == \'Pancard\'">\n          <ion-col col-6 class="text-center" >\n            <div class="add-circle-div">\n              <button ion-button clear (click)="storeImage(1,\'Pancard\')">              \n                <i class="fa fa-camera" *ngIf="pan_card_front_image_id == \'0\'" aria-hidden="true" ></i> \n                <span *ngIf="pan_card_front_image_id != \'0\'">\n                  <img  [src]="pan_card_front_image_id[\'image_content\']" />\n                </span>\n              </button>\n              <p>(DOCUMENT FRONT SIDE)</p>\n            </div>           \n          </ion-col>\n          <ion-col col-6 class="text-center" >\n            <div class="add-circle-div">\n              <button ion-button clear (click)="storeImage(2,\'Pancard\')">              \n                <i class="fa fa-camera" *ngIf="pan_card_back_image_id == \'0\'" aria-hidden="true" ></i> \n                <span *ngIf="pan_card_back_image_id != \'0\'">\n                  <img  [src]="pan_card_back_image_id[\'image_content\']" />\n                </span>\n              </button>\n              <p>(DOCUMENT BACK SIDE)</p>\n            </div>\n          </ion-col>\n        </ion-row>\n\n      <!-- </ion-item> -->\n\n      <div class="label-float" *ngIf="typeOfPerson  == \'driver\'">\n        <input type="text" [(ngModel)]="license_number"  placeholder=" " />\n        <label>LICENSE NUMBER</label>\n        <i class="fa fa-file" aria-hidden="true"></i>\n\n      </div>\n\n      <ion-row *ngIf="typeOfPerson  == \'driver\'">\n        <ion-col col-6 class="text-center" >\n          <!-- <i class="fa fa-camera" aria-hidden="true"></i> -->\n          <div class="add-circle-div">\n            <button ion-button clear (click)="storeImage(1,\'LicenseImage\')">              \n              <i class="fa fa-camera" aria-hidden="true" *ngIf="license_card_front_image_id == \'0\'" ></i> \n              <span *ngIf="license_card_front_image_id != \'0\'">\n                <img  [src]="license_card_front_image_id[\'image_content\']" />\n              </span>\n            </button>\n\n            <!-- <i class="fa fa-camera" aria-hidden="true" ></i>  -->\n            <!-- <ion-icon class="add-circle" name="ios-add-circle"></ion-icon> -->\n            <p>(DOCUMENT FRONT SIDE)</p>\n\n          </div>\n\n         \n        </ion-col>\n        <ion-col col-6 class="text-center" >\n          <!-- <i class="fa fa-camera" aria-hidden="true"></i> -->\n          <div class="add-circle-div">\n            <button ion-button clear (click)="storeImage(2,\'LicenseImage\')">   \n              <span *ngIf="license_card_back_image_id != \'0\'">\n                <img  [src]="license_card_back_image_id[\'image_content\']" />\n              </span>           \n              <i class="fa fa-camera" *ngIf="license_card_back_image_id == \'0\'" aria-hidden="true" ></i> \n            </button>\n\n            <!-- <i class="fa fa-camera" aria-hidden="true" ></i>  -->\n            <!-- <ion-icon class="add-circle" name="ios-add-circle"></ion-icon> -->\n            <p>(DOCUMENT BACK SIDE)</p>\n\n          </div>\n\n            <!-- <ion-icon class="add-circle" name="ios-add-circle" style="font-size: 40px;"></ion-icon> -->\n\n    \n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item class="label-select" >\n        <ion-label style="margin-left: 10px;" floating>CITY</ion-label>\n\n        <ion-select interface="action-sheet" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" [(ngModel)]="city" >\n          <ion-option value="city1">CITY 1</ion-option>\n          <ion-option value="city2">CITY 2</ion-option>\n          <ion-option value="city3">CITY 3</ion-option>\n\n          <ion-option value="city4">CITY 4</ion-option>\n\n          <ion-option value="city5">CITY 5</ion-option>\n\n        </ion-select>\n      </ion-item>\n\n      <div class="label-float" >\n        <input type="text" [(ngModel)]="pan"  placeholder=" " />\n        <label>PAN NUMBER</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n      </div>\n\n      <div class="label-float" >\n        <input type="text" [(ngModel)]="GSTN"  placeholder=" " />\n        <label>GST NUMBER (OPTIONAL)</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n      </div>\n\n\n      <!-- <ion-item>\n        <ion-input type="text" placeholder="GST NUMBER (OPTIONAL)"></ion-input>\n      </ion-item> -->\n\n<!--    \n      <ion-item>\n        <ion-input type="text" placeholder="ADDRESS LINE 1"></ion-input>\n      </ion-item> -->\n      <div class="label-float" >\n        <input type="text" [(ngModel)]="address_line_1"  placeholder=" " />\n        <label>ADDRESS LINE 1</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n      </div>\n\n      <!-- <ion-item>\n        <ion-input type="text" placeholder="ADDRESS LINE 2"></ion-input>\n      </ion-item> -->\n\n      <div class="label-float" >\n        <input type="text"  [(ngModel)]="address_line_2"   placeholder=" " />\n        <label>ADDRESS LINE 2</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n      </div>\n\n      <ion-row class="state" >\n        <ion-col col-6>\n          <ion-item class="label-select">\n            <ion-label style="margin-left: 10px;" floating>STATE</ion-label>\n            <ion-select interface="action-sheet" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" [(ngModel)]="state">\n              <ion-option value="state 1">State 1</ion-option>\n              <ion-option value="state 2">State 2</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <!-- <ion-item>\n            <ion-input type="text" placeholder="PINCODE"></ion-input>\n          </ion-item> -->\n          <div class="label-float" >\n            <input type="tel" [(ngModel)]="pincode"  placeholder=" " />\n            <label>PINCODE</label>\n            <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n    \n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-item>\n        <ion-input type="text" placeholder="ACCOUNT NUMBER"></ion-input>\n      </ion-item> -->\n      <div class="label-float" >\n        <input type="text" [(ngModel)]="account_number"  placeholder=" " />\n        <label>ACCOUNT NUMBER</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n      </div>\n\n      <!-- <ion-item>\n        <ion-input type="text" placeholder="IFSC"></ion-input>\n      </ion-item> -->\n      <div class="label-float" >\n        <input type="text" [(ngModel)]="ifsc"  placeholder=" " />\n        <label>IFSC</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n      </div>\n\n      <!-- <div class="add-icon">\n        <ion-item>\n          <ion-input type="text" placeholder="REFERENCE PERSON"></ion-input>\n        </ion-item>\n        <i class="fa fa-address-book" aria-hidden="true"></i>\n      </div>\n       -->\n      <div class="label-float" *ngIf="typeOfPerson  == \'driver\'">\n        <input type="text" [(ngModel)]="reference_person"  placeholder=" " />\n        <label>REFERENCE PERSON</label>\n        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n      </div>\n\n\n      <ion-row class="profile-picture">\n        <ion-col col-5 (click)="storeImage(0,\'CancelledCheque\')">\n          <!-- <i class="fa fa-camera" aria-hidden="true"></i> -->\n          \n\n          <i class="fa fa-camera" *ngIf="extra_image_1_id == \'0\'" aria-hidden="true" ></i> \n          <span *ngIf="extra_image_1_id != \'0\'">\n            <img  [src]="extra_image_1_id[\'image_content\']" />\n          </span>\n\n          <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon>\n\n        </ion-col>\n        <ion-col col-6>\n          <h6>CANCELLED CHEQUE</h6> \n        </ion-col>\n\n      </ion-row>\n\n    </div>\n      \n\n    \n\n      <!-- <div class="text-center mt-4">\n\n        <button ion-button round class="custom-button">SAVE DETAILS</button>\n      </div> -->\n      \n    <!-- </ion-list> -->\n\n  </div>\n\n  <ion-row style="margin: 0;">\n    <ion-col col-12 class="text-center">\n      <button ion-button round  class="custom-button save-button" *ngIf="is_update" (click)="updateworker()">UPDATE</button>\n\n    </ion-col>\n\n    <ion-col col-6 class="text-center">\n      <button ion-button  class="custom-button add-more-button"  *ngIf="!is_update" (click)="addMoreDetails()">ADD MORE DETAILS</button>\n\n    </ion-col>\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button save-button"  *ngIf="!is_update" (click)="savePerson()">SAVE</button>\n\n    </ion-col>\n  </ion-row>\n</ion-content> \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-driver/add-driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__["b" /* Contacts */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"]])
    ], AddDriverPage);
    return AddDriverPage;
}());

//# sourceMappingURL=add-driver.js.map

/***/ })

});
//# sourceMappingURL=67.js.map