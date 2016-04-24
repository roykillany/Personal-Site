var LinkActions = {

  receiveAllLinks: function (links) {
    AppDispatcher.dispatch({
      actionType: LinkConstants.RECEIVE_LINKS,
      links: links
    });
  },

  receiveNewLink: function (link) {
    AppDispatcher.dispatch({
      actionType: LinkConstants.RECEIVE_LINK,
      newLink: link
    });
  },


};
