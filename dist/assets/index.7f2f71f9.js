var rt=Object.defineProperty,at=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var Oe=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var be=(e,t,r)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))lt.call(t,r)&&be(e,r,t[r]);if(Oe)for(var r of Oe(t))dt.call(t,r)&&be(e,r,t[r]);return e},ge=(e,t)=>at(e,st(t));var Te=(e,t,r)=>new Promise((g,_)=>{var f=u=>{try{l(r.next(u))}catch(h){_(h)}},s=u=>{try{l(r.throw(u))}catch(h){_(h)}},l=u=>u.done?g(u.value):Promise.resolve(u.value).then(f,s);l((r=r.apply(e,t)).next())});import{aP as ut,a as F,v as ct,e as E,z as m,_ as ve,a8 as gt,m as o,q as le,b as Se,R as de,S as R,o as C,f as k,M as j,V as w,i as q,H as A,J as he,t as se,Y as J,k as Q,p as P,bt as Ie,c_ as _t,O as _e,h as Ce,bM as pt,w as Z,cL as ft,x as De,aT as me,c$ as we,j as i,aG as K,cC as ht,a1 as St,aR as Et,bZ as Ot,T as Me,E as bt,U as Tt,W as vt,X as Ct,D as Be,aQ as Dt,cO as wt,aJ as Mt,d0 as At,Z as Rt,bz as G,d1 as Ae,d2 as pe,d3 as x,ba as re,bb as Y,d4 as Re,b_ as ae,bO as Le,d5 as Ue,d6 as xe,bK as Pe,d7 as yt,d8 as Nt,d9 as It,da as mt,bV as Bt,bf as Lt,A as Ut,db as xt,dc as Pt,dd as kt,bd as Ft}from"./index.adfa4d48.js";import{D as Gt,c as W,u as Wt,a as $t}from"./index.f1282f56.js";import{A as Ht}from"./ArrowLeftOutlined.b2a0225f.js";var zt=function(){return{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}},Xt=F({name:"ADivider",props:zt(),setup:function(t,r){var g=r.slots,_=ct("divider",t),f=_.prefixCls,s=_.direction,l=E(function(){return t.orientation==="left"&&t.orientationMargin!=null}),u=E(function(){return t.orientation==="right"&&t.orientationMargin!=null}),h=E(function(){var p,D=t.type,B=t.dashed,$=t.plain,b=f.value;return p={},m(p,b,!0),m(p,"".concat(b,"-").concat(D),!0),m(p,"".concat(b,"-dashed"),!!B),m(p,"".concat(b,"-plain"),!!$),m(p,"".concat(b,"-rtl"),s.value==="rtl"),m(p,"".concat(b,"-no-default-orientation-margin-left"),l.value),m(p,"".concat(b,"-no-default-orientation-margin-right"),u.value),p}),T=E(function(){var p=typeof t.orientationMargin=="number"?"".concat(t.orientationMargin,"px"):t.orientationMargin;return ve(ve({},l.value&&{marginLeft:p}),u.value&&{marginRight:p})}),v=E(function(){return t.orientation.length>0?"-"+t.orientation:t.orientation});return function(){var p,D=gt((p=g.default)===null||p===void 0?void 0:p.call(g));return o("div",{class:[h.value,D.length?"".concat(f.value,"-with-text ").concat(f.value,"-with-text").concat(v.value):""],role:"separator"},[D.length?o("span",{class:"".concat(f.value,"-inner-text"),style:T.value},[D]):null])}}}),M=ut(Xt);const{t:ye}=le(),ke={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:ye("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:ye("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Vt=I({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},ke);const jt=F({name:"BasicDrawerFooter",props:ge(I({},ke),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:r}=Se("basic-drawer-footer"),g=E(()=>{const s=`${e.height}`;return{height:s,lineHeight:`calc(${s} - 1px)`}});function _(){t("ok")}function f(){t("close")}return{handleOk:_,prefixCls:r,handleClose:f,getStyle:g}}});function Kt(e,t,r,g,_,f){const s=R("a-button");return e.showFooter||e.$slots.footer?(C(),k("div",{key:0,class:P(e.prefixCls),style:Ie(e.getStyle)},[e.$slots.footer?w(e.$slots,"footer",{key:1}):(C(),k(j,{key:0},[w(e.$slots,"insertFooter"),e.showCancelBtn?(C(),q(s,J({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:A(()=>[he(se(e.cancelText),1)]),_:1},16,["onClick"])):Q("",!0),w(e.$slots,"centerFooter"),e.showOkBtn?(C(),q(s,J({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:A(()=>[he(se(e.okText),1)]),_:1},16,["type","onClick","loading"])):Q("",!0),w(e.$slots,"appendFooter")],64))],6)):Q("",!0)}var Yt=de(jt,[["render",Kt]]);const Qt=F({name:"BasicDrawerHeader",components:{BasicTitle:_t,ArrowLeftOutlined:Ht},props:{isDetail:_e.bool,showDetailBack:_e.bool,title:_e.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:r}=Se("basic-drawer-header");function g(){t("close")}return{prefixCls:r,handleClose:g}}}),Zt={key:1};function qt(e,t,r,g,_,f){const s=R("BasicTitle"),l=R("ArrowLeftOutlined");return e.isDetail?(C(),k("div",{key:1,class:P([e.prefixCls,`${e.prefixCls}--detail`])},[Ce("span",{class:P(`${e.prefixCls}__twrap`)},[e.showDetailBack?(C(),k("span",{key:0,onClick:t[0]||(t[0]=(...u)=>e.handleClose&&e.handleClose(...u))},[o(l,{class:P(`${e.prefixCls}__back`)},null,8,["class"])])):Q("",!0),e.title?(C(),k("span",Zt,se(e.title),1)):Q("",!0)],2),Ce("span",{class:P(`${e.prefixCls}__toolbar`)},[w(e.$slots,"titleToolbar")],2)],2)):(C(),q(s,{key:0,class:P(e.prefixCls)},{default:A(()=>[w(e.$slots,"title"),he(" "+se(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var Jt=de(Qt,[["render",qt]]);const ei=F({components:{Drawer:Gt,ScrollContainer:pt,DrawerFooter:Yt,DrawerHeader:Jt},inheritAttrs:!1,props:Vt,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const r=Z(!1),g=ft(),_=Z(null),{t:f}=le(),{prefixVar:s,prefixCls:l}=Se("basic-drawer"),u={setDrawerProps:ee,emitVisible:void 0},h=me();h&&t("register",u,h.uid);const T=E(()=>we(K(e),i(_))),v=E(()=>{const d=ge(I(I({placement:"right"},i(g)),i(T)),{visible:i(r)});d.title=void 0;const{isDetail:S,width:H,wrapClassName:z,getContainer:ue}=d;if(S){H||(d.width="100%");const ie=`${l}__detail`;d.class=z?`${z} ${ie}`:ie,ue||(d.getContainer=`.${s}-layout-content`)}return d}),p=E(()=>I(I({},g),i(v))),D=E(()=>{const{footerHeight:d,showFooter:S}=i(v);return S&&d?ht(d)?`${d}px`:`${d.replace("px","")}px`:"0px"}),B=E(()=>{const d=i(D);return{position:"relative",height:`calc(100% - ${d})`}}),$=E(()=>{var d;return!!((d=i(v))!=null&&d.loading)});De(()=>e.visible,(d,S)=>{d!==S&&(r.value=d)},{deep:!0}),De(()=>r.value,d=>{St(()=>{var S;t("visible-change",d),h&&((S=u.emitVisible)==null||S.call(u,d,h.uid))})});function b(d){return Te(this,null,function*(){const{closeFunc:S}=i(v);if(t("close",d),S&&Et(S)){const H=yield S();r.value=!H;return}r.value=!1})}function ee(d){_.value=we(i(_)||{},d),Reflect.has(d,"visible")&&(r.value=!!d.visible)}function te(){t("ok")}return{onClose:b,t:f,prefixCls:l,getMergeProps:T,getScrollContentStyle:B,getProps:v,getLoading:$,getBindValues:p,getFooterHeight:D,handleOk:te}}});function ti(e,t,r,g,_,f){const s=R("DrawerHeader"),l=R("ScrollContainer"),u=R("DrawerFooter"),h=R("Drawer"),T=Ot("loading");return C(),q(h,J({class:e.prefixCls,onClose:e.onClose},e.getBindValues),Me({default:A(()=>[bt((C(),q(l,{style:Ie(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:A(()=>[w(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[T,e.getLoading]]),o(u,J(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),Me({_:2},[Tt(Object.keys(e.$slots),v=>({name:v,fn:A(p=>[w(e.$slots,v,vt(Ct(p||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:A(()=>[w(e.$slots,"title")]),key:"1"}:{name:"title",fn:A(()=>[o(s,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:A(()=>[w(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])]),key:"0"}]),1040,["class","onClose"])}var ii=de(ei,[["render",ti]]);const X=Be({}),Ne=Be({});function ni(){if(!me())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=Z(null),t=Z(!1),r=Z("");function g(s,l){Dt(()=>{e.value=null,t.value=null,X[i(r)]=null}),!(i(t)&&wt()&&s===i(e))&&(r.value=l,e.value=s,t.value=!0,s.emitVisible=(u,h)=>{Ne[h]=u})}const _=()=>{const s=i(e);return s||At("useDrawer instance is undefined!"),s},f={setDrawerProps:s=>{var l;(l=_())==null||l.setDrawerProps(s)},getVisible:E(()=>Ne[~~i(r)]),openDrawer:(s=!0,l,u=!0)=>{var T;if((T=_())==null||T.setDrawerProps({visible:s}),!l)return;if(u){X[i(r)]=null,X[i(r)]=K(l);return}Mt(K(X[i(r)]),K(l))||(X[i(r)]=K(l))},closeDrawer:()=>{var s;(s=_())==null||s.setDrawerProps({visible:!1})}};return[g,f]}const oi=Rt(ii),ri=W(()=>G(()=>import("./TypePicker.0ba69e43.js"),["assets/TypePicker.0ba69e43.js","assets/TypePicker.ef8b66fb.css","assets/index.adfa4d48.js","assets/index.86a58d3a.css"])),fe=W(()=>G(()=>import("./ThemeColorPicker.aa30ecbc.js"),["assets/ThemeColorPicker.aa30ecbc.js","assets/ThemeColorPicker.bb41c497.css","assets/index.adfa4d48.js","assets/index.86a58d3a.css","assets/index.f1282f56.js","assets/index.170a57c2.css","assets/useContentViewHeight.1a91dd28.js","assets/index.e8d27363.js","assets/index.432fefb2.css","assets/ArrowLeftOutlined.b2a0225f.js"])),ai=W(()=>G(()=>import("./SettingFooter.5d3a69ce.js"),["assets/SettingFooter.5d3a69ce.js","assets/SettingFooter.339dcc62.css","assets/index.adfa4d48.js","assets/index.86a58d3a.css","assets/CopyOutlined.f71711d2.js","assets/index.f1282f56.js","assets/index.170a57c2.css","assets/useContentViewHeight.1a91dd28.js","assets/index.e8d27363.js","assets/index.432fefb2.css"])),c=W(()=>G(()=>import("./SwitchItem.db0bb521.js"),["assets/SwitchItem.db0bb521.js","assets/SwitchItem.e492f643.css","assets/index.adfa4d48.js","assets/index.86a58d3a.css","assets/index.f1282f56.js","assets/index.170a57c2.css","assets/useContentViewHeight.1a91dd28.js","assets/index.e8d27363.js","assets/index.432fefb2.css","assets/ArrowLeftOutlined.b2a0225f.js"])),V=W(()=>G(()=>import("./SelectItem.f957f1bf.js"),["assets/SelectItem.f957f1bf.js","assets/SelectItem.a8bbeb0d.css","assets/index.adfa4d48.js","assets/index.86a58d3a.css","assets/index.f1282f56.js","assets/index.170a57c2.css","assets/useContentViewHeight.1a91dd28.js","assets/index.e8d27363.js","assets/index.432fefb2.css","assets/ArrowLeftOutlined.b2a0225f.js"])),si=W(()=>G(()=>import("./InputNumberItem.880f40b7.js"),["assets/InputNumberItem.880f40b7.js","assets/InputNumberItem.e26df9b9.css","assets/index.adfa4d48.js","assets/index.86a58d3a.css","assets/index.f1282f56.js","assets/index.170a57c2.css","assets/useContentViewHeight.1a91dd28.js","assets/index.e8d27363.js","assets/index.432fefb2.css","assets/ArrowLeftOutlined.b2a0225f.js"])),{t:O}=le();var n=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.FULL_CONTENT=25]="FULL_CONTENT",e[e.CONTENT_MODE=26]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=27]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=28]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=29]="GRAY_MODE",e[e.COLOR_WEAK=30]="COLOR_WEAK",e[e.SHOW_LOGO=31]="SHOW_LOGO",e[e.SHOW_FOOTER=32]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=33]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=34]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=35]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=36]="OPEN_ROUTE_TRANSITION",e))(n||{});const li=[{value:Ae.FULL,label:O("layout.setting.contentModeFull")},{value:Ae.FIXED,label:O("layout.setting.contentModeFixed")}],di=[{value:pe.CENTER,label:O("layout.setting.topMenuAlignRight")},{value:pe.START,label:O("layout.setting.topMenuAlignLeft")},{value:pe.END,label:O("layout.setting.topMenuAlignCenter")}],ui=e=>[{value:ae.NONE,label:O("layout.setting.menuTriggerNone")},{value:ae.FOOTER,label:O("layout.setting.menuTriggerBottom")},...e?[]:[{value:ae.HEADER,label:O("layout.setting.menuTriggerTop")}]],ci=[x.ZOOM_FADE,x.FADE,x.ZOOM_OUT,x.FADE_SIDE,x.FADE_BOTTOM,x.FADE_SCALE].map(e=>({label:e,value:e})),gi=[{title:O("layout.setting.menuTypeSidebar"),mode:re.INLINE,type:Y.SIDEBAR},{title:O("layout.setting.menuTypeMix"),mode:re.INLINE,type:Y.MIX},{title:O("layout.setting.menuTypeTopMenu"),mode:re.HORIZONTAL,type:Y.TOP_MENU},{title:O("layout.setting.menuTypeMixSidebar"),mode:re.INLINE,type:Y.MIX_SIDEBAR}],_i=[{value:Re.HOVER,label:O("layout.setting.triggerHover")},{value:Re.CLICK,label:O("layout.setting.triggerClick")}];function pi(e,t){const r=Le(),g=fi(e,t);r.setProjectConfig(g),e===n.CHANGE_THEME&&(Ue(),xe())}function fi(e,t){const r=Le(),{getThemeColor:g,getDarkMode:_}=Pe();switch(e){case n.CHANGE_LAYOUT:const{mode:f,type:s,split:l}=t;return{menuSetting:I({mode:f,type:s,collapsed:!1,show:!0,hidden:!1},l===void 0?{split:l}:{})};case n.CHANGE_THEME_COLOR:return g.value===t?{}:(mt(t),{themeColor:t});case n.CHANGE_THEME:return _.value===t?{}:(It(t),{});case n.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case n.MENU_ACCORDION:return{menuSetting:{accordion:t}};case n.MENU_TRIGGER:return{menuSetting:{trigger:t}};case n.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case n.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case n.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case n.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case n.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case n.MENU_THEME:return xe(t),{menuSetting:{bgColor:t}};case n.MENU_SPLIT:return{menuSetting:{split:t}};case n.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case n.MENU_FIXED:return{menuSetting:{fixed:t}};case n.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case n.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case n.OPEN_PAGE_LOADING:return r.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case n.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case n.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case n.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case n.FULL_CONTENT:return{fullContent:t};case n.CONTENT_MODE:return{contentMode:t};case n.SHOW_BREADCRUMB:return{showBreadCrumb:t};case n.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case n.GRAY_MODE:return Nt(t),{grayMode:t};case n.SHOW_FOOTER:return{showFooter:t};case n.COLOR_WEAK:return yt(t),{colorWeak:t};case n.SHOW_LOGO:return{showLogo:t};case n.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case n.TABS_SHOW:return{multiTabsSetting:{show:t}};case n.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case n.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case n.HEADER_THEME:return Ue(t),{headerSetting:{bgColor:t}};case n.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case n.HEADER_FIXED:return{headerSetting:{fixed:t}};case n.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}const{t:a}=le();var hi=F({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:r,getShowFooter:g,getShowBreadCrumb:_,getShowBreadCrumbIcon:f,getShowLogo:s,getFullContent:l,getColorWeak:u,getGrayMode:h,getShowDarkModeToggle:T,getThemeColor:v}=Pe(),{getOpenPageLoading:p,getBasicTransition:D,getEnableTransition:B,getOpenNProgress:$}=Bt(),{getIsHorizontal:b,getShowMenu:ee,getMenuType:te,getTrigger:d,getCollapsedShowTitle:S,getMenuFixed:H,getCollapsed:z,getCanDrag:ue,getTopMenuAlign:ie,getAccordion:Fe,getMenuWidth:Ge,getMenuBgColor:We,getIsTopMenu:$e,getSplit:ne,getIsMixSidebar:y,getCloseMixSidebarOnChange:He,getMixSideTrigger:ze,getMixSideFixed:Xe}=Lt(),{getShowHeader:L,getFixed:Ve,getHeaderBgColor:je,getShowSearch:Ke}=Wt(),{getShowMultipleTab:oe,getShowQuick:Ye,getShowRedo:Qe,getShowFold:Ze}=$t(),N=E(()=>i(ee)&&!i(b));function qe(){return o(j,null,[o(ri,{menuTypeList:gi,handler:U=>{pi(n.CHANGE_LAYOUT,{mode:U.mode,type:U.type,split:i(b)?!1:void 0})},def:i(te)},null)])}function Je(){return o(fe,{colorList:Pt,def:i(je),event:n.HEADER_THEME},null)}function et(){return o(fe,{colorList:kt,def:i(We),event:n.MENU_THEME},null)}function tt(){return o(fe,{colorList:xt,def:i(v),event:n.CHANGE_THEME_COLOR},null)}function it(){let U=i(d);const Ee=ui(i(ne));return Ee.some(ce=>ce.value===U)||(U=ae.FOOTER),o(j,null,[o(c,{title:a("layout.setting.splitMenu"),event:n.MENU_SPLIT,def:i(ne),disabled:!i(N)||i(te)!==Y.MIX},null),o(c,{title:a("layout.setting.mixSidebarFixed"),event:n.MENU_FIXED_MIX_SIDEBAR,def:i(Xe),disabled:!i(y)},null),o(c,{title:a("layout.setting.closeMixSidebarOnChange"),event:n.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:i(He),disabled:!i(y)},null),o(c,{title:a("layout.setting.menuCollapse"),event:n.MENU_COLLAPSED,def:i(z),disabled:!i(N)},null),o(c,{title:a("layout.setting.menuDrag"),event:n.MENU_HAS_DRAG,def:i(ue),disabled:!i(N)},null),o(c,{title:a("layout.setting.menuSearch"),event:n.HEADER_SEARCH,def:i(Ke),disabled:!i(L)},null),o(c,{title:a("layout.setting.menuAccordion"),event:n.MENU_ACCORDION,def:i(Fe),disabled:!i(N)},null),o(c,{title:a("layout.setting.collapseMenuDisplayName"),event:n.MENU_COLLAPSED_SHOW_TITLE,def:i(S),disabled:!i(N)||!i(z)||i(y)},null),o(c,{title:a("layout.setting.fixedHeader"),event:n.HEADER_FIXED,def:i(Ve),disabled:!i(L)},null),o(c,{title:a("layout.setting.fixedSideBar"),event:n.MENU_FIXED,def:i(H),disabled:!i(N)||i(y)},null),o(V,{title:a("layout.setting.mixSidebarTrigger"),event:n.MENU_TRIGGER_MIX_SIDEBAR,def:i(ze),options:_i,disabled:!i(y)},null),o(V,{title:a("layout.setting.topMenuLayout"),event:n.MENU_TOP_ALIGN,def:i(ie),options:di,disabled:!i(L)||i(ne)||!i($e)&&!i(ne)||i(y)},null),o(V,{title:a("layout.setting.menuCollapseButton"),event:n.MENU_TRIGGER,def:U,options:Ee,disabled:!i(N)||i(y)},null),o(V,{title:a("layout.setting.contentMode"),event:n.CONTENT_MODE,def:i(r),options:li},null),o(si,{title:a("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:n.MENU_WIDTH,disabled:!i(N),defaultValue:i(Ge),formatter:ce=>`${parseInt(ce)}px`},null)])}function nt(){return o(j,null,[o(c,{title:a("layout.setting.breadcrumb"),event:n.SHOW_BREADCRUMB,def:i(_),disabled:!i(L)},null),o(c,{title:a("layout.setting.breadcrumbIcon"),event:n.SHOW_BREADCRUMB_ICON,def:i(f),disabled:!i(L)},null),o(c,{title:a("layout.setting.tabs"),event:n.TABS_SHOW,def:i(oe)},null),o(c,{title:a("layout.setting.tabsRedoBtn"),event:n.TABS_SHOW_REDO,def:i(Qe),disabled:!i(oe)},null),o(c,{title:a("layout.setting.tabsQuickBtn"),event:n.TABS_SHOW_QUICK,def:i(Ye),disabled:!i(oe)},null),o(c,{title:a("layout.setting.tabsFoldBtn"),event:n.TABS_SHOW_FOLD,def:i(Ze),disabled:!i(oe)},null),o(c,{title:a("layout.setting.sidebar"),event:n.MENU_SHOW_SIDEBAR,def:i(ee),disabled:i(b)},null),o(c,{title:a("layout.setting.header"),event:n.HEADER_SHOW,def:i(L)},null),o(c,{title:"Logo",event:n.SHOW_LOGO,def:i(s),disabled:i(y)},null),o(c,{title:a("layout.setting.footer"),event:n.SHOW_FOOTER,def:i(g)},null),o(c,{title:a("layout.setting.fullContent"),event:n.FULL_CONTENT,def:i(l)},null),o(c,{title:a("layout.setting.grayMode"),event:n.GRAY_MODE,def:i(h)},null),o(c,{title:a("layout.setting.colorWeak"),event:n.COLOR_WEAK,def:i(u)},null)])}function ot(){return o(j,null,[o(c,{title:a("layout.setting.progress"),event:n.OPEN_PROGRESS,def:i($)},null),o(c,{title:a("layout.setting.switchLoading"),event:n.OPEN_PAGE_LOADING,def:i(p)},null),o(c,{title:a("layout.setting.switchAnimation"),event:n.OPEN_ROUTE_TRANSITION,def:i(B)},null),o(V,{title:a("layout.setting.animationType"),event:n.ROUTER_TRANSITION,def:i(D),options:ci,disabled:!i(B)},null)])}return()=>o(oi,J(t,{title:a("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[i(T)&&o(M,null,{default:()=>a("layout.setting.darkMode")}),i(T)&&o(Ut,{class:"mx-auto"},null),o(M,null,{default:()=>a("layout.setting.navMode")}),qe(),o(M,null,{default:()=>a("layout.setting.sysTheme")}),tt(),o(M,null,{default:()=>a("layout.setting.headerTheme")}),Je(),o(M,null,{default:()=>a("layout.setting.sidebarTheme")}),et(),o(M,null,{default:()=>a("layout.setting.interfaceFunction")}),it(),o(M,null,{default:()=>a("layout.setting.interfaceDisplay")}),nt(),o(M,null,{default:()=>a("layout.setting.animation")}),ot(),o(M,null,null),o(ai,null,null)]})}});const Si=F({name:"SettingButton",components:{SettingDrawer:hi,Icon:Ft},setup(){const[e,{openDrawer:t}]=ni();return{register:e,openDrawer:t}}});function Ei(e,t,r,g,_,f){const s=R("Icon"),l=R("SettingDrawer");return C(),k("div",{onClick:t[0]||(t[0]=u=>e.openDrawer(!0))},[o(s,{icon:"ion:settings-outline"}),o(l,{onRegister:e.register},null,8,["onRegister"])])}var Oi=de(Si,[["render",Ei]]),wi=Object.freeze(Object.defineProperty({__proto__:null,default:Oi},Symbol.toStringTag,{value:"Module"}));export{pi as b,wi as i};
