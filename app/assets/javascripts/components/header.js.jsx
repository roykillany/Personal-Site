(function(root) {
  root.Header = React.createClass({
  	render: function() {
  		return (
        <div>
    			<div className="header">
            <ul className="header-list group">
              <li><a href="#/">Home</a></li>
              <li><a href="#/rezepte/">Rezepte</a></li>
              <li><a href="#/gaestebuch">Gaestebuch</a></li>
              <li><a href="#/admin">Admin</a></li>
              <li><a href="#/links">Links</a></li>
              <li><a href="#/fotos">Fotos</a></li>
              {this.props.isLoggedIn ? <li><a href="#/geburtstage">Geburtstage</a></li> : <div></div>}
            </ul>
    				<img />
    			</div>
        </div>
  		);
  	}
  });
})(this);
