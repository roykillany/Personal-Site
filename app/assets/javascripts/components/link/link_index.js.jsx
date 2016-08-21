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
    var rezepte_links = <div></div>;
    var sprache_links = <div></div>;
    var andere_links = <div></div>;

    if (CurrentUserStore.isLoggedIn()) {
      link_form = <LinksForm />;
    }
    if (this.state.links[0] !== undefined) {
      rezepte_links = [];
      sprache_links = [];
      andere_links = [];
      for (var i = 0; i < this.state.links.length; i++){
        if (this.state.links[i].link_type === "sprache") {
            sprache_links.push(<li><a href={this.state.links[i].url}>{this.state.links[i].alias}</a></li>);
        } else if (this.state.links[i].link_type === "rezepte") {
            rezepte_links.push(<li><a href={this.state.links[i].url}>{this.state.links[i].alias}</a></li>);
        } else {
            andere_links.push(<li><a href={this.state.links[i].url}>{this.state.links[i].alias}</a></li>);
        }
      }
    }
		return (
			<div>
        <ul className="rezepte_links">
          Rezepte
          {rezepte_links}
        </ul>
        <ul className="sprache_links">
          Sprache
          {sprache_links}
        </ul>
        <ul className="andere_links">
          Andere
          {andere_links}
        </ul>
        {link_form}
			</div>
		);
	}
});
})(this);
