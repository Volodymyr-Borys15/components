(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{q2xJ:function(e,t,n){"use strict";n.r(t);var s=n("ofXK"),a=n("tyNb"),r=n("fXoL"),c=n("JmOq");function o(e,t){if(1&e&&(r.Kb(0,"th"),r.ec(1),r.Jb()),2&e){const e=t.$implicit;r.wb(1),r.gc(" ",e.label," ")}}function i(e,t){if(1&e&&(r.Kb(0,"td"),r.ec(1),r.Jb()),2&e){const e=t.$implicit,n=r.Tb().$implicit;r.wb(1),r.gc(" ",n[e.key]," ")}}function b(e,t){if(1&e&&(r.Kb(0,"tr"),r.dc(1,i,2,1,"td",1),r.Jb()),2&e){const e=r.Tb();r.wb(1),r.Wb("ngForOf",e.headers)}}let l=(()=>{class e{constructor(){this.classNames="",this.data=[],this.headers=[]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.zb({type:e,selectors:[["app-table"]],inputs:{classNames:"classNames",data:"data",headers:"headers"},decls:6,vars:3,consts:[[1,"ui","table",3,"ngClass"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(r.Kb(0,"table",0),r.Kb(1,"thead"),r.Kb(2,"tr"),r.dc(3,o,2,1,"th",1),r.Jb(),r.Jb(),r.Kb(4,"tbody"),r.dc(5,b,2,1,"tr",1),r.Jb(),r.Jb()),2&e&&(r.Wb("ngClass",t.classNames),r.wb(3),r.Wb("ngForOf",t.headers),r.wb(2),r.Wb("ngForOf",t.data))},directives:[s.h,s.i],styles:[""]}),e})();const p=["*"];let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.zb({type:e,selectors:[["app-tabs"]],ngContentSelectors:p,decls:7,vars:0,consts:[[1,"ui","grid"],[1,"four","wide","column"],[1,"ui","vertical","tabular","menu","fluid"],[1,"twelve","wide","stretched","column"],[1,"ui","segment"]],template:function(e,t){1&e&&(r.Vb(),r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"div",2),r.Ub(3,0,["#name",""]),r.Jb(),r.Jb(),r.Kb(4,"div",3),r.Kb(5,"div",4),r.Gb(6,"router-outlet"),r.Jb(),r.Jb(),r.Jb())},directives:[a.d],styles:[""]}),e})();const d=function(){return{exact:!0}},m=[{path:"",component:(()=>{class e{constructor(){this.data=[{name:"John",age:24,job:"Designer",employed:!0},{name:"Elyse",age:25,job:"Engineer",employed:!1},{name:"Anna",age:29,job:"Engineer",employed:!0}],this.headers=[{key:"employed",label:"Has a job?"},{key:"name",label:"Name"},{key:"age",label:"Age"},{key:"job",label:"Job"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.zb({type:e,selectors:[["app-collections-home"]],decls:12,vars:4,consts:[["classNames","striped celled",3,"data","headers"],["routerLink","./","routerLinkActive","active",1,"item",3,"routerLinkActiveOptions"],["routerLink","companies","routerLinkActive","active",1,"item"],["routerLink","partners","routerLinkActive","active",1,"item"]],template:function(e,t){1&e&&(r.Kb(0,"app-divider"),r.ec(1,"Table Component"),r.Jb(),r.Gb(2,"app-table",0),r.Kb(3,"app-divider"),r.ec(4,"Tab Menu"),r.Jb(),r.Kb(5,"app-tabs"),r.Kb(6,"a",1),r.ec(7,"Biography"),r.Jb(),r.Kb(8,"a",2),r.ec(9,"Companies"),r.Jb(),r.Kb(10,"a",3),r.ec(11,"Partners"),r.Jb(),r.Jb()),2&e&&(r.wb(2),r.Wb("data",t.data)("headers",t.headers),r.wb(4),r.Wb("routerLinkActiveOptions",r.Xb(3,d)))},directives:[c.a,l,u,a.b,a.a],styles:[""]}),e})(),children:[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.zb({type:e,selectors:[["app-biography"]],decls:2,vars:0,template:function(e,t){1&e&&(r.Kb(0,"p"),r.ec(1,"biography works!"),r.Jb())},styles:[""]}),e})()},{path:"companies",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.zb({type:e,selectors:[["app-companies"]],decls:2,vars:0,template:function(e,t){1&e&&(r.Kb(0,"p"),r.ec(1,"companies works!"),r.Jb())},styles:[""]}),e})()},{path:"partners",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.zb({type:e,selectors:[["app-partners"]],decls:2,vars:0,template:function(e,t){1&e&&(r.Kb(0,"p"),r.ec(1,"partners works!"),r.Jb())},styles:[""]}),e})()}]}];let f=(()=>{class e{}return e.\u0275mod=r.Db({type:e}),e.\u0275inj=r.Cb({factory:function(t){return new(t||e)},imports:[[a.c.forChild(m)],a.c]}),e})();var h=n("PCNd");n.d(t,"CollectionsModule",(function(){return y}));let y=(()=>{class e{}return e.\u0275mod=r.Db({type:e}),e.\u0275inj=r.Cb({factory:function(t){return new(t||e)},imports:[[s.b,f,h.a]]}),e})()}}]);