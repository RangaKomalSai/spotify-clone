import "./App.css";
import NavBar from "./components/navbar/index.js";
import Library from "./components/library/index.js";
import Home from "./components/home/index.js";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-left">
          <NavBar />
          <Library />
        </div>
        <div className="app-right">
          <Home />
        </div>
      </div>
      <div className="footer">Created with ❤️ by RKS</div>
    </>
  );
}

export default App;
