import { Tile } from "./Tile";
import { TileMatrix } from "./TileMatrix";
import { Coordinates } from "./Coordinates";
import { Size } from "./Size";
import { BoardState } from "./BoardState";
import { winningWord, words } from "./Words";
import { WordChecker } from "./WordChecker";

const wordChecker = new WordChecker(winningWord, words);

const defaultTile = new Tile("", "black");

const createDefaultRow = (columns) => Array(columns).fill(defaultTile);

const createDefaultTileMatrix = (rows, columns) =>
  new TileMatrix(Array(rows).fill(createDefaultRow(columns)));

const defaultCurrentTile = new Coordinates(0, 0);

const createDefaultBoardState = (rows, columns) =>
  new BoardState(
    wordChecker,
    new Size(rows, columns),
    createDefaultTileMatrix(rows, columns),
    defaultCurrentTile
  );

export const defaultBoardState = createDefaultBoardState(5, 5);

export const createBoardState = ({word, allowedWords, tries}) => new BoardState(
  new WordChecker(word, allowedWords),
  new Size(tries, word.length),
  createDefaultTileMatrix(tries, word.length),
  defaultCurrentTile
);
