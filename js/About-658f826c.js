import{r as s,a as o,j as m}from"./vendor-1e2286d0.js";function p({copyimage:r}){const t=s.exports.useRef(),c=new RegExp("(.*?)[.?!]");return s.exports.useEffect(()=>{let n=c.exec(t.current.innerHTML),e;if(!t.current.children.length)return e=t.current.innerHTML.replace(/(.*?)[.?!]/,'<strong class="first-sentence">'+n[0]+"</strong>"),t.current.innerHTML=e},[]),o("div",{className:"segment tw-w-full md:tw-w-[70rem] tw-border-b last-of-type:tw-border-b-0  tw-pb-[4rem] tw-mb-[4rem] tw-mx-auto tw-clear-both",children:m("div",{className:"tw-p-0 md:tw-pl-[2rem] md:tw-pr-[2rem] tw-inline-block",children:[o("div",{className:"tw-hidden md:tw-block tw-float-right",children:o("img",{className:"tw-rounded-lg tw-max-w-md tw-ml-6 tw-mb-6",src:r.media.url,alt:r.media.title})}),o("p",{ref:t,className:"tw-pl-[2rem] tw-pt-[4rem] tw-mb-[2rem] md:tw-mb-0",children:r.text.json.content[0].content[0].value})]})})}function w(){const r={VITE_CONTENTFUL_SPACE_ID:"bydtte43696p",VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN:"o_0M11CmFcIeL6DYMznuZfs1JS-ptr6FDdSwTP7p7SY",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},[t,c]=s.exports.useState([]);return s.exports.useEffect(()=>{const n=r.VITE_CONTENTFUL_SPACE_ID,e=r.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,d=`
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
		`;let l=[];window.fetch(`https://graphql.contentful.com/content/v1/spaces/${n}/environments/master`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({query:d})}).then(a=>a.json()).then(({data:a,errors:i})=>{i&&console.error(i),l=a.copyBaseCollection.items,c(l)})},[]),m("section",{className:"about",children:[o("h2",{className:"tw-text-black tw-text-center tw-font-bold",children:"About Me"}),t.sort((n,e)=>n.id-e.id).map((n,e)=>o(p,{copyimage:n},e))]})}export{w as default};
//# sourceMappingURL=About-658f826c.js.map
