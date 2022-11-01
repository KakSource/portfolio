import "./styles/ToDoList.css";
import { useState, useEffect } from "react";

let date = new Date();
let years = date.getFullYear();
let months = date.getMonth();
let days = date.getDay();

let reloadDate = () => {
  years = date.getFullYear();
  months = date.getMonth();
  days = date.getDay();
};

let ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [finishedItems, setFinishedItems] = useState([]);

  useEffect(() => {
    const finishedItems = JSON.parse(
      localStorage.getItem("ToDoList_Items_Finished")
    );
    if (finishedItems) {
      setFinishedItems(finishedItems);
    }
    const items = JSON.parse(localStorage.getItem("ToDoList_Items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ToDoList_Items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(
      "ToDoList_Items_Finished",
      JSON.stringify(finishedItems)
    );
  }, [finishedItems]);

  const addNew = () => {
    let newTask = {
      name: inputValue,
      key: items.length + 1,
    };
    setItems((prevState) => [...prevState, newTask]);
    console.log(newTask);
  };

  const deleteItem = (name, key) => {
    let dialog = window.confirm(`Are you sure you want to delete ${name}?`);
    if (dialog) {
      setItems((current) => current.filter((item) => item.key !== key));
    } else return;
  };

  const deleteCompletedItem = (name, key) => {
    let dialog = window.confirm(
      `Are you sure you want to delete the completed task ${name}?`
    );
    if (dialog) {
      setFinishedItems((current) => current.filter((item) => item.key !== key));
    } else return;
  };

  let completeItem = (name, key) => {
    let dialog = window.confirm(`Did you really complete the task ${name}`);
    if (dialog) {
      reloadDate();
      let completedTask = {
        name: name,
        key: finishedItems.length + 1,
        completion: `Completed on ${months}/${days}/${years}`,
      };
      setFinishedItems((prevArray) => [...prevArray, completedTask]);
      setItems((current) => current.filter((item) => item.key !== key));
    } else return;
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  let contents_list = items.map((item) => (
    <div key={item.key}>
      <div className="item">
        <p className="centered">{item.name}</p>
        <div className="grid-task-btns">
          <button
            onClick={() => deleteItem(item.name, item.key)}
            className="delete"
          >
            DELETE ENTRY
          </button>
          <button
            onClick={() => completeItem(item.name, item.key)}
            className="complete"
          >
            COMPLETED TASK
          </button>
        </div>
      </div>
    </div>
  ));

  let contents_list_finished = finishedItems.map((item) => (
    <div key={item.key}>
      <div className="item-completed">
        <p className="centered">{item.name}</p>
        <span className="detail_finished">{item.completion}</span>
        <button
          onClick={() => deleteCompletedItem(item.name, item.key)}
          className="delete"
        >
          DELETE ENTRY
        </button>
      </div>
    </div>
  ));

  return (
    <div className="toDoList">
      <div className="game">
        <div>
          <input
            onChange={handleInput}
            placeholder="Enter new task"
            type="text"
          ></input>
          <button onClick={() => addNew()}>
            <b>ADD NEW</b>
          </button>
        </div>
        {contents_list}
        <img src="./imgs/down-arrow.png" alt="down arrow icon"></img>
        {contents_list_finished}
      </div>
    </div>
  );
};
export default ToDoList;
