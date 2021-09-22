import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import MusicPlayer from "./components/MusicPlayer";

type Soundtracks = {
  list: Array<Object>,
};

// use this as Hook to pass data to the APP
const App = () => {
  const [soundtracks, setSoundtracks] = useState([]); // default value
  // (soundtracks: Array<object>);
  // I wanted Flow typing to check if soundtracks was returning an array of objects, but didn't find good solutions online on how to that properly, so given the short time that I have, I've decided to focus on implementing a MVP (song player)first.

  useEffect(() => {
    fetch("https://api-stg.jam-community.com/song/trending").then(
      (response) => {
        response
          .json()
          .then((data) => {
            // it would more practical if the response already contained the song src files
            setSoundtracks(data);

            console.log(data);
          })
          .catch((error) => console.log(error)); // with more time I could customize an error page
      }
    );
  }, []);

  // would do a TEST to check if Music Player component is present
  return (
    <div className="App">
      <MusicPlayer soundtracks={soundtracks} />
    </div>
  );
};

export default App;
