import React, { Component } from 'react';

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
						<h2>About Me</h2>

						<p>Thanks for visiting my website! I have a broad interest in evolutionary biology, being particularly fascinated by the mechanisms
							and processes leading to biodiversity diversification.</p>
						<p>Currently, I am postdoctoral researcher at the <a href="https://www.ou.edu/cas/biology" target="_blank">Biology Department from the University of
							Oklahoma</a>, being mentoring by <a href="https://ingoschlupp.com/" target="_blank">Dr. Ingo Schlupp</a>.</p>
						<p>Growing up in a Tropical city in Brazil, I had the privilege to spend most of my childhood snorkeling and fishing in coral reefs.
							Ever since, <b>🐟🐠 fishes 🐡🦈 control my mind</b>! It was a inevitable move to me to become a fish evolutionary biologist, with particular interest on understanding how
							fish came to be the amazing creatures they are!
							See <a className="smoothscroll" href="#research">Research</a> for more details on the topics I am interested on!</p>
						<p>On more personal notes, I consider myself as an 'aquatic creature'. Anything that surrounds the ocean, rivers, lakes and creeks sounds good to me!
							I like diving, swimming, or just relaxing by the water. I am also a football/soccer fan and a frustrated table tennis player!</p>

						<div className="row">
							<div className="download">
								<p>
									<a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
								</p>
							</div>
						</div>
					</div>
				</div>

			</section>
		);
	}
}

export default About;
