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
    if (typeof inputFormat == "string") {
      return [pad(d.getDate() + 1), pad(d.getMonth()+1), d.getFullYear()].join('/');
    } else {
      return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
    }

  },

  convertForCalendar: function (firstname,lastname,date) {
      return  {
            title  : lastname + " " + firstname,
            start  : date,
            allDay : {days: 1}, 
            backgroundColor: '#e88ec3',
            borderColor: '#ca79a9'
        }
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
            if (birthday.slice(0,-4) == today.slice(0,-4)) {
              todays.push(<li>{this.state.birthdays[i].first_name}{this.state.birthdays[i].last_name}:{birthday}</li>);
            }
            birthdays.push(this.convertForCalendar(this.state.birthdays[i].first_name,this.state.birthdays[i].last_name,new Date().getFullYear() + this.state.birthdays[i].birthdate.slice(4,10)));
            birthdays.push(this.convertForCalendar(this.state.birthdays[i].first_name,this.state.birthdays[i].last_name,(new Date().getFullYear() - 1) + this.state.birthdays[i].birthdate.slice(4,10)));
            birthdays.push(this.convertForCalendar(this.state.birthdays[i].first_name,this.state.birthdays[i].last_name,(new Date().getFullYear() + 1) + this.state.birthdays[i].birthdate.slice(4,10)));

      }

      $('#calendar').fullCalendar({
          events: birthdays,
          header: {
                      left:   'today prev,next',
                      center: 'title',
                      right:  'basicDay,basicWeek,month,listYear'
                  }
      })

    }

		return (
			<div>
        <br></br>
        <ul className="todays">
          Heutige Geburtstage
          {todays}
        </ul>
        <br></br>
        {birthday_form}
        <br></br>
        <div id="calendar"></div>
			</div>
		);
	}
});
})(this);
