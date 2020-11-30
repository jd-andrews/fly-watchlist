import logo from "./logo.svg";
import "./App.css";
import Watchlist from "./components/Watchlist";
import Readlist from "./components/Readlist";

export default function App() {
  return (
    <div className="App">
      <>
        <Watchlist />
      </>
      <>
        <Readlist />
      </>
    </div>
  );
}
