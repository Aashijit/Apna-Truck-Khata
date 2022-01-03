webpackJsonp([36],{

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPageModule", function() { return InitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init__ = __webpack_require__(961);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InitPageModule = /** @class */ (function () {
    function InitPageModule() {
    }
    InitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__init__["a" /* InitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__init__["a" /* InitPage */]),
            ]
        })
    ], InitPageModule);
    return InitPageModule;
}());

//# sourceMappingURL=init.module.js.map

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(493);
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




var InitPage = /** @class */ (function () {
    function InitPage(navCtrl, navParams, rest, codes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.phoneNumber = '';
        this.password = '';
        this.enterpassword = false;
        this.showpassword = false;
        this.message = '';
    }
    InitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InitPage');
    };
    InitPage.prototype.getregistrationinfo = function () {
        var _this = this;
        var data = {
            'mobile_number': this.phoneNumber
        };
        this.rest.post(this.codes.GET_REGISTRATION_INFO, data).then(function (res) {
            if (res['data'].length == 0) {
                _this.showpassword = true;
            }
            else {
                localStorage.setItem(_this.codes.K_ACCOUNT_INFO, JSON.stringify(res['data']));
                _this.enterpassword = true;
            }
        });
    };
    InitPage.prototype.createpassword = function () {
        var _this = this;
        var data = {
            "mobile_number": this.phoneNumber,
            "password": this.password
        };
        this.rest.post(this.codes.SAVE_REGISTRATION_INFO, data).then(function (res) {
            if (res['_ReturnCode'] == '0') {
                localStorage.setItem(_this.codes.K_ACCOUNT_INFO, JSON.stringify(data['data']));
                _this.navCtrl.setRoot('TabsPage');
            }
        });
    };
    InitPage.prototype.login = function () {
        var _this = this;
        var data = {
            "mobile_number": this.phoneNumber,
            "password": this.password
        };
        this.rest.post(this.codes.LOGIN, data).then(function (res) {
            if (res['_ReturnCode'] == '0') {
                localStorage.setItem(_this.codes.K_ACCOUNT_INFO, JSON.stringify(res['data']));
                _this.navCtrl.setRoot('TabsPage');
            }
            else {
                _this.message = res['_ReturnMessage'];
            }
        });
    };
    InitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-init',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/init/init.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-3 class="person-picture">\n        <!-- <img width="50px" style="border-radius: 50%; height: 50px;" src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70" alt=""> -->\n        <!-- <img width="50px" style="border-radius: 50%" src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"> -->\n      </ion-col>\n      <ion-col col-6 class="person-name">\n        <ion-title>Apna Truck Khata</ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <!-- <img src="../../assets/saarthi-icon/png/youtube.png" alt="" > -->\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <ion-card>\n    <ion-card-header>\n      GET STARTED\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <div class="label-float" >\n    <input type="tel" maxlength="10"  placeholder=" " [(ngModel)]="phoneNumber" />\n    <label>ENTER MOBILE NUMBER</label>\n    <i class="fa fa-phone-square" aria-hidden="true"></i>\n  </div>\n\n  <div class="label-float" *ngIf=\'showpassword\'>\n    <input type="text"  placeholder=" " [(ngModel)]="password" />\n    <label>CREATE PASSWORD</label>\n    <i class="fa fa-key" aria-hidden="true"></i>\n  </div>\n\n\n  <div class="label-float" *ngIf=\'enterpassword\'>\n    <input type="password"  placeholder=" " [(ngModel)]="password" />\n    <label>ENTER PASSWORD</label>\n    <i class="fa fa-key" aria-hidden="true"></i>\n  </div>\n\n\n  <p style="color: red;">\n    {{message}}\n  </p>\n\n\n\n  <p style="text-align: center;margin-top: 20px !important;" *ngIf=\'!showpassword && !enterpassword\'>\n    <button ion-button round (click)="getregistrationinfo()">\n      Next\n    </button>\n  </p>\n\n  <p style="text-align: center;margin-top: 20px !important;" *ngIf=\'showpassword\'>\n    <button ion-button round (click)="createpassword()">\n      Register\n    </button>\n  </p>\n\n\n  <p style="text-align: center;margin-top: 20px !important;" *ngIf=\'enterpassword\'>\n    <button ion-button round (click)="login()">\n      Login\n    </button>\n  </p>\n\n</ion-card-content>\n\n</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/init/init.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */]])
    ], InitPage);
    return InitPage;
}());

//# sourceMappingURL=init.js.map

/***/ })

});
//# sourceMappingURL=36.js.map