import{r as c}from"./react-vendor-ceb58989.js";import{j as l,a as s}from"./vendor-f11b8f9a.js";function w({copyimage:t}){return l("div",{className:"tw-flex tw-flex-col sm:tw-flex-row tw-mb-[4rem] tw-border-b last-of-type:tw-border-b-0  tw-pb-[4rem]",children:[s("p",{className:"tw-w-full sm:tw-w-1/2 tw-mr-0 sm:tw-mr-[4rem] tw-mb-[2rem] sm:tw-mb-0",children:t.text.json.content[0].content[0].value}),s("img",{className:"tw-w-full sm:tw-w-1/2 tw-h-fit",src:t.media.url,alt:t.media.title})]})}function f(){const t={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},[i,m]=c.exports.useState([]);return c.exports.useEffect(()=>{const e=t.VITE_CONTENTFUL_SPACE_ID,o=t.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,u=`
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
		`;let a=[];window.fetch(`https://graphql.contentful.com/content/v1/spaces/${e}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({query:u})}).then(n=>n.json()).then(({data:n,errors:r})=>{r&&console.error(r),a=n.copyBaseCollection.items,m(a)})},[]),l("section",{className:"about",children:[s("h2",{className:"tw-text-black tw-font-bold",children:"About Me"}),i.sort((e,o)=>e.id-o.id).map((e,o)=>s(w,{copyimage:e},o))]})}export{f as default};
//# sourceMappingURL=About-70c1ded4.js.map
