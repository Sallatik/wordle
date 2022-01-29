import "./Game.css";
import Row from "./Row";
import { useState } from "react";
import { updateState, defaultState } from "../StateUpdater";

export default () => {
  const [state, setState] = useState(defaultState);
  const keyPressHandler = (e) => setState(updateState(state, e.key));
  return (
    <div>
      {state.won && <h1>Congrats!</h1>}
      {state.lost && <h1>Loser!</h1>}
      <div className="game" tabIndex="0" onKeyDown={keyPressHandler}>
        {state.tiles.map((row) => (
          <Row tiles={row} />
        ))}
      </div>
    </div>
  );
};
