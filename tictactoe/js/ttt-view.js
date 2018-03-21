

class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
  }

  bindEvents() {

    $('li').on("click", (event) => {
      // debugger
      const $target = $(event.target);
      this.makeMove($target);
    });

  }

  makeMove($square) {
    let currentPos = $square.data("pos");
    currentPos = currentPos.split(",");
    for (let i = 0; i < 2; ++i) {
      currentPos[i] = parseInt(currentPos[i]);
    }
    this.game.playMove(currentPos);
    $square.off('hover');
    $square.attr("style", "background-color: white");
    $square.text(this.game.currentPlayer);
    if (this.game.isOver()) {
      alert(`${this.game.winner()} IS WINNER WINNER CHICKEN DINNER`);
    }
  }

  setupBoard() {
    const $grid = this.$el;
    const $row = $("<ul>").addClass("row");
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        const $square = $('<li>').addClass("square")
            .attr("data-pos", [j, i]);

        $row.append($square);
      }
      $grid.append($row);
    } // for
  } // setup
}

module.exports = View;
