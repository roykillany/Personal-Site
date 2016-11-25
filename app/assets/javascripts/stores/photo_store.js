(function (root) {
  var CHANGE_EVENT = "change";

  var _photos = [];

  root.PhotoStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    photos: function () {
      return _photos.slice(0);
    },

    changed: function () {
      this.emit(CHANGE_EVENT);
    },

    addNewPhoto: function (newPhoto) {
      _photos.push(newPhoto);
    },

    removePhoto: function (id) {
      var idx;

      for(var i = 0; i < _photos.length; i++) {
        if(_photos[i].id === id){
          idx = i;
        }
      }

      _photos.splice(idx, 1);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case PhotoConstants.RECEIVE_PHOTOS:
          _photos = payload.photos;
          PhotoStore.changed();
          break;
        case PhotoConstants.RECEIVE_PHOTO:
          PhotoStore.addNewPhoto(payload.newPhoto.photo);
          PhotoStore.changed();
          break;
        case PhotoConstants.REMOVE_PHOTO:
          PhotoStore.removePhoto(payload.photoId);
          PhotoStore.changed();
          break;
        break;

      }
    })

  });
})(this);
