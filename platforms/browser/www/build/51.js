webpackJsonp([51],{

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsUpdatePageModule", function() { return ComplaintsUpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaints_update__ = __webpack_require__(938);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComplaintsUpdatePageModule = /** @class */ (function () {
    function ComplaintsUpdatePageModule() {
    }
    ComplaintsUpdatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__complaints_update__["a" /* ComplaintsUpdatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__complaints_update__["a" /* ComplaintsUpdatePage */]),
            ],
        })
    ], ComplaintsUpdatePageModule);
    return ComplaintsUpdatePageModule;
}());

//# sourceMappingURL=complaints-update.module.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsUpdatePage; });
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




var ComplaintsUpdatePage = /** @class */ (function () {
    function ComplaintsUpdatePage(navCtrl, navParams, codes, rest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.rest = rest;
        this.vari = '';
        this.isSelectedBill = false;
        this.complaints = [];
        this.filtercomplaints = [];
        this.complaint = '';
        this.problems = [];
        this.selectedProblem = [];
        this.getcomplaints();
    }
    ComplaintsUpdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComplaintsUpdatePage');
    };
    ComplaintsUpdatePage.prototype.ionViewWillEnter = function () {
        this.getcomplaints();
    };
    ComplaintsUpdatePage.prototype.change = function ($event) {
        this.vari = $event;
        this.isSelectedBill = true;
    };
    ComplaintsUpdatePage.prototype.solved = function () {
        this.complaint['status'] = 'solved';
        var dt = [];
        console.error(JSON.stringify(this.problems));
        for (var i = 0; i < this.problems.length; i++) {
            var data = {
                "complaints_id": this.complaint['complaints_id'],
                "problem_id": this.problems[i]
            };
            dt.push(data);
        }
        this.rest.post(this.codes.SOLVE_COMPLAINTS, dt).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
            }
        });
    };
    ComplaintsUpdatePage.prototype.filterItems = function (event) {
    };
    ComplaintsUpdatePage.prototype.selectThis = function (cm) {
        for (var i = 0; i < this.complaints.length; i++) {
            this.complaints[i]['selected'] = false;
        }
        cm['selected'] = true;
        this.complaint = cm;
    };
    ComplaintsUpdatePage.prototype.getcomplaints = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_COMPLAINTS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.complaints = resp['data'];
                for (var i = 0; i < _this.complaints.length; i++) {
                    _this.complaints[i]['selected'] = false;
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
    ComplaintsUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-complaints-update',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/complaints-update/complaints-update.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n\n      <ion-col col-10 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          COMPLAINTS UPDATE\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-2 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container white-section">\n\n    <!-- <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="filterItems($event)" placeholder="SEARCH PERSON NAME, VEHICLE NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div> -->\n\n    \n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n       \n        <!-- <a href="#home">NUMBER</a>\n        <a href="#news">VEHICLE NUMBER(DRIVER NAME)</a>\n        <a href="#contact">PROBLEM PART AND ID</a>\n        <a href="#about">DATE OF COMPLAINT/REMINDER</a>\n        <a href="#about">DETAILS/KM READING</a> -->\n        <a href="#home">NUMBER</a>\n        <a href="#news">VEHICLE NUMBER</a>\n        <a href="#contact">PROBLEM PART & ID</a>\n        <a href="#about">COMPLAINT DATE</a>\n        <a href="#about">REMINDER DATE</a>\n        <a href="#about">DETAILS</a>\n        <a href="#about">KM READING</a>\n  \n      <div *ngFor="let cm of complaints">\n        <div [ngClass]="cm[\'selected\'] == true ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" (click)="selectThis(cm)">\n          <!-- <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>BILL123</p>\n          <p>RS 200</p> -->\n          <p>{{cm[\'complaints_id\']}} </p>\n          <p>{{cm[\'vehicle_id\']}}</p>\n          <p>{{cm[\'problem_id\']}}</p>\n          <p>{{cm[\'date_of_complaint\']}}</p>\n          <p>{{cm[\'date_of_reminder\']}}</p>\n          <p>{{cm[\'details\']}}</p>\n          <p>{{cm[\'km_reading\']}}</p>\n     \n\n        </div>\n      </div>\n\n    </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n   <!-- <ion-item *ngIf="!isSelectedBill" class="label-select" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px; margin-top: 13px"> \n      <ion-label>VEHICLE NUMBER</ion-label>\n\n      <ion-select [(ngModel)]="document" (ionChange)="change($event)">\n        <ion-option value="Aadharcard">PERSON 1</ion-option>\n        <ion-option value="Pancard">PERSON 2</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n    <!-- <ion-row class="selected-details" *ngIf="vari  == \'Aadharcard\' || vari == \'Pancard\'">\n      <ion-col col-4 class="text-center" style="color: white;">\n        <img  src="../../assets/saarthi-icon/png/driver.png" alt="">\n      </ion-col>\n      <ion-col col-4 class="text-center"  style="color: white;">\n        <h6 style="margin-top: 16px;font-size: 14px;color: #fff;font-weight: 1000;">ALEX DUE <br> VEHICLE NUMBER</h6>\n      </ion-col>\n      <ion-col col-4 class="text-center"> \n\n        <button ion-button round style="margin-top: 15px;">CHANGE</button>\n      </ion-col>\n    </ion-row> -->\n    \n    <!--   -->\n    <ion-item class="label-select" *ngIf="complaint[\'problems\'] != undefined">\n\n      <ion-label floating>PROBLEM IDs</ion-label>\n      <ion-select multiple="true" style="border: 2px solid #3951b2; color: #3951b2; border-radius: 5px;font-size: 16px;padding-top: 12px;padding-left: 10px; padding-bottom: 13px !important;"  [(ngModel)]="problems" >\n        <ion-option *ngFor="let problems of complaint[\'problems\']" value="{{problems[\'problem_id\']}}">\n          {{problems[\'problem_id\'] + " - "}}\n          <span *ngIf="problems[\'is_solved\']==\'0\'" style="color: red ;">Unsolved</span>\n          <span *ngIf="problems[\'is_solved\']==\'1\'" style="color: green ;">Solved</span>\n        </ion-option>\n      </ion-select>\n\n    </ion-item>\n\n  \n\n\n  </div>\n\n  <ion-row class="justify-content-center">\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button solved-button" (click)="solved()"> SOLVED</button>\n    </ion-col>\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button remind-later-button" (click)="navCtrl.pop()"> REMIND LATER</button>\n    </ion-col>\n    <!-- <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button save-button"> SAVE</button>\n    </ion-col> -->\n\n  </ion-row>\n</ion-content> \n\n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/complaints-update/complaints-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */]])
    ], ComplaintsUpdatePage);
    return ComplaintsUpdatePage;
}());

//# sourceMappingURL=complaints-update.js.map

/***/ })

});
//# sourceMappingURL=51.js.map