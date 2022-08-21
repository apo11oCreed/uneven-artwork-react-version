import{r as s,R as C}from"./react-vendor-ceb58989.js";import{L,_ as I,f as w}from"./index-2d9ce40d.js";import{a,u as N,d as P,j as f}from"./vendor-f11b8f9a.js";const O=C.lazy(()=>I(()=>import("./Portfolio-05f6d716.js"),["js/Portfolio-05f6d716.js","js/react-vendor-ceb58989.js","js/vendor-f11b8f9a.js"]));function R({imageCollection:c}){return a("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:c.map((i,r)=>a(s.exports.Suspense,{fallback:a(L,{}),children:a(O,{item:i,index:r})},r))})}function F(){const c=N(e=>e.portfolio.images),i=P(),r=s.exports.useRef(),p=s.exports.useRef(),g={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},_=g.VITE_CONTENTFUL_SPACE_ID,E=g.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,S=`
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
	`,[T,v]=s.exports.useState([]),[D,x]=s.exports.useState(!0);let n=[],d=[];s.exports.useEffect(()=>{window.fetch(`https://graphql.contentful.com/content/v1/spaces/${_}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${E}`},body:JSON.stringify({query:S})}).then(e=>e.json()).then(({data:e,errors:t})=>{t&&console.error(t),n=e.imageCollection.items;const o=n.map(l=>l.image.url);d=e.assetCollection.items;const m=d.map(l=>l.contentfulMetadata.tags[0].name);i(w(n)),v([...new Set(m)]),y(o,x)}),r&&r.current?r.current.addEventListener("change",h):r.current.removeEventListener("change",h)},[]);const y=async(e,t)=>{const o=await e.map(m=>new Promise((l,A)=>{const u=new Image;u.src=m,u.onload=l(),u.onerror=A()}));await Promise.all(o),t(!1)},h=e=>{let t=[];e.target.value=="all"?t=n:t=n.filter(o=>o.image.contentfulMetadata.tags[0].name==e.target.value),p.current.innerHTML=`${e.target.value} Samples`,i(w(t))};return f("section",{className:"portfolio",children:[f("form",{children:[a("legend",{children:a("h2",{ref:p,className:"tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]",children:"All Samples"})}),a("label",{htmlFor:"tagName",children:"Select Category"}),f("select",{name:"tag",ref:r,children:[a("option",{value:"all",children:"All"}),T.map((e,t)=>a("option",{value:e,children:e},t))]})]}),a(R,{imageCollection:c})]})}export{F as default};
//# sourceMappingURL=PortfolioForm-4eb7c0c6.js.map
