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
			<Row className="main-container">
        <Column size="12">
          <Row className="link-container padding-bottom-50">
            <Column size="4" className="rezepte_links">
              <h3>Rezepte</h3>
              {rezepte_links}
            </Column>
            <Column size="4" className="sprache_links">
              <h3>Sprache</h3>
              {sprache_links}
            </Column>
            <Column size="4" className="andere_links">
              <h3>Andere</h3>
              {andere_links}
            </Column>
          </Row>
          <Row>
            {CurrentUserStore.isLoggedIn() && link_form}
          </Row>
        </Column>
			</Row>
		);
	}
});
})(this);
