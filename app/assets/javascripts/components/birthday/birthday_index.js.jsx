(function(root) {
  root.Birthdays = React.createClass({

  getInitialState: function () {
    return (
      {
        birthdays: BirthdayStore.birthdays(),
        modal_data: 'nothing',
        modal_display: false
      }
    );
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

  convertForCalendar: function (birthday,firstname,lastname,date,age) {
      return  {
            title  : lastname + " " + firstname + " (" + age + ")",
            start  : date,
            allDay : {days: 1},
            backgroundColor: '#e88ec3',
            borderColor: '#ca79a9',
            root: this,
            birthdayInstance: birthday
        };
  },


  render: function() {
    var age,birthday;
    var birthdays = <div></div>;
    if (this.state.birthdays[0] !== undefined) {
      birthdays = [];
      for (var i = 0; i < this.state.birthdays.length; i++){
            birthday = this.convertDate(this.state.birthdays[i].birthdate);

            age = new Date().getFullYear() - parseInt(this.state.birthdays[i].birthdate.slice(0,5));
            birthdays.push(this.convertForCalendar(this.state.birthdays[i],this.state.birthdays[i].first_name,this.state.birthdays[i].last_name,new Date().getFullYear() + this.state.birthdays[i].birthdate.slice(4,10),age));
            birthdays.push(this.convertForCalendar(this.state.birthdays[i],this.state.birthdays[i].first_name,this.state.birthdays[i].last_name,(new Date().getFullYear() - 1) + this.state.birthdays[i].birthdate.slice(4,10),age));
            birthdays.push(this.convertForCalendar(this.state.birthdays[i],this.state.birthdays[i].first_name,this.state.birthdays[i].last_name,(new Date().getFullYear() + 1) + this.state.birthdays[i].birthdate.slice(4,10),age));

      }
      if ($('#calendar').children()[0]) {
        $('#calendar').fullCalendar( 'addEventSource', birthdays.slice(birthdays.length -3));
      } else {
        $('#calendar').fullCalendar({
            events: birthdays,
            header: {
                        left:   'today prev,next',
                        center: 'title',
                        right:  'basicDay,basicWeek,month,listYear'
                    },
            eventClick: function(calEvent, jsEvent, view) {
              // add event to open modal for editing
            }
        });
      }


    }

		return (
			<div>
        <br></br>
        <BirthdaysForm />
        <br></br>
        <div id="calendar"></div>
        <BirthdaysModal display_data={this.state.modal_display} birthday_data={this.state.modal_data}/>
			</div>
		);
	}
});
})(this);
