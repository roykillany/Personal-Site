var BirthdayUtil = window.BirthdayUtil = {

  fetchBirthdays: function() {
    $.ajax({
      url: '/api/birthdays',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        BirthdayActions.receiveAllBirthdays(data);
      }
    });
  },

  createBirthday: function(birthday) {
    $.ajax({
      url: '/api/birthdays',
      type: 'POST',
      dataType: 'json',
      data: birthday,
      success: function (data) {
        BirthdayActions.receiveNewBirthday(data);
      }
    });
  },

};
