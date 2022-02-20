webpackJsonp([23],{

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonModalPageModule", function() { return ReasonModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reason_modal__ = __webpack_require__(977);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReasonModalPageModule = /** @class */ (function () {
    function ReasonModalPageModule() {
    }
    ReasonModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reason_modal__["a" /* ReasonModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reason_modal__["a" /* ReasonModalPage */]),
            ],
        })
    ], ReasonModalPageModule);
    return ReasonModalPageModule;
}());

//# sourceMappingURL=reason-modal.module.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReasonModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReasonModalPage = /** @class */ (function () {
    function ReasonModalPage(codes, rest, viewController, navCtrl, navParams) {
        this.codes = codes;
        this.rest = rest;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filterreasons = [];
        this.reasons = [];
        this.reasontext = '';
        this.searchTerm = '';
        this.addReason = false;
        this.getreason();
    }
    ReasonModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReasonModalPage');
    };
    ReasonModalPage.prototype.selectedReason = function (reason) {
        localStorage.setItem(this.codes.SELECTED_REASON, JSON.stringify(reason['reason']));
        this.viewController.dismiss();
    };
    ReasonModalPage.prototype.getreason = function () {
        var _this = this;
        this.rest.post(this.codes.GET_REASON, {}).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.reasons = resp['data'];
                _this.filterreasons = _this.reasons;
            }
        });
    };
    ReasonModalPage.prototype.savereason = function () {
        var _this = this;
        if (this.addReason == true) {
            var data = {
                'reason': this.reasontext
            };
            this.rest.post(this.codes.SAVE_REASON, data).then(function (resp) {
                if (resp['_ReturnCode'] == '0') {
                    _this.getreason();
                }
            });
            this.addReason = false;
        }
        else
            this.addReason = true;
    };
    ReasonModalPage.prototype.deletereason = function (reason) {
        var _this = this;
        var data = {
            'property_id': reason['property_id']
        };
        this.rest.post(this.codes.DELETE_REASON, data).then(function (resp) {
            _this.getreason();
        });
    };
    ReasonModalPage.prototype.filterList = function (event) {
        var _this = this;
        this.filterreasons = this.reasons.filter(function (wp) {
            if (_this.searchTerm != '') {
                return (wp.reason.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            }
            else
                return _this.reasons;
        });
    };
    ReasonModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-reason-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/reason-modal/reason-modal.html"*/'<ion-content padding style="background: rgba(0,0,0,0.8) !important;">\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n\n        <ion-col col-12>\n          <ion-searchbar mode="md" (ionInput)="filterList($event)" [(ngModel)]="searchTerm"></ion-searchbar>\n        </ion-col>\n\n\n \n      </ion-row>\n\n      <ion-grid *ngIf="addReason">\n        <ion-row>\n          <ion-col col-12>\n            <h2>Add Reason</h2>\n          </ion-col>\n          <ion-col col-12>\n            <div class="label-float" >\n              <input type="text"  placeholder=" " [(ngModel)]="reasontext" />\n              <label>NAME</label>\n            </div>\n          </ion-col>\n          <!-- <ion-col col-12 style="text-align: center;">\n            <button ion-button round class="custom-button" (click)="savereason()"> ADD REASON  </button>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n\n      <ion-col col-12 style="text-align: center;">\n        <button ion-button round class="custom-button"  (click)="savereason()"> ADD REASON  &nbsp; <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon> </button>\n      </ion-col>\n\n\n      <ion-row>\n        <ion-col col-12>\n        <ion-list>\n          <ion-item *ngFor="let wp of filterreasons" >\n            <ion-card>\n              <ion-card-content>\n            <ion-row>\n              <ion-col style="text-align: left;" (click)="selectedReason(wp)"> \n                {{wp[\'reason\']}}\n              </ion-col>\n              <ion-col style="text-align: right;" *ngIf="wp[\'reason\']!=\'Holiday\'" (click)="deletereason(wp)"> \n                <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>\n              </ion-col> \n            </ion-row>\n          </ion-card-content>\n          </ion-card>\n          </ion-item>\n        </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/reason-modal/reason-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], ReasonModalPage);
    return ReasonModalPage;
}());

//# sourceMappingURL=reason-modal.js.map

/***/ })

});
//# sourceMappingURL=23.js.map