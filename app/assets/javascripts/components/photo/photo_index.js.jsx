(function(root) {
  root.Photos = React.createClass({

  mountDropZone: function(el) {
    $(".dropzone").dropzone({
      url: "api/photos",
      paramName: "photo[image]"
    });
  },

  render: function() {
		return (
			<div>
        Photos
        <div id="photo-dropzone">
          <form action="/api/photos" className="dropzone" id="my-awesome-dropzone" ref={this.mountDropZone}></form>
        </div>
			</div>
		);
	}
});
})(this);
