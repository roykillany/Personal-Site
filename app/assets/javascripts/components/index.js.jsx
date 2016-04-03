(function(root) {
  root.Index = React.createClass({
	render: function() {
		return (
			<div className="index">
				<header>THIS IS THE SITE</header>
				<img />
				{this.props.children}
			</div>
		);
	}
});
})(this);
