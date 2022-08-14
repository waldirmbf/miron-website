import React, { Component } from 'react';

class News extends Component {
	render() {

		return (
			<section id="news" >
				<div className="text-container">
					<div className="row">
						<h1>News</h1>
						<div>
							<p className="date">July 8th, 2022</p>
							<p className="title">Breaking news!</p>
							<p className="content">Lorem ipsum dolor sit amet</p>
							<hr />
						</div>
						<div>
							<p className="date">July 8th, 2022</p>
							<p className="title">Breaking news!</p>
							<p className="content">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
							<hr />
						</div>
						<div>
							<p className="date">July 8th, 2022</p>
							<p className="title">Breaking news!</p>
							<p className="content">Lorem ipsum dolor sit amet</p>
							<hr />
						</div>
					</div>
				</div>
			</section >
		);
	}
}

export default News;
