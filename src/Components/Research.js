import React, { Component } from 'react';

class Research extends Component {
	render() {

		if (this.props.data) {
			var research = this.props.data.researches.map(function (research) {
				var projectImage = 'images/research/' + research.image;
				return <div key={research.title}>
					<img alt={research.title} src={projectImage} />
					<h2>{research.title}</h2>
					<p>{research.description}</p>
				</div>
			})
		}

		return (
			<section id="research">

				<div className="row">

					<div>

						<h1>Research</h1>
						<div className="research-content">
							<div key="The sex(y) life of fishes">
								<img alt="The sex(y) life of fishes" src="images/research/1.png" />
								<h2>The sex(y) life of fishes</h2>
								<p>Reproduction is the ultimate goal of biological entities. One of my main interests is to understand the factors leading to the diversity of
									reproductive and mating systems/strategies, as well as the evolutionary consequences of those once they evolved. For that,
									I have been focusing my research on organisms with <b>unusual</b> reproductive systems.</p>


								<p>One line of my work has been using the unique genus killifish genus <b><i>Kryptolebias</i></b> to understand the causes and consequences of
									the evolution of self-fertilization (selfing) in animals. <i>Kryptolebias</i> provides an exceptional opportunity to understand why, when,
									and how and when selfing evolved, as well its ecological, phenotypic, and implications.
								</p>

								<p>How and why asexuality emerges (and it is maintained) from sexual ancestors is still an intriguing question. All asexual vertebrates have a
									hybrid origin. My postdoctoral research investigates the links between <b> hybridization and asexuality</b> in the Amazon Molly (<i>P. formosa</i>)
									system. We are currently using a combination of cell biology methods (to investigate deviations from meiosis), quantitative
									genetic analysis (QTL) from whole-genome sequencing data, phenotypic and experimental data aiming to understand how asexuality emerged
									on this system.</p>
								<p>Finally, I recently developed an interest in understading how variation in gamete cells (sperm in particular), can contribute to population/species
									differentiation. Taking advantage of the many livebearer species
									available at <a href="https://international-stock-center-for-livebearing-fishes.oucreate.com/blog/">International Stock Center for Livebearing Fishes</a>,
									we are testing several hypotheses regarding the effects of different environmental stressors and reproductive parameters on sperm variation
									across different poecillid species. </p>


							</div>
						</div>
						<div className="research-content">
							<div key="Phylogenetics, population genetics, and hybridization">
								<img alt="Phylogenetics, population genetics, and hybridization" src="images/research/2.png" />
								<h2>Phylogenetics, population genetics, and hybridization</h2>
								<p>Another area of my research revolves under the overlap between phylogenetics (the study of the relationships among species), population genetics (the genetic basis of the differentiation between populations), and the influence of hybridization and introgression have on species relationships and evolution.</p>

								<p>Again,  <i> Kryptolebias</i> provides a fertile ground for this field. My research has revealed extensive hybridization in the genus, sometimes masking the true relationships in the genus. Remarkably, many of the introgression events involved the highly-selfing species <i> K. hermaphroditus</i>. I am currently studying how potential anthropogenic factors (e.g., pollution) may have influenced the extent of those hybridizations across natural populations in Brazil. </p>
							</div>
						</div>
						<div className="research-content">
							<div key="Plasticity in clonal organisms">
								<img alt="Plasticity in clonal organisms" src="images/research/3.png" />
								<h2>Plasticity in clonal organisms</h2>
								<p>Given the often-clonal nature of the organisms I have been working with, I have the opportunity to ask and experimentally test questions regarding the mechanistic basis of phenotypic plasticity, both within and between generations.
									I have been using both <i>Kryptolebias</i> and <i>P. formosa</i> to investigate several questions related to sources of epigenetic variation.
									I am particularly interested in evaluating the degree of autonomy of DNA methylation variation from its genomic background.
									I am also interested in the extent of heritability of epigenetic variation, particularly how gamete-transmitted epialleles can underlie parental effects.</p>
							</div>
						</div>
						<div className="research-content">
							<div key="Development of epigenetics markers">
								<img alt="Development of epigenetics markers" src="images/research/4.png" />
								<h2>Development of epigenetics markers</h2>
								<p>The identification of the degree autonomy between genomic and DNA methylation has the potential for identifying epigenetic markers which are exclusively environmentally-induced.
									Epigenetic markers are applicable to a wide range of fields, and can be used to indirectly (and sometimes non-invasively) infer the environmental state of a particular sample based on the methylation status of its epigenetic marker.
									Taking advantage of the clonal nature of both <i>Kryptolebias</i> and <i>P. formosa</i> and its multiple clonal lineages, I am interested to develop epigenetic (DNA methylation) markers, particularly in relation to pollution levels within the range found in natural populations.
									This research holds the potential to provide practical molecular tools that can be used to assess different environmental stressors based on the methylation status of candidate genomic regions. </p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Research;
