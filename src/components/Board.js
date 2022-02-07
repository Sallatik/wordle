import "./Board.css";
import Row from "./Row";
import { useState, useEffect } from "react";
import { createBoardState as createStartingBoardState } from "../modules/DefaultState";
import KeyboardFocus from "./KeyboardFocus";

const isLetter = (key) => key.length === 1;
const isBackspace = (key) => key === "Backspace";
const isEnter = (key) => key === "Enter";

export default ({ onGameResult, wordleConfig }) => {
  const [state, setState] = useState(createStartingBoardState(wordleConfig));

  useEffect(() => {
    if (state.gameWon) onGameResult({ won: true });
    else if (state.outOfTries) onGameResult({ won: false });
  }, [state, onGameResult]);

  const keyPressHandler = ({ key }) => {
    if (isLetter(key)) setState((prev) => prev.addLetter(key));
    else if (isBackspace(key)) setState((prev) => prev.eraseLetter());
    else if (isEnter(key)) setState((prev) => prev.checkWord());
  };

  return (
    <>
      <KeyboardFocus onKeyDown={keyPressHandler} />
      <div className="board">
        {state.tiles.map((row, index) => (
          <Row key={index} tiles={row} />
        ))}
      </div>
    </>
  );
};
