webpackJsonp([56],{

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintsKhataPageModule", function() { return ComplaintsKhataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaints_khata__ = __webpack_require__(943);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComplaintsKhataPageModule = /** @class */ (function () {
    function ComplaintsKhataPageModule() {
    }
    ComplaintsKhataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__complaints_khata__["a" /* ComplaintsKhataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__complaints_khata__["a" /* ComplaintsKhataPage */]),
            ],
        })
    ], ComplaintsKhataPageModule);
    return ComplaintsKhataPageModule;
}());

//# sourceMappingURL=complaints-khata.module.js.map

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsKhataPage; });
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




var ComplaintsKhataPage = /** @class */ (function () {
    function ComplaintsKhataPage(alertCtrl, navCtrl, navParams, rest, codes, mdl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.mdl = mdl;
        this.complaints = [];
        this.filtercomplaints = [];
        this.nocomplaints = true;
        this.problemcomplaints = [];
        this.solvedcomplaints = [];
        this.updatecomplaint = false;
        this.complaint = '';
        this.drivers = [];
        this.vehicles = [];
        this.ok = false;
        this.problem = false;
        this.all = true;
        this.search = [];
        this.displayfilter = false;
        this.displaysearchitems = [];
        this.searchTerm = '';
    }
    ComplaintsKhataPage.prototype.ionViewWillEnter = function () {
        this.getcomplaints();
        this.getVehicles();
        this.updatecomplaint = false;
    };
    ComplaintsKhataPage.prototype.getVehicles = function () {
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
    ComplaintsKhataPage.prototype.clicksearchbar = function () {
        this.displayfilter = true;
        this.displaysearchitems = this.search;
    };
    ComplaintsKhataPage.prototype.closesearchbar = function () {
        this.displayfilter = false;
        this.displaysearchitems = this.search;
    };
    ComplaintsKhataPage.prototype.clickedsearchitem = function (sr) {
        this.displayfilter = false;
        this.displaysearchitems = this.search;
        if (sr['type'] == 'driver') {
            this.searchTerm = sr['name'];
            this.filtercomplaints = [];
            for (var i = 0; i < this.complaints.length; i++) {
                if (this.complaints[i]['driver'] != null && this.complaints[i]['driver']['driver_id'] == sr['id']) {
                    this.filtercomplaints.push(this.complaints[i]);
                }
            }
        }
        else if (sr['type'] == 'vehicle') {
            this.filtercomplaints = [];
            this.searchTerm = sr['id'];
            for (var i = 0; i < this.complaints.length; i++) {
                if (this.complaints[i]['vehicle_id'] == sr['id']) {
                    this.filtercomplaints.push(this.complaints[i]);
                }
            }
        }
    };
    ComplaintsKhataPage.prototype.presentConfirmDelete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to delete this complaint?',
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
                        _this.deleteComplaint();
                    }
                }
            ]
        });
        alert.present();
    };
    ComplaintsKhataPage.prototype.deleteComplaint = function () {
        var _this = this;
        var data = {
            "complaints_id": this.complaint['complaints_id']
        };
        this.rest.post(this.codes.DELETE_COMPLAINTS, data).then(function (resp) {
            _this.getcomplaints();
            _this.updatecomplaint = false;
        });
    };
    ComplaintsKhataPage.prototype.getItems = function ($event) {
        var _this = this;
        if (this.searchTerm != '') {
            this.displayfilter = true;
            this.displaysearchitems = this.search;
        }
        if (this.searchTerm == '') {
            this.displayfilter = false;
            this.displaysearchitems = this.search;
            this.filtercomplaints = this.complaints;
            this.updatecomplaint = false;
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
    ComplaintsKhataPage.prototype.getDrivers = function () {
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
    ComplaintsKhataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComplaintsKhataPage');
    };
    ComplaintsKhataPage.prototype.openAddComplaintsPage = function () {
        this.navCtrl.push('AddComplaintsPage', { "update": "false" });
    };
    ComplaintsKhataPage.prototype.openUpdateComplaintsPage = function () {
        this.navCtrl.push('ComplaintsUpdatePage');
    };
    ComplaintsKhataPage.prototype.displayOk = function () {
        this.all = false;
        this.ok = true;
        this.problem = false;
    };
    ComplaintsKhataPage.prototype.displayProblem = function () {
        this.all = false;
        this.ok = false;
        this.problem = true;
    };
    ComplaintsKhataPage.prototype.displayALL = function () {
        this.all = true;
        this.ok = false;
        this.problem = false;
    };
    ComplaintsKhataPage.prototype.getcomplaints = function () {
        var _this = this;
        var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": userinfo[0]['srth_id']
        };
        this.rest.post(this.codes.GET_COMPLAINTS, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.complaints = resp['data'];
                console.error(JSON.stringify(_this.complaints));
                for (var i = 0; i < _this.complaints.length; i++) {
                    if (_this.complaints[i]['problems'] != undefined) {
                        var str = "";
                        // console.debug("PROBLEMS : "+JSON.stringify(this.complaints[i]['problems']));
                        for (var j = 0; j < _this.complaints[i]['problems'].length; j++) {
                            str += (_this.complaints[i]['problems'][j]['details']['problem_name'] + " - " + _this.complaints[i]['problems'][j]['details']['vehicle_part_name'] + " - " + _this.complaints[i]['problems'][j]['details']['vehicle_part_id']) + " ";
                        }
                        _this.complaints[i]['problem_id'] = str;
                    }
                }
                _this.filtercomplaints = _this.complaints;
                if (_this.complaints.length == 0) {
                    _this.nocomplaints = true;
                }
                _this.problemcomplaints = [];
                _this.solvedcomplaints = [];
                for (var i = 0; i < _this.complaints.length; i++) {
                    _this.complaints[i]['selected'] = false;
                    if (_this.complaints[i]['status'] == null)
                        _this.problemcomplaints.push(_this.complaints[i]);
                    if (_this.complaints[i]['status'] == 'solved')
                        _this.solvedcomplaints.push(_this.complaints[i]);
                }
            }
        });
    };
    ComplaintsKhataPage.prototype.viewComplaint = function () {
        var mdl = this.mdl.create('ViewTransactionPage', { 'complaint': this.complaint });
        mdl.present();
    };
    ComplaintsKhataPage.prototype.selectThis = function (cm) {
        for (var i = 0; i < this.complaints.length; i++)
            this.complaints[i]['selected'] = false;
        cm['selected'] = true;
        localStorage.setItem("selectedcomplaint", JSON.stringify(cm));
        this.complaint = cm;
        this.updatecomplaint = true;
    };
    ComplaintsKhataPage.prototype.updatecomplaints = function () {
        this.navCtrl.push('AddComplaintsPage', { "update": "true", "selectedcomplaint": this.complaint });
    };
    ComplaintsKhataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-complaints-khata',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/complaints-khata/complaints-khata.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-7 class="person-name text-left">\n        <ion-title>        \n          <i class="fa fa-file" aria-hidden="true"></i>\n          COMPLAINTS KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container ">\n\n    <!-- <ion-row class="document-button justify-content-center">\n      <ion-col col-12>\n        <div>\n          VEHICLE COMPLAINT REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n      </ion-col>\n   \n    </ion-row> -->\n\n    <ion-row>\n      <ion-col col-4 class="text-center">\n        <button ion-button round [ngClass]="ok == true ? \'ok-button-selected\' : \'ok-button\'" (click)="displayOk()">OK</button>\n      </ion-col>\n      <ion-col col-4 class="text-center">\n        <button ion-button round [ngClass]="problem == true ? \'problem-button-selected\' : \'problem-button\'" (click)="displayProblem()">PROBLEM</button>\n      </ion-col>\n      <ion-col col-4 class="text-center">\n        <button ion-button round [ngClass]="all == true ? \'all-button-selected\' : \'all-button\'" (click)="displayALL()">ALL</button>\n      </ion-col>\n    </ion-row>\n\n    <!-- <div class="text-center mt-4">  \n\n\n    </div> -->\n    <!-- (ionInput)="getItems($event)" -->\n    <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" [(ngModel)]="searchTerm" (click)="clicksearchbar()" (ionInput)="getItems($event)"  placeholder="SEARCH DRIVER NAME, VEHICLE NUMBER"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true" (click)="closesearchbar()"></i>\n    </div>\n    <ion-card *ngIf="displayfilter">\n      <ion-card-content>\n        <ion-list >\n          <ion-item *ngFor="let sr of displaysearchitems" (click)="clickedsearchitem(sr)">\n           <div *ngIf="sr[\'type\']==\'driver\'">\n            <p style="color: #000;">{{sr[\'name\']}}</p>\n             <p>Driver</p>\n            </div>\n           <div *ngIf="sr[\'type\']==\'vehicle\'">\n              <p style="color: #000;">{{sr[\'name\']}}</p>\n              <p>Vehicle</p>\n           </div>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n\n        <a href="#home">NUMBER</a>\n        <a href="#news">VEHICLE NUMBER</a>\n        <a href="#news">DRIVER NAME</a>\n        <a href="#contact">PROB/WORK/PART</a>\n        <a href="#about">DATE OF COMPLAINT</a>\n        <a href="#about">REMINDER</a>\n        <a href="#support">DETAILS</a>\n        <a href="#support">KM READING</a>\n    \n\n      <div *ngIf="complaints.length == 0 && !nocomplaints" style="padding: 15px;text-align: center;">\n          <ion-spinner name="bubbles"></ion-spinner>\n          <br/>\n        <span style="color: rgb(63, 63, 63);">\n          Loading\n        </span>\n      </div>\n\n    <div *ngIf="all">\n\n      <div  *ngFor="let cm of filtercomplaints" >\n        <div [ngClass]="cm[\'selected\'] == true ?  \'scrollmenu-list selected\' : \'scrollmenu-list\' " (click)="selectThis(cm)">\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'complaints_id\']}} </p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'vehicle_info\'][\'vehicle_number\']}}</p>\n          <p *ngIf="cm[\'driver\'] != null">{{cm[\'driver\'][\'name\']}}</p>\n          <p *ngIf="cm[\'driver\'] == null"></p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'problem_id\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'date_of_complaint\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'date_of_reminder\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'details\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'km_reading\']}}</p>\n        </div>\n      </div>\n    </div>\n    <div *ngIf="problem">\n      <div  *ngFor="let cm of problemcomplaints" >\n        <div [ngClass]="cm[\'selected\'] == true ?  \'scrollmenu-list selected\' : \'scrollmenu-list\' " (click)="selectThis(cm)">\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'complaints_id\']}} </p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'vehicle_info\'][\'vehicle_number\']}}</p>\n          <p *ngIf="cm[\'driver\'] != null">{{cm[\'driver\'][\'name\']}}</p>\n          <p *ngIf="cm[\'driver\'] == null"></p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'problem_id\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'date_of_complaint\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'date_of_reminder\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'details\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'km_reading\']}}</p>\n        </div>\n      </div>\n      </div>\n\n      <div *ngIf="ok">\n      <div  *ngFor="let cm of solvedcomplaints" >\n        <div [ngClass]="cm[\'selected\'] == true ?  \'scrollmenu-list selected\' : \'scrollmenu-list\' " (click)="selectThis(cm)">\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'complaints_id\']}} </p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'vehicle_info\'][\'vehicle_number\']}}</p>\n          <p *ngIf="cm[\'driver\'] != null">{{cm[\'driver\'][\'name\']}}</p>\n          <p *ngIf="cm[\'driver\'] == null"></p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'problem_id\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'date_of_complaint\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'date_of_reminder\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'details\']}}</p>\n          <p [ngClass]="cm[\'status\'] == \'\' ? \'prob\' : \'sol\'">{{cm[\'km_reading\']}}</p>\n        </div>\n      </div>\n    </div>\n\n      </div>\n      <div class="show-arrows" style="text-align:center !important">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n\n\n        <button ion-button class="custom-button-u" style="width:30px !important" *ngIf="updatecomplaint" (click)="viewComplaint()"> <ion-icon name="eye" class="ion-icon-w"></ion-icon> </button>\n        <button ion-button class="custom-button-u" *ngIf="updatecomplaint" (click)="updatecomplaints()">  &nbsp;  Change  &nbsp;  <ion-icon name="create" class="ion-icon-w"></ion-icon> </button>\n        <button ion-button class="custom-button-u" *ngIf="updatecomplaint" (click)="presentConfirmDelete()"> &nbsp;Erase  &nbsp;  <ion-icon name="ios-trash" class="ion-icon-w"></ion-icon> </button>\n \n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n<!--  \n    <div class="text-center">\n\n    </div> -->\n\n\n  </div>\n\n\n  <ion-row>\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button add-complaint" (click)="openAddComplaintsPage()">ADD COMPLAINT</button>\n    </ion-col>\n    <ion-col col-6 class="text-center">\n      <button ion-button round class="custom-button update-status" (click)="openUpdateComplaintsPage()">UPDATE STATUS</button>\n    </ion-col>\n<!-- \n    <ion-col col-12 class="text-center">\n      <button ion-button round class="custom-button update-status" *ngIf="updatecomplaint" (click)="updatecomplaints()">UPDATE COMPLAINTS</button>\n    </ion-col> -->\n  </ion-row>\n</ion-content> \n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/complaints-khata/complaints-khata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"]])
    ], ComplaintsKhataPage);
    return ComplaintsKhataPage;
}());

//# sourceMappingURL=complaints-khata.js.map

/***/ })

});
//# sourceMappingURL=56.js.map