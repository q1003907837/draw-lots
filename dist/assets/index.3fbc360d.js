import{m as e,aV as qa,a as q,a4 as y,v as Y,cm as A,a8 as Da,z as f,b4 as Ea,V as La,cn as ha,co as Ma,cp as $a,b5 as U,e as Ra,cq as Ga,ai as Ka,cr as Na,ao as Ua,R as Va,aC as Fa,w as V,a0 as Ja,o as w,f as C,H as F,h as b,M as J,U as W,p as Wa,t as H,j as z,K as Ha,J as Qa}from"./index.bb1074bf.js";import{T as ya}from"./index.619563b7.js";import"./index.c3e15108.js";import{A as xa}from"./index.166f8889.js";import{R as B,C as h}from"./index.852d8cd7.js";import"./useSize.13045e2c.js";var Xa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},Ya=Xa;function _a(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?Object(arguments[a]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable}))),n.forEach(function(d){Za(t,d,r[d])})}return t}function Za(t,a,r){return a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}var Z=function(a,r){var n=_a({},a,r.attrs);return e(qa,_a({},n,{icon:Ya}),null)};Z.displayName="UndoOutlined";Z.inheritAttrs=!1;var at=Z,tt=ya.TabPane,et=function(){return{prefixCls:String,title:y.any,extra:y.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:y.any,tabList:{type:Array},tabBarExtraContent:y.any,activeTabKey:String,defaultActiveTabKey:String,cover:y.any,onTabChange:{type:Function}}},nt=q({name:"ACard",props:et(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(a,r){var n=r.slots,d=Y("card",a),s=d.prefixCls,x=d.direction,o=d.size,_=function(u){var g=u.map(function(v,S){return ha(v)&&!Ma(v)||!ha(v)?e("li",{style:{width:"".concat(100/u.length,"%")},key:"action-".concat(S)},[e("span",null,[v])]):null});return g},p=function(u){var g;(g=a.onTabChange)===null||g===void 0||g.call(a,u)},D=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g;return u.forEach(function(v){v&&$a(v.type)&&v.type.__ANT_CARD_GRID&&(g=!0)}),g};return function(){var l,u,g,v,S,E,L,M,aa=a.headStyle,Ca=aa===void 0?{}:aa,ta=a.bodyStyle,$=ta===void 0?{}:ta,ea=a.loading,na=a.bordered,ka=na===void 0?!0:na,ra=a.type,I=a.tabList,za=a.hoverable,oa=a.activeTabKey,ja=a.defaultActiveTabKey,ia=a.tabBarExtraContent,da=ia===void 0?A((g=n.tabBarExtraContent)===null||g===void 0?void 0:g.call(n)):ia,la=a.title,R=la===void 0?A((v=n.title)===null||v===void 0?void 0:v.call(n)):la,ca=a.extra,G=ca===void 0?A((S=n.extra)===null||S===void 0?void 0:S.call(n)):ca,sa=a.actions,K=sa===void 0?A((E=n.actions)===null||E===void 0?void 0:E.call(n)):sa,pa=a.cover,ua=pa===void 0?A((L=n.cover)===null||L===void 0?void 0:L.call(n)):pa,P=Da((M=n.default)===null||M===void 0?void 0:M.call(n)),i=s.value,Sa=(l={},f(l,"".concat(i),!0),f(l,"".concat(i,"-loading"),ea),f(l,"".concat(i,"-bordered"),ka),f(l,"".concat(i,"-hoverable"),!!za),f(l,"".concat(i,"-contain-grid"),D(P)),f(l,"".concat(i,"-contain-tabs"),I&&I.length),f(l,"".concat(i,"-").concat(o.value),o.value),f(l,"".concat(i,"-type-").concat(ra),!!ra),f(l,"".concat(i,"-rtl"),x.value==="rtl"),l),Ia=$.padding===0||$.padding==="0px"?{padding:"24px"}:void 0,m=e("div",{class:"".concat(i,"-loading-block")},null),Ta=e("div",{class:"".concat(i,"-loading-content"),style:Ia},[e(B,{gutter:8},{default:function(){return[e(h,{span:22},{default:function(){return[m]}})]}}),e(B,{gutter:8},{default:function(){return[e(h,{span:8},{default:function(){return[m]}}),e(h,{span:15},{default:function(){return[m]}})]}}),e(B,{gutter:8},{default:function(){return[e(h,{span:6},{default:function(){return[m]}}),e(h,{span:18},{default:function(){return[m]}})]}}),e(B,{gutter:8},{default:function(){return[e(h,{span:13},{default:function(){return[m]}}),e(h,{span:9},{default:function(){return[m]}})]}}),e(B,{gutter:8},{default:function(){return[e(h,{span:4},{default:function(){return[m]}}),e(h,{span:3},{default:function(){return[m]}}),e(h,{span:16},{default:function(){return[m]}})]}})]),fa=oa!==void 0,Aa=(u={size:"large"},f(u,fa?"activeKey":"defaultActiveKey",fa?oa:ja),f(u,"onChange",p),f(u,"class","".concat(i,"-head-tabs")),u),ga,va=I&&I.length?e(ya,Aa,{default:function(){return[I.map(function(c){var ma=c.tab,O=c.slots,ba=O==null?void 0:O.tab;Ea(!O,"Card","tabList slots is deprecated, Please use `customTab` instead.");var N=ma!==void 0?ma:n[ba]?n[ba](c):null;return N=La(n,"customTab",c,function(){return[N]}),e(tt,{tab:N,key:c.key,disabled:c.disabled},null)})]},rightExtra:da?function(){return da}:null}):null;(R||G||va)&&(ga=e("div",{class:"".concat(i,"-head"),style:Ca},[e("div",{class:"".concat(i,"-head-wrapper")},[R&&e("div",{class:"".concat(i,"-head-title")},[R]),G&&e("div",{class:"".concat(i,"-extra")},[G])]),va]));var Ba=ua?e("div",{class:"".concat(i,"-cover")},[ua]):null,Pa=e("div",{class:"".concat(i,"-body"),style:$},[ea?Ta:P]),Oa=K&&K.length?e("ul",{class:"".concat(i,"-actions")},[_(K)]):null;return e("div",{class:Sa,ref:"cardContainerRef"},[ga,Ba,P&&P.length?Pa:null,Oa])}}}),k=nt,rt=function(){return{prefixCls:String,title:y.any,description:y.any,avatar:y.any}},Q=q({name:"ACardMeta",props:rt(),slots:["title","description","avatar"],setup:function(a,r){var n=r.slots,d=Y("card",a),s=d.prefixCls;return function(){var x=f({},"".concat(s.value,"-meta"),!0),o=U(n,a,"avatar"),_=U(n,a,"title"),p=U(n,a,"description"),D=o?e("div",{class:"".concat(s.value,"-meta-avatar")},[o]):null,l=_?e("div",{class:"".concat(s.value,"-meta-title")},[_]):null,u=p?e("div",{class:"".concat(s.value,"-meta-description")},[p]):null,g=l||u?e("div",{class:"".concat(s.value,"-meta-detail")},[l,u]):null;return e("div",{class:x},[D,g])}}}),ot=function(){return{prefixCls:String,hoverable:{type:Boolean,default:!0}}},X=q({name:"ACardGrid",__ANT_CARD_GRID:!0,props:ot(),setup:function(a,r){var n=r.slots,d=Y("card",a),s=d.prefixCls,x=Ra(function(){var o;return o={},f(o,"".concat(s.value,"-grid"),!0),f(o,"".concat(s.value,"-grid-hoverable"),a.hoverable),o});return function(){var o;return e("div",{class:x.value},[(o=n.default)===null||o===void 0?void 0:o.call(n)])}}});k.Meta=Q;k.Grid=X;k.install=function(t){return t.component(k.name,k),t.component(Q.name,Q),t.component(X.name,X),t};function it(t,a){return Ga(a,function(r){return t[r]})}function dt(t){return t==null?[]:it(t,Ka(t))}var lt=Math.floor,ct=Math.random;function st(t,a){return t+lt(ct()*(a-t+1))}function wa(t,a){var r=-1,n=t.length,d=n-1;for(a=a===void 0?n:a;++r<a;){var s=st(r,d),x=t[s];t[s]=t[r],t[r]=x}return t.length=a,t}function pt(t){return wa(Na(t))}function ut(t){return wa(dt(t))}function ft(t){var a=Ua(t)?pt:ut;return a(t)}const j={personList:[{name:"Canyon",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"},{name:"Ame",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"},{name:"Jason",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"},{name:"Mlcj",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"},{name:"Otto",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"},{name:"Qu",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"red"},{name:"Jkgala",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"red"},{name:"Koria",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"red"},{name:"Thexiang",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"red"},{name:"Bot",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"red"}],person:[{name:"bot",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"},{name:"bot",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"},{name:"bot",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"},{name:"bot",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"},{name:"bot",img:"https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon7.jpg?image=q_auto,f_webp,w_auto&v=1699938227376",type:"blue"}]};const gt={class:"person"},vt={class:"wrap"},mt={class:"left"},bt={class:"item"},ht={class:"img"},xt={class:"txt"},_t={class:"center"},yt={class:"right"},wt={class:"item"},Ct={class:"img"},kt={class:"txt"},zt=q({__name:"index",setup(t){const a=Fa(j.personList),r=V(a),n=V(j.person),d=V(j.person);function s(){let o=ft(r.value);o.filter((_,p)=>{p<=4?_.type="blue":_.type="red"}),n.value=o.slice(0,5),d.value=o.slice(5,10),r.value}function x(){r.value=j.personList,n.value=j.person,d.value=j.person}return Ja(()=>{}),(o,_)=>(w(),C("div",null,[e(z(k),null,{default:F(()=>[b("div",gt,[(w(!0),C(J,null,W(r.value,p=>(w(),C("div",{class:Wa(["item",p.type]),ghost:""},H(p.name),3))),256))])]),_:1}),e(z(k),{class:"card-cont"},{default:F(()=>[b("div",vt,[b("div",mt,[(w(!0),C(J,null,W(n.value,p=>(w(),C("div",bt,[b("div",ht,[e(z(xa),{size:50,src:p.img},null,8,["src"])]),b("div",xt,H(p.name),1)]))),256))]),b("div",_t,[b("div",{class:"icon",onClick:x},[e(z(at))]),e(z(Ha),{class:"btn",block:"",size:"large",onClick:s},{default:F(()=>[Qa("\u62BD\u7B7E")]),_:1})]),b("div",yt,[(w(!0),C(J,null,W(d.value,p=>(w(),C("div",wt,[b("div",Ct,[e(z(xa),{size:50,src:p.img},null,8,["src"])]),b("div",kt,H(p.name),1)]))),256))])])]),_:1})]))}});var Pt=Va(zt,[["__scopeId","data-v-01596f46"]]);export{Pt as default};