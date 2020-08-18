import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const newItem = () => {
    props.onClick(inputText);
    setInputText("");
  };

  function handleKeyPress(e) {
    e.which === 13 && newItem();
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        type="text"
        value={inputText}
      />
      <button onClick={newItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
