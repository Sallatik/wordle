import "./Game.css";
import Row from "./Row";
import { useState } from "react";
import { updateState, defaultState } from "../StateUpdater";
import Board from "./Board";
import StatusMessage from "./StatusMessage";

export default () => {
  const [gameStatus, setGameStatus] = useState("playing");
  return (
    <div>
      <StatusMessage gameStatus={gameStatus} />
      <Board onGameResult={setGameStatus} />
    </div>
  );
};
