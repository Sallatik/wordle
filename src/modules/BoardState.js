import * as words from "./Words";

class Tile {
  letter;
  color;

  constructor(letter, color) {
    this.letter = letter;
    this.color = color;
  }

  withColor(color) {
    return new Tile(this.letter, color);
  }

  withLetter(letter) {
    return new Tile(letter, this.color);
  }
}

class TileMatrix {
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

class Coordinates {
  row;
  column;
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  withNextColumn() {
    return new Coordinates(this.row, this.column + 1);
  }

  withPreviousColumn() {
    return new Coordinates(this.row, this.column - 1);
  }

  withNextRow() {
    return new Coordinates(this.row + 1, 0);
  }
}

class Size {
  rows;
  columns;
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }

  isWithinBounds({ row, column }) {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
  }

  isAtEndOfRow({ row, column }) {
    return row >= 0 && row < this.rows && column === this.columns;
  }
}

class BoardState {
  size;
  tileMatrix;
  coordinates;

  constructor(size, tileMatrix, coordinates) {
    this.size = size;
    this.tileMatrix = tileMatrix;
    this.coordinates = coordinates;
  }

  addLetter(letter) {
    if (this.size.isWithinBounds(this.coordinates)) {
      return new BoardState(
        this.size,
        this.tileMatrix.withTileLetter(
          this.coordinates.row,
          this.coordinates.column,
          letter
        ),
        this.coordinates.withNextColumn()
      );
    } else return this;
  }

  eraseLetter() {
    const eraseCoordinates = this.coordinates.withPreviousColumn();
    if (this.size.isWithinBounds(eraseCoordinates)) {
      return new BoardState(
        this.size,
        this.tileMatrix.withTileLetter(
          eraseCoordinates.row,
          eraseCoordinates.column,
          ""
        ),
        eraseCoordinates
      );
    } else return this;
  }

  checkWord() {
    if (this.size.isAtEndOfRow(this.coordinates)) {
      const word = this.tileMatrix.getWordFromRow(this.coordinates.row);
      if (words.isRealWord(word)) {
        const colors = words.gradeWord(word);
        return new BoardState(
          this.size,
          this.tileMatrix.withColoredRow(this.coordinates.row, colors),
          this.coordinates.withNextRow()
        );
      } else return this;
    } else return this;
  }
}

const defaultTile = new Tile("", "black");

const createDefaultRow = (columns) => Array(columns).fill(defaultTile);

const createDefaultTileMatrix = (rows, columns) =>
  new TileMatrix(Array(rows).fill(createDefaultRow(columns)));

const defaultCurrentTile = new Coordinates(0, 0);

const createDefaultBoardState = (rows, columns) =>
  new BoardState(
    new Size(rows, columns),
    createDefaultTileMatrix(rows, columns),
    defaultCurrentTile
  );

export const defaultBoardState = createDefaultBoardState(5, 5);

const isLetter = (key) => key.length === 1;
const isBackspace = (key) => key === "Backspace";
const isEnter = (key) => key === "Enter";

const modifyArrayElement = (array, index, f) =>
  array.map((element, i) => (i === index ? f(element) : element));

const modifyMatrixElement = (matrix, row, column, f) =>
  modifyArrayElement(matrix, row, (array) =>
    modifyArrayElement(array, column, f)
  );

const identity = (x) => x;

export const updateBoardState = (key) => {
  if (isLetter(key)) return boardState => boardState.addLetter(key);
  else if (isBackspace(key)) return boardState => boardState.eraseLetter();
  else if (isEnter(key)) return boardState => boardState.checkWord();
  else return identity;
};
