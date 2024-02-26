
import './App.css';
import EpisodeList from "./EpisodeList"
import EpisodeDescription from "./EpisodeDescription"
function App() {
  return (
    <div className="App">
      <h1>Big Bang Theory Episode Directory</h1>
      <div className = "display">
        <span className = "Episode List">
            <EpisodeList/>
        </span>
            
        <span>
            
        </span>
      </div>
    </div>
  );
}

export default App;
