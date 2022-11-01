import "./styles/DailySchedule.css";
import { useState, useEffect } from "react";

let date = new Date();
let months = date.getMonth();
let day = date.getDate();
let hours = date.getHours();

let DailySchedule = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("DS_Items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("DS_Items", JSON.stringify(items));
  }, [items]);

  const handleCheckbox = (e, key) => {
    if (e.target.checked === true) {
      const updatedState = items.map((obj) => {
        if (obj.key === key) {
          return {
            ...obj,
            completed: true,
            lastUpdate: {
              months: months,
              day: day,
              hours: hours,
            },
          };
        } else return obj;
      });
      console.log(updatedState);
      setItems(updatedState);
    } else if (e.target.checked === false) {
      const updatedState = items.map((obj) => {
        if (obj.key === key) {
          return { ...obj, completed: false };
        } else return obj;
      });
      console.log(updatedState);
      setItems(updatedState);
    }
  };

  let myStyle = {
    TextDecoration: "underline",
    backgroundColor: "green",
  };

  let doSomething = () => {
    let newDaily = {
      name: inputText,
      completed: false,
      key: items.length + 1,
    };
    setItems((prevData) => [...prevData, newDaily]);
  };

  let deleteItem = (name, key) => {
    let dialog = window.confirm(`Are you sure you want to delete ${name}`);
    if (dialog) {
      setItems((current) => current.filter((item) => item.key !== key));
    } else return;
  };

  let dailyElements = items.map((item) => {
    if (item.completed) {
      return (
        <div key={item.key} style={myStyle}>
          <input
            type="checkbox"
            defaultChecked
            onChange={(e) => handleCheckbox(e, item.key)}
          ></input>
          <p>{item.name}</p>
          <button
            onClick={() => deleteItem(item.name, item.key)}
            className="delete"
          >
            Delete
          </button>
        </div>
      );
    } else {
      return (
        <div key={item.key}>
          <input
            type="checkbox"
            onChange={(e) => handleCheckbox(e, item.key)}
          ></input>
          <p>{item.name}</p>
          <button
            onClick={() => deleteItem(item.name, item.key)}
            className="delete"
          >
            Delete
          </button>
        </div>
      );
    }
  });

  return (
    <div className="DailySchedule">
      <div>
        <input type="text" onChange={handleInput}></input>
        <button onClick={() => doSomething()}>ADD NEW DAILY</button>
        <div className="dailyTasks">{dailyElements}</div>
      </div>
    </div>
  );
};

export default DailySchedule;
