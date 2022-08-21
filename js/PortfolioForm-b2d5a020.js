import{r as s,R as N}from"./react-vendor-ceb58989.js";import{L as y,_ as v,f as h}from"./index-5f6ee316.js";import{a,u as x,d as P,j as f}from"./vendor-f11b8f9a.js";const D=N.lazy(()=>v(()=>import("./Portfolio-05f6d716.js"),["js/Portfolio-05f6d716.js","js/react-vendor-ceb58989.js","js/vendor-f11b8f9a.js"]));function O({imageCollection:c}){return a("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:c.map((i,r)=>a(s.exports.Suspense,{fallback:a(y,{}),children:a(D,{item:i,index:r})},r))})}function b(){const c=x(e=>e.portfolio.images),i=P(),r=s.exports.useRef(),p=s.exports.useRef(),d={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},E=d.VITE_CONTENTFUL_SPACE_ID,S=d.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,T=`
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
	`,[w,C]=s.exports.useState([]),[F,I]=s.exports.useState(!0);let n=[],g=[];s.exports.useEffect(()=>{window.fetch(`https://graphql.contentful.com/content/v1/spaces/${E}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${S}`},body:JSON.stringify({query:T})}).then(e=>e.json()).then(({data:e,errors:t})=>{t&&console.error(t),n=e.imageCollection.items;const o=n.map(l=>l.image.url);g=e.assetCollection.items;const m=g.map(l=>l.contentfulMetadata.tags[0].name);i(h(n)),C([...new Set(m)]),L(o,I)}),r&&r.current?r.current.addEventListener("change",_):r.current.removeEventListener("change",_)},[]);const L=async(e,t)=>{const o=await e.map(m=>new Promise((l,A)=>{const u=new Image;u.src=m,u.onload=l(),u.onerror=A()}));await Promise.all(o),t(!1)},_=e=>{let t=[];e.target.value=="all"?t=n:t=n.filter(o=>o.image.contentfulMetadata.tags[0].name==e.target.value),p.current.innerHTML=`${e.target.value} Samples`,i(h(t))};return f("section",{className:"portfolio",children:[f("form",{children:[a("legend",{children:a("h2",{ref:p,className:"tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]",children:"All Samples"})}),a("label",{htmlFor:"tagName",children:"Select Category"}),f("select",{name:"tag",ref:r,children:[a("option",{value:"all",children:"All"}),w.map((e,t)=>a("option",{value:e,children:e},t))]})]}),a(O,{imageCollection:c})]})}export{b as default};
//# sourceMappingURL=PortfolioForm-b2d5a020.js.map
