(function(root) {
  root.EditableFields = React.createClass({
    handleChange: function(e) {
      this.props.parentHandler(e.target.value, e.target.name);
    },

    render: function() {
      if(this.props.showInput) {
        return (
          <input type="text" value={this.props.value} onChange={this.handleChange} name={this.props.name} />
        );
      } else {
        return (
          <div>
            {this.props.value}
          </div>
        );
      }
    }
  });
})(this);
