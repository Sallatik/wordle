const statusToMessage = (status) => {
  if (status === "won") return "You won!";
  else if (status === "lost") return "You lost!";
  else return "Good Luck!";
};

export default ({ gameStatus }) => <div>{statusToMessage(gameStatus)}</div>;
