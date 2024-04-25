import "./App.css";
import { Card, Paper, Button } from "@mui/material";
import { CardHeader, CardContent } from "@mui/material";
import EpisodeDescription from "./EpisodeDescription";
import React, { useState, useEffect } from "react";



function App() {
    const [data, setData] = useState([]);
    const [currentEpisodeData, setCurrentEpisodeData] = useState("");
    useEffect(() => {
        fetch(
            "https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt592622/bbt/episodes"
        ).then((results) => results.json())
        .then((data) =>{
            // console.log(data.data._embedded.episodes);
            setData(data.data._embedded.episodes);
        })
      }, [currentEpisodeData]);
    if (data.length == 0) {
        return (<>Loading...</>)
    }
    console.log(data);
    console.log(data[0].summary)
    return (
        <div className="App">
            <div className="Header">
                <h1>Big Bang Theory Episode Directory</h1>
            </div>
            <span className="display">
                <Card className="episodeList">
                    <CardHeader title="Episode List" />
                    <CardContent className="episodeListContent">
                        {createEpisodeList(
                            data,
                            setCurrentEpisodeData
                        )}
                    </CardContent>
                </Card>
                <EpisodeDescription
                    data={currentEpisodeData}
                    setData={setCurrentEpisodeData}
                />
            </span>
        </div>
    );
}

function episodeButton(episodeTitle, episodeData, setCurrentEpisodeData) {
    return (
        <Button
            variant="outlined"
            onClick={() => {
                setCurrentEpisodeData(episodeData);
            }}
            className="EpisodeTitle"
        >
            {episodeTitle}
        </Button>
    );
}

function createEpisodeList(dataArr, setCurrentData) {
    return (
        <ul>
            {dataArr.map((item) => (
                <li key={item}>{episodeButton(item.name, item, setCurrentData)}</li>
            ))}
        </ul>
    );
}

export default App;
