import { NavLink } from 'react-router-dom';

export default function Menu({ menuRef, className }) {
	return (
		<nav ref={menuRef} className={className}>
			<h1 className='tw-font-bold'>Natalie Correia | Uneven Artwork</h1>
			<hr />
			<ul>
				<li>
					<NavLink to={{ pathname: '/portfolio' }} activeClassName='tw-font-bold' className='tw-underline tw-whitespace-nowrap'>
						Portfolio
					</NavLink>
				</li>
				<li className='home-link'>
					<NavLink exact to={{ pathname: '/' }} icon='home-link' activeClassName='tw-font-bold' className='tw-underline tw-whitespace-nowrap'>
						<span className='sr'>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={{ pathname: '/about' }} activeClassName='tw-font-bold' className='tw-underline tw-whitespace-nowrap'>
						About Me
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
