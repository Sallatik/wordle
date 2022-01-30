import "./Board.css";
import Row from "./Row";
import { useState } from "react";
import { updateState, defaultState } from "../StateUpdater";

export default ({ onGameResult }) => {
  const [state, setState] = useState(defaultState);
  const keyPressHandler = (event) => {
    setState((prev) => {
      const [newState, gameResult] = updateState(prev, event.key);
      if (gameResult) onGameResult(gameResult);
      return newState;
    });
  };
  return (
    <div>
      <div className="board" tabIndex="0" onKeyDown={keyPressHandler}>
        {state.tiles.map((row) => (
          <Row tiles={row} />
        ))}
      </div>
    </div>
  );
};
