import{a as e,j as r,r as l}from"./vendor-1e2286d0.js";function w({copyimage:t}){return e("div",{className:"segment tw-w-full md:tw-w-[70rem] tw-border-b last-of-type:tw-border-b-0  tw-pb-[4rem] tw-mb-[4rem] tw-mx-auto tw-clear-both",children:r("div",{className:"tw-p-0 md:tw-pl-[2rem] md:tw-pr-[2rem] tw-inline-block",children:[e("div",{className:"tw-hidden md:tw-block tw-float-right",children:e("img",{className:"tw-rounded-lg tw-max-w-md tw-ml-4",src:t.media.url,alt:t.media.title})}),e("p",{className:"tw-mb-[2rem] md:tw-mb-0",children:t.text.json.content[0].content[0].value})]})})}function u(){const t={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},[i,m]=l.exports.useState([]);return l.exports.useEffect(()=>{const o=t.VITE_CONTENTFUL_SPACE_ID,n=t.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,d=`
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
		`;let a=[];window.fetch(`https://graphql.contentful.com/content/v1/spaces/${o}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({query:d})}).then(s=>s.json()).then(({data:s,errors:c})=>{c&&console.error(c),a=s.copyBaseCollection.items,m(a)})},[]),r("section",{className:"about",children:[e("h2",{className:"tw-text-black tw-text-center tw-font-bold",children:"About Me"}),i.sort((o,n)=>o.id-n.id).map((o,n)=>e(w,{copyimage:o},n))]})}export{u as default};
//# sourceMappingURL=About-dc16acf2.js.map
