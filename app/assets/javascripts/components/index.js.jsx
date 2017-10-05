(function(root) {
  root.Index = React.createClass({
    componentDidMount: function() {
      // this.offset   = 45;
      // this.itemSize = $(".index-block").height();
      // this.window   = $(window);
      // this.lastScrollPosition = this.window.scrollTop();
      // window.addEventListener('scroll', this.handleScroll);
    },

    componentWillUnmount: function() {
      // window.removeEventListener('scroll', this.handleScroll);
    },

    handleScroll: function(e) {
      var currentTopPosition      = this.window.scrollTop(),
          currentBottomPosition   = this.window.height() + currentTopPosition,
          currentTopBlock         = Math.floor(currentTopPosition / this.itemSize),
          currentBottomBlock      = Math.floor((currentBottomPosition - this.offset) / this.itemSize),
          currentTopRemainder     = (currentTopPosition - this.offset) % this.itemSize,
          currentBottomRemainder  = (currentBottomPosition - this.offset) % this.itemSize;

      if(currentTopPosition - this.lastScrollPosition < 0) {
        if(currentTopBlock != currentBottomBlock && currentTopRemainder < this.itemSize * 0.65) {
          var $target = $(".index-block:nth-child(" + (currentTopBlock + 1) + ")");

          $(window).scrollTop(this.itemSize * currentTopBlock + this.offset);
          // $target.addClass("slide-down");
          // window.setTimeout(function() {
  				// 	$target.removeClass("slide-down");
  				// }, 1000);
        }
      } else {
        if(currentTopBlock != currentBottomBlock && currentBottomRemainder > this.itemSize * 0.25) {
          var $target = $(".index-block:nth-child(" + (currentBottomBlock + 1) + ")");

          $(window).scrollTop(this.itemSize * currentBottomBlock + this.offset);
          // $target.addClass("slide-up");
          // window.setTimeout(function() {
  				// 	$target.removeClass("slide-up");
  				// }, 1000);
        }
      }

      this.lastScrollPosition = currentTopPosition;
    },

    render: function() {
  		return (
  			<div>
          <Row className="index-block">Biography</Row>
          <Row className="index-block">Photos</Row>
          <Row className="index-block">Links</Row>
          <Row className="index-block">Guestbook</Row>
        </div>
  		);
  	}
  });
})(this);
