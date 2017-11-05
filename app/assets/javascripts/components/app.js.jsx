var App = React.createClass({
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
    var childrenWithProps = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(
          child, { currentUser: this.state.currentUser }
        );
    }.bind(this));

    return (
      <div>
        <Header
          isLoggedIn={CurrentUserStore.isLoggedIn()}
        />
        <div id="content-body">
          {childrenWithProps}
        </div>
      </div>
    );
  }
});
