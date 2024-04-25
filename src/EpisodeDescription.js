import { Card, Paper, Button } from "@mui/material";
import { CardHeader, CardContent } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./EpisodeDescription.css"



function EpisodeDescription(props) {
  let data = props.data;
  return (
    <Card>
      <CardHeader title="Episode Description" />
      <CardContent className="episodeDescriptionContent">

        {/* {data.name} */}
        {data.summary}
      </CardContent>
    </Card>
  );
}

export default EpisodeDescription;
