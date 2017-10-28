(function(root) {
  root.GuestbookForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return ({
        name: '',
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

       this.markdown_area = new SimpleMDE({
         element: document.getElementById("comment-textarea"),
         forceSync: true
       });

       this.markdown_area.codemirror.on("change", function () {
         this.setState({
           comment: this.markdown_area.value()
         });
       }.bind(this));
    },

    componentWillUnmount: function () {
      if(this.markdown_area) {
        this.markdown_area.toTextArea();
        this.markdown_area = null;
      }
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
        this.setState({
          name: "",
          comment: ""
        });

        this.markdown_area.value("");
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
            <label>Comment
              <textarea id="comment-textarea" name="post[comment]" rows="8"/>
            </label>
          </div>

          <div ref="recaptchaTarget"></div>

          <br/>

          <button className="link-submit button disabled">Speichern</button>
        </form>
      );
    }
  });
})(this);
