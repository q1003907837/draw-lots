import{a as $,v as F,e as h,a2 as S,z as g,m as l,cP as W,cQ as M,a4 as N,w as O,Q as V,M as q,cR as D,b6 as G}from"./index.adfa4d48.js";var H=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},J=$({name:"ACheckableTag",props:H(),setup:function(a,f){var r=f.slots,d=f.emit,v=F("tag",a),i=v.prefixCls,n=function(b){var s=a.checked;d("update:checked",!s),d("change",!s),d("click",b)},k=h(function(){var e;return S(i.value,(e={},g(e,"".concat(i.value,"-checkable"),!0),g(e,"".concat(i.value,"-checkable-checked"),a.checked),e))});return function(){var e;return l("span",{class:k.value,onClick:n},[(e=r.default)===null||e===void 0?void 0:e.call(r)])}}}),C=J,K=new RegExp("^(".concat(W.join("|"),")(-inverse)?$")),L=new RegExp("^(".concat(M.join("|"),")$")),X=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:N.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:N.any}},u=$({name:"ATag",props:X(),slots:["closeIcon","icon"],setup:function(a,f){var r=f.slots,d=f.emit,v=f.attrs,i=F("tag",a),n=i.prefixCls,k=i.direction,e=O(!0);V(function(){a.visible!==void 0&&(e.value=a.visible)});var b=function(t){t.stopPropagation(),d("update:visible",!1),d("close",t),!t.defaultPrevented&&a.visible===void 0&&(e.value=!1)},s=h(function(){var o=a.color;return o?K.test(o)||L.test(o):!1}),j=h(function(){var o;return S(n.value,(o={},g(o,"".concat(n.value,"-").concat(a.color),s.value),g(o,"".concat(n.value,"-has-color"),a.color&&!s.value),g(o,"".concat(n.value,"-hidden"),!e.value),g(o,"".concat(n.value,"-rtl"),k.value==="rtl"),o))});return function(){var o,t,p,m=a.icon,z=m===void 0?(o=r.icon)===null||o===void 0?void 0:o.call(r):m,x=a.color,y=a.closeIcon,P=y===void 0?(t=r.closeIcon)===null||t===void 0?void 0:t.call(r):y,T=a.closable,R=T===void 0?!1:T,B=function(){return R?P?l("div",{class:"".concat(n.value,"-close-icon"),onClick:b},[P]):l(G,{class:"".concat(n.value,"-close-icon"),onClick:b},null):null},E={backgroundColor:x&&!s.value?x:void 0},I=z||null,_=(p=r.default)===null||p===void 0?void 0:p.call(r),A=I?l(q,null,[I,l("span",null,[_])]):_,Q="onClick"in v,w=l("span",{class:j.value,style:E},[A,B()]);return Q?l(D,null,{default:function(){return[w]}}):w}}});u.CheckableTag=C;u.install=function(c){return c.component(u.name,u),c.component(C.name,C),c};var Z=u;export{Z as T};
