var P=(t,r,l)=>new Promise((f,b)=>{var o=s=>{try{p(l.next(s))}catch(m){b(m)}},x=s=>{try{p(l.throw(s))}catch(m){b(m)}},p=s=>s.done?f(s.value):Promise.resolve(s.value).then(o,x);p((l=l.apply(t,r)).next())});import{r as U,F as G,s as J,a as q,v as W,w as h,x as j,e as O,y as Q,m as n,z as X,B as Y,I as z,b as Z,C as ee,D as ae,o as te,f as ne,E as N,G as K,H as d,j as e,J as R,t as E,K as L,L as re,M as le,q as se,N as oe}from"./index.adfa4d48.js";import{c as ue,C as ie,a as S}from"./index.43e2cfc8.js";import{F as C}from"./index.73ab74bc.js";import"./index.10a1270c.js";import{u as ce,a as de,_ as fe,L as A,b as me}from"./LoginFormTitle.983c3b79.js";import{C as ve,R as ge}from"./index.a8657e08.js";import"./get.53e86d90.js";import"./useSize.b4ee64c8.js";C.useInjectFormItemContext=U;C.ItemRest=G;C.install=function(t){return t.component(C.name,C),t.component(C.Item.name,C.Item),t.component(G.name,G),t};function pe(t,r){var l=typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!l){if(Array.isArray(t)||(l=J(t))||r&&t&&typeof t.length=="number"){l&&(t=l);var f=0,b=function(){};return{s:b,n:function(){return f>=t.length?{done:!0}:{done:!1,value:t[f++]}},e:function(m){throw m},f:b}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,x=!1,p;return{s:function(){l=l.call(t)},n:function(){var m=l.next();return o=m.done,m},e:function(m){x=!0,p=m},f:function(){try{!o&&l.return!=null&&l.return()}finally{if(x)throw p}}}}var $=q({name:"ACheckboxGroup",props:ue(),setup:function(r,l){var f=l.slots,b=l.emit,o=l.expose,x=U(),p=W("checkbox",r),s=p.prefixCls,m=p.direction,y=h((r.value===void 0?r.defaultValue:r.value)||[]);j(function(){return r.value},function(){y.value=r.value||[]});var I=O(function(){return r.options.map(function(u){return typeof u=="string"||typeof u=="number"?{label:u,value:u}:u})}),k=h(Symbol()),_=h(new Map),F=function(i){_.value.delete(i),k.value=Symbol()},M=function(i,v){_.value.set(i,v),k.value=Symbol()},w=h(new Map);j(k,function(){var u=new Map,i=pe(_.value.values()),v;try{for(i.s();!(v=i.n()).done;){var a=v.value;u.set(a,!0)}}catch(c){i.e(c)}finally{i.f()}w.value=u});var T=function(i){var v=y.value.indexOf(i.value),a=Y(y.value);v===-1?a.push(i.value):a.splice(v,1),r.value===void 0&&(y.value=a);var c=a.filter(function(g){return w.value.has(g)}).sort(function(g,V){var D=I.value.findIndex(function(B){return B.value===g}),H=I.value.findIndex(function(B){return B.value===V});return D-H});b("update:value",c),b("change",c),x.onFieldChange()};return Q(ie,{cancelValue:F,registerValue:M,toggleOption:T,mergedValue:y,name:O(function(){return r.name}),disabled:O(function(){return r.disabled})}),o({mergedValue:y}),function(){var u,i=r.id,v=i===void 0?x.id.value:i,a=null,c="".concat(s.value,"-group");return I.value&&I.value.length>0&&(a=I.value.map(function(g){var V;return n(S,{prefixCls:s.value,key:g.value.toString(),disabled:"disabled"in g?g.disabled:r.disabled,indeterminate:g.indeterminate,value:g.value,checked:y.value.indexOf(g.value)!==-1,onChange:g.onChange,class:"".concat(c,"-item")},{default:function(){return[g.label===void 0?(V=f.label)===null||V===void 0?void 0:V.call(f,g):g.label]}})})),n("div",{class:[c,X({},"".concat(c,"-rtl"),m.value==="rtl")],id:v},[a||((u=f.default)===null||u===void 0?void 0:u.call(f))])}}});S.Group=$;S.install=function(t){return t.component(S.name,S),t.component($.name,$),t};const ke=q({__name:"LoginForm",setup(t){const r=ve,l=ge,f=C.Item,b=z.Password,{t:o}=se(),{notification:x,createErrorModal:p}=oe(),{prefixCls:s}=Z("login"),m=ee(),{setLoginState:y,getLoginState:I}=ce(),{getFormRules:k}=de(),_=h(),F=h(!1),M=h(!1),w=ae({account:"vben",password:"123456"}),{validForm:T}=me(_),u=O(()=>e(I)===A.LOGIN);function i(){return P(this,null,function*(){const v=yield T();if(!!v)try{F.value=!0;const a=yield m.login({password:v.password,username:v.account,mode:"none"});a&&x.success({message:o("sys.login.loginSuccessTitle"),description:`${o("sys.login.loginSuccessDesc")}: ${a.realName}`,duration:3})}catch(a){p({title:o("sys.api.errorTip"),content:a.message||o("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${s}`)||document.body})}finally{F.value=!1}})}return(v,a)=>(te(),ne(le,null,[N(n(fe,{class:"enter-x"},null,512),[[K,u.value]]),N(n(e(C),{class:"p-4 enter-x",model:w,rules:e(k),ref_key:"formRef",ref:_,onKeypress:re(i,["enter"])},{default:d(()=>[n(e(f),{name:"account",class:"enter-x"},{default:d(()=>[n(e(z),{size:"large",value:w.account,"onUpdate:value":a[0]||(a[0]=c=>w.account=c),placeholder:e(o)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),n(e(f),{name:"password",class:"enter-x"},{default:d(()=>[n(e(b),{size:"large",visibilityToggle:"",value:w.password,"onUpdate:value":a[1]||(a[1]=c=>w.password=c),placeholder:e(o)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),n(e(l),{class:"enter-x"},{default:d(()=>[n(e(r),{span:12},{default:d(()=>[n(e(f),null,{default:d(()=>[n(e(S),{checked:M.value,"onUpdate:checked":a[2]||(a[2]=c=>M.value=c),size:"small"},{default:d(()=>[R(E(e(o)("sys.login.rememberMe")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),n(e(r),{span:12},{default:d(()=>[n(e(f),{style:{"text-align":"right"}},{default:d(()=>[n(e(L),{type:"link",size:"small",onClick:a[3]||(a[3]=c=>e(y)(e(A).RESET_PASSWORD))},{default:d(()=>[R(E(e(o)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),n(e(f),{class:"enter-x"},{default:d(()=>[n(e(L),{type:"primary",size:"large",block:"",onClick:i,loading:F.value},{default:d(()=>[R(E(e(o)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1}),n(e(l),{class:"enter-x"},{default:d(()=>[n(e(r),{md:8,xs:24},{default:d(()=>[n(e(L),{block:"",onClick:a[4]||(a[4]=c=>e(y)(e(A).MOBILE))},{default:d(()=>[R(E(e(o)("sys.login.mobileSignInFormTitle")),1)]),_:1})]),_:1}),n(e(r),{md:6,xs:24},{default:d(()=>[n(e(L),{block:"",onClick:a[5]||(a[5]=c=>e(y)(e(A).REGISTER))},{default:d(()=>[R(E(e(o)("sys.login.registerButton")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","onKeypress"]),[[K,u.value]])],64))}});export{ke as default};