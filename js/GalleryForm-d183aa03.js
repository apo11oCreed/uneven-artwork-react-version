import{r as i,R as w}from"./vendor-abfadf58.js";import{a as e,F as y,L as I,_ as N,j as _}from"./index-34350103.js";const A=w.lazy(()=>N(()=>import("./Artwork-4362df20.js"),["js/Artwork-4362df20.js","js/vendor-abfadf58.js","js/index-34350103.js","css/index-be970a2a.css"]));function L(c){const{imageCollection:g}=c;return e(y,{children:e("ul",{className:"tw-flex tw-flex-wrap tw-justify-between",children:g.map((m,o)=>(console.log(o),e(i.exports.Suspense,{fallback:e(I,{}),children:e(A,{item:m,index:o},o)})))})})}function v(){const c={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},[g,m]=i.exports.useState([]),[o,h]=i.exports.useState([]),[F,T]=i.exports.useState(!0);i.exports.useEffect(()=>{const n=c.VITE_CONTENTFUL_SPACE_ID,s=c.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,d=`
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
	`;let a=[],u=[];window.fetch(`https://graphql.contentful.com/content/v1/spaces/${n}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({query:d})}).then(t=>t.json()).then(({data:t,errors:l})=>{l&&console.error(l),a=t.imageCollection.items;const f=a.map(E=>E.image.url);u=t.assetCollection.items;const S=u.map(E=>E.contentfulMetadata.tags[0].name);m(a),h([...new Set(S)]),C(f,T)});const p=document.getElementById("tagName"),r=document.getElementById("galleryTitle");p.addEventListener("change",t=>{let l=[];t.target.value=="all"?l=a:l=a.filter(f=>f.image.contentfulMetadata.tags[0].name==t.target.value),r.innerHTML=`${t.target.value} Samples`,m(l)})},[]);const C=async(n,s)=>{const d=await n.map(a=>new Promise((u,p)=>{const r=new Image;r.src=a,r.onload=u(),r.onerror=p()}));await Promise.all(d),s(!1)};return _("section",{className:"gallery",children:[_("form",{children:[e("legend",{children:e("h2",{id:"galleryTitle",className:"tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]",children:"Portfolio : All Samples"})}),e("label",{htmlFor:"tagName",children:"Select Category"}),_("select",{name:"tag",id:"tagName",children:[e("option",{value:"all",children:"All"}),o.map((n,s)=>e("option",{value:n,children:n},s))]})]}),e(L,{imageCollection:g})]})}export{v as default};
//# sourceMappingURL=GalleryForm-d183aa03.js.map
