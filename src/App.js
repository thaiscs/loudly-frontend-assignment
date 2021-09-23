import "./styles/App.css";
import { useEffect, useState } from "react";
import MusicPlayer from "./components/MusicPlayer";
import audioFile from "./assets/audioSample.mp3";

type Soundtracks = {
  list: Array<Object>,
};

// use this component as a Hook to pass data down
const App = () => {
  const [soundtracks, setSoundtracks] = useState([]); // default value
  // (soundtracks: Array<object>);
  // I wanted Flow typing to check if soundtracks was returning an array of objects, but didn't find good solutions online on how to do that properly, so given the short time that I have, I've decided to focus on implementing an MVP (song player)first.
  const [musicSrc, setMusicSrc] = useState([]);

  useEffect(() => {
    fetch("https://api-stg.jam-community.com/song/trending").then(
      (response) => {
        response
          .json()
          .then((data) => {
            // it would more practical if the response file already contained the song sources
            setSoundtracks(data);
            // so I've decided to create my own src list with a sample file
            // this way I don't waste time searching manually for each of them
            setMusicSrc(Array(data.length).fill(audioFile));
          })
          .catch((error) => console.log(error)); // TODO: customize an error page
      }
    );
  }, []);

  // could do a TEST to check if Music Player component is present and has appropriate props
  return (
    <div className="App">
      <MusicPlayer soundtracks={soundtracks} musicSrc={musicSrc} />
    </div>
  );
};

export default App;
