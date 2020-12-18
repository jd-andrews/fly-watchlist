import React from "react";
import "./List.css";

export default function Watchlist({ watchList }) {
  console.log(process.env);
  return (
    <div className="hold">
      <div className="App">
        <h1>What 2 Watch</h1>
      </div>
      <div>
        <ul>
          {watchList.map((show) => (
            <li>{show.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
