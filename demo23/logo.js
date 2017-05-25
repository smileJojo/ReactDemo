require("./logo.css");

var React = require("react");

var Logo = React.createClass({
	render:function(){
		return <img className = "Logo" src = {require("./logo.png")}/>
	}
})

module.exports = Logo;