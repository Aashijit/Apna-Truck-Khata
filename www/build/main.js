webpackJsonp([79],{183:function(e,a,t){"use strict";t.d(a,"a",function(){return r});t(2);var o=t(74),r=function(){function e(e){this.http=e,console.log("Hello RestProvider Provider")}return e.prototype.post=function(e,a){var t=this,r=(new o.g).set("Content-type","application/json");return new Promise(function(o,l){t.http.post(e,JSON.stringify(a),{headers:r}).subscribe(function(e){o(e)},function(e){l(e)})})},e.prototype.get=function(e,a){var t=this;(new o.g).set("Content-type","application/json");return new Promise(function(a,o){t.http.get(e).subscribe(function(e){a(e)},function(e){o(e)})})},e.prototype.getModelsBrand=function(){var e=this;return new Promise(function(a,t){e.http.get("../../assets/vehicle_master.json").subscribe(function(e){a(e)},function(e){t(e)})})},e}()},187:function(e,a,t){"use strict";t.d(a,"a",function(){return o});t(2),t(26);var o=function(){function e(e,a){this.http=e,this.toast=a,console.log("Hello MessageProvider Provider")}return e.prototype.displayToast=function(e){var a=this.toast.create({message:e,position:"bottom",showCloseButton:!0});a.onDidDismiss(function(){console.log("Dismissed toast")}),a.present()},e}()},222:function(e,a){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=222},246:function(e,a,t){function o(e){var a=r[e];return a?t.e(a[1]).then(function(){return t(a[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"../pages/about/about.module.ngfactory":[810,78],"../pages/account-khata/account-khata.module.ngfactory":[811,47],"../pages/account-payment-search-modal/account-payment-search-modal.module.ngfactory":[812,46],"../pages/add-complaints/add-complaints.module.ngfactory":[813,28],"../pages/add-document-bill/add-document-bill.module.ngfactory":[814,45],"../pages/add-driver-expenses/add-driver-expenses.module.ngfactory":[815,27],"../pages/add-driver/add-driver.module.ngfactory":[816,26],"../pages/add-mechanic/add-mechanic.module.ngfactory":[817,1],"../pages/add-more-modal/add-more-modal.module.ngfactory":[818,77],"../pages/add-new-bank-account/add-new-bank-account.module.ngfactory":[819,76],"../pages/add-permit/add-permit.module.ngfactory":[820,51],"../pages/add-vehicle/add-vehicle.module.ngfactory":[821,7],"../pages/all-image-khata/all-image-khata.module.ngfactory":[822,44],"../pages/allot-driver/allot-driver.module.ngfactory":[823,25],"../pages/bill-description/bill-description.module.ngfactory":[824,6],"../pages/bill-details/bill-details.module.ngfactory":[826,5],"../pages/bill-payment-search/bill-payment-search.module.ngfactory":[825,43],"../pages/buy-details-search-modal/buy-details-search-modal.module.ngfactory":[827,42],"../pages/buy-from-shop/buy-from-shop.module.ngfactory":[829,24],"../pages/calendar-modal/calendar-modal.module.ngfactory":[828,75],"../pages/camera-modal/camera-modal.module.ngfactory":[831,74],"../pages/change-driver/change-driver.module.ngfactory":[830,23],"../pages/complaints-khata/complaints-khata.module.ngfactory":[833,41],"../pages/complaints-update/complaints-update.module.ngfactory":[832,10],"../pages/contact/contact.module.ngfactory":[834,73],"../pages/decision-modal/decision-modal.module.ngfactory":[835,72],"../pages/details-modal/details-modal.module.ngfactory":[836,49],"../pages/document-and-insurance/document-and-insurance.module.ngfactory":[837,71],"../pages/document-bill-report/document-bill-report.module.ngfactory":[838,70],"../pages/document-date-report/document-date-report.module.ngfactory":[839,69],"../pages/document-renewal/document-renewal.module.ngfactory":[840,22],"../pages/document/document.module.ngfactory":[883,40],"../pages/driver-details-search/driver-details-search.module.ngfactory":[841,39],"../pages/driver-document/driver-document.module.ngfactory":[842,3],"../pages/driver-khata-search/driver-khata-search.module.ngfactory":[843,38],"../pages/driver-khata/driver-khata.module.ngfactory":[844,37],"../pages/driver/driver.module.ngfactory":[845,36],"../pages/edit-other-document-name/edit-other-document-name.module.ngfactory":[846,48],"../pages/edit-profile/edit-profile.module.ngfactory":[847,21],"../pages/exchange-modal/exchange-modal.module.ngfactory":[848,0],"../pages/fatal-error/fatal-error.module.ngfactory":[849,68],"../pages/full-report/full-report.module.ngfactory":[851,67],"../pages/home/home.module.ngfactory":[850,66],"../pages/init/init.module.ngfactory":[852,65],"../pages/insurance/insurance.module.ngfactory":[853,35],"../pages/language/language.module.ngfactory":[854,64],"../pages/ledger/ledger.module.ngfactory":[856,20],"../pages/mechanic-bill/mechanic-bill.module.ngfactory":[855,19],"../pages/mechanic-khata/mechanic-khata.module.ngfactory":[857,34],"../pages/mechanic/mechanic.module.ngfactory":[858,33],"../pages/parts-bill-details-modal/parts-bill-details-modal.module.ngfactory":[859,12],"../pages/parts-work-modal/parts-work-modal.module.ngfactory":[860,32],"../pages/problem-modal/problem-modal.module.ngfactory":[861,9],"../pages/problem-work-part-modal/problem-work-part-modal.module.ngfactory":[862,8],"../pages/profile/profile.module.ngfactory":[863,63],"../pages/reason-modal/reason-modal.module.ngfactory":[864,31],"../pages/remove-driver-from-account/remove-driver-from-account.module.ngfactory":[865,50],"../pages/remove-driver/remove-driver.module.ngfactory":[866,62],"../pages/report-all-comp/report-all-comp.module.ngfactory":[867,61],"../pages/report-full/report-full.module.ngfactory":[868,18],"../pages/report-khata/report-khata.module.ngfactory":[869,60],"../pages/report-modal/report-modal.module.ngfactory":[870,17],"../pages/security-and-backup/security-and-backup.module.ngfactory":[871,59],"../pages/settings/settings.module.ngfactory":[872,11],"../pages/shop-bill-description/shop-bill-description.module.ngfactory":[873,4],"../pages/shop-bill-details/shop-bill-details.module.ngfactory":[874,16],"../pages/shop-khata/shop-khata.module.ngfactory":[875,30],"../pages/shop/shop.module.ngfactory":[876,29],"../pages/tabs/tabs.module.ngfactory":[877,58],"../pages/upload-image/upload-image.module.ngfactory":[878,57],"../pages/vehicle-bill-report/vehicle-bill-report.module.ngfactory":[879,15],"../pages/vehicle-details/vehicle-details.module.ngfactory":[880,56],"../pages/vehicle-document-bill/vehicle-document-bill.module.ngfactory":[881,14],"../pages/vehicle-document/vehicle-document.module.ngfactory":[882,2],"../pages/vehicle-khata/vehicle-khata.module.ngfactory":[887,55],"../pages/vehicle-work-report/vehicle-work-report.module.ngfactory":[884,13],"../pages/view-bill/view-bill.module.ngfactory":[888,54],"../pages/view-payment/view-payment.module.ngfactory":[885,53],"../pages/view-transaction/view-transaction.module.ngfactory":[886,52]};o.keys=function(){return Object.keys(r)},o.id=246,e.exports=o},516:function(e,a,t){"use strict";function o(e){return l["ɵvid"](0,[(e()(),l["ɵeld"](0,0,null,null,2,"ion-nav",[],null,null,null,I.b,I.a)),l["ɵprd"](6144,null,U.a,null,[F.a]),l["ɵdid"](2,4374528,null,0,F.a,[[2,H.a],[2,V.a],W.a,K.a,G.a,l.ElementRef,l.NgZone,l.Renderer,l.ComponentFactoryResolver,x.m,Y.a,[2,z.a],X.a,l.ErrorHandler],{root:[0,"root"]},null)],function(e,a){e(a,2,0,a.component.rootPage)},null)}Object.defineProperty(a,"__esModule",{value:!0});var r=t(34),l=t(0),i=(t(2),t(513),t(15)),d=t(206),n=t(187),s=t(84),c=t(183),m=t(210),g=(t(26),t(109)),p=t(110),u=function(){return function(e,a,t,o){this.codes=o,this.rootPage="InitPage",e.ready().then(function(){a.styleDefault(),t.hide()})}}(),h=t(74),y=(t(526),t(498)),f=t(191),E=t(211),_=t(207),P=function(){return function(){}}(),R=t(66),b=t(500),A=t(501),v=t(502),L=t(503),D=t(504),S=t(505),w=t(506),C=t(507),N=t(508),B=t(514),T=t(127),M=t(126),O=t(512),j=t(203),k=t(808),I=t(809),U=t(52),F=t(73),H=t(8),V=t(29),W=t(13),K=t(4),G=t(7),x=t(11),Y=t(44),z=t(24),X=t(14),Z=l["ɵcrt"]({encapsulation:2,styles:[],data:{}}),q=l["ɵccf"]("ng-component",u,function(e){return l["ɵvid"](0,[(e()(),l["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,o,Z)),l["ɵdid"](1,49152,null,0,u,[G.a,g.a,p.a,s.a],null,null)],null,null)},{},{},[]),J=t(150),Q=t(499),$=t(19),ee=t(51),ae=t(68),te=t(184),oe=t(55),re=t(121),le=t(128),ie=t(204),de=t(111),ne=t(182),se=t(141),ce=t(124),me=t(149),ge=t(28),pe=t(43),ue=t(40),he=t(125),ye=t(88),fe=t(156),Ee=t(152),_e=t(162),Pe=t(404),Re=t(151),be=t(48),Ae=t(148),ve=t(153),Le=t(405),De=l["ɵcmf"](P,[R.b],function(e){return l["ɵmod"]([l["ɵmpd"](512,l.ComponentFactoryResolver,l["ɵCodegenComponentFactoryResolver"],[[8,[b.a,A.a,v.a,L.a,D.a,S.a,w.a,C.a,N.a,B.a,T.a,M.a,O.a,j.a,k.a,q]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["ɵmpd"](5120,l.LOCALE_ID,l["ɵq"],[[3,l.LOCALE_ID]]),l["ɵmpd"](4608,i.l,i.k,[l.LOCALE_ID,[2,i.t]]),l["ɵmpd"](5120,l.APP_ID,l["ɵi"],[]),l["ɵmpd"](5120,l.IterableDiffers,l["ɵn"],[]),l["ɵmpd"](5120,l.KeyValueDiffers,l["ɵo"],[]),l["ɵmpd"](4608,r.c,r.q,[i.c]),l["ɵmpd"](6144,l.Sanitizer,null,[r.c]),l["ɵmpd"](4608,r.f,J.a,[]),l["ɵmpd"](5120,r.d,function(e,a,t,o,l){return[new r.k(e,a),new r.o(t),new r.n(o,l)]},[i.c,l.NgZone,i.c,i.c,r.f]),l["ɵmpd"](4608,r.e,r.e,[r.d,l.NgZone]),l["ɵmpd"](135680,r.m,r.m,[i.c]),l["ɵmpd"](4608,r.l,r.l,[r.e,r.m]),l["ɵmpd"](5120,Q.a,y.d,[]),l["ɵmpd"](5120,Q.c,y.e,[]),l["ɵmpd"](4608,Q.b,y.c,[Q.a,Q.c]),l["ɵmpd"](5120,l.RendererFactory2,y.f,[r.l,Q.b,l.NgZone]),l["ɵmpd"](6144,r.p,null,[r.m]),l["ɵmpd"](4608,l.Testability,l.Testability,[l.NgZone]),l["ɵmpd"](4608,r.h,r.h,[i.c]),l["ɵmpd"](4608,r.i,r.i,[i.c]),l["ɵmpd"](4608,h.i,h.o,[i.c,l.PLATFORM_ID,h.m]),l["ɵmpd"](4608,h.p,h.p,[h.i,h.n]),l["ɵmpd"](5120,h.a,function(e){return[e]},[h.p]),l["ɵmpd"](4608,h.l,h.l,[]),l["ɵmpd"](6144,h.j,null,[h.l]),l["ɵmpd"](4608,h.h,h.h,[h.j]),l["ɵmpd"](6144,h.b,null,[h.h]),l["ɵmpd"](4608,h.f,h.k,[h.b,l.Injector]),l["ɵmpd"](4608,h.c,h.c,[h.f]),l["ɵmpd"](4608,$["ɵi"],$["ɵi"],[]),l["ɵmpd"](4608,$.FormBuilder,$.FormBuilder,[]),l["ɵmpd"](4608,ee.CalendarService,ee.CalendarService,[]),l["ɵmpd"](5120,ae.b,ae.d,[W.a,ae.a]),l["ɵmpd"](5120,i.g,te.c,[i.r,[2,i.a],K.a]),l["ɵmpd"](4608,i.f,i.f,[i.g]),l["ɵmpd"](5120,z.a,z.b,[W.a,ae.b,i.f,oe.b,l.ComponentFactoryResolver]),l["ɵmpd"](4608,re.a,re.a,[W.a,K.a,z.a]),l["ɵmpd"](5120,le.CalendarController,ie.calendarController,[re.a,ee.CalendarService]),l["ɵmpd"](4608,de.a,de.a,[W.a,K.a,z.a]),l["ɵmpd"](4608,ne.b,y.b,[l.RendererFactory2,r.b]),l["ɵmpd"](4608,_.c,_.c,[]),l["ɵmpd"](4608,se.a,se.a,[W.a,K.a]),l["ɵmpd"](4608,ce.a,ce.a,[W.a,K.a]),l["ɵmpd"](4608,me.a,me.a,[]),l["ɵmpd"](4608,ge.a,ge.a,[]),l["ɵmpd"](4608,pe.a,pe.a,[G.a]),l["ɵmpd"](4608,ue.a,ue.a,[K.a,G.a,l.NgZone,X.a]),l["ɵmpd"](4608,he.a,he.a,[W.a,K.a]),l["ɵmpd"](4608,ye.a,ye.a,[W.a,K.a]),l["ɵmpd"](4608,fe.a,fe.a,[W.a,K.a,z.a]),l["ɵmpd"](4608,Ee.a,Ee.a,[K.a,G.a,X.a,W.a,x.m]),l["ɵmpd"](4608,_e.a,_e.a,[W.a,K.a]),l["ɵmpd"](4608,Y.a,Y.a,[G.a,K.a]),l["ɵmpd"](4608,g.a,g.a,[]),l["ɵmpd"](4608,p.a,p.a,[]),l["ɵmpd"](4608,m.a,m.a,[]),l["ɵmpd"](4608,m.b,m.b,[]),l["ɵmpd"](4608,c.a,c.a,[h.c]),l["ɵmpd"](4608,s.a,s.a,[h.c]),l["ɵmpd"](4608,f.a,f.a,[]),l["ɵmpd"](4608,n.a,n.a,[h.c,_e.a]),l["ɵmpd"](4608,d.a,d.a,[]),l["ɵmpd"](4608,i.d,i.d,[l.LOCALE_ID]),l["ɵmpd"](4608,E.a,E.a,[]),l["ɵmpd"](512,i.b,i.b,[]),l["ɵmpd"](512,l.ErrorHandler,Pe.a,[]),l["ɵmpd"](256,K.b,{},[]),l["ɵmpd"](1024,Re.a,Re.b,[]),l["ɵmpd"](1024,G.a,G.b,[r.b,Re.a,l.NgZone]),l["ɵmpd"](1024,K.a,K.c,[K.b,G.a]),l["ɵmpd"](512,X.a,X.a,[G.a]),l["ɵmpd"](512,be.a,be.a,[]),l["ɵmpd"](512,W.a,W.a,[K.a,G.a,[2,be.a]]),l["ɵmpd"](512,x.m,x.m,[W.a]),l["ɵmpd"](256,ae.a,{links:[{loadChildren:"../pages/about/about.module.ngfactory#HomePageModuleNgFactory",name:"AboutPage",segment:"about",priority:"low",defaultHistory:[]},{loadChildren:"../pages/account-khata/account-khata.module.ngfactory#AccountKhataPageModuleNgFactory",name:"AccountKhataPage",segment:"account-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/account-payment-search-modal/account-payment-search-modal.module.ngfactory#AccountPaymentSearchModalPageModuleNgFactory",name:"AccountPaymentSearchModalPage",segment:"account-payment-search-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-complaints/add-complaints.module.ngfactory#AddComplaintsPageModuleNgFactory",name:"AddComplaintsPage",segment:"add-complaints",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-document-bill/add-document-bill.module.ngfactory#AddDocumentBillPageModuleNgFactory",name:"AddDocumentBillPage",segment:"add-document-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-driver-expenses/add-driver-expenses.module.ngfactory#AddDriverExpensesPageModuleNgFactory",name:"AddDriverExpensesPage",segment:"add-driver-expenses",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-driver/add-driver.module.ngfactory#AddDriverPageModuleNgFactory",name:"AddDriverPage",segment:"add-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-mechanic/add-mechanic.module.ngfactory#AddMechanicPageModuleNgFactory",name:"AddMechanicPage",segment:"add-mechanic",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-more-modal/add-more-modal.module.ngfactory#AddMoreModalPageModuleNgFactory",name:"AddMoreModalPage",segment:"add-more-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-new-bank-account/add-new-bank-account.module.ngfactory#AddNewBankAccountPageModuleNgFactory",name:"AddNewBankAccountPage",segment:"add-new-bank-account",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-permit/add-permit.module.ngfactory#AddPermitPageModuleNgFactory",name:"AddPermitPage",segment:"add-permit",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-vehicle/add-vehicle.module.ngfactory#AddVehiclePageModuleNgFactory",name:"AddVehiclePage",segment:"add-vehicle",priority:"low",defaultHistory:[]},{loadChildren:"../pages/all-image-khata/all-image-khata.module.ngfactory#AllImageKhataPageModuleNgFactory",name:"AllImageKhataPage",segment:"all-image-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/allot-driver/allot-driver.module.ngfactory#AllotDriverPageModuleNgFactory",name:"AllotDriverPage",segment:"allot-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/bill-description/bill-description.module.ngfactory#BillDescriptionPageModuleNgFactory",name:"BillDescriptionPage",segment:"bill-description",priority:"low",defaultHistory:[]},{loadChildren:"../pages/bill-payment-search/bill-payment-search.module.ngfactory#BillPaymentSearchPageModuleNgFactory",name:"BillPaymentSearchPage",segment:"bill-payment-search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/bill-details/bill-details.module.ngfactory#BillDetailsPageModuleNgFactory",name:"BillDetailsPage",segment:"bill-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/buy-details-search-modal/buy-details-search-modal.module.ngfactory#BuyDetailsSearchModalPageModuleNgFactory",name:"BuyDetailsSearchModalPage",segment:"buy-details-search-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/calendar-modal/calendar-modal.module.ngfactory#CalendarModalPageModuleNgFactory",name:"CalendarModalPage",segment:"calendar-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/buy-from-shop/buy-from-shop.module.ngfactory#BuyFromShopPageModuleNgFactory",name:"BuyFromShopPage",segment:"buy-from-shop",priority:"low",defaultHistory:[]},{loadChildren:"../pages/change-driver/change-driver.module.ngfactory#ChangeDriverPageModuleNgFactory",name:"ChangeDriverPage",segment:"change-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/camera-modal/camera-modal.module.ngfactory#CameraModalPageModuleNgFactory",name:"CameraModalPage",segment:"camera-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/complaints-update/complaints-update.module.ngfactory#ComplaintsUpdatePageModuleNgFactory",name:"ComplaintsUpdatePage",segment:"complaints-update",priority:"low",defaultHistory:[]},{loadChildren:"../pages/complaints-khata/complaints-khata.module.ngfactory#ComplaintsKhataPageModuleNgFactory",name:"ComplaintsKhataPage",segment:"complaints-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/contact/contact.module.ngfactory#ContactPageModuleNgFactory",name:"ContactPage",segment:"contact",priority:"low",defaultHistory:[]},{loadChildren:"../pages/decision-modal/decision-modal.module.ngfactory#DecisionModalPageModuleNgFactory",name:"DecisionModalPage",segment:"decision-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/details-modal/details-modal.module.ngfactory#DetailsModalPageModuleNgFactory",name:"DetailsModalPage",segment:"details-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-and-insurance/document-and-insurance.module.ngfactory#DocumentAndInsurancePageModuleNgFactory",name:"DocumentAndInsurancePage",segment:"document-and-insurance",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-bill-report/document-bill-report.module.ngfactory#DocumentBillReportPageModuleNgFactory",name:"DocumentBillReportPage",segment:"document-bill-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-date-report/document-date-report.module.ngfactory#DocumentDateReportPageModuleNgFactory",name:"DocumentDateReportPage",segment:"document-date-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-renewal/document-renewal.module.ngfactory#DocumentRenewalPageModuleNgFactory",name:"DocumentRenewalPage",segment:"document-renewal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-details-search/driver-details-search.module.ngfactory#DriverDetailsSearchPageModuleNgFactory",name:"DriverDetailsSearchPage",segment:"driver-details-search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-document/driver-document.module.ngfactory#DriverDocumentPageModuleNgFactory",name:"DriverDocumentPage",segment:"driver-document",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-khata-search/driver-khata-search.module.ngfactory#DriverKhataSearchPageModuleNgFactory",name:"DriverKhataSearchPage",segment:"driver-khata-search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-khata/driver-khata.module.ngfactory#DriverKhataPageModuleNgFactory",name:"DriverKhataPage",segment:"driver-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver/driver.module.ngfactory#DriverPageModuleNgFactory",name:"DriverPage",segment:"driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/edit-other-document-name/edit-other-document-name.module.ngfactory#EditOtherDocumentNamePageModuleNgFactory",name:"EditOtherDocumentNamePage",segment:"edit-other-document-name",priority:"low",defaultHistory:[]},{loadChildren:"../pages/edit-profile/edit-profile.module.ngfactory#EditProfilePageModuleNgFactory",name:"EditProfilePage",segment:"edit-profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/exchange-modal/exchange-modal.module.ngfactory#ExchangeModalPageModuleNgFactory",name:"ExchangeModalPage",segment:"exchange-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/fatal-error/fatal-error.module.ngfactory#FatalErrorPageModuleNgFactory",name:"FatalErrorPage",segment:"fatal-error",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/full-report/full-report.module.ngfactory#FullReportPageModuleNgFactory",name:"FullReportPage",segment:"full-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/init/init.module.ngfactory#InitPageModuleNgFactory",name:"InitPage",segment:"init",priority:"low",defaultHistory:[]},{loadChildren:"../pages/insurance/insurance.module.ngfactory#InsurancePageModuleNgFactory",name:"InsurancePage",segment:"insurance",priority:"low",defaultHistory:[]},{loadChildren:"../pages/language/language.module.ngfactory#LanguagePageModuleNgFactory",name:"LanguagePage",segment:"language",priority:"low",defaultHistory:[]},{loadChildren:"../pages/mechanic-bill/mechanic-bill.module.ngfactory#MechanicBillPageModuleNgFactory",name:"MechanicBillPage",segment:"mechanic-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/ledger/ledger.module.ngfactory#LedgerPageModuleNgFactory",name:"LedgerPage",segment:"ledger",priority:"low",defaultHistory:[]},{loadChildren:"../pages/mechanic-khata/mechanic-khata.module.ngfactory#MechanicKhataPageModuleNgFactory",name:"MechanicKhataPage",segment:"mechanic-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/mechanic/mechanic.module.ngfactory#MechanicPageModuleNgFactory",name:"MechanicPage",segment:"mechanic",priority:"low",defaultHistory:[]},{loadChildren:"../pages/parts-bill-details-modal/parts-bill-details-modal.module.ngfactory#PartsBillDetailsModalPageModuleNgFactory",name:"PartsBillDetailsModalPage",segment:"parts-bill-details-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/parts-work-modal/parts-work-modal.module.ngfactory#PartsWorkModalPageModuleNgFactory",name:"PartsWorkModalPage",segment:"parts-work-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/problem-modal/problem-modal.module.ngfactory#ProblemModalPageModuleNgFactory",name:"ProblemModalPage",segment:"problem-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/problem-work-part-modal/problem-work-part-modal.module.ngfactory#ProblemWorkPartModalPageModuleNgFactory",name:"ProblemWorkPartModalPage",segment:"problem-work-part-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile/profile.module.ngfactory#ProfilePageModuleNgFactory",name:"ProfilePage",segment:"profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/reason-modal/reason-modal.module.ngfactory#ReasonModalPageModuleNgFactory",name:"ReasonModalPage",segment:"reason-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/remove-driver-from-account/remove-driver-from-account.module.ngfactory#RemoveDriverFromAccountPageModuleNgFactory",name:"RemoveDriverFromAccountPage",segment:"remove-driver-from-account",priority:"low",defaultHistory:[]},{loadChildren:"../pages/remove-driver/remove-driver.module.ngfactory#RemoveDriverPageModuleNgFactory",name:"RemoveDriverPage",segment:"remove-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-all-comp/report-all-comp.module.ngfactory#ReportAllCompPageModuleNgFactory",name:"ReportAllCompPage",segment:"report-all-comp",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-full/report-full.module.ngfactory#ReportFullPageModuleNgFactory",name:"ReportFullPage",segment:"report-full",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-khata/report-khata.module.ngfactory#ReportKhataPageModuleNgFactory",name:"ReportKhataPage",segment:"report-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-modal/report-modal.module.ngfactory#ReportModalPageModuleNgFactory",name:"ReportModalPage",segment:"report-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/security-and-backup/security-and-backup.module.ngfactory#SecurityAndBackupPageModuleNgFactory",name:"SecurityAndBackupPage",segment:"security-and-backup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop-bill-description/shop-bill-description.module.ngfactory#ShopBillDescriptionPageModuleNgFactory",name:"ShopBillDescriptionPage",segment:"shop-bill-description",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop-bill-details/shop-bill-details.module.ngfactory#ShopBillDetailsPageModuleNgFactory",name:"ShopBillDetailsPage",segment:"shop-bill-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop-khata/shop-khata.module.ngfactory#ShopKhataPageModuleNgFactory",name:"ShopKhataPage",segment:"shop-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop/shop.module.ngfactory#ShopPageModuleNgFactory",name:"ShopPage",segment:"shop",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/upload-image/upload-image.module.ngfactory#UploadImagePageModuleNgFactory",name:"UploadImagePage",segment:"upload-image",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-bill-report/vehicle-bill-report.module.ngfactory#VehicleBillReportPageModuleNgFactory",name:"VehicleBillReportPage",segment:"vehicle-bill-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-details/vehicle-details.module.ngfactory#VehicleDetailsPageModuleNgFactory",name:"VehicleDetailsPage",segment:"vehicle-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-document-bill/vehicle-document-bill.module.ngfactory#VehicleDocumentBillPageModuleNgFactory",name:"VehicleDocumentBillPage",segment:"vehicle-document-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-document/vehicle-document.module.ngfactory#VehicleDocumentPageModuleNgFactory",name:"VehicleDocumentPage",segment:"vehicle-document",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document/document.module.ngfactory#DocumentPageModuleNgFactory",name:"DocumentPage",segment:"document",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-work-report/vehicle-work-report.module.ngfactory#VehicleWorkReportPageModuleNgFactory",name:"VehicleWorkReportPage",segment:"vehicle-work-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-payment/view-payment.module.ngfactory#ViewPaymentPageModuleNgFactory",name:"ViewPaymentPage",segment:"view-payment",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-transaction/view-transaction.module.ngfactory#ViewTransactionPageModuleNgFactory",name:"ViewTransactionPage",segment:"view-transaction",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-khata/vehicle-khata.module.ngfactory#VehicleKhataPageModuleNgFactory",name:"VehicleKhataPage",segment:"vehicle-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-bill/view-bill.module.ngfactory#ViewBillPageModuleNgFactory",name:"ViewBillPage",segment:"view-bill",priority:"low",defaultHistory:[]}]},[]),l["ɵmpd"](512,l.Compiler,l.Compiler,[]),l["ɵmpd"](512,Ae.a,Ae.a,[l.Compiler]),l["ɵmpd"](1024,oe.b,oe.c,[Ae.a,l.Injector]),l["ɵmpd"](1024,l.APP_INITIALIZER,function(e,a,t,o,l,i,d,n,s,c,m,g,p){return[r.s(e),ve.a(a),me.c(t,o),Ee.c(l,i,d,n,s),oe.d(c,m,g,p)]},[[2,l.NgProbeToken],K.a,G.a,X.a,K.a,G.a,X.a,W.a,x.m,K.a,ae.a,oe.b,l.NgZone]),l["ɵmpd"](512,l.ApplicationInitStatus,l.ApplicationInitStatus,[[2,l.APP_INITIALIZER]]),l["ɵmpd"](131584,l.ApplicationRef,l.ApplicationRef,[l.NgZone,l["ɵConsole"],l.Injector,l.ErrorHandler,l.ComponentFactoryResolver,l.ApplicationInitStatus]),l["ɵmpd"](512,l.ApplicationModule,l.ApplicationModule,[l.ApplicationRef]),l["ɵmpd"](512,r.a,r.a,[[3,r.a]]),l["ɵmpd"](512,h.e,h.e,[]),l["ɵmpd"](512,h.d,h.d,[]),l["ɵmpd"](512,$["ɵba"],$["ɵba"],[]),l["ɵmpd"](512,$.FormsModule,$.FormsModule,[]),l["ɵmpd"](512,$.ReactiveFormsModule,$.ReactiveFormsModule,[]),l["ɵmpd"](512,te.a,te.a,[]),l["ɵmpd"](512,ie.CalendarModule,ie.CalendarModule,[]),l["ɵmpd"](512,Le.a,Le.a,[]),l["ɵmpd"](512,y.a,y.a,[]),l["ɵmpd"](512,_.b,_.b,[]),l["ɵmpd"](512,P,P,[]),l["ɵmpd"](256,h.m,"XSRF-TOKEN",[]),l["ɵmpd"](256,h.n,"X-XSRF-TOKEN",[]),l["ɵmpd"](256,i.a,"/",[]),l["ɵmpd"](256,R.a,u,[])])});Object(l.enableProdMode)(),Object(r.j)().bootstrapModuleFactory(De)},524:function(e,a,t){function o(e){return t(r(e))}function r(e){var a=l[e];if(!(a+1))throw new Error("Cannot find module '"+e+"'.");return a}var l={"./af":268,"./af.js":268,"./ar":269,"./ar-dz":270,"./ar-dz.js":270,"./ar-kw":271,"./ar-kw.js":271,"./ar-ly":272,"./ar-ly.js":272,"./ar-ma":273,"./ar-ma.js":273,"./ar-sa":274,"./ar-sa.js":274,"./ar-tn":275,"./ar-tn.js":275,"./ar.js":269,"./az":276,"./az.js":276,"./be":277,"./be.js":277,"./bg":278,"./bg.js":278,"./bm":279,"./bm.js":279,"./bn":280,"./bn-bd":281,"./bn-bd.js":281,"./bn.js":280,"./bo":282,"./bo.js":282,"./br":283,"./br.js":283,"./bs":284,"./bs.js":284,"./ca":285,"./ca.js":285,"./cs":286,"./cs.js":286,"./cv":287,"./cv.js":287,"./cy":288,"./cy.js":288,"./da":289,"./da.js":289,"./de":290,"./de-at":291,"./de-at.js":291,"./de-ch":292,"./de-ch.js":292,"./de.js":290,"./dv":293,"./dv.js":293,"./el":294,"./el.js":294,"./en-au":295,"./en-au.js":295,"./en-ca":296,"./en-ca.js":296,"./en-gb":297,"./en-gb.js":297,"./en-ie":298,"./en-ie.js":298,"./en-il":299,"./en-il.js":299,"./en-in":300,"./en-in.js":300,"./en-nz":301,"./en-nz.js":301,"./en-sg":302,"./en-sg.js":302,"./eo":303,"./eo.js":303,"./es":304,"./es-do":305,"./es-do.js":305,"./es-mx":306,"./es-mx.js":306,"./es-us":307,"./es-us.js":307,"./es.js":304,"./et":308,"./et.js":308,"./eu":309,"./eu.js":309,"./fa":310,"./fa.js":310,"./fi":311,"./fi.js":311,"./fil":312,"./fil.js":312,"./fo":313,"./fo.js":313,"./fr":314,"./fr-ca":315,"./fr-ca.js":315,"./fr-ch":316,"./fr-ch.js":316,"./fr.js":314,"./fy":317,"./fy.js":317,"./ga":318,"./ga.js":318,"./gd":319,"./gd.js":319,"./gl":320,"./gl.js":320,"./gom-deva":321,"./gom-deva.js":321,"./gom-latn":322,"./gom-latn.js":322,"./gu":323,"./gu.js":323,"./he":324,"./he.js":324,"./hi":325,"./hi.js":325,"./hr":326,"./hr.js":326,"./hu":327,"./hu.js":327,"./hy-am":328,"./hy-am.js":328,"./id":329,"./id.js":329,"./is":330,"./is.js":330,"./it":331,"./it-ch":332,"./it-ch.js":332,"./it.js":331,"./ja":333,"./ja.js":333,"./jv":334,"./jv.js":334,"./ka":335,"./ka.js":335,"./kk":336,"./kk.js":336,"./km":337,"./km.js":337,"./kn":338,"./kn.js":338,"./ko":339,"./ko.js":339,"./ku":340,"./ku.js":340,"./ky":341,"./ky.js":341,"./lb":342,"./lb.js":342,"./lo":343,"./lo.js":343,"./lt":344,"./lt.js":344,"./lv":345,"./lv.js":345,"./me":346,"./me.js":346,"./mi":347,"./mi.js":347,"./mk":348,"./mk.js":348,"./ml":349,"./ml.js":349,"./mn":350,"./mn.js":350,"./mr":351,"./mr.js":351,"./ms":352,"./ms-my":353,"./ms-my.js":353,"./ms.js":352,"./mt":354,"./mt.js":354,"./my":355,"./my.js":355,"./nb":356,"./nb.js":356,"./ne":357,"./ne.js":357,"./nl":358,"./nl-be":359,"./nl-be.js":359,"./nl.js":358,"./nn":360,"./nn.js":360,"./oc-lnc":361,"./oc-lnc.js":361,"./pa-in":362,"./pa-in.js":362,"./pl":363,"./pl.js":363,"./pt":364,"./pt-br":365,"./pt-br.js":365,"./pt.js":364,"./ro":366,"./ro.js":366,"./ru":367,"./ru.js":367,"./sd":368,"./sd.js":368,"./se":369,"./se.js":369,"./si":370,"./si.js":370,"./sk":371,"./sk.js":371,"./sl":372,"./sl.js":372,"./sq":373,"./sq.js":373,"./sr":374,"./sr-cyrl":375,"./sr-cyrl.js":375,"./sr.js":374,"./ss":376,"./ss.js":376,"./sv":377,"./sv.js":377,"./sw":378,"./sw.js":378,"./ta":379,"./ta.js":379,"./te":380,"./te.js":380,"./tet":381,"./tet.js":381,"./tg":382,"./tg.js":382,"./th":383,"./th.js":383,"./tk":384,"./tk.js":384,"./tl-ph":385,"./tl-ph.js":385,"./tlh":386,"./tlh.js":386,"./tr":387,"./tr.js":387,"./tzl":388,"./tzl.js":388,"./tzm":389,"./tzm-latn":390,"./tzm-latn.js":390,"./tzm.js":389,"./ug-cn":391,"./ug-cn.js":391,"./uk":392,"./uk.js":392,"./ur":393,"./ur.js":393,"./uz":394,"./uz-latn":395,"./uz-latn.js":395,"./uz.js":394,"./vi":396,"./vi.js":396,"./x-pseudo":397,"./x-pseudo.js":397,"./yo":398,"./yo.js":398,"./zh-cn":399,"./zh-cn.js":399,"./zh-hk":400,"./zh-hk.js":400,"./zh-mo":401,"./zh-mo.js":401,"./zh-tw":402,"./zh-tw.js":402};o.keys=function(){return Object.keys(l)},o.resolve=r,e.exports=o,o.id=524},84:function(e,a,t){"use strict";t.d(a,"a",function(){return o});t(2);var o=function(){return function(e){this.http=e,this.BASE_URL_PROD="http://127.0.0.1:8000/api/",this.BASE_URL_SERV_1="https://www.manpuriaproducts.org/saarthi/public/index.php/api/",this.BASE_URL_SERV_2="https://api.fastdeliveryindia.com/public/index.php/api/",this.BASE_URL="https://www.apnatruckkhata.in/public/index.php/api/",this.BASE_URL_REPORT="http://report.apnatruckkhata.in/public/index.php/api/",this.BASE_URL_REPORT_DOWNLOAD="http://report.apnatruckkhata.in/public/index.php/",this.BASE_URL_REPORT_TEST="http://127.0.0.1:8001/api/",this.BASE_URL_REPORT_DOWNLOAD_TEST="http://127.0.0.1:8001/",this.GET_REGISTRATION_INFO=this.BASE_URL+"getregistrationinfo",this.SAVE_REGISTRATION_INFO=this.BASE_URL+"saveregistrationinfo",this.LOGIN=this.BASE_URL+"login",this.SAVE_VEHICLE_DETAILS=this.BASE_URL+"savevehicledetails",this.UPDATE_VEHICLE_DETAILS=this.BASE_URL+"updatevehiclebyvehicleid",this.DELETE_VEHICLE_DETAILS=this.BASE_URL+"deletevehiclebyid",this.UPDATE_WORK_DETAILS=this.BASE_URL+"updatevehiclestatus",this.GET_UPDATE_WORK_DETAILS=this.BASE_URL+"getupdatevehiclestatus",this.SAVE_WORK_PART=this.BASE_URL+"saveworkpart",this.GET_WORK_PART=this.BASE_URL+"getworkpart",this.UPDATE_WORK_UPDATE=this.BASE_URL+"updatevehiclestatusbyid",this.UPDATE_WORK_DELETE=this.BASE_URL+"deletevehiclestatusbyid",this.GET_VEHICLE_DETAILS=this.BASE_URL+"getvehicledetailsbysrthid",this.UPDATE_PROFILE=this.BASE_URL+"updateprofile",this.GET_PROFILE=this.BASE_URL+"getprofile",this.SAVE_REASON=this.BASE_URL+"savedriverreason",this.GET_REASON=this.BASE_URL+"getdriverreason",this.DELETE_REASON=this.BASE_URL+"deletedriverreason",this.ADD_EXPENSE_BILL=this.BASE_URL+"adddriverexpensebill",this.GET_EXPENSE_BILL_BY_SRTH_ID=this.BASE_URL+"getdriverexpensebillbysrthid",this.GET_EXPENSE_BILL_BY_WORKER_ID=this.BASE_URL+"getdriverexpensebillbyworkerid",this.GET_EXPENSE_BILL_BY_WORKER_ID_UNPAID=this.BASE_URL+"getdriverexpensebillbyworkeridunpaid",this.DELETE_BILL_EXPENSE=this.BASE_URL+"deletebillbybillid",this.UPDATE_BILL_EXPENSE=this.BASE_URL+"updatebillbybillid",this.DELETE_PAYMENT=this.BASE_URL+"deletepayment",this.UPDATE_PAYMENT=this.BASE_URL+"editpayment",this.UPDATE_VEHICLE_DRIVER=this.BASE_URL+"updatevehicledriver",this.GET_DISPLAY_BILL_BY_WORKER_ID=this.BASE_URL+"getdisplaybillbyworkerid",this.CREATE_WORKER=this.BASE_URL+"createworker",this.GET_WORKER=this.BASE_URL+"getworkerbysrrthid",this.GET_WORKER_BY_WORKER_ID=this.BASE_URL+"getworkerbyworkerid",this.UPDATE_WORKER=this.BASE_URL+"updateworker",this.DELETE_WORKER=this.BASE_URL+"deleteworker",this.CREATE_PAYMENT=this.BASE_URL+"createpayment",this.GET_VEHICLE_BY_WORKER_ID=this.BASE_URL+"getvehiclehistorybyworkerid",this.GET_BILL_DETAILS_BY_BILL_ID=this.BASE_URL+"getbilldetailsbybillid",this.SAVE_COMPLAINTS=this.BASE_URL+"savecomplaints",this.GET_COMPLAINTS=this.BASE_URL+"getcomplaintsbysrthid",this.UPDATE_COMPLAINTS=this.BASE_URL+"updatecomplaintsbycomplaintid",this.SOLVE_COMPLAINTS=this.BASE_URL+"solvecomplaintbyid",this.DELETE_COMPLAINTS=this.BASE_URL+"deletecomplaintbyid",this.REMIND_LATER=this.BASE_URL+"remindlater",this.UPDATE_DOCUMENT_BILL=this.BASE_URL+"updatedocumentbill",this.SAVE_PROBLEM=this.BASE_URL+"saveproblem",this.GET_PROBLEM=this.BASE_URL+"getproblembysrthid",this.SAVE_PROBLEM_PARTS=this.BASE_URL+"saveproblemparts",this.GET_PROBLEM_PARTS=this.BASE_URL+"getbillproblemparts",this.UPDATE_DOCUMENT_INFO=this.BASE_URL+"updatedocumentinfo",this.GET_DOCUMENT_INFO=this.BASE_URL+"getdocumentinfo",this.GET_DOCUMENT_INFO_BY_SRTH_ID=this.BASE_URL+"getdocumentinfobysrthid",this.GET_DOCUMENT_INFO_BY_DOCUMENT_ID=this.BASE_URL+"getdocumentinfobyid",this.SAVE_NOTIFICATION_FCM_TOKEN=this.BASE_URL+"savefcmkey",this.GET_LAST_BILL_ID=this.BASE_URL+"getlastbillid",this.SAVE_IMAGE=this.BASE_URL+"saveimage",this.GET_IMAGE_BY_IMAGE_ID=this.BASE_URL+"getimagebyimageid",this.GET_IMAGE_BY_WORKER_TYPE=this.BASE_URL+"getimagebyworkertype",this.GET_IMAGE_BY_TYPE_WORKER_TYPE=this.BASE_URL+"getimagebytypeworkertype",this.SAVE_EXCHANGE_PART=this.BASE_URL+"savevehicleexchangeinfo",this.GET_EXCHANGE_PART=this.BASE_URL+"getvehicleexchangeinfo",this.GET_VEHICLE_BY_VEHICLE_ID=this.BASE_URL+"getvehiclebyvehicleid",this.GET_BILL_FOR_VEHICLE=this.BASE_URL+"getallbillsforvehicle",this.GET_BILL_SUMMARY=this.BASE_URL+"getbillsummary",this.GET_IMAGES_BY_SRTH_ID=this.BASE_URL+"getimagebysrthid",this.GET_LAST_COMPLAINTS_ID=this.BASE_URL+"getlastcomplaintid",this.GET_FUEL_PRICES="https://fuelprice-api-india.herokuapp.com/price/West-Bengal/KOLKATA",this.SHOP_BILL_REPORT=this.BASE_URL_REPORT+"shopbillreportweb",this.SHOP_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"shopbillreport",this.SHOP_BUY_REPORT=this.BASE_URL_REPORT+"shopbuyreportweb",this.SHOP_BUY_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"shopbuyreportapi",this.MECHANIC_BILL_REPORT=this.BASE_URL_REPORT+"mechanicbillreportapi",this.MECHANIC_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"mechanicbillreportweb",this.MECHANIC_BUY_REPORT=this.BASE_URL_REPORT+"mechanicbuyreportapi",this.MECHANIC_BUY_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"mechanicbuyreportweb",this.FULL_REPORT=this.BASE_URL_REPORT+"fullreportapi",this.FULL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"fullreportweb",this.DOCUMENT_BILL_REPORT=this.BASE_URL_REPORT+"documentbillreportapi",this.DOCUMENT_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"documentbillreportweb",this.DOCUMENT_DATE_REPORT=this.BASE_URL_REPORT+"documentdatereportapi",this.DOCUMENT_DATE_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"documentdatereportweb",this.VEHICLE_WORK_REPORT=this.BASE_URL_REPORT+"vehicleworkreportapi",this.VEHICLE_WORK_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"vehicleworkreportweb",this.VEHICLE_BILL_REPORT=this.BASE_URL_REPORT+"vehiclebillreportapi",this.VEHICLE_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"vehiclebillreportweb",this.GET_NOTIFICATIONS=this.BASE_URL+"getnotificatonsbysrthid",this.K_ACCOUNT_INFO="accountinfo",this.SELECTED_WORK_PART="selectedworkpart",this.DETAILS="details",this.ADDED_VEHICLE_ID="addedvehicleid",this.SELECTED_REASON="selectedreason",this.DATE="date",console.log("Hello CodesProvider Provider")}}()}},[516]);