import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MusicPlayer = ({ soundtracks }) => {
  return (
    <ul className="music-list">
      {soundtracks.map((song) => (
        <li key={song.id} className="soundtrack">
          <div className="thumbnail">
            <a target="_blank" href={song.cover_image_path}>
              <img src={song.cover_image_path} atl="cover song image" />
            </a>
          </div>

          <div className="song-title">{song.name}</div>

          <div className="play-button">
            <FontAwesomeIcon icon={faPlayCircle} />
          </div>

          <div className="pause-button">
            <FontAwesomeIcon icon={faPauseCircle} />
          </div>

          <div className="like-button">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MusicPlayer;
