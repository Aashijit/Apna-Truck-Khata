webpackJsonp([59],{

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraModalPageModule", function() { return CameraModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_modal__ = __webpack_require__(924);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CameraModalPageModule = /** @class */ (function () {
    function CameraModalPageModule() {
    }
    CameraModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__camera_modal__["a" /* CameraModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__camera_modal__["a" /* CameraModalPage */]),
            ],
        })
    ], CameraModalPageModule);
    return CameraModalPageModule;
}());

//# sourceMappingURL=camera-modal.module.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraModalPage; });
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
 * Generated class for the CameraModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CameraModalPage = /** @class */ (function () {
    function CameraModalPage(viewController, navCtrl, navParams) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CameraModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameraModalPage');
    };
    CameraModalPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    CameraModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-camera-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/camera-modal/camera-modal.html"*/'\n\n<ion-content padding style="background-color: rgba(0, 0, 0, 0.8) !important;">\n\n  \n\n  <ion-card class="modal-card-camera">\n    <ion-card-header class="custom-card-header">\n      PHOTOS\n    </ion-card-header>\n    <ion-card-content>\n      \n\n      <ion-row>\n        <ion-col col-12>\n          <span class="add-more-modal" (click)="goToModal()" ><i style="color: #0752af;font-size: 30px" class="fa fa-camera" aria-hidden="true"></i>\n            <!-- <i class="fa fa-plus-circle" aria-hidden="true"></i> -->\n          </span>    \n        </ion-col>\n        <ion-col col-6 class="mt-4">\n        </ion-col>\n        <ion-col col-6 class="mt-4">\n          12/11/1994\n        </ion-col>\n        <ion-col col-6>\n          <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UjfKFKsL1xOguMVhMx8fwz3KS1x90ErKtA&usqp=CAU" alt="">\n        </ion-col>\n        <ion-col col-6>\n          <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UjfKFKsL1xOguMVhMx8fwz3KS1x90ErKtA&usqp=CAU" alt="">\n        </ion-col>\n        <ion-col col-6 class="mt-4">\n        </ion-col>\n        <ion-col col-6 class="mt-4">\n          12/11/1994\n        </ion-col>\n        <ion-col col-6>\n          <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UjfKFKsL1xOguMVhMx8fwz3KS1x90ErKtA&usqp=CAU" alt="">\n        </ion-col>\n        <ion-col col-6>\n          <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UjfKFKsL1xOguMVhMx8fwz3KS1x90ErKtA&usqp=CAU" alt="">\n        </ion-col>\n      </ion-row>\n      <ion-col col-12 >\n        <div class="text-center">\n          <button ion-button round class="exit-button" (click)="exitModal()">\n            EXIT\n          </button>\n        </div>\n      </ion-col>\n      \n\n\n     </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/camera-modal/camera-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CameraModalPage);
    return CameraModalPage;
}());

//# sourceMappingURL=camera-modal.js.map

/***/ })

});
//# sourceMappingURL=59.js.map