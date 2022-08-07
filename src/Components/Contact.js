import React, { Component } from 'react';

class Contact extends Component {
	render() {

		if (this.props.data) {
			var name = this.props.data.name;
			var street = this.props.data.address.street;
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			var zip = this.props.data.address.zip;
			var complement = this.props.data.address.complement;
			var phone = this.props.data.phone;
			var email = this.props.data.email;
		}

		return (
			<section id="contact">

				<div className="contact-details">
					<h1>Contact Details</h1>
					<p className="address">
						<span>{name}</span><br />
						<span>{street}<br />
							{complement}<br />
							{city} {state}, {zip}
						</span><br />
						<span>{phone}</span><br />
						<span>{email}</span>
					</p>
				</div>
			</section>
		);
	}
}

export default Contact;
