(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=`${t*e/n-t}ms`,r=2*Math.PI*e/n;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=`${t*i-t}ms`,o=2*Math.PI*i;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})}}},H03z:function(t,e,n){"use strict";n.r(e),n.d(e,"RouteSelectPageModule",(function(){return f}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),c=n("fXoL"),u=n("5zr1"),a=n("tk/3");function b(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-card"),c.Kb(1,"img",6),c.Mb(2,"ion-card-header"),c.Mb(3,"ion-card-title"),c.jc(4),c.Lb(),c.Mb(5,"ion-card-subtitle"),c.jc(6),c.Lb(),c.Lb(),c.Mb(7,"ion-card-content"),c.jc(8," Short description goes here; make button swap out this page for progress "),c.Mb(9,"div"),c.Mb(10,"ion-button",7),c.Ub("click",(function(){c.fc(t);const n=e.$implicit;return c.Wb().startRoute(n.id)})),c.jc(11,"Start this route"),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=e.$implicit;c.zb(1),c.cc("src",t.image,c.gc),c.zb(3),c.kc(t.name),c.zb(2),c.lc("",t.length," Miles")}}const l=[{path:"",component:(()=>{class t{constructor(t,e){this.runProviderService=t,this.http=e}ngOnInit(){this.getAvailableRoutes()}getAvailableRoutes(){console.log("Getting available routes"),this.runProviderService.getAvailableRoutes().subscribe(t=>this.availableRoutes=t),console.log(this.availableRoutes)}startRoute(t){console.log("starting route"),this.runProviderService.startRoute(t,1).subscribe(t=>this.routeProgress=t)}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(u.a),c.Jb(a.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-route-select"]],decls:11,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],[4,"ngFor","ngForOf"],[3,"src"],["routerLink","/tablinks",3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.jc(3," Select Route "),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content",1),c.Mb(5,"ion-header",2),c.Mb(6,"ion-toolbar"),c.Mb(7,"ion-title",3),c.jc(8,"Select Route"),c.Lb(),c.Lb(),c.Lb(),c.Mb(9,"div",4),c.ic(10,b,12,3,"ion-card",5),c.Lb(),c.Lb()),2&t&&(c.bc("translucent",!0),c.zb(4),c.bc("fullscreen",!0),c.zb(6),c.bc("ngForOf",e.availableRoutes))},directives:[o.n,o.B,o.A,o.l,i.j,o.f,o.h,o.j,o.i,o.g,o.d,o.F,s.h],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(l)],s.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.b,r.d,o.C,d]]}),t})()},KwJk:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c}));const i=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n)}return!1}},LAFf:function(t,e,n){"use strict";n.r(e),n.d(e,"ProgressPageModule",(function(){return f}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),c=n("fXoL"),u=n("5zr1");function a(t,e){if(1&t&&(c.Mb(0,"span"),c.Mb(1,"h3"),c.jc(2,"You finished PUT ROUTE NAME HERE"),c.Kb(3,"br"),c.jc(4,"Kick back and celebrate."),c.Lb(),c.Mb(5,"p"),c.Mb(6,"b"),c.jc(7,"Distance logged:"),c.Lb(),c.jc(8),c.Xb(9,"number"),c.Lb(),c.Mb(10,"p"),c.Mb(11,"b"),c.jc(12,"Percent complete:"),c.Lb(),c.jc(13," 100%"),c.Lb(),c.Lb()),2&t){const t=c.Wb();c.zb(8),c.kc(c.Yb(9,1,t.distanceLogged,"1.0-2"))}}function b(t,e){if(1&t&&(c.Mb(0,"span"),c.Mb(1,"p"),c.Mb(2,"b"),c.jc(3,"Distance logged:"),c.Lb(),c.jc(4),c.Xb(5,"number"),c.Lb(),c.Mb(6,"p"),c.Mb(7,"b"),c.jc(8,"Percent complete:"),c.Lb(),c.jc(9),c.Xb(10,"number"),c.Lb(),c.Lb()),2&t){const t=c.Wb();c.zb(4),c.lc(" ",c.Yb(5,2,t.distanceLogged,"1.0-2"),""),c.zb(5),c.lc(" ",c.Yb(10,5,t.percentComplete,".0"),"%")}}const l=[{path:"",component:(()=>{class t{constructor(t){this.runProviderService=t}ngOnInit(){this.runProviderService.routeProgressChange.subscribe(t=>{this.distanceLogged=t.distanceLogged,this.finished=t.finished,this.percentComplete=t.percentComplete,this.routeLength=t.routeLength}),this.getRouteProgress()}getRouteProgress(){console.log("Getting route progress"),this.runProviderService.getRouteProgress().subscribe(t=>{this.distanceLogged=t.distanceLogged,this.finished=t.finished,this.percentComplete=t.percentComplete,this.routeLength=t.routeLength})}restartRoute(){this.runProviderService.clearRouteProgress()}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(u.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-progress"]],decls:13,vars:2,consts:[[4,"ngIf"],["routerLink","./landmark-list"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.jc(3,"Route Progress"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content"),c.Mb(5,"div"),c.ic(6,a,14,4,"span",0),c.ic(7,b,11,8,"span",0),c.Lb(),c.Mb(8,"div"),c.Mb(9,"p"),c.jc(10,"Either landmark list goes here, or link to it from here"),c.Lb(),c.Lb(),c.Mb(11,"ion-button",1),c.jc(12,"See landmarks"),c.Lb(),c.Lb()),2&t&&(c.zb(6),c.bc("ngIf",e.finished),c.zb(1),c.bc("ngIf",!e.finished))},directives:[o.n,o.B,o.A,o.l,i.k,o.d,o.F,s.h],pipes:[i.e],styles:[""]}),t})()},{path:"landmark-list",loadChildren:()=>n.e(4).then(n.bind(null,"k9fM")).then(t=>t.LandmarkListPageModule)}];let d=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(l)],s.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.b,r.d,o.C,d]]}),t})()},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},iAns:function(t,e,n){"use strict";n.r(e),n.d(e,"RunlogPageModule",(function(){return f}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),c=n("fXoL"),u=n("5zr1");const a=["formDirective"];function b(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-item-sliding"),c.jc(1),c.Xb(2,"date"),c.Mb(3,"ion-button",7),c.Ub("click",(function(){c.fc(t);const n=e.index;return c.Wb().deleteRun(n)})),c.jc(4,"Delete"),c.Lb(),c.Mb(5,"ion-item-options"),c.Mb(6,"ion-button",7),c.Ub("click",(function(){c.fc(t);const n=e.index;return c.Wb().deleteRun(n)})),c.jc(7,"Delete"),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=e.$implicit;c.zb(1),c.mc(" ",t.distance," miles on ",c.Yb(2,2,t.date,"mediumDate")," ")}}const l=[{path:"",component:(()=>{class t{constructor(t,e){this.fb=t,this.runProviderService=e,this.createForm()}ngOnInit(){this.checkFinish(),this.getRunHistory()}createForm(){this.runForm=this.fb.group({newRunDistanceCtrl:["",r.j.required],newRunDateCtrl:["",r.j.required]})}onSubmit(){console.log("Submitted:  "+this.runForm.value.newRunDateCtrl.toString()+this.runForm.value.newRunDistanceCtrl),this.addRun(this.runForm.value.newRunDateCtrl,this.runForm.value.newRunDistanceCtrl),this.runForm.reset(),this.formDirective.resetForm()}getRunHistory(){return this.runProviderService.getRunHistory().subscribe(t=>this.runHistory=t),console.log(this.runHistory),this.runHistory}addRun(t,e){this.runProviderService.addRun(t,e)}checkFinish(){this.runProviderService.getRouteProgress().subscribe(t=>{this.finished=!!t&&t.finished})}deleteRun(t){console.log(t),this.runProviderService.deleteRun(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(r.a),c.Jb(u.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-runlog"]],viewQuery:function(t,e){var n;1&t&&c.nc(a,!0),2&t&&c.ec(n=c.Vb())&&(e.formDirective=n.first)},decls:24,vars:2,consts:[["id","newRun",3,"formGroup","ngSubmit"],["formDirective","ngForm"],["position","floating"],["type","text","formControlName","newRunDistanceCtrl","placeholder","e.g. 2.25","required",""],["type","datetime","formControlName","newRunDateCtrl","required",""],["type","submit","expand","block"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.jc(3,"Run Log"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content"),c.Mb(5,"div"),c.Mb(6,"form",0,1),c.Ub("ngSubmit",(function(){return e.onSubmit()})),c.Mb(8,"ion-list"),c.Mb(9,"ion-item"),c.Mb(10,"ion-label",2),c.jc(11,"Distance"),c.Lb(),c.Kb(12,"ion-input",3),c.Lb(),c.Mb(13,"ion-item"),c.Mb(14,"ion-label",2),c.jc(15,"Date"),c.Lb(),c.Kb(16,"ion-datetime",4),c.Lb(),c.Lb(),c.Mb(17,"ion-row"),c.Mb(18,"ion-col"),c.Mb(19,"ion-button",5),c.jc(20,"Submit"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(21,"div"),c.Mb(22,"ion-list"),c.ic(23,b,8,5,"ion-item-sliding",6),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(6),c.bc("formGroup",e.runForm),c.zb(17),c.bc("ngForOf",e.runHistory))},directives:[o.n,o.B,o.A,o.l,r.k,r.g,r.c,o.u,o.q,o.t,o.p,o.H,r.f,r.b,r.i,o.m,o.G,o.w,o.k,o.d,i.j,o.s,o.r],pipes:[i.d],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(l)],s.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.b,r.d,r.h,o.C,d]]}),t})()},xgmX:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return r}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},u=t=>{i.impact(t)}},yPrK:function(t,e,n){"use strict";n.r(e),n.d(e,"SettingsPageModule",(function(){return l}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),c=n("fXoL"),u=n("5zr1");const a=[{path:"",component:(()=>{class t{constructor(t){this.runProviderService=t}ngOnInit(){this.runProviderService.getRouteProgress().subscribe(t=>this.routeProgress=t)}abandonRoute(){this.runProviderService.clearRouteProgress()}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(u.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-settings"]],decls:10,vars:1,consts:[["id","container"],["routerLink","/route-select",3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.jc(3,"Settings"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content"),c.Mb(5,"div",0),c.Mb(6,"p"),c.jc(7),c.Lb(),c.Mb(8,"ion-button",1),c.Ub("click",(function(){return e.abandonRoute()})),c.jc(9,"Abandon Route"),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(7),c.lc("Current route ID: ",e.routeProgress.routeId,""))},directives:[o.n,o.B,o.A,o.l,o.d,o.F,s.h],styles:[""]}),t})()}];let b=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(a)],s.i]}),t})(),l=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.b,r.d,o.C,b]]}),t})()}}]);