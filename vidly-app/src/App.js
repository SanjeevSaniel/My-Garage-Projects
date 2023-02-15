import "./App.css";
import VLogo from "./assets/images/letter-v.png";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <main className="App">
      <div id="App-header">
        <img className="App-logo" src={VLogo} alt="Vidly" />
        Vidly
      </div>
      <Movies />
    </main>
  );
}

export default App;
