import React, { useState } from "react";

import "./../App.css";

export const Items = ({ data, handleRemoveTodo, handleEditTodo }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(data.title);

  const handleSaveBtn = () => {
    handleEditTodo({
      ...data,
      title: title,
      updatedOn: new Date().toLocaleTimeString(),
    });
    setTitle("");
    setEditMode(!isEditMode);
  };

  return (
    <div className="items">
      <i className="fa fa-times" onClick={() => handleRemoveTodo(data.id)}></i>
      <i
        className="fa fa-edit"
        onClick={() => {
          setEditMode(!isEditMode);
        }}
      ></i>
      {isEditMode ? (
        <React.Fragment>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={() => handleSaveBtn()}>Save</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>{data.title}</p>
          <span>{data.createdOn}</span>
        </React.Fragment>
      )}
    </div>
  );
};
