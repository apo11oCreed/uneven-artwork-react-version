import{a,r,R as N,f as y,g as v,j as f}from"./vendor-6e651ae1.js";import{L as x,_ as P,f as S}from"./index-a56b96a9.js";const D=N.lazy(()=>P(()=>import("./Portfolio-eee2c766.js"),["js/Portfolio-eee2c766.js","js/vendor-6e651ae1.js"]));function O({imageCollection:i}){return a("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:i.map((c,s)=>a(r.exports.Suspense,{fallback:a(x,{}),children:a(D,{item:c,index:s})},s))})}function V(){const i=y(e=>e.portfolio.images),c=v(),s=r.exports.useRef(),p=r.exports.useRef(),g={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},d=g.VITE_CONTENTFUL_SPACE_ID,_=g.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;console.log("spaceId = "+d),console.log("accessToken = "+_);const T=`
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
	`,[w,C]=r.exports.useState([]),[F,I]=r.exports.useState(!0);let o=[],h=[];r.exports.useEffect(()=>{window.fetch(`https://graphql.contentful.com/content/v1/spaces/${d}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${_}`},body:JSON.stringify({query:T})}).then(e=>e.json()).then(({data:e,errors:t})=>{t&&console.error(t),o=e.imageCollection.items;const n=o.map(l=>l.image.url);h=e.assetCollection.items;const m=h.map(l=>l.contentfulMetadata.tags[0].name);c(S(o)),C([...new Set(m)]),L(n,I)}),s&&s.current?s.current.addEventListener("change",E):s.current.removeEventListener("change",E)},[]);const L=async(e,t)=>{const n=await e.map(m=>new Promise((l,A)=>{const u=new Image;u.src=m,u.onload=l(),u.onerror=A()}));await Promise.all(n),t(!1)},E=e=>{let t=[];e.target.value=="all"?t=o:t=o.filter(n=>n.image.contentfulMetadata.tags[0].name==e.target.value),p.current.innerHTML=`${e.target.value} Samples`,c(S(t))};return f("section",{className:"portfolio",children:[f("form",{children:[a("legend",{children:a("h2",{ref:p,className:"tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]",children:"All Samples"})}),a("label",{htmlFor:"tagName",children:"Select Category"}),f("select",{name:"tag",ref:s,children:[a("option",{value:"all",children:"All"}),w.map((e,t)=>a("option",{value:e,children:e},t))]})]}),a(O,{imageCollection:i})]})}export{V as default};
//# sourceMappingURL=PortfolioForm-a8cca42d.js.map
