import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/MusicPlayer.module.css";
import LikeButton from "./LikeButton";

const MusicPlayer = ({ soundtracks, musicSrc }) => {
  // this variable creates audio players for all tracks
  const music = musicSrc.map((src) => new Audio(src));
  // state management to play/pause previous/next song
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [playAgain, setPlayAgain] = useState(null);
  const [playBack, setPlayback] = useState(0);
  const [paused, setPaused] = useState(false);

  const changePlayingTime = () => {
    music[currentPlaying].currentTime = playBack;
  };

  // using Ref hook to save previously played song index value to set correct playback time
  const lastPlayedSong = useRef(null);

  const setPlayingTime = () => {
    if (playAgain === lastPlayedSong.current) {
      music[playAgain].currentTime = playBack;
    } else {
      music[playAgain].currentTime = 0;
    }
    music[playAgain].play();
  };
  useEffect(() => {
    if (currentPlaying || currentPlaying === 0) {
      // as 0 is a falsey value making that first song on the list wasn't playing
      paused ? changePlayingTime() : setPlayingTime();
    }

    return () => {
      // This is cleanup of the play effect to prevent unexpected behaviour of updating state diconnecting with the audio obj
      if (currentPlaying || currentPlaying === 0) music[currentPlaying].pause();
      // restoring pause state to adjust the flow effect
      if (paused) setPaused(false);
    };
  }, [playing, currentPlaying, music, playAgain]); // vars to watch

  const togglePlay = (key) => {
    setPlaying(true);
    setCurrentPlaying(key);
    setPlayAgain(key);
    setPaused(false);
    lastPlayedSong.current = playAgain;
  };

  return (
    <ul className="music-list">
      {soundtracks.map((song, key) => (
        <li key={song.id} className="soundtrack">
          <div className="thumbnail">
            <a target="_blank" href={song.cover_image_path} rel="noreferrer">
              <img
                src={song.cover_image_path}
                alt={"music " + song.name + " cover"}
              />
            </a>
          </div>
          <div className="song-title">{song.name}</div>
          <div
            className={`${styles.button} play-button`}
            onClick={() => {
              togglePlay(key);
            }}
          >
            <FontAwesomeIcon
              icon={faPlayCircle}
              style={
                currentPlaying === key
                  ? { transform: "scale(1.5)", color: "red" }
                  : { transform: "scale(1)", color: "blue" }
              }
            />
          </div>
          <div
            className={`${styles.button} pause-button`}
            onClick={() => {
              music[currentPlaying].pause();
              setPlayback(music[currentPlaying].currentTime);
              setPaused(true);
            }}
          >
            <FontAwesomeIcon
              icon={faPauseCircle}
              style={
                currentPlaying === key
                  ? { transform: "scale(1.5)", color: "red" }
                  : { transform: "scale(1)", color: "blue" }
              }
            />
          </div>
          <LikeButton songId={song.id} />
        </li>
      ))}
    </ul>
  );
};

export default MusicPlayer;
