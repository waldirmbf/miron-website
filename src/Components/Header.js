import React, { Component } from 'react';
import { Icon } from '@iconify/react';


class Header extends Component {
	render() {

		if (this.props.data) {
			var name = this.props.data.name;
		}

		return (
			<header id="home">

				<nav id="nav-wrap">

					<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
					<a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

					<ul id="nav" className="nav">
						<li className="current"><a className="smoothscroll" href="#home">Home</a></li>
						<li><a className="smoothscroll" href="#about">About</a></li>
						<li><a className="smoothscroll" href="#research">Research</a></li>
						<li><a className="smoothscroll" href="#publications">Publications</a></li>
						<li><a className="smoothscroll" href="#news">News</a></li>
						<li><a className="smoothscroll" href="#contact">Contact</a></li>
					</ul>

				</nav>

				<div className="row banner">
					<div className="banner-text">
						<h1 className="responsive-headline">Hi there!</h1>
						<h3>My name is {name} and I'm excited to welcome you to my website!</h3>
						<hr />
						<ul className="social">
							<li key="Google Scholar">
								<a href="https://scholar.google.com/citations?user=30a5mKUAAAAJ&hl=en&oi=sra">
									<Icon icon="academicons:google-scholar-square" />
								</a>
							</li>
							<li key="ResearchGate" >
								<a href="https://www.researchgate.net/profile/Waldir-Berbel-Filho">
									<Icon icon="simple-icons:researchgate" />
								</a>
							</li>
							<li key="Publons">
								<a href="https://publons.com/wos-op/researcher/1417914/waldir-m-berbel-filho">
									<Icon icon="academicons:publons-square" />
								</a>
							</li>
							<li key="GitHub">
								<a href="http://github.com/waldirmbf">
									<Icon icon="akar-icons:github-fill" />
								</a>
							</li>
							<li key="OrcID">
								<a href="https://orcid.org/0000-0001-6991-4685">
									<Icon icon="academicons:orcid" />
								</a>
							</li>
							<li key="Twitter">
								<a href="http://twitter.com/BerbelFilho">
									<Icon icon="akar-icons:twitter-fill" />

								</a>
							</li>
							<li key="Email">
								<a href="mailto:waldirmbf@gmail.com">
									<Icon icon="carbon:email" />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<p className="scrolldown">
					<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
				</p>

			</header>
		);
	}
}

export default Header;
