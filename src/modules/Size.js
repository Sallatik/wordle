export class Size {
  rows;
  columns;
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }

  isRowWithinBounds(row) {
    return row >= 0 && row < this.rows;
  }

  isWithinBounds({ row, column }) {
    return this.isRowWithinBounds(row) && column >= 0 && column < this.columns;
  }

  isAtEndOfRow({ row, column }) {
    return this.isRowWithinBounds(row) && column === this.columns;
  }
}
