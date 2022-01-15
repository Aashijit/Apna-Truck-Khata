webpackJsonp([45],{

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDocumentPageModule", function() { return DriverDocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_document__ = __webpack_require__(954);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DriverDocumentPageModule = /** @class */ (function () {
    function DriverDocumentPageModule() {
    }
    DriverDocumentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__driver_document__["a" /* DriverDocumentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__driver_document__["a" /* DriverDocumentPage */]),
            ],
        })
    ], DriverDocumentPageModule);
    return DriverDocumentPageModule;
}());

//# sourceMappingURL=driver-document.module.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverDocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_providers_rest_rest__ = __webpack_require__(493);
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





var DriverDocumentPage = /** @class */ (function () {
    function DriverDocumentPage(message, codes, rest, viewController, navCtrl, navParams, modalCtrl) {
        var _this = this;
        this.message = message;
        this.codes = codes;
        this.rest = rest;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.isShown = false;
        this.driver = '';
        this.documents = [
            {
                "document_name": "National Permit",
                "document_image_id": "0",
                "document_expiry_date": "",
                "document_reminder_date": ""
            },
            {
                "document_name": "Insurance",
                "document_image_id": "0",
                "document_expiry_date": "",
                "document_reminder_date": ""
            },
            {
                "document_name": "Pollution Certificate",
                "document_image_id": "0",
                "document_expiry_date": "",
                "document_reminder_date": ""
            },
            {
                "document_name": "Certificate of fitness",
                "document_image_id": "0",
                "document_expiry_date": "",
                "document_reminder_date": ""
            },
            {
                "document_name": "Tax token",
                "document_image_id": "0",
                "document_expiry_date": "",
                "document_reminder_date": ""
            },
            {
                "document_name": "5 Year Authorization",
                "document_image_id": "0",
                "document_expiry_date": "",
                "document_reminder_date": ""
            },
            {
                "document_name": "Registration Certificate",
                "document_image_id": "0",
                "document_expiry_date": "",
                "document_reminder_date": ""
            },
            {
                "document_name": "Others 1X",
                "document_image_id": "0",
                "document_expiry_date": "",
                "document_reminder_date": ""
            },
            {
                "document_name": "Others 2X",
                "document_image_id": "0",
                "document_expiry_date": "",
                "document_reminder_date": ""
            }
        ];
        this.driver = this.navParams.get("driver");
        var req = {
            "type": "driver",
            "driver_id": this.driver['worker_id']
        };
        this.rest.post(this.codes.GET_DOCUMENT_INFO, req).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                if (resp['data'].length > 0)
                    _this.documents = resp['data'];
            }
        });
    }
    DriverDocumentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverDocumentPage');
    };
    DriverDocumentPage.prototype.showMore = function () {
        if (this.isShown) {
            document.getElementById("fa-arrow-circle-down-driver").classList.remove("fa-arrow-circle-up");
            document.getElementById("fa-arrow-circle-down-driver").classList.add("fa-arrow-circle-down");
        }
        else {
            document.getElementById("fa-arrow-circle-down-driver").classList.remove("fa-arrow-circle-down");
            document.getElementById("fa-arrow-circle-down-driver").classList.add("fa-arrow-circle-up");
        }
        this.isShown = !this.isShown;
    };
    DriverDocumentPage.prototype.goToModal = function () {
        var addMoreModal = this.modalCtrl.create('AddMoreModalPage');
        addMoreModal.present();
    };
    DriverDocumentPage.prototype.addPermit = function () {
        var addPermit = this.modalCtrl.create('AddPermitPage');
        addPermit.present();
    };
    DriverDocumentPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    DriverDocumentPage.prototype.save = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var _loop_1 = function (i) {
            this_1.documents[i]['worker_type'] = 'driver';
            this_1.documents[i]['srth_id'] = json[0]['srth_id'];
            this_1.documents[i]['driver_id'] = this_1.driver['worker_id'];
            this_1.documents[i]['is_active'] = '1';
            this_1.documents[i]['is_remove'] = '0';
            this_1.documents[i]['last_maint_id'] = 'srth_app';
            this_1.documents[i]['opt_counter'] = '0';
            this_1.rest.post(this_1.codes.UPDATE_DOCUMENT_INFO, this_1.documents[i]).then(function (resp) {
                _this.message.displayToast(_this.documents[i]['document_name'] + " saved.");
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.documents.length; i++) {
            _loop_1(i);
        }
        this.navCtrl.pop();
        // this.message.displayToast("All the documents are saved");
    };
    DriverDocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-driver-document',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver-document/driver-document.html"*/'<!-- Driver -->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-7 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-user" aria-hidden="true"></i>\n          DRIVER DOCUMENT\n        </ion-title>\n\n      </ion-col>\n      <!-- <ion-col col-1></ion-col> -->\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container driver">\n\n    <!-- <ion-row class="driver-modal">\n      <ion-col col-12 class="text-center driver-modal-header">\n        DRIVER DETAIL\n      </ion-col>\n      <ion-col col-12 class="profile-picture text-center mb-4">\n        <img width="120px" src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="">\n      </ion-col>\n      <ion-col col-6>\n        NAME: <br> <span class="text-color-primary">{{driver[\'name\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        PHONE: <br>  <span class="text-color-primary">{{driver[\'phone_number\']}}</span> <i class="fa fa-phone" aria-hidden="true" style="color: #0752af; font-size: 12px"></i>\n\n      </ion-col>\n      <ion-col col-6>\n        STATUS:<br>  <span  class="text-color-primary">DRIVER</span>\n      </ion-col>\n      <ion-col col-6>\n        LOCATION: <br>  <span class="text-color-primary">KOLKATA</span>\n      </ion-col>\n      <ion-col col-6>\n        JOINED SINCE: <br>  <span  class="text-color-primary">3/05/2021</span>\n      </ion-col>\n      <ion-col col-6>\n        VEHICLE NUMBER:  <br>  <span class="text-color-primary">XUX-423</span>\n      </ion-col>\n      \n      <ion-col col-6>\n        SALARY: <br>  <span  class="text-color-primary">{{driver[\'salary\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        TOTAL KM: <br>  <span  class="text-color-primary">XXXX</span>\n      </ion-col>\n      <ion-col col-6>\n        REFERENCE: <br>  <span class="text-color-primary">{{driver[\'reference_person\']}}</span>\n      </ion-col>\n\n      <ion-col col-6>\n        PREVIOUS VEHICLE NUMBER: <br>  <span class="text-color-primary">XXXX</span>\n      </ion-col>\n\n      <ion-col col-6>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 (click)="showMore()" class="text-right show-more-fa">\n        <i id="fa-arrow-circle-down-driver" class="fa fa-arrow-circle-down"  aria-hidden="true" style="font-size: 20px;"></i>\n\n      </ion-col>\n\n\n  \n        <ion-col col-12 *ngIf="isShown">\n          <ion-row style="padding: 15px;">\n            <ion-col col-7 class="pt-5">\n              DOCUMENT NUMBER: <br>\n              <span class="text-color-primary">PAN CARD - 10242424</span>\n              \n            </ion-col>\n            <ion-col col-5 >\n              <img src="../../assets/imgs/logo.png" alt="" width="100px">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-12 *ngIf="isShown">\n          <ion-row style="padding: 15px;">\n            <ion-col col-7 class="pt-5">\n              DRIVER LICENSE: <br>\n              <span class="text-color-primary">10242424</span>\n              \n            </ion-col>\n            <ion-col col-5 >\n              <img src="../../assets/imgs/logo.png" alt="" width="100px">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-12 *ngIf="isShown">\n          <ion-row style="padding: 15px;">\n            <ion-col col-7 class="pt-5">\n              BANK DETAILS: <br>\n              <span class="text-color-primary">10242424</span>\n              \n            </ion-col>\n            <ion-col col-5 >\n              <img src="../../assets/imgs/logo.png" alt="" width="100px">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n    </ion-row> -->\n\n    <ion-row class="profile-details ">\n      <ion-col col-12 class="profile-picture text-center">\n        <img width="80px" src="../../assets/saarthi-icon/png/driver.png" alt="">\n        <p style="margin-top: 10px">ADD PHOTO</p>\n      </ion-col>\n      <ion-col col-6>\n        NAME: <br> <span class="text-color-primary">{{driver[\'name\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        PHONE: <br>  <span class="text-color-primary">{{driver[\'phone_number\']}} <i style="font-size: 18px; margin-left: 10px;" class="fa fa-phone" aria-hidden="true"></i>\n        </span>\n      </ion-col>\n      <ion-col col-6>\n        STATUS:<br>  <span  class="text-color-primary">{{driver[\'worker_type\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        LOCATION: <br>  <span class="text-color-primary">{{driver[\'city\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        JOINED SINCE: <br>  <span  class="text-color-primary">XXXXXX</span>\n      </ion-col>\n      <ion-col col-6>\n        VEHICLE NUMBER:  <br>  <span class="text-color-primary">XXXXXXX</span>\n      </ion-col>\n\n\n      <ion-col col-12 (click)="showMore()" class="text-right">\n        <i id="fa-arrow-circle-down-driver" class="fa fa-arrow-circle-down"  aria-hidden="true" style="font-size: 20px;color: #0752af;"></i>\n      </ion-col>\n\n      \n        <ion-col col-6 *ngIf="isShown">\n          SALARY: <br>  <span  class="text-color-primary">{{driver[\'salary\']}}</span>\n        </ion-col>\n        <ion-col col-6 *ngIf="isShown"> \n          REFERENCE: <br>  <span class="text-color-primary">{{driver[\'reference_person\']}}</span>\n        </ion-col>\n  \n        <ion-col col-12 *ngIf="isShown">\n          <ion-row style="padding: 15px;">\n            <ion-col col-7 class="pt-5">\n              DOCUMENT NUMBER: <br>\n              <span class="text-color-primary">AADHAR - {{driver[\'aadhar_card_number\']}}</span>\n              \n            </ion-col>\n            <ion-col col-5 >\n              <img src="../../assets/imgs/logo.png" alt="" width="100px">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-12 *ngIf="isShown">\n          <ion-row style="padding: 15px;">\n            <ion-col col-7 class="pt-5">\n              DRIVER LICENSE: <br>\n              <span class="text-color-primary">{{driver[\'license_number\']}}</span>\n              \n            </ion-col>\n            <ion-col col-5 >\n              <img src="../../assets/imgs/logo.png" alt="" width="100px">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-12 *ngIf="isShown">\n          <ion-row style="padding: 15px;">\n            <ion-col col-7 class="pt-5">\n              BANK DETAILS: <br>\n              <span class="text-color-primary">{{driver[\'account_number\']}}</span>\n              \n            </ion-col>\n            <ion-col col-5 >\n              <img src="../../assets/imgs/logo.png" alt="" width="100px">\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n    </ion-row>\n \n\n    <div class="segment row mt-4">\n      <!-- <div class="content-heading"> -->\n        <!-- <div class="text-center text-color-primary " >\n          <h2></h2>\n         \n        </div> -->\n        <ion-col col-12>\n          <div class="text-center text-color-primary " style="padding: 10px;">\n            <h4>DOCUMENTS &nbsp; <i class="fa fa-file-text-o" aria-hidden="true"></i> </h4>\n            <hr>\n          </div>\n\n          <ion-item>\n            <ion-label>REMINDER TIME</ion-label>\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h:mm A" value="1990-02-19T07:43Z"> </ion-datetime>           \n\n          </ion-item>\n \n        </ion-col>\n   \n\n      <!-- </div> -->\n\n      <hr>\n\n      <ion-row class="driver-modal  mt-4" *ngFor="let dc of documents">\n        <ion-col col-12 class="driver-modal-header">\n          <!-- (click)="goToModal()" -->\n          <span class="permit" >{{dc[\'document_name\']}}</span>\n          <!-- (click)="addPermit()" -->\n          <!-- <span class="add-more-modal"  >ADD MORE <i class="fa fa-plus-circle" aria-hidden="true"></i>\n          </span> -->\n        </ion-col>\n        <ion-col col-4 class="picture-upload text-center">\n          <i class="fa fa-camera" aria-hidden="true"></i><br>\n          <small>ADD PHOTO</small>\n        </ion-col>\n        <ion-col col-8 class="text-center">\n          <ion-item>\n            <ion-label floating>EXPIRY DATE</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="dc[\'document_expiry_date\']"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>REMINDER DATE</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="dc[\'document_reminder_date\']"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 class="text-right">\n            <ion-toggle checked="false" ></ion-toggle>\n        </ion-col>\n      </ion-row>\n\n \n\n    </div>\n   \n    \n    <div class="text-center">\n      <button ion-button round class="custom-button" (click)="save()">SAVE</button>\n    </div>\n\n  </div>\n\n\n</ion-content> \n\n\n<!-- <ion-card>\n  <ion-card-header>\n    REMOVE DRIVER\n  </ion-card-header>\n  <ion-card-content>\n    \n  </ion-card-content>\n</ion-card>  -->\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/driver-document/driver-document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__src_providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_1__src_providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_2__src_providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"]])
    ], DriverDocumentPage);
    return DriverDocumentPage;
}());

//# sourceMappingURL=driver-document.js.map

/***/ })

});
//# sourceMappingURL=45.js.map