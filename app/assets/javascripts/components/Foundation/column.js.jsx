(function(root) {
  root.Column = React.createClass({

    render: function() {
      var classes = classNames(
        "small-" + this.props.size + " columns",
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
