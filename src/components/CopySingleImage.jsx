export default function CopySingleImage({copyimage}) {

	return (
		<div className='tw-flex tw-flex-col sm:tw-flex-row tw-mb-[4rem] tw-border-b last-of-type:tw-border-b-0  tw-pb-[4rem]'>
			<p className='tw-w-full sm:tw-w-1/2 tw-mr-0 sm:tw-mr-[4rem] tw-mb-[2rem] sm:tw-mb-0'>{copyimage.text.json.content[0].content[0].value}</p>
			<img className='tw-w-full sm:tw-w-1/2 tw-h-fit' src={copyimage.media.url} alt={copyimage.media.title} />
		</div>
	);
}
