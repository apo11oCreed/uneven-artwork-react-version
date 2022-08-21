import{r,R as C}from"./react-vendor-ceb58989.js";import{L as I,_ as L,f as E}from"./index-4276b7b5.js";import{a,u as N,d as P,j as f}from"./vendor-f11b8f9a.js";const O=C.lazy(()=>L(()=>import("./Portfolio-05f6d716.js"),["js/Portfolio-05f6d716.js","js/react-vendor-ceb58989.js","js/vendor-f11b8f9a.js"]));function R({imageCollection:c}){return a("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:c.map((i,s)=>a(r.exports.Suspense,{fallback:a(I,{}),children:a(O,{item:i,index:s})},s))})}function F(){const c=N(e=>e.portfolio.images),i=P(),s=r.exports.useRef(),p=r.exports.useRef(),g={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},d=g.VITE_CONTENTFUL_SPACE_ID,h=g.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;console.log("spaceId = "+d),console.log("accessToken = "+h);const S=`
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
	`,[T,v]=r.exports.useState([]),[D,x]=r.exports.useState(!0);let o=[],w=[];r.exports.useEffect(()=>{window.fetch(`https://graphql.contentful.com/content/v1/spaces/${d}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify({query:S})}).then(e=>e.json()).then(({data:e,errors:t})=>{t&&console.error(t),o=e.imageCollection.items;const n=o.map(l=>l.image.url);w=e.assetCollection.items;const m=w.map(l=>l.contentfulMetadata.tags[0].name);i(E(o)),v([...new Set(m)]),y(n,x)}),s&&s.current?s.current.addEventListener("change",_):s.current.removeEventListener("change",_)},[]);const y=async(e,t)=>{const n=await e.map(m=>new Promise((l,A)=>{const u=new Image;u.src=m,u.onload=l(),u.onerror=A()}));await Promise.all(n),t(!1)},_=e=>{let t=[];e.target.value=="all"?t=o:t=o.filter(n=>n.image.contentfulMetadata.tags[0].name==e.target.value),p.current.innerHTML=`${e.target.value} Samples`,i(E(t))};return f("section",{className:"portfolio",children:[f("form",{children:[a("legend",{children:a("h2",{ref:p,className:"tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]",children:"All Samples"})}),a("label",{htmlFor:"tagName",children:"Select Category"}),f("select",{name:"tag",ref:s,children:[a("option",{value:"all",children:"All"}),T.map((e,t)=>a("option",{value:e,children:e},t))]})]}),a(R,{imageCollection:c})]})}export{F as default};
//# sourceMappingURL=PortfolioForm-45ac0b2f.js.map
