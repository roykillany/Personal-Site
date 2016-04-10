(function(root) {
  root.Links = React.createClass({

  render: function() {
    var link_form = <div></div>;
    if (CurrentUserStore.isLoggedIn()) {
      link_form = <LinksForm />;
    }
		return (
			<div>
        <ul class="links">
        </ul>
        {link_form}
			</div>
		);
	}
});
})(this);
