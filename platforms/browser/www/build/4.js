webpackJsonp([4],{

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleKhataPageModule", function() { return VehicleKhataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_khata__ = __webpack_require__(995);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VehicleKhataPageModule = /** @class */ (function () {
    function VehicleKhataPageModule() {
    }
    VehicleKhataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_khata__["a" /* VehicleKhataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_khata__["a" /* VehicleKhataPage */]),
            ],
        })
    ], VehicleKhataPageModule);
    return VehicleKhataPageModule;
}());

//# sourceMappingURL=vehicle-khata.module.js.map

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleKhataPage; });
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




var VehicleKhataPage = /** @class */ (function () {
    function VehicleKhataPage(alertCtrl, navCtrl, navParams, rest, codes) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.vehicles = [];
        this.vehicledrivers = [];
        this.vehiclenodrivers = [];
        this.displaycontrol = false;
        this.isselect = '3';
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "vehicle_owner_srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.vehicles = resp['data'];
                for (var i = 0; i < _this.vehicles.length; i++) {
                    _this.vehicles[i]['displaycontrol'] = false;
                    _this.vehicles[i]['selected'] = false;
                    if (_this.vehicles[i]['driver_details'] != null || _this.vehicles[i]['vehicle_details'] != undefined) {
                        _this.vehicledrivers.push(_this.vehicles[i]);
                    }
                    else {
                        _this.vehiclenodrivers.push(_this.vehicles[i]);
                    }
                }
            }
        });
    }
    VehicleKhataPage.prototype.select = function (id) {
        this.isselect = id;
    };
    VehicleKhataPage.prototype.getVehicles = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "vehicle_owner_srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.vehicles = resp['data'];
                for (var i = 0; i < _this.vehicles.length; i++) {
                    _this.vehicles[i]['displaycontrol'] = false;
                    _this.vehicles[i]['selected'] = false;
                    if (_this.vehicles[i]['driver_details'] != null || _this.vehicles[i]['vehicle_details'] != undefined) {
                        _this.vehicledrivers.push(_this.vehicles[i]);
                    }
                    else {
                        _this.vehiclenodrivers.push(_this.vehicles[i]);
                    }
                }
            }
        });
    };
    VehicleKhataPage.prototype.presentConfirmDelete = function (vd) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: "Are you sure you want to delete this vehicle?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.deleteVehicle(vd);
                    }
                }
            ]
        });
        alert.present();
    };
    VehicleKhataPage.prototype.deleteVehicle = function (vd) {
        var _this = this;
        var data = {
            "vehicle_id": vd['vehicle_id']
        };
        this.rest.post(this.codes.DELETE_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.getVehicles();
            }
        });
    };
    VehicleKhataPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "vehicle_owner_srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.vehicles = resp['data'];
                for (var i = 0; i < _this.vehicles.length; i++) {
                    _this.vehicles[i]['displaycontrol'] = false;
                    _this.vehicles[i]['selected'] = false;
                    if (_this.vehicles[i]['driver_details'] != null || _this.vehicles[i]['vehicle_details'] != undefined) {
                        _this.vehicledrivers.push(_this.vehicles[i]);
                    }
                    else {
                        _this.vehiclenodrivers.push(_this.vehicles[i]);
                    }
                }
            }
        });
    };
    VehicleKhataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehicleKhataPage');
    };
    VehicleKhataPage.prototype.selectedvehicle = function (vh) {
        for (var i = 0; i < this.vehicles.length; i++) {
            this.vehicles[i]['displaycontrol'] = false;
            this.vehicles[i]['selected'] = false;
        }
        vh['displaycontrol'] = true;
        vh['selected'] = true;
    };
    VehicleKhataPage.prototype.openAddVehiclePage = function () {
        this.navCtrl.push('AddVehiclePage', { 'updatevehicle': 'false', 'updateworkpart': 'false' });
    };
    VehicleKhataPage.prototype.openVehicleDetails = function (vh) {
        this.navCtrl.push('VehicleDetailsPage', { 'vehicle': vh });
    };
    VehicleKhataPage.prototype.updateVehicleDetails = function (vh) {
        this.navCtrl.push('AddVehiclePage', { 'updateworkpart': 'false', 'updatevehicle': 'true', 'vehicle': vh });
    };
    VehicleKhataPage.prototype.updateWorkPart = function (vh) {
        this.navCtrl.push('AddVehiclePage', { 'updateworkpart': 'true', 'updatevehicle': 'false', 'vehicle': vh });
    };
    VehicleKhataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-vehicle-khata',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-khata/vehicle-khata.html"*/'\n<!-- Vehicle Khata -->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n      \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-car" aria-hidden="true"></i>\n          VEHICLE KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row class="document-button justify-content-center">\n    <ion-col col-6 (click)="navCtrl.push(\'VehicleWorkReportPage\')">\n      <div>\n        VEHICLE WORK REPORT\n        <i class="fa fa-download" aria-hidden="true"></i>\n\n      </div>\n    </ion-col>\n\n    <ion-col col-6 (click)="navCtrl.push(\'VehicleBillReportPage\')">\n      <div>\n        VEHICLE BILL REPORT\n        <i class="fa fa-download" aria-hidden="true"></i>\n\n      </div>\n    </ion-col>\n\n    \n \n  </ion-row>\n\n  <div class="container vehicle-khata">\n   \n    <ion-row class="vehicle-filter">\n      <ion-col col-4>\n        <div [ngClass]="isselect == \'1\' ? \'vehicle-driver-selected\' : \'vehicle-driver\'" (click)="select(\'1\')">\n          VEHICLE WITH DRIVER\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div [ngClass]="isselect == \'2\' ? \'vehicle-no-driver-selected\' : \'vehicle-no-driver\'"  (click)="select(\'2\')">\n          VEHICLE WITHOUT DRIVER\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div [ngClass]="isselect == \'3\' ? \'all-vehicle-selected\' : \'all-vehicle\'" (click)="select(\'3\')">\n          ALL VEHICLE \n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- [ngClass]=" vh[\'selected\']==false ? \'vehicle-details\' : \'vehicle-details-selected\'"s -->\n    <div *ngIf="isselect == \'3\'">\n    <ion-grid *ngFor="let vh of vehicles" (click)="selectedvehicle(vh)"  >\n    <ion-row class="vehicle-details" >\n      <ion-col col-12>\n        <h4>{{vh[\'vehicle_number\']}} \n          <span style="float: right ;">\n            <button ion-button clear color="danger" style="position: absolute;right: 13px;bottom: 15px;" (click)="presentConfirmDelete(vh)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </span>\n        </h4>\n\n\n\n        <hr>\n      </ion-col>\n      <ion-row (click)="openVehicleDetails(vh)" style="padding-left: 13px !important;">\n      <ion-col col-6 >\n        <p>DRIVER NAME:</p> \n        <span *ngIf="vh[\'driver_details\'] != undefined && vh[\'driver_details\'] != null">{{vh[\'driver_details\'][\'name\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p> CONTACT NO: </p>\n        <span *ngIf="vh[\'driver_details\'] != undefined && vh[\'driver_details\'] != null">{{vh[\'driver_details\'][\'phone_number\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p> VEHICLE BODY TYPE: </p>\n        <span >{{vh[\'vehicle_type\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p> VEHICLE WEIGHT: </p>\n        <span >{{vh[\'vehicle_weight\']+" "+vh[\'vehicle_weight_type\']}}</span>\n      </ion-col>\n    </ion-row>\n    </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <div *ngIf="isselect == \'2\'">\n    <ion-grid *ngFor="let vh of vehiclenodrivers" (click)="selectedvehicle(vh)"  >\n    <ion-row class="vehicle-details" >\n      <ion-col col-12>\n        <h4>{{vh[\'vehicle_number\']}} \n          <span style="float: right ;">\n            <button ion-button clear color="danger" style="position: absolute;right: 13px;bottom: 15px;" (click)="presentConfirmDelete(vh)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </span>\n        </h4>\n\n\n\n        <hr>\n      </ion-col>\n      <ion-row (click)="openVehicleDetails(vh)" style="padding-left: 13px !important;">\n      <ion-col col-6 >\n        <p>DRIVER NAME:</p> \n        <span *ngIf="vh[\'driver_details\'] != undefined && vh[\'driver_details\'] != null">{{vh[\'driver_details\'][\'name\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p> CONTACT NO: </p>\n        <span *ngIf="vh[\'driver_details\'] != undefined && vh[\'driver_details\'] != null">{{vh[\'driver_details\'][\'phone_number\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p> VEHICLE BODY TYPE: </p>\n        <span >{{vh[\'vehicle_type\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p> VEHICLE WEIGHT: </p>\n        <span >{{vh[\'vehicle_weight\']+" "+vh[\'vehicle_weight_type\']}}</span>\n      </ion-col>\n    </ion-row>\n    </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <div *ngIf="isselect == \'1\'">\n    <ion-grid *ngFor="let vh of vehicledrivers" (click)="selectedvehicle(vh)"  >\n    <ion-row class="vehicle-details" >\n      <ion-col col-12>\n        <h4>{{vh[\'vehicle_number\']}} \n          <span style="float: right ;">\n            <button ion-button clear color="danger" style="position: absolute;right: 13px;bottom: 15px;" (click)="presentConfirmDelete(vh)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </span>\n        </h4>\n\n\n\n        <hr>\n      </ion-col>\n      <ion-row (click)="openVehicleDetails(vh)" style="padding-left: 13px !important;">\n      <ion-col col-6 >\n        <p>DRIVER NAME:</p> \n        <span *ngIf="vh[\'driver_details\'] != undefined && vh[\'driver_details\'] != null">{{vh[\'driver_details\'][\'name\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p> CONTACT NO: </p>\n        <span *ngIf="vh[\'driver_details\'] != undefined && vh[\'driver_details\'] != null">{{vh[\'driver_details\'][\'phone_number\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p> VEHICLE BODY TYPE: </p>\n        <span >{{vh[\'vehicle_type\']}}</span>\n      </ion-col>\n      <ion-col col-6>\n        <p> VEHICLE WEIGHT: </p>\n        <span >{{vh[\'vehicle_weight\']+" "+vh[\'vehicle_weight_type\']}}</span>\n      </ion-col>\n    </ion-row>\n    </ion-row>\n\n    </ion-grid>\n  </div>\n  \n    <div class="fixed-div text-center mt-4">\n      <button ion-button round class="custom-button" (click)="openAddVehiclePage()">+ ADD NEW VEHICLE</button>\n    </div>\n\n\n  </div>\n\n\n\n</ion-content> \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-khata/vehicle-khata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */]])
    ], VehicleKhataPage);
    return VehicleKhataPage;
}());

//# sourceMappingURL=vehicle-khata.js.map

/***/ })

});
//# sourceMappingURL=4.js.map