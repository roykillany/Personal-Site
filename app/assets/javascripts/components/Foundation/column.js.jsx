(function(root) {
  root.Column = React.createClass({

  // add more general className function, be able to pass more

  render: function() {
		return (
			<div className={"small-" + this.props.size + " columns"}>
        {this.props.children}
			</div>
		);
	}
});
})(this);
