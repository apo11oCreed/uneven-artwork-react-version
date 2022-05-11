import { NavLink } from "react-router-dom";

export default function Menu(props) {
	return (
		<nav className={props.className}>
			<ul>
				<li className="home-link">
					<NavLink exact to={{pathname:'/'}} icon="home-link" activeClassName="tw-font-bold" className="tw-underline tw-whitespace-nowrap">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to={{pathname:'/portfolio'}} activeClassName="tw-font-bold" className="tw-underline tw-whitespace-nowrap">
						Portfolio
					</NavLink>
				</li>
				<li>
					<NavLink to={{pathname:'/about'}} activeClassName="tw-font-bold" className="tw-underline tw-whitespace-nowrap">
						About Natalie
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
