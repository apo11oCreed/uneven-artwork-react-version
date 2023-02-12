import React, { useEffect, useRef } from 'react';

export default function CopySingleImage({copyimage}) {

	const paragraphText = useRef();
	const firstSentenceRegex=new RegExp('(.*?)[.?!]')

	useEffect(() => {
		let firstSentence=firstSentenceRegex.exec(paragraphText.current.innerHTML),
		firstSentenceReplaced;

		if(paragraphText.current.children.length){
			return;
		}
		firstSentenceReplaced = paragraphText.current.innerHTML.replace(/(.*?)[.?!]/, '<strong class="first-sentence">' + firstSentence[0] + '</strong>');
		return paragraphText.current.innerHTML=firstSentenceReplaced;
		
	},[]);

	return (

		//.*\. regex to target the first sentence in the paragraphs
		<div className='segment tw-w-full md:tw-w-[70rem] tw-border-b last-of-type:tw-border-b-0  tw-pb-[4rem] tw-mb-[4rem] tw-mx-auto tw-clear-both'>
			<div className="tw-p-0 md:tw-pl-[2rem] md:tw-pr-[2rem] tw-inline-block">

			<div className="tw-hidden md:tw-block tw-float-right"><img className='tw-rounded-lg tw-max-w-md tw-ml-6 tw-mb-6' src={copyimage.media.url} alt={copyimage.media.title} /></div>
			<p ref={paragraphText} className='tw-pl-[2rem] tw-pt-[4rem] tw-mb-[2rem] md:tw-mb-0'>{copyimage.text.json.content[0].content[0].value}</p>
			</div>
		</div>
	);
}
