import{_ as i,d as l,r as u,o as e,c as n,b as s,w as d,g as c,t as r,s as a}from"./app.c3d1ed6a.js";const x={class:"pager"},k={key:0},v={key:1},m={key:0},y={key:1},f=l({__name:"Pager",props:{data:{type:Object,required:!0}},setup(t){return(h,g)=>{const o=u("RouterLink");return e(),n("div",x,[t.data.prev?(e(),s(o,{key:0,class:"prev",to:t.data.prev.link},{default:d(()=>[c(r(t.data.prev.text)+" ",1),t.data.prev.title?(e(),n("br",k)):a("",!0),t.data.prev.title?(e(),n("span",v,r(t.data.prev.title),1)):a("",!0)]),_:1},8,["to"])):a("",!0),t.data.next?(e(),s(o,{key:1,class:"next",to:t.data.next.link},{default:d(()=>[c(r(t.data.next.text)+" ",1),t.data.next.title?(e(),n("br",m)):a("",!0),t.data.next.title?(e(),n("span",y,r(t.data.next.title),1)):a("",!0)]),_:1},8,["to"])):a("",!0)])}}});var C=i(f,[["__file","Pager.vue"]]);export{C as P};
