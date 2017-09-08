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

  receiveUpdatedBirthday: function (birthday) {
    AppDispatcher.dispatch({
      actionType: BirthdayConstants.UPDATE_BIRTHDAY,
      updatedBirthday: birthday
    });
  },

  receiveDeletedBirthday: function (birthday) {
    AppDispatcher.dispatch({
      actionType: BirthdayConstants.DELETE_BIRTHDAY,
      deletedBirthday: birthday
    });
  },

};
