webpackJsonp([37],{

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_push__ = __webpack_require__(499);
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





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, codes, rest, push, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.codes = codes;
        this.rest = rest;
        this.push = push;
        this.platform = platform;
        this.name = '';
        this.fuel = '';
        this.notifications = [];
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        var acc = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        if (localStorage.getItem("name") != undefined && localStorage.getItem("name") != null) {
            var data = {
                "srth_id": acc[0]['srth_id']
            };
            this.rest.post(this.codes.GET_PROFILE, data).then(function (resp) {
                localStorage.setItem("name", resp['data'][0]['name']);
                _this.name = resp['data'][0]['name'];
            });
        }
        this.name = localStorage.getItem("name");
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.refresh();
        this.initPushNotification();
    };
    HomePage.prototype.initPushNotification = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
        }
        var options = {
            android: {
                senderID: '1092655619979'
            },
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log('device token -> ' + data.registrationId);
            var acc = JSON.parse(localStorage.getItem(_this.codes.K_ACCOUNT_INFO));
            data = {
                "srth_id": acc[0]['srth_id'],
                "fcm": data.registrationId,
                "last_maint_id": "srth_ws",
                "opt_counter": "0"
            };
            _this.rest.post(_this.codes.SAVE_NOTIFICATION_FCM_TOKEN, data).then(function (resp) {
                console.log("Successfully Stored");
            });
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin' + error); });
    };
    HomePage.prototype.goToActionPage = function (page, objectId) {
        var _this = this;
        if (page == 'DocumentAddBill') {
            var dt = {
                "document_id": objectId
            };
            this.rest.post(this.codes.GET_DOCUMENT_INFO_BY_DOCUMENT_ID, dt).then(function (resp) {
                _this.navCtrl.push('DocumentRenewalPage', { 'document': resp['data'] });
            });
        }
    };
    HomePage.prototype.refresh = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_NOTIFICATIONS, data).then(function (resp) {
            if (resp != null) {
                if (resp['data'] != []) {
                    var n = resp['data'];
                    _this.notifications = n;
                }
            }
        });
        // this.rest.get(this.codes.GET_FUEL_PRICES,{}).then(resp => {
        //   if(resp != [])
        //   this.fuel = resp[0]['products'];
        //  });
    };
    HomePage.prototype.openProfilePage = function () {
        this.navCtrl.push('ProfilePage');
    };
    HomePage.prototype.openVehicleKhata = function () {
        this.navCtrl.push('VehicleKhataPage');
    };
    HomePage.prototype.openDriverKhata = function () {
        this.navCtrl.push('DriverKhataPage');
    };
    HomePage.prototype.openDocumentAndInsurance = function () {
        this.navCtrl.push('DocumentAndInsurancePage');
    };
    HomePage.prototype.openDocumentBill = function () {
        this.navCtrl.push('AddDocumentBillPage');
    };
    HomePage.prototype.openEditProfilePage = function () {
        this.navCtrl.push('EditProfilePage');
    };
    HomePage.prototype.openLanguagePage = function () {
        this.navCtrl.push('LanguagePage');
    };
    HomePage.prototype.openSettingsPage = function () {
        this.navCtrl.push('SettingsPage');
    };
    HomePage.prototype.openDriverPage = function () {
        this.navCtrl.push('DriverPage');
    };
    HomePage.prototype.openAddNewBankPage = function () {
        this.navCtrl.push('AddNewBankAccountPage');
    };
    HomePage.prototype.openSecurityAndBackup = function () {
        this.navCtrl.push('SecurityAndBackupPage');
    };
    HomePage.prototype.openAddDriverPage = function () {
        this.navCtrl.push('AddDriverPage');
    };
    HomePage.prototype.openAddMechanicPage = function () {
        this.navCtrl.push('AddMechanicPage');
    };
    HomePage.prototype.openLedgerPage = function () {
        this.navCtrl.push('LedgerPage');
    };
    HomePage.prototype.openVehicleDetailsPage = function () {
        this.navCtrl.push('VehicleDetailsPage');
    };
    HomePage.prototype.openDriverDocumentPage = function () {
        this.navCtrl.push('DriverDocumentPage');
    };
    HomePage.prototype.openAddDriverExpensePage = function () {
        this.navCtrl.push('AddDriverExpensesPage');
    };
    HomePage.prototype.openComplaintKhata = function () {
        this.navCtrl.push('ComplaintsKhataPage');
    };
    HomePage.prototype.openMechanicalKhata = function () {
        this.navCtrl.push('MechanicKhataPage');
    };
    HomePage.prototype.openShopKhata = function () {
        this.navCtrl.push('ShopKhataPage');
    };
    HomePage.prototype.openAllImageKhata = function () {
        this.navCtrl.push('AllImageKhataPage');
    };
    HomePage.prototype.openReportKhata = function () {
        this.navCtrl.push('ReportAllCompPage');
    };
    HomePage.prototype.openBillDetails = function () {
        this.navCtrl.push('BillDetailsPage');
    };
    HomePage.prototype.openAccountKhata = function () {
        this.navCtrl.push('AccountKhataPage');
    };
    HomePage.prototype.openVehicleDocument = function () {
        this.navCtrl.push('VehicleDocumentPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Slides"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-3 class="person-picture">\n        <ion-icon ios="ios-contact" md="md-contact" style="margin-top: 4px;font-size:4.2rem !important"\n          (click)="openProfilePage()"></ion-icon>\n      </ion-col>\n      <ion-col col-6 class="person-name">\n        <ion-title>{{name}}</ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n\n\n\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openAccountKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/003-file.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          ACCOUNTS & PAYMENT KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openVehicleKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/006-delivery-truck.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          VEHICLE KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openDriverKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/driver.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          DRIVER KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openShopKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/004-shop.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          SHOP KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openMechanicalKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/007-mechanic.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          MECHANIC KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openDocumentAndInsurance()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/002-folder.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          DOCUMENT KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openComplaintKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/008-report.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          COMPLAINT KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openReportKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/001-clipboard.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          REPORTS KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openAllImageKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/009-image.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          ALL IMAGE KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <h2>Recent Notifications</h2>\n  <ion-list>\n    <ion-item *ngFor="let n of notifications">\n        <h2 class="title-n">{{n[\'title\']}}</h2>\n        <p class="message-n"> \n          {{n[\'message\']}}\n        </p>\n        <p style="float: right !important;">\n        <button ion-button outline round *ngIf="n[\'click_page\'] != \'\'" (click)="goToActionPage(n[\'click_page\'],n[\'next_link\'])">\n          Update Now\n        </button>\n      </p>\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-slides pager="true" autoplay="3000" paginationType="bullet">\n    \n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/OlaoxdpKcXY" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n\n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/WxiPhcckODc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n\n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/WxiPhcckODc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n\n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/WxiPhcckODc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n\n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/WxiPhcckODc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n  </ion-slides>\n\n\n -->\n\n\n\n \n\n\n</ion-content>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Platform"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=37.js.map