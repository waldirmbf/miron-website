import React, { Component } from 'react';
// import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Publications from './Components/Publications';
import Contact from './Components/Contact';
import News from './Components/News';
import Research from './Components/Research';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			foo: 'bar',
			resumeData: {}
		};

		// ReactGA.initialize('UA-116120309-1');
		// ReactGA.pageview(window.location.pathname);

	}

	getResumeData() {
		$.ajax({
			url: '/resumeData.json',
			dataType: 'json',
			cache: false,
			success: function (data) {
				this.setState({ resumeData: data });
			}.bind(this),
			error: function (xhr, status, err) {
				console.log(err);
				alert(err);
			}
		});
	}

	componentDidMount() {
		this.getResumeData();
	}

	render() {
		return (
			<div className="App">
				<Header data={this.state.resumeData.main} />
				<About data={this.state.resumeData.main} />
				<News />
				<Research data={this.state.resumeData.research} />
				<Publications data={this.state.resumeData.publications} />
				<Contact data={this.state.resumeData.main} />
				<Footer data={this.state.resumeData.main} />
			</div>
		);
	}
}

export default App;
