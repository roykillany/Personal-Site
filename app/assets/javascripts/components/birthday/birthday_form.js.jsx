(function(root) {
  root.BirthdaysForm = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return ({
        name: '',
        birthdate: ''
      });
    },

    componentDidMount: function () {
      var _this = this;
      $(".birthdate").datepicker({
        dateFormat: "dd/mm/yy",
        onSelect: function(value) {
          _this.setState({birthdate: value});
        }.bind(_this)
      });
    },

    handleSubmit: function (e) {
      e.preventDefault();
      BirthdayUtil.createBirthday(this.state);
      this.setState(this.getInitialState());
      $(".birthdate").val("");
    },

    render: function() {
  		return (
  			<Row className="padding-bottom-50">
          <Column size="6">
            <form onSubmit={this.handleSubmit}>

              <div>
                <label>Name
                  <input type="text" className="birthday_name" valueLink={this.linkState('name')}/>
                </label>
              </div>

              <div>
                <label>Geburtstag
                  <input type="text" className="birthdate" onChange={this.handleDatepicker}/>
                </label>
              </div>

              <button className="button">Speicher</button>
            </form>
          </Column>
  			</Row>
  		);
  	}
  });
})(this);
