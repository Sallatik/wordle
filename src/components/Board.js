import "./Board.css";
import Row from "./Row";
import { useState, useEffect } from "react";
import { defaultBoardState } from "../modules/DefaultState";

const isLetter = (key) => key.length === 1;
const isBackspace = (key) => key === "Backspace";
const isEnter = (key) => key === "Enter";

export default ({ onGameResult }) => {
  const [state, setState] = useState(defaultBoardState);

  useEffect(() => {
    if (state.gameWon) onGameResult({ won: true });
    else if (state.outOfTries) onGameResult({ won: false });
  }, [state]);

  const keyPressHandler = ({ key }) => {
    if (isLetter(key)) setState((prev) => prev.addLetter(key));
    else if (isBackspace(key)) setState((prev) => prev.eraseLetter());
    else if (isEnter(key)) setState((prev) => prev.checkWord());
  };

  return (
    <div>
      <div className="board" tabIndex="0" onKeyDown={keyPressHandler}>
        {state.tiles.map((row, index) => (
          <Row key={index} tiles={row} />
        ))}
      </div>
    </div>
  );
};
