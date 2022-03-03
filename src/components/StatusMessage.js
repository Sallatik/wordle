import styles from "./StatusMessage.module.css";

const statusToMessage = (status) => {
  if (status === "won") return "You won!";
  else if (status === "lost") return "You lost!";
  else return "Good Luck!";
};

const StatusMessage = ({ gameStatus }) => (
  <p class={styles["status-message"]}>{statusToMessage(gameStatus)}</p>
);

export default StatusMessage;
