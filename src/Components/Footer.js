import React, { Component } from 'react';
import { Icon } from '@iconify/react';

class Footer extends Component {
	render() {

		return (
			<footer>

				<div className="row">
					<div className="twelve columns">
						<ul className="social-links">
							<li key="Google Scholar">
								<a href="https://scholar.google.com/citations?user=30a5mKUAAAAJ&hl=en&oi=sra">
									<Icon icon="academicons:google-scholar-square" />
								</a>
							</li>
							<li key="Twitter">
								<a href="http://twitter.com/BerbelFilho">
									<Icon icon="akar-icons:twitter-fill" />

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
						</ul>

						<ul className="copyright">
							<li>&copy; Copyright 2022   -   Waldir M. Berbel-Filho</li>
						</ul>

					</div>
					<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
				</div>
			</footer>
		);
	}
}

export default Footer;
