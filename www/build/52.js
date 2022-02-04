webpackJsonp([52],{

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentAndInsurancePageModule", function() { return DocumentAndInsurancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_and_insurance__ = __webpack_require__(948);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentAndInsurancePageModule = /** @class */ (function () {
    function DocumentAndInsurancePageModule() {
    }
    DocumentAndInsurancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__document_and_insurance__["a" /* DocumentAndInsurancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__document_and_insurance__["a" /* DocumentAndInsurancePage */]),
            ],
        })
    ], DocumentAndInsurancePageModule);
    return DocumentAndInsurancePageModule;
}());

//# sourceMappingURL=document-and-insurance.module.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentAndInsurancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_providers_codes_codes__ = __webpack_require__(159);
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




var DocumentAndInsurancePage = /** @class */ (function () {
    function DocumentAndInsurancePage(navCtrl, navParams, codes, rest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.rest = rest;
        this.segment = "all";
        this.documents = [];
        this.docs = [];
        this.ok = false;
        this.expired = false;
        this.all = true;
    }
    DocumentAndInsurancePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var req = {
            "srth_id": json[0]['srth_id']
        };
        this.rest.post(this.codes.GET_DOCUMENT_INFO_BY_SRTH_ID, req).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.documents = resp['data'];
                _this.docs = [];
                for (var i = 0; i < _this.documents.length; i++) {
                    _this.docs = _this.insertIntoArray(_this.docs, _this.documents[i]);
                }
            }
        });
    };
    DocumentAndInsurancePage.prototype.insertIntoArray = function (docs, document) {
        var flag = false;
        for (var i = 0; i < docs.length; i++) {
            if (docs[i]['document_name'] == document['document_name']) {
                var expiryDate = new Date(document['document_expiry_date'] + "T00:00:00");
                if (expiryDate.getTime() <= new Date().getTime()) {
                    docs[i]['expiryCount']++;
                }
                docs[i]['count']++;
                flag = true;
            }
        }
        if (!flag) {
            var expiryDate = new Date(document['document_expiry_date'] + "T00:00:00");
            var dtr = {
                "document_name": document['document_name'],
                "count": 1
            };
            if (expiryDate.getTime() <= new Date().getTime()) {
                dtr['expiryCount'] = 1;
            }
            else
                dtr['expiryCount'] = 0;
            docs.push(dtr);
        }
        return docs;
    };
    DocumentAndInsurancePage.prototype.displayOk = function () {
        this.all = false;
        this.ok = true;
        this.expired = false;
    };
    DocumentAndInsurancePage.prototype.displayExpired = function () {
        this.all = false;
        this.ok = false;
        this.expired = true;
    };
    DocumentAndInsurancePage.prototype.displayALL = function () {
        this.all = true;
        this.ok = false;
        this.expired = false;
    };
    DocumentAndInsurancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentAndInsurancePage');
    };
    DocumentAndInsurancePage.prototype.openDocumentBill = function () {
        this.navCtrl.push('AddDocumentBillPage');
    };
    DocumentAndInsurancePage.prototype.openDocumentBillA = function (avr) {
        var doc = '';
        for (var i = 0; i < this.documents.length; i++) {
            if (this.documents[i]['document_name'] == avr) {
                doc = this.documents[i];
                break;
            }
        }
        this.navCtrl.push('AddDocumentBillPage', { "document": doc });
    };
    DocumentAndInsurancePage.prototype.getItems = function ($event) {
    };
    DocumentAndInsurancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-document-and-insurance',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/document-and-insurance/document-and-insurance.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-10 class="person-name text-left">\n        <ion-title>        \n          <ion-icon name="ios-copy"></ion-icon>\n          DOCUMENT AND INSURANCE\n        </ion-title>\n      </ion-col>\n      <ion-col col-2 class="youtube">\n        <ion-icon name="logo-youtube" color="danger" style="font-size: 4.2rem;margin-top: 3px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n\n    <ion-row class="document-button">\n      <ion-col col-6 (click)="navCtrl.push(\'DocumentDateReportPage\')">\n        <div>\n          DOCUMENTS DATE REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n        <!-- <button ion-button round outline small></button> -->\n      </ion-col>\n      <ion-col col-6 (click)="navCtrl.push(\'DocumentBillReportPage\')">\n        <div>\n          DOCUMENTS BILL REPORT\n          <i class="fa fa-download" aria-hidden="true"></i>\n\n        </div>\n        <!-- <button ion-button round outline small></button> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH VEHICLE NUMBER, PERSON"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div> -->\n\n    <!-- <ion-row>\n      <ion-col col-4 class="text-center">\n        <button ion-button round [ngClass]="ok == true ? \'ok-button-selected\' : \'ok-button\'" (click)="displayOk()">OK</button>\n      </ion-col>\n      <ion-col col-4 class="text-center">\n        <button ion-button round [ngClass]="expired == true ? \'problem-button-selected\' : \'problem-button\'" (click)="displayExpired()">EXPIRED</button>\n      </ion-col>\n      <ion-col col-4 class="text-center">\n        <button ion-button round [ngClass]="all == true ? \'all-button-selected\' : \'all-button\'" (click)="displayALL()">ALL</button>\n      </ion-col>\n    </ion-row> -->\n\n    \n\n      <ion-row>\n        <ion-col col-6 style="padding-bottom: 0px !important;">\n          Documents\n        </ion-col>\n        <!-- <ion-col col-3 style="text-align: center;">\n          Expiring\n        </ion-col> -->\n        <ion-col col-3 style="text-align: center;padding-bottom: 0px !important;">\n          Expired\n        </ion-col>\n        <ion-col col-3 style="text-align: center;padding-bottom: 0px !important;">\n          Total\n        </ion-col>\n      </ion-row>\n \n\n<ion-list>\n\n<ion-row class="doc-back" *ngFor="let dc of docs" (click)="openDocumentBillA(dc[\'document_name\'])">\n\n  <ion-col *ngIf="ok && (dc[\'expiryCount\'] == 0)" col-6 class="doc-name">\n    {{dc[\'document_name\']}}\n  </ion-col>\n  <ion-col *ngIf="expired && (dc[\'expiryCount\'] == dc[\'count\'])" col-6 class="doc-name">\n    {{dc[\'document_name\']}}\n  </ion-col>\n  <ion-col *ngIf="all" col-6 class="doc-name">\n    {{dc[\'document_name\']}}\n  </ion-col>\n\n\n  <ion-col *ngIf="ok && (dc[\'expiryCount\'] == 0)" col-3 style="text-align: center;">\n    <span class="doc-number">{{dc[\'expiryCount\']}}</span>\n  </ion-col>\n  <ion-col *ngIf="expired && (dc[\'expiryCount\'] == dc[\'count\'])" col-3 style="text-align: center;">\n    <span class="doc-number">{{dc[\'expiryCount\']}}</span>\n  </ion-col>\n  <ion-col *ngIf="all" col-3 style="text-align: center;">\n    <span class="doc-number">{{dc[\'expiryCount\']}}</span>\n  </ion-col>\n\n\n  <ion-col *ngIf="ok && (dc[\'expiryCount\'] == 0)" col-3 style="text-align: center;">\n    <span class="doc-number">{{dc[\'count\']}}</span>\n  </ion-col>\n  <ion-col *ngIf="expired && (dc[\'expiryCount\'] == dc[\'count\'])" col-3 style="text-align: center;">\n    <span class="doc-number">{{dc[\'count\']}}</span>\n  </ion-col>\n  <ion-col *ngIf="all" col-3 style="text-align: center;">\n    <span class="doc-number">{{dc[\'count\']}}</span>\n  </ion-col>\n\n\n</ion-row>\n\n</ion-list>\n\n\n\n\n  </div>\n</ion-content> \n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/document-and-insurance/document-and-insurance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__src_providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__src_providers_rest_rest__["a" /* RestProvider */]])
    ], DocumentAndInsurancePage);
    return DocumentAndInsurancePage;
}());

//# sourceMappingURL=document-and-insurance.js.map

/***/ })

});
//# sourceMappingURL=52.js.map