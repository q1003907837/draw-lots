import{c9 as S,B as H,m as b,aV as R,aP as j,a as z,v as M,w as U,D as N,x as W,a1 as y,a0 as X,cy as q,cT as G,a6 as Y,_ as P,z as O,cU as J,E as Q,G as Z,a3 as V,cV as K,cW as tt,R as et,bz as nt,bK as ot,cX as rt,b as at,e as I,S as D,o as w,f as it,i as C,k as B,p as ct,M as st,j as x,bT as $}from"./index.adfa4d48.js";import{c as lt,u as ut}from"./index.f1282f56.js";import ft from"./SessionTimeoutLogin.a947272e.js";import"./useContentViewHeight.1a91dd28.js";import"./index.e8d27363.js";import"./Login.2c383e8a.js";import"./LoginForm.1453021e.js";import"./index.43e2cfc8.js";import"./index.73ab74bc.js";import"./index.10a1270c.js";import"./get.53e86d90.js";import"./useSize.b4ee64c8.js";import"./LoginFormTitle.983c3b79.js";import"./index.a8657e08.js";import"./ForgetPasswordForm.346e4955.js";import"./index.c70bdcbe.js";import"./RegisterForm.8a43c241.js";import"./MobileForm.9dab0314.js";function pt(t){var e,n=function(c){return function(){e=null,t.apply(void 0,H(c))}},r=function(){if(e==null){for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];e=S(n(i))}};return r.cancel=function(){return S.cancel(e)},r}function E(t){return t!=null&&t===t.window}function L(t,e){var n;if(typeof window=="undefined")return 0;var r=e?"scrollTop":"scrollLeft",o=0;return E(t)?o=t[e?"pageYOffset":"pageXOffset"]:t instanceof Document?o=t.documentElement[r]:t&&(o=t[r]),t&&!E(t)&&typeof o!="number"&&(o=(n=(t.ownerDocument||t).documentElement)===null||n===void 0?void 0:n[r]),o}function dt(t,e,n,r){var o=n-e;return t/=r/2,t<1?o/2*t*t*t+e:o/2*((t-=2)*t*t+2)+e}function vt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.getContainer,r=n===void 0?function(){return window}:n,o=e.callback,c=e.duration,i=c===void 0?450:c,a=r(),p=L(a,!0),l=Date.now(),d=function T(){var _=Date.now(),v=_-l,m=dt(v>i?i:v,p,t,i);E(a)?a.scrollTo(window.pageXOffset,m):a instanceof HTMLDocument||a.constructor.name==="HTMLDocument"?a.documentElement.scrollTop=m:a.scrollTop=m,v<i?S(T):typeof o=="function"&&o()};S(d)}var mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},gt=mt;function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){bt(t,o,n[o])})}return t}function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var A=function(e,n){var r=F({},e,n.attrs);return b(R,F({},r,{icon:gt}),null)};A.displayName="VerticalAlignTopOutlined";A.inheritAttrs=!1;var ht=A,Tt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},wt=z({name:"ABackTop",inheritAttrs:!1,props:Tt(),setup:function(e,n){var r=n.slots,o=n.attrs,c=n.emit,i=M("back-top",e),a=i.prefixCls,p=i.direction,l=U(),d=N({visible:!1,scrollEvent:null}),T=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},_=function(u){var f=e.target,g=f===void 0?T:f,h=e.duration;vt(0,{getContainer:g,duration:h}),c("click",u)},v=pt(function(s){var u=e.visibilityHeight,f=L(s.target,!0);d.visible=f>u}),m=function(){var u=e.target,f=u||T,g=f();d.scrollEvent=tt(g,"scroll",function(h){v(h)}),v({target:g})},k=function(){d.scrollEvent&&d.scrollEvent.remove(),v.cancel()};return W(function(){return e.target},function(){k(),y(function(){m()})}),X(function(){y(function(){m()})}),q(function(){y(function(){m()})}),G(function(){k()}),Y(function(){k()}),function(){var s,u,f=b("div",{class:"".concat(a.value,"-content")},[b("div",{class:"".concat(a.value,"-icon")},[b(ht,null,null)])]),g=P(P({},o),{onClick:_,class:(s={},O(s,"".concat(a.value),!0),O(s,"".concat(o.class),o.class),O(s,"".concat(a.value,"-rtl"),p.value==="rtl"),s)}),h=J("fade");return b(K,h,{default:function(){return[Q(b("div",V(V({},g),{},{ref:l}),[((u=r.default)===null||u===void 0?void 0:u.call(r))||f]),[[Z,d.visible]])]}})}}}),xt=j(wt);const St=z({name:"LayoutFeatures",components:{BackTop:xt,SettingDrawer:lt(()=>nt(()=>import("./index.7f2f71f9.js").then(function(t){return t.i}),["assets/index.7f2f71f9.js","assets/index.ae15f0e9.css","assets/index.adfa4d48.js","assets/index.86a58d3a.css","assets/index.f1282f56.js","assets/index.170a57c2.css","assets/useContentViewHeight.1a91dd28.js","assets/index.e8d27363.js","assets/index.432fefb2.css","assets/ArrowLeftOutlined.b2a0225f.js"])),SessionTimeoutLogin:ft},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:n,getFullContent:r}=ot(),o=rt(),{prefixCls:c}=at("setting-drawer-feature"),{getShowHeader:i}=ut(),a=I(()=>o.getSessionTimeout),p=I(()=>{if(!x(e))return!1;const l=x(n);return l===$.AUTO?!x(i)||x(r):l===$.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:p,prefixCls:c,getIsSessionTimeout:a}}});function _t(t,e,n,r,o,c){const i=D("BackTop"),a=D("SettingDrawer"),p=D("SessionTimeoutLogin");return w(),it(st,null,[t.getUseOpenBackTop?(w(),C(i,{key:0,target:t.getTarget},null,8,["target"])):B("",!0),t.getIsFixedSettingDrawer?(w(),C(a,{key:1,class:ct(t.prefixCls)},null,8,["class"])):B("",!0),t.getIsSessionTimeout?(w(),C(p,{key:2})):B("",!0)],64)}var Ut=et(St,[["render",_t]]);export{Ut as default};
