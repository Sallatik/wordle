import * as words from "./Words";

export class BoardState {
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
        this.tileMatrix.withTileLetter(this.coordinates, letter),
        this.coordinates.withNextColumn()
      );
    } else return this;
  }

  eraseLetter() {
    const eraseCoordinates = this.coordinates.withPreviousColumn();
    if (this.size.isWithinBounds(eraseCoordinates)) {
      return new BoardState(
        this.size,
        this.tileMatrix.withTileLetter(eraseCoordinates, ""),
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
