(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(e,t,r)=>{const n=`${e*t/r-e}ms`,o=2*Math.PI*t/r;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e,t,r)=>{const n=t/r,o=`${e*n-e}ms`,i=2*Math.PI*n;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/r-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${e*t/r-e}ms`}})}}},H03z:function(e,t,r){"use strict";r.r(t),r.d(t,"RouteSelectPageModule",(function(){return h}));var n=r("ofXK"),o=r("3Pt+"),i=r("TEn/"),s=r("tyNb"),c=r("fXoL"),u=r("5zr1"),a=r("tk/3");function b(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-card"),c.Kb(1,"img",7),c.Mb(2,"ion-card-header"),c.Mb(3,"ion-card-title"),c.jc(4),c.Lb(),c.Mb(5,"ion-card-subtitle"),c.jc(6),c.Lb(),c.Lb(),c.Mb(7,"ion-card-content"),c.jc(8),c.Mb(9,"div"),c.Mb(10,"ion-button",8),c.Ub("click",(function(){c.fc(e);const r=t.$implicit;return c.Wb().startRoute(r.id,r.name,r.length)})),c.jc(11,"Start this route"),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=t.$implicit;c.zb(1),c.cc("src",e.image,c.gc),c.zb(3),c.kc(e.name),c.zb(2),c.lc("",e.length," Miles"),c.zb(2),c.lc(" ",e.description," ")}}const l=[{path:"",component:(()=>{class e{constructor(e,t,r){this.runProviderService=e,this.http=t,this.alertController=r}ngOnInit(){this.getAvailableRoutes(),this.showAlert()}getAvailableRoutes(){this.runProviderService.getAvailableRoutes().subscribe(e=>this.availableRoutes=e)}startRoute(e,t,r){this.runProviderService.startRoute(e,1,t,r)}showAlert(){console.log("Showing alert"),this.alertController.create({header:"Before you get started...",subHeader:"How this app works",message:"This application uses local storage on your device to remember you and your progress on routes.        If you clear your local storage on your device, your run history and progress will be deleted.<br><br>       Upon your first visit to the app, select a route that you would like to complete.  Log the distance       and date of runs that you complete under the Run Log tab.  As you complete runs, visit the Route       tab to see your progress on the route and view landmarks as you pass them.<br><br>       Under Settings, you can see your current route selection and abandon it at any time.  Abandoning       your route will also delete your run history and all progress against the route.  You may restart       the route or choose another from the run selection page.",buttons:["Got it"]}).then(e=>{e.present()})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(u.a),c.Jb(a.a),c.Jb(i.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-route-select"]],decls:11,vars:3,consts:[[3,"translucent"],[1,"ion-text-center"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],[4,"ngFor","ngForOf"],[3,"src"],["routerLink","/tablinks",3,"click"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title",1),c.jc(3," Select Route "),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content",2),c.Mb(5,"ion-header",3),c.Mb(6,"ion-toolbar"),c.Mb(7,"ion-title",4),c.jc(8,"Select Route"),c.Lb(),c.Lb(),c.Lb(),c.Mb(9,"div",5),c.ic(10,b,12,4,"ion-card",6),c.Lb(),c.Lb()),2&e&&(c.bc("translucent",!0),c.zb(4),c.bc("fullscreen",!0),c.zb(6),c.bc("ngForOf",t.availableRoutes))},directives:[i.o,i.C,i.B,i.m,n.j,i.g,i.i,i.k,i.j,i.h,i.e,i.H,s.h],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(l)],s.i]}),e})(),h=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[n.b,o.d,i.D,d]]}),e})()},KwJk:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return c}));const n=(e,t)=>null!==t.closest(e),o=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,i=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,c=async(e,t,r)=>{if(null!=e&&"#"!==e[0]&&!s.test(e)){const n=document.querySelector("ion-router");if(n)return null!=t&&t.preventDefault(),n.push(e,r)}return!1}},LAFf:function(e,t,r){"use strict";r.r(t),r.d(t,"ProgressPageModule",(function(){return h}));var n=r("ofXK"),o=r("3Pt+"),i=r("TEn/"),s=r("tyNb"),c=r("fXoL"),u=r("5zr1");function a(e,t){if(1&e&&(c.Mb(0,"span"),c.Mb(1,"h3"),c.jc(2),c.Kb(3,"br"),c.jc(4,"Kick back and celebrate."),c.Lb(),c.Mb(5,"p"),c.Mb(6,"b"),c.jc(7,"Distance logged: "),c.Lb(),c.jc(8),c.Xb(9,"number"),c.Lb(),c.Mb(10,"p"),c.Mb(11,"b"),c.jc(12,"Percent complete: "),c.Lb(),c.jc(13," 100%"),c.Lb(),c.Lb()),2&e){const e=c.Wb();c.zb(2),c.lc("You finished ",e.routeProgress?e.routeProgress.routeName:"","!"),c.zb(6),c.kc(e.routeProgress?e.routeProgress.distanceLogged:c.Yb(9,2,"","1.0-2"))}}function b(e,t){if(1&e&&(c.Mb(0,"span"),c.Mb(1,"h3"),c.jc(2),c.Lb(),c.Mb(3,"p"),c.Mb(4,"b"),c.jc(5,"Distance logged:"),c.Lb(),c.jc(6),c.Xb(7,"number"),c.Lb(),c.Mb(8,"p"),c.Mb(9,"b"),c.jc(10,"Percent complete:"),c.Lb(),c.jc(11),c.Xb(12,"number"),c.Lb(),c.Lb()),2&e){const e=c.Wb();c.zb(2),c.kc(e.routeProgress?e.routeProgress.routeName:""),c.zb(4),c.lc(" ",e.routeProgress?c.Yb(7,3,e.routeProgress.distanceLogged,"1.0-2"):"",""),c.zb(5),c.lc(" ",e.routeProgress?c.Yb(12,6,e.routeProgress.percentComplete,".0"):"","%")}}const l=[{path:"",component:(()=>{class e{constructor(e){this.runProviderService=e}ngOnInit(){this.runProviderService.getRouteProgress().subscribe(e=>this.routeProgress=e),this.runProviderService.routeProgressChange.subscribe(e=>{this.routeProgress=e})}restartRoute(){this.runProviderService.clearRouteProgress()}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(u.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-progress"]],decls:10,vars:2,consts:[[1,"ion-text-center"],[4,"ngIf"],["routerLink","./landmark-list"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title",0),c.jc(3,"Route Progress"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content"),c.Mb(5,"div",0),c.ic(6,a,14,5,"span",1),c.ic(7,b,13,9,"span",1),c.Mb(8,"ion-button",2),c.jc(9,"See landmarks"),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(6),c.bc("ngIf",t.routeProgress.finished),c.zb(1),c.bc("ngIf",!t.routeProgress.finished))},directives:[i.o,i.C,i.B,i.m,n.k,i.e,i.H,s.h],pipes:[n.e],styles:[""]}),e})()},{path:"landmark-list",loadChildren:()=>r.e(4).then(r.bind(null,"k9fM")).then(e=>e.LandmarkListPageModule)}];let d=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(l)],s.i]}),e})(),h=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[n.b,o.d,i.D,d]]}),e})()},NqGI:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));const n=async(e,t,r,n,o)=>{if(e)return e.attachViewToDom(t,r,o,n);if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r;return n&&n.forEach(e=>i.classList.add(e)),o&&Object.assign(i,o),t.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},o=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},iAns:function(e,t,r){"use strict";r.r(t),r.d(t,"RunlogPageModule",(function(){return h}));var n=r("ofXK"),o=r("3Pt+"),i=r("TEn/"),s=r("tyNb"),c=r("fXoL"),u=r("5zr1");const a=["formDirective"];function b(e,t){if(1&e){const e=c.Nb();c.Mb(0,"ion-item-sliding"),c.jc(1),c.Xb(2,"date"),c.Mb(3,"ion-button",8),c.Ub("click",(function(){c.fc(e);const r=t.index;return c.Wb().deleteRun(r)})),c.jc(4,"Delete"),c.Lb(),c.Mb(5,"ion-item-options"),c.Mb(6,"ion-button",8),c.Ub("click",(function(){c.fc(e);const r=t.index;return c.Wb().deleteRun(r)})),c.jc(7,"Delete"),c.Lb(),c.Lb(),c.Lb()}if(2&e){const e=t.$implicit;c.zb(1),c.mc(" ",e.distance," miles on ",c.Yb(2,2,e.date,"mediumDate")," ")}}const l=[{path:"",component:(()=>{class e{constructor(e,t){this.fb=e,this.runProviderService=t,this.createForm()}ngOnInit(){this.checkFinish(),this.runProviderService.runHistoryChange.subscribe(e=>this.runHistory=e)}createForm(){this.runForm=this.fb.group({newRunDistanceCtrl:["",o.j.required],newRunDateCtrl:["",o.j.required]})}onSubmit(){console.log("Submitted:  "+this.runForm.value.newRunDateCtrl.toString()+this.runForm.value.newRunDistanceCtrl),this.addRun(this.runForm.value.newRunDateCtrl,this.runForm.value.newRunDistanceCtrl),this.runForm.reset(),this.formDirective.resetForm()}getRunHistory(){return this.runProviderService.runHistory}addRun(e,t){this.runProviderService.addRun(e,t),console.log("Run history in runlog page: "),console.log(this.runHistory)}checkFinish(){this.runProviderService.getRouteProgress().subscribe(e=>{this.finished=!!e&&e.finished})}deleteRun(e){console.log(e),this.runProviderService.deleteRun(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(o.a),c.Jb(u.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-runlog"]],viewQuery:function(e,t){var r;1&e&&c.nc(a,!0),2&e&&c.ec(r=c.Vb())&&(t.formDirective=r.first)},decls:24,vars:2,consts:[[1,"ion-text-center"],["id","newRun",3,"formGroup","ngSubmit"],["formDirective","ngForm"],["position","floating"],["type","text","inputmode","decimal","formControlName","newRunDistanceCtrl","placeholder","e.g. 2.25","required",""],["type","datetime","formControlName","newRunDateCtrl","required",""],["type","submit","expand","block"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title",0),c.jc(3,"Run Log"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content"),c.Mb(5,"div"),c.Mb(6,"form",1,2),c.Ub("ngSubmit",(function(){return t.onSubmit()})),c.Mb(8,"ion-list"),c.Mb(9,"ion-item"),c.Mb(10,"ion-label",3),c.jc(11,"Distance"),c.Lb(),c.Kb(12,"ion-input",4),c.Lb(),c.Mb(13,"ion-item"),c.Mb(14,"ion-label",3),c.jc(15,"Date"),c.Lb(),c.Kb(16,"ion-datetime",5),c.Lb(),c.Lb(),c.Mb(17,"ion-row"),c.Mb(18,"ion-col"),c.Mb(19,"ion-button",6),c.jc(20,"Submit"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(21,"div"),c.Mb(22,"ion-list"),c.ic(23,b,8,5,"ion-item-sliding",7),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(6),c.bc("formGroup",t.runForm),c.zb(17),c.bc("ngForOf",t.runHistory))},directives:[i.o,i.C,i.B,i.m,o.k,o.g,o.c,i.v,i.r,i.u,i.q,i.J,o.f,o.b,o.i,i.n,i.I,i.x,i.l,i.e,n.j,i.t,i.s],pipes:[n.d],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(l)],s.i]}),e})(),h=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[n.b,o.d,o.h,i.D,d]]}),e})()},xgmX:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return o}));const n={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:r})},notification(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())}},o=()=>{n.selection()},i=()=>{n.selectionStart()},s=()=>{n.selectionChanged()},c=()=>{n.selectionEnd()},u=e=>{n.impact(e)}},yPrK:function(e,t,r){"use strict";r.r(t),r.d(t,"SettingsPageModule",(function(){return l}));var n=r("ofXK"),o=r("3Pt+"),i=r("TEn/"),s=r("tyNb"),c=r("fXoL"),u=r("5zr1");const a=[{path:"",component:(()=>{class e{constructor(e){this.runProviderService=e}ngOnInit(){this.runProviderService.getRouteProgress().subscribe(e=>this.routeProgress=e),this.runProviderService.routeProgressChange.subscribe(e=>this.routeProgress=e)}abandonRoute(){this.runProviderService.clearRouteProgress()}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(u.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-settings"]],decls:29,vars:1,consts:[[1,"ion-text-center"],[1,"container"],["routerLink","/route-select",3,"click"],[2,"background","gray"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title",0),c.jc(3,"Settings"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content"),c.Mb(5,"div",1),c.Mb(6,"h4"),c.jc(7),c.Lb(),c.Mb(8,"ion-button",2),c.Ub("click",(function(){return t.abandonRoute()})),c.jc(9,"Abandon Route"),c.Lb(),c.Lb(),c.Kb(10,"hr",3),c.Mb(11,"div",1),c.Mb(12,"h4"),c.jc(13,"About Ramble"),c.Lb(),c.Mb(14,"h5"),c.jc(15,"Your Data:"),c.Lb(),c.Mb(16,"p"),c.jc(17,"This application uses local storage on your device to remember you, the runs you've logged, and your progress along routes any time you access the application on the same phone or computer. If you clear your local storage, your run history and progress will be deleted. "),c.Kb(18,"br"),c.Kb(19,"br"),c.jc(20," This data is used only to support the functionality of the app and is not shared with any third parties."),c.Lb(),c.Kb(21,"br"),c.Mb(22,"h5"),c.jc(23,"How to Use the App:"),c.Lb(),c.Mb(24,"p"),c.jc(25,'Upon your first visit to the app, select a route that you would like to complete. Log the distance and date of runs that you complete under the "Run Log" tab. As you complete runs, visit the "Route" tab to see your progress on the route and view landmarks as you pass them. '),c.Kb(26,"br"),c.Kb(27,"br"),c.jc(28,' Under "Settings", you may see your current route selection and abandon it at any time. Abandoning your route will also delete your run history and all progress against the route. You may restart the route or choose another from the run selection page.'),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(7),c.lc("Current route: ",t.routeProgress?t.routeProgress.routeName:"None",""))},directives:[i.o,i.C,i.B,i.m,i.e,i.H,s.h],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(a)],s.i]}),e})(),l=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[n.b,o.d,i.D,b]]}),e})()}}]);