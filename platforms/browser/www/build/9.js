webpackJsonp([9],{

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImagePageModule", function() { return UploadImagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_image__ = __webpack_require__(990);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadImagePageModule = /** @class */ (function () {
    function UploadImagePageModule() {
    }
    UploadImagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upload_image__["a" /* UploadImagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__upload_image__["a" /* UploadImagePage */]),
            ],
        })
    ], UploadImagePageModule);
    return UploadImagePageModule;
}());

//# sourceMappingURL=upload-image.module.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadImagePage = /** @class */ (function () {
    function UploadImagePage(navCtrl, navParams, view, cm, ldcontroller, rest, codes, photoViewer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.cm = cm;
        this.ldcontroller = ldcontroller;
        this.rest = rest;
        this.codes = codes;
        this.photoViewer = photoViewer;
        this.data = '';
        this.uploadImage = '';
        this.imgtagcloud = '';
        this.data = this.navParams.get("request");
        var dt = this.navParams.get('image');
        if (dt != null) {
            this.uploadImage = dt['image_url'];
        }
    }
    UploadImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadImagePage');
    };
    UploadImagePage.prototype.camera = function () {
        this.getImage("camera");
    };
    UploadImagePage.prototype.gallery = function () {
        this.getImage("gallery");
    };
    UploadImagePage.prototype.viewImage = function () {
        this.photoViewer.show(this.uploadImage, this.imgtagcloud, { share: true });
    };
    UploadImagePage.prototype.deleteImage = function () {
        this.uploadImage = '';
        localStorage.removeItem("selectedimage");
    };
    UploadImagePage.prototype.getImage = function (img) {
        var _this = this;
        if (img == 'camera') {
            var options = {
                quality: 10,
                destinationType: this.cm.DestinationType.DATA_URL,
                encodingType: this.cm.EncodingType.JPEG,
                mediaType: this.cm.MediaType.PICTURE,
                sourceType: this.cm.PictureSourceType.CAMERA
            };
            this.cm.getPicture(options).then(function (imageData) {
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.uploadImage = base64Image;
                var ldcon = _this.ldcontroller.create({
                    content: 'Saving the image ... '
                });
                ldcon.present();
                _this.data['image_content'] = _this.uploadImage;
                _this.rest.post(_this.codes.SAVE_IMAGE, _this.data).then(function (resp) {
                    localStorage.setItem("selectedimage", JSON.stringify(resp['data']));
                    ldcon.dismiss();
                    _this.view.dismiss();
                });
            }, function (err) {
                // Handle error
            });
        }
        else {
            var options = {
                quality: 10,
                destinationType: this.cm.DestinationType.DATA_URL,
                encodingType: this.cm.EncodingType.JPEG,
                mediaType: this.cm.MediaType.PICTURE,
                sourceType: this.cm.PictureSourceType.PHOTOLIBRARY
            };
            this.cm.getPicture(options).then(function (imageData) {
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.uploadImage = base64Image;
                var ldcon = _this.ldcontroller.create({
                    content: 'Saving the image ... '
                });
                ldcon.present();
                _this.data['image_content'] = _this.uploadImage;
                _this.rest.post(_this.codes.SAVE_IMAGE, _this.data).then(function (resp) {
                    localStorage.setItem("selectedimage", JSON.stringify(resp['data']));
                    ldcon.dismiss();
                    _this.view.dismiss();
                });
            }, function (err) {
                // Handle error
            });
        }
    };
    UploadImagePage.prototype.close = function () {
        this.view.dismiss();
    };
    UploadImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-upload-image',template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/upload-image/upload-image.html"*/'<ion-content padding style="background: rgba(0,0,0,0.6);">\n\n  <p style="text-align: right !important;">\n    <button ion-button clear (click)="close()" style="font-size: 2rem; color: red;">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </p>\n\n<p style="text-align: center !important;margin-top: 20%;">\n  <button ion-button round (click)="camera()" style="width: 50%;height: 100px;font-size: 5rem;">\n    <ion-icon name="camera" class="size"></ion-icon>\n  </button>\n</p>\n<p style="text-align: center !important;">\n  <button ion-button round  (click)="gallery()" style="width: 50%;height: 100px;font-size: 5rem;">\n    <ion-icon name="image" class="size"></ion-icon>\n  </button>\n</p>\n\n<p style="text-align: center !important;">\n  <button ion-button round [disabled]="uploadImage == \'\'"  (click)="viewImage()" style="width: 50%;height: 100px;font-size: 5rem;">\n    <ion-icon name="eye" class="size"></ion-icon>\n  </button>\n</p>\n\n<p style="text-align: center !important;">\n  <button ion-button round  [disabled]="uploadImage == \'\'" (click)="deleteImage()" style="width: 50%;height: 100px;font-size: 5rem;">\n    <ion-icon name="trash" class="size"></ion-icon>\n  </button>\n</p>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/pages/upload-image/upload-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_codes_codes__["a" /* CodesProvider */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], UploadImagePage);
    return UploadImagePage;
}());

//# sourceMappingURL=upload-image.js.map

/***/ })

});
//# sourceMappingURL=9.js.map