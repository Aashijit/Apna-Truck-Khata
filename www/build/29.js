webpackJsonp([29],{

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsBillDetailsModalPageModule", function() { return PartsBillDetailsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parts_bill_details_modal__ = __webpack_require__(965);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PartsBillDetailsModalPageModule = /** @class */ (function () {
    function PartsBillDetailsModalPageModule() {
    }
    PartsBillDetailsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parts_bill_details_modal__["a" /* PartsBillDetailsModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__parts_bill_details_modal__["a" /* PartsBillDetailsModalPage */]),
            ],
        })
    ], PartsBillDetailsModalPageModule);
    return PartsBillDetailsModalPageModule;
}());

//# sourceMappingURL=parts-bill-details-modal.module.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartsBillDetailsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_providers_message_message__ = __webpack_require__(494);
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





var PartsBillDetailsModalPage = /** @class */ (function () {
    function PartsBillDetailsModalPage(navCtrl, navParams, modalCtrl, viewController, codes, message, pv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewController = viewController;
        this.codes = codes;
        this.message = message;
        this.pv = pv;
        this.problems = [];
        this.bill = '';
        this.amount = 0.00;
        this.part_name = '';
        this.id = '';
        this.rate = '';
        this.is_full = false;
        this.work_part = '';
        this.qty = '';
        this.img = '';
        if (this.navParams.get("action") == "edit") {
            this.problems = this.navParams.get("problem_part");
            for (var i = 0; i < this.problems[0]['parts'].length; i++) {
                this.amount += Number(this.problems[0]['parts'][i]['total']);
            }
        }
        this.img = this.navParams.get("image");
        this.bill = this.navParams.get("bill");
    }
    PartsBillDetailsModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartsBillDetailsModalPage');
    };
    PartsBillDetailsModalPage.prototype.openPartsWorkModal = function () {
        var _this = this;
        var mdl = this.modalCtrl.create('PartsWorkModalPage');
        mdl.onDidDismiss(function (data) {
            _this.work_part = JSON.parse(localStorage.getItem(_this.codes.SELECTED_WORK_PART));
            _this.part_name = _this.work_part['name'];
        });
        mdl.present();
    };
    PartsBillDetailsModalPage.prototype.removeProblem = function (problem) {
        console.log("PROBLEM : " + JSON.stringify(this.problems));
        if (this.problems.length == 1) {
            this.message.displayToast('Atleast one problem is needed for the parts. Please add a different problem and then delete this.');
            return;
        }
        var prblms = [];
        var parts = [];
        for (var i = 0; i < this.problems.length; i++) {
            if (i == 0) {
                parts = this.problems[i]['parts'];
            }
            if (this.problems[i]['problem_id'] == problem['problem_id']) {
            }
            else {
                this.problems[i]['parts'] = parts;
                prblms.push(this.problems[i]);
            }
        }
        console.log("PROBLEM NEW : " + JSON.stringify(this.problems));
        // console.debug(JSON.stringify(prblms));
        this.problems = prblms;
    };
    PartsBillDetailsModalPage.prototype.viewImage = function (imageUrl) {
        this.pv.show(imageUrl, "Bill Image", { share: true });
    };
    PartsBillDetailsModalPage.prototype.removeRow = function (problem) {
        problem['parts'].pop();
    };
    PartsBillDetailsModalPage.prototype.removePart = function (prt) {
        var prts = [];
        for (var i = 0; i < this.problems[0]['parts'].length; i++) {
            if (this.problems[0]['parts'][i]['part_name'] != prt['part_name'])
                prts.push(this.problems[0]['parts'][i]);
            else if (this.problems[0]['parts'][i]['part_name'] == prt['part_name'])
                this.amount -= Number(prt['total']);
        }
        this.problems[0]['parts'] = prts;
    };
    PartsBillDetailsModalPage.prototype.openProblemModal = function () {
        var _this = this;
        var problemModal = this.modalCtrl.create('ProblemWorkPartModalPage', { "problems": this.problems });
        problemModal.onDidDismiss(function (data) {
            _this.problems = JSON.parse(localStorage.getItem("problem_id"));
            console.log("PROBLEMS GOT : " + JSON.stringify(_this.problems));
            var parts = [];
            for (var i = 0; i < _this.problems.length; i++) {
                if (_this.problems[i]['parts'] != undefined && _this.problems[i]['parts'] != null) {
                    parts = _this.problems[i]['parts'];
                }
                else
                    _this.problems[i]['parts'] = [];
            }
            // for(let i=0;i<this.problems.length;i++){
            //   this.problems[i]['parts'] = parts;
            // }
        });
        problemModal.present();
    };
    PartsBillDetailsModalPage.prototype.savePartsBill = function () {
        for (var i = 0; i < this.problems.length; i++) {
            this.problems[i]['bill_id'] = this.bill['bill_id'];
        }
        localStorage.setItem("problem_part", JSON.stringify(this.problems));
        this.viewController.dismiss();
    };
    PartsBillDetailsModalPage.prototype.addPartsBill = function () {
        if (this.problems.length == 0) {
            this.message.displayToast('You need to add a problem and then add the parts.');
            return;
        }
        for (var i = 0; i < this.problems.length; i++) {
            var parts = {};
            if (this.is_full)
                parts = {
                    "part_name": this.part_name,
                    "rate_per_pc": this.rate,
                    "is_full": this.is_full,
                    "qty": this.qty,
                    "id": this.id == '' ? (new Date().getTime()) : '',
                    "total": this.rate
                };
            else
                parts = {
                    "part_name": this.part_name,
                    "rate_per_pc": this.rate,
                    "is_full": this.is_full,
                    "qty": this.qty,
                    "id": this.id == '' ? (new Date().getTime()) : '',
                    "total": Number(this.rate) * Number(this.qty)
                };
            if (i == 0) {
                this.amount += Number(parts['total']);
                if (this.amount > Number(this.bill['total_bill'])) {
                    this.message.displayToast('The amount is crossing the bill amount! Cannot be added.');
                    this.amount -= Number(parts['total']);
                    return;
                }
            }
            this.problems[i]['parts'].push(parts);
            console.log("PROBLEM : " + i + " :::: " + JSON.stringify(this.problems));
        }
        this.part_name = '';
        this.rate = '';
        this.is_full = false;
        this.qty = '';
        this.id = '';
    };
    PartsBillDetailsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-parts-bill-details-modal',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/parts-bill-details-modal/parts-bill-details-modal.html"*/'<ion-content padding>\n      <div class="label-float" style="padding-top: 8px;" (click)="openProblemModal()">\n        <input type="text"  placeholder=" " />\n        <label>PROBLEM/WORK(PART & ID)</label>\n      </div>\n\n      <p style="padding-left: 9px !important;padding-right: 9px !important; padding-bottom: 5px !important;">\n        <ion-chip *ngFor="let problem of problems" style="margin-right: 5px !important; margin-left: 5px !important;">\n          <ion-label  >{{problem[\'problem_name\']+" "+problem[\'vehicle_part_name\']+" "+problem[\'vehicle_part_id\']}}</ion-label>\n          <ion-icon name="close" style="margin-right: 6px;background:transparent !important; color: red !important;" (click)="removeProblem(problem)"></ion-icon>\n        </ion-chip>\n        </p>\n\n        <ion-row>\n          <ion-col col-6>\n            <ion-badge color="primary">Bill Amount : ₹ {{bill[\'total_bill\']}}  </ion-badge>\n          </ion-col>\n          <ion-col col-6>\n            <ion-badge color="danger">Sub Amount : ₹ {{amount}}  </ion-badge>\n          </ion-col>\n        </ion-row>\n        \n\n        <ion-list *ngIf="problems.length > 0 && problems[0][\'parts\'] != undefined">\n          <ion-item *ngFor="let prt of problems[0][\'parts\']">\n            <ion-grid class="pd-0">\n              <ion-row>\n                <ion-col col-4 class="pd-0">\n                  <p style="font-weight: 1000; font-size: 10px !important; margin-left: 17px !important;">\n                  {{prt[\'part_name\']}}\n                  </p>\n                  <p style="font-size: 8px; font-weight: 1000 !important;margin-left: 17px !important;">\n                    {{prt[\'id\']}}\n                  </p>\n                </ion-col>\n\n                <ion-col col-4 class="pd-0">\n                  <p style="text-align: right;font-size: 10px !important;">\n                  ₹ {{prt[\'rate_per_pc\']}}\n                  <sup *ngIf="prt[\'is_full\']">Full</sup>\n                  <sup *ngIf="!prt[\'is_full\']">Per pc</sup>\n                  </p>\n                  <p style="text-align: right;font-size: 10px !important;">\n                    Qty:{{prt[\'qty\']}}\n                  </p>\n                </ion-col>\n\n                <ion-col col-2 class="pd-0" style="text-align: right;font-size: 10px !important;">\n                  ₹ {{prt[\'total\']}}\n                </ion-col>\n                <ion-col col-2 class="pd-0" (click)="removePart(prt)">\n                  <ion-icon name="close-circle" color="danger" class="icon-cust"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n</ion-content>\n\n<ion-footer style="background: #fff; border-radius: 10px !important;">\n\n  <ion-grid >\n\n    <ion-row>\n      <ion-col col-6 class="pd" style="padding-right: 3px !important;">\n        <div class="label-float" (click)="openPartsWorkModal()">\n          <input type="text" [(ngModel)]="part_name" />\n          <label>Parts</label>\n          <i class="fa fa-chevron-down" aria-hidden="true"></i>\n        </div>\n      </ion-col>\n      <ion-col col-6 class="pd" style="padding-left: 3px !important;">\n        <div class="label-float" >\n          <input type="text" [(ngModel)]="id" />\n          <label>ID</label>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4 class="pd" style="padding-right: 0px !important;">\n        <div class="label-float" >\n          <input type="tel" [(ngModel)]="qty" />\n          <label>Qty</label>\n        </div>\n      </ion-col>\n      <ion-col col-4 class="pd" >\n        <ion-toggle [(ngModel)]="is_full"></ion-toggle>\n        <p>\n          PC/FULL\n        </p>\n      </ion-col>\n      <ion-col col-4 class="pd" style="padding-left: 0px !important;">\n        <div class="label-float" >\n          <input type="tel" [(ngModel)]="rate" />\n          <label>RATE</label>\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n\n\n\n  <div class="mt-4 text-center">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button round class="custom-button" (click)="savePartsBill()">SAVE\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button round class="custom-button" (click)="addPartsBill()">ADD\n          </button>\n        </ion-col>\n        <ion-col col-4 *ngIf="img != null || img != undefined"> \n          <img [src]="img[\'image_url\']" (click)="viewImage(img[\'image_url\'])" style="width: 30%;border: 2px solid #1e53b5;" />\n          <!-- <button ion-button round class="custom-button" disabled="true">BILL IMG\n          </button> -->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n</ion-footer>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/parts-bill-details-modal/parts-bill-details-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__src_providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_1__src_providers_message_message__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], PartsBillDetailsModalPage);
    return PartsBillDetailsModalPage;
}());

//# sourceMappingURL=parts-bill-details-modal.js.map

/***/ })

});
//# sourceMappingURL=29.js.map