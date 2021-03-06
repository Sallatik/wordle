export class Coordinates {
  row;
  column;
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  get previousRow() {
    return this.row - 1;
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
