var LinkActions = {

  receiveAllLinks: function (links) {
    AppDispatcher.dispatch({
      actionType: LinkConstants.RECEIVE_LINKS,
      links: links
    });
  }

};
