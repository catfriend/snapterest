var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');

var StreamTweet = React.createClass({
	//define other component lifecycle methods here
	getInitialState: function () {
		console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');

		return {
			numberOfCharactersIsIncreasing: null,
			headerText: null
		};
	},

	componentWillMount: function () { //invoked immediately before component inserted into DOM
		console.log('[Snapterest] StreamTweet: 2. Running componentWillMount()');

		this.setState({
			numberOfCharactersIsIncreasing: true,
			headerText: 'Latest public photo from Twitter'
		});

		window.snapterest = {
			numberOfReceivedTweets: 1,
			numberOfDisplayedTweets: 1
		};
	},

	componentDidMount: function () {//invoked immed after component inserted in DOM
		console.log('[Snapterest] StreamTweet: 3. Running componentDidMount()');

		var componentDOMRepresentation = ReactDOM.findDOMNode(this);
		window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
	},

	componentWillUnmount: function () {//invoked immed before component rmvd from DOM
		console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');

		delete window.snapterest;
	},

	render: function () {
		console.log('[Snapterest] StreamTweet: Running render()');

		return (
			<section>
			  <Header text={this.state.headerText} /> //child
			  <Tweet//child
			  	tweet={this.props.tweet}
			  	onImageClick={this.props.onAddTweetToCollection} />
		);
	}

});

module.exports StreamTweet;