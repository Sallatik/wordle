import "./Tile.css";

export default ({ letter, color }) => (
  <div className={"tile " + color}>{letter}</div>
);
