import { useState } from "react";
import Board from "./Board";
import StatusMessage from "./StatusMessage";
import { words, winningWord } from "../modules/Words";

export default () => {
  const [gameStatus, setGameStatus] = useState("playing");
  return (
    <div>
      <StatusMessage gameStatus={gameStatus} />
      <Board
        wordleConfig={{ word: winningWord, allowedWords: words, tries: 5 }}
        onGameResult={({ won }) => setGameStatus(won ? "won" : "lost")}
      />
    </div>
  );
};
