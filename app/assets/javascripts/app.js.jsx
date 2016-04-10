window.startUp = {

  initialize: function () {
    var Router = ReactRouter.Router,
        Route = ReactRouter.Route,
        IndexRoute = ReactRouter.IndexRoute;

    React.render(
      <Router>
        <Route path="/" component={ Header }>
          <IndexRoute component={ Index }/>
          <Route path="admin" component={ AdminForm }/>
          <Route path="links" component={ Links }/>
          <Route path="fotos" component={ Photos }/>
          <Route path="gaestebuch" component={ Guestbook }/>
          <Route path="geburstage" component={ Birthdays }/>
          <Route path="rezepte" component={ Recipes }/>
        </Route>
      </Router>,
      document.getElementById('content')
    );
  }
};
