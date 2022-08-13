import React, { Component } from 'react';

class Publications extends Component {

	render() {

		if (this.props.data) {

			var otherPublications = this.props.data.otherPublications.map(function (otherPublication) {

				const textArray = otherPublication.authors.split("Berbel-Filho WM");
				return <li>
					<div key={otherPublication.authors}>
						<span>
							{textArray.map((item, index) => (
								<>
									{item}
									{index !== textArray.length - 1 && (
										<b>{"Berbel-Filho WM"}</b>
									)}
								</>
							))}
						</span>
						<a href={otherPublication.link}>{otherPublication.title}</a>
						<i> {otherPublication.paper}</i>
					</div></li>
			})

			var publications = this.props.data.publications.map(function (publication) {

				var extraInfos = "";
				const textArray = publication.authors.split("Berbel-Filho WM");

				if (publication.extraInformation != null) {
					extraInfos = publication.extraInformation.map(function (extraInfo) {
						return <div className="extraInfo" key={extraInfo.link}><a href={extraInfo.link}>{extraInfo.information}</a></div>
					})
				}

				return <li>
					<div key={publication.authors}>
						<span>
							{textArray.map((item, index) => (
								<>
									{item}
									{index !== textArray.length - 1 && (
										<b>{"Berbel-Filho WM"}</b>
									)}
								</>
							))}
						</span>
						<a href={publication.link}>{publication.title}</a>
						<i> {publication.paper}</i>
						<div className="extraInfoPanel">
							{extraInfos}
						</div>
					</div></li>
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
							<div>
								<ol reversed>
									{publications}
								</ol>
							</div>
						</div>
					</div>

					<div className="three columns header-col">
						<h1><span>Other Publications</span></h1>
					</div>

					<div className="nine columns main-col">
						<div className="row item">
							<div>
								<ol reversed>
									{otherPublications}
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
