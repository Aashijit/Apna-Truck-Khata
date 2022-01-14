webpackJsonp([72],{

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriverExpensesPageModule", function() { return AddDriverExpensesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_driver_expenses__ = __webpack_require__(927);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddDriverExpensesPageModule = /** @class */ (function () {
    function AddDriverExpensesPageModule() {
    }
    AddDriverExpensesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_driver_expenses__["a" /* AddDriverExpensesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_driver_expenses__["a" /* AddDriverExpensesPage */]),
            ],
        })
    ], AddDriverExpensesPageModule);
    return AddDriverExpensesPageModule;
}());

//# sourceMappingURL=add-driver-expenses.module.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDriverExpensesPage; });
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






var AddDriverExpensesPage = /** @class */ (function () {
    function AddDriverExpensesPage(codes, viewController, navCtrl, navParams, modalCtrl, rest, message) {
        var _this = this;
        this.codes = codes;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.rest = rest;
        this.message = message;
        this.vari = '';
        this.isSelectedBill = false;
        this.name = '';
        this.reason = '';
        this.bills = [];
        this.drivers = [];
        this.bill_id = null;
        this.worker_id = '';
        this.person_shop_name = '';
        this.srth_id = '';
        this.vehicle_id = '';
        this.km_reading = '';
        this.bill_date = '';
        this.worker_type = '';
        this.total_bill = '';
        this.bill_image_id = '';
        this.bill_details = '';
        this.last_maint_id = '';
        this.opt_counte = '';
        this.rejoin_date = '';
        this.is_update = false;
        this.img = null;
        this.vehicle_number = '';
        var upd = this.navParams.get("update");
        if (upd == 'true') {
            var bill = JSON.parse(localStorage.getItem("bill"));
            this.bill_id = bill['bill_id'];
            this.worker_id = bill['worker_id'];
            this.person_shop_name = bill['person_shop_name'];
            this.srth_id = bill['srth_id'];
            this.vehicle_id = bill['vehicle_id'];
            this.km_reading = bill['km_reading'];
            this.bill_date = bill['bill_date'];
            this.worker_type = bill['worker_type'];
            this.total_bill = bill['total_bill'];
            this.bill_image_id = bill['bill_image_id'];
            this.bill_details = bill['bill_details'];
            this.reason = bill['reason'];
            this.is_update = true;
        }
        this.getDrivers();
        if (this.bill_id == null) {
            this.rest.post(this.codes.GET_LAST_BILL_ID, {}).then(function (resp) {
                if (resp['_ReturnCode'] == '0') {
                    _this.bill_id = resp['data'];
                }
            });
        }
    }
    AddDriverExpensesPage.prototype.openCalendarPopup = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.bill_date = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    AddDriverExpensesPage.prototype.openCalendarPopup1 = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.rejoin_date = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    AddDriverExpensesPage.prototype.getDrivers = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            var workers = resp['data'];
            if (resp['_ReturnCode'] == '0') {
                for (var i = 0; i < workers.length; i++) {
                    if (workers[i]['worker_type'] == 'driver') {
                        _this.drivers.push(workers[i]);
                    }
                }
            }
        });
    };
    AddDriverExpensesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddDriverExpensesPage');
    };
    AddDriverExpensesPage.prototype.change = function (event) {
        if (event == 'add') {
            this.navCtrl.push('AddDriverPage', { 'type': 'driver' });
            return;
        }
        this.isSelectedBill = true;
        for (var i = 0; i < this.drivers.length; i++)
            if (this.drivers[i]['worker_id'] == event) {
                if (this.drivers[i]['vehicle'] == undefined) {
                    this.message.displayToast('Please assign the driver to a car!');
                    break;
                }
                this.name = this.drivers[i]['name'];
                this.vehicle_id = this.drivers[i]['vehicle']['vehicle_id'];
                this.vehicle_number = this.drivers[i]['vehicle']['vehicle_number'];
                break;
            }
    };
    AddDriverExpensesPage.prototype.openDriverDialog = function () {
        // this.selectRef.open();
    };
    AddDriverExpensesPage.prototype.openReasonDialog = function () {
        var _this = this;
        var reasonModal = this.modalCtrl.create('ReasonModalPage');
        reasonModal.present();
        reasonModal.onDidDismiss(function (data) {
            //Fetch from the localstorage
            var data = JSON.parse(localStorage.getItem(_this.codes.SELECTED_REASON));
            _this.reason = data;
        });
    };
    AddDriverExpensesPage.prototype.openDetailPopup = function () {
        var _this = this;
        var detailsModalPage = this.modalCtrl.create('DetailsModalPage');
        detailsModalPage.onDidDismiss(function (data) {
            _this.bill_details = localStorage.getItem(_this.codes.DETAILS);
        });
        detailsModalPage.present();
    };
    AddDriverExpensesPage.prototype.openCameraPopup = function () {
        var _this = this;
        if (this.vehicle_id == '' || this.vehicle_id == null) {
            this.message.displayToast("Please select vehicle");
            return;
        }
        if (this.bill_date == '' || this.bill_date == null) {
            this.message.displayToast("Please enter bill date");
            return;
        }
        if (this.bill_details == '' || this.bill_details == null) {
            this.message.displayToast("Please enter bill details");
            return;
        }
        var data = {
            "person_shop_name": this.person_shop_name,
            "vehicle_id": this.vehicle_id,
            "bill_date": this.bill_date,
            "worker_type": 'shop',
            "bill_details": this.bill_details
        };
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data2 = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "driver",
            "worker_id": this.worker_id,
            "document_type": "driverbill",
            "type": "bills",
            "file_name": json[0]['srth_id'] + "_" + Date.now() + ".jpg",
            "tags": JSON.stringify(data)
        };
        var cameraModalPage = this.modalCtrl.create('UploadImagePage', { "request": data2, 'image': this.img });
        cameraModalPage.onDidDismiss(function (resp) {
            if (localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined)
                _this.img = JSON.parse(localStorage.getItem("selectedimage"));
            else
                _this.img = null;
        });
        cameraModalPage.present();
    };
    AddDriverExpensesPage.prototype.saveExpense = function (v) {
        var _this = this;
        if (v == '1')
            this.total_bill = -1 * Number(this.total_bill);
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "person_shop_name": "",
            "srth_id": json[0]['srth_id'],
            "vehicle_id": this.vehicle_id,
            "reason": this.reason,
            "km_reading": this.km_reading,
            "bill_date": this.bill_date,
            "worker_type": 'driver',
            "worker_id": this.worker_id,
            "total_bill": this.total_bill,
            "bill_image_id": this.img != null ? this.img['image_id'] : '0',
            "bill_details": this.bill_details,
            "last_maint_id": 'srth-app',
            "opt_counter": '0'
        };
        this.rest.post(this.codes.ADD_EXPENSE_BILL, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                resp['data']['vehicle_number'] = _this.vehicle_number;
                _this.bills.push(resp['data']);
                _this.vehicle_id = '';
                _this.km_reading = '';
                _this.bill_date = '';
                _this.rejoin_date = '';
                _this.reason = '';
                _this.total_bill = '';
                _this.bill_image_id = '';
                _this.bill_details = '';
                _this.img = null;
                _this.bill_id = Number(resp['_LatestBillId']) + 1;
                for (var i = 0; i < _this.bills.length; i++)
                    _this.bills[i]['selected'] = 'false';
            }
        });
    };
    AddDriverExpensesPage.prototype.selectThis = function (bill) {
        for (var i = 0; i < this.bills.length; i++)
            this.bills[i]['selected'] = 'false';
        bill['selected'] = 'true';
        this.bill_id = bill['bill_id'];
        this.worker_id = bill['worker_id'];
        this.person_shop_name = bill['person_shop_name'];
        this.srth_id = bill['srth_id'];
        this.vehicle_id = bill['vehicle_id'];
        this.km_reading = bill['km_reading'];
        this.bill_date = bill['bill_date'];
        this.worker_type = bill['worker_type'];
        this.total_bill = bill['total_bill'];
        this.bill_image_id = bill['bill_image_id'];
        this.bill_details = bill['bill_details'];
        this.reason = bill['reason'];
        this.is_update = true;
    };
    AddDriverExpensesPage.prototype.updateExpense = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "bill_id": this.bill_id,
            "person_shop_name": "",
            "srth_id": json[0]['srth_id'],
            "vehicle_id": this.vehicle_id,
            "reason": this.reason,
            "km_reading": this.km_reading,
            "bill_date": this.bill_date,
            "worker_type": 'driver',
            "worker_id": this.worker_id,
            "total_bill": this.total_bill,
            "bill_image_id": this.img != null ? this.img['image_id'] : '0',
            "bill_details": this.bill_details,
            "last_maint_id": 'srth-app',
            "opt_counter": '0'
        };
        this.rest.post(this.codes.UPDATE_BILL_EXPENSE, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('The bill has been successfully updated');
                _this.vehicle_id = '';
                _this.km_reading = '';
                _this.bill_date = '';
                _this.rejoin_date = '';
                _this.reason = '';
                _this.total_bill = '';
                _this.bill_image_id = '';
                _this.bill_details = '';
                _this.img = null;
                for (var i = 0; i < _this.bills.length; i++) {
                    data['vehicle_number'] = _this.vehicle_number;
                    if (_this.bills[i]['bill_id'] == _this.bill_id) {
                        _this.bills[i] = data;
                    }
                    _this.bills[i]['selected'] = 'false';
                }
                _this.bill_id = Number(resp['_LatestBillId']) + 1;
            }
        });
    };
    AddDriverExpensesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-add-driver-expenses',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-driver-expenses/add-driver-expenses.html"*/'<!--\n  Generated template for the AddDriverExpensesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <!-- <ion-col col-2 class="custom-back-button"> -->\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      <!-- </ion-col> -->\n    \n      <ion-col col-10 class="person-name text-center">\n        <ion-title>        \n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          ADD DRIVER EXPENSES\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-2 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container white-section">\n\n    <!-- <div class="scrollmenu">\n      <a href="#home">BILL NUMBER</a>\n      <a href="#news">DRIVER NAME</a>\n      <a href="#contact">VEHICLE NUMBER</a>\n      <a href="#about">REASON</a>\n      <a href="#about">DATE-START/END</a>\n      <a href="#support">COST</a>\n      <a href="#blog">DETAIL</a>\n      <a href="#tools">KM READING</a> -->\n            <!-- <i class="fa fa-angle-down"  aria-hidden="true"></i>\n      <i class="fa fa-angle-right" aria-hidden="true"></i> -->\n\n      <!-- <div style="height: 200px;width: 400px">\n\n      </div>\n    </div> -->\n\n\n    <div class="mt-4">\n\n\n    </div>\n\n    \n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n\n        <a href="#home">BILL NUMBER</a>\n        <a href="#news">DRIVER NAME</a>\n        <a href="#contact">VEHICLE NUMBER</a>\n        <a href="#about">REASON</a>\n        <a href="#support">COST</a>\n        <a href="#blog">DETAIL</a>\n        <a href="#tools">KM READING</a>\n         \n        <div [ngClass]="bl[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'"  *ngFor="let bl of bills">\n        <div [ngClass]="bl[\'total_bill\'] < 0 ? \'green\' : \'red\'"  (click)="selectThis(bl)" >\n          <p>{{bl[\'bill_id\']}}</p>\n          <p>{{bl[\'worker_id\']}}</p>\n          <p>{{bl[\'vehicle_number\']}}</p>\n          <p>{{bl[\'reason\']}}</p>\n          <p>{{bl[\'total_bill\']}}</p>\n          <p>{{bl[\'km_reading\']}}</p>\n          <p>{{bl[\'bill_details\']}}</p>\n        </div>\n      </div>\n\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n\n        <!-- <button ion-button class="custom-button-u" *ngIf="" (click)="update()">Update</button>\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="presentConfirmDelete()">Delete</button>\n   -->\n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n    \n\n    <ion-badge color="primary" style="margin-top: 13px;margin-left: 2px;padding: 7px;">Bill # {{bill_id}}</ion-badge>\n\n        \n    <ion-item *ngIf="!isSelectedBill" class="label-select">\n      <ion-label floating>SELECT DRIVER</ion-label>\n      <!--  -->\n      <ion-select interface="action-sheet" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important" #driverselect [(ngModel)]="worker_id" (ionChange)="change($event)" >\n        <ion-option *ngFor="let dr of drivers" value="{{dr[\'worker_id\']}}">{{dr[\'name\']}} <span *ngIf="dr[\'vehicle\']!=undefined">-  {{dr[\'vehicle\'][\'vehicle_number\']}}</span></ion-option>\n\n        <ion-option value="add">Add Driver</ion-option>\n\n      </ion-select>\n    </ion-item>\n\n\n\n \n    <ion-row class="selected-details" *ngIf="isSelectedBill">\n      <ion-col col-4 class="text-center" style="color: white;">\n        <img  src="../../assets/saarthi-icon/png/driver.png" alt="">\n      </ion-col>\n      <ion-col col-4 class="text-center"  style="color: white;">\n        <h6 style="margin-top: 16px;font-size: 14px;color: #fff;font-weight: 1000;">{{name}}<br> {{vehicle_number}}</h6>\n      </ion-col>\n      <ion-col col-4 class="text-center"> \n\n        <button ion-button round style="margin-top: 15px;" (click)="isSelectedBill = !isSelectedBill">CHANGE</button>\n      </ion-col>\n    </ion-row>\n    <!-- (click)="" -->\n   \n\n\n    <div class="label-float" >\n      <input type="text" [(ngModel)]="reason" (click)="openReasonDialog()"  placeholder=" " />\n      <label>REASON</label>\n     <i class="fa fa-chevron-down" aria-hidden="true"></i>\n    </div>\n\n\n\n\n\n    <div class="label-float" >\n      <input type="text" [(ngModel)]="bill_date" (click)="openCalendarPopup()"/>\n      <label>DATE OF EVENT</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div>\n\n    <div class="label-float" *ngIf="reason == \'Holiday\'" >\n      <input type="text" [(ngModel)]="rejoin_date" (click)="openCalendarPopup1()"/>\n      <label>REJOIN DATE</label>\n      <i class="fa fa-calendar" aria-hidden="true"></i>\n    </div>\n\n\n    <div class="label-float" >\n      <input type="tel" [(ngModel)]="total_bill"  placeholder=" " />\n      <label>₹ COST</label>\n      <i class="fa fa-money" aria-hidden="true"></i>\n\n    </div>\n\n\n\n    <div class="label-float" >\n      <input type="tel" [(ngModel)]="km_reading" placeholder=" " />\n      <label>KM READING</label>\n    </div>\n\n    <ion-row >\n      <ion-col col-9>\n\n        <ion-row >\n          <ion-col style="margin-left: 20px;margin-top: -11px;" col-10  (click)="openDetailPopup()">\n            <div class="label-float" >\n              <input type="text" [(ngModel)]="bill_details" placeholder=" " />\n              <label>DETAILS</label>\n              <!-- <i class="fa fa-money" aria-hidden="true"></i> -->\n        \n            </div>\n            \n    \n          </ion-col>    \n        </ion-row>  \n      </ion-col>\n      <ion-col col-2>\n        <ion-row class="detail-picture">\n          <ion-col col-4   *ngIf="img == null" (click)="openCameraPopup()">\n            <i class="fa fa-camera" aria-hidden="true"></i>\n            <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n    \n          </ion-col>    \n          <ion-col col-12 *ngIf="img != null" (click)="openCameraPopup()">\n            <img [src]="img[\'image_url\']" style="opacity: 0.3 !important;"/>\n           <ion-icon class="edit-pencil" ios="ios-create" md="md-create" style="position: absolute;right: 19px;top: 21px;"></ion-icon>\n    \n          </ion-col>\n        </ion-row>      \n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row style="margin: 0;">\n      <ion-col col-8> -->\n        <!-- <div class="label-float" >\n          <input type="text"  placeholder=" " />\n          <label>DETAILS</label>\n          <i class="fa fa-money" aria-hidden="true"></i>\n    \n        </div> -->\n        <!-- <ion-row >\n          <ion-col col-10 class="detail-popup" (click)="openDetailPopup()">\n            DETAILS -->\n            <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n<!--     \n          </ion-col>    \n        </ion-row>  \n      </ion-col>\n      <ion-col col-4>\n        <ion-row class="detail-picture">\n          <ion-col col-4 (click)="openCameraPopup()">\n            <i class="fa fa-camera" aria-hidden="true"></i> -->\n            <!-- <ion-icon class="edit-pencil" ios="ios-create" md="md-create"></ion-icon> -->\n    \n          <!-- </ion-col>    \n        </ion-row>      \n      </ion-col>\n    </ion-row> -->\n\n\n\n\n    <!-- <ion-item >\n      \n      <ion-input type="text" placeholder="KM READING"></ion-input>\n\n\n    </ion-item> -->\n\n\n    <!-- <div class="mt-4 text-right">\n\n      <button ion-button round class="share-button">SHARE &nbsp;<ion-icon ios="ios-share-alt" md="md-share-alt"></ion-icon>\n      </button>\n\n    \n\n    </div> -->\n\n  \n \n  </div>\n\n  <ion-row>\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="add-button" (click)="saveExpense(\'0\')" *ngIf="!is_update"> ADD <br>EXPENSE</button>\n    </ion-col>\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="monthy-button" (click)="saveExpense(\'1\')" *ngIf="!is_update"> MINUS <br>EXPENSE</button>\n    </ion-col>\n\n    <!-- <ion-col col-12 class="text-center">\n      <button ion-button round class="custom-button" *ngIf="is_update" (click)="updateExpense()">Update</button>\n    </ion-col> -->\n\n    <ion-col col-6 *ngIf="is_update" class="text-center">\n      <button ion-button round class="add-button" (click)="updateExpense()" > ADD <br>EXPENSE</button>\n    </ion-col>\n    <ion-col col-6 *ngIf="is_update" class="text-center">\n      <button ion-button round class="monthy-button" (click)="updateExpense()" > MINUS <br>EXPENSE</button>\n    </ion-col>\n\n  </ion-row>\n</ion-content> \n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-driver-expenses/add-driver-expenses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */]])
    ], AddDriverExpensesPage);
    return AddDriverExpensesPage;
}());

//# sourceMappingURL=add-driver-expenses.js.map

/***/ })

});
//# sourceMappingURL=72.js.map