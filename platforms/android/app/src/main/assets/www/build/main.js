webpackJsonp([81],{184:function(e,a,t){"use strict";t.d(a,"a",function(){return r});t(2);var o=t(74),r=function(){function e(e){this.http=e,console.log("Hello RestProvider Provider")}return e.prototype.post=function(e,a){var t=this,r=(new o.g).set("Content-type","application/json");return new Promise(function(o,l){t.http.post(e,JSON.stringify(a),{headers:r}).subscribe(function(e){o(e)},function(e){l(e)})})},e.prototype.get=function(e,a){var t=this;(new o.g).set("Content-type","application/json");return new Promise(function(a,o){t.http.get(e).subscribe(function(e){a(e)},function(e){o(e)})})},e.prototype.getModelsBrand=function(){var e=this;return new Promise(function(a,t){e.http.get("../../assets/vehicle_master.json").subscribe(function(e){a(e)},function(e){t(e)})})},e}()},188:function(e,a,t){"use strict";t.d(a,"a",function(){return o});t(2),t(26);var o=function(){function e(e,a){this.http=e,this.toast=a,console.log("Hello MessageProvider Provider")}return e.prototype.displayToast=function(e){var a=this.toast.create({message:e,position:"bottom",showCloseButton:!0});a.onDidDismiss(function(){console.log("Dismissed toast")}),a.present()},e}()},224:function(e,a){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=224},248:function(e,a,t){function o(e){var a=r[e];return a?t.e(a[1]).then(function(){return t(a[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"../pages/about/about.module.ngfactory":[814,80],"../pages/account-khata/account-khata.module.ngfactory":[815,49],"../pages/account-payment-search-modal/account-payment-search-modal.module.ngfactory":[816,48],"../pages/add-complaints/add-complaints.module.ngfactory":[817,30],"../pages/add-document-bill/add-document-bill.module.ngfactory":[818,47],"../pages/add-driver-expenses/add-driver-expenses.module.ngfactory":[819,29],"../pages/add-driver/add-driver.module.ngfactory":[820,28],"../pages/add-mechanic/add-mechanic.module.ngfactory":[821,1],"../pages/add-more-modal/add-more-modal.module.ngfactory":[822,79],"../pages/add-new-bank-account/add-new-bank-account.module.ngfactory":[823,78],"../pages/add-permit/add-permit.module.ngfactory":[824,53],"../pages/add-vehicle/add-vehicle.module.ngfactory":[825,6],"../pages/all-driver-report/all-driver-report.module.ngfactory":[826,27],"../pages/all-image-khata/all-image-khata.module.ngfactory":[827,46],"../pages/allot-driver/allot-driver.module.ngfactory":[828,26],"../pages/bill-description/bill-description.module.ngfactory":[829,5],"../pages/bill-details/bill-details.module.ngfactory":[830,4],"../pages/bill-payment-search/bill-payment-search.module.ngfactory":[831,45],"../pages/buy-details-search-modal/buy-details-search-modal.module.ngfactory":[832,44],"../pages/buy-from-shop/buy-from-shop.module.ngfactory":[833,25],"../pages/calendar-modal/calendar-modal.module.ngfactory":[834,77],"../pages/camera-modal/camera-modal.module.ngfactory":[835,76],"../pages/change-driver/change-driver.module.ngfactory":[836,24],"../pages/complaints-khata/complaints-khata.module.ngfactory":[837,43],"../pages/complaints-update/complaints-update.module.ngfactory":[838,9],"../pages/contact/contact.module.ngfactory":[839,75],"../pages/decision-modal/decision-modal.module.ngfactory":[840,74],"../pages/details-modal/details-modal.module.ngfactory":[841,51],"../pages/document-and-insurance/document-and-insurance.module.ngfactory":[842,73],"../pages/document-bill-report/document-bill-report.module.ngfactory":[844,72],"../pages/document-date-report/document-date-report.module.ngfactory":[843,71],"../pages/document-renewal/document-renewal.module.ngfactory":[845,23],"../pages/document/document.module.ngfactory":[846,42],"../pages/driver-details-search/driver-details-search.module.ngfactory":[847,41],"../pages/driver-document/driver-document.module.ngfactory":[848,2],"../pages/driver-expense/driver-expense.module.ngfactory":[849,22],"../pages/driver-khata-search/driver-khata-search.module.ngfactory":[850,40],"../pages/driver-khata/driver-khata.module.ngfactory":[851,39],"../pages/driver/driver.module.ngfactory":[853,38],"../pages/edit-other-document-name/edit-other-document-name.module.ngfactory":[852,50],"../pages/edit-profile/edit-profile.module.ngfactory":[854,21],"../pages/exchange-modal/exchange-modal.module.ngfactory":[855,0],"../pages/fatal-error/fatal-error.module.ngfactory":[856,70],"../pages/full-report/full-report.module.ngfactory":[858,69],"../pages/home/home.module.ngfactory":[857,68],"../pages/init/init.module.ngfactory":[859,67],"../pages/insurance/insurance.module.ngfactory":[860,37],"../pages/language/language.module.ngfactory":[861,66],"../pages/ledger/ledger.module.ngfactory":[863,20],"../pages/mechanic-bill/mechanic-bill.module.ngfactory":[862,19],"../pages/mechanic-khata/mechanic-khata.module.ngfactory":[864,36],"../pages/mechanic/mechanic.module.ngfactory":[865,35],"../pages/parts-bill-details-modal/parts-bill-details-modal.module.ngfactory":[866,12],"../pages/parts-work-modal/parts-work-modal.module.ngfactory":[867,34],"../pages/problem-modal/problem-modal.module.ngfactory":[868,8],"../pages/problem-work-part-modal/problem-work-part-modal.module.ngfactory":[869,7],"../pages/profile/profile.module.ngfactory":[870,65],"../pages/reason-modal/reason-modal.module.ngfactory":[871,33],"../pages/remove-driver-from-account/remove-driver-from-account.module.ngfactory":[872,52],"../pages/remove-driver/remove-driver.module.ngfactory":[873,64],"../pages/report-all-comp/report-all-comp.module.ngfactory":[874,63],"../pages/report-full/report-full.module.ngfactory":[875,18],"../pages/report-khata/report-khata.module.ngfactory":[876,62],"../pages/report-modal/report-modal.module.ngfactory":[877,17],"../pages/security-and-backup/security-and-backup.module.ngfactory":[878,61],"../pages/settings/settings.module.ngfactory":[879,11],"../pages/shop-bill-description/shop-bill-description.module.ngfactory":[880,3],"../pages/shop-bill-details/shop-bill-details.module.ngfactory":[881,16],"../pages/shop-khata/shop-khata.module.ngfactory":[882,32],"../pages/shop/shop.module.ngfactory":[883,31],"../pages/tabs/tabs.module.ngfactory":[884,60],"../pages/upload-image/upload-image.module.ngfactory":[886,59],"../pages/vehicle-bill-report/vehicle-bill-report.module.ngfactory":[885,15],"../pages/vehicle-details/vehicle-details.module.ngfactory":[887,58],"../pages/vehicle-document-bill/vehicle-document-bill.module.ngfactory":[888,14],"../pages/vehicle-document/vehicle-document.module.ngfactory":[889,10],"../pages/vehicle-khata/vehicle-khata.module.ngfactory":[890,57],"../pages/vehicle-work-report/vehicle-work-report.module.ngfactory":[891,13],"../pages/view-bill/view-bill.module.ngfactory":[892,56],"../pages/view-payment/view-payment.module.ngfactory":[893,55],"../pages/view-transaction/view-transaction.module.ngfactory":[894,54]};o.keys=function(){return Object.keys(r)},o.id=248,e.exports=o},520:function(e,a,t){"use strict";function o(e){return l["ɵvid"](0,[(e()(),l["ɵeld"](0,0,null,null,2,"ion-nav",[],null,null,null,U.b,U.a)),l["ɵprd"](6144,null,I.a,null,[F.a]),l["ɵdid"](2,4374528,null,0,F.a,[[2,H.a],[2,V.a],W.a,K.a,G.a,l.ElementRef,l.NgZone,l.Renderer,l.ComponentFactoryResolver,x.m,z.a,[2,Y.a],X.a,l.ErrorHandler],{root:[0,"root"]},null)],function(e,a){e(a,2,0,a.component.rootPage)},null)}Object.defineProperty(a,"__esModule",{value:!0});var r=t(34),l=t(0),i=(t(2),t(515),t(15)),d=t(207),n=t(188),s=t(84),m=t(184),c=t(211),g=(t(26),t(109)),p=t(110),u=function(){return function(e,a,t,o){this.codes=o,this.rootPage="InitPage",e.ready().then(function(){a.styleDefault(),t.hide()})}}(),h=t(74),y=(t(530),t(500)),E=t(192),f=t(212),_=t(208),R=(t(518),function(){return function(){}}()),P=t(66),A=t(502),b=t(503),v=t(504),L=t(505),D=t(506),S=t(507),T=t(508),N=t(509),O=t(510),C=t(516),w=t(127),B=t(126),M=t(514),j=t(201),k=t(812),U=t(813),I=t(52),F=t(73),H=t(8),V=t(29),W=t(13),K=t(4),G=t(7),x=t(11),z=t(44),Y=t(24),X=t(14),Z=l["ɵcrt"]({encapsulation:2,styles:[],data:{}}),q=l["ɵccf"]("ng-component",u,function(e){return l["ɵvid"](0,[(e()(),l["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,o,Z)),l["ɵdid"](1,49152,null,0,u,[G.a,g.a,p.a,s.a],null,null)],null,null)},{},{},[]),J=t(151),Q=t(501),$=t(19),ee=t(51),ae=t(68),te=t(185),oe=t(55),re=t(121),le=t(128),ie=t(202),de=t(111),ne=t(183),se=t(131),me=t(142),ce=t(124),ge=t(150),pe=t(28),ue=t(43),he=t(40),ye=t(125),Ee=t(88),fe=t(157),_e=t(153),Re=t(163),Pe=t(406),Ae=t(152),be=t(48),ve=t(149),Le=t(154),De=t(407),Se=t(519),Te=l["ɵcmf"](R,[P.b],function(e){return l["ɵmod"]([l["ɵmpd"](512,l.ComponentFactoryResolver,l["ɵCodegenComponentFactoryResolver"],[[8,[A.a,b.a,v.a,L.a,D.a,S.a,T.a,N.a,O.a,C.a,w.a,B.a,M.a,j.a,k.a,q]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["ɵmpd"](5120,l.LOCALE_ID,l["ɵq"],[[3,l.LOCALE_ID]]),l["ɵmpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[l.LOCALE_ID,[2,i["ɵa"]]]),l["ɵmpd"](5120,l.APP_ID,l["ɵi"],[]),l["ɵmpd"](5120,l.IterableDiffers,l["ɵn"],[]),l["ɵmpd"](5120,l.KeyValueDiffers,l["ɵo"],[]),l["ɵmpd"](4608,r.c,r.q,[i.DOCUMENT]),l["ɵmpd"](6144,l.Sanitizer,null,[r.c]),l["ɵmpd"](4608,r.f,J.a,[]),l["ɵmpd"](5120,r.d,function(e,a,t,o,l){return[new r.k(e,a),new r.o(t),new r.n(o,l)]},[i.DOCUMENT,l.NgZone,i.DOCUMENT,i.DOCUMENT,r.f]),l["ɵmpd"](4608,r.e,r.e,[r.d,l.NgZone]),l["ɵmpd"](135680,r.m,r.m,[i.DOCUMENT]),l["ɵmpd"](4608,r.l,r.l,[r.e,r.m]),l["ɵmpd"](5120,Q.a,y.d,[]),l["ɵmpd"](5120,Q.c,y.e,[]),l["ɵmpd"](4608,Q.b,y.c,[Q.a,Q.c]),l["ɵmpd"](5120,l.RendererFactory2,y.f,[r.l,Q.b,l.NgZone]),l["ɵmpd"](6144,r.p,null,[r.m]),l["ɵmpd"](4608,l.Testability,l.Testability,[l.NgZone]),l["ɵmpd"](4608,r.h,r.h,[i.DOCUMENT]),l["ɵmpd"](4608,r.i,r.i,[i.DOCUMENT]),l["ɵmpd"](4608,h.i,h.o,[i.DOCUMENT,l.PLATFORM_ID,h.m]),l["ɵmpd"](4608,h.p,h.p,[h.i,h.n]),l["ɵmpd"](5120,h.a,function(e){return[e]},[h.p]),l["ɵmpd"](4608,h.l,h.l,[]),l["ɵmpd"](6144,h.j,null,[h.l]),l["ɵmpd"](4608,h.h,h.h,[h.j]),l["ɵmpd"](6144,h.b,null,[h.h]),l["ɵmpd"](4608,h.f,h.k,[h.b,l.Injector]),l["ɵmpd"](4608,h.c,h.c,[h.f]),l["ɵmpd"](4608,$["ɵi"],$["ɵi"],[]),l["ɵmpd"](4608,$.FormBuilder,$.FormBuilder,[]),l["ɵmpd"](4608,ee.CalendarService,ee.CalendarService,[]),l["ɵmpd"](5120,ae.b,ae.d,[W.a,ae.a]),l["ɵmpd"](5120,i.LocationStrategy,te.c,[i.PlatformLocation,[2,i.APP_BASE_HREF],K.a]),l["ɵmpd"](4608,i.Location,i.Location,[i.LocationStrategy]),l["ɵmpd"](5120,Y.a,Y.b,[W.a,ae.b,i.Location,oe.b,l.ComponentFactoryResolver]),l["ɵmpd"](4608,re.a,re.a,[W.a,K.a,Y.a]),l["ɵmpd"](5120,le.CalendarController,ie.calendarController,[re.a,ee.CalendarService]),l["ɵmpd"](4608,de.a,de.a,[W.a,K.a,Y.a]),l["ɵmpd"](4608,ne.b,y.b,[l.RendererFactory2,r.b]),l["ɵmpd"](4608,_.c,_.c,[]),l["ɵmpd"](4608,se.a,se.a,[]),l["ɵmpd"](4608,me.a,me.a,[W.a,K.a]),l["ɵmpd"](4608,ce.a,ce.a,[W.a,K.a]),l["ɵmpd"](4608,ge.a,ge.a,[]),l["ɵmpd"](4608,pe.a,pe.a,[]),l["ɵmpd"](4608,ue.a,ue.a,[G.a]),l["ɵmpd"](4608,he.a,he.a,[K.a,G.a,l.NgZone,X.a]),l["ɵmpd"](4608,ye.a,ye.a,[W.a,K.a]),l["ɵmpd"](4608,Ee.a,Ee.a,[W.a,K.a]),l["ɵmpd"](4608,fe.a,fe.a,[W.a,K.a,Y.a]),l["ɵmpd"](4608,_e.a,_e.a,[K.a,G.a,X.a,W.a,x.m]),l["ɵmpd"](4608,Re.a,Re.a,[W.a,K.a]),l["ɵmpd"](4608,z.a,z.a,[G.a,K.a]),l["ɵmpd"](4608,g.a,g.a,[]),l["ɵmpd"](4608,p.a,p.a,[]),l["ɵmpd"](4608,c.a,c.a,[]),l["ɵmpd"](4608,c.b,c.b,[]),l["ɵmpd"](4608,m.a,m.a,[h.c]),l["ɵmpd"](4608,s.a,s.a,[h.c]),l["ɵmpd"](4608,E.a,E.a,[]),l["ɵmpd"](4608,n.a,n.a,[h.c,Re.a]),l["ɵmpd"](4608,d.a,d.a,[]),l["ɵmpd"](4608,i.DatePipe,i.DatePipe,[l.LOCALE_ID]),l["ɵmpd"](4608,f.a,f.a,[]),l["ɵmpd"](512,i.CommonModule,i.CommonModule,[]),l["ɵmpd"](512,l.ErrorHandler,Pe.a,[]),l["ɵmpd"](256,K.b,{},[]),l["ɵmpd"](1024,Ae.a,Ae.b,[]),l["ɵmpd"](1024,G.a,G.b,[r.b,Ae.a,l.NgZone]),l["ɵmpd"](1024,K.a,K.c,[K.b,G.a]),l["ɵmpd"](512,X.a,X.a,[G.a]),l["ɵmpd"](512,be.a,be.a,[]),l["ɵmpd"](512,W.a,W.a,[K.a,G.a,[2,be.a]]),l["ɵmpd"](512,x.m,x.m,[W.a]),l["ɵmpd"](256,ae.a,{links:[{loadChildren:"../pages/about/about.module.ngfactory#HomePageModuleNgFactory",name:"AboutPage",segment:"about",priority:"low",defaultHistory:[]},{loadChildren:"../pages/account-khata/account-khata.module.ngfactory#AccountKhataPageModuleNgFactory",name:"AccountKhataPage",segment:"account-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/account-payment-search-modal/account-payment-search-modal.module.ngfactory#AccountPaymentSearchModalPageModuleNgFactory",name:"AccountPaymentSearchModalPage",segment:"account-payment-search-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-complaints/add-complaints.module.ngfactory#AddComplaintsPageModuleNgFactory",name:"AddComplaintsPage",segment:"add-complaints",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-document-bill/add-document-bill.module.ngfactory#AddDocumentBillPageModuleNgFactory",name:"AddDocumentBillPage",segment:"add-document-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-driver-expenses/add-driver-expenses.module.ngfactory#AddDriverExpensesPageModuleNgFactory",name:"AddDriverExpensesPage",segment:"add-driver-expenses",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-driver/add-driver.module.ngfactory#AddDriverPageModuleNgFactory",name:"AddDriverPage",segment:"add-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-mechanic/add-mechanic.module.ngfactory#AddMechanicPageModuleNgFactory",name:"AddMechanicPage",segment:"add-mechanic",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-more-modal/add-more-modal.module.ngfactory#AddMoreModalPageModuleNgFactory",name:"AddMoreModalPage",segment:"add-more-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-new-bank-account/add-new-bank-account.module.ngfactory#AddNewBankAccountPageModuleNgFactory",name:"AddNewBankAccountPage",segment:"add-new-bank-account",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-permit/add-permit.module.ngfactory#AddPermitPageModuleNgFactory",name:"AddPermitPage",segment:"add-permit",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-vehicle/add-vehicle.module.ngfactory#AddVehiclePageModuleNgFactory",name:"AddVehiclePage",segment:"add-vehicle",priority:"low",defaultHistory:[]},{loadChildren:"../pages/all-driver-report/all-driver-report.module.ngfactory#AllDriverReportPageModuleNgFactory",name:"AllDriverReportPage",segment:"all-driver-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/all-image-khata/all-image-khata.module.ngfactory#AllImageKhataPageModuleNgFactory",name:"AllImageKhataPage",segment:"all-image-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/allot-driver/allot-driver.module.ngfactory#AllotDriverPageModuleNgFactory",name:"AllotDriverPage",segment:"allot-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/bill-description/bill-description.module.ngfactory#BillDescriptionPageModuleNgFactory",name:"BillDescriptionPage",segment:"bill-description",priority:"low",defaultHistory:[]},{loadChildren:"../pages/bill-details/bill-details.module.ngfactory#BillDetailsPageModuleNgFactory",name:"BillDetailsPage",segment:"bill-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/bill-payment-search/bill-payment-search.module.ngfactory#BillPaymentSearchPageModuleNgFactory",name:"BillPaymentSearchPage",segment:"bill-payment-search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/buy-details-search-modal/buy-details-search-modal.module.ngfactory#BuyDetailsSearchModalPageModuleNgFactory",name:"BuyDetailsSearchModalPage",segment:"buy-details-search-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/buy-from-shop/buy-from-shop.module.ngfactory#BuyFromShopPageModuleNgFactory",name:"BuyFromShopPage",segment:"buy-from-shop",priority:"low",defaultHistory:[]},{loadChildren:"../pages/calendar-modal/calendar-modal.module.ngfactory#CalendarModalPageModuleNgFactory",name:"CalendarModalPage",segment:"calendar-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/camera-modal/camera-modal.module.ngfactory#CameraModalPageModuleNgFactory",name:"CameraModalPage",segment:"camera-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/change-driver/change-driver.module.ngfactory#ChangeDriverPageModuleNgFactory",name:"ChangeDriverPage",segment:"change-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/complaints-khata/complaints-khata.module.ngfactory#ComplaintsKhataPageModuleNgFactory",name:"ComplaintsKhataPage",segment:"complaints-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/complaints-update/complaints-update.module.ngfactory#ComplaintsUpdatePageModuleNgFactory",name:"ComplaintsUpdatePage",segment:"complaints-update",priority:"low",defaultHistory:[]},{loadChildren:"../pages/contact/contact.module.ngfactory#ContactPageModuleNgFactory",name:"ContactPage",segment:"contact",priority:"low",defaultHistory:[]},{loadChildren:"../pages/decision-modal/decision-modal.module.ngfactory#DecisionModalPageModuleNgFactory",name:"DecisionModalPage",segment:"decision-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/details-modal/details-modal.module.ngfactory#DetailsModalPageModuleNgFactory",name:"DetailsModalPage",segment:"details-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-and-insurance/document-and-insurance.module.ngfactory#DocumentAndInsurancePageModuleNgFactory",name:"DocumentAndInsurancePage",segment:"document-and-insurance",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-date-report/document-date-report.module.ngfactory#DocumentDateReportPageModuleNgFactory",name:"DocumentDateReportPage",segment:"document-date-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-bill-report/document-bill-report.module.ngfactory#DocumentBillReportPageModuleNgFactory",name:"DocumentBillReportPage",segment:"document-bill-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-renewal/document-renewal.module.ngfactory#DocumentRenewalPageModuleNgFactory",name:"DocumentRenewalPage",segment:"document-renewal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document/document.module.ngfactory#DocumentPageModuleNgFactory",name:"DocumentPage",segment:"document",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-details-search/driver-details-search.module.ngfactory#DriverDetailsSearchPageModuleNgFactory",name:"DriverDetailsSearchPage",segment:"driver-details-search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-document/driver-document.module.ngfactory#DriverDocumentPageModuleNgFactory",name:"DriverDocumentPage",segment:"driver-document",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-expense/driver-expense.module.ngfactory#DriverExpensePageModuleNgFactory",name:"DriverExpensePage",segment:"driver-expense",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-khata-search/driver-khata-search.module.ngfactory#DriverKhataSearchPageModuleNgFactory",name:"DriverKhataSearchPage",segment:"driver-khata-search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-khata/driver-khata.module.ngfactory#DriverKhataPageModuleNgFactory",name:"DriverKhataPage",segment:"driver-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/edit-other-document-name/edit-other-document-name.module.ngfactory#EditOtherDocumentNamePageModuleNgFactory",name:"EditOtherDocumentNamePage",segment:"edit-other-document-name",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver/driver.module.ngfactory#DriverPageModuleNgFactory",name:"DriverPage",segment:"driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/edit-profile/edit-profile.module.ngfactory#EditProfilePageModuleNgFactory",name:"EditProfilePage",segment:"edit-profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/exchange-modal/exchange-modal.module.ngfactory#ExchangeModalPageModuleNgFactory",name:"ExchangeModalPage",segment:"exchange-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/fatal-error/fatal-error.module.ngfactory#FatalErrorPageModuleNgFactory",name:"FatalErrorPage",segment:"fatal-error",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/full-report/full-report.module.ngfactory#FullReportPageModuleNgFactory",name:"FullReportPage",segment:"full-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/init/init.module.ngfactory#InitPageModuleNgFactory",name:"InitPage",segment:"init",priority:"low",defaultHistory:[]},{loadChildren:"../pages/insurance/insurance.module.ngfactory#InsurancePageModuleNgFactory",name:"InsurancePage",segment:"insurance",priority:"low",defaultHistory:[]},{loadChildren:"../pages/language/language.module.ngfactory#LanguagePageModuleNgFactory",name:"LanguagePage",segment:"language",priority:"low",defaultHistory:[]},{loadChildren:"../pages/mechanic-bill/mechanic-bill.module.ngfactory#MechanicBillPageModuleNgFactory",name:"MechanicBillPage",segment:"mechanic-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/ledger/ledger.module.ngfactory#LedgerPageModuleNgFactory",name:"LedgerPage",segment:"ledger",priority:"low",defaultHistory:[]},{loadChildren:"../pages/mechanic-khata/mechanic-khata.module.ngfactory#MechanicKhataPageModuleNgFactory",name:"MechanicKhataPage",segment:"mechanic-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/mechanic/mechanic.module.ngfactory#MechanicPageModuleNgFactory",name:"MechanicPage",segment:"mechanic",priority:"low",defaultHistory:[]},{loadChildren:"../pages/parts-bill-details-modal/parts-bill-details-modal.module.ngfactory#PartsBillDetailsModalPageModuleNgFactory",name:"PartsBillDetailsModalPage",segment:"parts-bill-details-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/parts-work-modal/parts-work-modal.module.ngfactory#PartsWorkModalPageModuleNgFactory",name:"PartsWorkModalPage",segment:"parts-work-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/problem-modal/problem-modal.module.ngfactory#ProblemModalPageModuleNgFactory",name:"ProblemModalPage",segment:"problem-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/problem-work-part-modal/problem-work-part-modal.module.ngfactory#ProblemWorkPartModalPageModuleNgFactory",name:"ProblemWorkPartModalPage",segment:"problem-work-part-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile/profile.module.ngfactory#ProfilePageModuleNgFactory",name:"ProfilePage",segment:"profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/reason-modal/reason-modal.module.ngfactory#ReasonModalPageModuleNgFactory",name:"ReasonModalPage",segment:"reason-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/remove-driver-from-account/remove-driver-from-account.module.ngfactory#RemoveDriverFromAccountPageModuleNgFactory",name:"RemoveDriverFromAccountPage",segment:"remove-driver-from-account",priority:"low",defaultHistory:[]},{loadChildren:"../pages/remove-driver/remove-driver.module.ngfactory#RemoveDriverPageModuleNgFactory",name:"RemoveDriverPage",segment:"remove-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-all-comp/report-all-comp.module.ngfactory#ReportAllCompPageModuleNgFactory",name:"ReportAllCompPage",segment:"report-all-comp",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-full/report-full.module.ngfactory#ReportFullPageModuleNgFactory",name:"ReportFullPage",segment:"report-full",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-khata/report-khata.module.ngfactory#ReportKhataPageModuleNgFactory",name:"ReportKhataPage",segment:"report-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-modal/report-modal.module.ngfactory#ReportModalPageModuleNgFactory",name:"ReportModalPage",segment:"report-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/security-and-backup/security-and-backup.module.ngfactory#SecurityAndBackupPageModuleNgFactory",name:"SecurityAndBackupPage",segment:"security-and-backup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop-bill-description/shop-bill-description.module.ngfactory#ShopBillDescriptionPageModuleNgFactory",name:"ShopBillDescriptionPage",segment:"shop-bill-description",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop-bill-details/shop-bill-details.module.ngfactory#ShopBillDetailsPageModuleNgFactory",name:"ShopBillDetailsPage",segment:"shop-bill-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop-khata/shop-khata.module.ngfactory#ShopKhataPageModuleNgFactory",name:"ShopKhataPage",segment:"shop-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop/shop.module.ngfactory#ShopPageModuleNgFactory",name:"ShopPage",segment:"shop",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-bill-report/vehicle-bill-report.module.ngfactory#VehicleBillReportPageModuleNgFactory",name:"VehicleBillReportPage",segment:"vehicle-bill-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/upload-image/upload-image.module.ngfactory#UploadImagePageModuleNgFactory",name:"UploadImagePage",segment:"upload-image",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-details/vehicle-details.module.ngfactory#VehicleDetailsPageModuleNgFactory",name:"VehicleDetailsPage",segment:"vehicle-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-document-bill/vehicle-document-bill.module.ngfactory#VehicleDocumentBillPageModuleNgFactory",name:"VehicleDocumentBillPage",segment:"vehicle-document-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-document/vehicle-document.module.ngfactory#VehicleDocumentPageModuleNgFactory",name:"VehicleDocumentPage",segment:"vehicle-document",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-khata/vehicle-khata.module.ngfactory#VehicleKhataPageModuleNgFactory",name:"VehicleKhataPage",segment:"vehicle-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-work-report/vehicle-work-report.module.ngfactory#VehicleWorkReportPageModuleNgFactory",name:"VehicleWorkReportPage",segment:"vehicle-work-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-bill/view-bill.module.ngfactory#ViewBillPageModuleNgFactory",name:"ViewBillPage",segment:"view-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-payment/view-payment.module.ngfactory#ViewPaymentPageModuleNgFactory",name:"ViewPaymentPage",segment:"view-payment",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-transaction/view-transaction.module.ngfactory#ViewTransactionPageModuleNgFactory",name:"ViewTransactionPage",segment:"view-transaction",priority:"low",defaultHistory:[]}]},[]),l["ɵmpd"](512,l.Compiler,l.Compiler,[]),l["ɵmpd"](512,ve.a,ve.a,[l.Compiler]),l["ɵmpd"](1024,oe.b,oe.c,[ve.a,l.Injector]),l["ɵmpd"](1024,l.APP_INITIALIZER,function(e,a,t,o,l,i,d,n,s,m,c,g,p){return[r.s(e),Le.a(a),ge.c(t,o),_e.c(l,i,d,n,s),oe.d(m,c,g,p)]},[[2,l.NgProbeToken],K.a,G.a,X.a,K.a,G.a,X.a,W.a,x.m,K.a,ae.a,oe.b,l.NgZone]),l["ɵmpd"](512,l.ApplicationInitStatus,l.ApplicationInitStatus,[[2,l.APP_INITIALIZER]]),l["ɵmpd"](131584,l.ApplicationRef,l.ApplicationRef,[l.NgZone,l["ɵConsole"],l.Injector,l.ErrorHandler,l.ComponentFactoryResolver,l.ApplicationInitStatus]),l["ɵmpd"](512,l.ApplicationModule,l.ApplicationModule,[l.ApplicationRef]),l["ɵmpd"](512,r.a,r.a,[[3,r.a]]),l["ɵmpd"](512,h.e,h.e,[]),l["ɵmpd"](512,h.d,h.d,[]),l["ɵmpd"](512,$["ɵba"],$["ɵba"],[]),l["ɵmpd"](512,$.FormsModule,$.FormsModule,[]),l["ɵmpd"](512,$.ReactiveFormsModule,$.ReactiveFormsModule,[]),l["ɵmpd"](512,te.a,te.a,[]),l["ɵmpd"](512,ie.CalendarModule,ie.CalendarModule,[]),l["ɵmpd"](512,De.a,De.a,[]),l["ɵmpd"](512,y.a,y.a,[]),l["ɵmpd"](512,_.b,_.b,[]),l["ɵmpd"](512,Se.a,Se.a,[]),l["ɵmpd"](512,R,R,[]),l["ɵmpd"](256,h.m,"XSRF-TOKEN",[]),l["ɵmpd"](256,h.n,"X-XSRF-TOKEN",[]),l["ɵmpd"](256,i.APP_BASE_HREF,"/",[]),l["ɵmpd"](256,P.a,u,[])])});Object(l.enableProdMode)(),Object(r.j)().bootstrapModuleFactory(Te)},528:function(e,a,t){function o(e){return t(r(e))}function r(e){var a=l[e];if(!(a+1))throw new Error("Cannot find module '"+e+"'.");return a}var l={"./af":270,"./af.js":270,"./ar":271,"./ar-dz":272,"./ar-dz.js":272,"./ar-kw":273,"./ar-kw.js":273,"./ar-ly":274,"./ar-ly.js":274,"./ar-ma":275,"./ar-ma.js":275,"./ar-sa":276,"./ar-sa.js":276,"./ar-tn":277,"./ar-tn.js":277,"./ar.js":271,"./az":278,"./az.js":278,"./be":279,"./be.js":279,"./bg":280,"./bg.js":280,"./bm":281,"./bm.js":281,"./bn":282,"./bn-bd":283,"./bn-bd.js":283,"./bn.js":282,"./bo":284,"./bo.js":284,"./br":285,"./br.js":285,"./bs":286,"./bs.js":286,"./ca":287,"./ca.js":287,"./cs":288,"./cs.js":288,"./cv":289,"./cv.js":289,"./cy":290,"./cy.js":290,"./da":291,"./da.js":291,"./de":292,"./de-at":293,"./de-at.js":293,"./de-ch":294,"./de-ch.js":294,"./de.js":292,"./dv":295,"./dv.js":295,"./el":296,"./el.js":296,"./en-au":297,"./en-au.js":297,"./en-ca":298,"./en-ca.js":298,"./en-gb":299,"./en-gb.js":299,"./en-ie":300,"./en-ie.js":300,"./en-il":301,"./en-il.js":301,"./en-in":302,"./en-in.js":302,"./en-nz":303,"./en-nz.js":303,"./en-sg":304,"./en-sg.js":304,"./eo":305,"./eo.js":305,"./es":306,"./es-do":307,"./es-do.js":307,"./es-mx":308,"./es-mx.js":308,"./es-us":309,"./es-us.js":309,"./es.js":306,"./et":310,"./et.js":310,"./eu":311,"./eu.js":311,"./fa":312,"./fa.js":312,"./fi":313,"./fi.js":313,"./fil":314,"./fil.js":314,"./fo":315,"./fo.js":315,"./fr":316,"./fr-ca":317,"./fr-ca.js":317,"./fr-ch":318,"./fr-ch.js":318,"./fr.js":316,"./fy":319,"./fy.js":319,"./ga":320,"./ga.js":320,"./gd":321,"./gd.js":321,"./gl":322,"./gl.js":322,"./gom-deva":323,"./gom-deva.js":323,"./gom-latn":324,"./gom-latn.js":324,"./gu":325,"./gu.js":325,"./he":326,"./he.js":326,"./hi":327,"./hi.js":327,"./hr":328,"./hr.js":328,"./hu":329,"./hu.js":329,"./hy-am":330,"./hy-am.js":330,"./id":331,"./id.js":331,"./is":332,"./is.js":332,"./it":333,"./it-ch":334,"./it-ch.js":334,"./it.js":333,"./ja":335,"./ja.js":335,"./jv":336,"./jv.js":336,"./ka":337,"./ka.js":337,"./kk":338,"./kk.js":338,"./km":339,"./km.js":339,"./kn":340,"./kn.js":340,"./ko":341,"./ko.js":341,"./ku":342,"./ku.js":342,"./ky":343,"./ky.js":343,"./lb":344,"./lb.js":344,"./lo":345,"./lo.js":345,"./lt":346,"./lt.js":346,"./lv":347,"./lv.js":347,"./me":348,"./me.js":348,"./mi":349,"./mi.js":349,"./mk":350,"./mk.js":350,"./ml":351,"./ml.js":351,"./mn":352,"./mn.js":352,"./mr":353,"./mr.js":353,"./ms":354,"./ms-my":355,"./ms-my.js":355,"./ms.js":354,"./mt":356,"./mt.js":356,"./my":357,"./my.js":357,"./nb":358,"./nb.js":358,"./ne":359,"./ne.js":359,"./nl":360,"./nl-be":361,"./nl-be.js":361,"./nl.js":360,"./nn":362,"./nn.js":362,"./oc-lnc":363,"./oc-lnc.js":363,"./pa-in":364,"./pa-in.js":364,"./pl":365,"./pl.js":365,"./pt":366,"./pt-br":367,"./pt-br.js":367,"./pt.js":366,"./ro":368,"./ro.js":368,"./ru":369,"./ru.js":369,"./sd":370,"./sd.js":370,"./se":371,"./se.js":371,"./si":372,"./si.js":372,"./sk":373,"./sk.js":373,"./sl":374,"./sl.js":374,"./sq":375,"./sq.js":375,"./sr":376,"./sr-cyrl":377,"./sr-cyrl.js":377,"./sr.js":376,"./ss":378,"./ss.js":378,"./sv":379,"./sv.js":379,"./sw":380,"./sw.js":380,"./ta":381,"./ta.js":381,"./te":382,"./te.js":382,"./tet":383,"./tet.js":383,"./tg":384,"./tg.js":384,"./th":385,"./th.js":385,"./tk":386,"./tk.js":386,"./tl-ph":387,"./tl-ph.js":387,"./tlh":388,"./tlh.js":388,"./tr":389,"./tr.js":389,"./tzl":390,"./tzl.js":390,"./tzm":391,"./tzm-latn":392,"./tzm-latn.js":392,"./tzm.js":391,"./ug-cn":393,"./ug-cn.js":393,"./uk":394,"./uk.js":394,"./ur":395,"./ur.js":395,"./uz":396,"./uz-latn":397,"./uz-latn.js":397,"./uz.js":396,"./vi":398,"./vi.js":398,"./x-pseudo":399,"./x-pseudo.js":399,"./yo":400,"./yo.js":400,"./zh-cn":401,"./zh-cn.js":401,"./zh-hk":402,"./zh-hk.js":402,"./zh-mo":403,"./zh-mo.js":403,"./zh-tw":404,"./zh-tw.js":404};o.keys=function(){return Object.keys(l)},o.resolve=r,e.exports=o,o.id=528},84:function(e,a,t){"use strict";t.d(a,"a",function(){return o});t(2);var o=function(){return function(e){this.http=e,this.BASE_URL_PROD="http://127.0.0.1:8000/api/",this.BASE_URL_SERV_1="https://www.manpuriaproducts.org/saarthi/public/index.php/api/",this.BASE_URL_SERV_2="https://api.fastdeliveryindia.com/public/index.php/api/",this.BASE_URL="https://www.apnatruckkhata.in/public/index.php/api/",this.BASE_URL_REPORT="http://report.apnatruckkhata.in/public/index.php/api/",this.BASE_URL_REPORT_DOWNLOAD="http://report.apnatruckkhata.in/public/index.php/",this.BASE_URL_REPORT_TEST="http://127.0.0.1:8001/api/",this.BASE_URL_REPORT_DOWNLOAD_TEST="http://127.0.0.1:8001/",this.GET_REGISTRATION_INFO=this.BASE_URL+"getregistrationinfo",this.SAVE_REGISTRATION_INFO=this.BASE_URL+"saveregistrationinfo",this.LOGIN=this.BASE_URL+"login",this.SAVE_VEHICLE_DETAILS=this.BASE_URL+"savevehicledetails",this.UPDATE_VEHICLE_DETAILS=this.BASE_URL+"updatevehiclebyvehicleid",this.DELETE_VEHICLE_DETAILS=this.BASE_URL+"deletevehiclebyid",this.UPDATE_WORK_DETAILS=this.BASE_URL+"updatevehiclestatus",this.GET_UPDATE_WORK_DETAILS=this.BASE_URL+"getupdatevehiclestatus",this.SAVE_WORK_PART=this.BASE_URL+"saveworkpart",this.GET_WORK_PART=this.BASE_URL+"getworkpart",this.UPDATE_WORK_UPDATE=this.BASE_URL+"updatevehiclestatusbyid",this.UPDATE_WORK_DELETE=this.BASE_URL+"deletevehiclestatusbyid",this.GET_VEHICLE_DETAILS=this.BASE_URL+"getvehicledetailsbysrthid",this.UPDATE_PROFILE=this.BASE_URL+"updateprofile",this.GET_PROFILE=this.BASE_URL+"getprofile",this.SAVE_REASON=this.BASE_URL+"savedriverreason",this.GET_REASON=this.BASE_URL+"getdriverreason",this.DELETE_REASON=this.BASE_URL+"deletedriverreason",this.ADD_EXPENSE_BILL=this.BASE_URL+"adddriverexpensebill",this.GET_EXPENSE_BILL_BY_SRTH_ID=this.BASE_URL+"getdriverexpensebillbysrthid",this.GET_EXPENSE_BILL_BY_WORKER_ID=this.BASE_URL+"getdriverexpensebillbyworkerid",this.GET_EXPENSE_BILL_BY_WORKER_ID_UNPAID=this.BASE_URL+"getdriverexpensebillbyworkeridunpaid",this.DELETE_BILL_EXPENSE=this.BASE_URL+"deletebillbybillid",this.UPDATE_BILL_EXPENSE=this.BASE_URL+"updatebillbybillid",this.DELETE_PAYMENT=this.BASE_URL+"deletepayment",this.UPDATE_PAYMENT=this.BASE_URL+"editpayment",this.UPDATE_VEHICLE_DRIVER=this.BASE_URL+"updatevehicledriver",this.GET_DISPLAY_BILL_BY_WORKER_ID=this.BASE_URL+"getdisplaybillbyworkerid",this.CREATE_WORKER=this.BASE_URL+"createworker",this.GET_WORKER=this.BASE_URL+"getworkerbysrrthid",this.GET_WORKER_BY_WORKER_ID=this.BASE_URL+"getworkerbyworkerid",this.UPDATE_WORKER=this.BASE_URL+"updateworker",this.DELETE_WORKER=this.BASE_URL+"deleteworker",this.CREATE_PAYMENT=this.BASE_URL+"createpayment",this.GET_VEHICLE_BY_WORKER_ID=this.BASE_URL+"getvehiclehistorybyworkerid",this.GET_BILL_DETAILS_BY_BILL_ID=this.BASE_URL+"getbilldetailsbybillid",this.SAVE_COMPLAINTS=this.BASE_URL+"savecomplaints",this.GET_COMPLAINTS=this.BASE_URL+"getcomplaintsbysrthid",this.UPDATE_COMPLAINTS=this.BASE_URL+"updatecomplaintsbycomplaintid",this.SOLVE_COMPLAINTS=this.BASE_URL+"solvecomplaintbyid",this.DELETE_COMPLAINTS=this.BASE_URL+"deletecomplaintbyid",this.REMIND_LATER=this.BASE_URL+"remindlater",this.UPDATE_DOCUMENT_BILL=this.BASE_URL+"updatedocumentbill",this.SAVE_PROBLEM=this.BASE_URL+"saveproblem",this.GET_PROBLEM=this.BASE_URL+"getproblembysrthid",this.SAVE_PROBLEM_PARTS=this.BASE_URL+"saveproblemparts",this.GET_PROBLEM_PARTS=this.BASE_URL+"getbillproblemparts",this.UPDATE_DOCUMENT_INFO=this.BASE_URL+"updatedocumentinfo",this.GET_DOCUMENT_INFO=this.BASE_URL+"getdocumentinfo",this.GET_DOCUMENT_INFO_BY_SRTH_ID=this.BASE_URL+"getdocumentinfobysrthid",this.GET_DOCUMENT_INFO_BY_DOCUMENT_ID=this.BASE_URL+"getdocumentinfobyid",this.SAVE_NOTIFICATION_FCM_TOKEN=this.BASE_URL+"savefcmkey",this.GET_LAST_BILL_ID=this.BASE_URL+"getlastbillid",this.GET_LAST_PAYMENT_ID=this.BASE_URL+"getlastpaymentid",this.SAVE_IMAGE=this.BASE_URL+"saveimage",this.GET_IMAGE_BY_IMAGE_ID=this.BASE_URL+"getimagebyimageid",this.GET_IMAGE_BY_WORKER_TYPE=this.BASE_URL+"getimagebyworkertype",this.GET_IMAGE_BY_TYPE_WORKER_TYPE=this.BASE_URL+"getimagebytypeworkertype",this.SAVE_EXCHANGE_PART=this.BASE_URL+"savevehicleexchangeinfo",this.GET_EXCHANGE_PART=this.BASE_URL+"getvehicleexchangeinfo",this.GET_VEHICLE_BY_VEHICLE_ID=this.BASE_URL+"getvehiclebyvehicleid",this.GET_BILL_FOR_VEHICLE=this.BASE_URL+"getallbillsforvehicle",this.GET_BILL_SUMMARY=this.BASE_URL+"getbillsummary",this.GET_IMAGES_BY_SRTH_ID=this.BASE_URL+"getimagebysrthid",this.GET_LAST_COMPLAINTS_ID=this.BASE_URL+"getlastcomplaintid",this.GET_FUEL_PRICES="https://fuelprice-api-india.herokuapp.com/price/West-Bengal/KOLKATA",this.ALL_DRIVER_REPORT=this.BASE_URL_REPORT+"alldriverreportapi",this.ALL_DRIVER_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"alldriverreportweb",this.DRIVER_EXPENSE_REPORT=this.BASE_URL_REPORT+"driverexpensereportapi",this.DRIVER_EXPENSE_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"driverexpensereportweb",this.SHOP_BILL_REPORT=this.BASE_URL_REPORT+"shopbillreportweb",this.SHOP_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"shopbillreport",this.SHOP_BUY_REPORT=this.BASE_URL_REPORT+"shopbuyreportweb",this.SHOP_BUY_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"shopbuyreportapi",this.MECHANIC_BILL_REPORT=this.BASE_URL_REPORT+"mechanicbillreportapi",this.MECHANIC_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"mechanicbillreportweb",this.MECHANIC_BUY_REPORT=this.BASE_URL_REPORT+"mechanicbuyreportapi",this.MECHANIC_BUY_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"mechanicbuyreportweb",this.FULL_REPORT=this.BASE_URL_REPORT+"fullreportapi",this.FULL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"fullreportweb",this.DOCUMENT_BILL_REPORT=this.BASE_URL_REPORT+"documentbillreportapi",this.DOCUMENT_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"documentbillreportweb",this.DOCUMENT_DATE_REPORT=this.BASE_URL_REPORT+"documentdatereportapi",this.DOCUMENT_DATE_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"documentdatereportweb",this.VEHICLE_WORK_REPORT=this.BASE_URL_REPORT+"vehicleworkreportapi",this.VEHICLE_WORK_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"vehicleworkreportweb",this.VEHICLE_BILL_REPORT=this.BASE_URL_REPORT+"vehiclebillreportapi",this.VEHICLE_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"vehiclebillreportweb",this.GET_NOTIFICATIONS=this.BASE_URL+"getnotificatonsbysrthid",this.UPDATE_BANK_DETAILS=this.BASE_URL+"updatebankdetails",this.GET_BANK_DETAILS=this.BASE_URL+"getbankdetails",this.K_ACCOUNT_INFO="accountinfo",this.SELECTED_WORK_PART="selectedworkpart",this.DETAILS="details",this.ADDED_VEHICLE_ID="addedvehicleid",this.SELECTED_REASON="selectedreason",this.DATE="date",console.log("Hello CodesProvider Provider")}}()}},[520]);