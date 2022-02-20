webpackJsonp([63],{

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailsPageModule", function() { return BillDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_details__ = __webpack_require__(938);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BillDetailsPageModule = /** @class */ (function () {
    function BillDetailsPageModule() {
    }
    BillDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bill_details__["a" /* BillDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__bill_details__["a" /* BillDetailsPage */]),
            ],
        })
    ], BillDetailsPageModule);
    return BillDetailsPageModule;
}());

//# sourceMappingURL=bill-details.module.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillDetailsPage; });
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


/**
 * Generated class for the BillDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillDetailsPage = /** @class */ (function () {
    function BillDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BillDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillDetailsPage');
    };
    BillDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bill-details',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/bill-details/bill-details.html"*/'\n<!--\n  Generated template for the DocumentRenewalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the AddDriverExpensesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <!-- <ion-col col-2 class="custom-back-button"> -->\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      <!-- </ion-col> -->\n    \n      <ion-col col-10 class="person-name text-left">\n        <ion-title>        \n          <ion-icon name="ios-copy"></ion-icon>\n          BILL DETAILS\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-2 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <!-- <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH BILL NUMBER, VEHICLE NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div> -->\n\n    <!-- <div class="scrollmenu">\n      <a href="#home">BILL NUMBER</a>\n      <a href="#news">VEHICLE</a>\n      <a href="#contact">PROBLEM/WORK (PART & ID)</a>\n      <a href="#about">DATE OF REPAIR</a>\n      <a href="#support">REPAIR</a>\n      <a href="#blog">QUANTITY</a>\n      <a href="#tools">RATE(PC/FULL)</a>\n      <a href="#tools">TOTAL</a>\n      <a href="#tools">DETAILS</a>\n      <a href="#tools">ID(OPTIONAL)</a>\n      <a href="#tools">KM READING</a> -->\n\n            <!-- <i class="fa fa-angle-down"  aria-hidden="true"></i>\n      <i class="fa fa-angle-right" aria-hidden="true"></i> -->\n<!-- \n      <div style="height: 200px;width: 400px">\n\n      </div>\n    </div> -->\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n\n        <a href="#home">BILL NUMBER</a>\n        <a href="#news">VEHICLE</a>\n        <a href="#contact">PROBLEM/WORK (PART & ID)</a>\n        <a href="#about">DATE OF REPAIR</a>\n        <a href="#support">REPAIR</a>\n        <a href="#blog">QUANTITY</a>\n        <a href="#tools">RATE(PC/FULL)</a>\n        <a href="#tools">TOTAL</a>\n        <a href="#tools">DETAILS</a>\n        <a href="#tools">ID(OPTIONAL)</a>\n        <a href="#tools">KM READING</a>\n\n        <div class="scrollmenu-list" id="5" (click)="selectThis(5)">\n          <p>BILL1</p>\n          <p>V1234</p>\n          <p>PROBLEM ID23</p>\n          <p>12/09/2020</p>\n          <p>Yes</p>\n          <p>2</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE DETAILS</p>\n          <p>ID2</p>\n          <p>25KM</p>\n\n        </div>\n  \n        <div class="scrollmenu-list" id="6" (click)="selectThis(6)">\n          <p>BILL1</p>\n          <p>V1234</p>\n          <p>PROBLEM ID23</p>\n          <p>12/09/2020</p>\n          <p>Yes</p>\n          <p>2</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE DETAILS</p>\n          <p>ID2</p>\n          <p>25KM</p>\n        </div>\n  \n        <div class="scrollmenu-list" id="7" (click)="selectThis(7)">\n          <p>BILL1</p>\n          <p>V1234</p>\n          <p>PROBLEM ID23</p>\n          <p>12/09/2020</p>\n          <p>Yes</p>\n          <p>2</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE DETAILS</p>\n          <p>ID2</p>\n          <p>25KM</p>\n\n        </div>\n  \n        <div class="scrollmenu-list" id="8" (click)="selectThis(8)">\n          <p>BILL1</p>\n          <p>V1234</p>\n          <p>PROBLEM ID23</p>\n          <p>12/09/2020</p>\n          <p>Yes</p>\n          <p>2</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE DETAILS</p>\n          <p>ID2</p>\n          <p>25KM</p>\n\n        </div>\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-angle-down"  aria-hidden="true"></i>\n  \n        <i class="fa fa-angle-right" aria-hidden="true"></i>            \n  \n      </div>\n    </div>\n\n\n\n\n    <ion-item class="label-select" style="border: 2px solid #3951b2; border-radius: 5px;">\n      <ion-label>BILL NUMBER</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n  \n    <!-- <ion-item>\n      <ion-input type="text" placeholder="PERSON NAME"></ion-input>\n    </ion-item> -->\n\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>PERSON AND BUSINESS NAME</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n    <!-- <ion-item>\n      <ion-input type="text" placeholder="BUSINESS NAME"></ion-input>\n    </ion-item> -->\n\n<!-- \n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>BUSINESS NAME</label> -->\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n<!-- \n    </div> -->\n\n    <!-- <ion-item>\n      <ion-input type="text" placeholder="VEHICLE NUMBER"></ion-input>\n    </ion-item> -->\n\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>VEHICLE NUMBER</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n    <!-- <ion-item>\n      <ion-label>DATE OF REPAIR</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item> -->\n\n\n    <div class="label-float" >\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n      <label>DATE OF BILL</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n\n    </div>\n\n    <!-- <div class="label-float" >\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n      <label>TOTAL BILL</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n\n    </div> -->\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>TOTAL BILL &#x20b9;</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n    <div class="mt-4 text-center">\n\n      <button ion-button round class="share-button">ADD NEW</button>\n\n  \n    </div>\n<!-- \n    <ion-item>\n      <ion-input type="text" placeholder="TOTAL BILL"></ion-input>\n    </ion-item> -->\n\n    <!-- <div class="problem-work-div">\n    <ion-item class="problem-work">\n\n      <ion-label>PROBLEM/WORK(PART & ID)</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n\n    </ion-item>\n      <ion-icon name="ios-add-circle" ></ion-icon>\n    </div> -->\n\n    <ion-item class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px"  >\n      <ion-label>PROBLEM/WORK(PART & ID)</ion-label>\n\n      <ion-select [(ngModel)]="document" >\n        <ion-option value="Aadharcard">TYRE - 10</ion-option>\n        <ion-option value="Pancard">TYRE - 50</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n\n    <div class="label-float" >\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n      <label>DATE OF REPAIR</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n\n    </div>\n\n    <!-- <ion-item>\n      <ion-label>DATE OF REPAIR</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item> -->\n\n    <ion-item class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px"  *ngIf="typeOfPerson  == \'driver\'">\n      <ion-label>LOAN ITEM(PART & ID)</ion-label>\n\n      <ion-select [(ngModel)]="document" >\n        <ion-option value="Aadharcard">TYRE - 10</ion-option>\n        <ion-option value="Pancard">TYRE - 50</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n      <div class="mt-4 text-center">\n\n        <button ion-button round class="share-button">ADD NEW WORK</button>\n  \n    \n      </div>\n  \n      <!-- <ion-item class="ion-col col-3">\n        <ion-label>QUANTITY (PC/LTR)</ion-label>\n        <ion-select [(ngModel)]="gender">\n          <ion-option value="f">Female</ion-option>\n          <ion-option value="m">Male</ion-option>\n        </ion-select>\n      </ion-item> -->\n\n \n\n      <ion-row >\n        <ion-col col-9>\n          <!-- <div class="label-float" >\n            <input type="text"  placeholder=" " />\n            <label>DETAILS</label>\n            <i class="fa fa-money" aria-hidden="true"></i>\n      \n          </div> -->\n          <ion-row >\n            <ion-col col-10 class="detail-popup" (click)="openDetailPopup()">\n              DETAILS\n              <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n      \n            </ion-col>    \n          </ion-row>  \n        </ion-col>\n        <ion-col col-2>\n          <ion-row class="detail-picture">\n            <ion-col col-4 (click)="openCameraPopup()">\n              <i class="fa fa-camera" aria-hidden="true"></i>\n              <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n      \n            </ion-col>    \n          </ion-row>      \n        </ion-col>\n      </ion-row>\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>KM READING</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n<!-- \n    <ion-row class="profile-picture">\n      <ion-col col-4>\n        <i class="fa fa-camera" aria-hidden="true"></i>\n        <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon>\n\n      </ion-col>\n      <ion-col>\n        <h6></h6> \n      </ion-col>\n\n    </ion-row> -->\n \n\n    <!-- <ion-item >\n      \n      <ion-input type="text" placeholder="KM READING"></ion-input>\n\n\n    </ion-item> -->\n\n    <div class="mt-4 text-right">\n\n      <button ion-button round class="share-button">SHARE &nbsp;<ion-icon ios="ios-share-alt" md="md-share-alt"></ion-icon>\n      </button>\n\n    \n\n    </div>\n\n    <div class="text-center mt-4">\n      <button ion-button round class="custom-button" > SAVE</button>\n\n    </div>\n\n\n  </div>\n</ion-content> \n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/bill-details/bill-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], BillDetailsPage);
    return BillDetailsPage;
}());

//# sourceMappingURL=bill-details.js.map

/***/ })

});
//# sourceMappingURL=63.js.map