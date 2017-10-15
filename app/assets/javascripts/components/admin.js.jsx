(function(root) {
  root.AdminForm = React.createClass({

    logout: function () {
      SessionsApiUtil.logout();
    },

    render: function() {

      if (CurrentUserStore.isLoggedIn()) {
        return (
          <Row className="main-container">
            <Column size="12">
              <h4>Logged in as { this.props.currentUser.username }</h4>
              <br/>
              <button className="button" onClick={ this.logout }>LOG OUT</button>
            </Column>
          </Row>
        );
      } else {
        return (
          <Row className="main-container">
            <Column size="6">
              <SessionForm />
            </Column>
          </Row>
        );
      }
    },

  });
})(this);
