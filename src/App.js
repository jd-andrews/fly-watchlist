import "./App.css";
import Watchlist from "./components/Lists/Watchlist";
import Readlist from "./components/Lists/Readlist";
import AddInput from "./components/Add/Input";
import BottomIMG from "./components/BottomIMG/BottomIMG";

export default function App() {
  return (
    <>
      <div className="App">
        <>
          <Watchlist />
        </>
        <>
          <Readlist />
        </>
        <>
          <AddInput />
        </>
      </div>
      <div>
        <BottomIMG />
      </div>
    </>
  );
}
