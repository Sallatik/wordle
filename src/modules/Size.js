export class Size {
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
