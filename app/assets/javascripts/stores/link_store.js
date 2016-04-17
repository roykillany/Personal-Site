(function (root) {
  var CHANGE_EVENT = "change";

  var _links = {};

  root.LinkStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    links: function () {
      return $.extend({}, _links);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case LinkConstants.RECEIVE_LINKS:
          _links = payload.links;
          LinkStore.emit(CHANGE_EVENT);
          break;

      }
    }),
  });
})(this);
