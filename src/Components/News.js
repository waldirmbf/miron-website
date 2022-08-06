import React, { Component } from 'react';

class News extends Component {
	render() {

		if (this.props.data) {
			var news = this.props.data.news.map(function (news) {
				return <div>
					<p>{news.title}</p>
					<p>{news.description}</p>
				</div>
			})
		}

		return (
			<section id="news" >
				<div className="text-container">
					<div className="row">
						<h1>News</h1>
						{news}
					</div>
				</div>
			</section >
		);
	}
}

export default News;
