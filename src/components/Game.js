import "./Game.css";
import Row from "./Row";

const rows = [
  [{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""}],
  [{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""}],
  [{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""}],
  [{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""}],
  [{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""},{color:"black", letter:""}]
];

export default () => {
  return (
    <div className="game">
      {rows.map(tiles => <Row tiles={tiles}/>)}
    </div>
  );
};
