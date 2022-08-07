import React, { Component } from 'react';

class Publications extends Component {
	render() {

		if (this.props.data) {



			var publications = this.props.data.publications.map(function (publication) {

				console.log(publication);

				var extraInfos = "";

				if (publication.extraInformation != null) {
					extraInfos = publication.extraInformation.map(function (extraInfo) {
						return <div className="extraInfo" key={extraInfo.link}><a href={extraInfo.link}>{extraInfo.information}</a></div>
					})
				}

				console.log(extraInfos);

				return <li>
					<div key={publication.authors}>{publication.authors} <a href={publication.link}>{publication.title}</a>
						<i> {publication.paper}</i>
						<div className="extraInfoPanel">
							{extraInfos}
						</div>
					</div></li>
			})
			console.log(publications);
		}

		return (
			<section id="publications">

				<div className="row publication">
					<div className="three columns header-col">
						<h1><span>Publications</span></h1>
					</div>

					<div className="nine columns main-col">
						<div className="row item">
							<div>
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
