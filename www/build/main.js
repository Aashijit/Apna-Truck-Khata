webpackJsonp([76],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodesProvider = /** @class */ (function () {
    function CodesProvider(http) {
        this.http = http;
        this.BASE_URL = "http://127.0.0.1:8000/api/";
        this.BASE_URL_SERV_1 = "https://www.manpuriaproducts.org/saarthi/public/index.php/api/";
        this.BASE_URL_SERV_2 = "https://api.fastdeliveryindia.com/public/index.php/api/";
        this.BASE_URL_PROD = "https://www.atkindia.com/public/index.php/api/";
        this.BASE_URL_REPORT = "http://report.atkindia.com/public/api/";
        this.BASE_URL_REPORT_DOWNLOAD = "http://report.atkindia.com/public/";
        this.BASE_URL_REPORT_TEST = "http://127.0.0.1:8001/api/";
        this.BASE_URL_REPORT_DOWNLOAD_TEST = "http://127.0.0.1:8001/";
        this.GET_REGISTRATION_INFO = this.BASE_URL + "getregistrationinfo";
        this.SAVE_REGISTRATION_INFO = this.BASE_URL + "saveregistrationinfo";
        this.LOGIN = this.BASE_URL + "login";
        this.SAVE_VEHICLE_DETAILS = this.BASE_URL + "savevehicledetails";
        this.UPDATE_VEHICLE_DETAILS = this.BASE_URL + "updatevehiclebyvehicleid";
        this.DELETE_VEHICLE_DETAILS = this.BASE_URL + "deletevehiclebyid";
        this.UPDATE_WORK_DETAILS = this.BASE_URL + "updatevehiclestatus";
        this.GET_UPDATE_WORK_DETAILS = this.BASE_URL + "getupdatevehiclestatus";
        this.SAVE_WORK_PART = this.BASE_URL + "saveworkpart";
        this.GET_WORK_PART = this.BASE_URL + "getworkpart";
        this.UPDATE_WORK_UPDATE = this.BASE_URL + "updatevehiclestatusbyid";
        this.UPDATE_WORK_DELETE = this.BASE_URL + "deletevehiclestatusbyid";
        this.GET_VEHICLE_DETAILS = this.BASE_URL + "getvehicledetailsbysrthid";
        this.UPDATE_PROFILE = this.BASE_URL + "updateprofile";
        this.GET_PROFILE = this.BASE_URL + "getprofile";
        this.SAVE_REASON = this.BASE_URL + "savedriverreason";
        this.GET_REASON = this.BASE_URL + "getdriverreason";
        this.DELETE_REASON = this.BASE_URL + "deletedriverreason";
        this.ADD_EXPENSE_BILL = this.BASE_URL + "adddriverexpensebill";
        this.GET_EXPENSE_BILL_BY_SRTH_ID = this.BASE_URL + "getdriverexpensebillbysrthid";
        this.GET_EXPENSE_BILL_BY_WORKER_ID = this.BASE_URL + "getdriverexpensebillbyworkerid";
        this.GET_EXPENSE_BILL_BY_WORKER_ID_UNPAID = this.BASE_URL + "getdriverexpensebillbyworkeridunpaid";
        this.DELETE_BILL_EXPENSE = this.BASE_URL + "deletebillbybillid";
        this.UPDATE_BILL_EXPENSE = this.BASE_URL + "updatebillbybillid";
        this.DELETE_PAYMENT = this.BASE_URL + "deletepayment";
        this.UPDATE_PAYMENT = this.BASE_URL + "editpayment";
        this.UPDATE_VEHICLE_DRIVER = this.BASE_URL + "updatevehicledriver";
        this.GET_DISPLAY_BILL_BY_WORKER_ID = this.BASE_URL + "getdisplaybillbyworkerid";
        this.CREATE_WORKER = this.BASE_URL + "createworker";
        this.GET_WORKER = this.BASE_URL + "getworkerbysrrthid";
        this.UPDATE_WORKER = this.BASE_URL + "updateworker";
        this.DELETE_WORKER = this.BASE_URL + "deleteworker";
        this.CREATE_PAYMENT = this.BASE_URL + "createpayment";
        this.GET_VEHICLE_BY_WORKER_ID = this.BASE_URL + "getvehiclehistorybyworkerid";
        this.GET_BILL_DETAILS_BY_BILL_ID = this.BASE_URL + "getbilldetailsbybillid";
        this.SAVE_COMPLAINTS = this.BASE_URL + "savecomplaints";
        this.GET_COMPLAINTS = this.BASE_URL + "getcomplaintsbysrthid";
        this.UPDATE_COMPLAINTS = this.BASE_URL + "updatecomplaintsbycomplaintid";
        this.SOLVE_COMPLAINTS = this.BASE_URL + "solvecomplaintbyid";
        this.DELETE_COMPLAINTS = this.BASE_URL + "deletecomplaintbyid";
        this.UPDATE_DOCUMENT_BILL = this.BASE_URL + "updatedocumentbill";
        this.SAVE_PROBLEM = this.BASE_URL + "saveproblem";
        this.GET_PROBLEM = this.BASE_URL + "getproblembysrthid";
        this.SAVE_PROBLEM_PARTS = this.BASE_URL + "saveproblemparts";
        this.GET_PROBLEM_PARTS = this.BASE_URL + "getbillproblemparts";
        this.UPDATE_DOCUMENT_INFO = this.BASE_URL + "updatedocumentinfo";
        this.GET_DOCUMENT_INFO = this.BASE_URL + "getdocumentinfo";
        this.GET_DOCUMENT_INFO_BY_SRTH_ID = this.BASE_URL + "getdocumentinfobysrthid";
        this.GET_LAST_BILL_ID = this.BASE_URL + "getlastbillid";
        this.SAVE_IMAGE = this.BASE_URL + "saveimage";
        this.GET_IMAGE_BY_IMAGE_ID = this.BASE_URL + "getimagebyimageid";
        this.GET_IMAGE_BY_WORKER_TYPE = this.BASE_URL + "getimagebyworkertype";
        this.GET_IMAGE_BY_TYPE_WORKER_TYPE = this.BASE_URL + "getimagebytypeworkertype";
        this.SAVE_EXCHANGE_PART = this.BASE_URL + "savevehicleexchangeinfo";
        this.GET_EXCHANGE_PART = this.BASE_URL + "getvehicleexchangeinfo";
        this.GET_BILL_FOR_VEHICLE = this.BASE_URL + "getallbillsforvehicle";
        this.GET_BILL_SUMMARY = this.BASE_URL + "getbillsummary";
        this.GET_IMAGES_BY_SRTH_ID = this.BASE_URL + "getimagebysrthid";
        this.GET_LAST_COMPLAINTS_ID = this.BASE_URL + "getlastcomplaintid";
        this.GET_FUEL_PRICES = "https://fuelprice-api-india.herokuapp.com/price/West-Bengal/KOLKATA";
        //Reports
        this.SHOP_BILL_REPORT = this.BASE_URL_REPORT + "shopbillreportweb";
        this.SHOP_BILL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "shopbillreport";
        this.SHOP_BUY_REPORT = this.BASE_URL_REPORT + "shopbuyreportweb";
        this.SHOP_BUY_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "shopbuyreportapi";
        this.MECHANIC_BILL_REPORT = this.BASE_URL_REPORT + "mechanicbillreportapi";
        this.MECHANIC_BILL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "mechanicbillreportweb";
        this.MECHANIC_BUY_REPORT = this.BASE_URL_REPORT + "mechanicbuyreportapi";
        this.MECHANIC_BUY_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "mechanicbuyreportweb";
        this.FULL_REPORT = this.BASE_URL_REPORT + "fullreportapi";
        this.FULL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "fullreportweb";
        this.DOCUMENT_BILL_REPORT = this.BASE_URL_REPORT + "documentbillreportapi";
        this.DOCUMENT_BILL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "documentbillreportweb";
        this.DOCUMENT_DATE_REPORT = this.BASE_URL_REPORT + "documentdatereportapi";
        this.DOCUMENT_DATE_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "documentdatereportweb";
        this.VEHICLE_WORK_REPORT = this.BASE_URL_REPORT + "vehicleworkreportapi";
        this.VEHICLE_WORK_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "vehicleworkreportweb";
        this.VEHICLE_BILL_REPORT = this.BASE_URL_REPORT + "vehiclebillreportapi";
        this.VEHICLE_BILL_REPORT_DOWNLOAD = this.BASE_URL_REPORT_DOWNLOAD + "vehiclebillreportweb";
        this.K_ACCOUNT_INFO = "accountinfo";
        this.SELECTED_WORK_PART = "selectedworkpart";
        this.DETAILS = "details";
        this.ADDED_VEHICLE_ID = "addedvehicleid";
        this.SELECTED_REASON = "selectedreason";
        this.DATE = "date";
        console.log('Hello CodesProvider Provider');
    }
    CodesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CodesProvider);
    return CodesProvider;
}());

