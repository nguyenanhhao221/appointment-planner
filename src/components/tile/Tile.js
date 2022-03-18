import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">{tile.name}</p>
      <p className="tile">{tile.phone}</p>
      <p className="tile">{tile.email}</p>
    </div>
  );
};
