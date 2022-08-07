import React, { Component } from 'react';

class News extends Component {
	render() {

		if (this.props.data) {
			var count = 0;
			var news = this.props.data.news.map(function (news) {
				count += 1;
				if (count <= 10) {
					return <div>
						<p className="date">{news.date}</p>
						<p className="title">{news.title}</p>
						<p className="content">{news.content}</p>
						<hr />
					</div>

				} else {
					return <div></div>
				}
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
