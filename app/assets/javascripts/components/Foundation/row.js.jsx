(function(root) {
  root.Row = React.createClass({

  render: function() {
		return (
			<div className="row">
        {this.props.children}
			</div>
		);
	}
});
})(this);
