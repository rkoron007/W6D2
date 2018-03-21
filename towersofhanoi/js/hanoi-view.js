class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.firstClick = true;
    // this.setupTowers();
    // this.render();
    this.bindEvents();
  }

  render() {
    for (let i = 0; i < 3; i++) {

      for (let j = 0; j < 3; j++) {
        // check which disk is at this position in the stack
        // update the class of <li> based on whether its 1, 2, 3
      }
    }
  }

  bindEvents() {
    $('ul').on("click", (event) => {
      this.clickTower(event);
    });
  }

  clickTower (e){
    let $ct = $(e.currentTarget);
    console.log($ct.data("pos"));
    if (this.firstClick) {
      console.log(this.firstClick);
      this.firstClick = false;
    } else {
      console.log(this.firstClick);
      // place the disk and re-render
      this.firstClick = true;
    }
  }

  setupTowers () {
    for (let i = 1; i <= 3; i++) {
      const $stack = $('<ul>').addClass("stack");

      let $disc = $('<li>');
      for (let j = 1; j <= 3; j++) {
        if (i === 1 ) {
          $disc = $('<li>').addClass("disk-" + j)
            .attr("data-pos", [i, j]);
        } else {
          $disc = $('<li>');
        }
        $stack.append($disc);
      }
      this.$el.append($stack);
    } // for
  } // setup
}

module.exports = View;
