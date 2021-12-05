webpackJsonp([40],{

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(956);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, codes, rest, loading, msg) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.rest = rest;
        this.loading = loading;
        this.msg = msg;
        this.profile = {
            "srth_id": '1',
            "name": '',
            "business_name": '',
            "city": '',
            "GSTN": '',
            "pan": '',
            "address_line_1": '',
            "address_line_2": '',
            "state": '',
            "pincode": '',
            "profile_image_id": '',
            "last_maint_id": 'srth_app',
            "opt_counter": '0'
        };
        var acc = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        this.profile['srth_id'] = acc[0]['srth_id'];
        var data = {
            "srth_id": acc[0]['srth_id']
        };
        this.rest.post(this.codes.GET_PROFILE, data).then(function (resp) {
            _this.profile = resp['data'][0];
        });
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.saveDetails = function () {
        var _this = this;
        var lng = this.loading.create({
            content: 'Saving the profile ...'
        });
        lng.present();
        this.rest.post(this.codes.UPDATE_PROFILE, this.profile).then(function (resp) {
            lng.dismiss();
            if (resp['_ReturnCode'] == '0') {
                _this.msg.displayToast('Saved profile.');
                _this.navCtrl.pop();
            }
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/edit-profile/edit-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n          &nbsp;\n          EDIT PROFILE\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container edit-profile">\n\n    <ion-list>\n\n      <!-- <ion-row class="profile-picture">\n        <ion-col col-4>\n          <i class="fa fa-camera" aria-hidden="true"></i>\n          <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon>\n\n        </ion-col>\n        <ion-col>\n          <h6>MAX 1</h6> \n        </ion-col>\n\n      </ion-row> -->\n\n      <!-- <ion-item>\n        \n        <ion-input type="text" placeholder="NAME"></ion-input>\n\n\n      </ion-item> -->\n      <!-- "srth_id",\n      "name",\n      "business_name",\n      "city",\n      "GSTN",\n      "pan",\n      "address_line_1",\n      "address_line_2",\n      "state",\n      "pincode",\n      "profile_image_id",\n      "last_maint_id",\n      "opt_counter" -->\n\n      <div class="label-float"  >\n        <input type="text"  placeholder=" " [(ngModel)]="profile.name"/>\n        <label>NAME</label>\n        <i class="fa fa-user" aria-hidden="true"></i>\n\n      </div>\n\n\n      <div class="label-float"  >\n        <input type="text"  placeholder=" " [(ngModel)]="profile.business_name"/>\n        <label>BUSINESS NAME</label>\n        <i class="fa fa-building" aria-hidden="true"></i>\n\n      </div>\n\n      <ion-item class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px" >\n        <ion-label>CITY</ion-label>\n\n        <ion-select interface="popover" [(ngModel)]="profile.city">\n          <ion-option value="city1">CITY 1</ion-option>\n          <ion-option value="city2">CITY 2</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <div class="label-float"  >\n        <input type="text"  placeholder=" " [(ngModel)]="profile.GSTN"/>\n        <label>GST NUMBER</label>\n        <!-- <i class="fa fa-building" aria-hidden="true"></i> -->\n\n      </div>\n\n      <div class="label-float"  >\n        <input type="text"  placeholder=" " [(ngModel)]="profile.pan"/>\n        <label>PAN NUMBER</label>\n        <!-- <i class="fa fa-building" aria-hidden="true"></i> -->\n\n      </div>\n\n<!-- \n      <ion-item>\n        <ion-label>CITY</ion-label>\n        <ion-select [(ngModel)]="gender">\n          <ion-option value="f">Female</ion-option>\n          <ion-option value="m">Male</ion-option>\n        </ion-select>\n      </ion-item> -->\n<!-- \n      <ion-item>\n        <ion-input type="text" placeholder="GST NUMBER"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="PAN NUMBER"></ion-input>\n      </ion-item> -->\n\n      <div class="label-float"  >\n        <input type="text"  placeholder=" " [(ngModel)]="profile.address_line_1"/>\n        <label>ADDRESS LINE 1</label>\n        <i class="fa fa-building" aria-hidden="true"></i>\n\n      </div>\n\n      <div class="label-float"  >\n        <input type="text"  placeholder=" " [(ngModel)]="profile.address_line_2"/>\n        <label>ADDRESS LINE 2</label>\n        <i class="fa fa-building" aria-hidden="true"></i>\n\n      </div>\n\n      <!-- <ion-item>\n        <ion-input type="text" placeholder="ADDRESS LINE 1"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="ADDRESS LINE 2"></ion-input>\n      </ion-item> -->\n\n      <ion-row class="state">\n        <ion-col col-6>\n          <ion-item class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px" >\n            <ion-label>STATE</ion-label>\n    \n            <ion-select interface="popover" [(ngModel)]="profile.state" >\n              <ion-option value="city1">STATE 1</ion-option>\n              <ion-option value="city2">STATE 2</ion-option>\n            </ion-select>\n          </ion-item>\n    \n          <!-- <ion-item>\n            <ion-label>STATE</ion-label>\n            <ion-select [(ngModel)]="gender">\n              <ion-option value="f">Female</ion-option>\n              <ion-option value="m">Male</ion-option>\n            </ion-select>\n          </ion-item> -->\n        </ion-col>\n        <ion-col col-6>\n          <div class="label-float"  >\n            <input type="tel" maxlength="6"  placeholder=" " [(ngModel)]="profile.pincode" />\n            <label>PINCODE</label>\n            <!-- <i class="fa fa-building" aria-hidden="true"></i> -->\n          </div>\n          <!-- <ion-item>\n            <ion-input type="text" placeholder="PINCODE"></ion-input>\n          </ion-item> -->\n        </ion-col>\n      </ion-row>\n\n      <div class="text-center mt-4">\n        <button ion-button round class="custom-button" (click)="saveDetails()">SAVE DETAILS</button>\n      </div>\n      \n\n\n    \n    </ion-list>\n\n  </div>\n</ion-content> \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=40.js.map