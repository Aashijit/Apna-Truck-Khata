webpackJsonp([77],{183:function(e,a,t){"use strict";t.d(a,"a",function(){return r});t(2);var o=t(73),r=function(){function e(e){this.http=e,console.log("Hello RestProvider Provider")}return e.prototype.post=function(e,a){var t=this,r=(new o.g).set("Content-type","application/json");return new Promise(function(o,l){t.http.post(e,JSON.stringify(a),{headers:r}).subscribe(function(e){o(e)},function(e){l(e)})})},e.prototype.get=function(e,a){var t=this;(new o.g).set("Content-type","application/json");return new Promise(function(a,o){t.http.get(e).subscribe(function(e){a(e)},function(e){o(e)})})},e}()},187:function(e,a,t){"use strict";t.d(a,"a",function(){return o});t(2),t(26);var o=function(){function e(e,a){this.http=e,this.toast=a,console.log("Hello MessageProvider Provider")}return e.prototype.displayToast=function(e){var a=this.toast.create({message:e,position:"bottom",showCloseButton:!0});a.onDidDismiss(function(){console.log("Dismissed toast")}),a.present()},e}()},221:function(e,a){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=221},245:function(e,a,t){function o(e){var a=r[e];return a?t.e(a[1]).then(function(){return t(a[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"../pages/about/about.module.ngfactory":[808,76],"../pages/account-khata/account-khata.module.ngfactory":[809,48],"../pages/add-complaints/add-complaints.module.ngfactory":[810,31],"../pages/add-document-bill/add-document-bill.module.ngfactory":[811,47],"../pages/add-driver-expenses/add-driver-expenses.module.ngfactory":[812,30],"../pages/add-driver/add-driver.module.ngfactory":[813,29],"../pages/add-mechanic/add-mechanic.module.ngfactory":[814,4],"../pages/add-more-modal/add-more-modal.module.ngfactory":[815,75],"../pages/add-new-bank-account/add-new-bank-account.module.ngfactory":[816,74],"../pages/add-permit/add-permit.module.ngfactory":[817,51],"../pages/add-vehicle/add-vehicle.module.ngfactory":[818,0],"../pages/all-image-khata/all-image-khata.module.ngfactory":[819,46],"../pages/allot-driver/allot-driver.module.ngfactory":[820,28],"../pages/bill-description/bill-description.module.ngfactory":[821,9],"../pages/bill-details/bill-details.module.ngfactory":[822,8],"../pages/bill-payment-search/bill-payment-search.module.ngfactory":[823,45],"../pages/buy-details-search-modal/buy-details-search-modal.module.ngfactory":[825,44],"../pages/buy-from-shop/buy-from-shop.module.ngfactory":[824,27],"../pages/calendar-modal/calendar-modal.module.ngfactory":[826,73],"../pages/camera-modal/camera-modal.module.ngfactory":[827,13],"../pages/change-driver/change-driver.module.ngfactory":[828,26],"../pages/complaints-khata/complaints-khata.module.ngfactory":[829,43],"../pages/complaints-update/complaints-update.module.ngfactory":[830,12],"../pages/contact/contact.module.ngfactory":[831,72],"../pages/decision-modal/decision-modal.module.ngfactory":[832,71],"../pages/details-modal/details-modal.module.ngfactory":[833,3],"../pages/document-and-insurance/document-and-insurance.module.ngfactory":[834,70],"../pages/document-bill-report/document-bill-report.module.ngfactory":[835,69],"../pages/document-date-report/document-date-report.module.ngfactory":[836,68],"../pages/document-renewal/document-renewal.module.ngfactory":[838,25],"../pages/document/document.module.ngfactory":[837,42],"../pages/driver-details-search/driver-details-search.module.ngfactory":[842,41],"../pages/driver-document/driver-document.module.ngfactory":[841,6],"../pages/driver-khata-search/driver-khata-search.module.ngfactory":[839,40],"../pages/driver-khata/driver-khata.module.ngfactory":[840,39],"../pages/driver/driver.module.ngfactory":[846,38],"../pages/edit-other-document-name/edit-other-document-name.module.ngfactory":[843,49],"../pages/edit-profile/edit-profile.module.ngfactory":[844,24],"../pages/exchange-modal/exchange-modal.module.ngfactory":[845,2],"../pages/full-report/full-report.module.ngfactory":[847,67],"../pages/home/home.module.ngfactory":[848,66],"../pages/init/init.module.ngfactory":[849,65],"../pages/insurance/insurance.module.ngfactory":[850,37],"../pages/language/language.module.ngfactory":[851,64],"../pages/ledger/ledger.module.ngfactory":[852,23],"../pages/mechanic-bill/mechanic-bill.module.ngfactory":[853,22],"../pages/mechanic-khata/mechanic-khata.module.ngfactory":[854,36],"../pages/mechanic/mechanic.module.ngfactory":[855,35],"../pages/parts-bill-details-modal/parts-bill-details-modal.module.ngfactory":[856,15],"../pages/parts-work-modal/parts-work-modal.module.ngfactory":[884,1],"../pages/problem-modal/problem-modal.module.ngfactory":[857,11],"../pages/problem-work-part-modal/problem-work-part-modal.module.ngfactory":[859,10],"../pages/profile/profile.module.ngfactory":[858,63],"../pages/reason-modal/reason-modal.module.ngfactory":[860,34],"../pages/remove-driver-from-account/remove-driver-from-account.module.ngfactory":[861,50],"../pages/remove-driver/remove-driver.module.ngfactory":[883,62],"../pages/report-all-comp/report-all-comp.module.ngfactory":[863,61],"../pages/report-full/report-full.module.ngfactory":[862,21],"../pages/report-khata/report-khata.module.ngfactory":[864,60],"../pages/report-modal/report-modal.module.ngfactory":[865,20],"../pages/security-and-backup/security-and-backup.module.ngfactory":[866,59],"../pages/settings/settings.module.ngfactory":[867,14],"../pages/shop-bill-description/shop-bill-description.module.ngfactory":[868,7],"../pages/shop-bill-details/shop-bill-details.module.ngfactory":[869,19],"../pages/shop-khata/shop-khata.module.ngfactory":[870,33],"../pages/shop/shop.module.ngfactory":[871,32],"../pages/tabs/tabs.module.ngfactory":[872,58],"../pages/upload-image/upload-image.module.ngfactory":[873,57],"../pages/vehicle-bill-report/vehicle-bill-report.module.ngfactory":[874,18],"../pages/vehicle-details/vehicle-details.module.ngfactory":[875,56],"../pages/vehicle-document-bill/vehicle-document-bill.module.ngfactory":[876,17],"../pages/vehicle-document/vehicle-document.module.ngfactory":[877,5],"../pages/vehicle-khata/vehicle-khata.module.ngfactory":[878,55],"../pages/vehicle-work-report/vehicle-work-report.module.ngfactory":[879,16],"../pages/view-bill/view-bill.module.ngfactory":[881,54],"../pages/view-payment/view-payment.module.ngfactory":[880,53],"../pages/view-transaction/view-transaction.module.ngfactory":[882,52]};o.keys=function(){return Object.keys(r)},o.id=245,e.exports=o},514:function(e,a,t){"use strict";function o(e){return l["ɵvid"](0,[(e()(),l["ɵeld"](0,0,null,null,2,"ion-nav",[],null,null,null,j.b,j.a)),l["ɵprd"](6144,null,k.a,null,[U.a]),l["ɵdid"](2,4374528,null,0,U.a,[[2,I.a],[2,F.a],H.a,V.a,W.a,l.ElementRef,l.NgZone,l.Renderer,l.ComponentFactoryResolver,K.m,G.a,[2,x.a],z.a,l.ErrorHandler],{root:[0,"root"]},null)],function(e,a){e(a,2,0,a.component.rootPage)},null)}Object.defineProperty(a,"__esModule",{value:!0});var r=t(34),l=t(0),i=(t(2),t(512),t(16)),d=t(206),n=t(187),s=t(84),m=t(183),c=t(210),g=(t(26),t(109)),p=t(110),u=function(){return function(e,a,t,o){var r=this;this.codes=o,this.rootPage="",e.ready().then(function(){a.styleDefault(),t.hide(),r.rootPage=null==localStorage.getItem(r.codes.K_ACCOUNT_INFO)||void 0==localStorage.getItem(r.codes.K_ACCOUNT_INFO)?"InitPage":"TabsPage"})}}(),h=t(73),y=(t(524),t(496)),f=t(195),E=function(){return function(){}}(),_=t(65),P=t(498),R=t(499),b=t(500),A=t(501),v=t(502),L=t(503),D=t(504),w=t(505),S=t(506),C=t(513),N=t(127),T=t(126),B=t(510),M=t(203),O=t(806),j=t(807),k=t(52),U=t(72),I=t(8),F=t(29),H=t(13),V=t(4),W=t(7),K=t(11),G=t(44),x=t(24),z=t(14),Y=l["ɵcrt"]({encapsulation:2,styles:[],data:{}}),X=l["ɵccf"]("ng-component",u,function(e){return l["ɵvid"](0,[(e()(),l["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,o,Y)),l["ɵdid"](1,49152,null,0,u,[W.a,g.a,p.a,s.a],null,null)],null,null)},{},{},[]),Z=t(151),q=t(497),J=t(20),Q=t(51),$=t(67),ee=t(184),ae=t(55),te=t(122),oe=t(128),re=t(204),le=t(111),ie=t(182),de=t(142),ne=t(124),se=t(150),me=t(28),ce=t(43),ge=t(40),pe=t(125),ue=t(88),he=t(157),ye=t(153),fe=t(162),Ee=t(402),_e=t(152),Pe=t(48),Re=t(149),be=t(154),Ae=t(403),ve=l["ɵcmf"](E,[_.b],function(e){return l["ɵmod"]([l["ɵmpd"](512,l.ComponentFactoryResolver,l["ɵCodegenComponentFactoryResolver"],[[8,[P.a,R.a,b.a,A.a,v.a,L.a,D.a,w.a,S.a,C.a,N.a,T.a,B.a,M.a,O.a,X]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["ɵmpd"](5120,l.LOCALE_ID,l["ɵq"],[[3,l.LOCALE_ID]]),l["ɵmpd"](4608,i.l,i.k,[l.LOCALE_ID,[2,i.t]]),l["ɵmpd"](5120,l.APP_ID,l["ɵi"],[]),l["ɵmpd"](5120,l.IterableDiffers,l["ɵn"],[]),l["ɵmpd"](5120,l.KeyValueDiffers,l["ɵo"],[]),l["ɵmpd"](4608,r.c,r.q,[i.c]),l["ɵmpd"](6144,l.Sanitizer,null,[r.c]),l["ɵmpd"](4608,r.f,Z.a,[]),l["ɵmpd"](5120,r.d,function(e,a,t,o,l){return[new r.k(e,a),new r.o(t),new r.n(o,l)]},[i.c,l.NgZone,i.c,i.c,r.f]),l["ɵmpd"](4608,r.e,r.e,[r.d,l.NgZone]),l["ɵmpd"](135680,r.m,r.m,[i.c]),l["ɵmpd"](4608,r.l,r.l,[r.e,r.m]),l["ɵmpd"](5120,q.a,y.d,[]),l["ɵmpd"](5120,q.c,y.e,[]),l["ɵmpd"](4608,q.b,y.c,[q.a,q.c]),l["ɵmpd"](5120,l.RendererFactory2,y.f,[r.l,q.b,l.NgZone]),l["ɵmpd"](6144,r.p,null,[r.m]),l["ɵmpd"](4608,l.Testability,l.Testability,[l.NgZone]),l["ɵmpd"](4608,r.h,r.h,[i.c]),l["ɵmpd"](4608,r.i,r.i,[i.c]),l["ɵmpd"](4608,h.i,h.o,[i.c,l.PLATFORM_ID,h.m]),l["ɵmpd"](4608,h.p,h.p,[h.i,h.n]),l["ɵmpd"](5120,h.a,function(e){return[e]},[h.p]),l["ɵmpd"](4608,h.l,h.l,[]),l["ɵmpd"](6144,h.j,null,[h.l]),l["ɵmpd"](4608,h.h,h.h,[h.j]),l["ɵmpd"](6144,h.b,null,[h.h]),l["ɵmpd"](4608,h.f,h.k,[h.b,l.Injector]),l["ɵmpd"](4608,h.c,h.c,[h.f]),l["ɵmpd"](4608,J["ɵi"],J["ɵi"],[]),l["ɵmpd"](4608,J.FormBuilder,J.FormBuilder,[]),l["ɵmpd"](4608,Q.CalendarService,Q.CalendarService,[]),l["ɵmpd"](5120,$.b,$.d,[H.a,$.a]),l["ɵmpd"](5120,i.g,ee.c,[i.r,[2,i.a],V.a]),l["ɵmpd"](4608,i.f,i.f,[i.g]),l["ɵmpd"](5120,x.a,x.b,[H.a,$.b,i.f,ae.b,l.ComponentFactoryResolver]),l["ɵmpd"](4608,te.a,te.a,[H.a,V.a,x.a]),l["ɵmpd"](5120,oe.CalendarController,re.calendarController,[te.a,Q.CalendarService]),l["ɵmpd"](4608,le.a,le.a,[H.a,V.a,x.a]),l["ɵmpd"](4608,ie.b,y.b,[l.RendererFactory2,r.b]),l["ɵmpd"](4608,de.a,de.a,[H.a,V.a]),l["ɵmpd"](4608,ne.a,ne.a,[H.a,V.a]),l["ɵmpd"](4608,se.a,se.a,[]),l["ɵmpd"](4608,me.a,me.a,[]),l["ɵmpd"](4608,ce.a,ce.a,[W.a]),l["ɵmpd"](4608,ge.a,ge.a,[V.a,W.a,l.NgZone,z.a]),l["ɵmpd"](4608,pe.a,pe.a,[H.a,V.a]),l["ɵmpd"](4608,ue.a,ue.a,[H.a,V.a]),l["ɵmpd"](4608,he.a,he.a,[H.a,V.a,x.a]),l["ɵmpd"](4608,ye.a,ye.a,[V.a,W.a,z.a,H.a,K.m]),l["ɵmpd"](4608,fe.a,fe.a,[H.a,V.a]),l["ɵmpd"](4608,G.a,G.a,[W.a,V.a]),l["ɵmpd"](4608,g.a,g.a,[]),l["ɵmpd"](4608,p.a,p.a,[]),l["ɵmpd"](4608,c.a,c.a,[]),l["ɵmpd"](4608,c.b,c.b,[]),l["ɵmpd"](4608,m.a,m.a,[h.c]),l["ɵmpd"](4608,s.a,s.a,[h.c]),l["ɵmpd"](4608,f.a,f.a,[]),l["ɵmpd"](4608,n.a,n.a,[h.c,fe.a]),l["ɵmpd"](4608,d.a,d.a,[]),l["ɵmpd"](4608,i.d,i.d,[l.LOCALE_ID]),l["ɵmpd"](512,i.b,i.b,[]),l["ɵmpd"](512,l.ErrorHandler,Ee.a,[]),l["ɵmpd"](256,V.b,{},[]),l["ɵmpd"](1024,_e.a,_e.b,[]),l["ɵmpd"](1024,W.a,W.b,[r.b,_e.a,l.NgZone]),l["ɵmpd"](1024,V.a,V.c,[V.b,W.a]),l["ɵmpd"](512,z.a,z.a,[W.a]),l["ɵmpd"](512,Pe.a,Pe.a,[]),l["ɵmpd"](512,H.a,H.a,[V.a,W.a,[2,Pe.a]]),l["ɵmpd"](512,K.m,K.m,[H.a]),l["ɵmpd"](256,$.a,{links:[{loadChildren:"../pages/about/about.module.ngfactory#HomePageModuleNgFactory",name:"AboutPage",segment:"about",priority:"low",defaultHistory:[]},{loadChildren:"../pages/account-khata/account-khata.module.ngfactory#AccountKhataPageModuleNgFactory",name:"AccountKhataPage",segment:"account-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-complaints/add-complaints.module.ngfactory#AddComplaintsPageModuleNgFactory",name:"AddComplaintsPage",segment:"add-complaints",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-document-bill/add-document-bill.module.ngfactory#AddDocumentBillPageModuleNgFactory",name:"AddDocumentBillPage",segment:"add-document-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-driver-expenses/add-driver-expenses.module.ngfactory#AddDriverExpensesPageModuleNgFactory",name:"AddDriverExpensesPage",segment:"add-driver-expenses",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-driver/add-driver.module.ngfactory#AddDriverPageModuleNgFactory",name:"AddDriverPage",segment:"add-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-mechanic/add-mechanic.module.ngfactory#AddMechanicPageModuleNgFactory",name:"AddMechanicPage",segment:"add-mechanic",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-more-modal/add-more-modal.module.ngfactory#AddMoreModalPageModuleNgFactory",name:"AddMoreModalPage",segment:"add-more-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-new-bank-account/add-new-bank-account.module.ngfactory#AddNewBankAccountPageModuleNgFactory",name:"AddNewBankAccountPage",segment:"add-new-bank-account",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-permit/add-permit.module.ngfactory#AddPermitPageModuleNgFactory",name:"AddPermitPage",segment:"add-permit",priority:"low",defaultHistory:[]},{loadChildren:"../pages/add-vehicle/add-vehicle.module.ngfactory#AddVehiclePageModuleNgFactory",name:"AddVehiclePage",segment:"add-vehicle",priority:"low",defaultHistory:[]},{loadChildren:"../pages/all-image-khata/all-image-khata.module.ngfactory#AllImageKhataPageModuleNgFactory",name:"AllImageKhataPage",segment:"all-image-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/allot-driver/allot-driver.module.ngfactory#AllotDriverPageModuleNgFactory",name:"AllotDriverPage",segment:"allot-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/bill-description/bill-description.module.ngfactory#BillDescriptionPageModuleNgFactory",name:"BillDescriptionPage",segment:"bill-description",priority:"low",defaultHistory:[]},{loadChildren:"../pages/bill-details/bill-details.module.ngfactory#BillDetailsPageModuleNgFactory",name:"BillDetailsPage",segment:"bill-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/bill-payment-search/bill-payment-search.module.ngfactory#BillPaymentSearchPageModuleNgFactory",name:"BillPaymentSearchPage",segment:"bill-payment-search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/buy-from-shop/buy-from-shop.module.ngfactory#BuyFromShopPageModuleNgFactory",name:"BuyFromShopPage",segment:"buy-from-shop",priority:"low",defaultHistory:[]},{loadChildren:"../pages/buy-details-search-modal/buy-details-search-modal.module.ngfactory#BuyDetailsSearchModalPageModuleNgFactory",name:"BuyDetailsSearchModalPage",segment:"buy-details-search-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/calendar-modal/calendar-modal.module.ngfactory#CalendarModalPageModuleNgFactory",name:"CalendarModalPage",segment:"calendar-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/camera-modal/camera-modal.module.ngfactory#CameraModalPageModuleNgFactory",name:"CameraModalPage",segment:"camera-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/change-driver/change-driver.module.ngfactory#ChangeDriverPageModuleNgFactory",name:"ChangeDriverPage",segment:"change-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/complaints-khata/complaints-khata.module.ngfactory#ComplaintsKhataPageModuleNgFactory",name:"ComplaintsKhataPage",segment:"complaints-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/complaints-update/complaints-update.module.ngfactory#ComplaintsUpdatePageModuleNgFactory",name:"ComplaintsUpdatePage",segment:"complaints-update",priority:"low",defaultHistory:[]},{loadChildren:"../pages/contact/contact.module.ngfactory#ContactPageModuleNgFactory",name:"ContactPage",segment:"contact",priority:"low",defaultHistory:[]},{loadChildren:"../pages/decision-modal/decision-modal.module.ngfactory#DecisionModalPageModuleNgFactory",name:"DecisionModalPage",segment:"decision-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/details-modal/details-modal.module.ngfactory#DetailsModalPageModuleNgFactory",name:"DetailsModalPage",segment:"details-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-and-insurance/document-and-insurance.module.ngfactory#DocumentAndInsurancePageModuleNgFactory",name:"DocumentAndInsurancePage",segment:"document-and-insurance",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-bill-report/document-bill-report.module.ngfactory#DocumentBillReportPageModuleNgFactory",name:"DocumentBillReportPage",segment:"document-bill-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-date-report/document-date-report.module.ngfactory#DocumentDateReportPageModuleNgFactory",name:"DocumentDateReportPage",segment:"document-date-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document/document.module.ngfactory#DocumentPageModuleNgFactory",name:"DocumentPage",segment:"document",priority:"low",defaultHistory:[]},{loadChildren:"../pages/document-renewal/document-renewal.module.ngfactory#DocumentRenewalPageModuleNgFactory",name:"DocumentRenewalPage",segment:"document-renewal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-khata-search/driver-khata-search.module.ngfactory#DriverKhataSearchPageModuleNgFactory",name:"DriverKhataSearchPage",segment:"driver-khata-search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-khata/driver-khata.module.ngfactory#DriverKhataPageModuleNgFactory",name:"DriverKhataPage",segment:"driver-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-document/driver-document.module.ngfactory#DriverDocumentPageModuleNgFactory",name:"DriverDocumentPage",segment:"driver-document",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver-details-search/driver-details-search.module.ngfactory#DriverDetailsSearchPageModuleNgFactory",name:"DriverDetailsSearchPage",segment:"driver-details-search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/edit-other-document-name/edit-other-document-name.module.ngfactory#EditOtherDocumentNamePageModuleNgFactory",name:"EditOtherDocumentNamePage",segment:"edit-other-document-name",priority:"low",defaultHistory:[]},{loadChildren:"../pages/edit-profile/edit-profile.module.ngfactory#EditProfilePageModuleNgFactory",name:"EditProfilePage",segment:"edit-profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/exchange-modal/exchange-modal.module.ngfactory#ExchangeModalPageModuleNgFactory",name:"ExchangeModalPage",segment:"exchange-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/driver/driver.module.ngfactory#DriverPageModuleNgFactory",name:"DriverPage",segment:"driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/full-report/full-report.module.ngfactory#FullReportPageModuleNgFactory",name:"FullReportPage",segment:"full-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/init/init.module.ngfactory#InitPageModuleNgFactory",name:"InitPage",segment:"init",priority:"low",defaultHistory:[]},{loadChildren:"../pages/insurance/insurance.module.ngfactory#InsurancePageModuleNgFactory",name:"InsurancePage",segment:"insurance",priority:"low",defaultHistory:[]},{loadChildren:"../pages/language/language.module.ngfactory#LanguagePageModuleNgFactory",name:"LanguagePage",segment:"language",priority:"low",defaultHistory:[]},{loadChildren:"../pages/ledger/ledger.module.ngfactory#LedgerPageModuleNgFactory",name:"LedgerPage",segment:"ledger",priority:"low",defaultHistory:[]},{loadChildren:"../pages/mechanic-bill/mechanic-bill.module.ngfactory#MechanicBillPageModuleNgFactory",name:"MechanicBillPage",segment:"mechanic-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/mechanic-khata/mechanic-khata.module.ngfactory#MechanicKhataPageModuleNgFactory",name:"MechanicKhataPage",segment:"mechanic-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/mechanic/mechanic.module.ngfactory#MechanicPageModuleNgFactory",name:"MechanicPage",segment:"mechanic",priority:"low",defaultHistory:[]},{loadChildren:"../pages/parts-bill-details-modal/parts-bill-details-modal.module.ngfactory#PartsBillDetailsModalPageModuleNgFactory",name:"PartsBillDetailsModalPage",segment:"parts-bill-details-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/problem-modal/problem-modal.module.ngfactory#ProblemModalPageModuleNgFactory",name:"ProblemModalPage",segment:"problem-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile/profile.module.ngfactory#ProfilePageModuleNgFactory",name:"ProfilePage",segment:"profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/problem-work-part-modal/problem-work-part-modal.module.ngfactory#ProblemWorkPartModalPageModuleNgFactory",name:"ProblemWorkPartModalPage",segment:"problem-work-part-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/reason-modal/reason-modal.module.ngfactory#ReasonModalPageModuleNgFactory",name:"ReasonModalPage",segment:"reason-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/remove-driver-from-account/remove-driver-from-account.module.ngfactory#RemoveDriverFromAccountPageModuleNgFactory",name:"RemoveDriverFromAccountPage",segment:"remove-driver-from-account",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-full/report-full.module.ngfactory#ReportFullPageModuleNgFactory",name:"ReportFullPage",segment:"report-full",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-all-comp/report-all-comp.module.ngfactory#ReportAllCompPageModuleNgFactory",name:"ReportAllCompPage",segment:"report-all-comp",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-khata/report-khata.module.ngfactory#ReportKhataPageModuleNgFactory",name:"ReportKhataPage",segment:"report-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/report-modal/report-modal.module.ngfactory#ReportModalPageModuleNgFactory",name:"ReportModalPage",segment:"report-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/security-and-backup/security-and-backup.module.ngfactory#SecurityAndBackupPageModuleNgFactory",name:"SecurityAndBackupPage",segment:"security-and-backup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop-bill-description/shop-bill-description.module.ngfactory#ShopBillDescriptionPageModuleNgFactory",name:"ShopBillDescriptionPage",segment:"shop-bill-description",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop-bill-details/shop-bill-details.module.ngfactory#ShopBillDetailsPageModuleNgFactory",name:"ShopBillDetailsPage",segment:"shop-bill-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop-khata/shop-khata.module.ngfactory#ShopKhataPageModuleNgFactory",name:"ShopKhataPage",segment:"shop-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/shop/shop.module.ngfactory#ShopPageModuleNgFactory",name:"ShopPage",segment:"shop",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/upload-image/upload-image.module.ngfactory#UploadImagePageModuleNgFactory",name:"UploadImagePage",segment:"upload-image",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-bill-report/vehicle-bill-report.module.ngfactory#VehicleBillReportPageModuleNgFactory",name:"VehicleBillReportPage",segment:"vehicle-bill-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-details/vehicle-details.module.ngfactory#VehicleDetailsPageModuleNgFactory",name:"VehicleDetailsPage",segment:"vehicle-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-document-bill/vehicle-document-bill.module.ngfactory#VehicleDocumentBillPageModuleNgFactory",name:"VehicleDocumentBillPage",segment:"vehicle-document-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-document/vehicle-document.module.ngfactory#VehicleDocumentPageModuleNgFactory",name:"VehicleDocumentPage",segment:"vehicle-document",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-khata/vehicle-khata.module.ngfactory#VehicleKhataPageModuleNgFactory",name:"VehicleKhataPage",segment:"vehicle-khata",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vehicle-work-report/vehicle-work-report.module.ngfactory#VehicleWorkReportPageModuleNgFactory",name:"VehicleWorkReportPage",segment:"vehicle-work-report",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-payment/view-payment.module.ngfactory#ViewPaymentPageModuleNgFactory",name:"ViewPaymentPage",segment:"view-payment",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-bill/view-bill.module.ngfactory#ViewBillPageModuleNgFactory",name:"ViewBillPage",segment:"view-bill",priority:"low",defaultHistory:[]},{loadChildren:"../pages/view-transaction/view-transaction.module.ngfactory#ViewTransactionPageModuleNgFactory",name:"ViewTransactionPage",segment:"view-transaction",priority:"low",defaultHistory:[]},{loadChildren:"../pages/remove-driver/remove-driver.module.ngfactory#RemoveDriverPageModuleNgFactory",name:"RemoveDriverPage",segment:"remove-driver",priority:"low",defaultHistory:[]},{loadChildren:"../pages/parts-work-modal/parts-work-modal.module.ngfactory#PartsWorkModalPageModuleNgFactory",name:"PartsWorkModalPage",segment:"parts-work-modal",priority:"low",defaultHistory:[]}]},[]),l["ɵmpd"](512,l.Compiler,l.Compiler,[]),l["ɵmpd"](512,Re.a,Re.a,[l.Compiler]),l["ɵmpd"](1024,ae.b,ae.c,[Re.a,l.Injector]),l["ɵmpd"](1024,l.APP_INITIALIZER,function(e,a,t,o,l,i,d,n,s,m,c,g,p){return[r.s(e),be.a(a),se.c(t,o),ye.c(l,i,d,n,s),ae.d(m,c,g,p)]},[[2,l.NgProbeToken],V.a,W.a,z.a,V.a,W.a,z.a,H.a,K.m,V.a,$.a,ae.b,l.NgZone]),l["ɵmpd"](512,l.ApplicationInitStatus,l.ApplicationInitStatus,[[2,l.APP_INITIALIZER]]),l["ɵmpd"](131584,l.ApplicationRef,l.ApplicationRef,[l.NgZone,l["ɵConsole"],l.Injector,l.ErrorHandler,l.ComponentFactoryResolver,l.ApplicationInitStatus]),l["ɵmpd"](512,l.ApplicationModule,l.ApplicationModule,[l.ApplicationRef]),l["ɵmpd"](512,r.a,r.a,[[3,r.a]]),l["ɵmpd"](512,h.e,h.e,[]),l["ɵmpd"](512,h.d,h.d,[]),l["ɵmpd"](512,J["ɵba"],J["ɵba"],[]),l["ɵmpd"](512,J.FormsModule,J.FormsModule,[]),l["ɵmpd"](512,J.ReactiveFormsModule,J.ReactiveFormsModule,[]),l["ɵmpd"](512,ee.a,ee.a,[]),l["ɵmpd"](512,re.CalendarModule,re.CalendarModule,[]),l["ɵmpd"](512,Ae.a,Ae.a,[]),l["ɵmpd"](512,y.a,y.a,[]),l["ɵmpd"](512,E,E,[]),l["ɵmpd"](256,h.m,"XSRF-TOKEN",[]),l["ɵmpd"](256,h.n,"X-XSRF-TOKEN",[]),l["ɵmpd"](256,i.a,"/",[]),l["ɵmpd"](256,_.a,u,[])])});Object(l.enableProdMode)(),Object(r.j)().bootstrapModuleFactory(ve)},522:function(e,a,t){function o(e){return t(r(e))}function r(e){var a=l[e];if(!(a+1))throw new Error("Cannot find module '"+e+"'.");return a}var l={"./af":266,"./af.js":266,"./ar":267,"./ar-dz":268,"./ar-dz.js":268,"./ar-kw":269,"./ar-kw.js":269,"./ar-ly":270,"./ar-ly.js":270,"./ar-ma":271,"./ar-ma.js":271,"./ar-sa":272,"./ar-sa.js":272,"./ar-tn":273,"./ar-tn.js":273,"./ar.js":267,"./az":274,"./az.js":274,"./be":275,"./be.js":275,"./bg":276,"./bg.js":276,"./bm":277,"./bm.js":277,"./bn":278,"./bn-bd":279,"./bn-bd.js":279,"./bn.js":278,"./bo":280,"./bo.js":280,"./br":281,"./br.js":281,"./bs":282,"./bs.js":282,"./ca":283,"./ca.js":283,"./cs":284,"./cs.js":284,"./cv":285,"./cv.js":285,"./cy":286,"./cy.js":286,"./da":287,"./da.js":287,"./de":288,"./de-at":289,"./de-at.js":289,"./de-ch":290,"./de-ch.js":290,"./de.js":288,"./dv":291,"./dv.js":291,"./el":292,"./el.js":292,"./en-au":293,"./en-au.js":293,"./en-ca":294,"./en-ca.js":294,"./en-gb":295,"./en-gb.js":295,"./en-ie":296,"./en-ie.js":296,"./en-il":297,"./en-il.js":297,"./en-in":298,"./en-in.js":298,"./en-nz":299,"./en-nz.js":299,"./en-sg":300,"./en-sg.js":300,"./eo":301,"./eo.js":301,"./es":302,"./es-do":303,"./es-do.js":303,"./es-mx":304,"./es-mx.js":304,"./es-us":305,"./es-us.js":305,"./es.js":302,"./et":306,"./et.js":306,"./eu":307,"./eu.js":307,"./fa":308,"./fa.js":308,"./fi":309,"./fi.js":309,"./fil":310,"./fil.js":310,"./fo":311,"./fo.js":311,"./fr":312,"./fr-ca":313,"./fr-ca.js":313,"./fr-ch":314,"./fr-ch.js":314,"./fr.js":312,"./fy":315,"./fy.js":315,"./ga":316,"./ga.js":316,"./gd":317,"./gd.js":317,"./gl":318,"./gl.js":318,"./gom-deva":319,"./gom-deva.js":319,"./gom-latn":320,"./gom-latn.js":320,"./gu":321,"./gu.js":321,"./he":322,"./he.js":322,"./hi":323,"./hi.js":323,"./hr":324,"./hr.js":324,"./hu":325,"./hu.js":325,"./hy-am":326,"./hy-am.js":326,"./id":327,"./id.js":327,"./is":328,"./is.js":328,"./it":329,"./it-ch":330,"./it-ch.js":330,"./it.js":329,"./ja":331,"./ja.js":331,"./jv":332,"./jv.js":332,"./ka":333,"./ka.js":333,"./kk":334,"./kk.js":334,"./km":335,"./km.js":335,"./kn":336,"./kn.js":336,"./ko":337,"./ko.js":337,"./ku":338,"./ku.js":338,"./ky":339,"./ky.js":339,"./lb":340,"./lb.js":340,"./lo":341,"./lo.js":341,"./lt":342,"./lt.js":342,"./lv":343,"./lv.js":343,"./me":344,"./me.js":344,"./mi":345,"./mi.js":345,"./mk":346,"./mk.js":346,"./ml":347,"./ml.js":347,"./mn":348,"./mn.js":348,"./mr":349,"./mr.js":349,"./ms":350,"./ms-my":351,"./ms-my.js":351,"./ms.js":350,"./mt":352,"./mt.js":352,"./my":353,"./my.js":353,"./nb":354,"./nb.js":354,"./ne":355,"./ne.js":355,"./nl":356,"./nl-be":357,"./nl-be.js":357,"./nl.js":356,"./nn":358,"./nn.js":358,"./oc-lnc":359,"./oc-lnc.js":359,"./pa-in":360,"./pa-in.js":360,"./pl":361,"./pl.js":361,"./pt":362,"./pt-br":363,"./pt-br.js":363,"./pt.js":362,"./ro":364,"./ro.js":364,"./ru":365,"./ru.js":365,"./sd":366,"./sd.js":366,"./se":367,"./se.js":367,"./si":368,"./si.js":368,"./sk":369,"./sk.js":369,"./sl":370,"./sl.js":370,"./sq":371,"./sq.js":371,"./sr":372,"./sr-cyrl":373,"./sr-cyrl.js":373,"./sr.js":372,"./ss":374,"./ss.js":374,"./sv":375,"./sv.js":375,"./sw":376,"./sw.js":376,"./ta":377,"./ta.js":377,"./te":378,"./te.js":378,"./tet":379,"./tet.js":379,"./tg":380,"./tg.js":380,"./th":381,"./th.js":381,"./tk":382,"./tk.js":382,"./tl-ph":383,"./tl-ph.js":383,"./tlh":384,"./tlh.js":384,"./tr":385,"./tr.js":385,"./tzl":386,"./tzl.js":386,"./tzm":387,"./tzm-latn":388,"./tzm-latn.js":388,"./tzm.js":387,"./ug-cn":389,"./ug-cn.js":389,"./uk":390,"./uk.js":390,"./ur":391,"./ur.js":391,"./uz":392,"./uz-latn":393,"./uz-latn.js":393,"./uz.js":392,"./vi":394,"./vi.js":394,"./x-pseudo":395,"./x-pseudo.js":395,"./yo":396,"./yo.js":396,"./zh-cn":397,"./zh-cn.js":397,"./zh-hk":398,"./zh-hk.js":398,"./zh-mo":399,"./zh-mo.js":399,"./zh-tw":400,"./zh-tw.js":400};o.keys=function(){return Object.keys(l)},o.resolve=r,e.exports=o,o.id=522},84:function(e,a,t){"use strict";t.d(a,"a",function(){return o});t(2);var o=function(){return function(e){this.http=e,this.BASE_URL_PROD="http://127.0.0.1:8000/api/",this.BASE_URL_SERV_1="https://www.manpuriaproducts.org/saarthi/public/index.php/api/",this.BASE_URL_SERV_2="https://api.fastdeliveryindia.com/public/index.php/api/",this.BASE_URL="https://www.atkindia.com/public/index.php/api/",this.BASE_URL_REPORT="http://report.atkindia.com/public/api/",this.BASE_URL_REPORT_DOWNLOAD="http://report.atkindia.com/public/",this.BASE_URL_REPORT_TEST="http://127.0.0.1:8001/api/",this.BASE_URL_REPORT_DOWNLOAD_TEST="http://127.0.0.1:8001/",this.GET_REGISTRATION_INFO=this.BASE_URL+"getregistrationinfo",this.SAVE_REGISTRATION_INFO=this.BASE_URL+"saveregistrationinfo",this.LOGIN=this.BASE_URL+"login",this.SAVE_VEHICLE_DETAILS=this.BASE_URL+"savevehicledetails",this.UPDATE_VEHICLE_DETAILS=this.BASE_URL+"updatevehiclebyvehicleid",this.DELETE_VEHICLE_DETAILS=this.BASE_URL+"deletevehiclebyid",this.UPDATE_WORK_DETAILS=this.BASE_URL+"updatevehiclestatus",this.GET_UPDATE_WORK_DETAILS=this.BASE_URL+"getupdatevehiclestatus",this.SAVE_WORK_PART=this.BASE_URL+"saveworkpart",this.GET_WORK_PART=this.BASE_URL+"getworkpart",this.UPDATE_WORK_UPDATE=this.BASE_URL+"updatevehiclestatusbyid",this.UPDATE_WORK_DELETE=this.BASE_URL+"deletevehiclestatusbyid",this.GET_VEHICLE_DETAILS=this.BASE_URL+"getvehicledetailsbysrthid",this.UPDATE_PROFILE=this.BASE_URL+"updateprofile",this.GET_PROFILE=this.BASE_URL+"getprofile",this.SAVE_REASON=this.BASE_URL+"savedriverreason",this.GET_REASON=this.BASE_URL+"getdriverreason",this.DELETE_REASON=this.BASE_URL+"deletedriverreason",this.ADD_EXPENSE_BILL=this.BASE_URL+"adddriverexpensebill",this.GET_EXPENSE_BILL_BY_SRTH_ID=this.BASE_URL+"getdriverexpensebillbysrthid",this.GET_EXPENSE_BILL_BY_WORKER_ID=this.BASE_URL+"getdriverexpensebillbyworkerid",this.GET_EXPENSE_BILL_BY_WORKER_ID_UNPAID=this.BASE_URL+"getdriverexpensebillbyworkeridunpaid",this.DELETE_BILL_EXPENSE=this.BASE_URL+"deletebillbybillid",this.UPDATE_BILL_EXPENSE=this.BASE_URL+"updatebillbybillid",this.DELETE_PAYMENT=this.BASE_URL+"deletepayment",this.UPDATE_PAYMENT=this.BASE_URL+"editpayment",this.UPDATE_VEHICLE_DRIVER=this.BASE_URL+"updatevehicledriver",this.GET_DISPLAY_BILL_BY_WORKER_ID=this.BASE_URL+"getdisplaybillbyworkerid",this.CREATE_WORKER=this.BASE_URL+"createworker",this.GET_WORKER=this.BASE_URL+"getworkerbysrrthid",this.UPDATE_WORKER=this.BASE_URL+"updateworker",this.DELETE_WORKER=this.BASE_URL+"deleteworker",this.CREATE_PAYMENT=this.BASE_URL+"createpayment",this.GET_VEHICLE_BY_WORKER_ID=this.BASE_URL+"getvehiclehistorybyworkerid",this.GET_BILL_DETAILS_BY_BILL_ID=this.BASE_URL+"getbilldetailsbybillid",this.SAVE_COMPLAINTS=this.BASE_URL+"savecomplaints",this.GET_COMPLAINTS=this.BASE_URL+"getcomplaintsbysrthid",this.UPDATE_COMPLAINTS=this.BASE_URL+"updatecomplaintsbycomplaintid",this.SOLVE_COMPLAINTS=this.BASE_URL+"solvecomplaintbyid",this.DELETE_COMPLAINTS=this.BASE_URL+"deletecomplaintbyid",this.REMIND_LATER=this.BASE_URL+"remindlater",this.UPDATE_DOCUMENT_BILL=this.BASE_URL+"updatedocumentbill",this.SAVE_PROBLEM=this.BASE_URL+"saveproblem",this.GET_PROBLEM=this.BASE_URL+"getproblembysrthid",this.SAVE_PROBLEM_PARTS=this.BASE_URL+"saveproblemparts",this.GET_PROBLEM_PARTS=this.BASE_URL+"getbillproblemparts",this.UPDATE_DOCUMENT_INFO=this.BASE_URL+"updatedocumentinfo",this.GET_DOCUMENT_INFO=this.BASE_URL+"getdocumentinfo",this.GET_DOCUMENT_INFO_BY_SRTH_ID=this.BASE_URL+"getdocumentinfobysrthid",this.GET_LAST_BILL_ID=this.BASE_URL+"getlastbillid",this.SAVE_IMAGE=this.BASE_URL+"saveimage",this.GET_IMAGE_BY_IMAGE_ID=this.BASE_URL+"getimagebyimageid",this.GET_IMAGE_BY_WORKER_TYPE=this.BASE_URL+"getimagebyworkertype",this.GET_IMAGE_BY_TYPE_WORKER_TYPE=this.BASE_URL+"getimagebytypeworkertype",this.SAVE_EXCHANGE_PART=this.BASE_URL+"savevehicleexchangeinfo",this.GET_EXCHANGE_PART=this.BASE_URL+"getvehicleexchangeinfo",this.GET_BILL_FOR_VEHICLE=this.BASE_URL+"getallbillsforvehicle",this.GET_BILL_SUMMARY=this.BASE_URL+"getbillsummary",this.GET_IMAGES_BY_SRTH_ID=this.BASE_URL+"getimagebysrthid",this.GET_LAST_COMPLAINTS_ID=this.BASE_URL+"getlastcomplaintid",this.GET_FUEL_PRICES="https://fuelprice-api-india.herokuapp.com/price/West-Bengal/KOLKATA",this.SHOP_BILL_REPORT=this.BASE_URL_REPORT+"shopbillreportweb",this.SHOP_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"shopbillreport",this.SHOP_BUY_REPORT=this.BASE_URL_REPORT+"shopbuyreportweb",this.SHOP_BUY_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"shopbuyreportapi",this.MECHANIC_BILL_REPORT=this.BASE_URL_REPORT+"mechanicbillreportapi",this.MECHANIC_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"mechanicbillreportweb",this.MECHANIC_BUY_REPORT=this.BASE_URL_REPORT+"mechanicbuyreportapi",this.MECHANIC_BUY_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"mechanicbuyreportweb",this.FULL_REPORT=this.BASE_URL_REPORT+"fullreportapi",this.FULL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"fullreportweb",this.DOCUMENT_BILL_REPORT=this.BASE_URL_REPORT+"documentbillreportapi",this.DOCUMENT_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"documentbillreportweb",this.DOCUMENT_DATE_REPORT=this.BASE_URL_REPORT+"documentdatereportapi",this.DOCUMENT_DATE_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"documentdatereportweb",this.VEHICLE_WORK_REPORT=this.BASE_URL_REPORT+"vehicleworkreportapi",this.VEHICLE_WORK_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"vehicleworkreportweb",this.VEHICLE_BILL_REPORT=this.BASE_URL_REPORT+"vehiclebillreportapi",this.VEHICLE_BILL_REPORT_DOWNLOAD=this.BASE_URL_REPORT_DOWNLOAD+"vehiclebillreportweb",this.K_ACCOUNT_INFO="accountinfo",this.SELECTED_WORK_PART="selectedworkpart",this.DETAILS="details",this.ADDED_VEHICLE_ID="addedvehicleid",this.SELECTED_REASON="selectedreason",this.DATE="date",console.log("Hello CodesProvider Provider")}}()}},[514]);