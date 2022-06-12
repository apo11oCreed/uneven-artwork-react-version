import Menu from "./Menu";

export default function Header(props) {
	return (
		<header className="tw-container tw-mx-auto">
			<h1 className="tw-text-black tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-bottom-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 md:tw-tracking-[1vw] tw-text-[7vw] md:tw-text-[7.2rem] tw-leading-none">{props.siteName}<span className="tw-block md:tw-text-[3.6rem]">Portfolio Site</span></h1>
			<Menu className="tw-w-full tw-container tw-mx-auto tw-main" />
		</header>
	);
}
