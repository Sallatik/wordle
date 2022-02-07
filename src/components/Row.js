import Tile from "./Tile";
import styles from "./Row.module.css";

export default ({ tiles }) => (
  <div className={styles.row}>
    {tiles.map(({ color, letter }, index) => (
      <Tile key={index} color={color} letter={letter} />
    ))}
  </div>
);
