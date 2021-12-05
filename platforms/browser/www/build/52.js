webpackJsonp([52],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModalPageModule", function() { return DetailsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_modal__ = __webpack_require__(919);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsModalPageModule = /** @class */ (function () {
    function DetailsModalPageModule() {
    }
    DetailsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details_modal__["a" /* DetailsModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__details_modal__["a" /* DetailsModalPage */]),
            ],
        })
    ], DetailsModalPageModule);
    return DetailsModalPageModule;
}());

//# sourceMappingURL=details-modal.module.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsModalPage = /** @class */ (function () {
    function DetailsModalPage(viewController, navCtrl, navParams, modalCtrl, codes) {
        // this.navParams.get("note");
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.codes = codes;
        this.note = '';
        this.date = new Date();
        this.note = this.navParams.get("details");
    }
    DetailsModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsModalPage');
    };
    DetailsModalPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    DetailsModalPage.prototype.storetext = function () {
        localStorage.setItem(this.codes.DETAILS, this.note);
        this.viewController.dismiss();
    };
    DetailsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-details-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/details-modal/details-modal.html"*/'\n\n<ion-content padding style="background-color: rgba(0, 0, 0, 0.8) !important;">\n\n\n\n  <ion-card class="modal-card-details">\n    <ion-card-header class="custom-card-header">\n      DETAILS\n      <span style="float: right;" (click)="exitModal()">\n        <i class="fa fa-times-circle" aria-hidden="true"></i>\n\n      </span>\n    </ion-card-header>\n    <ion-card-content>\n      \n\n      <div class="details-div">\n        <ion-row>\n          <ion-col col-12 class="date">\n            <p style="font-size: 9px !important;">{{date}}</p>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item no-lines>\n              <ion-textarea rows="5" placeholder="Tap here" \n                  [(ngModel)]="note" [(ngModel)]="note" autocomplete="on" autocorrect="on"></ion-textarea>\n             </ion-item>\n          </ion-col>\n        </ion-row>\n        \n       \n      </div>\n      \n\n        <!-- <div class="label-float" >\n          <input type="text"  placeholder=" " />\n          <label>DETAILS</label> -->\n          <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n    \n        <!-- </div> -->\n\n\n      <!-- <div class="label-float" >\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        <label>DATE</label>\n        <i class="fa fa-calendar" aria-hidden="true"></i>\n\n      </div> -->\n      \n        <ion-row class="justify-content-center">\n          <ion-col col-6 class="text-center">\n            <button ion-button round class="custom-button save-button" (click)="storetext()"> SAVE </button>\n          </ion-col>\n          <!-- <ion-col col-6 class="text-center">\n            <button ion-button round  class="custom-button exit-button">\n              EXIT\n            </button>\n          </ion-col> -->\n        </ion-row>\n      \n\n     </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/details-modal/details-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */]])
    ], DetailsModalPage);
    return DetailsModalPage;
}());

//# sourceMappingURL=details-modal.js.map

/***/ })

});
//# sourceMappingURL=52.js.map