(function(root) {
  root.Header = React.createClass({

  getInitialState: function () {
    return {
      currentUser: null
    };
  },

  componentDidMount: function () {
    SessionsApiUtil.fetchCurrentUser();
    CurrentUserStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

	render: function() {
    var birthdays;
    var childrenWithProps = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(
          child, { currentUser: this.state.currentUser }
        );
    }.bind(this));

    if (!this.state.currentUser) {
      return (
        <div></div>
      );
    }

    if (CurrentUserStore.isLoggedIn()) {
      birthdays = <li><a href="#/geburtstage">Geburtstage</a></li>;
    }

		return (
      <div>
  			<div className="header">
          <ul className="header-list group">
            <li><a href="#/">Home</a></li>
            <li><a href="#/rezepte/">Rezepte</a></li>
            <li><a href="#/gaestebuch">Gaestebuch</a></li>
            <li><a href="#/admin">Admin</a></li>
            <li><a href="#/links">Links</a></li>
            <li><a href="#/fotos">Fotos</a></li>
            {birthdays}
          </ul>
  				<img />
  				{childrenWithProps}
  			</div>
      </div>
		);
	}
});
})(this);
