import { NavLink } from 'react-router-dom';

export default function Menu({ menuRef, className }) {
	return (
		<div ref={menuRef} className='nav-wrapper'>
			<h1 className='tw-font-bold'>
				Natalie Correia<span className='pipe tw-border-r-2 -tw-translate-x-[1px] tw-mx-[2rem]'></span>Uneven Artwork
			</h1>
			<hr />
			<nav className={className}>
				<ul>
					<li>
						<NavLink to={{ pathname: '/portfolio' }} activeClassName='tw-font-bold' className='tw-underline tw-whitespace-nowrap'>
							Portfolio
						</NavLink>
					</li>
					<li className='home-link'>
						<NavLink exact to={{ pathname: '/' }} icon='home-link' activeClassName='tw-font-bold' className='tw-justify-center'>
							<svg xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Link to homepage' width='16' height='16' fill='currentColor' className='bi bi-house-door-fill' viewBox='0 0 16 16'>
								<title>Home</title>
								<path d='M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z' />
							</svg>
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
		</div>
	);
}
