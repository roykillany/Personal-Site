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
            <Column size="8" className="left">
              <p>Hi, you arrived at Gisela Goldsteins Webpage! Welcome :-)!</p>
            </Column>
          </Row>
          <Row className="index-block">
            <Column size="8" className="right">
              <p>Family,traveling and living life to its fullest means everything to me. Check out my <a href="#/fotos">photos here</a> to see my family, travels or other crazy stuff I found fascinating!</p>
            </Column>
          </Row>
          <Row className="index-block left">
            <Column size="8" className="left">
              <p>As you might know I love to cook, languages and many other things. Maybe check out my <a href="#/links">links</a> and see if you find anything interesting. As for cooking, I have a <a href="#/rezepte/">recipe site</a> where you can check out all of my famous delicous food. If you want to see me cook I also have some <a href="#/videos">videos here</a>! Enjoy ! :-)</p>
            </Column>
          </Row>
          <Row className="index-block right">
            <Column size="8" className="right">
              <p>You arrived at the bottom of my startpage! :-) Well if you checked out everything maybe leave a comment in my <a href="#/gaestebuch">guestbook</a>! I am looking forward to it!</p>
            </Column>
          </Row>
        </div>
  		);
  	}
  });
})(this);
