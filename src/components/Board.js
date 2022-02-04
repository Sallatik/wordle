import "./Board.css";
import Row from "./Row";
import { useState, useEffect } from "react";
import { updateBoardState } from "../modules/BoardStateUpdater";
import { defaultBoardState } from "../modules/DefaultState";

export default ({ onGameResult }) => {
  const [state, setState] = useState(defaultBoardState);

  useEffect(() => {
    if (state.gameWon) onGameResult({ won: true });
    else if (state.outOfTries) onGameResult({ won: false });
  }, [state]);

  const keyPressHandler = (event) => setState(updateBoardState(event.key));
  return (
    <div>
      <div className="board" tabIndex="0" onKeyDown={keyPressHandler}>
        {state.tileMatrix.tiles.map((row, index) => (
          <Row key={index} tiles={row} />
        ))}
      </div>
    </div>
  );
};
