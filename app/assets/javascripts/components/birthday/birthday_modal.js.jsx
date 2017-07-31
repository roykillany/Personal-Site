(function(root) {
  root.BirthdaysModal = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return ({
        display: this.props.modal_display,
        birthday_data: this.props.birthday_data
      });
    },

    render: function() {
  		return (
  			<div style={{display: this.state.display ? 'block' : 'none'}}>
  			</div>
  		);
  	}
  });
})(this);
