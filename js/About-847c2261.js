import{r as c}from"./react-vendor-65d21c8b.js";import{j as l,a as s}from"./index-8451f34c.js";import"./vendor-7e419946.js";function u({copyimage:t}){return l("div",{className:"tw-flex tw-flex-col sm:tw-flex-row tw-mb-[4rem] tw-border-b last-of-type:tw-border-b-0  tw-pb-[4rem]",children:[s("p",{className:"tw-w-full sm:tw-w-1/2 tw-mr-0 sm:tw-mr-[4rem] tw-mb-[2rem] sm:tw-mb-0",children:t.text.json.content[0].content[0].value}),s("img",{className:"tw-w-full sm:tw-w-1/2 tw-h-fit",src:t.media.url,alt:t.media.title})]})}function E(){const t={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},[i,m]=c.exports.useState([]);return c.exports.useEffect(()=>{const e=t.VITE_CONTENTFUL_SPACE_ID,o=t.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,p=`
			query aboutCopy {
				copyBaseCollection(where:{
					contentfulMetadata:{
						tags:{
							id_contains_some:"pAbout"
						}
					}
				}){
					items{
						id
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
		`;let a=[];window.fetch(`https://graphql.contentful.com/content/v1/spaces/${e}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({query:p})}).then(n=>n.json()).then(({data:n,errors:r})=>{r&&console.error(r),a=n.copyBaseCollection.items,m(a)})},[]),l("section",{className:"about",children:[s("h2",{className:"tw-text-black tw-font-bold",children:"About Me"}),i.sort((e,o)=>e.id-o.id).map((e,o)=>s(u,{copyimage:e},o))]})}export{E as default};
//# sourceMappingURL=About-847c2261.js.map
