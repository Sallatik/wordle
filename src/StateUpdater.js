const copyState = (state) => JSON.parse(JSON.stringify(state));

export const updateState = (state, key) => {
  const newState = copyState(state);
  if (key.length == 1) {
    const row = newState.tiles[newState.row];
    const tile = row && row[newState.tile];
    if (tile) {
      tile.letter = key.toLowerCase();
      newState.tile++;
    }
  } else if (key === "Backspace") {
    const row = newState.tiles[newState.row];
    const tile = row && row[newState.tile - 1];
    if (tile) {
        tile.letter = "";
        newState.tile --;
    }
  } else if (key === "Enter") {
    const row = newState.tiles[newState.row];
    if (row && newState.tile === row.length) {
        newState.row ++;
        newState.tile = 0;
    }
  }
  return newState;
};

export const defaultState = {
  tiles: [
    [
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
    ],
    [
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
    ],
    [
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
    ],
    [
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
    ],
    [
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
      { color: "black", letter: "" },
    ],
  ],
  row: 0,
  tile: 0,
};
