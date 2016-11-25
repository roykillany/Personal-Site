var PhotoActions = {
  receiveAllPhotos: function (photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_PHOTOS,
      photos: photos
    });
  },

  receiveNewPhoto: function (photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_PHOTO,
      newPhoto: photo
    });
  },

  removePhoto: function (id) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.REMOVE_PHOTO,
      photoId: id
    });
  }
};
