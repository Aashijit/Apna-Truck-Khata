webpackJsonp([69],{

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDocumentBillPageModule", function() { return AddDocumentBillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_document_bill__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddDocumentBillPageModule = /** @class */ (function () {
    function AddDocumentBillPageModule() {
    }
    AddDocumentBillPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_document_bill__["a" /* AddDocumentBillPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__add_document_bill__["a" /* AddDocumentBillPage */]),
            ],
        })
    ], AddDocumentBillPageModule);
    return AddDocumentBillPageModule;
}());

//# sourceMappingURL=add-document-bill.module.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDocumentBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_providers_codes_codes__ = __webpack_require__(159);
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





var AddDocumentBillPage = /** @class */ (function () {
    function AddDocumentBillPage(navCtrl, navParams, codes, rest, message, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codes = codes;
        this.rest = rest;
        this.message = message;
        this.alertCtrl = alertCtrl;
        this.document = '';
        this.bills = [];
        this.isupdate = false;
        this.document = this.navParams.get("document");
        console.log(JSON.stringify(this.document));
    }
    AddDocumentBillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddDocumentBillPage');
        this.getBillsBySrthId();
    };
    AddDocumentBillPage.prototype.getBillsBySrthId = function () {
        var _this = this;
        // this.isupdate = false;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id'],
            "worker_type": "documents"
        };
        this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                var bls = resp['data'];
                for (var i = 0; i < bls.length; i++) {
                    if (bls[i]['reason'] == _this.document['document_name']) {
                        bls[i]['selected'] = 'false';
                        _this.bills.push(bls[i]);
                    }
                }
            }
        });
    };
    AddDocumentBillPage.prototype.openRenewalDocumentPage = function () {
        this.navCtrl.push('DocumentRenewalPage', { "document": this.document });
    };
    AddDocumentBillPage.prototype.selectThis = function (bill) {
        this.isupdate = true;
        for (var i = 0; i < this.bills.length; i++)
            this.bills[i]['selected'] = 'false';
        bill['selected'] = 'true';
        localStorage.setItem("bill", JSON.stringify(bill));
    };
    AddDocumentBillPage.prototype.update = function () {
        var bill = JSON.parse(localStorage.getItem("bill"));
        this.navCtrl.push('DocumentRenewalPage', { "document": this.document, "bill": bill });
    };
    AddDocumentBillPage.prototype.presentConfirmDelete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to delete this bill?',
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
                        _this.deletebill();
                    }
                }
            ]
        });
        alert.present();
    };
    AddDocumentBillPage.prototype.deletebill = function () {
        var _this = this;
        var bill = JSON.parse(localStorage.getItem('bill'));
        var data = {
            "bill_id": bill['bill_id']
        };
        this.rest.post(this.codes.DELETE_BILL_EXPENSE, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.message.displayToast('Congratulations! You have deleted a bill.');
                _this.getBillsBySrthId();
            }
        });
    };
    AddDocumentBillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-add-document-bill',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-document-bill/add-document-bill.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n    \n      <ion-col col-7 class="person-name text-left">\n        <ion-title>        \n          <ion-icon ios="ios-copy" md="md-copy"></ion-icon>\n          {{document[\'document_name\']}}\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-3 class="youtube">\n        <img src="../../assets/saarthi-icon/png/youtube.png" alt="" >\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container"> \n\n    <!-- <div class="custom-searchbar-div" style="position: relative;">\n      <ion-searchbar class="custom-searchbar" (ionInput)="getItems($event)" placeholder="SEARCH BILL, NUMBER, VEHICLE NUMBER, DOCUMENT"></ion-searchbar>\n      <i class="fa fa-angle-down" aria-hidden="true"></i>\n    </div> -->\n\n    <div class="text-center mt-4">\n      \n\n\n    </div>\n\n    <!-- <ion-row>\n      <ion-col col-4 class="text-center">\n        <button ion-button round class="expired-button" >EXPIRED</button>\n      </ion-col>\n      <ion-col col-4 class="text-center">\n        <button ion-button round class="ok-button" >OK</button>\n      </ion-col>\n      <ion-col col-4 class="text-center">\n        <button ion-button round class=" all-button" >ALL</button>\n      </ion-col>\n    </ion-row> -->\n\n   \n\n \n\n    <div class="scroll-grid" >\n      <div class="scrollmenu">\n       \n        <a href="#home">PERSON</a>\n        <a href="#news">VEHICLE NUMBER</a>\n        <a href="#contact">BILL DATE</a>\n        <a href="#about">BILL NUMBER</a>\n        <a href="#support">COST</a>\n        <!-- <a href="#support">BILL</a> -->\n        <a href="#support">DETAIL</a>\n    \n        <div [ngClass]="bill[\'selected\'] == \'true\' ? \'scrollmenu-list selected\' : \'scrollmenu-list\'"  *ngFor="let bill of bills" (click)="selectThis(bill)">\n          <p>{{bill[\'person_shop_name\']}}</p>\n          <p>\n            <span *ngFor="let vh of bill[\'details\']">\n            {{vh[\'vehicle_detail\'][\'vehicle_number\'] + "  "}}\n          </span>\n          </p>\n          <p>{{bill[\'bill_date\']}}</p>\n          <p>{{bill[\'bill_id\']}}</p>\n          <p>{{bill[\'total_bill\']}}</p>\n          <!-- <p>RS 400</p> -->\n          <p>{{bill[\'bill_details\']}}</p>\n     \n        </div>\n  \n     \n      </div>\n      <div class="show-arrows">\n        <i class="fa fa-long-arrow-down" aria-hidden="true"></i>\n        \n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="update()">Change &nbsp; <ion-icon name="create" class="ion-icon-w"></ion-icon> </button>\n        <button ion-button class="custom-button-u" *ngIf="isupdate" (click)="presentConfirmDelete()"> &nbsp;  Erase &nbsp;<ion-icon name="ios-trash" class="ion-icon-w"></ion-icon> </button>\n  \n        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>\n  \n      </div>\n    </div>\n   \n\n    <div class="text-center">\n      <button ion-button round class="custom-button add-complaint" (click)="openRenewalDocumentPage()">RENEW/ADD</button>\n\n    </div>\n\n\n  </div>\n</ion-content> \n\n\n\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/add-document-bill/add-document-bill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__src_providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__src_providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"]])
    ], AddDocumentBillPage);
    return AddDocumentBillPage;
}());

//# sourceMappingURL=add-document-bill.js.map

/***/ })

});
//# sourceMappingURL=69.js.map