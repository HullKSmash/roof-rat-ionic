(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{s6de:function(n,t,r){"use strict";r.r(t),r.d(t,"LandmarkPageModule",(function(){return l}));var e=r("ofXK"),o=r("3Pt+"),a=r("TEn/"),i=r("tyNb"),s=r("fXoL"),c=r("5zr1");const b=[{path:"",component:(()=>{class n{constructor(n,t){this.route=n,this.RunProviderService=t}ngOnInit(){this.route.params.subscribe(n=>{console.log(n.id),this.RunProviderService.getLandmark(n.id).subscribe(n=>{this.landmark=n}),console.log(this.landmark)})}}return n.\u0275fac=function(t){return new(t||n)(s.Jb(i.a),s.Jb(c.a))},n.\u0275cmp=s.Db({type:n,selectors:[["app-landmark"]],decls:12,vars:2,consts:[["slot","start"]],template:function(n,t){1&n&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-buttons",0),s.Kb(3,"ion-back-button"),s.Lb(),s.Mb(4,"ion-title"),s.jc(5,"landmark"),s.Lb(),s.Lb(),s.Lb(),s.Mb(6,"ion-content"),s.jc(7,"\nLandmark detail page\n"),s.Mb(8,"h3"),s.jc(9),s.Lb(),s.Mb(10,"p"),s.jc(11),s.Lb(),s.Lb()),2&n&&(s.zb(9),s.kc(t.landmark.name),s.zb(2),s.kc(t.landmark.description))},directives:[a.n,a.B,a.e,a.b,a.c,a.A,a.l],styles:[""]}),n})()}];let d=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[i.i.forChild(b)],i.i]}),n})(),l=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(t){return new(t||n)},imports:[[e.b,o.d,a.C,d]]}),n})()}}]);