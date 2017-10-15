(function(root) {
  root.SessionForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();
      var credentials = $(e.currentTarget).serializeJSON();
      SessionsApiUtil.login(credentials, function () {
        this.history.pushState(null, "/admin");
      }.bind(this));
    },



    render: function() {

      return (
        <form onSubmit={ this.submit }>

          <h3>Login!</h3>

          <label>
            Email
            <input type="text" name="email" />
          </label>

          <label>
            Password
            <input type="password" name="password" />
          </label>

          <button className="button">Login!</button>
        </form>
      );
    },

  });
})(this);
