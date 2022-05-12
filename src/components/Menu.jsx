import { NavLink } from "react-router-dom";

export default function Menu(props) {
	return (
		<nav className={props.className}>
			<ul>
				<li>
					<NavLink to={{pathname:'/portfolio'}} activeClassName="tw-font-bold" className="tw-underline tw-whitespace-nowrap">
						Portfolio
					</NavLink>
				</li>
				<li className="home-link">
					<NavLink exact to={{pathname:'/'}} icon="home-link" activeClassName="tw-font-bold" className="tw-underline tw-whitespace-nowrap">
						<span className="sr">Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={{pathname:'/about'}} activeClassName="tw-font-bold" className="tw-underline tw-whitespace-nowrap">
						About Me
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
