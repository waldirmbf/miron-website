import React, { Component } from 'react';

class Publications extends Component {
	render() {

		if (this.props.data) {
			console.log(this.props.data.publications);
			var publications = this.props.data.publications.map(function (publication) {
				return <li><div key={publication.authors}>{publication.authors} <a href={publication.link}>{publication.title}</a> <i>{publication.paper}</i></div></li>
			})
		}

		return (
			<section id="publications">

				<div className="row publication">
					<div className="three columns header-col">
						<h1><span>Publications</span></h1>
					</div>

					<div className="nine columns main-col">
						<div className="row item">
							<div className="twelve columns">
								<ol reversed>
									{publications}
								</ol>
							</div>
						</div>
					</div>
				</div>

			</section>
		);
	}
}

export default Publications;
