webpackJsonp([64],{

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDescriptionPageModule", function() { return BillDescriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_description__ = __webpack_require__(936);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BillDescriptionPageModule = /** @class */ (function () {
    function BillDescriptionPageModule() {
    }
    BillDescriptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bill_description__["a" /* BillDescriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__bill_description__["a" /* BillDescriptionPage */]),
            ],
        })
    ], BillDescriptionPageModule);
    return BillDescriptionPageModule;
}());

//# sourceMappingURL=bill-description.module.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillDescriptionPage = /** @class */ (function () {
    function BillDescriptionPage(viewController, navCtrl, navParams, modalCtrl) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.vari = '';
        this.isSelectedBill = false;
    }
    BillDescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillDescriptionPage');
    };
    BillDescriptionPage.prototype.change = function ($event) {
        this.vari = $event;
        this.isSelectedBill = true;
    };
    BillDescriptionPage.prototype.openBillDetailsPage = function () {
        this.navCtrl.push('BillDetailsPage');
    };
    BillDescriptionPage.prototype.openDetailPopup = function () {
        var detailsModalPage = this.modalCtrl.create('DetailsModalPage');
        detailsModalPage.present();
    };
    BillDescriptionPage.prototype.openCameraPopup = function () {
        var cameraModalPage = this.modalCtrl.create('CameraModalPage');
        cameraModalPage.present();
    };
    BillDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bill-description',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/bill-description/bill-description.html"*/'<!--\n  Generated template for the BillDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <ion-icon name="ios-copy"></ion-icon>\n          BILL REPAIR DETAILS\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container  white-section">\n\n    <!-- <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH BILL NUMBER, VEHICLE NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div> -->\n    \n\n    <!-- <div class="scrollmenu">\n      <a href="#home">BILL NUMBER</a>\n      <a href="#news">VEHICLE</a>\n      <a href="#contact">PROBLEM/WORK (PART & ID)</a>\n      <a href="#about">DATE OF REPAIR</a>\n      <a href="#support">REPAIR</a>\n      <a href="#blog">QUANTITY</a>\n      <a href="#tools">RATE(PC/FULL)</a>\n      <a href="#tools">TOTAL</a>\n      <a href="#tools">DETAILS</a>\n      <a href="#tools">ID(OPTIONAL)</a>\n      <a href="#tools">KM READING</a> -->\n\n            <!-- <i class="fa fa-angle-down"  aria-hidden="true"></i>\n      <i class="fa fa-angle-right" aria-hidden="true"></i> -->\n<!-- \n      <div style="height: 200px;width: 400px">\n\n      </div>\n    </div> -->\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n\n        <!-- <a href="#home">NUMBER</a>\n        <a href="#news">VEHICLE NUMBER (DRIVER NAME)</a>\n        <a href="#contact">PROBLEM ID</a>\n        <a href="#about">DATE OF COMPLAINT/REMINDER</a>\n        <a href="#support">DETAILS KM READING</a> -->\n\n        <a href="#home" (click)="openBillDetailsPage()">BILL NUMBER</a>\n        <a href="#news">VEHICLE</a>\n        <a href="#contact">PROBLEM/WORK (PART & ID)</a>\n        <a href="#about">DATE OF REPAIR</a>\n        <a href="#support">REPAIR</a>\n        <a href="#blog">QUANTITY</a>\n        <a href="#tools">RATE(PC/FULL)</a>\n        <a href="#tools">TOTAL</a>\n        <a href="#tools">DETAILS</a>\n        <a href="#tools">ID(OPTIONAL)</a>\n        <a href="#tools">KM READING</a>\n\n<!--       \n        <a href="#home">PROBLEM/WORK (PART AND ID)</a>\n        <a href="#news">DATE OF REPAIR/EXCHNAGE</a>\n        <a href="#contact">BILL NUMBER</a>\n        <a href="#about">PERSON NAME</a>\n        <a href="#support">REPAIR/PART/DOC</a>\n        <a href="#blog">PART/LOAD ID(NEW)</a>\n        <a href="#tools">QUANTITY</a>\n        <a href="#tools">RATE</a>\n        <a href="#tools">TOTAL</a>\n        <a href="#tools">DETAILS</a> -->\n\n        <div class="scrollmenu-list" id="5" (click)="selectThis(5)">\n          <p>BILL1</p>\n          <p>V1234</p>\n          <p>PROBLEM ID23</p>\n          <p>12/09/2020</p>\n          <p>1</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE DETAILS</p>\n          <p>25KM</p>\n\n        </div>\n  \n        <div class="scrollmenu-list" id="6" (click)="selectThis(6)">\n          <p>BILL2</p>\n          <p>V1234</p>\n          <p>PROBLEM ID23</p>\n          <p>12/09/2020</p>\n          <p>1</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE DETAILS</p>\n          <p>25KM</p>\n\n        </div>\n  \n        <div class="scrollmenu-list" id="7" (click)="selectThis(7)">\n          <p>BILL3</p>\n          <p>V1234</p>\n          <p>PROBLEM ID23</p>\n          <p>12/09/2020</p>\n          <p>1</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE DETAILS</p>\n          <p>25KM</p>\n\n        </div>\n  \n        <div class="scrollmenu-list" id="8" (click)="selectThis(8)">\n          <p>BILL4</p>\n          <p>V1234</p>\n          <p>PROBLEM ID23</p>\n          <p>12/09/2020</p>\n          <p>1</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE DETAILS</p>\n          <p>25KM</p>\n\n        </div>\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n\n\n\n    <!-- <ion-item>\n      <ion-label>BILL NUMBER</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ion-item *ngIf="!isSelectedBill" class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px">\n      <ion-label>BILL NUMBER</ion-label>\n\n      <ion-select [(ngModel)]="document" (ionChange)="change($event)">\n        <ion-option value="Aadharcard">BILL 1</ion-option>\n        <ion-option value="Pancard">BILL 2</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n\n    <!-- <ion-row class="text-center" *ngIf="vari  == \'Aadharcard\' || vari == \'Pancard\'" style="margin: 0; margin-top: 20px;">\n      <ion-col col-6>\n        \n      </ion-col>\n      <ion-col col-6>\n      </ion-col>\n      <ion-col col-6>\n      </ion-col>\n      <ion-col col-6>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- <ion-row class="selected-details" *ngIf="vari  == \'Aadharcard\' || vari == \'Pancard\'" >\n      <ion-col col-4 class="text-center" style="color: white;">\n        <p style="margin-top: 10px;">MECHANIC</p> \n        <p  style="margin-top: 10px;">13/09/2021</p>\n      </ion-col>\n      <ion-col col-4 class="text-center"  style="color: white;">\n        <p  style="margin-top: 10px;"> V-NUMBER</p>\n        <p  style="margin-top: 10px;" >RS 500</p>\n\n      </ion-col>\n      <ion-col col-4 class="text-center"> \n        <p  style="margin-top: 10px; color: white;">BILL NUMBER</p>\n\n        <button ion-button round>CHANGE</button>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row class="selected-details" *ngIf="vari  == \'Aadharcard\' || vari == \'Pancard\'" >\n      <ion-col col-4 class="text-center">\n        <img  src="../../assets/saarthi-icon/png/007-mechanic.png" alt="">\n      </ion-col>\n      <ion-col col-4 class="text-center">\n        <h6 style="margin-top: 16px;font-size: 14px;color: #fff;font-weight: 1000;">ALEX DUE <br> BILL NUMBER</h6>\n      </ion-col>\n      <ion-col col-4 class="text-center"> \n        <button ion-button round style="margin-top: 15px;" >CHANGE</button>\n      </ion-col>\n    </ion-row>\n  \n\n\n\n\n\n\n    <!-- <ion-item>\n      <ion-input type="text" placeholder="TOTAL BILL"></ion-input>\n    </ion-item> -->\n\n<!-- \n    <div class="text-center mt-4">\n      <button ion-button round class="share-button">ADD NEW </button>\n    </div> -->\n\n\n\n<!-- \n    <div class="problem-work-div">\n    <ion-item class="problem-work">\n\n      <ion-label>PROBLEM/WORK(PART & ID)</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n\n    </ion-item>\n      <ion-icon name="ios-add-circle" ></ion-icon>\n    </div> -->\n\n    <ion-item class="label-select" style="margin-top: 12px;border: 2px solid #3951b2; border-radius: 5px;">\n\n      <ion-label>PROBLEM/WORK(PART & ID)</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n\n    </ion-item>\n\n    <!-- <ion-row style="margin: 0px;"> -->\n      <!-- <ion-col col-8>\n\n   \n\n      </ion-col> -->\n      <!-- <ion-col col-4>\n              \n          <button ion-button round class="add-button" style="width: 80px; margin-top: 15px;">ADD NEW </button>\n      \n        </ion-col> -->\n    <!-- </ion-row> -->\n\n    <!-- <div class="add-icon">\n      <ion-item>\n        <ion-label></ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n      </ion-item>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div> -->\n\n    <div class="label-float" >\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n      <label>DATE OF REPAIR</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n\n    </div>\n\n    <ion-row style="margin: 0;">\n      <ion-col col-6>\n        <ion-item class="label-select dropdown-two" >\n\n          <ion-label>WORK</ion-label>\n          <ion-select [(ngModel)]="gender">\n            <ion-option value="f">Female</ion-option>\n            <ion-option value="m">Male</ion-option>\n          </ion-select>\n    \n        </ion-item>\n        \n    \n      </ion-col>\n      <ion-col col-6>\n        <!-- <ion-col col-12> -->\n\n          <div class="label-float"  >\n            <input type="text"  placeholder=" " />\n            <label >QUANTITY (PC/LTR)</label>\n            <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n      \n          </div>\n\n        <!-- </ion-col> -->\n        <!-- <ion-col col-12> -->\n\n\n        \n\n        <!-- </ion-col>\n        <ion-col col-12> -->\n          <ion-row style="margin: 0">\n            <ion-col col-6 >\n              <span style="color: #CB17E9;font-size: 10px;">PC\n                <button ion-button round class="custom-button" style="margin-top: -5px;\n                transform: scale(0.4);\n                background: #CB17E9;padding: 20px;"></button>\n              \n              </span>\n            </ion-col>\n\n            <ion-col col-6>\n              <span style="color: #819315;font-size: 10px;">FULL\n              \n                <button ion-button round class="custom-button" style="margin-top: -5px;\n                       transform: scale(0.4);\n                       background: #819315;padding: 20px;"></button>\n              </span>\n            </ion-col>\n            <!-- <ion-col col-12> -->\n\n              <!-- <span style="font-size: 10px;">PER</span>\n              <span style="color: #CB17E9;font-size: 10px;">PC\n                <button ion-button round class="custom-button" style="margin-top: -5px;\n                transform: scale(0.4);\n                background: #CB17E9;padding: 20px;"></button>\n              \n              </span> -->\n              <!-- <br> -->\n              <!-- <span style="font-size: 10px;">/</span> -->\n              <!-- <span style="color: #819315;font-size: 10px;">FULL\n              \n                <button ion-button round class="custom-button" style="margin-top: -5px;\n                       transform: scale(0.4);\n                       background: #819315;padding: 20px;"></button>\n              </span> -->\n              <!-- <ion-list radio-group [(ngModel)]="relationship">\n                <ion-item>\n                  <ion-radio value="friends" checked></ion-radio>\n                </ion-item>\n                <ion-item>\n                  <ion-radio value="family"></ion-radio>\n                </ion-item>\n              \n              </ion-list> -->\n              \n              <!-- <span> -->\n                <!-- <br> -->\n\n                <!-- <div style="height: 10px; width: 10px; border-radius: 50%; margin: 5px 0; background: #CB17E9;"></div> -->\n              <!-- </span> -->\n              <!-- <div style="height: 10px; width: 10px; border-radius: 50%; margin: 5px 0; background: #CB17E9;"></div>\n              <div style="height: 10px; width: 10px; border-radius: 50%; margin: 5px 0; background: #819315;"></div> -->\n              \n            <!-- </ion-col> -->\n          </ion-row>\n\n          <div class="label-float" style="margin-top: -20px;"  >\n            <input type="text"  placeholder=" " />\n            <label   >₹ RATE</label>\n            <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n      \n          </div>\n       \n          <!-- <div class="label-float"  >\n            <input type="text"  placeholder=" " />\n\n            <label  >ID</label> -->\n            <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n      \n          <!-- </div> -->\n          \n        <!-- </ion-col> -->\n\n      </ion-col>\n    </ion-row>\n    \n\n    \n  \n\n\n  \n\n\n\n\n    <div class="mt-4 text-center">\n\n      <button ion-button round class="share-button">ADD NEW WORK\n      </button>\n\n    \n\n    </div>\n\n\n      <!-- <ion-item>\n        <ion-label>REPAIR</ion-label>\n        <ion-select [(ngModel)]="gender">\n          <ion-option value="f">Female</ion-option>\n          <ion-option value="m">Male</ion-option>\n        </ion-select>\n      </ion-item>\n   -->\n      <!-- <ion-item class="ion-col col-3">\n        <ion-label>QUANTITY (PC/LTR)</ion-label>\n        <ion-select [(ngModel)]="gender">\n          <ion-option value="f">Female</ion-option>\n          <ion-option value="m">Male</ion-option>\n        </ion-select>\n      </ion-item> -->\n    <!-- <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>RATE(PER PC/FULL)</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div> -->\n\n    <ion-row >\n      <ion-col col-9>\n        <!-- <div class="label-float" >\n          <input type="text"  placeholder=" " />\n          <label>DETAILS</label>\n          <i class="fa fa-money" aria-hidden="true"></i>\n    \n        </div> -->\n        <ion-row >\n          <ion-col col-10 class="detail-popup" (click)="openDetailPopup()">\n            DETAILS\n            <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n    \n          </ion-col>    \n        </ion-row>  \n      </ion-col>\n      <ion-col col-2>\n        <ion-row class="detail-picture">\n          <ion-col col-4 (click)="openCameraPopup()">\n            <i class="fa fa-camera" aria-hidden="true"></i>\n            <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n    \n          </ion-col>    \n        </ion-row>      \n      </ion-col>\n    </ion-row>\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>KM READING(OPTIONAL)</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n    <!-- <div class="mt-4 text-right">\n\n      <button ion-button round class="share-button">SHARE &nbsp;<ion-icon ios="ios-share-alt" md="md-share-alt"></ion-icon>\n      </button>\n\n    \n\n    </div> -->\n\n\n\n  \n \n   \n\n  \n\n\n  </div>\n\n  <div class="text-center mt-4">\n    <button ion-button round class="custom-button"> SAVE</button>\n\n  </div>\n</ion-content> \n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/bill-description/bill-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], BillDescriptionPage);
    return BillDescriptionPage;
}());

//# sourceMappingURL=bill-description.js.map

/***/ })

});
//# sourceMappingURL=64.js.map