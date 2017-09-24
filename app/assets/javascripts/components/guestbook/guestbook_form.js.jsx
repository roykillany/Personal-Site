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

    notRobot: false,

    componentDidMount: function () {
     grecaptcha.render(this.refs.recaptchaTarget.getDOMNode(), {
       sitekey: '6LcbxSUTAAAAAF1Mvudia38WzgIHhV7Ytw6Ek3fd',
       class: 'g-recaptcha',
       callback: this.enableBtn,
       "expired-callback": this.disableBtn,
       lang: "de"
     });
    },

    enableBtn: function () {
      $(".link-submit").removeClass("disabled");
      this.notRobot = true;
    },

    disableBtn: function () {
      $(".link-submit").addClass("disabled");
      this.notRobot = false;
    },

    handleSubmit: function (e) {
      e.preventDefault();
      if (this.notRobot) {
        PostUtil.createPost({post: this.state});
      } else {
        // disable message sayig to verify that they are not a bot
      }
      this.disableBtn();
      grecaptcha.reset();
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

          <div ref="recaptchaTarget"></div>

          <button className="link-submit button disabled">Speicher</button>
        </form>
      );
    }
  });
})(this);
