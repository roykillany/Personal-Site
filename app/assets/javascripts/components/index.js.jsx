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
      // TODO: extract paragraphs into own component

  		return (
  			<div id="index">
          <Row className="index-block">
            <Column size="6" className="left">
              <p>{faker.lorem.paragraphs(5)}</p>
              <p>{faker.lorem.paragraphs(5)}</p>
            </Column>
          </Row>
          <Row className="index-block">
            <Column size="6" className="right">
              <p>{faker.lorem.paragraphs(5)}</p>
              <p>{faker.lorem.paragraphs(5)}</p>
            </Column>
          </Row>
          <Row className="index-block left">
            <Column size="6" className="left">
              <p>{faker.lorem.paragraphs(5)}</p>
              <p>{faker.lorem.paragraphs(5)}</p>
            </Column>
          </Row>
          <Row className="index-block right">
            <Column size="6" className="right">
              <p>{faker.lorem.paragraphs(5)}</p>
              <p>{faker.lorem.paragraphs(5)}</p>
            </Column>
          </Row>
        </div>
  		);
  	}
  });
})(this);
