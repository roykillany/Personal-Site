(function(root) {
  root.Videos = React.createClass({
    render: function() {
  		return (
  			<Row className="main-container">
          <Column size="12">
            <Row>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/P7HZVVwX3Ws"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen
              ></iframe>
            </Row>
          </Column>
  			</Row>
  		);
  	}
  });
})(this);
