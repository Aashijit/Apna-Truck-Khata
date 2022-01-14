webpackJsonp([70],{

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMechanicPageModule", function() { return AddMechanicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_mechanic__ = __webpack_require__(929);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddMechanicPageModule = /** @class */ (function () {
    function AddMechanicPageModule() {
    }
    AddMechanicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_mechanic__["a" /* AddMechanicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_mechanic__["a" /* AddMechanicPage */]),
            ],
        })
    ], AddMechanicPageModule);
    return AddMechanicPageModule;
}());

//# sourceMappingURL=add-mechanic.module.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMechanicPage; });
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
 * Generated class for the AddMechanicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMechanicPage = /** @class */ (function () {
    function AddMechanicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddMechanicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddMechanicPage');
    };
    AddMechanicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-mechanic',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-mechanic/add-mechanic.html"*/'<!--\n  Generated template for the AddMechanicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the AddDriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n          ADD MECHANIC\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container edit-profile">\n\n    <ion-list>\n\n   \n      <ion-item>\n        <ion-label>TYPE OF PERSON</ion-label>\n\n        <ion-select [(ngModel)]="gender" >\n          <ion-option value="f">Female</ion-option>\n          <ion-option value="m">Male</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="text" placeholder="NAME"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        \n        <ion-input type="text" placeholder="PHONE NUMBER"></ion-input>\n\n\n      </ion-item>\n      \n    \n      <ion-item>\n        <ion-input type="text" placeholder="BUSINESS NAME"></ion-input>\n\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="text" placeholder="CITY"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="PAN NUMBER"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-input type="text" placeholder="GST NUMBER(OPTIONAL)"></ion-input>\n      </ion-item>\n\n   \n      <ion-item>\n        <ion-input type="text" placeholder="ADDRESS LINE 1"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="ADDRESS LINE 2"></ion-input>\n      </ion-item>\n\n      <ion-row class="state">\n        <ion-col col-6>\n          <ion-item>\n            <ion-label>STATE</ion-label>\n            <ion-select [(ngModel)]="gender">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-input type="text" placeholder="PNCODE"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-item>\n        <ion-input type="text" placeholder="ACCOUNT NUMBER"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="IFSC"></ion-input>\n      </ion-item>\n\n      \n\n\n      <ion-row class="profile-picture">\n        <ion-col col-4>\n          <i class="fa fa-camera" aria-hidden="true"></i>\n          <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon>\n\n        </ion-col>\n        <ion-col>\n          <h6></h6> \n        </ion-col>\n\n      </ion-row>\n\n      <div class="text-center mt-4">\n        <button ion-button round class="custom-button">SAVE DETAILS</button>\n      </div>\n      \n    </ion-list>\n\n  </div>\n</ion-content> \n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-mechanic/add-mechanic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AddMechanicPage);
    return AddMechanicPage;
}());

//# sourceMappingURL=add-mechanic.js.map

/***/ })

});
//# sourceMappingURL=70.js.map