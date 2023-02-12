import{a as t,r as o,R as N,f as A,g as y,j as f}from"./vendor-1e2286d0.js";import{L as x,_ as P,f as E,c as D}from"./index-fe8997ab.js";const O=N.lazy(()=>P(()=>import("./Portfolio-d3a40216.js"),["js/Portfolio-d3a40216.js","js/vendor-1e2286d0.js","js/index-fe8997ab.js","css/index-306e401a.css"]));function F({imageCollection:m}){return t("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:m.map((l,r)=>t(o.exports.Suspense,{fallback:t("li",{children:t(x,{})}),children:t(O,{item:l,index:r})},r))})}function b(){const m=A(e=>e.portfolio.images),l=y(),r=o.exports.useRef(),p=o.exports.useRef(),d={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},S=d.VITE_CONTENTFUL_SPACE_ID,T=d.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,w=`
	query imagesAssets {
		imageCollection{
			items{
				image{
					title
					description
					url
					contentfulMetadata{
						tags{
							name
						}
					}
				}
			}
		}
		assetCollection(where:{
			contentfulMetadata:{
			  tags_exists:true
			}
		  }){
			items{
				contentfulMetadata{
					tags{
						name
					}
				}
			}
		}
	}
	`,[C,I]=o.exports.useState([]),[M,v]=o.exports.useState(!0);let i=[],h=[];o.exports.useEffect(()=>{window.fetch(`https://graphql.contentful.com/content/v1/spaces/${S}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${T}`},body:JSON.stringify({query:w})}).then(e=>e.json()).then(({data:e,errors:a})=>{a&&console.error(a),i=e.imageCollection.items;const c=i.map(n=>n.image.url);h=e.assetCollection.items;const s=h.map(n=>n.contentfulMetadata.tags[0].name);l(E(i)),I([...new Set(s)]),L(c,v)}),r&&r.current?r.current.addEventListener("change",_):r.current.removeEventListener("change",_)},[]);const L=async(e,a)=>{const c=await e.map(s=>new Promise((n,u)=>{const g=new Image;g.src=s,g.onload=n(),g.onerror=u()}));await Promise.all(c),a(!1)},_=e=>{let a=[];e.target.value=="all"?a=i:a=i.filter(c=>{const s=c.image.contentfulMetadata.tags;if(s[0].name==null)console.log(s[0]+" image is missing a tag.");else if(s.length>1){let n=s.filter(u=>u.name==e.target.value);if(n.length)return n[0].name==e.target.value}else return s[0].name==e.target.value}),p.current.innerHTML=`${e.target.value} Samples`,l(E(a)),l(D(r.current.value))};return f("section",{className:"portfolio",children:[f("form",{children:[t("legend",{children:t("h2",{ref:p,className:"tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]",children:"All Samples"})}),t("label",{htmlFor:"tagName",children:"Select Category"}),f("select",{name:"tag",id:"tagName",ref:r,children:[t("option",{value:"all",children:"All"}),C.map((e,a)=>t("option",{value:e,children:e},a))]})]}),t(F,{imageCollection:m})]})}export{b as default};
//# sourceMappingURL=PortfolioForm-d8892f49.js.map
