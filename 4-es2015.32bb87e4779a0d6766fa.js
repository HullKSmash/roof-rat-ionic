(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{k9fM:function(n,t,e){"use strict";e.r(t),e.d(t,"LandmarkListPageModule",(function(){return m}));var r=e("ofXK"),i=e("3Pt+"),o=e("TEn/"),c=e("tyNb"),a=e("fXoL"),b=e("5zr1");const s=function(n){return["./landmark",n]};function d(n,t){if(1&n&&(a.Mb(0,"ion-card"),a.Mb(1,"div",3),a.Kb(2,"img",4),a.Mb(3,"p"),a.jc(4,"Image: "),a.Mb(5,"a",5),a.jc(6),a.Lb(),a.Lb(),a.Lb(),a.Mb(7,"div",6),a.Mb(8,"ion-card-title"),a.jc(9),a.Lb(),a.Mb(10,"ion-card-subtitle"),a.jc(11),a.Lb(),a.Mb(12,"ion-card-content"),a.jc(13),a.Lb(),a.Mb(14,"ion-button",7),a.jc(15,"See Details"),a.Lb(),a.Lb(),a.Lb()),2&n){const n=t.$implicit;a.zb(2),a.cc("src",n.image,a.gc),a.zb(4),a.kc(n.image_attribute),a.zb(3),a.kc(n.name),a.zb(2),a.kc(0==n.mile?"Start":n.mile+" Miles"),a.zb(2),a.kc(n.description.substring(0,50)+"..."),a.zb(1),a.bc("routerLink",a.dc(6,s,n.id))}}const l=[{path:"",component:(()=>{class n{constructor(n){this.runProviderService=n}ngOnInit(){this.runProviderService.getLandmarksList().subscribe(n=>this.landmarksList=n)}}return n.\u0275fac=function(t){return new(t||n)(a.Jb(b.a))},n.\u0275cmp=a.Db({type:n,selectors:[["app-landmark-list"]],decls:12,vars:1,consts:[["slot","start"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],[1,"card-image"],[3,"src"],["href","landmark.img_att_link"],[1,"card-elements-container"],[3,"routerLink"]],template:function(n,t){1&n&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",0),a.Kb(3,"ion-back-button"),a.Lb(),a.Mb(4,"ion-title",1),a.jc(5,"Landmarks"),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"ion-content"),a.Mb(7,"h4"),a.jc(8,"Here are the landmarks you've passed so far. Keep logging runs to see more!"),a.Lb(),a.Kb(9,"hr"),a.Mb(10,"div"),a.ic(11,d,16,8,"ion-card",2),a.Lb(),a.Lb()),2&n&&(a.zb(11),a.bc("ngForOf",t.landmarksList))},directives:[o.o,o.C,o.f,o.c,o.d,o.B,o.m,r.j,o.g,o.k,o.j,o.h,o.e,o.H,c.h],styles:[""]}),n})()},{path:"landmark/:id",loadChildren:()=>e.e(5).then(e.bind(null,"s6de")).then(n=>n.LandmarkPageModule)}];let u=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(t){return new(t||n)},imports:[[c.i.forChild(l)],c.i]}),n})(),m=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(t){return new(t||n)},imports:[[r.b,i.d,o.D,u]]}),n})()}}]);