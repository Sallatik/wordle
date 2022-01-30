import "./Tile.css";

export default ({ letter, color }) => (
  <div className="tile" style={{ backgroundColor: color }}>
    {letter}
  </div>
);
