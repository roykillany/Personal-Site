(function(root) {
    root.LinksIndex = React.createClass({

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
      // Refactor this out into own function
      rezepte_links = [];
      sprache_links = [];
      andere_links = [];
      for (var i = 0; i < this.state.links.length; i++){
        var link = this.state.links[i];

        if (link.link_type === "sprache") {
            sprache_links.push(<LinkItem link={link} url={link.url} alias={link.alias} id={link.id} updateLink={this.updateLink}/>);
        } else if (link.link_type === "rezepte") {
            rezepte_links.push(<LinkItem link={link} url={link.url} alias={link.alias} id={link.id} updateLink={this.updateLink}/>);
        } else {
            andere_links.push(<LinkItem link={link} url={link.url} alias={link.alias} id={link.id} updateLink={this.updateLink}/>);
        }
      }
    }
		return (
			<div id="links_index">
        <div className="link-container">
          <ul className="rezepte_links">
            <h2>Rezepte</h2>
            {rezepte_links}
          </ul>
          <ul className="sprache_links">
            <h2>Sprache</h2>
            {sprache_links}
          </ul>
          <ul className="andere_links">
            <h2>Andere</h2>
            {andere_links}
          </ul>
        </div>
        {CurrentUserStore.isLoggedIn() && link_form}
			</div>
		);
	}
});
})(this);
