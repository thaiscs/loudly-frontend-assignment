import styles from "../styles/MusicPlayer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const LikeButton = ({ songId }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeActions = () => {
    console.log("songId", songId);
    !liked ? setLiked(true) : setLiked(false);
    updateLikes();
  };

  const updateLikes = () => {
    const requestOptions = {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*",
        "X-API-KEY": "___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8",
      },
      body: JSON.stringify({ id: songId }),
    };
    fetch(
      "https://api-stg.jam-community.com/interact/like",
      requestOptions
    ).then((response) => console.log("res", response));
  };

  return (
    <div
      className={`${styles.button} like-button`}
      onClick={(e) => {
        e.preventDefault();
        handleLikeActions();
      }}
    >
      <FontAwesomeIcon icon={faHeart} style={liked ? { color: "red" } : {}} />
    </div>
  );
};

export default LikeButton;
