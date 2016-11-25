(function(root) {
  root.Birthdays = React.createClass({

  getInitialState: function () {
    return ({ birthdays: BirthdayStore.birthdays()});
  },

  componentDidMount: function () {
    BirthdayStore.addChangeHandler(this._onBirthdayChange);
    BirthdayUtil.fetchBirthdays();
  },

  componentWillUnmount: function () {
    BirthdayStore.removeChangeHandler(this._onBirthdayChange);
  },

  _onBirthdayChange: function () {
    this.setState({
      birthdays: BirthdayStore.birthdays()
    });
  },

  convertDate: function (inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  },


  render: function() {

    var birthday_form = <BirthdaysForm />;
    var birthdays = <div></div>;
    var todays = <div></div>;
    if (this.state.birthdays[0] !== undefined) {
      birthdays = [];
      todays = [];
      today = this.convertDate(new Date());
      for (var i = 0; i < this.state.birthdays.length; i++){
            birthday = this.convertDate(this.state.birthdays[i].birthdate);
            if (birthday == today) {
              todays.push(<li>{this.state.birthdays[i].firstname}{this.state.birthdays[i].lastname}:{birthday}</li>);
            }
            birthdays.push(<li>{this.state.birthdays[i].firstname}{this.state.birthdays[i].lastname}:{birthday}</li>);
      }
    }

		return (
			<div>
        <ul className="birthdays">
          Geburtstage
          {birthdays}
        </ul>
        <br></br>
        <ul className="todays">
          Heutige Geburtstage
          {todays}
        </ul>
        <div id="calendar"></div>
        <br></br>
        {birthday_form}
			</div>
		);
	}
});
})(this);
