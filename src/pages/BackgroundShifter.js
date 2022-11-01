import "./styles/BackgroundShifter.css";
import { useState } from "react";

let BackgroundShifter = () => {
  const [timesClicked, setTimesClicked] = useState(0);
  const [nowColor, setNowColor] = useState(`rgb(255, 255, 255)`);
  const [holderColors, setHolderColors] = useState([
    { color: "rgb(225, 255, 255)", key: 0 },
    { color: "rgb(233, 25, 25)", key: 1 },
    { color: "rgb(233, 252, 25)", key: 2 },
    { color: "rgb(23, 25, 25)", key: 3 },
    { color: "rgb(23, 253, 25)", key: 4 },
    { color: "rgb(233, 25, 252)", key: 5 },
    { color: "rgb(233, 25, 25)", key: 6 },
    { color: "rgb(233, 252, 25)", key: 7 },
    { color: "rgb(233, 25, 25)", key: 8 },
    { color: "rgb(23, 25, 225)", key: 9 },
  ]);

  let newColorSetter = () => {
    let RNG_color1 = Math.floor(Math.random() * 255);
    let RNG_color2 = Math.floor(Math.random() * 255);
    let RNG_color3 = Math.floor(Math.random() * 255);
    setNowColor(`rgb(${RNG_color1}, ${RNG_color2}, ${RNG_color3})`);
    myStyle = {
      backgroundColor: nowColor,
    };
    setHolderColors((prevArray) => {
      holderColors.pop();
      let newStats = {
        color: `rgb(${RNG_color1}, ${RNG_color2}, ${RNG_color3})`,
        key: timesClicked + 10,
      };
      holderColors.unshift(newStats);
      return prevArray;
    });
    setTimesClicked((prevNum) => prevNum + 1);
  };

  let myStyle = {
    backgroundColor: nowColor,
  };

  const colorElements = holderColors.map((item) => (
    <button
      onClick={() => navigator.clipboard.writeText(`${item.color}`)}
      style={{ backgroundColor: item.color }}
      key={item.key}
    ></button>
  ));

  return (
    <div className="BackgroundShifter" style={myStyle}>
      <div>
        <div>
          <h3>BACKGROUND SHIFTER</h3>
          <span>Times clicked: {timesClicked}</span>
          <button onClick={() => newColorSetter()}>SHIFT</button>
          <span>Click the colors and get the RGB colors for your CSS</span>
          <div className="cont_backgrounds">{colorElements}</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundShifter;
