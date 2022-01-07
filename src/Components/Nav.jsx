function Nav() {
	return (
		<nav className="nav">
			<img src="./logo.png" alt="" />
			<ul>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li className="nav__ctr">
					<a href="#hire">Hire me</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
