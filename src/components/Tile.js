import styles from "./Tile.module.css";

export default ({ letter, color }) => (
  <div className={styles.tile} style={{ backgroundColor: color }}>
    {letter}
  </div>
);
