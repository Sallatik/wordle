import Tile from "./Tile";
import "./Row.css";

export default ({ tiles }) => (
  <div className="row">
    {tiles.map(({ color, letter }, index) => (
      <Tile key={index} color={color} letter={letter} />
    ))}
  </div>
);
