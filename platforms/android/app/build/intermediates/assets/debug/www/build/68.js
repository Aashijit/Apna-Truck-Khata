webpackJsonp([68],{837:function(l,n,e){"use strict";function t(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,25,"ion-header",[],null,null,null,null,null)),u["ɵdid"](1,16384,null,0,v.a,[b.a,u.ElementRef,u.Renderer,[2,_.a]],null,null),(l()(),u["ɵted"](-1,null,["\n  "])),(l()(),u["ɵeld"](3,0,null,null,21,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,w.b,w.a)),u["ɵdid"](4,49152,null,0,y.a,[C.a,[2,_.a],[2,D.a],b.a,u.ElementRef,u.Renderer],null,null),(l()(),u["ɵted"](-1,3,["\n    "])),(l()(),u["ɵeld"](6,0,null,3,17,"ion-row",[["class","row"]],null,null,null,null,null)),u["ɵdid"](7,16384,null,0,E.a,[],null,null),(l()(),u["ɵted"](-1,null,["\n      "])),(l()(),u["ɵeld"](9,0,null,null,3,"ion-col",[["class","custom-back-button col"],["col-2",""]],null,null,null,null,null)),u["ɵdid"](10,16384,null,0,M.a,[],null,null),(l()(),u["ɵted"](-1,null,["\n        "])),(l()(),u["ɵted"](-1,null,["\n      "])),(l()(),u["ɵted"](-1,null,["\n    \n      "])),(l()(),u["ɵeld"](14,0,null,null,7,"ion-col",[["class","person-name text-left col"],["col-6",""]],null,null,null,null,null)),u["ɵdid"](15,16384,null,0,M.a,[],null,null),(l()(),u["ɵted"](-1,null,["\n        "])),(l()(),u["ɵeld"](17,0,null,null,3,"ion-title",[],null,null,null,k.b,k.a)),u["ɵdid"](18,49152,null,0,T.a,[b.a,u.ElementRef,u.Renderer,[2,F.a],[2,y.a]],null,null),(l()(),u["ɵted"](-1,0,["        \n          "])),(l()(),u["ɵted"](-1,0,["\n          DOCUMENT DATE REPORT\n        "])),(l()(),u["ɵted"](-1,null,["\n\n      "])),(l()(),u["ɵted"](-1,null,["\n      "])),(l()(),u["ɵted"](-1,null,["\n    "])),(l()(),u["ɵted"](-1,3,["\n  "])),(l()(),u["ɵted"](-1,null,["\n"])),(l()(),u["ɵted"](-1,null,[" \n\n"])),(l()(),u["ɵeld"](27,0,null,null,18,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,O.b,O.a)),u["ɵdid"](28,4374528,null,0,P.a,[b.a,L.a,N.a,u.ElementRef,u.Renderer,C.a,U.a,u.NgZone,[2,_.a],[2,D.a]],null,null),(l()(),u["ɵted"](-1,1,["\n \n"])),(l()(),u["ɵeld"](30,0,null,1,5,"p",[["style","text-align: center !important;"]],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["\n"])),(l()(),u["ɵeld"](32,0,null,null,2,"button",[["class","custom-button"],["ion-button",""],["round",""]],null,[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==l.component.generateReport()&&t}return t},A.b,A.a)),u["ɵdid"](33,1097728,null,0,B.a,[[8,""],b.a,u.ElementRef,u.Renderer],{round:[0,"round"]},null),(l()(),u["ɵted"](-1,0,["Report"])),(l()(),u["ɵted"](-1,null,["\n"])),(l()(),u["ɵted"](-1,1,["\n\n\n"])),(l()(),u["ɵeld"](37,0,null,1,1,"div",[["class","zoom"],["id","report"],["style","margin-top:5%"]],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["\n\n"])),(l()(),u["ɵted"](-1,1,["\n\n\n"])),(l()(),u["ɵeld"](40,0,null,1,4,"p",[["style","text-align: center;margin-top:20%"]],null,null,null,null,null)),(l()(),u["ɵted"](-1,null,["\n"])),(l()(),u["ɵeld"](42,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),u["ɵted"](-1,null,["Download Report"])),(l()(),u["ɵted"](-1,null,["\n"])),(l()(),u["ɵted"](-1,1,["\n"])),(l()(),u["ɵted"](-1,null,["\n"]))],function(l,n){l(n,33,0,"")},function(l,n){var e=n.component;l(n,3,0,u["ɵnov"](n,4)._hidden,u["ɵnov"](n,4)._sbPadding);l(n,27,0,u["ɵnov"](n,28).statusbarPadding,u["ɵnov"](n,28)._hasRefresher);l(n,42,0,e.downloadURL)})}Object.defineProperty(n,"__esModule",{value:!0});var u=e(0),o=(e(2),e(26),e(84)),d=e(183),a=function(){function l(l,n,e,t,u,o){this.navCtrl=l,this.navParams=n,this.rest=e,this.codes=t,this.modalCtrl=u,this.viewCont=o,this.shops=[],this.vehicles=[],this.html="",this.vehicle_id="",this.from_date="",this.to_date="",this.worker_id="",this.dt=new Date(2e3,1,1),this.displayCalendar=!1,this.dateRange={from:"",to:""},this.downloadURL="",this.apiendpoint="",this.downloadendpoint="",this.optionsMulti={pickMode:"range",from:this.dt,to:0,showMonthPicker:!0,showToggleButtons:!0,color:"primary"}}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad DocumentBillReportPage")},l.prototype.generateReport=function(){var l=this;this.displayCalendar=!1,0==this.worker_id&&(this.worker_id=null);this.rest.post(this.codes.DOCUMENT_DATE_REPORT,{date_from:this.dateRange.from,date_to:this.dateRange.to}).then(function(n){console.log(n),document.getElementById("report").innerHTML=n.data,l.html=n.data}),this.downloadURL=this.codes.DOCUMENT_DATE_REPORT_DOWNLOAD+"?worker_id="+this.worker_id+"&date_from="+this.dateRange.from+"&date_to="+this.dateRange.to},l.prototype.dismiss=function(){this.viewCont.dismiss()},l.prototype.openCalendar=function(){this.displayCalendar=!0},l}(),i=function(){return function(){}}(),r=e(500),s=e(501),c=e(502),p=e(503),m=e(504),h=e(505),f=e(506),R=e(507),g=e(508),v=e(85),b=e(4),_=e(8),w=e(188),y=e(37),C=e(13),D=e(29),E=e(186),M=e(185),k=e(510),T=e(86),F=e(42),O=e(509),P=e(32),L=e(7),N=e(14),U=e(40),A=e(39),B=e(27),x=e(17),I=e(122),V=u["ɵcrt"]({encapsulation:2,styles:[],data:{}}),j=u["ɵccf"]("page-document-date-report",a,function(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,1,"page-document-date-report",[],null,null,null,t,V)),u["ɵdid"](1,49152,null,0,a,[D.a,x.a,d.a,o.a,I.a,_.a],null,null)],null,null)},{},{},[]),z=e(15),H=e(19),J=e(184),W=e(55);e.d(n,"DocumentDateReportPageModuleNgFactory",function(){return Z});var Z=u["ɵcmf"](i,[],function(l){return u["ɵmod"]([u["ɵmpd"](512,u.ComponentFactoryResolver,u["ɵCodegenComponentFactoryResolver"],[[8,[r.a,s.a,c.a,p.a,m.a,h.a,f.a,R.a,g.a,j]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["ɵmpd"](4608,z.l,z.k,[u.LOCALE_ID,[2,z.t]]),u["ɵmpd"](4608,H["ɵi"],H["ɵi"],[]),u["ɵmpd"](4608,H.FormBuilder,H.FormBuilder,[]),u["ɵmpd"](512,z.b,z.b,[]),u["ɵmpd"](512,H["ɵba"],H["ɵba"],[]),u["ɵmpd"](512,H.FormsModule,H.FormsModule,[]),u["ɵmpd"](512,H.ReactiveFormsModule,H.ReactiveFormsModule,[]),u["ɵmpd"](512,J.a,J.a,[]),u["ɵmpd"](512,J.b,J.b,[]),u["ɵmpd"](512,i,i,[]),u["ɵmpd"](256,W.a,a,[])])})}});