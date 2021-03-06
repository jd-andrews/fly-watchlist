import React, { useState } from "react";

import "./App.css";
import Watchlist from "./components/Lists/Watchlist";
import Readlist from "./components/Lists/Readlist";
import AddInput from "./components/Add/Input";
import BottomIMG from "./components/BottomIMG/BottomIMG";
import Lock from "./components/Lock/Lock";

export default function App() {
  const [list, setList] = useState([
    { name: "Goldenboy" },
    { name: "Haikyuu!!" },
    { name: "Jujutsu kaizen" },
    { name: "Fire Force" },
    { name: "Toradora" },
    { name: "Movie that the X Projet sample is from" },
    { name: "Searchparty" },
    { name: "Darling in the Franxx" },
  ]);
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="App">
        <>
          <Watchlist watchList={list} />
        </>
        <>
          <Readlist />
        </>
        <>
          {password === "password" ? (
            <AddInput setList={setList} />
          ) : (
            <Lock setPassword={setPassword} />
          )}
        </>
      </div>
      <div>
        <BottomIMG />
      </div>
    </>
  );
}
