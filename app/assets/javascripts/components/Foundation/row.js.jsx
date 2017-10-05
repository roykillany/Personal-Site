(function(root) {
  root.Row = React.createClass({

  render: function() {
    var classes = classNames(
      "row",
      this.props.className
    );

		return (
			<div className={classes}>
        {this.props.children}
			</div>
		);
	}
});
})(this);
