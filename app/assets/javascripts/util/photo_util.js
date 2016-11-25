var PhotoUtil = window.PhotoUtil = {

  fetchPhotos: function() {
    $.ajax({
      url: '/api/photos',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        PhotoActions.receiveAllPhotos(data);
      }
    });
  },

  createPhoto: function(photo) {
    $.ajax({
      url: '/api/photos',
      type: 'POST',
      dataType: 'json',
      data: photo,
      success: function (data) {
        PhotoActions.receiveNewPhoto(data);
      }
    });
  },

  removePhoto: function(id) {
    $.ajax({
      url: '/api/photos/' + id,
      type: 'DELETE',
      dataType: 'json',
      success: function(data) {
        PhotoActions.removePhoto(data.id);
      }
    })
  }
};
