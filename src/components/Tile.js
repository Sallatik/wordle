import styles from "./Tile.module.css";

const Tile = ({ letter, color }) => (
  <div className={styles.tile} style={{ backgroundColor: color }}>
    {letter}
  </div>
);

export default Tile;
