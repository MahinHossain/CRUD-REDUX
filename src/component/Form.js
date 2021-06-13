import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getUserData, getApiData, submitUserData } from "../redux/Action";
import { Button, Table, Form, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function GetApiData() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.reducer.getData);
  const apiData = useSelector((state) => state.reducer.userInputData);
  const submitUserdarta = useSelector((state) => state.reducer.submitData);
  const [userinput, setuserinput] = useState({ apiData });
  const [state, setstate] = useState({
    strProgramTypeName: " ",
    ysnActive: " ",
  });

  const handleInput = (value, name) => {
    let stateData = { ...state };
    stateData[name] = value;

    setstate(stateData);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(`state`, state);

    if (state.ysnActive == " ") {
      alert("please select activit");
      return false;
    }
    console.log(`state`, state);
    dispatch(submitUserData(state));
  };
  // useEffect(() => {}, []);

  return (
    <div className="mt-5">
      {" "}
      <form onSubmit={(e) => handlesubmit(e)}>
        <div class="form-group">
          <label className="text-danger font-weight-bold">Name</label>
          <input
            value={userinput.strProgramTypeName}
            type="text"
            class="form-control "
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => handleInput(e.target.value, "strProgramTypeName")}
            name="strProgramTypeName"
            required
          />
        </div>

        <div class="form-check"></div>

        <label className="text-danger font-weight-bold"> Please select</label>
        <select
          class="form-select form-select mb-3"
          aria-label=".form-select-lg example"
          onChange={(e) => handleInput(e.target.value, "ysnActive")}
          name="ysnActive"
          value={userinput.ysnActive}
        >
          {/* <option >1</option>
          <option>0</option> */}

          <option selected value="1">
            1
          </option>
          <option selected value="0">
            0
          </option>
        </select>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
