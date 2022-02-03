export class Tile {
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
