import React, { Component } from 'react';
import { Icon } from '@iconify/react';

class About extends Component {
	render() {

		if (this.props.data) {
			var profilepic = "images/" + this.props.data.image;
			var resumeDownload = this.props.data.resumedownload;
		}

		return (
			<section id="about">

				<div className="about">
					<div className="about-image">
						<img className="profile-pic" src={profilepic} alt="Waldir Miron Berbel Filho" />
					</div>
					<div className="about-text">
						<div className="about-uwf-image">
							<img className="uwf-pic" src="../images/UWFLogo.png" alt="UWF" />
							<h2>
								People
							</h2>
						</div>
						<h3>Dr. Waldir Miron (PI)</h3>
						<ul className="social-links">
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
						</ul>

						<p>Currently, I am an Assistant Professor in the Biology department at the University of West Florida.</p>
						<p>Growing up in a Tropical city in Brazil, I had the privilege to spend most of my childhood snorkeling and fishing in coral reefs.
							Ever since, <b>🐟🐠 fishes 🐡🦈 control my mind</b>! It was a inevitable move to me to become a fish evolutionary biologist, with particular interest on understanding how
							fish came to be the amazing creatures they are!
							See <a className="smoothscroll" href="#research">Research</a> for more details on the topics I am interested on!</p>
						<p>On more personal notes, I consider myself as an 'aquatic creature'. Anything that surrounds the ocean, rivers, lakes, and creeks sounds good to me!
							I like diving, swimming, or just relaxing by the water. I am also a football/soccer fan and a frustrated table tennis player!</p>

						{/* <div className="row">
							<div className="download">
								<p>
									<a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
								</p>
							</div>
		</div>*/}
					</div>
				</div>

			</section>
		);
	}
}

export default About;
