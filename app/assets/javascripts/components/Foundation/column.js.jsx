(function(root) {
  root.Column = React.createClass({

  render: function() {
		return (
			<div className={"small-" + this.props.size + " columns"}>
        {this.props.children}
			</div>
		);
	}
});
})(this);
