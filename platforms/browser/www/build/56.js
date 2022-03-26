webpackJsonp([56],{

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsUpdatePageModule", function() { return ComplaintsUpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaints_update__ = __webpack_require__(948);
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

/***/ 948:
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
    function ComplaintsUpdatePage(navCtrl, navParams, codes, rest, modalCtrl, ldl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.rest = rest;
        this.modalCtrl = modalCtrl;
        this.ldl = ldl;
        this.vari = '';
        this.isSelectedBill = false;
        this.complaints = [];
        this.filtercomplaints = [];
        this.complaint = '';
        this.problems = [];
        this.selectedProblem = [];
        this.drivers = [];
        this.search = [];
        this.vehicles = [];
        this.displayfilter = false;
        this.displaysearchitems = [];
        this.searchTerm = '';
        this.getcomplaints(0, null);
        this.getVehicles();
    }
    ComplaintsUpdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComplaintsUpdatePage');
    };
    ComplaintsUpdatePage.prototype.ionViewWillEnter = function () {
        this.getcomplaints(0, null);
    };
    ComplaintsUpdatePage.prototype.change = function ($event) {
        this.vari = $event;
        this.isSelectedBill = true;
    };
    ComplaintsUpdatePage.prototype.getProblemNames = function (problems) {
        var pname = "";
        for (var i = 0; i < problems.length; i++) {
            pname += problems[i]['details']['problem_name'] + " ";
        }
        return pname;
    };
    ComplaintsUpdatePage.prototype.getVehicles = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "vehicle_owner_srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.vehicles = resp['data'];
                _this.getDrivers();
            }
        });
    };
    ComplaintsUpdatePage.prototype.clicksearchbar = function () {
        this.displayfilter = true;
        this.displaysearchitems = this.search;
    };
    ComplaintsUpdatePage.prototype.closesearchbar = function () {
        this.displayfilter = false;
        this.displaysearchitems = this.search;
    };
    ComplaintsUpdatePage.prototype.getItems = function ($event) {
        var _this = this;
        if (this.searchTerm != '') {
            this.displayfilter = true;
            this.displaysearchitems = this.search;
        }
        if (this.searchTerm == '') {
            this.displayfilter = false;
            this.displaysearchitems = this.search;
            this.filtercomplaints = this.complaints;
            for (var i = 0; i < this.filtercomplaints.length; i++) {
                this.filtercomplaints[i]['selected'] = 'false';
            }
            for (var i = 0; i < this.complaints.length; i++) {
                this.complaints[i]['selected'] = 'false';
            }
        }
        this.displaysearchitems = this.search.filter(function (wp) {
            if (_this.searchTerm != '') {
                var str = wp.id + wp.name;
                return (str.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            }
            else
                return _this.search;
        });
    };
    ComplaintsUpdatePage.prototype.clickedsearchitem = function (sr) {
        this.displayfilter = false;
        this.displaysearchitems = this.search;
        if (sr['type'] == 'driver') {
            this.searchTerm = sr['name'];
            this.filtercomplaints = [];
            for (var i = 0; i < this.complaints.length; i++) {
                if (this.complaints[i]['driver'] != undefined && this.complaints[i]['driver']['worker_id'] == sr['id']) {
                    this.filtercomplaints.push(this.complaints[i]);
                }
            }
        }
        else if (sr['type'] == 'vehicle') {
            this.filtercomplaints = [];
            this.searchTerm = sr['name'];
            for (var i = 0; i < this.complaints.length; i++) {
                if (this.complaints[i]['vehicle_id'] == sr['id']) {
                    this.filtercomplaints.push(this.complaints[i]);
                }
            }
        }
        // this.displayfilter = false;
        // this.displaysearchitems = this.search;
        // if(sr['type'] == 'driver'){
        //   this.searchTerm = sr['name'];
        //   this.filtercomplaints = [];
        //   for(let i=0;i<this.complaints.length;i++){
        //     if(this.complaints[i]['driver'] != null && this.complaints[i]['driver']['driver_id'] == sr['id']){
        //       this.filtercomplaints.push(this.complaints[i]);
        //     }
        //   }
        // } else if(sr['type'] == 'vehicle') {
        //   this.filtercomplaints = [];
        //   this.searchTerm = sr['id'];
        //   for(let i=0;i<this.complaints.length;i++){
        //     if(this.complaints[i]['vehicle_id'] == sr['id']){
        //       this.filtercomplaints.push(this.complaints[i]);
        //     }
        //   }
        // }
    };
    ComplaintsUpdatePage.prototype.getDrivers = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_WORKER, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                var dt = resp['data'];
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i]['worker_type'] == 'driver') {
                        _this.drivers.push(dt[i]);
                    }
                }
                for (var i = 0; i < _this.drivers.length; i++) {
                    var searchobj = {
                        "type": "driver",
                        "name": _this.drivers[i]['name'],
                        "id": _this.drivers[i]['worker_id']
                    };
                    _this.search.push(searchobj);
                }
                for (var i = 0; i < _this.vehicles.length; i++) {
                    var searchobj2 = {
                        "type": "vehicle",
                        "id": _this.vehicles[i]['vehicle_id'],
                        "name": _this.vehicles[i]['vehicle_number']
                    };
                    _this.search.push(searchobj2);
                }
            }
        });
    };
    ComplaintsUpdatePage.prototype.solved = function () {
        var _this = this;
        this.complaint['status'] = 'solved';
        var dt = [];
        this.problems = [];
        for (var i = 0; i < this.complaint['problems'].length; i++) {
            if (this.complaint['problems'][i]['selected']) {
                this.problems.push(this.complaint['problems'][i]['problem_id']);
            }
        }
        console.error(JSON.stringify(this.problems));
        for (var i = 0; i < this.problems.length; i++) {
            var data = {
                "complaints_id": this.complaint['complaints_id'],
                "problem_id": this.problems[i]
            };
            dt.push(data);
        }
        var lc = this.ldl.create({
            content: 'Solving the problems ...'
        });
        lc.present();
        this.rest.post(this.codes.SOLVE_COMPLAINTS, dt).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.getcomplaints(1, _this.complaint);
                lc.dismiss();
            }
        });
    };
    ComplaintsUpdatePage.prototype.openCalendarPopup2 = function () {
        var _this = this;
        var calendarModalPage = this.modalCtrl.create('CalendarModalPage');
        calendarModalPage.onDidDismiss(function (data) {
            var dt = [];
            _this.problems = [];
            for (var i = 0; i < _this.complaint['problems'].length; i++) {
                if (_this.complaint['problems'][i]['selected']) {
                    _this.problems.push(_this.complaint['problems'][i]['problem_id']);
                }
            }
            for (var i = 0; i < _this.problems.length; i++) {
                var dt2 = {
                    "complaints_id": _this.complaint['complaints_id'],
                    "problem_id": _this.problems[i],
                    "reminder_date": localStorage.getItem(_this.codes.DATE)
                };
                dt.push(dt2);
            }
            console.error(JSON.stringify(dt));
            var lc = _this.ldl.create({
                content: 'Reminding later ...'
            });
            lc.present();
            _this.rest.post(_this.codes.REMIND_LATER, dt).then(function (resp) {
                if (resp['_ReturnCode'] == '0') {
                    _this.getcomplaints(1, _this.complaint);
                    lc.dismiss();
                }
            });
        });
        calendarModalPage.present();
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
    ComplaintsUpdatePage.prototype.getcomplaints = function (v, cm) {
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
                if (v == 1) {
                    cm['selected'] = true;
                    for (var i = 0; i < _this.complaints.length; i++) {
                        if (_this.complaints[i]['complaints_id'] == cm['complaints_id']) {
                            _this.complaint = _this.complaints[i];
                        }
                    }
                    // this.complaint = cm;
                }
                _this.filtercomplaints = _this.complaints;
            }
        });
    };
    ComplaintsUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-complaints-update',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/complaints-update/complaints-update.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n\n      <ion-col col-10 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          COMPLAINTS UPDATE\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-2 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container white-section">\n\n    <!-- <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="filterItems($event)" placeholder="SEARCH PERSON NAME, VEHICLE NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div> -->\n\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="searchTerm" (click)="clicksearchbar()" (ionInput)="getItems($event)"  placeholder="SEARCH DRIVER NAME, VEHICLE NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true" (click)="closesearchbar()"></i>\n    </div>\n    <ion-card *ngIf="displayfilter">\n      <ion-card-content>\n        <ion-list >\n          <ion-item *ngFor="let sr of displaysearchitems" (click)="clickedsearchitem(sr)">\n           <div *ngIf="sr[\'type\']==\'driver\'">\n            <p style="color: #000;">{{sr[\'name\']}}</p>\n             <p>Driver</p>\n            </div>\n           <div *ngIf="sr[\'type\']==\'vehicle\'">\n              <p style="color: #000;">{{sr[\'name\']}}</p>\n              <p>Vehicle</p>\n           </div>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n\n    \n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n       \n        <!-- <a href="#home">NUMBER</a>\n        <a href="#news">VEHICLE NUMBER(DRIVER NAME)</a>\n        <a href="#contact">PROBLEM PART AND ID</a>\n        <a href="#about">DATE OF COMPLAINT/REMINDER</a>\n        <a href="#about">DETAILS/KM READING</a> -->\n        <a href="#home">NUMBER</a>\n        <a href="#news">VEHICLE NUMBER</a>\n        <a href="#news">DRIVER NAME</a>\n        <a href="#contact">PROBLEM PART & ID</a>\n        <a href="#about">COMPLAINT DATE</a>\n        <a href="#about">REMINDER DATE</a>\n        <a href="#about">DETAILS</a>\n        <a href="#about">KM READING</a>\n  \n      <div *ngFor="let cm of filtercomplaints">\n        <div [ngClass]="cm[\'selected\'] == true ? \'scrollmenu-list selected\' : \'scrollmenu-list\'" (click)="selectThis(cm)">\n          <!-- <p>Ajay Das </p>\n          <p>MN1234</p>\n          <p>12/09/2020</p>\n          <p>BILL123</p>\n          <p>RS 200</p> -->\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'complaints_number\']}} </p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'vehicle_info\'][\'vehicle_number\']}}</p>\n          <p *ngIf="cm[\'driver\'] != null">{{cm[\'driver\'][\'name\']}}</p>\n          <p *ngIf="cm[\'driver\'] == null"></p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{getProblemNames(cm[\'problems\'])}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'date_of_complaint\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'date_of_reminder\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'details\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'km_reading\']}}</p>\n     \n\n        </div>\n      </div>\n\n    </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n\n\n    <ion-list class="label-select" *ngIf="complaint[\'problems\'] != undefined">\n      <ion-item *ngFor="let problems of complaint[\'problems\']">\n        <ion-label>{{problems[\'details\'][\'problem_name\'] + "(" + problems[\'details\'][\'vehicle_part_id\']   + ")" + " - "}}\n          <span *ngIf="problems[\'is_solved\']==\'0\'" style="color: red ;">Unsolved\n            <p style="color: red; font-weight: 800 !important; font-size:8px !important;">Remind - <span *ngIf="problems[\'reminder_date\'] != undefined">{{problems[\'reminder_date\']}}</span>\n              <span *ngIf="problems[\'reminder_date\'] == undefined">{{complaint[\'date_of_reminder\']}}</span>\n            </p>\n          </span>\n          <span *ngIf="problems[\'is_solved\']==\'1\'" style="color: green ;">Solved</span></ion-label>\n        <ion-checkbox [(ngModel)]="problems[\'selected\']" [disabled]="problems[\'is_solved\']==\'1\'"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-row class="justify-content-center">\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button solved-button" (click)="solved()"> SOLVED</button>\n    </ion-col>\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button remind-later-button" (click)="openCalendarPopup2()"> REMIND LATER</button>\n    </ion-col>\n    <!-- <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button save-button"> SAVE</button>\n    </ion-col> -->\n\n  </ion-row>\n</ion-content> \n\n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/complaints-update/complaints-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"]])
    ], ComplaintsUpdatePage);
    return ComplaintsUpdatePage;
}());

//# sourceMappingURL=complaints-update.js.map

/***/ })

});
//# sourceMappingURL=56.js.map