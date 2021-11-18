webpackJsonp([1],{

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTransactionPageModule", function() { return ViewTransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_transaction__ = __webpack_require__(991);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewTransactionPageModule = /** @class */ (function () {
    function ViewTransactionPageModule() {
    }
    ViewTransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_transaction__["a" /* ViewTransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__view_transaction__["a" /* ViewTransactionPage */]),
            ],
        })
    ], ViewTransactionPageModule);
    return ViewTransactionPageModule;
}());

//# sourceMappingURL=view-transaction.module.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTransactionPage; });
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


var ViewTransactionPage = /** @class */ (function () {
    function ViewTransactionPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.header = '';
        this.comp = '';
        this.comp = this.navParams.get("complaint");
    }
    ViewTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewTransactionPage');
    };
    ViewTransactionPage.prototype.close = function () {
        this.view.dismiss();
    };
    ViewTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-transaction',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/view-transaction/view-transaction.html"*/'<ion-content padding style="background: rgba(0,0,0,0.6);">\n\n  <p style="text-align: right !important;">\n    <button ion-button clear (click)="close()" style="font-size: 2rem; color: red;">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </p>\n\n\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Complaint Id\n          </ion-col>\n          <ion-col col-6>\n            {{comp[\'complaints_id\']}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Date of Complaint\n          </ion-col>\n          <ion-col col-6>\n            {{comp[\'date_of_complaint\']}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Date of Reminder\n          </ion-col>\n          <ion-col col-6>\n            {{comp[\'date_of_reminder\']}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Details\n          </ion-col>\n          <ion-col col-6>\n            {{comp[\'details\']}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            KM Reading\n          </ion-col>\n          <ion-col col-6>\n            {{comp[\'km_reading\']}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Status\n          </ion-col>\n          <ion-col col-6>\n            <ion-badge *ngIf="comp[\'status\'] == \'\'">Unsolved</ion-badge>\n            <ion-badge *ngIf="comp[\'status\'] != \'\'">{{comp[\'status\']}}</ion-badge>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6 class="hd">\n            Problems\n          </ion-col>\n          <ion-col col-6>\n            <!-- <ion-badge>{{comp[\'status\']}}</ion-badge> -->\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngFor="let prb of comp[\'problems\']">\n          <ion-col col-6 class="hd">\n            Problem Name\n          </ion-col>\n          <ion-col col-6>\n            <ion-badge color="secondary">{{prb[\'details\'][\'problem_name\']}}</ion-badge>\n          </ion-col>\n          <ion-col col-6 class="hd">\n            Part Name\n          </ion-col>\n          <ion-col col-6>\n            <ion-badge color="dark">{{prb[\'details\'][\'vehicle_part_name\']}}</ion-badge>\n          </ion-col>\n          <ion-col col-6 class="hd">\n            Part Id\n          </ion-col>\n          <ion-col col-6>\n            <ion-badge color="light">{{prb[\'details\'][\'vehicle_part_id\']}}</ion-badge>\n          </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/view-transaction/view-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ViewTransactionPage);
    return ViewTransactionPage;
}());

//# sourceMappingURL=view-transaction.js.map

/***/ })

});
//# sourceMappingURL=1.js.map