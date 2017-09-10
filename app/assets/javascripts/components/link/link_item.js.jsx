(function(root) {
  root.LinkItem = React.createClass({
    getInitialState: function() {
      return {
        isEditing: false,
        alias: this.props.link.alias,
        url: this.props.link.url,
      };
    },

    toggleEdit: function(e) {
      this.setState({
        isEditing: !this.state.isEditing
      });
    },

    discardChange: function(e) {
      console.log(this.props.link);

      this.setState({
        alias: this.props.link.alias,
        url: this.props.link.url,
        isEditing: false
      });
    },

    updateLinkItem: function() {
      this.props.link.alias = this.state.alias;
      this.props.link.url = this.state.url;

      LinkUtil.updateLink(this.props.link);
      this.setState({
        isEditing: false
      });
    },

    updateLinkValue: function(newVal, attr) {
      var state = this.state;
      state[attr] = newVal;

      this.setState(state);
    },

    renderEditButtons: function() {
      if(this.state.isEditing) {
        return (
          <div className="item-toggles">
            <i onClick={this.discardChange} className="fa fa-times" aria-hidden="true"></i>
            <i onClick={this.updateLinkItem} className="fa fa-check-square-o" aria-hidden="true"></i>
          </div>
        );
      } else {
        return (
          <i onClick={this.toggleEdit} className="fa fa-pencil-square-o" aria-hidden="true"></i>
        );
      }
    },

    renderDetailFields: function() {
      return (
        <div>
          <div>Title: <EditableFields name={"alias"} showInput={this.state.isEditing} value={this.state.alias} parentHandler={this.updateLinkValue}/></div>
          <div>URL: <EditableFields name={"url"} showInput={this.state.isEditing} value={this.state.url} parentHandler={this.updateLinkValue}/></div>
        </div>
      );
    },

    render: function() {
      return (
        <li className="link-item" key={"link" + this.props.id}>
          <a href={this.state.url}>
            {this.state.alias}
          </a>
          {CurrentUserStore.isLoggedIn() && this.renderEditButtons()}
          {CurrentUserStore.isLoggedIn() && this.state.isEditing && this.renderDetailFields()}
        </li>
      );
    }
  });
})(this);
