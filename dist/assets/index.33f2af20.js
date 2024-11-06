import{a as S,v as I,b5 as _,m as i,a3 as k,a4 as B,cL as z,cM as F,a8 as D,be as E,a7 as U,ab as L,ae as V,z as w,B as K}from"./index.bb1074bf.js";var q=globalThis&&globalThis.__rest||function(a,e){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(a);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(a,r[t])&&(o[r[t]]=a[r[t]]);return o},G=function(){return{prefixCls:String,href:String,separator:B.any,overlay:B.any,onClick:Function}},A=S({name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:G(),slots:["separator","overlay"],setup:function(e,o){var r=o.slots,t=o.attrs,m=I("breadcrumb",e),d=m.prefixCls,v=function(p,l){var n=_(r,e,"overlay");return n?i(F,{overlay:n,placement:"bottom"},{default:function(){return[i("span",{class:"".concat(l,"-overlay-link")},[p,i(z,null,null)])]}}):p};return function(){var y,p=(y=_(r,e,"separator"))!==null&&y!==void 0?y:"/",l=_(r,e),n=t.class,c=t.style,s=q(t,["class","style"]),u;return e.href!==void 0?u=i("a",k({class:"".concat(d.value,"-link"),onClick:e.onClick},s),[l]):u=i("span",k({class:"".concat(d.value,"-link"),onClick:e.onClick},s),[l]),u=v(u,d.value),l?i("span",{class:n,style:c},[u,p&&i("span",{class:"".concat(d.value,"-separator")},[p])]):null}}}),H=function(){return{prefixCls:String,routes:{type:Array},params:B.any,separator:B.any,itemRender:{type:Function}}};function J(a,e){if(!a.breadcrumbName)return null;var o=Object.keys(e).join("|"),r=a.breadcrumbName.replace(new RegExp(":(".concat(o,")"),"g"),function(t,m){return e[m]||t});return r}function M(a){var e=a.route,o=a.params,r=a.routes,t=a.paths,m=r.indexOf(e)===r.length-1,d=J(e,o);return m?i("span",null,[d]):i("a",{href:"#/".concat(t.join("/"))},[d])}var C=S({name:"ABreadcrumb",props:H(),slots:["separator","itemRender"],setup:function(e,o){var r=o.slots,t=I("breadcrumb",e),m=t.prefixCls,d=t.direction,v=function(n,c){return n=(n||"").replace(/^\//,""),Object.keys(c).forEach(function(s){n=n.replace(":".concat(s),c[s])}),n},y=function(n,c,s){var u=K(n),f=v(c||"",s);return f&&u.push(f),u},p=function(n){var c=n.routes,s=c===void 0?[]:c,u=n.params,f=u===void 0?{}:u,x=n.separator,h=n.itemRender,O=h===void 0?M:h,R=[];return s.map(function(b){var g=v(b.path,f);g&&R.push(g);var N=[].concat(R),T=null;return b.children&&b.children.length&&(T=i(E,null,{default:function(){return[b.children.map(function(P){return i(E.Item,{key:P.path||P.breadcrumbName},{default:function(){return[O({route:P,params:f,routes:s,paths:y(N,P.path,f)})]}})})]}})),i(A,{overlay:T,separator:x,key:g||b.breadcrumbName},{default:function(){return[O({route:b,params:f,routes:s,paths:N})]}})})};return function(){var l,n,c,s=e.routes,u=e.params,f=u===void 0?{}:u,x=D(_(r,e)),h=(n=_(r,e,"separator"))!==null&&n!==void 0?n:"/",O=e.itemRender||r.itemRender||M;s&&s.length>0?c=p({routes:s,params:f,separator:h,itemRender:O}):x.length&&(c=x.map(function(b,g){return U(L(b.type)==="object"&&(b.type.__ANT_BREADCRUMB_ITEM||b.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),V(b,{separator:h,key:g})}));var R=(l={},w(l,m.value,!0),w(l,"".concat(m.value,"-rtl"),d.value==="rtl"),l);return i("div",{class:R},[c])}}}),Q=globalThis&&globalThis.__rest||function(a,e){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(a);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(a,r[t])&&(o[r[t]]=a[r[t]]);return o},W=function(){return{prefixCls:String}},j=S({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:W(),setup:function(e,o){var r=o.slots,t=o.attrs,m=I("breadcrumb",e),d=m.prefixCls;return function(){var v;t.separator;var y=t.class,p=Q(t,["separator","class"]),l=D((v=r.default)===null||v===void 0?void 0:v.call(r));return i("span",k({class:["".concat(d.value,"-separator"),y]},p),[l.length>0?l:"/"])}}});C.Item=A;C.Separator=j;C.install=function(a){return a.component(C.name,C),a.component(A.name,A),a.component(j.name,j),a};export{C as B};