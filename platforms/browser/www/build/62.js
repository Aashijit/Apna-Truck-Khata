webpackJsonp([62],{

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllImageKhataPageModule", function() { return AllImageKhataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_image_khata__ = __webpack_require__(928);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllImageKhataPageModule = /** @class */ (function () {
    function AllImageKhataPageModule() {
    }
    AllImageKhataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_image_khata__["a" /* AllImageKhataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__all_image_khata__["a" /* AllImageKhataPage */]),
            ],
        })
    ], AllImageKhataPageModule);
    return AllImageKhataPageModule;
}());

//# sourceMappingURL=all-image-khata.module.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllImageKhataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AllImageKhataPage = /** @class */ (function () {
    function AllImageKhataPage(navCtrl, navParams, camera, alertCtrl, rest, codes, ldcontroller, message, datetransform, view, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.rest = rest;
        this.codes = codes;
        this.ldcontroller = ldcontroller;
        this.message = message;
        this.datetransform = datetransform;
        this.view = view;
        this.photoViewer = photoViewer;
        this.type = '';
        this.upload_image = '';
        this.tp = '';
        this.images = [];
        this.filterimages = [];
        this.isselect = false;
        this.keys = [];
        this.searchTerm = '';
        this.isselect = this.navParams.get("isselect");
        this.type = this.navParams.get("type");
        this.tp = this.type;
        this.getImagesBySrthId();
    }
    AllImageKhataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllImageKhataPage');
    };
    AllImageKhataPage.prototype.saveImage = function () {
        var _this = this;
        if (this.tp == '') {
            this.message.displayToast("Please add a type ");
            return;
        }
        var data = {};
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        data['image_content'] = this.upload_image;
        data['document_type'] = 'image';
        data['srth_id'] = json[0]['srth_id'];
        if (this.tp == 'sbills') {
            data['worker_type'] = 'shop';
            data['type'] = 'bills';
        }
        else if (this.tp == 'mbills') {
            data['worker_type'] = 'mechanic';
            data['type'] = 'bills';
        }
        else if (this.tp == 'preceipts') {
            data['worker_type'] = null;
            data['type'] = 'payment';
        }
        else if (this.tp == 'drbills') {
            data['worker_type'] = 'driver';
            data['type'] = 'bills';
        }
        else if (this.tp == 'profile') {
            data['worker_type'] = null;
            data['type'] = 'profile';
        }
        else if (this.tp == 'drdoc' || this.tp == 'vhdoc') {
            data['worker_type'] = "document";
            data['type'] = 'bills';
        }
        var ldcon = this.ldcontroller.create({
            content: 'Uploading image to ATK server ... '
        });
        ldcon.present();
        this.rest.post(this.codes.SAVE_IMAGE, data).then(function (resp) {
            ldcon.dismiss();
            _this.type = _this.tp;
            _this.upload_image = '';
            _this.getImagesByType(_this.type);
        });
    };
    AllImageKhataPage.prototype.filterList = function (events) {
        var _this = this;
        this.filterimages = this.images.filter(function (wp) {
            if (_this.searchTerm != '') {
                var sterm = _this.searchTerm.trim();
                sterm = sterm.replace(/[^a-zA-Z]/g, "");
                var tag_cloud = wp.tag_cloud.replace(/[^a-zA-Z]/g, "");
                return (tag_cloud.toLowerCase().indexOf(sterm.toLowerCase()) > -1);
            }
            else
                return _this.images;
        });
    };
    AllImageKhataPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    AllImageKhataPage.prototype.selectImage = function (img) {
        localStorage.setItem("selectedimage", JSON.stringify(img));
        this.view.dismiss();
    };
    AllImageKhataPage.prototype.viewImage = function (image) {
        this.photoViewer.show(image['image_url'], image['tag_cloud'], { share: true });
    };
    AllImageKhataPage.prototype.getImagesBySrthId = function () {
        var _this = this;
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data = {
            "srth_id": json[0]['srth_id']
        };
        var ldcon = this.ldcontroller.create({
            content: 'Loading all the images ... '
        });
        ldcon.present();
        this.rest.post(this.codes.GET_IMAGES_BY_SRTH_ID, data).then(function (resp) {
            ldcon.dismiss();
            if (resp['_ReturnCode'] == '0') {
                _this.images = resp['data'];
                for (var i = 0; i < _this.images.length; i++) {
                    console.log(_this.images[i]['image_tags']);
                    var json = JSON.parse(_this.images[i]['image_tags']);
                    var keys = Object.keys(json);
                    _this.keys = keys;
                    var tagcloud = "";
                    for (var j = 0; j < keys.length; j++) {
                        tagcloud += "#" + json[keys[j]] + " ";
                    }
                    // keys[j]+":"
                    _this.images[i]['tag_cloud'] = tagcloud;
                }
                _this.filterimages = _this.images;
            }
        });
    };
    AllImageKhataPage.prototype.getImagesByType = function (event) {
        var _this = this;
        this.tp = event;
        var data = {};
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        data['srth_id'] = json[0]['srth_id'];
        if (this.tp == 'sbills') {
            data['worker_type'] = 'shop';
            data['type'] = 'bills';
        }
        else if (this.tp == 'mbills') {
            data['worker_type'] = 'mechanic';
            data['type'] = 'bills';
        }
        else if (this.tp == 'preceipts') {
            data['worker_type'] = null;
            data['type'] = 'payment';
        }
        else if (this.tp == 'drbills') {
            data['worker_type'] = 'driver';
            data['type'] = 'bills';
        }
        else if (this.tp == 'profile') {
            data['worker_type'] = null;
            data['type'] = 'profile';
        }
        else if (this.tp == 'drdoc' || this.tp == 'vhdoc') {
            data['worker_type'] = "document";
            data['type'] = 'bills';
        }
        this.rest.post(this.codes.GET_IMAGE_BY_TYPE_WORKER_TYPE, data).then(function (resp) {
            if (resp['_ReturnCode'] == '0') {
                _this.images = resp['data'];
                var _loop_1 = function (i) {
                    data = {
                        "image_id": _this.images[i]['image_id']
                    };
                    _this.rest.post(_this.codes.GET_IMAGE_BY_IMAGE_ID, data).then(function (resp) {
                        if (resp['data'].length > 0)
                            _this.images[i]['image_content'] = resp['data'][0]['image_content'];
                    });
                };
                var data;
                for (var i = 0; i < _this.images.length; i++) {
                    _loop_1(i);
                }
            }
        });
    };
    AllImageKhataPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: "Are you sure you want to save this image?",
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
                        _this.saveImage();
                    }
                }
            ]
        });
        alert.present();
    };
    AllImageKhataPage.prototype.getImage = function (img) {
        var _this = this;
        if (img == 'camera') {
            var options = {
                quality: 10,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.CAMERA
            };
            this.camera.getPicture(options).then(function (imageData) {
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.upload_image = base64Image;
            }, function (err) {
                // Handle error
            });
        }
        else {
            var options = {
                quality: 10,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.upload_image = base64Image;
            }, function (err) {
                // Handle error
            });
        }
    };
    AllImageKhataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-all-image-khata',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/all-image-khata/all-image-khata.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-1 class="custom-back-button">\n        <!-- <ion-icon name="ios-arrow-round-back"></ion-icon> -->\n      </ion-col>\n\n      <ion-col col-9 class="person-name text-left">\n        <ion-title>\n          <i class="fa fa-file-image-o" aria-hidden="true"></i>\n          ALL PHOTO KHATA\n        </ion-title>\n\n      </ion-col>\n      <ion-col col-2 class="youtube">\n        <ion-icon name="close" style="font-size: 2em;margin-top: 12px;" (click)="dismiss()"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-col col-12>\n    <ion-searchbar mode="md" (ionInput)="filterList($event)" [(ngModel)]="searchTerm"></ion-searchbar>\n  </ion-col>\n  <!-- <ion-card style="border-radius: 8px !important;">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 style="text-align: center;">\n          <h2 class="subhead">Upload Image</h2>\n        </ion-col>\n        <ion-col col-7 style="text-align: center;">\n          <ion-item style="background: none !important;">\n            <ion-label floating style="text-align: left !important;">Type</ion-label>\n            <ion-select [disabled]="isselect && type != \'all\'" [(ngModel)]="tp" interface="popover">\n              <ion-option value="sbills">Shop Bills</ion-option>\n              <ion-option value="mbills">Mechanic Bills</ion-option>\n              <ion-option value="preceipts">Payment Receipts</ion-option>\n              <ion-option value="drbills">Driver Bills</ion-option>\n              <ion-option value="profile">Profile</ion-option>\n              <ion-option value="drdoc">Driver Document</ion-option>\n              <ion-option value="vhdoc">Vehicle Document</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button class="custom-button" style="width: 150px !important;margin-left: 18px;"\n            (click)="getImage(\'camera\')">Camera &nbsp; <ion-icon name="camera"></ion-icon></button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button class="custom-button" style="width: 150px !important;margin-left: -4px;"\n            (click)="getImage(\'gallery\')">Gallery &nbsp; <ion-icon ios="ios-image" md="md-image"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="upload_image != \'\'">\n        <ion-col col-6>\n          <img [src]="upload_image" class="upl_img" />\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button class="custom-button" style="width: 150px !important;margin-left: -4px;"\n            (click)="presentConfirm()">Save Image</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card> -->\n\n  <!-- <h2 class="subhead">Select type of images</h2>\n\n  <ion-row no-lines [disabled]="isselect && type != \'all\'" radio-group style="margin: 0;" [(ngModel)]="type"\n    (ionChange)="getImagesByType($event)">\n\n    <ion-col col-6>\n      <ion-item>\n        <ion-label>Shop Bills</ion-label>\n        <ion-radio value="sbills"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n\n    <ion-col col-6>\n      <ion-item>\n        <ion-label>Mechanic Bills</ion-label>\n        <ion-radio value="mbills"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n\n    <ion-col col-6>\n      <ion-item>\n        <ion-label>Payment Receipts</ion-label>\n        <ion-radio value="preceipts"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n\n    <ion-col col-6>\n      <ion-item>\n        <ion-label> Driver Bills</ion-label>\n        <ion-radio value="drbills"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n\n    <ion-col col-6>\n      <ion-item>\n        <ion-label> Document Bills</ion-label>\n        <ion-radio value="dbills"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n    <ion-col col-6>\n      <ion-item>\n        <ion-label> Profile</ion-label>\n        <ion-radio value="profile"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n    <ion-col col-6>\n      <ion-item>\n        <ion-label> Driver Document</ion-label>\n        <ion-radio value="drdocument"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n\n    <ion-col col-6>\n      <ion-item>\n        <ion-label> Vehicle Document</ion-label>\n        <ion-radio value="vhdocument"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n  </ion-row> -->\n\n\n  <ion-list>\n      <ion-item *ngFor="let img of filterimages" (click)="viewImage(img)">\n        <ion-grid>\n          <ion-row>\n          <ion-col col-4>\n            <p *ngIf="img[\'image_url\'] != null">\n              <img [src]="img[\'image_url\']" style="width: 100px;"  />\n            </p>\n          </ion-col>\n          <ion-col col-8 style="text-align: left !important;margin-top: 10px;">\n            <span style="white-space: normal;font-size: 12px !important;font-weight: 800;color: #0752af;">\n              {{img[\'tag_cloud\']}}\n            </span>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n      </ion-item>\n  </ion-list>\n\n  <!-- <ion-row style="padding-left:16px !important; padding-right:16px !important">\n    <ion-col col-12>\n      <div *ngFor="let img of images" >\n        <p *ngIf="img[\'image_url\'] != null">\n          <img [src]="img[\'image_url\']" imageViewer />\n        </p>\n        <p class="dt">\n          {{datetransform.transform(img[\'last_maint_ts\'],\'d, MMM yy\')}}\n          <span>\n            {{img[\'tag_cloud\']}}\n          </span>\n        </p>\n      </div>\n    </ion-col>\n  </ion-row> -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/all-image-khata/all-image-khata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], AllImageKhataPage);
    return AllImageKhataPage;
}());

//# sourceMappingURL=all-image-khata.js.map

/***/ })

});
//# sourceMappingURL=62.js.map