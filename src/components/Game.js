import { useState } from "react";
import Board from "./Board";
import StatusMessage from "./StatusMessage";
import { words, winningWord } from "../modules/Words";

const Game = () => {
  const [gameStatus, setGameStatus] = useState("playing");
  return (
    <>
      <StatusMessage gameStatus={gameStatus} />
      <Board
        wordleConfig={{ word: winningWord, allowedWords: words, tries: 5 }}
        onGameResult={({ won }) => setGameStatus(won ? "won" : "lost")}
      />
    </>
  );
};

export default Game;
