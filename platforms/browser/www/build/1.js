webpackJsonp([1],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPaymentPage; });
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


var ViewPaymentPage = /** @class */ (function () {
    function ViewPaymentPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.payment = '';
        this.payment = this.navParams.get("payment");
        console.error(JSON.stringify(this.payment));
    }
    ViewPaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewPaymentPage');
    };
    ViewPaymentPage.prototype.close = function () {
        this.view.dismiss();
    };
    ViewPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-payment',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/view-payment/view-payment.html"*/'<ion-content padding style="background: rgba(0,0,0,0.6);">\n\n  <p style="text-align: right !important;">\n    <button ion-button clear (click)="close()" style="font-size: 2rem; color: red;">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </p>\n\n\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Payment Id\n          </ion-col>\n          <ion-col col-6>\n            {{payment[\'payment_number\']}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Date of payment\n          </ion-col>\n          <ion-col col-6>\n            {{payment[\'date_of_payment\']}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Mode of payment\n          </ion-col>\n          <ion-col col-6>\n            {{payment[\'mode_of_payment\']}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Payment amount\n          </ion-col>\n          <ion-col col-6>\n            {{payment[\'payment_amount\']}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Details\n          </ion-col>\n          <ion-col col-6>\n            {{payment[\'details\']}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Bills\n          </ion-col>\n          <ion-col col-6>\n            <!-- <ion-badge>{{payment[\'status\']}}</ion-badge> -->\n          </ion-col>\n        </ion-row>\n\n        <p *ngIf="payment[\'bills\'] != undefined">\n        <ion-row *ngFor="let prb of payment[\'bills\']">\n          <ion-col col-6 class="hd">\n            Bill Id\n          </ion-col>\n          <ion-col col-6>\n            <ion-badge color="secondary">{{prb[\'bill_number\']}}</ion-badge>\n          </ion-col>\n          <ion-col col-6 class="hd">\n            Person/Shop Name\n          </ion-col>\n          <ion-col col-6>\n            <ion-badge color="dark">{{prb[\'person_shop_name\']}}</ion-badge>\n          </ion-col>\n          <ion-col col-6 class="hd">\n            Bill Date\n          </ion-col>\n          <ion-col col-6>\n            <ion-badge color="primary">{{prb[\'bill_date\']}}</ion-badge>\n          </ion-col>\n          <ion-col col-6 class="hd">\n            Bill Amount\n          </ion-col>\n          <ion-col col-6>\n            <ion-badge color="light">{{prb[\'total_bill\']}}</ion-badge>\n          </ion-col>\n          <ion-col col-6 class="hd">\n            Bill Details\n          </ion-col>\n          <ion-col col-6>\n            {{prb[\'bill_details\']}}\n          </ion-col>\n          <ion-col col-6 class="hd">\n            Vehicle Number\n          </ion-col>\n          <ion-col col-6>\n            {{prb[\'vehicle_number\']}}\n          </ion-col>\n        </ion-row>\n      </p>\n        \n      </ion-grid>\n\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/view-payment/view-payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ViewPaymentPage);
    return ViewPaymentPage;
}());

//# sourceMappingURL=view-payment.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPaymentPageModule", function() { return ViewPaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_payment__ = __webpack_require__(1003);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewPaymentPageModule = /** @class */ (function () {
    function ViewPaymentPageModule() {
    }
    ViewPaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_payment__["a" /* ViewPaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__view_payment__["a" /* ViewPaymentPage */]),
            ],
        })
    ], ViewPaymentPageModule);
    return ViewPaymentPageModule;
}());

//# sourceMappingURL=view-payment.module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map