import "./styles/MusicPlayer.css";

let MusicPlayer = () => {
  return (
    <div className="MusicPlayer_Component">
      <div>
        <div className="playlist">
          <div>Example 1</div>
          <div>Example 2</div>
          <div>Example 3</div>
          <div>Example 4</div>
          <div>Example 5</div>
          <div>Example 6</div>
          <div>Example 7</div>
        </div>
        <div className="infoSong">
          <div className="displayImage">
            <img src="test" alt="asd"></img>
          </div>
          <div className="player"></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
