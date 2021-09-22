import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "../styles/MusicPlayer.module.css";
import LikeButton from "./LikeButton";

const MusicPlayer = ({ soundtracks, musicSrc }) => {
  const music = musicSrc.map((src) => new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const pausePreviousSong = () => {
    console.log("prev", music[currentPlaying]);
    if (isPlaying) music[currentPlaying].pause();
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
            onClick={() => music[key].play()}
          >
            <FontAwesomeIcon icon={faPlayCircle} />
          </div>
          <div
            className={`${styles.button} pause-button`}
            onClick={() => music[key].pause()}
          >
            <FontAwesomeIcon icon={faPauseCircle} />
          </div>
          <LikeButton songId={song.id} />
        </li>
      ))}
    </ul>
  );
};

export default MusicPlayer;
