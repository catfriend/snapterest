var React = require('react'); //library
var SnapkiteStreamClient = require('snapkite-stream-client'); //utility
var StreamTweet = require('./StreamTweet.react');  //component
var Header = require('./Header.react');  //component

var Stream = React.createClass({

	getInitialState: function () {
		return {
			tweet:null
		};
	},

	componentDidMount: function () {
		SnapkiteStreamClient.initializeStream(this.handleNewTweet);
	},

	componentWillUnmount: function () {
		SnapkiteStreamClient.destroyStream();
	},

	handleNewTweet: function (tweet) {
		this.setState({
			tweet: tweet
		});
	},

	render: function () {
		var tweet = this.state.tweet;

		if (tweet) {
			return (
			<StreamTweet
			tweet={tweet}
			onAddTweetToCollection={this.props.onAddTweetToCollection} />
			);
		}

		return (
			<Header text="Waiting for public photos from Twitter..." />
		);
	}
});
//new tweet var that refs tweet prop, part of component's state object
module.exports = Stream;
