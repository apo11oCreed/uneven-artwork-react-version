import{r as s,R as w}from"./react-vendor-65d21c8b.js";import{a as e,F as y,L as I,_ as N,j as _}from"./index-dfaea8ed.js";import"./vendor-7e419946.js";const A=w.lazy(()=>N(()=>import("./Artwork-b350d4ac.js"),["js/Artwork-b350d4ac.js","js/react-vendor-65d21c8b.js","js/index-dfaea8ed.js","css/index-be970a2a.css","js/vendor-7e419946.js"]));function L(i){const{imageCollection:g}=i;return e(y,{children:e("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:g.map((c,m)=>e(s.exports.Suspense,{fallback:e(I,{}),children:e(A,{item:c,index:m})},m))})})}function v(){const i={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},[g,c]=s.exports.useState([]),[m,h]=s.exports.useState([]),[F,T]=s.exports.useState(!0);s.exports.useEffect(()=>{const n=i.VITE_CONTENTFUL_SPACE_ID,r=i.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,d=`
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
	`;let a=[],u=[];window.fetch(`https://graphql.contentful.com/content/v1/spaces/${n}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({query:d})}).then(t=>t.json()).then(({data:t,errors:l})=>{l&&console.error(l),a=t.imageCollection.items;const f=a.map(E=>E.image.url);u=t.assetCollection.items;const S=u.map(E=>E.contentfulMetadata.tags[0].name);c(a),h([...new Set(S)]),C(f,T)});const p=document.getElementById("tagName"),o=document.getElementById("galleryTitle");p.addEventListener("change",t=>{let l=[];t.target.value=="all"?l=a:l=a.filter(f=>f.image.contentfulMetadata.tags[0].name==t.target.value),o.innerHTML=`${t.target.value} Samples`,c(l)})},[]);const C=async(n,r)=>{const d=await n.map(a=>new Promise((u,p)=>{const o=new Image;o.src=a,o.onload=u(),o.onerror=p()}));await Promise.all(d),r(!1)};return _("section",{className:"gallery",children:[_("form",{children:[e("legend",{children:e("h2",{id:"galleryTitle",className:"tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]",children:"Portfolio : All Samples"})}),e("label",{htmlFor:"tagName",children:"Select Category"}),_("select",{name:"tag",id:"tagName",children:[e("option",{value:"all",children:"All"}),m.map((n,r)=>e("option",{value:n,children:n},r))]})]}),e(L,{imageCollection:g})]})}export{v as default};
//# sourceMappingURL=GalleryForm-14830318.js.map
