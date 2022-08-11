import{r as i,R as y}from"./react-vendor-65d21c8b.js";import{a as e,F as C,L as I,_ as N,j as E}from"./index-67856ed2.js";import"./vendor-7e419946.js";const A=y.lazy(()=>N(()=>import("./Artwork-ab9efac1.js"),["js/Artwork-ab9efac1.js","js/react-vendor-65d21c8b.js","js/index-67856ed2.js","css/index-f8bda7c7.css","js/vendor-7e419946.js"]));function L({imageCollection:c}){return e(C,{children:e("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:c.map((u,s)=>e(i.exports.Suspense,{fallback:e(I,{}),children:e(A,{item:u,index:s})},s))})})}function v(){const c={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},[u,s]=i.exports.useState([]),[_,h]=i.exports.useState([]),[F,T]=i.exports.useState(!0);i.exports.useEffect(()=>{const n=c.VITE_CONTENTFUL_SPACE_ID,l=c.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,g=`
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
	`;let a=[],m=[];window.fetch(`https://graphql.contentful.com/content/v1/spaces/${n}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({query:g})}).then(t=>t.json()).then(({data:t,errors:r})=>{r&&console.error(r),a=t.imageCollection.items;const p=a.map(f=>f.image.url);m=t.assetCollection.items;const w=m.map(f=>f.contentfulMetadata.tags[0].name);s(a),h([...new Set(w)]),S(p,T)});const d=document.getElementById("tagName"),o=document.getElementById("galleryTitle");d.addEventListener("change",t=>{let r=[];t.target.value=="all"?r=a:r=a.filter(p=>p.image.contentfulMetadata.tags[0].name==t.target.value),o.innerHTML=`${t.target.value} Samples`,s(r)})},[]);const S=async(n,l)=>{const g=await n.map(a=>new Promise((m,d)=>{const o=new Image;o.src=a,o.onload=m(),o.onerror=d()}));await Promise.all(g),l(!1)};return E("section",{className:"gallery",children:[E("form",{children:[e("legend",{children:e("h2",{id:"galleryTitle",className:"tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]",children:"All Samples"})}),e("label",{htmlFor:"tagName",children:"Select Category"}),E("select",{name:"tag",id:"tagName",children:[e("option",{value:"all",children:"All"}),_.map((n,l)=>e("option",{value:n,children:n},l))]})]}),e(L,{imageCollection:u})]})}export{v as default};
//# sourceMappingURL=GalleryForm-1e248701.js.map
