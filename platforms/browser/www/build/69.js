webpackJsonp([69],{

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehiclePageModule", function() { return AddVehiclePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_vehicle__ = __webpack_require__(936);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddVehiclePageModule = /** @class */ (function () {
    function AddVehiclePageModule() {
    }
    AddVehiclePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_vehicle__["a" /* AddVehiclePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_vehicle__["a" /* AddVehiclePage */]),
            ],
        })
    ], AddVehiclePageModule);
    return AddVehiclePageModule;
}());

//# sourceMappingURL=add-vehicle.module.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVehiclePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(494);
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






var AddVehiclePage = /** @class */ (function () {
    function AddVehiclePage(viewController, navCtrl, navParams, modalCtrl, rest, codes, alertCtrl, message) {
        var _this = this;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.rest = rest;
        this.codes = codes;
        this.alertCtrl = alertCtrl;
        this.message = message;
        this.isInputFieldShown = false;
        // vehicle_owner_srth_id;
        this.vehicle_number = '';
        this.year_purchase = '';
        this.vehicle_model = '';
        this.vehicle_model_custom = '';
        this.vehicle_brand = '';
        this.vehicle_type = '';
        this.vehicle_image_1_id = '';
        this.vehicle_image_2_id = '';
        this.vehicle_image_3_id = '';
        this.vehicle_image_4_id = '';
        this.vehicle_weight = '';
        this.vehicle_weight_type = '';
        this.vehicle_km_reading_current = '';
        this.is_remove = '';
        this.brands = [];
        this.models = [];
        this.addWork = false;
        this.updatework = false;
        this.open_vehicle = false;
        this.vehicle_update_id = '';
        this.vehicle_id = '';
        this.vehicle_update_date = '';
        this.vehicle_user_update_id = '';
        this.vehicle_update_details = '';
        this.vehicle_update_km_reading = '';
        this.vehicle_update_image_id = '';
        this.vehicle_part_work = '';
        this.vehicle_part_work_name = '';
        this.vehicle_part_work_details = '';
        this.workdetails = [];
        this.updateVehicle = false;
        var updateworkpart = this.navParams.get('updateworkpart');
        var updatevehicle = this.navParams.get('updatevehicle');
        this.rest.getModelsBrand().then(function (resp) {
            var objs = [];
            objs = resp;
            for (var i = 0; i < objs.length; i++) {
                _this.addBrandsModel(objs[i]);
            }
            console.log(JSON.stringify(_this.brands));
        });
        if (updateworkpart == 'true') {
            var vehicledetails = this.navParams.get('vehicle');
            localStorage.setItem(this.codes.ADDED_VEHICLE_ID, vehicledetails['vehicle_id']);
            this.addWork = true;
            this.getworkdetails();
        }
        else if (updatevehicle == 'true') {
            var vehicledetails = this.navParams.get('vehicle');
            this.vehicle_number = vehicledetails['vehicle_number'];
            this.year_purchase = vehicledetails['year_purchase'];
            this.vehicle_model = vehicledetails['vehicle_model'];
            this.vehicle_model_custom = vehicledetails['vehicle_model'];
            this.vehicle_brand = vehicledetails['vehicle_brand'];
            this.vehicle_type = vehicledetails['vehicle_type'];
            this.vehicle_image_1_id = '0';
            this.vehicle_image_2_id = '0';
            this.vehicle_image_3_id = '0';
            this.vehicle_image_4_id = '0';
            this.vehicle_weight = vehicledetails['vehicle_weight'];
            this.vehicle_weight_type = vehicledetails['vehicle_weight_type'];
            this.vehicle_km_reading_current = vehicledetails['vehicle_km_reading_current'];
            this.updateVehicle = true;
        }
    }
    AddVehiclePage.prototype.selectedBrand = function () {
        for (var i = 0; i < this.brands.length; i++) {
            if (this.brands[i]['name'] == this.vehicle_brand) {
                this.models = this.brands[i]['models'];
            }
        }
    };
    AddVehiclePage.prototype.addBrands = function () {
        if (this.vehicle_model == "Add Model") {
            this.open_vehicle = true;
        }
        else {
            this.open_vehicle = false;
        }
    };
    AddVehiclePage.prototype.addBrandsModel = function (obj) {
        if (!this.isBrandPresent(obj)) {
            var brandName = {
                "name": obj['brand']
            };
            this.brands.push(brandName);
        }
        for (var i = 0; i < this.brands.length; i++) {
            if (this.brands[i]['name'] == obj['brand']) {
                if (this.brands[i]['models'] == null || this.brands[i]['models'] == undefined) {
                    this.brands[i]['models'] = [];
                }
                this.brands[i]['models'].push(obj['model']);
            }
        }
    };
    AddVehiclePage.prototype.isBrandPresent = function (obj) {
        for (var i = 0; i < this.brands.length; i++) {
            if (this.brands[i]['name'] == obj['brand'])
                return true;
        }
        return false;
    };
    AddVehiclePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddVehiclePage');
    };
    AddVehiclePage.prototype.showInputField = function () {
        // alert(this.isInputFieldShown);
        this.isInputFieldShown = true;
    };
    AddVehiclePage.prototype.selectThis = function (wd) {
        for (var i = 0; i < this.workdetails.length; i++)
            this.workdetails[i]['selected'] = false;
        this.vehicle_update_date = wd['vehicle_update_date'];
        this.vehicle_user_update_id = wd['vehicle_user_update_id'];
        this.vehicle_update_details = wd['vehicle_update_details'];
        this.vehicle_update_km_reading = wd['vehicle_update_km_reading'];
        this.vehicle_part_work = wd['vehicle_part_work'];
        this.vehicle_part_work_name = wd['vehicle_part_work_name'];
        this.vehicle_part_work_details = wd['vehicle_part_work_details'];
        this.vehicle_update_id = wd['vehicle_update_id'];
        wd['selected'] = true;
        this.updatework = true;
    };
    AddVehiclePage.prototype.openPartsWorkDialog = function () {
        var _this = this;
        var partsWorkModal = this.modalCtrl.create('PartsWorkModalPage');
        partsWorkModal.present();
        partsWorkModal.onDidDismiss(function (data) {
            //Fetch from the localstorage
            var data = JSON.parse(localStorage.getItem(_this.codes.SELECTED_WORK_PART));
            _this.vehicle_part_work = data['type'];
            _this.vehicle_part_work_details = data['details'];
            _this.vehicle_part_work_name = data['name'];
        });
    };
    AddVehiclePage.prototype.presentConfirm = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function () {
                        _this.savevehicledetails();
                    }
                }
            ]
        });
        alert.present();
    };
    AddVehiclePage.prototype.updatevehicledetails = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            vehicle_id: localStorage.getItem(this.codes.ADDED_VEHICLE_ID),
            vehicle_owner_srth_id: userdata[0]['srth_id'],
            vehicle_number: this.vehicle_number,
            year_purchase: this.year_purchase,
            vehicle_model: this.vehicle_model == 'Add Model' ? this.vehicle_model_custom : this.vehicle_model,
            vehicle_brand: this.vehicle_brand,
            vehicle_type: this.vehicle_type,
            vehicle_image_1_id: 0,
            vehicle_image_2_id: 0,
            vehicle_image_3_id: 0,
            vehicle_image_4_id: 0,
            vehicle_weight: this.vehicle_weight,
            vehicle_weight_type: this.vehicle_weight_type,
            vehicle_km_reading_current: this.vehicle_km_reading_current,
            is_remove: 0,
            last_maint_id: 'srth-app',
            opt_counter: '0'
        };
        this.rest.post(this.codes.UPDATE_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have updated your vehicle.');
                _this.navCtrl.pop();
            }
        });
    };
    AddVehiclePage.prototype.savevehicledetails = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            vehicle_owner_srth_id: userdata[0]['srth_id'],
            vehicle_number: this.vehicle_number,
            year_purchase: this.year_purchase,
            vehicle_model: this.vehicle_model == 'Add Model' ? this.vehicle_model_custom : this.vehicle_model,
            vehicle_type: this.vehicle_type,
            vehicle_image_1_id: 0,
            vehicle_image_2_id: 0,
            vehicle_image_3_id: 0,
            vehicle_image_4_id: 0,
            vehicle_weight: this.vehicle_weight,
            vehicle_weight_type: this.vehicle_weight_type,
            vehicle_km_reading_current: this.vehicle_km_reading_current,
            is_remove: 0,
            last_maint_id: 'srth-app',
            opt_counter: '0'
        };
        this.rest.post(this.codes.SAVE_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have added a vehicle. Now you may update its work history.');
                localStorage.setItem(_this.codes.ADDED_VEHICLE_ID, resp['vehicle_id']);
                // this.addWork = true;
                _this.navCtrl.pop();
            }
        });
    };
    AddVehiclePage.prototype.presentConfirmDelete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: "Are you sure you want to delete this work detail?",
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
                        _this.deleteVehicleWork();
                    }
                }
            ]
        });
        alert.present();
    };
    AddVehiclePage.prototype.updateVehicleWork = function () {
        var _this = this;
        var data = {
            "vehicle_update_id": this.vehicle_update_id,
            "vehicle_id": localStorage.getItem(this.codes.ADDED_VEHICLE_ID),
            "vehicle_update_date": this.vehicle_update_date,
            "vehicle_user_update_id": this.vehicle_user_update_id,
            "vehicle_update_details": this.vehicle_update_details,
            "vehicle_update_km_reading": this.vehicle_update_km_reading,
            "vehicle_update_image_id": this.vehicle_update_image_id,
            "vehicle_part_work": this.vehicle_part_work,
            "vehicle_part_work_name": this.vehicle_part_work_name,
            "vehicle_part_work_details": this.vehicle_part_work_details,
            "last_maint_id": "srth-app",
            "opt_counter": '0'
        };
        this.rest.post(this.codes.UPDATE_WORK_UPDATE, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have updated a work detail to your vehicle.');
                _this.vehicle_update_date = "";
                _this.vehicle_user_update_id = "";
                _this.vehicle_update_details = "";
                _this.vehicle_update_km_reading = "";
                _this.vehicle_update_image_id = 0;
                _this.vehicle_part_work_details = "";
                _this.getworkdetails();
            }
        });
    };
    AddVehiclePage.prototype.deleteVehicleWork = function () {
        var _this = this;
        var data = {
            "vehicle_update_id": this.vehicle_update_id
        };
        this.rest.post(this.codes.UPDATE_WORK_DELETE, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have deleted a work detail to your vehicle.');
                _this.getworkdetails();
            }
        });
    };
    AddVehiclePage.prototype.getworkdetails = function () {
        var _this = this;
        var data = {
            "vehicle_id": localStorage.getItem(this.codes.ADDED_VEHICLE_ID)
        };
        this.rest.post(this.codes.GET_UPDATE_WORK_DETAILS, data).then(function (resp) {
            _this.workdetails = resp['data'];
            for (var i = 0; i < _this.workdetails.length; i++) {
                _this.workdetails[i]['selected'] = false;
            }
        });
    };
    AddVehiclePage.prototype.saveVehicleWork = function () {
        var _this = this;
        var data = {
            "vehicle_id": localStorage.getItem(this.codes.ADDED_VEHICLE_ID),
            "vehicle_update_date": this.vehicle_update_date,
            "vehicle_user_update_id": this.vehicle_user_update_id,
            "vehicle_update_details": this.vehicle_update_details,
            "vehicle_update_km_reading": this.vehicle_update_km_reading,
            "vehicle_update_image_id": this.vehicle_update_image_id,
            "vehicle_part_work": this.vehicle_part_work,
            "vehicle_part_work_name": this.vehicle_part_work_name,
            "vehicle_part_work_details": this.vehicle_part_work_details,
            "last_maint_id": "srth-app",
            "opt_counter": '0'
        };
        this.rest.post(this.codes.UPDATE_WORK_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have added a work detail to your vehicle.');
                _this.vehicle_update_date = "";
                _this.vehicle_user_update_id = "";
                _this.vehicle_update_details = "";
                _this.vehicle_update_km_reading = "";
                _this.vehicle_update_image_id = 0;
                _this.vehicle_part_work_details = "";
                _this.getworkdetails();
            }
        });
    };
    AddVehiclePage.prototype.openDetailPopup = function () {
        var _this = this;
        var detailsModalPage = this.modalCtrl.create('DetailsModalPage');
        detailsModalPage.onDidDismiss(function (data) {
            _this.vehicle_update_details = localStorage.getItem(_this.codes.DETAILS);
        });
        detailsModalPage.present();
    };
    // openCameraPopup() {
    //   let cameraModalPage = this.modalCtrl.create('CameraModalPage');
    //   cameraModalPage.present();
    // }
    AddVehiclePage.prototype.openCameraPopup = function () {
        var _this = this;
        var data = {
            "brand": this.vehicle_brand
        };
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data2 = {
            "srth_id": json[0]['srth_id'],
            "worker_type": '',
            "worker_id": 0,
            "document_type": "vehicle_part",
            "type": "vehicle part",
            "file_name": json[0]['srth_id'] + "_" + Date.now() + ".jpg",
            "tags": JSON.stringify(data)
        };
        var img = {
            "image_url": this.vehicle_update_image_id
        };
        var cameraModalPage = this.modalCtrl.create('UploadImagePage', { "request": data2, 'image': img });
        cameraModalPage.onDidDismiss(function (resp) {
            if (localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined) {
                img = JSON.parse(localStorage.getItem("selectedimage"));
                _this.vehicle_update_image_id = img['image_url'];
            }
        });
        cameraModalPage.present();
    };
    AddVehiclePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-add-vehicle',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-vehicle/add-vehicle.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-6 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-car" aria-hidden="true"></i>\n          ADD VEHICLE\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube text-right">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n  <div class="segment" *ngIf="!addWork">\n    <div class="text-center text-color-primary " style="padding: 10px;">\n      <h4>VEHICLE DETAILS</h4>\n      <hr>\n    </div>\n\n\n    <div class="label-float" >\n      <input type="text"  placeholder=" " [(ngModel)]="vehicle_number" />\n      <label>VEHICLE NUMBER</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n\n\n    <ion-item class="label-float label-float-date" style="background-color: transparent !important;" >\n      <ion-datetime displayFormat="YYYY" [(ngModel)]="year_purchase"></ion-datetime>\n      <ion-label floating>YEAR OF PURCHASE</ion-label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n\n    </ion-item>\n\n   \n\n    <h4 class="text-color-primary text-left" style="font-size: 14px;">VEHICLE TYPE</h4>\n \n    <ion-row radio-group  [(ngModel)]="vehicle_type"  style="margin: 0;">\n    \n      <ion-col col-4>\n        <ion-item>\n          <ion-label><i class="fa fa-truck" aria-hidden="true" ></i></ion-label>\n          <ion-radio checked="true" value="truck"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n         \n      <ion-col col-4>\n        <ion-item>\n          <ion-label><i class="fa fa-motorcycle" aria-hidden="true"></i></ion-label>\n          <ion-radio  value="motorcycle"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n         \n      <ion-col col-4>\n        <ion-item>\n          <ion-label><i class="fa fa-taxi" aria-hidden="true"></i></ion-label>\n          <ion-radio  value="taxi"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n         \n      <ion-col col-4>\n        <ion-item>\n          <ion-label><i class="fa fa-bus" aria-hidden="true"></i></ion-label>\n          <ion-radio  value="bus"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n         \n      <ion-col col-4>\n        <ion-item>\n          <ion-label><i class="fa fa-taxi" aria-hidden="true"></i></ion-label>\n          <ion-radio  value="car"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n         \n      <ion-col col-4>\n        <ion-item>\n          <ion-label><i class="fa fa-bus" aria-hidden="true"></i></ion-label>\n          <ion-radio  value="other"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n\n \n\n    \n\n    <h4 class="text-color-primary text-left" style="font-size: 14px;">VEHICLE BRAND </h4>\n   \n\n  \n      <ion-item class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px">\n      <ion-label floating> Vehicle Brand</ion-label>\n      <ion-select interface="popover" [(ngModel)]="vehicle_brand" (ionChange)="selectedBrand()">\n          <ion-option value="{{brand[\'name\']}}" *ngFor="let brand of brands">{{brand[\'name\']}}</ion-option>\n      </ion-select>\n      </ion-item>\n    \n      <!-- <ion-col col-12 *ngFor="let brand of brands">\n        <ion-item>\n          <ion-label style="font-size: 18px !important;"> {{brand[\'name\']}}</ion-label>\n          <ion-radio value="{{brand[\'name\']}}" (ionSelect)="selectedBrand()"></ion-radio>\n        </ion-item>\n      </ion-col> -->\n    \n\n\n\n \n    <ion-item class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px">\n      <ion-label floating>VEHICLE MODEL</ion-label>\n      <ion-select interface="popover" [(ngModel)]="vehicle_model" (ionChange)="addBrands()">\n        <ion-option value="Add Model">Add Model</ion-option>\n        <div *ngFor="let model of models">\n          <ion-option value="{{model}}">{{model}}</ion-option>\n        </div>\n      </ion-select>\n    </ion-item>\n\n\n    <div class="label-float" *ngIf="open_vehicle">\n      <input type="text"  placeholder=" " [(ngModel)]="vehicle_model_custom" />\n      <label>CUSTOM VEHICLE MODEL</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n\n    <ion-row style="margin: 0 -5px;">\n      <ion-col col-6>\n        <div class="label-float" >\n          <input type="text" [(ngModel)]="vehicle_weight"  placeholder=" " />\n          <label>WEIGHT</label>\n          <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n    \n        </div>\n        <!-- <div class="label-float" >\n          <input type="text"  placeholder=" " />\n          <label>VEHICLE WEIGHT</label>\n    \n        </div>  -->\n      </ion-col>\n      <ion-col col-6>\n        <ion-item class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px">\n          <ion-label>TONS/KG</ion-label>\n          <ion-select popover [(ngModel)]="vehicle_weight_type">\n            <ion-option value="tons">tons</ion-option>\n            <ion-option value="kg">kg</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n \n\n    <!-- <ion-item>\n        \n      <ion-input type="text" placeholder="KM READING(CURRENT)"></ion-input>\n\n\n    </ion-item> -->\n\n    <div class="label-float" >\n      <input type="text" [(ngModel)]="vehicle_km_reading_current"  placeholder=" " />\n      <label>KM READING</label>\n      <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n\n    </div>\n\n    <div class="text-center mt-4">\n      <button ion-button round class="custom-button" *ngIf="!updateVehicle" (click)="presentConfirm(\'Are you sure you want to save this vehicle?\')"> SAVE VEHICLE &nbsp;   <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n      <button ion-button round class="custom-button" *ngIf="updateVehicle" (click)="updatevehicledetails()"> UPDATE VEHICLE</button>\n\n    </div>\n\n\n  </div>\n\n  <div class="segment mt-4" *ngIf="addWork">\n    <div class="text-center text-color-primary " style="padding: 30px 0 10px;">\n      <h4>WORK HISTORY</h4>\n      <hr>\n    </div>\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n       \n        <a href="#home">DATE</a>\n        <a href="#news">WORK/PART</a>\n        <a href="#contact">DETAILS</a>\n        <a href="#about">KM READING</a>\n        <a href="#about">ID</a>\n        <!-- <a href="#support">COST</a> -->\n        <a href="#blog">DETAIL</a>\n\n    \n        <div [ngClass]="wd[\'selected\'] == false ? \'scrollmenu-list\' : \'scrollmenu-list selected\'" *ngFor="let wd of workdetails"  (click)="selectThis(wd)">\n          <p>{{wd[\'vehicle_update_date\']}}</p>\n          <p>{{wd[\'vehicle_part_work\']}}</p>\n          <p>{{wd[\'vehicle_part_work_details\']}}</p>\n          <p>{{wd[\'vehicle_update_km_reading\']}}</p>\n          <p>{{wd[\'vehicle_user_update_id\']}}</p>\n          <!-- <p>RS 400</p> -->\n          <p>{{wd[\'vehicle_update_details\']}}</p>\n     \n        </div>\n  \n  \n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n\n \n\n      <ion-row style="margin: 0px">\n        <ion-col col-12>\n          \n          <div class="label-float" (click)="openPartsWorkDialog()">\n            <input type="text"  placeholder=""  [(ngModel)]="vehicle_part_work_name" />\n            <label>PARTS OR WORK</label>\n            <i class="fa fa-chevron-down" aria-hidden="true"></i>      \n          </div>\n    \n        </ion-col>\n\n       \n      </ion-row>\n\n\n    <div class="label-float" >\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="vehicle_update_date" ></ion-datetime>\n      <ion-label floating>DATE OF WORK</ion-label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div>\n\n    \n    <div class="label-float" >\n      <input type="text"  placeholder=" " [(ngModel)]="vehicle_user_update_id" />\n      <label>ID (OPTIONAL)</label>\n    </div>\n\n   \n  \n  \n\n    <div class="label-float" >\n      <input type="text"  placeholder=" " [(ngModel)]="vehicle_update_km_reading"/>\n      <label>KM READING</label>\n    </div>\n\n    <ion-row >\n      <ion-col col-9 (click)="openDetailPopup()">\n        <div class="label-float" >\n          <input type="text"  placeholder=" " [(ngModel)]="vehicle_update_details"/>\n          <label>DETAILS</label>\n        </div>\n      </ion-col>\n      <ion-col col-3>\n        <ion-row class="detail-picture">\n          <ion-col col-4 (click)="openCameraPopup()">\n            <i class="fa fa-camera" aria-hidden="true" *ngIf="vehicle_update_image_id == 0"></i>\n            <img [src]="vehicle_update_image_id" *ngIf="vehicle_update_image_id != 0"/>\n          </ion-col>    \n        </ion-row>      \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n    <ion-col col-12 style="text-align: center;" *ngIf="!updatework">\n      <button ion-button round  class="add-new-button" (click)="saveVehicleWork()">ADD NEW</button>\n    </ion-col>\n\n    <ion-col col-6 style="text-align: center;" *ngIf="updatework">\n      <button ion-button round  class="add-new-button" (click)="presentConfirmDelete()">DELETE</button>\n    </ion-col>\n    <ion-col col-6 style="text-align: center;" *ngIf="updatework">\n      <button ion-button round  class="add-new-button" (click)="updateVehicleWork()">UPDATE</button>\n    </ion-col>\n\n  </ion-row>\n\n  </div>\n   \n\n\n\n\n  </div>\n</ion-content> \n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-vehicle/add-vehicle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */]])
    ], AddVehiclePage);
    return AddVehiclePage;
}());

//# sourceMappingURL=add-vehicle.js.map

/***/ })

});
//# sourceMappingURL=69.js.map