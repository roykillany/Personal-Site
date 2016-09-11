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


  render: function() {

    var birthday_form = <BirthdaysForm />;
    var birthdays = <div></div>;

    if (this.state.birthdays[0] !== undefined) {
      birthdays = [];

      for (var i = 0; i < this.state.birthdays.length; i++){
            birthdays.push(<li>{this.state.birthdays[i].name}:{this.state.birthdays[i].birthdate}</li>);
      }
    }

		return (
			<div>
        <ul className="birthdays">
          Birthdays
          {birthdays}
        </ul>
        {birthday_form}
			</div>
		);
	}
});
})(this);
