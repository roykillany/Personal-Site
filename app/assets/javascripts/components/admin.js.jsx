(function(root) {
  root.AdminForm = React.createClass({

    getInitialState: function () {
      return {
        currentUser: CurrentUserStore.currentUser()
      };
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeHandler(this._onChange);
    },

    _onChange: function () {
      this.setState({currentUser: CurrentUserStore.currentUser()});
    },

    logout: function () {
      SessionsApiUtil.logout();
    },

    render: function() {
      debugger
      if (CurrentUserStore.isLoggedIn()) {
        return (
          <div>
            Logged in as
            { this.state.currentUser.username }
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
