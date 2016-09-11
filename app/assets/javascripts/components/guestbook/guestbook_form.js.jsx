(function(root) {
  root.GuestbookForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return ({
        name: '',
        email: '',
        comment: ''
      });
    },

    handleSubmit: function (e) {
      e.preventDefault();
      PostUtil.createPost({post: this.state});
    },

    render: function() {
      return (
        <form onSubmit={this.handleSubmit} action="/posts" method="post">
          <div>
            <label>Name
              <input type="text" className="url" name="post[name]" valueLink={this.linkState('name')}/>
            </label>
          </div>

          <div>
            <label>Email
              <input type="text" className="alias" maxLength="40" name="post[email]" valueLink={this.linkState('email')}/>
            </label>
          </div>

          <div>
            <label>Comment
              <input type="text" name="post[comment]" valueLink={this.linkState('comment')}/>
            </label>
          </div>

          <button className="link-submit">Speicher</button>
        </form>
      )
    }
  });
})(this);
