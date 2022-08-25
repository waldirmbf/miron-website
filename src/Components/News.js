import React, { Component } from 'react';

class News extends Component {
	render() {

		return (
			<section id="news" >
				<div className="text-container">
					<div className="row">
						<h1>News</h1>
						<div>
							<p className="date"> August 21st, 2022</p>
							<p className="title">Welcome to my new website!</p>
							<p className="content"> I am excited to launch my new webiste! More improvements to come (working now on a photo gallery). My previous <a href="https://berbelfilho.wixsite.com/home" target="_blank">webiste</a> will be discontinued soon.</p>
							<hr />
						</div>
						<div>
							<p className="date">August 17th, 2022</p>
							<p className="title">New paper accepted at Molecular Phylogenetics and Evolution!</p>
							<p className="content">Our work on <i>Kryptolebias</i> phylogenomics, introgression and mito-nuclear discordances has been accepted at <a href="https://www.sciencedirect.com/journal/molecular-phylogenetics-and-evolution" target="_blank"> Molecular Phylogenetics and Evolution!</a> Very excting times!</p> 
							<hr />
						</div>
						<div>
							<p className="date">August 6th, 2022</p>
							<p className="title">New paper accepted at Epigenetics!</p>
							<p className="content">Our work on the DNA methylation patterns of parental <i>Kryptolebias</i> and their hybrid is now accepted at <a href="https://www.tandfonline.com/journals/kepi20" target="_blank">Epigenetics</a>. More soon!</p> 
							<hr />
						</div>
					</div>
				</div>
			</section >
		);
	}
}

export default News;
