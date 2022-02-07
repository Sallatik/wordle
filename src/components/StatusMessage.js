const statusToMessage = (status) => {
  if (status === "won") return "You won!";
  else if (status === "lost") return "You lost!";
  else return "Good Luck!";
};

const StatusMessage = ({ gameStatus }) => (
  <div>{statusToMessage(gameStatus)}</div>
);

export default StatusMessage;
