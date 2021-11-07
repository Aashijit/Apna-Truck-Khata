webpackJsonp([34],{

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(951);
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

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, codes, rest) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.codes = codes;
        this.rest = rest;
        this.name = '';
        this.fuel = '';
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
    };
    HomePage.prototype.refresh = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Slides"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/ApnaTruckKhata/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-3 class="person-picture">\n        <ion-icon ios="ios-contact" md="md-contact" style="margin-top: 4px;font-size:4.2rem !important"\n          (click)="openProfilePage()"></ion-icon>\n      </ion-col>\n      <ion-col col-6 class="person-name">\n        <ion-title>{{name}}</ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n\n\n\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openAccountKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/003-file.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          ACCOUNTS & PAYMENT KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openVehicleKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/006-delivery-truck.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          VEHICLE KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openDriverKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/driver.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          DRIVER KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openShopKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/004-shop.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          SHOP KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openMechanicalKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/007-mechanic.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          MECHANIC KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openDocumentAndInsurance()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/002-folder.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          DOCUMENT KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openComplaintKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/008-report.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          COMPLAINT KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openReportKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/001-clipboard.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          REPORTS KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <ion-row padding class="pd">\n    <ion-col col-12 (click)="openAllImageKhata()"\n      style="background: #287ac4 !important; color: #fff !important; border-radius: 5px !important;    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);">\n      <ion-row>\n        <ion-col col-2 style="text-align:center !important;">\n          <img src="../../assets/saarthi-icon/png/009-image.png" style="width: 50% !important;" alt="">\n        </ion-col>\n        <ion-col col-9 style="margin-top: 6px;font-weight: 1000;">\n          ALL IMAGE KHATA\n        </ion-col>\n        <ion-col col-1 style="    margin-top: 7px;">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <!-- <div class="cards" *ngIf="fuel != \'\' && fuel.length > 0">\n    <div class="card__k card-1">\n      <h2 class="card__title">\n        {{fuel[0][\'productName\']}} : ₹ {{fuel[0][\'productPrice\']}} \n        <span *ngIf="fuel[0][\'priceChangeSign\'] == \'+\'" style="font-size: 11px;color: #ffcdcd;">\n          <ion-icon name="arrow-up"></ion-icon>\n          ₹ {{fuel[0][\'priceChange\']}}\n        </span>\n        <span *ngIf="fuel[0][\'priceChangeSign\'] == \'-\'" style="font-size: 11px;color: #95e795;">\n          <ion-icon name="arrow-down"></ion-icon>\n          ₹{{fuel[0][\'priceChange\']}}\n        </span>\n      </h2>\n      <h2 class="card__title">\n        {{fuel[1][\'productName\']}} : ₹ {{fuel[1][\'productPrice\']}}\n        <span *ngIf="fuel[1][\'priceChangeSign\'] == \'+\'" style="font-size: 11px;color: #ffcdcd;">\n          <ion-icon name="arrow-up"></ion-icon>\n          ₹ {{fuel[1][\'priceChange\']}}\n        </span>\n        <span *ngIf="fuel[1][\'priceChangeSign\'] == \'-\'" style="font-size: 11px;color: #95e795;">\n          <ion-icon name="arrow-down"></ion-icon>\n          ₹{{fuel[1][\'priceChange\']}}\n        </span>\n      </h2>\n      <p class="card__apply" (click)="refresh()">\n        <a class="card__link" href="#">Refresh <i class="fa fa-refresh" aria-hidden="true"></i> </a>\n      </p>\n    </div>\n   \n  </div> -->\n\n  <ion-slides pager="true" autoplay="3000" paginationType="bullet">\n    \n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/OlaoxdpKcXY" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n\n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/WxiPhcckODc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n\n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/WxiPhcckODc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n\n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/WxiPhcckODc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n\n    <ion-slide>\n      <iframe width="98%" height="200" src="https://www.youtube.com/embed/WxiPhcckODc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </ion-slide>\n  </ion-slides>\n\n\n\n\n\n\n \n  \n\n  <!-- (click)="openAccountKhata()" -->\n  <!-- <ion-row padding >\n    <ion-col col-12 class="khata" (click)="openAccountKhata()">\n      <ion-row>\n        <ion-col col-4>\n          <img src="../../assets/saarthi-icon/png/003-file.png" class="img" alt="">\n        </ion-col>\n        <ion-col col-8>\n          <h6>ACCOUNTS KHATA</h6>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row> -->\n\n  <!-- <ion-row padding >\n    <ion-col col-6 class="text-center pl-0 pt-9">\n      <ion-row (click)="openVehicleKhata()" class="khata m-0">\n        <ion-col col-12>\n          <img src="../../assets/saarthi-icon/png/006-delivery-truck.png" class="img" alt="">\n        </ion-col>\n        <ion-col col-12>\n          <p class="row2">VEHICLE KHATA</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 class="text-center pr-0 pt-9">\n      <ion-row (click)="openDriverKhata()" class="khata m-0">\n        <ion-col col-12>\n          <img src="../../assets/saarthi-icon/png/driver.png" class="img" alt="">\n        </ion-col>\n        <ion-col col-12>\n          <p class="row2">DRIVER KHATA</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row> -->\n\n  <!-- <ion-row padding >\n    <ion-col col-6 class="text-center pl-0 pt-9">\n      <ion-row (click)="openShopKhata()" class="khata m-0">\n        <ion-col col-12>\n          <img src="../../assets/saarthi-icon/png/004-shop.png" class="img" alt="">\n        </ion-col>\n        <ion-col col-12>\n          <p class="row2">SHOP KHATA</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 class="text-center pr-0 pt-9">\n      <ion-row (click)="openMechanicalKhata()" class="khata m-0">\n        <ion-col col-12>\n          <img src="../../assets/saarthi-icon/png/007-mechanic.png" class="img" alt="">\n        </ion-col>\n        <ion-col col-12>\n          <p class="row2">MECHANIC KHATA</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n\n  </ion-row> -->\n\n  <!-- <ion-row padding >\n    <ion-col col-6 class="text-center pl-0 pt-9">\n      <ion-row (click)="openDocumentAndInsurance()" class="khata m-0">\n        <ion-col col-12>\n          <img src="../../assets/saarthi-icon/png/002-folder.png" class="img3" alt="">\n        </ion-col>\n        <ion-col col-12>\n          <p class="row2">DOCUMENT KHATA</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 class="text-center pr-0 pt-9">\n      <ion-row class="khata m-0" (click)="openComplaintKhata()">\n        <ion-col col-12>\n          <img src="../../assets/saarthi-icon/png/008-report.png" class="img3" alt="">\n        </ion-col>\n        <ion-col col-12>\n          <p class="row2">COMPLAINT KHATA </p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row> -->\n  <!-- <ion-row padding >\n    <ion-col col-6 class="text-center pl-0 pt-9">\n      <ion-row class="khata m-0" (click)="openReportKhata()">\n        <ion-col col-12>\n          <img src="../../assets/saarthi-icon/png/001-clipboard.png" class="img3" alt="">\n        </ion-col>\n        <ion-col col-12>\n          <p class="row2">REPORTS KHATA </p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col col-6 class="text-center pr-0 pt-9">\n      <ion-row class="khata m-0" (click)="openAllImageKhata()">\n        <ion-col col-12>\n          <img src="../../assets/saarthi-icon/png/009-image.png" class="img3" alt="">\n        </ion-col>\n        <ion-col col-12>\n          <p class="row2">ALL PHOTO KHATA</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row> -->\n\n\n  <!-- <ion-row>\n      \n      <ion-col col-12 class="all-khata first-row-khata">\n        <div class="text-center" (click)=" openAccountKhata()">\n          <img src="../../assets/saarthi-icon/png/003-file.png" class="img-size" alt="">\n          <h6>ACCOUNTS KHATA</h6>\n        </div>\n      </ion-col>\n\n    </ion-row> -->\n\n  <!-- <ion-row>\n\n      <ion-col col-6 class="second-row-khata">\n        <div (click)=" openVehicleKhata()" class="all-khata">\n          <img src="../../assets/saarthi-icon/png/006-delivery-truck.png" class="img2-size" alt="">\n          <h6>VEHICLE KHATA</h6>\n        </div>\n      </ion-col>\n\n     \n\n      <ion-col col-6 class="second-row-khata">\n        <div (click)=" openDriverKhata()" class="all-khata">\n          <img src="../../assets/saarthi-icon/png/driver.png" class="img2-size" alt="">\n          <h6>DRIVER KHATA</h6>\n        </div>\n      </ion-col>\n\n    </ion-row> -->\n  <!-- \n  <div class="third-row">\n    <div class="all-khata" (click)="openShopKhata()">\n      <img src="../../assets/saarthi-icon/png/004-shop.png" class="img2-size" alt="">\n\n      <h6>\n        SHOP KHATA\n      </h6>    \n    </div>\n    <div class="all-khata" (click)=" openMechanicalKhata()">\n      <img src="../../assets/saarthi-icon/png/007-mechanic.png" class="img2-size" alt="">\n\n      <h6>\n        MECHANIC KHATA\n      </h6>    \n    </div>\n    <div class="all-khata" (click)="openDocumentAndInsurance()">\n      <img src="../../assets/saarthi-icon/png/002-folder.png" class="img2-size" alt="">\n\n      <h6>\n        DOCUMENT AND INSURANCE KHATA\n      </h6>    \n    </div>\n  </div> -->\n\n  <!-- <div class="third-row">\n    <div  class="all-khata" (click)="openComplaintKhata()">\n      <img src="../../assets/saarthi-icon/png/008-report.png"  class="img2-size" alt="">\n\n      <h6>\n        COMPLAINT KHATA\n      </h6>  \n    </div>\n    <div class="all-khata" (click)="openReportKhata()">\n      <img src="../../assets/saarthi-icon/png/001-clipboard.png" class="img2-size" alt="">\n\n      <h6>\n        REPORTS KHATA\n      </h6>  \n    </div>\n    <div class="all-khata" (click)="openAllImageKhata()">\n      <img src="../../assets/saarthi-icon/png/009-image.png" class="img2-size" alt="">\n\n      <h6>\n        ALL IMAGE KHATA\n      </h6>   \n    </div>\n\n \n  </div> -->\n\n\n  <!-- <div class="navigation" style="margin-top: 50px;">\n    <button ion-button color="secondary" (click)="openProfilePage()">Profile Page</button>\n    <button ion-button color="secondary" (click)="openDocumentAndInsurance()">Document</button>\n    <button ion-button color="secondary" (click)="openDocumentBill()">Add Bill Document</button>\n    <button ion-button color="secondary" (click)="openEditProfilePage()">Add Bill Document</button>\n    <button ion-button color="secondary" (click)="openLanguagePage()">Language</button>\n    <button ion-button color="secondary" (click)="openSettingsPage()">Settings</button>\n    <button ion-button color="secondary" (click)="openDriverPage()">Driver</button>\n    <button ion-button color="secondary" (click)="openAddNewBankPage()">Add new bank account</button>\n    <button ion-button color="secondary" (click)="openSecurityAndBackup()">Add new bank account</button>\n    <button ion-button color="secondary" (click)="openAddDriverPage()">Add driver</button>\n    <button ion-button color="secondary" (click)="openAddMechanicPage()">Add Mechanic</button>\n    <button ion-button color="secondary" (click)="openLedgerPage()">Ledger</button>\n    <button ion-button color="secondary" (click)="openVehicleDetailsPage()">Vehicle Details</button>\n    <button ion-button color="secondary" (click)="openDriverDocumentPage()">Driver Document</button>\n    <button ion-button color="secondary" (click)="openAddDriverExpensePage()">Add Driver expense</button>\n    <button ion-button color="secondary" (click)="openVehicleDocument()">Vehicle Document</button>\n\n\n  </div> -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/ApnaTruckKhata/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=34.js.map