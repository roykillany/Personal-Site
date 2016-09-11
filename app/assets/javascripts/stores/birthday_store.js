(function (root) {
  var CHANGE_EVENT = "change";

  var _birthdays = [];

  root.BirthdayStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    birthdays: function () {
      return _birthdays.slice(0);
    },

    changed: function () {
      this.emit(CHANGE_EVENT);
    },

    addNewBirthday: function (newBirthday) {
      _birthdays.push(newBirthday);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case BirthdayConstants.RECEIVE_BIRTHDAYS:
          _birthdays = payload.birthdays;
          BirthdayStore.changed();
          break;
        case BirthdayConstants.RECEIVE_BIRTHDAY:
          BirthdayStore.addNewBirthday(payload.newBirthday.birthday);
          BirthdayStore.changed();
        break;

      }
    })

  });
})(this);
