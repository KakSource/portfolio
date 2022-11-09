import "./styles/MemeGenerator.css";

let MemeGenerator = () => {
  return (
    <div className="MemeGenerator">
      <div>
        <div>
          <input type="text" placeholder="Upper text"></input>
          <input type="text" placeholder="Bottom text"></input>
        </div>
        <button>Upload image?</button>
        <button>Generate new meme</button>
        <div className="holderImg">
          <img src="testos" alt="meme image uploaded display"></img>
        </div>
      </div>
    </div>
  );
};

export default MemeGenerator;
