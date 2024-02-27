import "./App.css";
import EpisodeList from "./EpisodeList";
import EpisodeDescription from "./EpisodeDescription";
import React, { useState, useEffect } from 'react';



function App() {
  const [data, setData] = useState([]);
  useEffect(() =>  {
    setEpisodes(setData);
  }, [setData]);
  return (
    <div className="App">
      <h1>Big Bang Theory Episode Directory</h1>
      <div className="display">
        <span className="episodeList" data = {data} >
          <EpisodeList />
        </span>
        <span className="episodeDescription" data = {data}>
          <EpisodeDescription />
        </span>
      </div>
    </div>
  );
}

async function setEpisodes(setData) {
    const response = await fetch(
      "https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt592622/bbt/episodes"
    );
    const episodes = await response.json();
    console.log(episodes);
    setData(episodes);
  }

export default App;
