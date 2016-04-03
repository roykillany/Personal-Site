window.startUp = {

  initialize: function () {
    var Router = ReactRouter.Router,
        Route = ReactRouter.Route,
        IndexRoute = ReactRouter.IndexRoute;

    React.render(
      <Router>
        <Route path="/" component={ Index }>
          <Route path="admin" component={ AdminForm }/>
        </Route>
      </Router>,
      document.getElementById('content')
    );
  }
};
