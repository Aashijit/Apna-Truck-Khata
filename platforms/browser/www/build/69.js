webpackJsonp([69],{

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoreModalPageModule", function() { return AddMoreModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_more_modal__ = __webpack_require__(930);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddMoreModalPageModule = /** @class */ (function () {
    function AddMoreModalPageModule() {
    }
    AddMoreModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_more_modal__["a" /* AddMoreModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_more_modal__["a" /* AddMoreModalPage */]),
            ],
        })
    ], AddMoreModalPageModule);
    return AddMoreModalPageModule;
}());

//# sourceMappingURL=add-more-modal.module.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMoreModalPage; });
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
 * Generated class for the AddMoreModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMoreModalPage = /** @class */ (function () {
    function AddMoreModalPage(viewController, navCtrl, navParams) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddMoreModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddMoreModalPage');
    };
    AddMoreModalPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    AddMoreModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-more-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-more-modal/add-more-modal.html"*/'<!--\n  Generated template for the AddMoreModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>ADD MORE</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col col-12>\n      <span class="add-more-modal" (click)="goToModal()" >ADD MORE <i class="fa fa-plus-circle" aria-hidden="true"></i>\n      </span>    \n    </ion-col>\n    <ion-col col-6 class="mt-4">\n      EXPIRY DATE\n    </ion-col>\n    <ion-col col-6 class="mt-4">\n      12/11/1994\n    </ion-col>\n    <ion-col col-6>\n      <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UjfKFKsL1xOguMVhMx8fwz3KS1x90ErKtA&usqp=CAU" alt="">\n    </ion-col>\n    <ion-col col-6>\n      <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UjfKFKsL1xOguMVhMx8fwz3KS1x90ErKtA&usqp=CAU" alt="">\n    </ion-col>\n    <ion-col col-6 class="mt-4">\n      EXPIRY DATE\n    </ion-col>\n    <ion-col col-6 class="mt-4">\n      12/11/1994\n    </ion-col>\n    <ion-col col-6>\n      <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UjfKFKsL1xOguMVhMx8fwz3KS1x90ErKtA&usqp=CAU" alt="">\n    </ion-col>\n    <ion-col col-6>\n      <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UjfKFKsL1xOguMVhMx8fwz3KS1x90ErKtA&usqp=CAU" alt="">\n    </ion-col>\n  </ion-row>\n  <ion-col col-12 >\n    <div class="text-center">\n      <button ion-button round class="exit-button" (click)="exitModal()">\n        Exit\n      </button>\n    </div>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-more-modal/add-more-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AddMoreModalPage);
    return AddMoreModalPage;
}());

//# sourceMappingURL=add-more-modal.js.map

/***/ })

});
//# sourceMappingURL=69.js.map