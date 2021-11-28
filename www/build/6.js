webpackJsonp([6],{

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDocumentPageModule", function() { return VehicleDocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_document__ = __webpack_require__(987);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VehicleDocumentPageModule = /** @class */ (function () {
    function VehicleDocumentPageModule() {
    }
    VehicleDocumentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_document__["a" /* VehicleDocumentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_document__["a" /* VehicleDocumentPage */]),
            ],
        })
    ], VehicleDocumentPageModule);
    return VehicleDocumentPageModule;
}());

//# sourceMappingURL=vehicle-document.module.js.map

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleDocumentPage; });
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





var VehicleDocumentPage = /** @class */ (function () {
    function VehicleDocumentPage(message, codes, rest, viewController, navCtrl, navParams, modalCtrl) {
        var _this = this;
        this.message = message;
        this.codes = codes;
        this.rest = rest;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.isShown = false;
        this.vehicle = '';
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
        this.vehicle = this.navParams.get("vehicle");
        var req = {
            "type": "vehicle",
            "vehicle_id": this.vehicle['vehicle_id']
        };
        this.rest.post(this.codes.GET_DOCUMENT_INFO, req).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                if (resp['data'].length > 0)
                    _this.documents = resp['data'];
            }
        });
    }
    VehicleDocumentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehicleDocumentPage');
    };
    VehicleDocumentPage.prototype.showMore = function () {
        if (this.isShown) {
            document.getElementById("fa-arrow-circle-down-vehicle").classList.remove("fa-arrow-circle-up");
            document.getElementById("fa-arrow-circle-down-vehicle").classList.add("fa-arrow-circle-down");
        }
        else {
            document.getElementById("fa-arrow-circle-down-vehicle").classList.remove("fa-arrow-circle-down");
            document.getElementById("fa-arrow-circle-down-vehicle").classList.add("fa-arrow-circle-up");
        }
        this.isShown = !this.isShown;
    };
    VehicleDocumentPage.prototype.selectThis = function (i) {
        document.getElementById(i).classList.toggle("selected");
    };
    VehicleDocumentPage.prototype.goToModal = function () {
        localStorage.setItem("vehicle_details", JSON.stringify(this.vehicle));
        var profileModal = this.modalCtrl.create('DecisionModalPage');
        profileModal.present();
    };
    VehicleDocumentPage.prototype.addPermit = function () {
        var addPermit = this.modalCtrl.create('AddPermitPage');
        addPermit.present();
    };
    VehicleDocumentPage.prototype.save = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var _loop_1 = function (i) {
            this_1.documents[i]['worker_type'] = 'vehicle';
            this_1.documents[i]['srth_id'] = json[0]['srth_id'];
            this_1.documents[i]['vehicle_id'] = this_1.vehicle['vehicle_id'];
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
    VehicleDocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-vehicle-document',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-document/vehicle-document.html"*/'<!--\n  Generated template for the VehicleDocumentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the VehicleDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- VEHICLE DETAILS-->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-7 class="person-name text-center">\n        <ion-title>        \n          <i class="fa fa-car" aria-hidden="true"></i>\n          VEHICLE DOCUMENTS\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header> \n\n\n<ion-content padding>\n  <div class="container">\n\n\n    <ion-row class="vehicle-details-card">\n      <ion-col col-12>\n        <h4 class=" text-center">VEHICLE DETAILS</h4>\n        <hr>\n      </ion-col>\n      <ion-col col-6>\n        <p>VEHICLE NUMBER: </p>\n        <span class="text-color-primary">{{vehicle[\'vehicle_number\']}}</span>\n      </ion-col>\n      <ion-col col-1>\n        <div style="margin-top: 5px; width: 10px; height: 10px; background-color: #4EC576; border-radius: 50%;"></div>\n  \n      </ion-col>\n      <ion-col col-3>\n        DRIVER\n      </ion-col>\n      <ion-col col-6>\n       <p> TYPE: </p>\n        <span class="text-color-primary">{{vehicle[\'vehicle_type\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p>YEAR OF PURCHASE: </p>\n        <span class="text-color-primary">{{vehicle[\'year_purchase\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p>DRIVER: </p>\n        <span class="text-color-primary" *ngIf="vehicle[\'driver_details\'] != null && vehicle[\'driver_details\'] != undefined">\n          {{vehicle[\'driver_details\'][\'name\']}}\n        </span> \n      </ion-col>\n      <ion-col col-6>\n          <button ion-button round class="custom-button" (click)="goToModal()">ALLOT/<br>CHANGE/<br>REMOVE DRIVER</button>\n      </ion-col>\n      <ion-col col-6>\n        <p>VEHICLE WEIGHT: </p>\n        <span class="text-color-primary">{{vehicle[\'vehicle_weight\']+" "+vehicle[\'vehicle_weight_type\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p>VEHICLE MODEL: </p>\n        <span class="text-color-primary">{{vehicle[\'vehicle_model\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p>KM READING: </p>\n        <span class="text-color-primary">{{vehicle[\'vehicle_km_reading_current\']}}</span>\n      </ion-col>\n\n\n      <!-- <ion-col col-6 (click)="showMore()" class="text-right show-more-fa">\n        <i id="fa-arrow-circle-down" class="fa fa-arrow-circle-down"  aria-hidden="true" style="font-size: 20px;"></i>\n\n      </ion-col> -->\n\n   \n\n      <ion-col col-12 *ngIf="isShown">\n        <!-- <div class="scrollmenu">\n          <a href="#home">DATE</a>\n          <a href="#news">WORK/PARTS</a>\n          <a href="#contact">DETAILS</a>\n          <a href="#about">KMREADING</a>\n          <a href="#support">ID</a>\n    \n    \n          <div style="height: 200px;width: 400px">\n    \n          </div>\n        </div> -->\n\n        <div class="scroll-grid" >\n          <div class="scrollmenu">\n          \n            <a href="#home">DATE</a>\n            <a href="#news">WORK/PARTS</a>\n            <a href="#contact">DETAILS</a>\n            <a href="#about">KM READING</a>\n            <a href="#support">ID</a>\n      \n            <div class="scrollmenu-list" id="1" (click)="selectThis(1)">\n              <p>13/04/2021</p>\n              <p>XYZ</p>\n              <p>XYZ DETAILS</p>\n              <p>12KM</p>\n              <p>ID1234</p>\n            </div>\n      \n            <div class="scrollmenu-list" id="2" (click)="selectThis(2)">\n              <p>13/04/2021</p>\n              <p>XYZ</p>\n              <p>XYZ DETAILS</p>\n              <p>12KM</p>\n              <p>ID1234</p>\n            </div>\n      \n            <div class="scrollmenu-list" id="3" (click)="selectThis(3)">\n              <p>13/04/2021</p>\n              <p>XYZ</p>\n              <p>XYZ DETAILS</p>\n              <p>12KM</p>\n              <p>ID1234</p>\n            </div>\n      \n            <div class="scrollmenu-list" id="4" (click)="selectThis(4)">\n              <p>13/04/2021</p>\n              <p>XYZ</p>\n              <p>XYZ DETAILS</p>\n              <p>12KM</p>\n              <p>ID1234</p>\n            </div>\n          </div>\n          <div class="show-arrows">\n            <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n      \n            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n      \n          </div>\n        </div>\n      </ion-col>\n\n\n      <!-- <ion-col col-12 class="text-center mt-4">\n        <button ion-button round class="all-button"> ALLOT/CHANGE/REMOVE DRIVER</button>\n\n      </ion-col> -->\n\n      <ion-col col-12>\n        <ion-row class="document-button">\n          <ion-col col-6 >\n            <div>\n              VEHICLE WORK REPORT\n              <i class="fa fa-download" aria-hidden="true"></i>\n    \n            </div>\n            <!-- <button ion-button round outline small></button> -->\n          </ion-col>\n          <ion-col col-6 >\n            <div>\n              VEHICLE BILL REPORT\n              <i class="fa fa-download" aria-hidden="true"></i>\n    \n            </div>\n            <!-- <button ion-button round outline small></button> -->\n          </ion-col>\n        </ion-row>\n      </ion-col>\n       \n    </ion-row>\n\n    \n     \n      <!-- <ion-row class="vehicle-details-card">\n        <ion-col col-12>\n          <h4 class="text-color-primary text-center">VEHICLE DETAILS</h4>\n          <hr>\n        </ion-col>\n        <ion-col col-6>\n          <p>VEHICLE NUMBER: </p>\n          <span class="text-color-primary">XXXXXXXXX</span>\n        </ion-col>\n        <ion-col col-6>\n         <p> TYPE: </p>\n          <span class="text-color-primary">XXXXXXXXX</span>\n        </ion-col>\n        <ion-col col-6>\n          <p>YEAR OF PURCHASE: </p>\n          <span class="text-color-primary">XXXXXXXXX</span>\n        </ion-col>\n        <ion-col col-6>\n          <p>DRIVER: </p>\n          <span class="text-color-primary">XXXXXXXXX</span>\n        </ion-col>\n        <ion-col col-6>\n          <p>VEHICLE WEIGHT: </p>\n          <span class="text-color-primary">XXXXXXXXX</span>\n        </ion-col>\n        <ion-col col-6>\n          <p>VEHICLE MODEL: </p>\n          <span class="text-color-primary">XXXXXXXXX</span>\n        </ion-col>\n        <ion-col col-6>\n          <p>KM READING: </p>\n          <span class="text-color-primary">XXXXXXXXX</span>\n        </ion-col>\n\n        <ion-col col-12 class="text-center">\n          <button ion-button round class="custom-button">ALLOT/CHANGE/REMOVE DRIVER</button>\n        </ion-col>\n\n         \n      </ion-row> -->\n\n      <div class="segment row mt-4">\n        <!-- <div class="content-heading"> -->\n          <!-- <div class="text-center text-color-primary " >\n            <h2></h2>\n           \n          </div> -->\n          <ion-col col-12>\n            <div class="text-center text-color-primary " style="padding: 10px;">\n              <h4>DOCUMENTS &nbsp; <i class="fa fa-file-text-o" aria-hidden="true"></i> </h4>\n              <hr>\n            </div>\n\n            <ion-item>\n              <ion-label>REMINDER TIME</ion-label>\n              <ion-datetime displayFormat="h:mm A" pickerFormat="h:mm A" value="1990-02-19T07:43Z"> </ion-datetime>           \n  \n            </ion-item>\n  \n          </ion-col>\n     \n  \n        <!-- </div> -->\n  \n        <hr>\n\n        <ion-row class="driver-modal  mt-4" *ngFor="let dc of documents">\n          <ion-col col-12 class="driver-modal-header">\n            <!-- (click)="goToModal()" -->\n            <span class="permit" >{{dc[\'document_name\']}}</span>\n            <!-- (click)="addPermit()" -->\n            <!-- <span class="add-more-modal"  >ADD MORE <i class="fa fa-plus-circle" aria-hidden="true"></i>\n            </span> -->\n          </ion-col>\n          <ion-col col-4 class="picture-upload text-center">\n            <i class="fa fa-camera" aria-hidden="true"></i><br>\n            <small>ADD PHOTO</small>\n          </ion-col>\n          <ion-col col-8 class="text-center">\n            <ion-item>\n              <ion-label floating>EXPIRY DATE</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="dc[\'document_expiry_date\']"></ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>REMINDER DATE</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="dc[\'document_reminder_date\']"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 class="text-right">\n              <ion-toggle checked="false" ></ion-toggle>\n          </ion-col>\n        </ion-row>\n  \n   \n  \n\n  \n      </div>\n     \n\n      \n    <ion-row>\n      \n        <ion-col col-12 class="text-center">\n          <button ion-button round class="custom-button" (click)="save()">SAVE</button>\n        </ion-col>\n    \n  \n      </ion-row>\n\n\n    \n\n  </div>\n</ion-content>  \n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-document/vehicle-document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__src_providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_1__src_providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_2__src_providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"]])
    ], VehicleDocumentPage);
    return VehicleDocumentPage;
}());

//# sourceMappingURL=vehicle-document.js.map

/***/ })

});
//# sourceMappingURL=6.js.map