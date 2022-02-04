import { words } from "./Words";

export class BoardState {
  wordChecker;
  size;
  tileMatrix;
  coordinates;

  constructor(wordChecker, size, tileMatrix, coordinates) {
    this.wordChecker = wordChecker;
    this.size = size;
    this.tileMatrix = tileMatrix;
    this.coordinates = coordinates;
  }

  get tiles() {
    return this.tileMatrix.tiles;
  }

  addLetter(letter) {
    if (!this.gameWon && this.size.isWithinBounds(this.coordinates)) {
      return new BoardState(
        this.wordChecker,
        this.size,
        this.tileMatrix.withTileLetter(this.coordinates, letter),
        this.coordinates.withNextColumn()
      );
    } else return this;
  }

  eraseLetter() {
    const eraseCoordinates = this.coordinates.withPreviousColumn();
    if (!this.gameWon && this.size.isWithinBounds(eraseCoordinates)) {
      return new BoardState(
        this.wordChecker,
        this.size,
        this.tileMatrix.withTileLetter(eraseCoordinates, ""),
        eraseCoordinates
      );
    } else return this;
  }

  checkWord() {
    if (!this.gameWon && this.size.isAtEndOfRow(this.coordinates)) {
      const word = this.tileMatrix.getWordFromRow(this.coordinates.row);
      if (this.wordChecker.isAllowedWord(word)) {
        const colors = this.wordChecker.gradeWord(word);
        return new BoardState(
          this.wordChecker,
          this.size,
          this.tileMatrix.withColoredRow(this.coordinates.row, colors),
          this.coordinates.withNextRow()
        );
      } else return this;
    } else return this;
  }

  get gameWon() {
    return (
      this.size.isRowWithinBounds(this.coordinates.previousRow) &&
      this.tileMatrix.isRowAllGreen(this.coordinates.previousRow)
    );
  }

  get outOfTries() {
    return this.size.isAtEndOfBoard(this.coordinates);
  }
}
