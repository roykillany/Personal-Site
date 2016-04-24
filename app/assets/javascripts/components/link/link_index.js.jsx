(function(root) {
  root.Links = React.createClass({

    getInitialState: function () {
      return ({ links: LinkStore.links()});
    },

    componentDidMount: function () {
      LinkStore.addChangeHandler(this._onLinkChange);
      LinkUtil.fetchLinks();
    },

    componentWillUnmount: function () {
      LinkStore.removeChangeHandler(this._onLinkChange);
    },

    _onLinkChange: function () {
      this.setState({
        links: LinkStore.links()
      });
    },

  render: function() {

    var link_form = <div></div>;
    var links = <div></div>;
    if (CurrentUserStore.isLoggedIn()) {
      link_form = <LinksForm />;
    }
    if (this.state.links[0] !== undefined) {
      links = <li>{this.state.links[0].alias}</li>;
    }
		return (
			<div>
        <ul className="links">
          {links}
        </ul>
        {link_form}
			</div>
		);
	}
});
})(this);
