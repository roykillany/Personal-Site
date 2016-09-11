var LinkUtil = window.LinkUtil = {

  fetchLinks: function() {
    $.ajax({
      url: '/api/links',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        LinkActions.receiveAllLinks(data);
      }
    });
  },

  createLink: function(link) {
    $.ajax({
      url: '/api/links',
      type: 'POST',
      dataType: 'json',
      data: link,
      success: function (data) {
        LinkActions.receiveNewLink(data);
      }
    });
  },

};
