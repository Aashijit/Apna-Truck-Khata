webpackJsonp([52],{873:function(e,n,l){"use strict";function t(e){return a["ɵvid"](0,[(e()(),a["ɵeld"](0,0,null,null,32,"ion-content",[["padding",""],["style","background: rgba(0,0,0,0.6);"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,R.b,R.a)),a["ɵdid"](1,4374528,null,0,b.a,[T.a,E.a,I.a,a.ElementRef,a.Renderer,P.a,_.a,a.NgZone,[2,A.a],[2,M.a]],null,null),(e()(),a["ɵted"](-1,1,["\n\n  "])),(e()(),a["ɵeld"](3,0,null,1,8,"p",[["style","text-align: right !important;"]],null,null,null,null,null)),(e()(),a["ɵted"](-1,null,["\n    "])),(e()(),a["ɵeld"](5,0,null,null,5,"button",[["clear",""],["ion-button",""],["style","font-size: 2rem; color: red;"]],null,[[null,"click"]],function(e,n,l){var t=!0;if("click"===n){t=!1!==e.component.close()&&t}return t},F.b,F.a)),a["ɵdid"](6,1097728,null,0,S.a,[[8,""],T.a,a.ElementRef,a.Renderer],{clear:[0,"clear"]},null),(e()(),a["ɵted"](-1,0,["\n      "])),(e()(),a["ɵeld"](8,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a["ɵdid"](9,147456,null,0,k.a,[T.a,a.ElementRef,a.Renderer],{name:[0,"name"]},null),(e()(),a["ɵted"](-1,0,["\n    "])),(e()(),a["ɵted"](-1,null,["\n  "])),(e()(),a["ɵted"](-1,1,["\n\n"])),(e()(),a["ɵeld"](13,0,null,1,8,"p",[["style","text-align: center !important;margin-top: 50%;"]],null,null,null,null,null)),(e()(),a["ɵted"](-1,null,["\n  "])),(e()(),a["ɵeld"](15,0,null,null,5,"button",[["ion-button",""],["round",""],["style","width: 50%;height: 100px;font-size: 5rem;"]],null,[[null,"click"]],function(e,n,l){var t=!0;if("click"===n){t=!1!==e.component.camera()&&t}return t},F.b,F.a)),a["ɵdid"](16,1097728,null,0,S.a,[[8,""],T.a,a.ElementRef,a.Renderer],{round:[0,"round"]},null),(e()(),a["ɵted"](-1,0,["\n    "])),(e()(),a["ɵeld"](18,0,null,0,1,"ion-icon",[["name","camera"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a["ɵdid"](19,147456,null,0,k.a,[T.a,a.ElementRef,a.Renderer],{name:[0,"name"]},null),(e()(),a["ɵted"](-1,0,["\n  "])),(e()(),a["ɵted"](-1,null,["\n"])),(e()(),a["ɵted"](-1,1,["\n"])),(e()(),a["ɵeld"](23,0,null,1,8,"p",[["style","text-align: center !important;"]],null,null,null,null,null)),(e()(),a["ɵted"](-1,null,["\n  "])),(e()(),a["ɵeld"](25,0,null,null,5,"button",[["ion-button",""],["round",""],["style","width: 50%;height: 100px;font-size: 5rem;"]],null,[[null,"click"]],function(e,n,l){var t=!0;if("click"===n){t=!1!==e.component.gallery()&&t}return t},F.b,F.a)),a["ɵdid"](26,1097728,null,0,S.a,[[8,""],T.a,a.ElementRef,a.Renderer],{round:[0,"round"]},null),(e()(),a["ɵted"](-1,0,["\n    "])),(e()(),a["ɵeld"](28,0,null,0,1,"ion-icon",[["name","image"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a["ɵdid"](29,147456,null,0,k.a,[T.a,a.ElementRef,a.Renderer],{name:[0,"name"]},null),(e()(),a["ɵted"](-1,0,["\n  "])),(e()(),a["ɵted"](-1,null,["\n"])),(e()(),a["ɵted"](-1,1,["\n\n"])),(e()(),a["ɵted"](-1,null,["\n"]))],function(e,n){e(n,6,0,"");e(n,9,0,"close");e(n,16,0,"");e(n,19,0,"camera");e(n,26,0,"");e(n,29,0,"image")},function(e,n){e(n,0,0,a["ɵnov"](n,1).statusbarPadding,a["ɵnov"](n,1)._hasRefresher);e(n,8,0,a["ɵnov"](n,9)._hidden);e(n,18,0,a["ɵnov"](n,19)._hidden);e(n,28,0,a["ɵnov"](n,29)._hidden)})}Object.defineProperty(n,"__esModule",{value:!0});var a=l(0),i=(l(2),l(26),l(84)),o=l(183),u=l(206),d=function(){function e(e,n,l,t,a,i,o){this.navCtrl=e,this.navParams=n,this.view=l,this.cm=t,this.ldcontroller=a,this.rest=i,this.codes=o,this.data="",this.uploadImage="",this.data=this.navParams.get("request")}return e.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad UploadImagePage")},e.prototype.camera=function(){this.getImage("camera")},e.prototype.gallery=function(){this.getImage("gallery")},e.prototype.getImage=function(e){var n=this;if("camera"==e){this.cm.getPicture({quality:10,destinationType:this.cm.DestinationType.DATA_URL,encodingType:this.cm.EncodingType.JPEG,mediaType:this.cm.MediaType.PICTURE,sourceType:this.cm.PictureSourceType.CAMERA}).then(function(e){n.uploadImage="data:image/jpeg;base64,"+e;var l=n.ldcontroller.create({content:"Saving the image ... "});l.present(),n.data.image_content=n.uploadImage,n.rest.post(n.codes.SAVE_IMAGE,n.data).then(function(e){localStorage.setItem("selectedimage",JSON.stringify(e.data)),l.dismiss(),n.view.dismiss()})},function(e){})}else{this.cm.getPicture({quality:10,destinationType:this.cm.DestinationType.DATA_URL,encodingType:this.cm.EncodingType.JPEG,mediaType:this.cm.MediaType.PICTURE,sourceType:this.cm.PictureSourceType.PHOTOLIBRARY}).then(function(e){n.uploadImage="data:image/jpeg;base64,"+e;var l=n.ldcontroller.create({content:"Saving the image ... "});l.present(),n.data.image_content=n.uploadImage,n.rest.post(n.codes.SAVE_IMAGE,n.data).then(function(e){localStorage.setItem("selectedimage",JSON.stringify(e.data)),l.dismiss(),n.view.dismiss()})},function(e){})}},e.prototype.close=function(){this.view.dismiss()},e}(),r=function(){return function(){}}(),c=l(498),s=l(499),m=l(500),p=l(501),g=l(502),h=l(503),f=l(504),y=l(505),v=l(506),R=l(507),b=l(32),T=l(4),E=l(7),I=l(14),P=l(13),_=l(40),A=l(8),M=l(29),F=l(39),S=l(27),k=l(41),w=l(17),C=l(125),D=a["ɵcrt"]({encapsulation:2,styles:[],data:{}}),L=a["ɵccf"]("page-upload-image",d,function(e){return a["ɵvid"](0,[(e()(),a["ɵeld"](0,0,null,null,1,"page-upload-image",[],null,null,null,t,D)),a["ɵdid"](1,49152,null,0,d,[M.a,w.a,A.a,u.a,C.a,o.a,i.a],null,null)],null,null)},{},{},[]),O=l(16),U=l(20),x=l(184),J=l(55);l.d(n,"UploadImagePageModuleNgFactory",function(){return N});var N=a["ɵcmf"](r,[],function(e){return a["ɵmod"]([a["ɵmpd"](512,a.ComponentFactoryResolver,a["ɵCodegenComponentFactoryResolver"],[[8,[c.a,s.a,m.a,p.a,g.a,h.a,f.a,y.a,v.a,L]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["ɵmpd"](4608,O.l,O.k,[a.LOCALE_ID,[2,O.t]]),a["ɵmpd"](4608,U["ɵi"],U["ɵi"],[]),a["ɵmpd"](4608,U.FormBuilder,U.FormBuilder,[]),a["ɵmpd"](512,O.b,O.b,[]),a["ɵmpd"](512,U["ɵba"],U["ɵba"],[]),a["ɵmpd"](512,U.FormsModule,U.FormsModule,[]),a["ɵmpd"](512,U.ReactiveFormsModule,U.ReactiveFormsModule,[]),a["ɵmpd"](512,x.a,x.a,[]),a["ɵmpd"](512,x.b,x.b,[]),a["ɵmpd"](512,r,r,[]),a["ɵmpd"](256,J.a,d,[])])})}});