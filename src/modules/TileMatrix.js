const modifyArrayElement = (array, index, f) =>
  array.map((element, i) => (i === index ? f(element) : element));

const modifyMatrixElement = (matrix, row, column, f) =>
  modifyArrayElement(matrix, row, (array) =>
    modifyArrayElement(array, column, f)
  );

export class TileMatrix {
  tiles;
  constructor(tiles) {
    this.tiles = tiles;
  }

  getWordFromRow(row) {
    return this.tiles[row].map((tile) => tile.letter).join("");
  }

  withTileLetter(row, column, letter) {
    return new TileMatrix(
      modifyMatrixElement(this.tiles, row, column, (tile) =>
        tile.withLetter(letter)
      )
    );
  }

  withColoredRow(row, colors) {
    return new TileMatrix(
      modifyArrayElement(this.tiles, row, (row) =>
        row.map((tile, index) => tile.withColor(colors[index]))
      )
    );
  }
}