//# sourceMappingURL=codes.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		841,
		75
	],
	"../pages/account-khata/account-khata.module": [
		842,
		74
	],
	"../pages/add-complaints/add-complaints.module": [
		843,
		73
	],
	"../pages/add-document-bill/add-document-bill.module": [
		844,
		72
	],
	"../pages/add-driver-expenses/add-driver-expenses.module": [
		845,
		71
	],
	"../pages/add-driver/add-driver.module": [
		846,
		70
	],
	"../pages/add-mechanic/add-mechanic.module": [
		847,
		69
	],
	"../pages/add-more-modal/add-more-modal.module": [
		848,
		68
	],
	"../pages/add-new-bank-account/add-new-bank-account.module": [
		849,
		67
	],
	"../pages/add-permit/add-permit.module": [
		850,
		66
	],
	"../pages/add-vehicle/add-vehicle.module": [
		851,
		0
	],
	"../pages/all-image-khata/all-image-khata.module": [
		852,
		65
	],
	"../pages/allot-driver/allot-driver.module": [
		853,
		64
	],
	"../pages/bill-description/bill-description.module": [
		854,
		63
	],
	"../pages/bill-details/bill-details.module": [
		855,
		62
	],
	"../pages/bill-payment-search/bill-payment-search.module": [
		856,
		61
	],
	"../pages/buy-details-search-modal/buy-details-search-modal.module": [
		857,
		60
	],
	"../pages/buy-from-shop/buy-from-shop.module": [
		858,
		59
	],
	"../pages/calendar-modal/calendar-modal.module": [
		859,
		58
	],
	"../pages/camera-modal/camera-modal.module": [
		860,
		57
	],
	"../pages/change-driver/change-driver.module": [
		861,
		56
	],
	"../pages/complaints-khata/complaints-khata.module": [
		862,
		55
	],
	"../pages/complaints-update/complaints-update.module": [
		863,
		54
	],
	"../pages/contact/contact.module": [
		864,
		53
	],
	"../pages/decision-modal/decision-modal.module": [
		865,
		52
	],
	"../pages/details-modal/details-modal.module": [
		866,
		51
	],
	"../pages/document-and-insurance/document-and-insurance.module": [
		867,
		50
	],
	"../pages/document-bill-report/document-bill-report.module": [
		868,
		49
	],
	"../pages/document-date-report/document-date-report.module": [
		869,
		48
	],
	"../pages/document-renewal/document-renewal.module": [
		870,
		47
	],
	"../pages/document/document.module": [
		871,
		46
	],
	"../pages/driver-details-search/driver-details-search.module": [
		873,
		45
	],
	"../pages/driver-document/driver-document.module": [
		872,
		44
	],
	"../pages/driver-khata-search/driver-khata-search.module": [
		874,
		43
	],
	"../pages/driver-khata/driver-khata.module": [
		875,
		42
	],
	"../pages/driver/driver.module": [
		877,
		41
	],
	"../pages/edit-profile/edit-profile.module": [
		876,
		40
	],
	"../pages/exchange-modal/exchange-modal.module": [
		878,
		39
	],
	"../pages/full-report/full-report.module": [
		879,
		38
	],
	"../pages/home/home.module": [
		880,
		37
	],
	"../pages/init/init.module": [
		881,
		36
	],
	"../pages/insurance/insurance.module": [
		882,
		35
	],
	"../pages/language/language.module": [
		883,
		34
	],
	"../pages/ledger/ledger.module": [
		884,
		33
	],
	"../pages/mechanic-bill/mechanic-bill.module": [
		885,
		32
	],
	"../pages/mechanic-khata/mechanic-khata.module": [
		886,
		31
	],
	"../pages/mechanic/mechanic.module": [
		887,
		30
	],
	"../pages/parts-bill-details-modal/parts-bill-details-modal.module": [
		888,
		29
	],
	"../pages/parts-work-modal/parts-work-modal.module": [
		889,
		28
	],
	"../pages/problem-modal/problem-modal.module": [
		890,
		27
	],
	"../pages/problem-work-part-modal/problem-work-part-modal.module": [
		891,
		26
	],
	"../pages/profile/profile.module": [
		892,
		25
	],
	"../pages/reason-modal/reason-modal.module": [
		893,
		24
	],
	"../pages/remove-driver-from-account/remove-driver-from-account.module": [
		894,
		23
	],
	"../pages/remove-driver/remove-driver.module": [
		895,
		22
	],
	"../pages/report-all-comp/report-all-comp.module": [
		896,
		21
	],
	"../pages/report-full/report-full.module": [
		897,
		20
	],
	"../pages/report-khata/report-khata.module": [
		898,
		19
	],
	"../pages/report-modal/report-modal.module": [
		899,
		18
	],
	"../pages/security-and-backup/security-and-backup.module": [
		900,
		17
	],
	"../pages/settings/settings.module": [
		901,
		16
	],
	"../pages/shop-bill-description/shop-bill-description.module": [
		902,
		15
	],
	"../pages/shop-bill-details/shop-bill-details.module": [
		903,
		14
	],
	"../pages/shop-khata/shop-khata.module": [
		905,
		13
	],
	"../pages/shop/shop.module": [
		904,
		12
	],
	"../pages/tabs/tabs.module": [
		906,
		11
	],
	"../pages/upload-image/upload-image.module": [
		907,
		10
	],
	"../pages/vehicle-bill-report/vehicle-bill-report.module": [
		908,
		9
	],
	"../pages/vehicle-details/vehicle-details.module": [
		909,
		8
	],
	"../pages/vehicle-document-bill/vehicle-document-bill.module": [
		910,
		7
	],
	"../pages/vehicle-document/vehicle-document.module": [
		911,
		6
	],
	"../pages/vehicle-khata/vehicle-khata.module": [
		912,
		5
	],
	"../pages/vehicle-work-report/vehicle-work-report.module": [
		913,
		4
	],
	"../pages/view-bill/view-bill.module": [
		914,
		3
	],
	"../pages/view-payment/view-payment.module": [
		915,
		2
	],
	"../pages/view-transaction/view-transaction.module": [
		916,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.post = function (url, data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-type", "application/json");
        return new Promise(function (resolve, reject) {
            _this.http.post(url, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.get = function (url, data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-type", "application/json");
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MessageProvider = /** @class */ (function () {
    function MessageProvider(http, toast) {
        this.http = http;
        this.toast = toast;
        console.log('Hello MessageProvider Provider');
    }
    MessageProvider.prototype.displayToast = function (message) {
        var toast = this.toast.create({
            message: message,
            // duration: 3000,
            position: 'bottom',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MessageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], MessageProvider);
    return MessageProvider;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(504);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_message_message__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_img_viewer__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_photo_viewer__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_14_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#HomePageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-khata/account-khata.module#AccountKhataPageModule', name: 'AccountKhataPage', segment: 'account-khata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-complaints/add-complaints.module#AddComplaintsPageModule', name: 'AddComplaintsPage', segment: 'add-complaints', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-document-bill/add-document-bill.module#AddDocumentBillPageModule', name: 'AddDocumentBillPage', segment: 'add-document-bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-driver-expenses/add-driver-expenses.module#AddDriverExpensesPageModule', name: 'AddDriverExpensesPage', segment: 'add-driver-expenses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-driver/add-driver.module#AddDriverPageModule', name: 'AddDriverPage', segment: 'add-driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-mechanic/add-mechanic.module#AddMechanicPageModule', name: 'AddMechanicPage', segment: 'add-mechanic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-more-modal/add-more-modal.module#AddMoreModalPageModule', name: 'AddMoreModalPage', segment: 'add-more-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-new-bank-account/add-new-bank-account.module#AddNewBankAccountPageModule', name: 'AddNewBankAccountPage', segment: 'add-new-bank-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-permit/add-permit.module#AddPermitPageModule', name: 'AddPermitPage', segment: 'add-permit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-vehicle/add-vehicle.module#AddVehiclePageModule', name: 'AddVehiclePage', segment: 'add-vehicle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-image-khata/all-image-khata.module#AllImageKhataPageModule', name: 'AllImageKhataPage', segment: 'all-image-khata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allot-driver/allot-driver.module#AllotDriverPageModule', name: 'AllotDriverPage', segment: 'allot-driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bill-description/bill-description.module#BillDescriptionPageModule', name: 'BillDescriptionPage', segment: 'bill-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bill-details/bill-details.module#BillDetailsPageModule', name: 'BillDetailsPage', segment: 'bill-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bill-payment-search/bill-payment-search.module#BillPaymentSearchPageModule', name: 'BillPaymentSearchPage', segment: 'bill-payment-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-details-search-modal/buy-details-search-modal.module#BuyDetailsSearchModalPageModule', name: 'BuyDetailsSearchModalPage', segment: 'buy-details-search-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-from-shop/buy-from-shop.module#BuyFromShopPageModule', name: 'BuyFromShopPage', segment: 'buy-from-shop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar-modal/calendar-modal.module#CalendarModalPageModule', name: 'CalendarModalPage', segment: 'calendar-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/camera-modal/camera-modal.module#CameraModalPageModule', name: 'CameraModalPage', segment: 'camera-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-driver/change-driver.module#ChangeDriverPageModule', name: 'ChangeDriverPage', segment: 'change-driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complaints-khata/complaints-khata.module#ComplaintsKhataPageModule', name: 'ComplaintsKhataPage', segment: 'complaints-khata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complaints-update/complaints-update.module#ComplaintsUpdatePageModule', name: 'ComplaintsUpdatePage', segment: 'complaints-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/decision-modal/decision-modal.module#DecisionModalPageModule', name: 'DecisionModalPage', segment: 'decision-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details-modal/details-modal.module#DetailsModalPageModule', name: 'DetailsModalPage', segment: 'details-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document-and-insurance/document-and-insurance.module#DocumentAndInsurancePageModule', name: 'DocumentAndInsurancePage', segment: 'document-and-insurance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document-bill-report/document-bill-report.module#DocumentBillReportPageModule', name: 'DocumentBillReportPage', segment: 'document-bill-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document-date-report/document-date-report.module#DocumentDateReportPageModule', name: 'DocumentDateReportPage', segment: 'document-date-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document-renewal/document-renewal.module#DocumentRenewalPageModule', name: 'DocumentRenewalPage', segment: 'document-renewal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document/document.module#DocumentPageModule', name: 'DocumentPage', segment: 'document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-document/driver-document.module#DriverDocumentPageModule', name: 'DriverDocumentPage', segment: 'driver-document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-details-search/driver-details-search.module#DriverDetailsSearchPageModule', name: 'DriverDetailsSearchPage', segment: 'driver-details-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-khata-search/driver-khata-search.module#DriverKhataSearchPageModule', name: 'DriverKhataSearchPage', segment: 'driver-khata-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-khata/driver-khata.module#DriverKhataPageModule', name: 'DriverKhataPage', segment: 'driver-khata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver/driver.module#DriverPageModule', name: 'DriverPage', segment: 'driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exchange-modal/exchange-modal.module#ExchangeModalPageModule', name: 'ExchangeModalPage', segment: 'exchange-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/full-report/full-report.module#FullReportPageModule', name: 'FullReportPage', segment: 'full-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/init/init.module#InitPageModule', name: 'InitPage', segment: 'init', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insurance/insurance.module#InsurancePageModule', name: 'InsurancePage', segment: 'insurance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ledger/ledger.module#LedgerPageModule', name: 'LedgerPage', segment: 'ledger', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mechanic-bill/mechanic-bill.module#MechanicBillPageModule', name: 'MechanicBillPage', segment: 'mechanic-bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mechanic-khata/mechanic-khata.module#MechanicKhataPageModule', name: 'MechanicKhataPage', segment: 'mechanic-khata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mechanic/mechanic.module#MechanicPageModule', name: 'MechanicPage', segment: 'mechanic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parts-bill-details-modal/parts-bill-details-modal.module#PartsBillDetailsModalPageModule', name: 'PartsBillDetailsModalPage', segment: 'parts-bill-details-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parts-work-modal/parts-work-modal.module#PartsWorkModalPageModule', name: 'PartsWorkModalPage', segment: 'parts-work-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/problem-modal/problem-modal.module#ProblemModalPageModule', name: 'ProblemModalPage', segment: 'problem-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/problem-work-part-modal/problem-work-part-modal.module#ProblemWorkPartModalPageModule', name: 'ProblemWorkPartModalPage', segment: 'problem-work-part-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reason-modal/reason-modal.module#ReasonModalPageModule', name: 'ReasonModalPage', segment: 'reason-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remove-driver-from-account/remove-driver-from-account.module#RemoveDriverFromAccountPageModule', name: 'RemoveDriverFromAccountPage', segment: 'remove-driver-from-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remove-driver/remove-driver.module#RemoveDriverPageModule', name: 'RemoveDriverPage', segment: 'remove-driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-all-comp/report-all-comp.module#ReportAllCompPageModule', name: 'ReportAllCompPage', segment: 'report-all-comp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-full/report-full.module#ReportFullPageModule', name: 'ReportFullPage', segment: 'report-full', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-khata/report-khata.module#ReportKhataPageModule', name: 'ReportKhataPage', segment: 'report-khata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-modal/report-modal.module#ReportModalPageModule', name: 'ReportModalPage', segment: 'report-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/security-and-backup/security-and-backup.module#SecurityAndBackupPageModule', name: 'SecurityAndBackupPage', segment: 'security-and-backup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop-bill-description/shop-bill-description.module#ShopBillDescriptionPageModule', name: 'ShopBillDescriptionPage', segment: 'shop-bill-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop-bill-details/shop-bill-details.module#ShopBillDetailsPageModule', name: 'ShopBillDetailsPage', segment: 'shop-bill-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop/shop.module#ShopPageModule', name: 'ShopPage', segment: 'shop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop-khata/shop-khata.module#ShopKhataPageModule', name: 'ShopKhataPage', segment: 'shop-khata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-image/upload-image.module#UploadImagePageModule', name: 'UploadImagePage', segment: 'upload-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-bill-report/vehicle-bill-report.module#VehicleBillReportPageModule', name: 'VehicleBillReportPage', segment: 'vehicle-bill-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-details/vehicle-details.module#VehicleDetailsPageModule', name: 'VehicleDetailsPage', segment: 'vehicle-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-document-bill/vehicle-document-bill.module#VehicleDocumentBillPageModule', name: 'VehicleDocumentBillPage', segment: 'vehicle-document-bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-document/vehicle-document.module#VehicleDocumentPageModule', name: 'VehicleDocumentPage', segment: 'vehicle-document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-khata/vehicle-khata.module#VehicleKhataPageModule', name: 'VehicleKhataPage', segment: 'vehicle-khata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-work-report/vehicle-work-report.module#VehicleWorkReportPageModule', name: 'VehicleWorkReportPage', segment: 'vehicle-work-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-bill/view-bill.module#ViewBillPageModule', name: 'ViewBillPage', segment: 'view-bill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-payment/view-payment.module#ViewPaymentPageModule', name: 'ViewPaymentPage', segment: 'view-payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-transaction/view-transaction.module#ViewTransactionPageModule', name: 'ViewTransactionPage', segment: 'view-transaction', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__["a" /* Contact */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_contacts__["b" /* Contacts */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_4__providers_codes_codes__["a" /* CodesProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_3__providers_message_message__["a" /* MessageProvider */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 259,
	"./af.js": 259,
	"./ar": 260,
	"./ar-dz": 261,
	"./ar-dz.js": 261,
	"./ar-kw": 262,
	"./ar-kw.js": 262,
	"./ar-ly": 263,
	"./ar-ly.js": 263,
	"./ar-ma": 264,
	"./ar-ma.js": 264,
	"./ar-sa": 265,
	"./ar-sa.js": 265,
	"./ar-tn": 266,
	"./ar-tn.js": 266,
	"./ar.js": 260,
	"./az": 267,
	"./az.js": 267,
	"./be": 268,
	"./be.js": 268,
	"./bg": 269,
	"./bg.js": 269,
	"./bm": 270,
	"./bm.js": 270,
	"./bn": 271,
	"./bn-bd": 272,
	"./bn-bd.js": 272,
	"./bn.js": 271,
	"./bo": 273,
	"./bo.js": 273,
	"./br": 274,
	"./br.js": 274,
	"./bs": 275,
	"./bs.js": 275,
	"./ca": 276,
	"./ca.js": 276,
	"./cs": 277,
	"./cs.js": 277,
	"./cv": 278,
	"./cv.js": 278,
	"./cy": 279,
	"./cy.js": 279,
	"./da": 280,
	"./da.js": 280,
	"./de": 281,
	"./de-at": 282,
	"./de-at.js": 282,
	"./de-ch": 283,
	"./de-ch.js": 283,
	"./de.js": 281,
	"./dv": 284,
	"./dv.js": 284,
	"./el": 285,
	"./el.js": 285,
	"./en-au": 286,
	"./en-au.js": 286,
	"./en-ca": 287,
	"./en-ca.js": 287,
	"./en-gb": 288,
	"./en-gb.js": 288,
	"./en-ie": 289,
	"./en-ie.js": 289,
	"./en-il": 290,
	"./en-il.js": 290,
	"./en-in": 291,
	"./en-in.js": 291,
	"./en-nz": 292,
	"./en-nz.js": 292,
	"./en-sg": 293,
	"./en-sg.js": 293,
	"./eo": 294,
	"./eo.js": 294,
	"./es": 295,
	"./es-do": 296,
	"./es-do.js": 296,
	"./es-mx": 297,
	"./es-mx.js": 297,
	"./es-us": 298,
	"./es-us.js": 298,
	"./es.js": 295,
	"./et": 299,
	"./et.js": 299,
	"./eu": 300,
	"./eu.js": 300,
	"./fa": 301,
	"./fa.js": 301,
	"./fi": 302,
	"./fi.js": 302,
	"./fil": 303,
	"./fil.js": 303,
	"./fo": 304,
	"./fo.js": 304,
	"./fr": 305,
	"./fr-ca": 306,
	"./fr-ca.js": 306,
	"./fr-ch": 307,
	"./fr-ch.js": 307,
	"./fr.js": 305,
	"./fy": 308,
	"./fy.js": 308,
	"./ga": 309,
	"./ga.js": 309,
	"./gd": 310,
	"./gd.js": 310,
	"./gl": 311,
	"./gl.js": 311,
	"./gom-deva": 312,
	"./gom-deva.js": 312,
	"./gom-latn": 313,
	"./gom-latn.js": 313,
	"./gu": 314,
	"./gu.js": 314,
	"./he": 315,
	"./he.js": 315,
	"./hi": 316,
	"./hi.js": 316,
	"./hr": 317,
	"./hr.js": 317,
	"./hu": 318,
	"./hu.js": 318,
	"./hy-am": 319,
	"./hy-am.js": 319,
	"./id": 320,
	"./id.js": 320,
	"./is": 321,
	"./is.js": 321,
	"./it": 322,
	"./it-ch": 323,
	"./it-ch.js": 323,
	"./it.js": 322,
	"./ja": 324,
	"./ja.js": 324,
	"./jv": 325,
	"./jv.js": 325,
	"./ka": 326,
	"./ka.js": 326,
	"./kk": 327,
	"./kk.js": 327,
	"./km": 328,
	"./km.js": 328,
	"./kn": 329,
	"./kn.js": 329,
	"./ko": 330,
	"./ko.js": 330,
	"./ku": 331,
	"./ku.js": 331,
	"./ky": 332,
	"./ky.js": 332,
	"./lb": 333,
	"./lb.js": 333,
	"./lo": 334,
	"./lo.js": 334,
	"./lt": 335,
	"./lt.js": 335,
	"./lv": 336,
	"./lv.js": 336,
	"./me": 337,
	"./me.js": 337,
	"./mi": 338,
	"./mi.js": 338,
	"./mk": 339,
	"./mk.js": 339,
	"./ml": 340,
	"./ml.js": 340,
	"./mn": 341,
	"./mn.js": 341,
	"./mr": 342,
	"./mr.js": 342,
	"./ms": 343,
	"./ms-my": 344,
	"./ms-my.js": 344,
	"./ms.js": 343,
	"./mt": 345,
	"./mt.js": 345,
	"./my": 346,
	"./my.js": 346,
	"./nb": 347,
	"./nb.js": 347,
	"./ne": 348,
	"./ne.js": 348,
	"./nl": 349,
	"./nl-be": 350,
	"./nl-be.js": 350,
	"./nl.js": 349,
	"./nn": 351,
	"./nn.js": 351,
	"./oc-lnc": 352,
	"./oc-lnc.js": 352,
	"./pa-in": 353,
	"./pa-in.js": 353,
	"./pl": 354,
	"./pl.js": 354,
	"./pt": 355,
	"./pt-br": 356,
	"./pt-br.js": 356,
	"./pt.js": 355,
	"./ro": 357,
	"./ro.js": 357,
	"./ru": 358,
	"./ru.js": 358,
	"./sd": 359,
	"./sd.js": 359,
	"./se": 360,
	"./se.js": 360,
	"./si": 361,
	"./si.js": 361,
	"./sk": 362,
	"./sk.js": 362,
	"./sl": 363,
	"./sl.js": 363,
	"./sq": 364,
	"./sq.js": 364,
	"./sr": 365,
	"./sr-cyrl": 366,
	"./sr-cyrl.js": 366,
	"./sr.js": 365,
	"./ss": 367,
	"./ss.js": 367,
	"./sv": 368,
	"./sv.js": 368,
	"./sw": 369,
	"./sw.js": 369,
	"./ta": 370,
	"./ta.js": 370,
	"./te": 371,
	"./te.js": 371,
	"./tet": 372,
	"./tet.js": 372,
	"./tg": 373,
	"./tg.js": 373,
	"./th": 374,
	"./th.js": 374,
	"./tk": 375,
	"./tk.js": 375,
	"./tl-ph": 376,
	"./tl-ph.js": 376,
	"./tlh": 377,
	"./tlh.js": 377,
	"./tr": 378,
	"./tr.js": 378,
	"./tzl": 379,
	"./tzl.js": 379,
	"./tzm": 380,
	"./tzm-latn": 381,
	"./tzm-latn.js": 381,
	"./tzm.js": 380,
	"./ug-cn": 382,
	"./ug-cn.js": 382,
	"./uk": 383,
	"./uk.js": 383,
	"./ur": 384,
	"./ur.js": 384,
	"./uz": 385,
	"./uz-latn": 386,
	"./uz-latn.js": 386,
	"./uz.js": 385,
	"./vi": 387,
	"./vi.js": 387,
	"./x-pseudo": 388,
	"./x-pseudo.js": 388,
	"./yo": 389,
	"./yo.js": 389,
	"./zh-cn": 390,
	"./zh-cn.js": 390,
	"./zh-hk": 391,
	"./zh-hk.js": 391,
	"./zh-mo": 392,
	"./zh-mo.js": 392,
	"./zh-tw": 393,
	"./zh-tw.js": 393
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 546;

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { TabsPage } from '../pages/tabs/tabs';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, codes) {
        var _this = this;
        this.codes = codes;
        this.rootPage = '';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (localStorage.getItem(_this.codes.K_ACCOUNT_INFO) == null || localStorage.getItem(_this.codes.K_ACCOUNT_INFO) == undefined) {
                _this.rootPage = 'InitPage';
            }
            else
                _this.rootPage = 'TabsPage';
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/aashijitmukhopadhyay/Documents/Apna-Truck-Khata/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__providers_codes_codes__["a" /* CodesProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[499]);
//# sourceMappingURL=main.js.map