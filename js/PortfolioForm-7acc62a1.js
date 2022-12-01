import{a,r,R as N,f as v,g as y,j as g}from"./vendor-1e2286d0.js";import{L as x,_ as P,f as _,c as D}from"./index-7013cbff.js";const M=N.lazy(()=>P(()=>import("./Portfolio-e5e41889.js"),["js/Portfolio-e5e41889.js","js/vendor-1e2286d0.js","js/index-7013cbff.js","css/index-a208ebf2.css"]));function O({imageCollection:c}){return a("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:c.map((o,s)=>a(r.exports.Suspense,{fallback:a(x,{}),children:a(M,{item:o,index:s})},s))})}function b(){const c=v(e=>e.portfolio.images),o=y(),s=r.exports.useRef(),f=r.exports.useRef(),p={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},E=p.VITE_CONTENTFUL_SPACE_ID,S=p.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,T=`
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
	`,[w,C]=r.exports.useState([]),[F,I]=r.exports.useState(!0);let l=[],d=[];r.exports.useEffect(()=>{window.fetch(`https://graphql.contentful.com/content/v1/spaces/${E}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${S}`},body:JSON.stringify({query:T})}).then(e=>e.json()).then(({data:e,errors:t})=>{t&&console.error(t),l=e.imageCollection.items;const n=l.map(i=>i.image.url);d=e.assetCollection.items;const m=d.map(i=>i.contentfulMetadata.tags[0].name);o(_(l)),C([...new Set(m)]),L(n,I)}),s&&s.current?s.current.addEventListener("change",h):s.current.removeEventListener("change",h)},[]);const L=async(e,t)=>{const n=await e.map(m=>new Promise((i,A)=>{const u=new Image;u.src=m,u.onload=i(),u.onerror=A()}));await Promise.all(n),t(!1)},h=e=>{let t=[];e.target.value=="all"?(t=l,console.log(t)):t=l.filter(n=>{if(n.image.contentfulMetadata.tags[0].name==null)console.log(n.image.contentfulMetadata.tags[0]+" image is missing a tag.");else return n.image.contentfulMetadata.tags[0].name==e.target.value}),f.current.innerHTML=`${e.target.value} Samples`,o(_(t)),o(D(s.current.value))};return g("section",{className:"portfolio",children:[g("form",{children:[a("legend",{children:a("h2",{ref:f,className:"tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]",children:"All Samples"})}),a("label",{htmlFor:"tagName",children:"Select Category"}),g("select",{name:"tag",ref:s,children:[a("option",{value:"all",children:"All"}),w.map((e,t)=>a("option",{value:e,children:e},t))]})]}),a(O,{imageCollection:c})]})}export{b as default};
//# sourceMappingURL=PortfolioForm-7acc62a1.js.map
