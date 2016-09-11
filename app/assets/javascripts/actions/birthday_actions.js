var BirthdayActions = {

  receiveAllBirthdays: function (birthdays) {
    AppDispatcher.dispatch({
      actionType: BirthdayConstants.RECEIVE_BIRTHDAYS,
      birthdays: birthdays
    });
  },

  receiveNewBirthday: function (birthday) {
    AppDispatcher.dispatch({
      actionType: BirthdayConstants.RECEIVE_BIRTHDAY,
      newBirthday: birthday
    });
  },


};
