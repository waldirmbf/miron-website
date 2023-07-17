import React, { Component } from 'react';

class News extends Component {
	render() {

		return (
			<section id="news" >
				<div className="text-container">
					<div className="row">
						<h1>News</h1>
						<div>
							<p className="date"> July 17 2023</p>
							<p className="title"> Two pieces of good news! </p>
							<p className="content"> Two pieces of good news at once! First, our study (lead by Dr. Frederic Fyon) on the emergence of asexuality via selection in a hybrid context was accepted in Evolution. More on that soon!</p>
							<p className="content"> Also, I was awarded a small-research grant by <a href="https://fsbi.org.uk/" target="_blank">FSBI</a> to study poecillds reproductive traits in Brazil!!! Exciting fieldwork and data to come!</p>
							<hr />
							</div>
						<div>
							<p className="date"> June 21-25, 2023</p>
							<p className="title"> Schlupp lab goes to Albuquerque for Evolution 2023. </p>
							<p className="content"> We had a great time at Evolution 2023 in Albuquerque. I presented a poster on sperm evolution in poecillids, and received great feedback! I am currently applying for funds to collect more sperm data from other poeciliid species. Please, get in contact in case you have some poecillids in your lab.</p>
							<img alt="The sex(y) life of fishes" src="images/SchluppLab_Evo2023.jpeg" />
							<hr />
							</div>
						<div>
							<p className="date"> March 06th, 2023</p>
							<p className="title"> Fourth episode of book club on "The evolution of Beauty" available on Youtube! </p>
							<p className="content"> Our Youtube channel <a href="https://www.youtube.com/channel/UCcjP3uH7VFk4n_lIc4bgxbQ" target="_blank">Ler Com Ciência</a>, aimed for portuguese-speakers, has now released its fourth <a href="https://www.youtube.com/watch?v=HV0FT1gCgOU&ab_channel=LerComCi%C3%AAncia" target="_blank"> video </a> discussing the book "The Evolution of Beauty" by Richard Prum. This time we discuss the concept of the amazing bowers by bowerbids as well as the evolution of lekking in manakins.</p>
							<p>
							 In PT: Nosso canal no Youtube <a href="https://www.youtube.com/channel/UCcjP3uH7VFk4n_lIc4bgxbQ" target="_blank">Ler Com Ciência</a>, lançou ontem seu quarto <a href="https://www.youtube.com/watch?v=HV0FT1gCgOU&ab_channel=LerComCi%C3%AAncia" target="_blank"> vídeo </a> discutindo o livro "The Evolution of Beauty" de Richard Prum.
							 Desta vez discutimos as arenas sexuais feitos pelos bowerbirds, assim como a evolução dos lekkings em tangarás. </p>
							<hr />
						</div>
						<div>
							<p className="date"> January 23rd, 2023</p>
							<p className="title"> Sperm-mediated paternal efffects project granted by OCAST! </p>
							<p className="content"> Good news!!! We will be funded by <a href="https://oklahoma.gov/ocast/about-ocast.html" target="_blank">OCAST</a> to study the sperm-mediated paternal effects in poeciliids! More on that soon.</p>
							<hr />
						</div>
						<div>
							<p className="date"> September 26th, 2022</p>
							<p className="title"> Third episode of book club on "The evolution of Beauty" available on Youtube. </p>
							<p className="content"> Our Youtube channel <a href="https://www.youtube.com/channel/UCcjP3uH7VFk4n_lIc4bgxbQ" target="_blank">Ler Com Ciência</a>, aimed for portuguese-speakers, has now released its third <a href="https://www.youtube.com/watch?v=n5Eq9hnm4o4" target="_blank"> video </a> discussing the book "The Evolution of Beauty" by Richard Prum. This time we discuss the concept of evolutionary decandence via mate choice as well as sexual conflict in waterfowl via genitalia coevolution.</p>
							<p>
							 In PT: Nosso canal no Youtube <a href="https://www.youtube.com/channel/UCcjP3uH7VFk4n_lIc4bgxbQ" target="_blank">Ler Com Ciência</a>, lançou ontem seu terceiro <a href="https://www.youtube.com/watch?v=n5Eq9hnm4o4" target="_blank"> vídeo </a> discutindo o livro "The Evolution of Beauty" de Richard Prum.
							 Desta vez discutimos o conceito de decadência evolutiva por escolha de parceiros, assim como o conflito sexual em aves aquáticas atavés da co-evolução da genitália. </p>
							<hr />
						</div>
						{/* <div>
							<p className="date"> September 23rd, 2022</p>
							<p className="title"> Sperm-mediated paternal effects project submitted to OCAST. </p>
							<p className="content"> We are still looking for funding for our project on sperm-mediated paternal effects. We now submitted a proposal to <a href="https://oklahoma.gov/ocast/about-ocast.html" target="_blank">OCAST</a>. Fingers crossed!</p> 
							<hr />
						</div>
						<div>
							<p className="date"> September 14th, 2022</p>
							<p className="title"> Second episode of book club on "The evolution of Beauty" available on Youtube. </p>
							<p className="content"> Our Youtube channel <a href="https://www.youtube.com/channel/UCcjP3uH7VFk4n_lIc4bgxbQ" target="_blank">Ler Com Ciência</a>, aimed for portuguese-speakers, has now released its second <a href="https://www.youtube.com/watch?v=-_MyfV2YDZQ" target="_blank"> video </a> discussing the book "The Evolution of Beauty" by Richard Prum.
							 This is a project in collaboration with my colleague <a href="https://g-pacheco.github.io/" target="_blank">George Pacheco</a> aiming to discuss and popularize science books, particularly in Evoltuionary Biology, that are yet to be translated into Portuguese. This project aims to encourage both readership and translation of important books in the field for a Portuguese-speaking audience (particularly Brazilian students). </p>
							 
							 <p>
							 In PT: Nosso canal no Youtube <a href="https://www.youtube.com/channel/UCcjP3uH7VFk4n_lIc4bgxbQ" target="_blank">Ler Com Ciência</a>, lançou ontem seu segundo <a href="https://www.youtube.com/watch?v=-_MyfV2YDZQ" target="_blank"> vídeo </a> discutindo o livro "The Evolution of Beauty" de Richard Prum.
							 Esse é um projeto em colaboração com meu amigo <a href="https://g-pacheco.github.io/" target="_blank">George Pacheco</a> voltado para a discussão e poularização de livros, particularmente de Biologia Evolutiva, que ainda não foram traduzidos para Português (ao menos no Brasil). Este projeto visa incentivar tanto a leitura como a tradução de importantes livros no campo para uma audiência cujo idioma nativo é o Português (particularmente estudantes brasileiros). </p>
							 <hr />
						</div>
						<div>
							<p className="date"> September 9th, 2022</p>
							<p className="title">DNA methylation patterns between and F1 hybrids now published! </p>
							<p className="content"> Our work on the DNA methylation patterns of parental <i>Kryptolebias</i> and their F1 hybrids is now available <a href="https://doi.org/10.1080/15592294.2022.2123014" target="_blank">here</a>.</p> 
							<hr />
						</div>
						<div>
							<p className="date"> August 30th, 2022</p>
							<p className="title"><i>Kryptolebias</i> phylogenomics and  introgression paper now published!</p>
							<p className="content"><i>Kryptolebias</i> phylogenomics, introgression and mito-nuclear discordances is now published. Open-access for 50 days using this <a href="https://authors.elsevier.com/a/1fgIM3m3nN6Qc1" target="_blank">link</a>. As always, feel free to reach out to discuss this study.</p>
							<hr />
						</div>
						<div>
							<p className="date"> August 21st, 2022</p>
							<p className="title">Welcome to my new website!</p>
							<p className="content"> I am excited to launch my new webiste! More improvements to come (working now on a photo gallery). My previous <a href="https://berbelfilho.wixsite.com/home" target="_blank">website</a> will be discontinued soon.</p>
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
						</div>  */}
					</div>
				</div>
			</section >
		);
	}
}

export default News;
