var LinkActions = {

  receiveAllLinks: function (links) {
    AppDispatcher.dispatch({
      actionType: LinkConstants.RECEIVE_LINKS,
      links: links
    });
  },

  receiveNewLink: function (link) {
    AppDispatcher.dispatch({
      actionType: LinkConstants.RECEIVE_NEW_LINK,
      newLink: link
    });
  },

  receiveUpdatedLink: function (link) {
    AppDispatcher.dispatch({
      actionType: LinkConstants.RECEIVE_UPDATED_LINK,
      link: link
    });
  }
};
