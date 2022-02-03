import * as words from "./Words";

const defaultTile = { color: "black", letter: "" };

const createDefaultRow = (columns) => Array(columns).fill(defaultTile);

const createDefaultTileMatrix = (rows, columns) =>
  Array(rows).fill(createDefaultRow(columns));

const defaultCurrentTile = { row: 0, column: 0 };

const createDefaultBoardState = (rows, columns) => ({
  size: { rows, columns },
  tiles: createDefaultTileMatrix(rows, columns),
  currentTile: defaultCurrentTile,
});

export const defaultBoardState = createDefaultBoardState(5, 5);

const isLetter = (key) => key.length === 1;
const isBackspace = (key) => key === "Backspace";
const isEnter = (key) => key === "Enter";

const currentTileWithinBounds = (size, currentTile) =>
  currentTile.row >= 0 &&
  currentTile.column >= 0 &&
  currentTile.row < size.rows &&
  currentTile.column < size.columns;

const modifyArrayElement = (array, index, f) =>
  array.map((element, i) => (i === index ? f(element) : element));

const modifyMatrixElement = (matrix, row, column, f) =>
  modifyArrayElement(matrix, row, (array) =>
    modifyArrayElement(array, column, f)
  );

const setTileLetter = (tile, letter) => ({ ...tile, letter });
const setTileColor = (tile, color) => ({ ...tile, color });


const addLetterIntoTile = (tiles, { row, column }, letter) =>
  modifyMatrixElement(tiles, row, column, (tile) =>
    setTileLetter(tile, letter)
  );

const incrementCurrentColumn = ({ row, column }) => ({
  row,
  column: column + 1,
});

const incrementCurrentRow = ({ row, _ }) => ({
  row: row + 1,
  column: 0,
});

const decrementCurrentColumn = ({ row, column }) => ({
  row,
  column: column - 1,
});

const addLetter = (letter) => (boardState) =>
  currentTileWithinBounds(boardState.size, boardState.currentTile)
    ? {
        size: boardState.size,
        tiles: addLetterIntoTile(
          boardState.tiles,
          boardState.currentTile,
          letter
        ),
        currentTile: incrementCurrentColumn(boardState.currentTile),
      }
    : boardState;

const eraseLetter = (boardState) => {
  const eraseCoordinates = decrementCurrentColumn(boardState.currentTile);
  return currentTileWithinBounds(boardState.size, eraseCoordinates)
    ? {
        size: boardState.size,
        tiles: addLetterIntoTile(boardState.tiles, eraseCoordinates, ""),
        currentTile: eraseCoordinates,
      }
    : boardState;
};

const canSubmitWord = (currentTile, size) =>
  currentTile.row < size.rows && currentTile.column == size.columns;

const extractWord = (row) =>
  row.map((tile) => tile.letter).join("");

const colorRow = (tiles, row, colors) => modifyArrayElement(tiles, row, (row) => row.map((tile, index) => setTileColor(tile, colors[index])));

const checkWord = (boardState) => {
    if (canSubmitWord(boardState.currentTile, boardState.size)) {
        const word = extractWord(boardState.tiles[boardState.currentTile.row]);
        if (words.isRealWord(word)) {
            return {
                size: boardState.size,
                currentTile: incrementCurrentRow(boardState.currentTile),
                tiles: colorRow(boardState.tiles, boardState.currentTile.row, words.gradeWord(word))
            }
        } else return boardState;
    } else return boardState;
};

const identity = (x) => x;

export const updateBoardState = (key) => {
  if (isLetter(key)) return addLetter(key);
  else if (isBackspace(key)) return eraseLetter;
  else if (isEnter(key)) return checkWord;
  else return identity;
};
