import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import preval from 'preval.macro';

class Footer extends Component {



	render() {

		return (
			<footer>

				<div className="row">
					<div className="twelve columns">
						{/* <ul className="social-links">
							<li key="UWF">
								<a href="https://uwf.edu/hmcse/departments/biology/faculty/dr-waldir-miron.html" target="_blank">
									<img src="../images/UWFLogo.png" alt="UWF" />
								</a>
							</li>
							<li key="Google Scholar">
								<a href="https://scholar.google.com/citations?user=30a5mKUAAAAJ&hl=en&oi=sra" target="_blank">
									<Icon icon="academicons:google-scholar-square" />
								</a>
							</li>
							<li key="ResearchGate" >
								<a href="https://www.researchgate.net/profile/Waldir-Berbel-Filho" target="_blank">
									<Icon icon="simple-icons:researchgate" />
								</a>
							</li>
							<li key="Publons">
								<a href="https://publons.com/wos-op/researcher/1417914/waldir-m-berbel-filho" target="_blank">
									<Icon icon="academicons:publons-square" />
								</a>
							</li>
							<li key="GitHub">
								<a href="http://github.com/waldirmbf" target="_blank">
									<Icon icon="akar-icons:github-fill" />
								</a>
							</li>
							<li key="OrcID">
								<a href="https://orcid.org/0000-0001-6991-4685" target="_blank">
									<Icon icon="academicons:orcid" />
								</a>
							</li>
							<li key="Twitter">
								<a href="http://twitter.com/BerbelFilho" target="_blank">
									<Icon icon="akar-icons:twitter-fill" />
								</a>
							</li>
							<li key="Email">
								<a href="mailto:WaldirMiron@uwf.edu" target="_blank">
									<Icon icon="carbon:email" />
								</a>
							</li>
						</ul> */}

						<ul className="copyright">
							<li>&copy; Copyright 2024</li>
							<li>Waldir M. Berbel-Filho</li>
							<li>Last Updated: {preval`module.exports = new Date().toLocaleString();`}</li>
						</ul>

					</div>
					<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
				</div>
			</footer >
		);
	}
}

export default Footer;
