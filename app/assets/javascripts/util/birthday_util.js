var BirthdayUtil = window.BirthdayUtil = {

  fetchBirthdays: function() {
    $.ajax({
      url: '/api/birthdays',
      type: 'GET',
      dataType: 'json',
      success: function (birthday_data) {
        BirthdayActions.receiveAllBirthdays(birthday_data);
      }
    });
  },

  createBirthday: function(birthday) {
    $.ajax({
      url: '/api/birthdays',
      type: 'POST',
      dataType: 'json',
      data: {birthday: birthday},
      success: function (birthday_data) {
        BirthdayActions.receiveNewBirthday(birthday_data);
      }
    });
  },

  updateBirthday: function (id, data){
    $.ajax({
      url: '/api/birthdays/' + id,
      type: 'PATCH',
      dataType: 'json',
      data: {
        birthday: {
          name: data.name,
          birthdate: data.birthdate
        }
      },
      success: function (birthday_data) {
        BirthdayActions.receiveUpdatedBirthday(birthday_data);
      }
    });
  },

  deleteBirthday: function (id) {
    $.ajax({
      method: 'DELETE',
      url: 'api/birthdays/' + id,
      dataType: 'json',
      success: function(birthday_data) {
        BirthdayActions.receiveDeletedBirthday(birthday_data);
      }
    });
  }

};
