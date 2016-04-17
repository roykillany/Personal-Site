var LinkUtil = window.LinkUtil = {

  fetchLinks: function() {
    $.ajax({
      url: '/api/links',
      type: 'GET',
      dataType: 'json',
      data: {Unanswered: true},
      success: function (data) {
        LinkActions.receiveAllLinks(data);
      }
    });
  },

};
