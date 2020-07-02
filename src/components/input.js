import React, { useState } from "react";

export const Input = ({ handleAddTodo }) => {
  const [inputText, setInputText] = useState("");

  const AddTodo = () => {
    if (inputText !== "") {
      handleAddTodo({
        id: Date.now(),
        title: inputText,
        isCompleted: false,
        createdOn: new Date().toLocaleTimeString(),
      });
      setInputText("");
    } else {
      alert("Please Fill the field");
    }
  };

  return (
    <div className="input-div">
      <h2>Task</h2>
      <input
        type="text"
        onKeyPress={(event) => {
          if (event.charCode === 13) {
            AddTodo();
          }
        }}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={() => AddTodo()}>
        <i className="fa fa-plus-square"></i>
      </button>
    </div>
  );
};
