import React, { Component } from 'react';

class About extends Component {
	render() {

		if (this.props.data) {
			var name = this.props.data.name;
			var profilepic = "images/" + this.props.data.image;
			var bio1 = this.props.data.bio1;
			var bio2 = this.props.data.bio2;
			var bio3 = this.props.data.bio3;
			var bio4 = this.props.data.bio4;
			var street = this.props.data.address.street;
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			var zip = this.props.data.address.zip;
			var phone = this.props.data.phone;
			var email = this.props.data.email;
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

						<p>{bio1}</p>
						<p>{bio2}</p>
						<p>{bio3}</p>
						<p>{bio4}</p>
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
