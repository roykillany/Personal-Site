(function(root) {
  root.BirthdaysForm = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return ({
        firstname: '',
        lastname: '',
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
                <input type="text" className="firstname" valueLink={this.linkState('firstname')}/>
              </label>
            </div>

            <div>
              <label>Nachname
                <input type="text" className="lastname" valueLink={this.linkState('lastname')}/>
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
