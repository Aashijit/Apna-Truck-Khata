webpackJsonp([15],{

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopBillDescriptionPageModule", function() { return ShopBillDescriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_bill_description__ = __webpack_require__(978);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopBillDescriptionPageModule = /** @class */ (function () {
    function ShopBillDescriptionPageModule() {
    }
    ShopBillDescriptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop_bill_description__["a" /* ShopBillDescriptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_bill_description__["a" /* ShopBillDescriptionPage */]),
            ],
        })
    ], ShopBillDescriptionPageModule);
    return ShopBillDescriptionPageModule;
}());

//# sourceMappingURL=shop-bill-description.module.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopBillDescriptionPage; });
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


var ShopBillDescriptionPage = /** @class */ (function () {
    function ShopBillDescriptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShopBillDescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopBillDescriptionPage');
    };
    ShopBillDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shop-bill-description',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/shop-bill-description/shop-bill-description.html"*/'<!--\n  Generated template for the ShopBillDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the BillDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <ion-icon name="ios-copy"></ion-icon>\n          BILL DESCRIPTION\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <!-- <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH BILL NUMBER, VEHICLE NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div> -->\n    \n\n    <!-- <div class="scrollmenu">\n      <a href="#home">BILL NUMBER</a>\n      <a href="#news">VEHICLE</a>\n      <a href="#contact">PROBLEM/WORK (PART & ID)</a>\n      <a href="#about">DATE OF REPAIR</a>\n      <a href="#support">REPAIR</a>\n      <a href="#blog">QUANTITY</a>\n      <a href="#tools">RATE(PC/FULL)</a>\n      <a href="#tools">TOTAL</a>\n      <a href="#tools">DETAILS</a>\n      <a href="#tools">ID(OPTIONAL)</a>\n      <a href="#tools">KM READING</a> -->\n\n            <!-- <i class="fa fa-angle-down"  aria-hidden="true"></i>\n      <i class="fa fa-angle-right" aria-hidden="true"></i> -->\n<!-- \n      <div style="height: 200px;width: 400px">\n\n      </div>\n    </div> -->\n\n    <ion-row>\n      <ion-col col-6 class="text-center">\n        <button ion-button round class="edit-button"> EDIT</button>\n\n      </ion-col>\n      <ion-col col-6 class="text-center">\n        <button ion-button round class="delete-button"> DELETE</button>\n\n      </ion-col>\n    </ion-row>\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n\n        <!-- <a href="#home">NUMBER</a>\n        <a href="#news">VEHICLE NUMBER (DRIVER NAME)</a>\n        <a href="#contact">PROBLEM ID</a>\n        <a href="#about">DATE OF COMPLAINT/REMINDER</a>\n        <a href="#support">DETAILS KM READING</a> -->\n\n        <a href="#home" (click)="openBillDetailsPage()">BILL NUMBER</a>\n        <a href="#news">VEHICLE</a>\n        <a href="#about">DATE OF REPAIR</a>\n        <a href="#about">TYPE OF REPAIR</a>\n        <a href="#support">PARTS</a>\n        <a href="#blog">QUANTITY(PC/LTR)</a>\n        <a href="#tools">RATE</a>\n        <a href="#tools">TOTAL</a>\n        <a href="#tools">ADDITIONAL INFO</a>\n\n<!--       \n        <a href="#home">PROBLEM/WORK (PART AND ID)</a>\n        <a href="#news">DATE OF REPAIR/EXCHNAGE</a>\n        <a href="#contact">BILL NUMBER</a>\n        <a href="#about">PERSON NAME</a>\n        <a href="#support">REPAIR/PART/DOC</a>\n        <a href="#blog">PART/LOAD ID(NEW)</a>\n        <a href="#tools">QUANTITY</a>\n        <a href="#tools">RATE</a>\n        <a href="#tools">TOTAL</a>\n        <a href="#tools">DETAILS</a> -->\n\n        <div class="scrollmenu-list" id="5" (click)="selectThis(5)">\n          <p>BILL1</p>\n          <p>V1234</p>\n          <p>12/09/2020</p>\n          <p>REPAIR</p>\n          <p>1</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE ADDITIONAL INFO</p>\n\n        </div>\n  \n        <div class="scrollmenu-list" id="6" (click)="selectThis(6)">\n          <p>BILL1</p>\n          <p>V1234</p>\n          <p>12/09/2020</p>\n          <p>REPAIR</p>\n          <p>1</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE ADDITIONAL INFO</p>\n\n        </div>\n  \n        <div class="scrollmenu-list" id="7" (click)="selectThis(7)">\n          <p>BILL1</p>\n          <p>V1234</p>\n          <p>12/09/2020</p>\n          <p>REPAIR</p>\n          <p>1</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE ADDITIONAL INFO</p>\n\n        </div>\n  \n        <div class="scrollmenu-list" id="8" (click)="selectThis(8)">\n          <p>BILL1</p>\n          <p>V1234</p>\n          <p>12/09/2020</p>\n          <p>REPAIR</p>\n          <p>1</p>\n          <p>RS 25</p>\n          <p>RS 25</p>\n          <p>THIS IS THE ADDITIONAL INFO</p>\n\n        </div>\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-angle-down"  aria-hidden="true"></i>\n  \n        <i class="fa fa-angle-right" aria-hidden="true"></i>            \n  \n      </div>\n    </div>\n\n\n\n\n    <!-- <ion-item>\n      <ion-label>BILL NUMBER</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ion-item class="label-select" style="border: 2px solid #3951b2; border-radius: 5px;">\n      <ion-label>CHOOSE BILL NUMBER</ion-label>\n\n      <ion-select [(ngModel)]="document" (ionChange)="choosePerson($event)">\n        <ion-option value="mechanic">MECHANIC</ion-option>\n        <ion-option value="shop">SHOP</ion-option>\n        <ion-option value="driver">DRIVER</ion-option>\n\n        <ion-option value="documents">DOCUMENTS</ion-option>\n\n        <ion-option value="insurance">INSURANCE</ion-option>\n      </ion-select>\n\n     \n    </ion-item>\n\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>SHOP/PERSON NAME</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>VEHICLE NUMBER</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div>\n\n\n\n    <!-- <ion-item>\n      <ion-input type="text" placeholder="BUSINESS NAME"></ion-input>\n    </ion-item> -->\n\n    <!-- <ion-item>\n      <ion-input type="text" placeholder="VEHICLE NUMBER"></ion-input>\n    </ion-item> -->\n\n\n    <div class="label-float" >\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n      <label>DATE OF PURCHASE</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n\n    </div>\n<!-- \n    <div class="add-icon">\n      <ion-item>\n        <ion-label>DATE OF BILL</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n      </ion-item>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div> -->\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>TOTAL BILL</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div>\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>TYPE OF WORK</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div>\n\n\n    <div class="label-float" >\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n      <label>DATE OF WORK</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n\n    </div>\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>PARTS</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div>\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>QUANTITY(PC/LTR)</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div>\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>RATE (PER PC/FULL)</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div>\n\n    <div class="text-center">\n              \n      <button ion-button round class="add-button" style="width: 80px; margin-top: 15px;">ADD NEW ITEMS</button>\n  \n    </div>\n\n\n    <!-- <ion-item>\n      <ion-input type="text" placeholder="TOTAL BILL"></ion-input>\n    </ion-item> -->\n\n<!-- \n    <div class="text-center mt-4">\n      <button ion-button round class="share-button">ADD NEW </button>\n    </div> -->\n\n\n\n<!-- \n    <div class="problem-work-div">\n    <ion-item class="problem-work">\n\n      <ion-label>PROBLEM/WORK(PART & ID)</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n\n    </ion-item>\n      <ion-icon name="ios-add-circle" ></ion-icon>\n    </div> -->\n\n    <!-- <div class="add-icon">\n      <ion-item>\n        <ion-label></ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n      </ion-item>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div> -->\n\n\n    \n\n\n    \n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>ADDITIONAL INFO TEXT</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n\n\n      <!-- <ion-item>\n        <ion-label>REPAIR</ion-label>\n        <ion-select [(ngModel)]="gender">\n          <ion-option value="f">Female</ion-option>\n          <ion-option value="m">Male</ion-option>\n        </ion-select>\n      </ion-item>\n   -->\n      <!-- <ion-item class="ion-col col-3">\n        <ion-label>QUANTITY (PC/LTR)</ion-label>\n        <ion-select [(ngModel)]="gender">\n          <ion-option value="f">Female</ion-option>\n          <ion-option value="m">Male</ion-option>\n        </ion-select>\n      </ion-item> -->\n    <!-- <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>RATE(PER PC/FULL)</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div> -->\n\n\n\n    <!-- <ion-row class="profile-picture">\n      <ion-col col-4>\n        <i class="fa fa-camera" aria-hidden="true"></i>\n        <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon>\n\n      </ion-col>\n      <ion-col>\n        <h6></h6> \n      </ion-col>\n\n    </ion-row> -->\n\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>ADDED IMAGE</label>\n      <i class="fa fa-camera" aria-hidden="true"></i>\n\n    </div>\n\n    <div class="label-float"  >\n      <input type="text"  placeholder=" " />\n      <label>KM READING(OPTIONAL)</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n<!-- \n    <div class="mt-4 text-right">\n\n      <button ion-button round class="share-button">SHARE &nbsp;<ion-icon ios="ios-share-alt" md="md-share-alt"></ion-icon>\n      </button>\n\n    \n\n    </div> -->\n\n\n\n  \n \n   \n\n    <div class="text-center mt-4">\n      <button ion-button round class="custom-button"> SAVE</button>\n\n    </div>\n\n\n  </div>\n</ion-content> \n\n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/shop-bill-description/shop-bill-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ShopBillDescriptionPage);
    return ShopBillDescriptionPage;
}());

//# sourceMappingURL=shop-bill-description.js.map

/***/ })

});
//# sourceMappingURL=15.js.map