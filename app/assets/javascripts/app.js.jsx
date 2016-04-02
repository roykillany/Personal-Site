(function() {
	var Route = ReactRouter.Route;
	var Router = ReactRouter.Router;

	$(document).ready(function() {
		var $content = $("#content");
	  if ($content.length > 0) {
			React.render(
				<Router>
					<Route path="/" component={Index}>
					</Route>
				</Router>,
				document.getElementById("content")
			)
		}
	});
})();