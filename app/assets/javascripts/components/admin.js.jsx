(function(root) {
  root.AdminForm = React.createClass({

    logout: function () {
      SessionsApiUtil.logout();
    },

    render: function() {

      if (CurrentUserStore.isLoggedIn()) {
        return (
          <div>
            Logged in as
            { this.props.currentUser.username }
            <button onClick={ this.logout }>LOG OUT</button>
          </div>
        );
      } else {
        return (
          <div>
            <SessionForm />
          </div>
        );
      }
    },

  });
})(this);
