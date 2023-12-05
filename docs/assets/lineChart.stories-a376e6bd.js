import{r as i}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";var D={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=i,M=Symbol.for("react.element"),w=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,O=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function S(r,n,t){var e,a={},u=null,o=null;t!==void 0&&(u=""+t),n.key!==void 0&&(u=""+n.key),n.ref!==void 0&&(o=n.ref);for(e in n)F.call(n,e)&&!E.hasOwnProperty(e)&&(a[e]=n[e]);if(r&&r.defaultProps)for(e in n=r.defaultProps,n)a[e]===void 0&&(a[e]=n[e]);return{$$typeof:M,type:r,key:u,ref:o,props:a,_owner:O.current}}v.Fragment=w;v.jsx=S;v.jsxs=S;D.exports=v;var l=D.exports;const j=10;function L(r,n=0,t=10){return(r-n)/(t-n)}function q(r,n,t,e,a){const u=j/e*j;return Object.keys(r).map((o,s)=>({x:n*s,y:L(r[o])*u*((t-a*2)/j),key:o,value:r[o]}))}const z=r=>{const n=[];for(let t=0;t<r.length-1;t++){const e=[];e.push({x:r[Math.max(t-1,0)].x,y:r[Math.max(t-1,0)].y}),e.push({x:r[t].x,y:r[t].y}),e.push({x:r[t+1].x,y:r[t+1].y}),e.push({x:r[Math.min(t+2,r.length-1)].x,y:r[Math.min(t+2,r.length-1)].y});const a=[];a.push({x:(-e[0].x+6*e[1].x+e[2].x)/6,y:(-e[0].y+6*e[1].y+e[2].y)/6}),a.push({x:(e[1].x+6*e[2].x-e[3].x)/6,y:(e[1].y+6*e[2].y-e[3].y)/6}),a.push({x:e[2].x,y:e[2].y});const u=a.map(o=>({x:o.x<0?0:o.x,y:o.y<0?0:o.y}));n.push(u)}return n};function N(r){let n="M"+r[0].x+","+r[0].y+" ";const t=z(r);for(let e=0;e<t.length;e++)n+="C"+t[e][0].x+","+t[e][0].y+" "+t[e][1].x+","+t[e][1].y+" "+t[e][2].x+","+t[e][2].y+" ";return n}const W=(r,n)=>`L${r*(n-1)},0`;function I(r,n,t){return r?"M0,0 "+(n==null?void 0:n.substring(1))+W(r,t):null}function T(r,n){const e=(()=>{let a;return()=>{clearTimeout(a),a=setTimeout(r,300)}})();i.useEffect(()=>(r(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}),[r,e,...n])}function B(r,n,t,e){var f;const[a,u]=i.useState(null),[o,s]=i.useState(((f=document.querySelector("#ChartView"))==null?void 0:f.clientWidth)||0),x=i.useRef([]),y=i.useMemo(()=>Object.values(r).reduce((c,h)=>Math.max(c,h),-1/0),[r]),g=i.useMemo(()=>Object.values(r).reduce((c,h)=>Math.min(c,h),-1/0),[r]),m=()=>{var P;const c=(P=document.querySelector("#ChartView"))==null?void 0:P.clientWidth,h=t*2,G=Math.floor((Number(c)-h)/(Object.keys(r).length-1));s(Number(c)),u(G)},d=i.useMemo(()=>a?(x.current=q(r,a,n,y,t),N(x.current)):null,[r,n,y,t,a]),k=i.useMemo(()=>I(a,d,Object.keys(r).length),[r,d,a]);return T(m,[e,t]),{path:d,fillPath:k,points:x.current,maxValue:y,minValue:g,width:o}}function J(r,n,t,e){const a=i.useMemo(()=>{const o=[];if(r===null)return o;for(let s=0;s<r;++s)o.push({x1:String(0+t),x2:`${e-t}px`,y1:`calc((${s} * ((100% - (2 * ${t}px)) / (${r-1}))) + ${t}px) `,y2:`calc((${s} * ((100% - (2 * ${t}px)) / (${r-1}))) + ${t}px) `});return o},[r,t,e]),u=i.useMemo(()=>{const o=[];if(n===null)return o;for(let s=0;s<n;++s)o.push({x1:`${s*(e-2*t)/(n-1)+t}px`,x2:`${s*(e-2*t)/(n-1)+t}px`,y1:String(0+t),y2:`calc(100% - ${t}px)`});return o},[t,n,e]);return{horizontalGridsPoints:a,verticalGridsPoints:u}}const $=({width:r="100%",height:n="250px",background:t="#242424",color:e="#FFB800",points:a={radius:10,color:"var(--chart-accent-color)"},data:u,verticalGrids:o={count:5,color:"var(--chart-accent-color)",strokeDasharray:"5, 5"},horizontalGrids:s={count:12,color:"var(--chart-accent-color)",strokeDasharray:"4, 5"}})=>{const x={"--chart-accent-color":e,height:n,width:r,color:"var(--chart-accent-color)",background:t},{path:y,fillPath:g,points:m,width:d}=B(u,250,a.radius,r),{horizontalGridsPoints:k,verticalGridsPoints:f}=J(s.count,o.count,a.radius,d);return l.jsx("div",{id:"pv-line-chart",style:x,children:l.jsxs("svg",{id:"ChartView",width:"100%",height:n,className:"chart",style:{transform:"rotateX(180deg)"},children:[l.jsx("defs",{children:l.jsxs("linearGradient",{id:"myGradient",gradientTransform:"rotate(90)",children:[l.jsx("stop",{offset:"0%",stopColor:`${e}00`}),l.jsx("stop",{offset:"100%",stopColor:`${e}22`})]})}),l.jsx("g",{children:k.map(c=>l.jsx("line",{x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2,stroke:s.color,strokeWidth:.5,strokeDasharray:s.strokeDasharray},c.x1+c.y1))}),l.jsx("g",{children:f.map(c=>l.jsx("line",{x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2,stroke:o.color,strokeWidth:.5,strokeDasharray:o.strokeDasharray},c.x1+c.y1))}),y&&l.jsxs("g",{style:{transform:`translate(${a.radius}px, ${a.radius}px)`},children:[l.jsx("path",{fill:"none",stroke:"currentColor",strokeWidth:"2px",d:y,className:"path"}),l.jsx("path",{fill:"url(#myGradient)",stroke:"none",strokeWidth:"2px",d:g||"",className:"fadeIn"}),m.length&&m.map((c,h)=>l.jsx("circle",{cx:c.x,cy:c.y,r:a.radius,fill:a.color},c.x+c.y+h))]})]})})},A=i.memo($);try{$.displayName="LineChart",$.__docgenInfo={description:"",displayName:"LineChart",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"250px"},description:"",name:"height",required:!1,type:{name:"string"}},background:{defaultValue:{value:"#242424"},description:"",name:"background",required:!1,type:{name:"string"}},color:{defaultValue:{value:"#FFB800"},description:"",name:"color",required:!1,type:{name:"string"}},points:{defaultValue:{value:'{ radius: 10, color: "var(--chart-accent-color)" }'},description:"",name:"points",required:!1,type:{name:"{ radius: number; color: string; }"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ChartData"}},verticalGrids:{defaultValue:{value:`{
    count: 5,
    color: "var(--chart-accent-color)",
    strokeDasharray: "5, 5",
  }`},description:"",name:"verticalGrids",required:!1,type:{name:"GridProps"}},horizontalGrids:{defaultValue:{value:`{
    count: 12,
    color: "var(--chart-accent-color)",
    strokeDasharray: "4, 5",
  }`},description:"",name:"horizontalGrids",required:!1,type:{name:"GridProps"}}}}}catch{}const Y={component:A,title:"LineChart",tags:["autodocs"]},p={args:{width:"100%",height:"250px",background:"#242424",color:"#FFB800",points:{radius:10,color:"var(--chart-accent-color)"},data:{Aug:0,Jul:10,Jun:4},verticalGrids:{count:5,color:"var(--chart-accent-color)",strokeDasharray:"5, 5"},horizontalGrids:{count:12,color:"var(--chart-accent-color)",strokeDasharray:"4, 5"}}};var _,C,b;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    width: "100%",
    height: "250px",
    background: "#242424",
    color: "#FFB800",
    points: {
      radius: 10,
      color: "var(--chart-accent-color)"
    },
    data: {
      Aug: 0,
      Jul: 10,
      Jun: 4
    },
    verticalGrids: {
      count: 5,
      color: "var(--chart-accent-color)",
      strokeDasharray: "5, 5"
    },
    horizontalGrids: {
      count: 12,
      color: "var(--chart-accent-color)",
      strokeDasharray: "4, 5"
    }
  }
}`,...(b=(C=p.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const H=["Default"];export{p as Default,H as __namedExportsOrder,Y as default};
