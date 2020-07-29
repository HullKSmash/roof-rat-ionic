function asyncGeneratorStep(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(s){return void n(s)}u.done?t(a):Promise.resolve(a).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){asyncGeneratorStep(i,r,o,c,u,"next",e)}function u(e){asyncGeneratorStep(i,r,o,c,u,"throw",e)}c(void 0)}))}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,t,n){var r="".concat(e*t/n-e,"ms"),o=2*Math.PI*t/n;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,t,n){var r=t/n,o="".concat(e*r-e,"ms"),i=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,t){return{r:6,style:{left:"".concat(9-9*t,"px"),"animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,t,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,t,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}}}}}},H03z:function(e,t,n){"use strict";n.r(t),n.d(t,"RouteSelectPageModule",(function(){return g}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),c=n("tyNb"),u=n("fXoL"),a=n("5zr1"),s=n("tk/3");function l(e,t){if(1&e){var n=u.Nb();u.Mb(0,"ion-card"),u.Kb(1,"img",6),u.Mb(2,"ion-card-header"),u.Mb(3,"ion-card-title"),u.jc(4),u.Lb(),u.Mb(5,"ion-card-subtitle"),u.jc(6),u.Lb(),u.Lb(),u.Mb(7,"ion-card-content"),u.jc(8),u.Mb(9,"div"),u.Mb(10,"ion-button",7),u.Ub("click",(function(){u.fc(n);var e=t.$implicit;return u.Wb().startRoute(e.id,e.name,e.length)})),u.jc(11,"Start this route"),u.Lb(),u.Lb(),u.Lb(),u.Lb()}if(2&e){var r=t.$implicit;u.zb(1),u.cc("src",r.image,u.gc),u.zb(3),u.kc(r.name),u.zb(2),u.lc("",r.length," Miles"),u.zb(2),u.lc(" ",r.description," ")}}var b,f,d,h=[{path:"",component:(b=function(){function e(t,n,r){_classCallCheck(this,e),this.runProviderService=t,this.http=n,this.alertController=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.getAvailableRoutes(),this.showAlert()}},{key:"getAvailableRoutes",value:function(){var e=this;this.runProviderService.getAvailableRoutes().subscribe((function(t){return e.availableRoutes=t}))}},{key:"startRoute",value:function(e,t,n){this.runProviderService.startRoute(e,1,t,n)}},{key:"showAlert",value:function(){console.log("Showing alert"),this.alertController.create({header:"Before you get started...",subHeader:"How this app works",message:"This application uses local storage on your device to remember you and your progress on routes.        If you clear your local storage on your device, your run history and progress will be deleted.<br><br>       Upon your first visit to the app, select a route that you would like to complete.  Log the distance       and date of runs that you complete under the Run Log tab.  As you complete runs, visit the Route       tab to see your progress on the route and view landmarks as you pass them.<br><br>       Under Settings, you can see your current route selection and abandon it at any time.  Abandoning       your route will also delete your run history and all progress against the route.  You may restart       the route or choose another from the run selection page.",buttons:["Got it"]}).then((function(e){e.present()}))}}]),e}(),b.\u0275fac=function(e){return new(e||b)(u.Jb(a.a),u.Jb(s.a),u.Jb(i.a))},b.\u0275cmp=u.Db({type:b,selectors:[["app-route-select"]],decls:11,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],[4,"ngFor","ngForOf"],[3,"src"],["routerLink","/tablinks",3,"click"]],template:function(e,t){1&e&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-title"),u.jc(3," Select Route "),u.Lb(),u.Lb(),u.Lb(),u.Mb(4,"ion-content",1),u.Mb(5,"ion-header",2),u.Mb(6,"ion-toolbar"),u.Mb(7,"ion-title",3),u.jc(8,"Select Route"),u.Lb(),u.Lb(),u.Lb(),u.Mb(9,"div",4),u.ic(10,l,12,4,"ion-card",5),u.Lb(),u.Lb()),2&e&&(u.bc("translucent",!0),u.zb(4),u.bc("fullscreen",!0),u.zb(6),u.bc("ngForOf",t.availableRoutes))},directives:[i.o,i.C,i.B,i.m,r.j,i.g,i.i,i.k,i.j,i.h,i.e,i.H,c.h],styles:[""]}),b)}],p=((d=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:d}),d.\u0275inj=u.Gb({factory:function(e){return new(e||d)},imports:[[c.i.forChild(h)],c.i]}),d),g=((f=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:f}),f.\u0275inj=u.Gb({factory:function(e){return new(e||f)},imports:[[r.b,o.d,i.D,p]]}),f)},KwJk:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return u}));var r=function(e,t){return null!==t.closest(e)},o=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},i=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,u=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||c.test(t)){e.next=4;break}if(!(o=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),o.push(t,r)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},LAFf:function(e,t,n){"use strict";n.r(t),n.d(t,"ProgressPageModule",(function(){return g}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),c=n("tyNb"),u=n("fXoL"),a=n("5zr1");function s(e,t){if(1&e&&(u.Mb(0,"span"),u.Mb(1,"h3"),u.jc(2),u.Kb(3,"br"),u.jc(4,"Kick back and celebrate."),u.Lb(),u.Mb(5,"p"),u.Mb(6,"b"),u.jc(7,"Distance logged: "),u.Lb(),u.jc(8),u.Xb(9,"number"),u.Lb(),u.Mb(10,"p"),u.Mb(11,"b"),u.jc(12,"Percent complete: "),u.Lb(),u.jc(13," 100%"),u.Lb(),u.Lb()),2&e){var n=u.Wb();u.zb(2),u.lc("You finished ",n.routeProgress?n.routeProgress.routeName:"","!"),u.zb(6),u.kc(n.routeProgress?n.routeProgress.distanceLogged:u.Yb(9,2,"","1.0-2"))}}function l(e,t){if(1&e&&(u.Mb(0,"span"),u.Mb(1,"h3"),u.jc(2),u.Lb(),u.Mb(3,"p"),u.Mb(4,"b"),u.jc(5,"Distance logged:"),u.Lb(),u.jc(6),u.Xb(7,"number"),u.Lb(),u.Mb(8,"p"),u.Mb(9,"b"),u.jc(10,"Percent complete:"),u.Lb(),u.jc(11),u.Xb(12,"number"),u.Lb(),u.Lb()),2&e){var n=u.Wb();u.zb(2),u.kc(n.routeProgress?n.routeProgress.routeName:""),u.zb(4),u.lc(" ",n.routeProgress?u.Yb(7,3,n.routeProgress.distanceLogged,"1.0-2"):"",""),u.zb(5),u.lc(" ",n.routeProgress?u.Yb(12,6,n.routeProgress.percentComplete,".0"):"","%")}}var b,f,d,h=[{path:"",component:(b=function(){function e(t){_classCallCheck(this,e),this.runProviderService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.runProviderService.getRouteProgress().subscribe((function(t){return e.routeProgress=t})),this.runProviderService.routeProgressChange.subscribe((function(t){e.routeProgress=t}))}},{key:"restartRoute",value:function(){this.runProviderService.clearRouteProgress()}}]),e}(),b.\u0275fac=function(e){return new(e||b)(u.Jb(a.a))},b.\u0275cmp=u.Db({type:b,selectors:[["app-progress"]],decls:10,vars:2,consts:[[1,"ion-text-center"],[4,"ngIf"],["routerLink","./landmark-list"]],template:function(e,t){1&e&&(u.Mb(0,"ion-header"),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-title"),u.jc(3,"Route Progress"),u.Lb(),u.Lb(),u.Lb(),u.Mb(4,"ion-content"),u.Mb(5,"div",0),u.ic(6,s,14,5,"span",1),u.ic(7,l,13,9,"span",1),u.Mb(8,"ion-button",2),u.jc(9,"See landmarks"),u.Lb(),u.Lb(),u.Lb()),2&e&&(u.zb(6),u.bc("ngIf",t.routeProgress.finished),u.zb(1),u.bc("ngIf",!t.routeProgress.finished))},directives:[i.o,i.C,i.B,i.m,r.k,i.e,i.H,c.h],pipes:[r.e],styles:[""]}),b)},{path:"landmark-list",loadChildren:function(){return n.e(4).then(n.bind(null,"k9fM")).then((function(e){return e.LandmarkListPageModule}))}}],p=((d=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:d}),d.\u0275inj=u.Gb({factory:function(e){return new(e||d)},imports:[[c.i.forChild(h)],c.i]}),d),g=((f=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:f}),f.\u0275inj=u.Gb({factory:function(e){return new(e||f)},imports:[[r.b,o.d,i.D,p]]}),f)},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r,o,i){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,r,i,o));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,o&&o.forEach((function(e){return c.classList.add(e)})),i&&Object.assign(c,i),n.appendChild(c),e.t0=c.componentOnReady,!e.t0){e.next=12;break}return e.next=12,c.componentOnReady();case 12:return e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}(),o=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},iAns:function(e,t,n){"use strict";n.r(t),n.d(t,"RunlogPageModule",(function(){return g}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),c=n("tyNb"),u=n("fXoL"),a=n("5zr1"),s=["formDirective"];function l(e,t){if(1&e){var n=u.Nb();u.Mb(0,"ion-item-sliding"),u.jc(1),u.Xb(2,"date"),u.Mb(3,"ion-button",7),u.Ub("click",(function(){u.fc(n);var e=t.index;return u.Wb().deleteRun(e)})),u.jc(4,"Delete"),u.Lb(),u.Mb(5,"ion-item-options"),u.Mb(6,"ion-button",7),u.Ub("click",(function(){u.fc(n);var e=t.index;return u.Wb().deleteRun(e)})),u.jc(7,"Delete"),u.Lb(),u.Lb(),u.Lb()}if(2&e){var r=t.$implicit;u.zb(1),u.mc(" ",r.distance," miles on ",u.Yb(2,2,r.date,"mediumDate")," ")}}var b,f,d,h=[{path:"",component:(b=function(){function e(t,n){_classCallCheck(this,e),this.fb=t,this.runProviderService=n,this.createForm()}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.checkFinish(),this.runProviderService.runHistoryChange.subscribe((function(t){return e.runHistory=t}))}},{key:"createForm",value:function(){this.runForm=this.fb.group({newRunDistanceCtrl:["",o.j.required],newRunDateCtrl:["",o.j.required]})}},{key:"onSubmit",value:function(){console.log("Submitted:  "+this.runForm.value.newRunDateCtrl.toString()+this.runForm.value.newRunDistanceCtrl),this.addRun(this.runForm.value.newRunDateCtrl,this.runForm.value.newRunDistanceCtrl),this.runForm.reset(),this.formDirective.resetForm()}},{key:"getRunHistory",value:function(){return this.runProviderService.runHistory}},{key:"addRun",value:function(e,t){this.runProviderService.addRun(e,t),console.log("Run history in runlog page: "),console.log(this.runHistory)}},{key:"checkFinish",value:function(){var e=this;this.runProviderService.getRouteProgress().subscribe((function(t){e.finished=!!t&&t.finished}))}},{key:"deleteRun",value:function(e){console.log(e),this.runProviderService.deleteRun(e)}}]),e}(),b.\u0275fac=function(e){return new(e||b)(u.Jb(o.a),u.Jb(a.a))},b.\u0275cmp=u.Db({type:b,selectors:[["app-runlog"]],viewQuery:function(e,t){var n;1&e&&u.nc(s,!0),2&e&&u.ec(n=u.Vb())&&(t.formDirective=n.first)},decls:24,vars:2,consts:[["id","newRun",3,"formGroup","ngSubmit"],["formDirective","ngForm"],["position","floating"],["type","text","inputmode","decimal","formControlName","newRunDistanceCtrl","placeholder","e.g. 2.25","required",""],["type","datetime","formControlName","newRunDateCtrl","required",""],["type","submit","expand","block"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,t){1&e&&(u.Mb(0,"ion-header"),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-title"),u.jc(3,"Run Log"),u.Lb(),u.Lb(),u.Lb(),u.Mb(4,"ion-content"),u.Mb(5,"div"),u.Mb(6,"form",0,1),u.Ub("ngSubmit",(function(){return t.onSubmit()})),u.Mb(8,"ion-list"),u.Mb(9,"ion-item"),u.Mb(10,"ion-label",2),u.jc(11,"Distance"),u.Lb(),u.Kb(12,"ion-input",3),u.Lb(),u.Mb(13,"ion-item"),u.Mb(14,"ion-label",2),u.jc(15,"Date"),u.Lb(),u.Kb(16,"ion-datetime",4),u.Lb(),u.Lb(),u.Mb(17,"ion-row"),u.Mb(18,"ion-col"),u.Mb(19,"ion-button",5),u.jc(20,"Submit"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(21,"div"),u.Mb(22,"ion-list"),u.ic(23,l,8,5,"ion-item-sliding",6),u.Lb(),u.Lb(),u.Lb()),2&e&&(u.zb(6),u.bc("formGroup",t.runForm),u.zb(17),u.bc("ngForOf",t.runHistory))},directives:[i.o,i.C,i.B,i.m,o.k,o.g,o.c,i.v,i.r,i.u,i.q,i.J,o.f,o.b,o.i,i.n,i.I,i.x,i.l,i.e,r.j,i.t,i.s],pipes:[r.d],styles:[""]}),b)}],p=((d=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:d}),d.\u0275inj=u.Gb({factory:function(e){return new(e||d)},imports:[[c.i.forChild(h)],c.i]}),d),g=((f=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:f}),f.\u0275inj=u.Gb({factory:function(e){return new(e||f)},imports:[[r.b,o.d,o.h,i.D,p]]}),f)},xgmX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return o}));var r={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})}},notification:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())}},o=function(){r.selection()},i=function(){r.selectionStart()},c=function(){r.selectionChanged()},u=function(){r.selectionEnd()},a=function(e){r.impact(e)}},yPrK:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsPageModule",(function(){return h}));var r,o,i,c=n("ofXK"),u=n("3Pt+"),a=n("TEn/"),s=n("tyNb"),l=n("fXoL"),b=n("5zr1"),f=[{path:"",component:(r=function(){function e(t){_classCallCheck(this,e),this.runProviderService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.runProviderService.getRouteProgress().subscribe((function(t){return e.routeProgress=t})),this.runProviderService.routeProgressChange.subscribe((function(t){return e.routeProgress=t}))}},{key:"abandonRoute",value:function(){this.runProviderService.clearRouteProgress()}}]),e}(),r.\u0275fac=function(e){return new(e||r)(l.Jb(b.a))},r.\u0275cmp=l.Db({type:r,selectors:[["app-settings"]],decls:29,vars:1,consts:[[1,"container"],["routerLink","/route-select",3,"click"],[2,"background","gray"]],template:function(e,t){1&e&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-title"),l.jc(3,"Settings"),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content"),l.Mb(5,"div",0),l.Mb(6,"h4"),l.jc(7),l.Lb(),l.Mb(8,"ion-button",1),l.Ub("click",(function(){return t.abandonRoute()})),l.jc(9,"Abandon Route"),l.Lb(),l.Lb(),l.Kb(10,"hr",2),l.Mb(11,"div",0),l.Mb(12,"h4"),l.jc(13,"About Ramble"),l.Lb(),l.Mb(14,"h5"),l.jc(15,"Your Data:"),l.Lb(),l.Mb(16,"p"),l.jc(17,"This application uses local storage on your device to remember you, the runs you've logged, and your progress along routes any time you access the application on the same phone or computer. If you clear your local storage, your run history and progress will be deleted. "),l.Kb(18,"br"),l.Kb(19,"br"),l.jc(20," This data is used only to support the functionality of the app and is not shared with any third parties."),l.Lb(),l.Kb(21,"br"),l.Mb(22,"h5"),l.jc(23,"How to Use the App:"),l.Lb(),l.Mb(24,"p"),l.jc(25,'Upon your first visit to the app, select a route that you would like to complete. Log the distance and date of runs that you complete under the "Run Log" tab. As you complete runs, visit the "Route" tab to see your progress on the route and view landmarks as you pass them. '),l.Kb(26,"br"),l.Kb(27,"br"),l.jc(28,' Under "Settings", you may see your current route selection and abandon it at any time. Abandoning your route will also delete your run history and all progress against the route. You may restart the route or choose another from the run selection page.'),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(7),l.lc("Current route: ",t.routeProgress?t.routeProgress.routeName:"None",""))},directives:[a.o,a.C,a.B,a.m,a.e,a.H,s.h],styles:[""]}),r)}],d=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({factory:function(e){return new(e||i)},imports:[[s.i.forChild(f)],s.i]}),i),h=((o=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:o}),o.\u0275inj=l.Gb({factory:function(e){return new(e||o)},imports:[[c.b,u.d,a.D,d]]}),o)}}]);