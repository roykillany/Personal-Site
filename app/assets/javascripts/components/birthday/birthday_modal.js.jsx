(function(root) {
  root.BirthdaysModal = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
      return (
        {
          id: null,
          name: '',
          birthdate: ''
        }
      );
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({
        id: newProps.birthday_data.id,
        birthdate: newProps.birthday_data.birthdate,
        name: newProps.birthday_data.name
      });
    },

    componentDidMount: function () {
      var _this = this;
      $(".modal_birthdate").datepicker({
        dateFormat: "dd/mm/yy",
        onSelect: function(value) {
          _this.setState({birthdate: value});
        }.bind(_this)
      });
    },

    updateBirthday: function() {
      BirthdayUtil.updateBirthday(this.state.id,this.state);
      this.props.closeModalCallback();
    },

    deleteBirthday: function() {
      BirthdayUtil.deleteBirthday(this.state.id);
      this.props.closeModalCallback();
    },

    render: function() {
  		return (
  			<div className="birthday_modal--container" style={{display: this.props.display_data ? 'block' : 'none'}}>
          <div className="birthday_modal--content">
            <Row>
              <Column size="12">
                <a onClick={this.props.closeModalCallback}>X</a>
                <Row>
                  <h4>Bearbeite {this.props.birthday_data.name}s Geburtstag</h4>
                  <label>Name
                    <input type="text" className="birthday_name" valueLink={this.linkState('name')}/>
                  </label>
                  <label>Geburtstag
                    <input type="text" className="modal_birthdate" valueLink={this.linkState('birthdate')}/>
                  </label>
                </Row>
                <Row>
                  <Column size="6">
                    <span className="button" onClick={this.updateBirthday}>Aktualisieren</span>
                  </Column>
                  <Column size="6">
                    <span className="button secondary" onClick={this.props.closeModalCallback}>Cancel</span>
                    <span className="button alert" onClick={this.deleteBirthday}>Loeschen</span>
                  </Column>
                </Row>
              </Column>
            </Row>
          </div>
  			</div>
  		);
  	}
  });
})(this);
