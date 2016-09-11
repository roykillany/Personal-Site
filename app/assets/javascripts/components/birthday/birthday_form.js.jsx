(function(root) {
  root.BirthdaysForm = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return ({
        name: '',
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
              <label>Name
                <input type="text" className="name" valueLink={this.linkState('name')}/>
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
