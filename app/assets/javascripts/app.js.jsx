(function() {
	var Route = ReactRouter.Route;
	var Router = ReactRouter.Router;

	$(document).ready(function() {
		var $content = $("#content");
	  if ($content.length > 0) {
			React.render(
				<Router>
					<Route path="/" component={}>
						// <Route path="" component={}/>
					</Route>
				</Router>,
				document.getElementById("content")
			)
		}
	});
})();