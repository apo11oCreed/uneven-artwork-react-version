import Menu from "./Menu";

export default function Header(props) {
	console.log(props);
	const {siteName,page}=props;

	return (
		<header className="tw-container tw-mx-auto">
			{page=='/' &&
				<div id="titleAnimate" className="tw-text-black tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-bottom-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 md:tw-tracking-[1vw] tw-text-[7vw] md:tw-text-[7.2rem] tw-leading-none">{siteName}<span className="tw-block md:tw-text-[3.6rem]">Portfolio Site</span></div>
			}
			<Menu className="tw-w-full tw-container tw-mx-auto tw-main" />
		</header>
	);
}
