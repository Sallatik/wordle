import "./Board.css";
import Row from "./Row";
import { useState } from "react";
import { updateBoardState, defaultBoardState } from "../modules/BoardState";

export default ({ onGameResult }) => {
  const [state, setState] = useState(defaultBoardState);
  const keyPressHandler = (event) => setState(updateBoardState(event.key));
  console.log(state);
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
