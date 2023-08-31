import React, { useState } from "react";
import "./InputField.css";

const InputField = (props) => {
  const [searchPlace, setSearchPlace] = useState("");

  const searchHandler = (e) => {
    setSearchPlace(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearchPlace(searchPlace);
    setSearchPlace("");
  };

  return (
    <div className="input-container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your city"
          value={searchPlace}
          onChange={searchHandler}
        />

        <div className="btn_submit">
          <button onSubmit={submitHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputField;
