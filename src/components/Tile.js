import styles from "./Tile.module.css";

const Tile = ({ letter, color }) => (
  <div className={styles.tile} style={{ backgroundColor: color }}>
    <div className={styles.letter}>{letter}</div>
  </div>
);

export default Tile;
