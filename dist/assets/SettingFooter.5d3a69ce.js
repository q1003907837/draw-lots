import{R as b,a as k,bE as R,b as h,bU as v,C as O,bO as M,S as c,o as T,f as x,m as o,H as i,J as d,t as p,p as A,q as B,dr as N,j as f,c6 as C,d7 as $,d8 as j,N as F}from"./index.adfa4d48.js";import{C as P}from"./CopyOutlined.f71711d2.js";import{R as w}from"./index.f1282f56.js";import"./useContentViewHeight.1a91dd28.js";import"./index.e8d27363.js";const D=k({name:"SettingFooter",components:{CopyOutlined:P,RedoOutlined:w},setup(){const e=R(),{prefixCls:u}=h("setting-footer"),{t:s}=B(),{createSuccessModal:m,createMessage:r}=F(),g=v(),l=O(),t=M();function a(){const{isSuccessRef:n}=N(JSON.stringify(f(t.getProjectConfig),null,2));f(n)&&m({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function S(){try{t.setProjectConfig(C);const{colorWeak:n,grayMode:_}=C;$(n),j(_),r.success(s("layout.setting.resetSuccess"))}catch(n){r.error(n)}}function y(){localStorage.clear(),t.resetAllState(),e.resetState(),g.resetState(),l.resetState(),location.reload()}return{prefixCls:u,t:s,handleCopy:a,handleResetSetting:S,handleClearAndRedo:y}}});function E(e,u,s,m,r,g){const l=c("CopyOutlined"),t=c("a-button"),a=c("RedoOutlined");return T(),x("div",{class:A(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),d(" "+p(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(a,{class:"mr-2"}),d(" "+p(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(a,{class:"mr-2"}),d(" "+p(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var q=b(D,[["render",E],["__scopeId","data-v-beabd496"]]);export{q as default};
