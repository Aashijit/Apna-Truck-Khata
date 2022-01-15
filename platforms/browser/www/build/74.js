webpackJsonp([74],{

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComplaintsPageModule", function() { return AddComplaintsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_complaints__ = __webpack_require__(927);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddComplaintsPageModule = /** @class */ (function () {
    function AddComplaintsPageModule() {
    }
    AddComplaintsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_complaints__["a" /* AddComplaintsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_complaints__["a" /* AddComplaintsPage */]),
            ],
        })
    ], AddComplaintsPageModule);
    return AddComplaintsPageModule;
}());

//# sourceMappingURL=add-complaints.module.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComplaintsPage; });
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





var AddComplaintsPage = /** @class */ (function () {
    function AddComplaintsPage(navCtrl, navParams, modalCtrl, codes, rest, message) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.codes = codes;
        this.rest = rest;
        this.message = message;
        this.vari = '';
        this.isSelectedBill = false;
        this.complaints_id = '';
        this.vehicle_id = '';
        this.srth_id = '';
        this.problem_id = '';
        this.date_of_complaint = '';
        this.date_of_reminder = '';
        this.details = '';
        this.km_reading = '';
        this.status = '';
        this.last_maint_id = '';
        this.opt_counter = '';
        this.vehicle_number = '';
        this.isupdate = false;
        this.vehicles = [];
        this.complaints = [];
        this.problems = [];
        this.img = null;
        var update = this.navParams.get("update");
        if (update == "true") {
            var comp = this.navParams.get("selectedcomplaint");
            this.complaints_id = comp['complaints_id'];
            this.vehicle_id = comp['vehicle_id'];
            this.srth_id = comp['srth_id'];
            this.problem_id = comp['problem_id'];
            this.date_of_complaint = comp['date_of_complaint'];
            this.date_of_reminder = comp['date_of_reminder'];
            this.details = comp['details'];
            this.km_reading = comp['km_reading'];
            this.status = comp['status'];
            this.isupdate = true;
        }
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "vehicle_owner_srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.vehicles = resp['data'];
            }
        });
        if (this.complaints_id == '') {
            this.rest.post(this.codes.GET_LAST_COMPLAINTS_ID, {}).then(function (resp) {
                _this.complaints_id = Number(resp['data']) + 1;
            });
        }
        // this.getcomplaints();
    }
    AddComplaintsPage.prototype.updatecomplaint = function () {
        var _this = this;
        var data = {
            "complaints_id": this.complaints_id,
            "vehicle_id": this.vehicle_id,
            "srth_id": this.srth_id,
            "problem_id": this.problem_id,
            "date_of_complaint": this.date_of_complaint,
            "date_of_reminder": this.date_of_reminder,
            "details": this.details,
            "km_reading": this.km_reading,
            "status": this.status,
            "last_maint_id": "srth-app",
            "opt_counter": "0",
            "problems": this.problems
        };
        this.rest.post(this.codes.UPDATE_COMPLAINTS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.navCtrl.pop();
            }
        });
    };
    AddComplaintsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddComplaintsPage');
    };
    AddComplaintsPage.prototype.change = function (vehicleId) {
        this.isSelectedBill = true;
        for (var i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i]['vehicle_id'] == vehicleId) {
                this.vehicle_number = this.vehicles[i]['vehicle_number'];
            }
        }
    };
    AddComplaintsPage.prototype.openCameraPopup = function () {
        var _this = this;
        if (this.vehicle_id == '' || this.vehicle_id == null) {
            this.message.displayToast("Please select vehicle");
            return;
        }
        if (this.date_of_complaint == '' || this.date_of_complaint == null) {
            this.message.displayToast("Please select date of complaint");
            return;
        }
        if (this.date_of_reminder == '' || this.date_of_reminder == null) {
            this.message.displayToast("Please select date of reminder");
            return;
        }
        if (this.problem_id == '' || this.problem_id == null) {
            this.message.displayToast("Please enter problem id");
            return;
        }
        if (this.details == '' || this.details == null) {
            this.message.displayToast("Please enter details");
            return;
        }
        var data = {
            "vehicle_id": this.vehicle_id,
            "complaint_date": this.date_of_complaint,
            "reminder_date": this.date_of_reminder,
            "details": this.details
        };
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data2 = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "",
            "worker_id": 0,
            "document_type": "complaintimage",
            "type": "complaints",
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
    AddComplaintsPage.prototype.openProblemModal = function () {
        var _this = this;
        var problemModal = this.modalCtrl.create('ProblemWorkPartModalPage');
        problemModal.onDidDismiss(function (data) {
            if (localStorage.getItem("problem_id") != undefined) {
                _this.problems = JSON.parse(localStorage.getItem("problem_id"));
                var str = "";
                var str2 = "";
                for (var i = 0; i < _this.problems.length; i++) {
                    str += _this.problems[i]['problem_id'] + " ";
                    str2 += (_this.problems[i]['problem_name'] + "-" + _this.problems[i]['vehicle_part_name']) + " ";
                }
                _this.problem_id = str;
                _this.problem_id = str2;
            }
        });
        problemModal.present();
    };
    AddComplaintsPage.prototype.openDetailPopup = function () {
        var _this = this;
        var detailsModalPage = this.modalCtrl.create('DetailsModalPage');
        detailsModalPage.onDidDismiss(function (data) {
            _this.details = localStorage.getItem(_this.codes.DETAILS);
        });
        detailsModalPage.present();
    };
    AddComplaintsPage.prototype.selectThis = function (comp) {
        this.complaints_id = comp['complaints_id'];
        this.vehicle_id = comp['vehicle_id'];
        this.srth_id = comp['srth_id'];
        this.problem_id = comp['problem_id'];
        this.date_of_complaint = comp['date_of_complaint'];
        this.date_of_reminder = comp['date_of_reminder'];
        this.details = comp['details'];
        this.km_reading = comp['km_reading'];
        this.status = comp['status'];
        for (var i = 0; i < this.complaints.length; i++)
            this.complaints[i]['selected'] = 'false';
        comp['selected'] = 'true';
        this.isupdate = true;
    };
    AddComplaintsPage.prototype.getcomplaints = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_COMPLAINTS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.complaints = resp['data'];
                for (var i = 0; i < _this.complaints.length; i++) {
                    if (_this.complaints[i]['problems'] != undefined) {
                        var str = "";
                        for (var j = 0; j < _this.complaints[i]['problems'].length; j++) {
                            str += _this.complaints[i]['problems'][j]['problem_id'] + " ";
                        }
                        _this.complaints[i]['problem_id'] = str;
                    }
                }
            }
        });
    };
    AddComplaintsPage.prototype.openCalendarPopup = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.date_of_complaint = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    AddComplaintsPage.prototype.openCalendarPopup2 = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            _this.date_of_reminder = localStorage.getItem(_this.codes.DATE);
        });
        calendarModalPage.present();
    };
    AddComplaintsPage.prototype.savecomplaint = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "vehicle_id": this.vehicle_id,
            "srth_id": userinfo[0]['srth_id'],
            "problem_id": this.problem_id,
            "date_of_complaint": this.date_of_complaint,
            "date_of_reminder": this.date_of_reminder,
            "details": this.details,
            "km_reading": this.km_reading,
            "status": this.status,
            "last_maint_id": "srth-app",
            "opt_counter": "0",
            "problems": this.problems
        };
        console.error("Check the problems : " + JSON.stringify(data));
        this.rest.post(this.codes.SAVE_COMPLAINTS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                data['complaints_id'] = _this.complaints_id;
                data['selected'] = false;
                _this.problem_id = '';
                _this.date_of_complaint = '';
                _this.date_of_reminder = '';
                _this.details = '';
                _this.km_reading = '';
                _this.complaints_id++;
                _this.complaints.push(data);
                for (var i = 0; i < _this.complaints.length; i++) {
                    if (_this.complaints[i]['problems'] != undefined) {
                        var str = "";
                        for (var j = 0; j < _this.complaints[i]['problems'].length; j++) {
                            str += _this.complaints[i]['problems'][j]['problem_id'] + " ";
                        }
                        _this.complaints[i]['problem_id'] = str;
                    }
                }
            }
        });
    };
    AddComplaintsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-add-complaints',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-complaints/add-complaints.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-7 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-file" aria-hidden="true"></i>\n          ADD COMPLAINTS\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container white-section">\n\n  \n\n    <!-- <div class="scrollmenu">\n      <a href="#home">NUMBER</a>\n      <a href="#news">VEHICLE NUMBER(DRIVER NAME)</a>\n      <a href="#contact">PROBLEM PART AND ID</a>\n      <a href="#about">DATE OF COMPLAINT/REMINDER</a>\n      <a href="#about">DETAILS/KM READING</a> -->\n    <!-- <i class="fa fa-angle-down"  aria-hidden="true"></i>\n      <i class="fa fa-angle-right" aria-hidden="true"></i> -->\n\n    <!-- <div style="height: 200px;width: 400px">\n\n      </div>\n    </div> -->\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n       \n        <a href="#home">NUMBER</a>\n        <a href="#news">VEHICLE NUMBER</a>\n        <a href="#contact">PROBLEM PART & ID</a>\n        <a href="#about">COMPLAINT DATE</a>\n        <a href="#about">REMINDER DATE</a>\n        <a href="#about">DETAILS</a>\n        <a href="#about">KM READING</a>\n\n        <div *ngFor="let cm of complaints">\n        <div [ngClass]="cm[\'selected\']==\'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" (click)="selectThis(cm)" >\n          <p>{{cm[\'complaints_id\']}} </p>\n          <p>{{cm[\'vehicle_id\']}}</p>\n          <p>{{cm[\'problem_id\']}}</p>\n          <p>{{cm[\'date_of_complaint\']}}</p>\n          <p>{{cm[\'date_of_reminder\']}}</p>\n          <p>{{cm[\'details\']}}</p>\n          <p>{{cm[\'km_reading\']}}</p>\n     \n        </div>\n      </div>\n\n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n    <!-- <ion-item>\n      <ion-label>VEHICLE NUMBER &nbsp; &nbsp; &nbsp; &nbsp; DRIVER</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n    <ion-badge color="primary" style="margin-top: 13px;margin-left: 2px;padding: 7px;">Complaints # {{complaints_id}}</ion-badge>\n\n\n    <ion-item *ngIf="!isSelectedBill" class="label-select" style="margin-top: 0px !important;">\n      <ion-label floating>VEHICLE NUMBER</ion-label>\n\n      <ion-select interface="action-sheet" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;" [(ngModel)]="vehicle_id" (ionChange)="change($event)">\n        <ion-option value="{{vh[\'vehicle_id\']}}" *ngFor="let vh of vehicles">{{vh[\'vehicle_number\']}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-row class="selected-details" *ngIf="isSelectedBill">\n      <ion-col col-4 class="text-center" style="color: white;">\n        <img  src="../../assets/saarthi-icon/png/driver.png" alt="">\n      </ion-col>\n      <ion-col col-4 class="text-center"  style="color: white;">\n        <h6 style="margin-top: 16px;font-size: 14px;color: #fff;font-weight: 1000;">{{vehicle_number}}</h6>\n      </ion-col>\n      <ion-col col-4 class="text-center"> \n\n        <button ion-button round style="margin-top: 15px;" (click)="isSelectedBill=!isSelectedBill">CHANGE</button>\n      </ion-col>\n    </ion-row>\n\n    <div class="label-float" (click)="openProblemModal()">\n      <input type="text"  [(ngModel)]="problem_id" placeholder=" " />\n      <label>PROBLEM/WORK(PART & ID)</label>\n    </div>\n\n\n\n\n    <ion-row style="margin: 0 -5px;" class="complaint">\n      <ion-col col-6>\n        <div class="label-float" >\n          <input type="text" style="font-size: 14px !important;"  [(ngModel)]="date_of_complaint" (click)="openCalendarPopup()"/>\n          <label>COMPLAINT</label>\n          <i class="fa fa-calendar" style="bottom: 12px;" aria-hidden="true"></i>\n    \n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div class="label-float" >\n          <input type="text" style="font-size: 14px !important;"   [(ngModel)]="date_of_reminder" (click)="openCalendarPopup2()"/>\n          <label>REMINDER</label>\n          <i class="fa fa-calendar" style="bottom: 12px;" aria-hidden="true"></i>\n    \n        </div>\n      </ion-col>\n    </ion-row>\n  \n\n\n\n    <ion-row >\n      <ion-col col-9>\n\n        <ion-row >\n          <ion-col  col-12 (click)="openDetailPopup()" style="padding-left: 27px;margin-top: -6px;">\n            <div class="label-float" style="padding-top: 8px;">\n              <input type="text"  [(ngModel)]="details" placeholder=" " />\n              <label>DETAILS</label>\n            </div>\n    \n          </ion-col>    \n        </ion-row>  \n      </ion-col>\n      <ion-col col-2>\n        <ion-row class="detail-picture">\n          <ion-col col-12 *ngIf="img == null" (click)="openCameraPopup()">\n            <i class="fa fa-camera" aria-hidden="true"></i>\n          </ion-col>    \n          <ion-col col-12 *ngIf="img != null" (click)="openCameraPopup()">\n            <img [src]="img[\'image_url\']" style="opacity: 0.9 !important;"/>\n           <ion-icon class="edit-pencil" ios="ios-create" md="md-create" style="position: absolute;right: 19px;top: 21px;"></ion-icon>\n    \n          </ion-col>\n        </ion-row>      \n      </ion-col>\n    </ion-row>\n\n    <div class="label-float" style="padding-top: 8px;" >\n      <input type="tel" [(ngModel)]="km_reading" placeholder=" " />\n      <label>KM READING</label>\n    </div>\n\n   \n\n  </div>\n  <div class="text-center mt-4">\n    <button ion-button round class="custom-button" *ngIf="!isupdate" (click)="savecomplaint()"> SAVE</button>\n    <button ion-button round class="custom-button" *ngIf="isupdate" (click)="updatecomplaint()"> UPDATE</button>\n  </div>\n</ion-content> \n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-complaints/add-complaints.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */]])
    ], AddComplaintsPage);
    return AddComplaintsPage;
}());

//# sourceMappingURL=add-complaints.js.map

/***/ })

});
//# sourceMappingURL=74.js.map