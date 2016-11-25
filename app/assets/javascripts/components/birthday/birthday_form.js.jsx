(function(root) {
  root.BirthdaysForm = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return ({
        first_name: '',
        last_name: '',
        birthdate: ''
      });
    },

    handleSubmit: function (e) {
      e.preventDefault();
      BirthdayUtil.createBirthday(this.state);
    },

    render: function() {
  		return (
  			<div>
          <form onSubmit={this.handleSubmit}>

            <div>
              <label>Vorname
                <input type="text" className="first_name" valueLink={this.linkState('first_name')}/>
              </label>
            </div>

            <div>
              <label>Nachname
                <input type="text" className="last_name" valueLink={this.linkState('last_name')}/>
              </label>
            </div>

            <div>
              <label>Geburtstag
                <input type="date" className="birthdate" valueLink={this.linkState('birthdate')}/>
              </label>
            </div>

            <button className="birthday-submit">Speicher</button>
          </form>
  			</div>
  		);
  	}
  });
})(this);
