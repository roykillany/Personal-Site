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

  updateLink: function(link) {
    $.ajax({
      url: '/api/links/' + link.id,
      type: 'PUT',
      dataType: 'json',
      data: {link: link},
      success: function (data) {
        LinkActions.receiveUpdatedLink(data);
      }
    });
  }
};
