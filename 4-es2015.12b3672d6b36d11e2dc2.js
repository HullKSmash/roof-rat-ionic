(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{k9fM:function(n,t,r){"use strict";r.r(t),r.d(t,"LandmarkListPageModule",(function(){return m}));var e=r("ofXK"),i=r("3Pt+"),o=r("TEn/"),c=r("tyNb"),s=r("fXoL"),b=r("5zr1");const a=function(n){return["./landmark",n]};function d(n,t){if(1&n&&(s.Mb(0,"ion-card"),s.Kb(1,"img",2),s.Mb(2,"ion-card-title"),s.jc(3),s.Lb(),s.Mb(4,"ion-card-subtitle"),s.jc(5),s.Lb(),s.Mb(6,"ion-card-content"),s.jc(7),s.Lb(),s.Mb(8,"ion-button",3),s.jc(9,"See Details"),s.Lb(),s.Lb()),2&n){const n=t.$implicit;s.zb(1),s.cc("src",n.image,s.gc),s.zb(2),s.kc(n.name),s.zb(2),s.kc(0==n.mile?"Start":n.mile+" Miles"),s.zb(2),s.kc(n.description.substring(0,50)+"..."),s.zb(1),s.bc("routerLink",s.dc(5,a,n.id))}}const u=[{path:"",component:(()=>{class n{constructor(n){this.runProviderService=n}ngOnInit(){this.runProviderService.getLandmarksList().subscribe(n=>this.landmarksList=n)}}return n.\u0275fac=function(t){return new(t||n)(s.Jb(b.a))},n.\u0275cmp=s.Db({type:n,selectors:[["app-landmark-list"]],decls:12,vars:1,consts:[["slot","start"],[4,"ngFor","ngForOf"],[3,"src"],[3,"routerLink"]],template:function(n,t){1&n&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-buttons",0),s.Kb(3,"ion-back-button"),s.Lb(),s.Mb(4,"ion-title"),s.jc(5,"Landmarks"),s.Lb(),s.Lb(),s.Lb(),s.Mb(6,"ion-content"),s.Mb(7,"h4"),s.jc(8,"Here are the landmarks you've passed so far. Keep logging runs to see more!"),s.Lb(),s.Kb(9,"hr"),s.Mb(10,"div"),s.ic(11,d,10,7,"ion-card",1),s.Lb(),s.Lb()),2&n&&(s.zb(11),s.bc("ngForOf",t.landmarksList))},directives:[o.o,o.C,o.f,o.c,o.d,o.B,o.m,e.j,o.g,o.k,o.j,o.h,o.e,o.H,c.h],styles:[""]}),n})()},{path:"landmark/:id",loadChildren:()=>r.e(5).then(r.bind(null,"s6de")).then(n=>n.LandmarkPageModule)}];let l=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[c.i.forChild(u)],c.i]}),n})(),m=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[e.b,i.d,o.D,l]]}),n})()}}]);