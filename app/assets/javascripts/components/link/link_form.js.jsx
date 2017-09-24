(function(root) {
  root.LinksForm = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return ({
        url: '',
        alias: '',
        link_type: ''
      });
    },

    handleSubmit: function (e) {
      e.preventDefault();
      LinkUtil.createLink(this.state);
    },

    render: function() {
  		return (
  			<div>
          <form onSubmit={this.handleSubmit}>

            <div>
              <label>Link / URL
                <input type="text" className="url" valueLink={this.linkState('url')}/>
              </label>
            </div>

            <div>
              <label>Name fuer Link / URL
                <input type="text" className="alias" maxLength="40" valueLink={this.linkState('alias')}/>
              </label>
            </div>

            <div>
              <label>Kategorie
                <select valueLink={this.linkState('link_type')}>
                  <option value="sprache">Sprache</option>
                  <option value="rezept">Rezept</option>
                  <option value="andere">Andere</option>
                </select>
              </label>
            </div>

            <button className="link-submit button">Speicher</button>
          </form>
  			</div>
  		);
  	}
  });
})(this);
