(function(root) {
  root.Birthdays = React.createClass({

  getInitialState: function () {
    return (
      {
        birthdays: BirthdayStore.birthdays(),
        modal_data: {},
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
    if ($('#calendar').children()[0]){
      this.updateFullCalendar();
    } else {
      this.initiateFullCalendar();
    }
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

  convertForCalendar: function (birthday,name,date,age) {
      return  {
            title  : name + " (" + age + ")",
            start  : date,
            allDay : {days: 1},
            backgroundColor: '#e88ec3',
            borderColor: '#ca79a9',
            birthdayInstance: birthday
        };
  },

  closeModalCallback: function() {
    this.setState({modal_display: false});
    $(".modal_birthdate").val("");
  },

  getFormattedBrithdays: function() {
    var birthdays = [];
    var age,birthday;
    for (var i = 0; i < this.state.birthdays.length; i++){
          birthday = this.convertDate(this.state.birthdays[i].birthdate);

          age = new Date().getFullYear() - parseInt(this.state.birthdays[i].birthdate.slice(0,5));
          birthdays.push(this.convertForCalendar(this.state.birthdays[i],this.state.birthdays[i].name,new Date().getFullYear() + this.state.birthdays[i].birthdate.slice(4,10),age));
          birthdays.push(this.convertForCalendar(this.state.birthdays[i],this.state.birthdays[i].name,(new Date().getFullYear() - 1) + this.state.birthdays[i].birthdate.slice(4,10),age));
          birthdays.push(this.convertForCalendar(this.state.birthdays[i],this.state.birthdays[i].name,(new Date().getFullYear() + 1) + this.state.birthdays[i].birthdate.slice(4,10),age));

    }
    return birthdays;
  },

  initiateFullCalendar: function() {
    birthdays = this.getFormattedBrithdays();
    var _this = this;
    $('#calendar').fullCalendar({
        events: birthdays,
        header: {
                    left:   'today prev,next',
                    center: 'title',
                    right:  'basicDay,basicWeek,month,listYear'
                },
        eventClick: function(calEvent, jsEvent, view) {
          this.setState({modal_display: true, modal_data: calEvent.birthdayInstance});
        }.bind(_this)
    });
  },

  updateFullCalendar: function() {
    $('#calendar').fullCalendar( 'removeEventSources' );
    $('#calendar').fullCalendar( 'addEventSource', this.getFormattedBrithdays() );
  },

  render: function() {
		return (
			<Row className="main-container">
        <Column size="12">
          <h3>Geburtstag hinzufuegen</h3>
          <BirthdaysForm />
          <Row>
            <div id="calendar"></div>
          </Row>
          <BirthdaysModal closeModalCallback={this.closeModalCallback} display_data={this.state.modal_display} birthday_data={this.state.modal_data}/>
        </Column>
      </Row>
		);
	}
});
})(this);
