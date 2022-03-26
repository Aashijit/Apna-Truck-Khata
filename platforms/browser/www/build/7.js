webpackJsonp([7],{

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsPageModule", function() { return VehicleDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_details__ = __webpack_require__(997);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VehicleDetailsPageModule = /** @class */ (function () {
    function VehicleDetailsPageModule() {
    }
    VehicleDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_details__["a" /* VehicleDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_details__["a" /* VehicleDetailsPage */]),
            ],
        })
    ], VehicleDetailsPageModule);
    return VehicleDetailsPageModule;
}());

//# sourceMappingURL=vehicle-details.module.js.map

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(493);
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





var VehicleDetailsPage = /** @class */ (function () {
    function VehicleDetailsPage(navCtrl, navParams, modalCtrl, rest, codes, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.rest = rest;
        this.codes = codes;
        this.photoViewer = photoViewer;
        this.isShown = false;
        this.vehicle = '';
        this.workdetails = [];
        this.driverhistory = [];
        this.vehicleworkdetails = [];
        this.paid = 0;
        this.unpaid = 0;
        this.total = 0;
        this.driverJoinedDate = '';
        this.vehicle = this.navParams.get("vehicle");
    }
    VehicleDetailsPage.prototype.getVehicleWorkDetails = function () {
        var _this = this;
        var data = {
            "vehicle_id": this.vehicle['vehicle_id']
        };
        this.rest.post(this.codes.GET_BILL_FOR_VEHICLE, data).then(function (resp) {
            _this.vehicleworkdetails = resp['data'];
            console.error(JSON.stringify(_this.vehicleworkdetails));
        });
    };
    VehicleDetailsPage.prototype.getworkdetails = function () {
        var _this = this;
        var data = {
            "vehicle_id": this.vehicle['vehicle_id']
        };
        this.rest.post(this.codes.GET_UPDATE_WORK_DETAILS, data).then(function (resp) {
            _this.workdetails = resp['data'];
            for (var i = 0; i < _this.workdetails.length; i++) {
                _this.workdetails[i]['selected'] = false;
            }
        });
    };
    VehicleDetailsPage.prototype.getVehicleDriverHistory = function () {
        var _this = this;
        var data = {
            "vehicle_id": this.vehicle['vehicle_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_BY_WORKER_ID, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.driverhistory = resp['data'];
                for (var i = 0; i < _this.driverhistory.length; i++) {
                    if (_this.driverhistory[i]['vehicle_id'] == _this.vehicle['vehicle_id']) {
                        _this.driverJoinedDate = _this.driverhistory[i]['driver_start_date'];
                    }
                }
                // for(let i=0;i<this.driverhistory.length;i++){
                //   if(this.driverhistory[i]['is_remove'] == '0'){
                //     this.vehicle_number = this.driverhistory[i]['vehicle']['vehicle_number'];
                //     this.vehicle_joining_date = this.driverhistory[i]['vehicle']['vehicle_start_date'];
                //   }
                // }
            }
        });
    };
    VehicleDetailsPage.prototype.getVehicleDetails = function () {
        var _this = this;
        var data = {
            "vehicle_id": this.vehicle['vehicle_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_BY_VEHICLE_ID, data).then(function (resp) {
            _this.vehicle = resp['data'];
        });
    };
    VehicleDetailsPage.prototype.getBillSummary = function () {
        var _this = this;
        var data = {
            "vehicle_id": this.vehicle['vehicle_id']
        };
        this.rest.post(this.codes.GET_BILL_SUMMARY, data).then(function (resp) {
            var det = resp['data'];
            for (var i = 0; i < det.length; i++) {
                if (det[i]['status'] == 'PAID') {
                    _this.paid = Number(det[i]['count']);
                }
                else {
                    _this.unpaid = Number(det[i]['count']);
                }
            }
            _this.total = _this.unpaid + _this.paid;
        });
    };
    VehicleDetailsPage.prototype.ionViewWillEnter = function () {
        this.getworkdetails();
        this.getVehicleDriverHistory();
        this.getVehicleWorkDetails();
        this.getBillSummary();
        this.getVehicleDetails();
    };
    VehicleDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehicleDetailsPage');
    };
    VehicleDetailsPage.prototype.getItems = function ($event) {
    };
    VehicleDetailsPage.prototype.goToModal = function () {
        var _this = this;
        localStorage.setItem("vehicle_details", JSON.stringify(this.vehicle));
        var profileModal = this.modalCtrl.create('DecisionModalPage');
        profileModal.present();
        profileModal.onDidDismiss(function (resp) {
            _this.ionViewWillEnter();
        });
    };
    VehicleDetailsPage.prototype.openExchangeModal = function () {
        var exchangeModal = this.modalCtrl.create('ExchangeModalPage', { 'vehicle': this.vehicle });
        exchangeModal.present();
    };
    VehicleDetailsPage.prototype.showMore = function () {
        if (this.isShown) {
            document.getElementById("fa-arrow-circle-down").classList.remove("fa-arrow-circle-up");
            document.getElementById("fa-arrow-circle-down").classList.add("fa-arrow-circle-down");
        }
        else {
            document.getElementById("fa-arrow-circle-down").classList.remove("fa-arrow-circle-down");
            document.getElementById("fa-arrow-circle-down").classList.add("fa-arrow-circle-up");
        }
        this.isShown = !this.isShown;
    };
    VehicleDetailsPage.prototype.selectThis = function (i) {
        document.getElementById(i).classList.toggle("selected");
    };
    VehicleDetailsPage.prototype.openDriverDocument = function () {
        this.navCtrl.push('DriverDocumentPage', { "driver": this.vehicle['driver_details'], "vehicle": this.vehicle, "joining": this.driverJoinedDate });
    };
    VehicleDetailsPage.prototype.openVehicleDocument = function () {
        this.navCtrl.push('VehicleDocumentPage', { "vehicle": this.vehicle });
    };
    VehicleDetailsPage.prototype.openImage = function (imageUrl) {
        this.photoViewer.show(imageUrl, "Vehicle Image", { share: true });
    };
    VehicleDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-vehicle-details',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-details/vehicle-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>      \n      <ion-col col-9 class="person-name text-center">\n        <ion-title>        \n          <i class="fa fa-car" aria-hidden="true"></i>\n          VEHICLE DETAILS\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header> \n\n\n<ion-content padding>\n  <div class="container">\n\n     \n      <ion-row class="vehicle-details-card">\n        <ion-col col-12>\n          <h4 class=" text-center">VEHICLE DETAILS</h4>\n          <hr>\n        </ion-col>\n        <ion-col col-6>\n          <p>VEHICLE NUMBER: </p>\n          <span class="text-color-primary">{{vehicle[\'vehicle_number\']}}</span>\n        </ion-col>\n        <ion-col col-1>\n          <div style="margin-top: 5px; width: 10px; height: 10px; background-color: #4EC576; border-radius: 50%;"></div>\n    \n        </ion-col>\n        <ion-col col-3>\n          DRIVER\n        </ion-col>\n        <ion-col col-6>\n         <p> TYPE: </p>\n          <span class="text-color-primary">{{vehicle[\'vehicle_type\']}}</span>\n        </ion-col>\n        <ion-col col-6>\n          <p>YEAR OF PURCHASE: </p>\n          <span class="text-color-primary">{{vehicle[\'year_purchase\']}}</span>\n        </ion-col>\n        <ion-col col-6>\n          <p>DRIVER: </p>\n          <span class="text-color-primary" *ngIf="vehicle[\'driver_details\'] != null && vehicle[\'driver_details\'] != undefined">\n            {{vehicle[\'driver_details\'][\'name\']}}\n          </span> \n        </ion-col>\n        <ion-col col-6>\n            <button ion-button round class="custom-button" (click)="goToModal()">ALLOT/<br>CHANGE/<br>REMOVE DRIVER</button>\n        </ion-col>\n        <ion-col col-6>\n          <p>VEHICLE WEIGHT: </p>\n          <span class="text-color-primary">{{vehicle[\'vehicle_weight\']+" "+vehicle[\'vehicle_weight_type\']}}</span>\n        </ion-col>\n        <ion-col col-6>\n          <p>VEHICLE MODEL: </p>\n          <span class="text-color-primary">{{vehicle[\'vehicle_model\']}}</span>\n        </ion-col>\n        <ion-col col-6>\n          <p>KM READING: </p>\n          <span class="text-color-primary">{{vehicle[\'vehicle_km_reading_current\']}}</span>\n        </ion-col>\n\n\n        <ion-col col-6 (click)="showMore()" class="text-right show-more-fa" *ngIf="workdetails.length > 0">\n          <i id="fa-arrow-circle-down" class="fa fa-arrow-circle-down"  aria-hidden="true" style="font-size: 20px;"></i>\n\n        </ion-col>\n\n     \n\n        <ion-col col-12 *ngIf="isShown">\n\n          <div class="scroll-grid" >\n            <div class="scrollmenu">\n             \n              <a href="#home">DATE</a>\n              <a href="#news">WORK/PART</a>\n              <a href="#contact">DETAILS</a>\n              <a href="#about">KM READING</a>\n              <a href="#about">ID</a>\n              <!-- <a href="#support">COST</a> -->\n              <a href="#blog">DETAIL</a>\n      \n          \n              <div [ngClass]="wd[\'selected\'] == false ? \'scrollmenu-list\' : \'scrollmenu-list selected\'" *ngFor="let wd of workdetails"  (click)="selectThis(wd)">\n                <p>{{wd[\'vehicle_update_date\']}}</p>\n                <p>{{wd[\'vehicle_part_work\']}}</p>\n                <p>{{wd[\'vehicle_part_work_details\']}}</p>\n                <p>{{wd[\'vehicle_update_km_reading\']}}</p>\n                <p>{{wd[\'vehicle_user_update_id\']}}</p>\n                <!-- <p>RS 400</p> -->\n                <p>{{wd[\'vehicle_update_details\']}}</p>\n           \n              </div>\n        \n        \n            </div>\n            <div class="show-arrows">\n              <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n        \n              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n        \n            </div>\n          </div>\n        </ion-col>\n \n\n        <!-- <ion-col col-12 class="text-center mt-4">\n          <button ion-button round class="all-button"> ALLOT/CHANGE/REMOVE DRIVER</button>\n\n        </ion-col> -->\n\n        <ion-col col-12>\n          <ion-row class="document-button">\n            <ion-col col-6 (click)="navCtrl.push(\'VehicleWorkReportPage\',{\'vehicle\':vehicle})">\n              <div>\n                VEHICLE WORK REPORT\n                <i class="fa fa-download" aria-hidden="true"></i>\n      \n              </div>\n              <!-- <button ion-button round outline small></button> -->\n            </ion-col>\n            <ion-col col-6 (click)="navCtrl.push(\'VehicleBillReportPage\',{\'vehicle\':vehicle})">\n              <div>\n                VEHICLE BILL REPORT\n                <i class="fa fa-download" aria-hidden="true"></i>\n      \n              </div>\n              <!-- <button ion-button round outline small></button> -->\n            </ion-col>\n          </ion-row>\n        </ion-col>\n         \n      </ion-row>\n\n      \n\n      <!-- <ion-row>\n        <ion-col col-6>\n          VEHICLE WORK REPORT\n        </ion-col>\n\n        <ion-col col-6>\n          VEHICLE BILL REPORT\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row class="vehicle-details-card">\n        <ion-col col-12>\n          <h4 class="text-center">DOCUMENTS</h4>\n          <hr>\n        </ion-col>\n        <ion-col col-4>\n          <div class="each-category" (click)="openDriverDocument()">\n            <i class="fa fa-user" aria-hidden="true"></i>\n\n            DRIVER\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <div class="each-category" (click)="openVehicleDocument()">\n            <i class="fa fa-truck" aria-hidden="true"></i>\n            VEHICLE\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <div class="each-category">\n            <i class="fa fa-share" aria-hidden="true"></i>\n            SHARE\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="vehicle-details-card">\n        <ion-col col-12>\n          <h4 class="text-center">DRIVER HISTORY</h4>\n          <hr>\n        </ion-col>\n\n        <!-- <ion-col col-12>\n          <div class="custom-searchbar-div" style="position: relative;">\n            <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH SHOP NAME, BILL NUMBER"></ion-searchbar>\n            <i class="fa fa-angle-down" aria-hidden="true"></i>\n          </div>\n          \n        </ion-col> -->\n        <!-- <a href="#home">NUMBER</a>\n        <a href="#news">NAME</a>\n        <a href="#contact">JOINING DATE</a>\n        <a href="#about">LEAVING DATE</a>\n        <a href="#support">REASON</a>\n        <a href="#blog">TOTAL KM</a> -->\n\n        <ion-col col-12>\n          <div class="scroll-grid">\n            <div class="scrollmenu">\n             \n              <a href="#home">VEHICLE NUMBER(S)</a>\n              <a href="#home">NAME</a>\n              <a href="#news">JOINING DATE</a>\n              <a href="#contact">LEAVING DATE</a>\n              <a href="#about">REASON/DETAILS</a>\n              <a href="#about">JOINING KM</a>\n              <a href="#about">LEAVING KM</a>\n\n          \n              <div class="scrollmenu-list" id="1" *ngFor="let drv of driverhistory">\n                <p>{{drv[\'vehicle\'][\'vehicle_number\']}}</p>\n                <p>{{drv[\'driver\'][\'name\']}}</p>\n                <p>{{drv[\'driver_start_date\']}}</p>\n                <p>{{drv[\'driver_end_date\']}}</p>\n                <p>{{drv[\'driver_start_details\']}}</p>\n                <p>{{drv[\'driver_start_km\']}} KM</p>\n                <p>{{drv[\'driver_end_km\']}} KM</p>\n              </div>\n        \n            \n            </div>\n            <div class="show-arrows">\n              <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n        \n              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n        \n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      \n      <ion-row class="vehicle-details-card">\n        <ion-col col-12>\n          <h4 class="text-center">WORK HISTORY</h4>\n          <hr>\n        </ion-col>\n        <ion-col col-4>\n          <div class="each-work-category">\n            <p>TOTAL WORK</p>\n            <h6 class="total-work">{{total}}</h6>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <div class="each-work-category">\n            <p>TOTAL PAID</p>\n            <h6 class="total-paid">{{paid}}</h6>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <div class="each-work-category">\n            <p>TOTAL DUE</p>\n            <h6 class="total-due">{{unpaid}}</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n\n\n      <!-- <div class="custom-searchbar-div" style="position: relative;">\n        <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH SHOP NAME, BILL NUMBER"></ion-searchbar>\n        <i class="fa fa-angle-down" aria-hidden="true"></i>\n      </div> -->\n        \n\n      <div class="text-center" style="padding-top: 20px;">\n        <button ion-button round class="exchange-button" (click)="openExchangeModal()">EXCHANGE PARTS</button>\n      </div>\n\n\n      <div class="scroll-grid" >\n        <div class="scrollmenu work-history">\n        \n        <!-- <a href="#home">PROBLEM</a>\n        <a href="#home">WORK (PART & ID)</a> -->\n        <a href="#news">DATE</a>\n        <a href="#contact">BILL NUMBER</a>\n        <a href="#about">PERSON NAME</a>\n        <!-- <a href="#support">REPAIR</a> -->\n        <!-- <a href="#support">PART / DOC / MECHANIC</a> -->\n        <!-- <a href="#support">DOC</a> -->\n        <!-- <a href="#blog">PART</a> -->\n        <!-- <a href="#blog">LOAD ID(NEW)</a> -->\n        <!-- <a href="#tools">QUANTITY</a>\n        <a href="#tools">RATE</a> -->\n        <a href="#tools">TOTAL</a>\n        <a href="#tools">DETAILS</a> \n        <a href="#tools">IMAGE</a> \n\n          <div class="scrollmenu-list" *ngFor="let vhc of vehicleworkdetails" id="5" (click)="selectThis(5)">\n            <!-- <p>{{vhc[\'problem\']}}</p>\n            <p>{{vhc[\'new_part_name\']}}</p> -->\n            <p>{{vhc[\'date\']}}</p>\n            <p>{{vhc[\'bill_number\']}}</p>\n            <p>{{vhc[\'person\']}}</p>\n            <!-- <p>{{vhc[\'quantity\']}}</p>\n            <p>{{vhc[\'rate\']}}</p> -->\n            <p>{{vhc[\'total_amount\']}}</p>\n            <p>{{vhc[\'bill_details\']}}</p>\n            <p *ngIf="vhc[\'bill_image\'] != null" (click)="openImage(vhc[\'bill_image\'])">\n              <img [src]="vhc[\'bill_image\']" style="width: 10% !important;"/>\n            </p>\n          </div>\n        </div>\n        <div class="show-arrows">\n          <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n    \n          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n    \n        </div>\n      </div>\n    \n\n\n\n  \n      <!-- <ion-row class="driver-modal">\n        <ion-col col-12 class="text-center driver-modal-header">\n          DRIVER\n        </ion-col>\n        <ion-col col-12>\n          <ion-list radio-group [(ngModel)]="autoManufacturers">\n\n          <ion-row>\n            <ion-col col-4>\n              <ion-item>\n                <ion-label>CHANGE</ion-label>\n                <ion-radio value="change"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4>\n              <ion-item>\n                <ion-label>ALOT</ion-label>\n                <ion-radio value="alot"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col col-4>\n              <ion-item>\n                <ion-label>REMOVE</ion-label>\n                <ion-radio value="remove"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        \n\n       \n          \n          </ion-list>\n    \n        </ion-col>\n       \n       \n  \n        <ion-col col-12 class="text-center">\n          <button ion-button round class="custom-button">SAVE</button>\n        </ion-col>\n    \n  \n      </ion-row> -->\n\n\n    \n  \n \n\n\n    \n\n  </div>\n</ion-content>  \n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/vehicle-details/vehicle-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], VehicleDetailsPage);
    return VehicleDetailsPage;
}());

//# sourceMappingURL=vehicle-details.js.map

/***/ })

});
//# sourceMappingURL=7.js.map