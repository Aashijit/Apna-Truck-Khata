webpackJsonp([28],{

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsWorkModalPageModule", function() { return PartsWorkModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_work_modal__ = __webpack_require__(922);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PartsWorkModalPageModule = /** @class */ (function () {
    function PartsWorkModalPageModule() {
    }
    PartsWorkModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parts_work_modal__["a" /* PartsWorkModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__parts_work_modal__["a" /* PartsWorkModalPage */]),
            ],
        })
    ], PartsWorkModalPageModule);
    return PartsWorkModalPageModule;
}());

//# sourceMappingURL=parts-work-modal.module.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartsWorkModalPage; });
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




var PartsWorkModalPage = /** @class */ (function () {
    function PartsWorkModalPage(viewController, navCtrl, navParams, rest, codes) {
        var _this = this;
        this.viewController = viewController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.codes = codes;
        this.workparts = [];
        this.filterworkparts = [];
        this.work_part_type = '';
        this.name = '';
        this.detail = '';
        this.addWorkPart = false;
        this.searchTerm = '';
        this.qty = '';
        this.rest.post(this.codes.GET_WORK_PART, {}).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.workparts = resp['data'];
                _this.filterworkparts = _this.workparts;
            }
        });
    }
    PartsWorkModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartsWorkModalPage');
    };
    PartsWorkModalPage.prototype.selectedWorkPart = function (workpart) {
        localStorage.setItem(this.codes.SELECTED_WORK_PART, JSON.stringify(workpart));
        this.viewController.dismiss();
    };
    PartsWorkModalPage.prototype.getworkpart = function () {
        var _this = this;
        this.rest.post(this.codes.GET_WORK_PART, {}).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.workparts = resp['data'];
                _this.filterworkparts = _this.workparts;
            }
        });
    };
    PartsWorkModalPage.prototype.saveworkpart = function () {
        var _this = this;
        var data = {
            'work_part_type': this.work_part_type,
            'name': this.name,
            'details': this.detail
        };
        this.rest.post(this.codes.SAVE_WORK_PART, data).then(function (resp) {
            _this.getworkpart();
        });
    };
    PartsWorkModalPage.prototype.filterList = function (event) {
        var _this = this;
        this.filterworkparts = this.workparts.filter(function (wp) {
            if (_this.searchTerm != '') {
                return (wp.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1);
            }
            else
                return _this.workparts;
        });
    };
    PartsWorkModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-parts-work-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/parts-work-modal/parts-work-modal.html"*/'<ion-content padding style="background: rgba(0,0,0,0.8) !important;">\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n\n        <ion-col col-12>\n          <ion-searchbar mode="md" (ionInput)="filterList($event)" [(ngModel)]="searchTerm"></ion-searchbar>\n        </ion-col>\n        <ion-col col-12 style="text-align: center;">\n          <button ion-button round class="custom-button" (click)="addWorkPart=!addWorkPart"> ADD WORK/PART  &nbsp; <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon> </button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-grid *ngIf="addWorkPart">\n        <ion-row>\n          <ion-col col-12>\n            <h2>Add Work / Part</h2>\n          </ion-col>\n          <ion-col col-12>\n            <ion-row radio-group style="margin: 0;" [(ngModel)]="work_part_type">\n    \n              <ion-col col-6>\n                <ion-item>\n                  <ion-label> Work</ion-label>\n                  <ion-radio checked="true" value="Work"></ion-radio>\n                </ion-item>\n              </ion-col>\n        \n                 \n              <ion-col col-6>\n                <ion-item>\n                  <ion-label> Parts</ion-label>\n                  <ion-radio  value="Part"></ion-radio>\n                </ion-item>\n              </ion-col>\n        \n\n            </ion-row>\n          </ion-col>\n          <ion-col col-12>\n            <div class="label-float" >\n              <input type="text"  placeholder=" " [(ngModel)]="name" />\n              <label>NAME</label>\n            </div>\n          </ion-col>\n          <ion-col col-12>\n            <div class="label-float" >\n              <input type="text"  placeholder=" " [(ngModel)]="detail" />\n              <label>DETAILS</label>\n            </div>\n          </ion-col>\n          <ion-col col-12 style="text-align: center;">\n            <button ion-button round class="custom-button" (click)="saveworkpart()"> ADD WORK/PART  </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-row>\n        <ion-col col-12>\n        <ion-list>\n          <ion-item *ngFor="let wp of filterworkparts" (click)="selectedWorkPart(wp)">\n            <ion-card>\n              <ion-card-content>\n            <ion-row>\n              <ion-col style="text-align: left;"> \n                {{wp[\'name\'] + \'(\' + wp[\'type\']+\')\'}}\n              </ion-col>\n              <ion-col style="text-align: right;"> \n                {{wp[\'details\']}}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n          </ion-card>\n          </ion-item>\n        </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/parts-work-modal/parts-work-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */]])
    ], PartsWorkModalPage);
    return PartsWorkModalPage;
}());

//# sourceMappingURL=parts-work-modal.js.map

/***/ })

});
//# sourceMappingURL=28.js.map