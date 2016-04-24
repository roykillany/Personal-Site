(function (root) {
  var CHANGE_EVENT = "change";

  var _links = [];

  root.LinkStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    links: function () {
      return _links.slice(0);
    },

    changed: function () {
      this.emit(CHANGE_EVENT);
    },

    addNewLink: function (newLink) {
      _links.push(newLink);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case LinkConstants.RECEIVE_LINKS:
          _links = payload.links;
          LinkStore.changed();
          break;
        case LinkConstants.RECEIVE_LINK:
          LinkStore.addNewLink(payload.newLink.link);
          LinkStore.changed();
        break;

      }
    })

  });
})(this);
