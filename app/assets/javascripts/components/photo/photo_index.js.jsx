(function(root) {
  root.Photos = React.createClass({
    getInitialState: function() {
      return ({ photos: PhotoStore.photos() });
    },

    componentDidMount: function () {
      PhotoStore.addChangeHandler(this._onPhotoChange);
      PhotoUtil.fetchPhotos();
    },

    componentWillUnmount: function () {
      PhotoStore.removeChangeHandler(this._onPhotoChange);
    },

    _onPhotoChange: function () {
      this.setState({
        photos: PhotoStore.photos()
      });
    },

    mountDropZone: function(el) {
      this.dropzone = new Dropzone(".dropzone", {
        url: "api/photos",
        paramName: "photo[image]",
        addRemoveLinks: true,

      })

      this.dropzone.on("success", function(file, resp) {
        PhotoActions.receiveNewPhoto(resp);
      }.bind(this));

      this.dropzone.on("removedfile", function(file) {
        PhotoUtil.removePhoto(JSON.parse(file.xhr.response).photo.id);
      });
    },

    removePhoto: function(e) {
      PhotoUtil.removePhoto(e.target.getAttribute("data-id"));
    },

    render: function() {
      var _this = this;

  		return (
  			<div>
          Photos
          {CurrentUserStore.isLoggedIn() ? <div id="photo-dropzone">
            <form action="/api/photos" className="dropzone" id="my-awesome-dropzone" ref={this.mountDropZone}></form>
          </div> : null}
          <div>
            <ul>
              {this.state.photos.map(function(el, idx) {
                return (
                  <PhotoItem
                    key={idx}
                    photo={el}
                    removePhoto={_this.removePhoto}
                  />
                )
              })}
            </ul>
          </div>
  			</div>
  		);
  	}
  });
})(this);
