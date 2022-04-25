import{j as p,r as o,R as f,a as y}from"./vendor-f548af83.js";const C=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}};C();const e=p.exports.jsx,l=p.exports.jsxs,c=p.exports.Fragment;class m extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:e("li",{children:e("a",{href:"#",onClick:()=>this.props.passToMenuLink(this.props.displayText),className:"tw-underline tw-whitespace-nowrap",children:this.props.displayText})})})}}class x extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:e("nav",{className:this.props.className,children:l("ul",{children:[e(m,{displayText:"Portfolio",passToMenuLink:this.props.passToMenu}),e(m,{displayText:"About Natalie",passToMenuLink:this.props.passToMenu})]})})})}}class T extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:l("header",{className:"tw-container tw-mx-auto",children:[e("h1",{className:"tw-text-black tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-bottom-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 md:tw-tracking-[1vw] tw-text-[7vw] md:tw-text-[7.2rem] tw-animate-h1Spread tw-leading-none",children:this.props.siteName}),e(x,{passToMenu:this.props.getLinkText,className:"tw-main tw-w-fit tw-fixed tw-right-0 tw-top-[1rem]"})]})})}}var u="/assets/img/022222_ncorreia_illustration_colored-pencil-19abb4cd.jpg",h="/assets/img/040522_ncorreia_illustration_pencil-f3bbf89a.jpg",g="/assets/img/123121_ncorreia_reference-012f5d3f.jpeg",w="/assets/img/011822_ncorreia_flower-a6e084bc.jpeg";class N extends o.exports.Component{constructor(t){super(t);this.state={imageIsReady:!1},this.imgArray=[u,h,g,w],this.imgQty=this.imgArray.length,this.counter=0,this.incrementCounter=this.incrementCounter.bind(this)}componentDidMount(){for(let t=0;t<this.imgArray.length;t++){const s=new Image;s.src=this.imgArray[t],s.complete?this.incrementCounter():s.addEventListener("load",this.incrementCounter,!1)}}incrementCounter(){this.counter++,this.counter===this.imgQty&&this.setState({imageIsReady:!0})}render(){const{imageIsReady:t}=this.state;return t?l("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:[e("li",{className:"galleryTwoCols md:galleryThreeCols",children:e("picture",{children:e("img",{src:u,alt:"Mixed media of reference"})})}),e("li",{className:"galleryTwoCols md:galleryThreeCols",children:e("picture",{children:e("img",{src:h,alt:"Pencil illustration"})})}),e("li",{className:"galleryTwoCols md:galleryThreeCols",children:e("picture",{children:e("img",{src:g,alt:"Mixed media of reference"})})}),e("li",{className:"galleryTwoCols md:galleryThreeCols",children:e("picture",{children:e("img",{src:w,alt:"Painting of Sunflower"})})})]}):e("p",{className:"tw-text-center",children:"Loading..."})}}class b extends o.exports.Component{constructor(t){super(t);this.state={showComponent:""}}render(){return e("main",{children:e("div",{className:"gallery tw-container tw-mx-auto",children:e(N,{})})})}}class L extends o.exports.Component{constructor(t){super(t)}render(){return e("main",{children:e("p",{children:"Checkout my plants!"})})}}class v extends o.exports.Component{constructor(t){super(t)}render(){return this.props.page=="Portfolio"?e(b,{}):e(L,{})}}class M extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:e("p",{children:"\xA92022 Natalie Correia"})})}}class k extends o.exports.Component{constructor(t){super(t)}render(){return e(c,{children:e("footer",{className:"tw-w-full tw-fixed tw-bottom-0 ",children:l("div",{className:"tw-container tw-mx-auto tw-flex tw-justify-center tw-items-center",children:[e(M,{}),e(x,{passToMenu:this.props.getLinkText,className:"tw-footer"})]})})})}}class S extends f.Component{constructor(){super();this.state={page:"Home"},this.updatePageState=this.updatePageState.bind(this)}updatePageState(t){const s=document.querySelector("h1");if(s.classList.contains("moveH1ToTop"))this.setState({page:t});else{const a=s.animate([{bottom:"calc(100% - 6rem)"}],500,()=>{});s.classList.add("tw-will-change-auto"),a.play(),a.addEventListener("finish",()=>{s.classList.remove("tw-bottom-1/2"),s.classList.remove("tw-will-change-auto"),s.classList.add("moveH1ToTop"),this.setState({page:t})})}}render(){return l("div",{className:"tw-bg-left-top tw-bg-cover",children:[e(T,{siteName:"Natalie Correia",getLinkText:this.updatePageState}),e(v,{page:this.state.page}),e(k,{getLinkText:this.updatePageState})]})}}y.render(e(f.StrictMode,{children:e(S,{})}),document.getElementById("root"));
