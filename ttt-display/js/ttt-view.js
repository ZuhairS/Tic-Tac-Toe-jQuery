class View {
  constructor(game, $el) {
    this.game=game;
    this.$el=$el;
    this.setupBoard();
    // this.game.run({});
  }

  bindEvents($square) {
    $square.on("click", (event) => {
      this.makeMove($square);
      console.log($square);
    });
  }

  makeMove($square) {
    let pos = $square.data("data-coor");
    console.log(pos);
    pos=[pos];
    this.game.playMove(pos);
    let mark = this.game.board.grid[pos[0]][pos[1]];
    $square.text(mark);
  }

  setupBoard() {
    const addRow = (rowIdx) => {
      const $row = $("<ul class='row'></ul>");
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const $square = $("<li></li>").addClass("square").data("data-coor", [rowIdx, colIdx]);
        this.bindEvents($square);
        $row.append($square);
      }
      this.$el.append($row);
    };
    for (var i = 0; i < 3; i++) {
      addRow(i);
    }
  }


}

module.exports = View;
