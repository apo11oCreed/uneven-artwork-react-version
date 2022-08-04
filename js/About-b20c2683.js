import{r as c}from"./react-vendor-65d21c8b.js";import{j as l,a as e}from"./index-bad383fa.js";import"./vendor-7e419946.js";function u({copyimage:t}){return l("div",{className:"tw-flex tw-flex-col sm:tw-flex-row tw-mb-[4rem] tw-border-b last-of-type:tw-border-b-0  tw-pb-[4rem]",children:[e("p",{className:"tw-w-full sm:tw-w-1/2 tw-mr-0 sm:tw-mr-[4rem] tw-mb-[2rem] sm:tw-mb-0",children:t.text.json.content[0].content[0].value}),e("img",{className:"tw-w-full sm:tw-w-1/2 tw-h-fit",src:t.media.url,alt:t.media.title})]})}function E(){const t={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},[m,i]=c.exports.useState([]);return c.exports.useEffect(()=>{const o=t.VITE_CONTENTFUL_SPACE_ID,s=t.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,p=`
			query aboutCopy {
				copyBaseCollection(where:{
					contentfulMetadata:{
						tags:{
							id_contains_some:"pAbout"
						}
					}
				}){
					items{
						title
						text(locale:"en-US"){
							json
						}
						media{
							url
							title
						}
					}
				}
			}
		`;let a=[];window.fetch(`https://graphql.contentful.com/content/v1/spaces/${o}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({query:p})}).then(n=>n.json()).then(({data:n,errors:r})=>{r&&console.error(r),a=n.copyBaseCollection.items,i(a)})},[]),l("section",{className:"about",children:[e("h2",{className:"tw-text-black tw-font-bold",children:"About Me"}),m.map((o,s)=>e(u,{copyimage:o},s))]})}export{E as default};
//# sourceMappingURL=About-b20c2683.js.map
