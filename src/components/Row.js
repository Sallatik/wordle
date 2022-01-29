import Tile from "./Tile";
import "./Row.css";

export default ({ tiles }) => (
  <div className="row">
    {tiles.map((tile) => (
      <Tile color={tile.color} letter={tile.letter} />
    ))}
  </div>
);
