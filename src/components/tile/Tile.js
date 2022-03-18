import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {
        Object.values(tile).map((value, index) => <p className={`${index === 0 ? "tile-title tile" : "tile"}`} key={index}>{value}</p>)
      }
    </div>
  );
};
