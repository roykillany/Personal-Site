(function(root) {
  root.Links = React.createClass({

    getInitialState: function () {
      return ({ links: LinkStore.links()});
    },

    componentDidMount: function () {
      LinkStore.addChangeHandler(this._onLinkChange);
      QuestionUtil.fetchUnansweredQuestions();
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
    if (CurrentUserStore.isLoggedIn()) {
      link_form = <LinksForm />;
    }
		return (
			<div>
        <ul class="links">
          {this.state.links}
        </ul>
        {link_form}
			</div>
		);
	}
});
})(this);
