webpackJsonp([53],{

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecisionModalPageModule", function() { return DecisionModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__decision_modal__ = __webpack_require__(945);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DecisionModalPageModule = /** @class */ (function () {
    function DecisionModalPageModule() {
    }
    DecisionModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__decision_modal__["a" /* DecisionModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__decision_modal__["a" /* DecisionModalPage */]),
            ],
        })
    ], DecisionModalPageModule);
    return DecisionModalPageModule;
}());

//# sourceMappingURL=decision-modal.module.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecisionModalPage; });
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



var DecisionModalPage = /** @class */ (function () {
    function DecisionModalPage(viewController, navCtrl, navParams, modalCtrl) {
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.options = '';
        this.showAllot = true;
        this.vehicles = '';
        this.vehicles = JSON.parse(localStorage.getItem("vehicle_details"));
        if (this.vehicles['driver_details'] == undefined || this.vehicles['driver_details'] == null)
            this.showAllot = true;
        else
            this.showAllot = false;
    }
    DecisionModalPage.prototype.presentModal = function () {
        if (this.options == 'change') {
            var changeDriverModal = this.modalCtrl.create('ChangeDriverPage');
            changeDriverModal.present();
        }
        else if (this.options == 'allot') {
            var changeDriverModal = this.modalCtrl.create('AllotDriverPage');
            changeDriverModal.present();
        }
        else if (this.options == 'remove') {
            var changeDriverModal = this.modalCtrl.create('RemoveDriverPage');
            changeDriverModal.present();
        }
    };
    DecisionModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DecisionModalPage');
    };
    DecisionModalPage.prototype.exitModal = function () {
        this.viewController.dismiss();
    };
    DecisionModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-decision-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/decision-modal/decision-modal.html"*/'<ion-content padding style="background-color: rgba(0, 0, 0, 0.8) !important;">\n\n  <ion-card>\n    <ion-card-content>\n      \n      <ion-list radio-group [(ngModel)]="options" (ionChange)="presentModal()">\n\n        <ion-list-header class="">\n          SELECT THE OPTION\n        </ion-list-header>\n      \n        <ion-item>\n          <ion-label>CHANGE</ion-label>\n          <ion-radio value="change"></ion-radio>\n        </ion-item>\n      \n        <ion-item *ngIf="showAllot">\n          <ion-label>ALLOT</ion-label>\n          <ion-radio value="allot"></ion-radio>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>REMOVE</ion-label>\n          <ion-radio value="remove"></ion-radio>\n        </ion-item>\n      \n      </ion-list>\n\n    </ion-card-content>\n\n    <ion-row class="justify-content-center">\n      <ion-col col-6 class="text-center">\n        <button ion-button round class="custom-button" (click)="exitModal()">\n          EXIT\n        </button>\n      </ion-col>\n    </ion-row>\n   \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/decision-modal/decision-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], DecisionModalPage);
    return DecisionModalPage;
}());

//# sourceMappingURL=decision-modal.js.map

/***/ })

});
//# sourceMappingURL=53.js.map