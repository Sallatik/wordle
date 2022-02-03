import { Tile } from "./Tile";
import { TileMatrix } from "./TileMatrix";
import { Coordinates } from "./Coordinates";
import { Size } from "./Size";
import { BoardState } from "./BoardState";

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
