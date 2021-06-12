import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function EditItem() {
  const handleUpdate = (e) => {
    e.prevetDefault();
  };
  return (
    <form onSubmit={(e) => handleUpdate(e)}>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          //   value={userinput.strProgramTypeName}
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          //   onChange={(e) => handleInput(e.target.value, "strProgramTypeName")}
          name="strProgramTypeName"
          required
        />
      </div>

      <div class="form-check"></div>
      <select
        class="form-select form-select mb-3"
        aria-label=".form-select-lg example"
        // onChange={(e) => handleInput(e.target.value, "ysnActive")}
        name="ysnActive"
        // value={userinput.ysnActive}
        required
      >
        <option selected>Select Active or Not</option>
        <option>1</option>
        <option>0</option>
        {/* onChange={(e) => handleInput(e.target.value)} */}
      </select>

      <button type="submit" class="btn btn-warning">
        Update
      </button>
    </form>
  );
}
