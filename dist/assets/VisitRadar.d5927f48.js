import{a as r,w as i,x as u,o as n,i as s,H as l,h as d,bt as m,j as f}from"./index.adfa4d48.js";import{C as h}from"./index.e2c327e6.js";import"./index.e8d27363.js";import"./index.10a1270c.js";import{u as c}from"./useECharts.53383a0e.js";import"./index.a8657e08.js";const S=r({__name:"VisitRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(a){const e=a,t=i(null),{setOptions:o}=c(t);return u(()=>e.loading,()=>{e.loading||o({legend:{bottom:0,data:["\u8BBF\u95EE","\u8D2D\u4E70"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"\u7535\u8111"},{name:"\u5145\u7535\u5668"},{name:"\u8033\u673A"},{name:"\u624B\u673A"},{name:"Ipad"},{name:"\u8033\u673A"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"\u8BBF\u95EE",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"\u8D2D\u4E70",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(p,g)=>(n(),s(f(h),{title:"\u8F6C\u5316\u7387",loading:a.loading},{default:l(()=>[d("div",{ref_key:"chartRef",ref:t,style:m({width:a.width,height:a.height})},null,4)]),_:1},8,["loading"]))}});export{S as default};