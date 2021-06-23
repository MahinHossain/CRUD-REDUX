import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Alerts from "./Alerts";
import {
  getApiData,
  deleteitemAction,
  singlegetApiData,
} from "../redux/Action";
export default function ShowData() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getData = useSelector((state) => state.reducer.getData);
  const loader = useSelector((state) => state.reducer.isloading);
  const singleitem1 = useSelector((state) => state.reducer.singleitem);
  const [data, setdata] = useState(getData);
  console.log(`getData`, getData);

  const tableItem = useRef([]);
  const Chekboxref = useRef([]);
  console.log("tableItem -> ", tableItem);

  const [check, setcheck] = useState([]);
  const [checkTrue, setcheckTrue] = useState(false);
  const dispatch = useDispatch();
  const [searchData1, setsearchData] = useState("");
  const [showModal, setShowModal] = useState(false);

  const searchData = (e) => {
    setsearchData(e);
  };

  const singleitem = (item) => {
    dispatch(singlegetApiData(item));
  };
  const itemCheck = (event) => {
    const checkClone = check.concat(event.target.value);

    setcheck(checkClone);
  };

  const checkboxHandler = (e, index) => {
    console.log(`tableItem`, tableItem);
    if (e.target.checked) {
      tableItem.current[index].style.backgroundColor = "red";
    } else {
      tableItem.current[index].style.backgroundColor = "";
    }
    console.log(`tableItem curent back`, tableItem);
    // if (tableItem.current[index].style.backgroundColor === "green") {
    //   tableItem.current[index].style.backgroundColor = "";

    //   return;
    // }
    // console.log(`item`, item);
  };
  const checkboxHandlerTh = (e) => {
    console.log(`Chekboxref`, Chekboxref);
    Chekboxref.current.forEach((checkbox) => {
      checkbox.checked = !checkbox.checked;
    });

    setcheckTrue(e.target.checked);
  };

  console.log("table item => ", tableItem);

  return (
    <div>
      {!loader ? (
        <div class="d-flex align-items-center text-danger">
          <h3>Loading...</h3>
          <div
            class="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : (
        <>
          {getData.length == 0 ? (
            <div class="alert alert-danger text-center" role="alert">
              There is no data
            </div>
          ) : (
            <>
              {" "}
              <form>
                <div class="form-group mt-5  hover">
                  <input
                    type="text"
                    class="form-control mr-sm-2 ml-0 w-25 float-right mb-4"
                    aria-describedby="emailHelp"
                    placeholder="search by name"
                    onChange={(e) => searchData(e.target.value)}
                  />
                </div>
              </form>
              <table class="table table-striped table-hover  table-bordered  mt-5  table-responsive-md table-responsive-sm">
                <thead>
                  <tr className={checkTrue ? "bg-warning" : ""}>
                    <th scope="col" className=" btn-warning">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                          // value={item.intProgramTypeId}
                          onChange={(e) => checkboxHandlerTh(e)}
                        />{" "}
                      </div>
                    </th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Active Or Not</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {getData
                    .filter((filterItem) => {
                      if (searchData1.length > 0) {
                        return filterItem.strProgramTypeName
                          .toLowerCase()
                          .includes(searchData1.toLowerCase());
                      } else {
                        return filterItem;
                      }
                    })
                    .map((item, i) => (
                      <tr ref={(el) => (tableItem.current[i] = el)}>
                        <td>
                          <div class="form-check">
                            <input
                              ref={(el) => (Chekboxref.current[i] = el)}
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                              value={item.intProgramTypeId}
                              onChange={(e) => checkboxHandler(e, i)}
                              itemCheck
                            />
                            <label
                              class="form-check-label"
                              for="exampleCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>{item.intProgramTypeId}</td>
                        <td>{item.strProgramTypeName}</td>
                        <td>{item.ysnActive}</td>
                        <td className=" justify-content-around m-3 p-3">
                          <button className="btn btn-success ">
                            <Link
                              to={`/edit/${item.intProgramTypeId}`}
                              className="text-light"
                              onClick={() => singleitem(item)}
                            >
                              Edit
                            </Link>
                          </button>

                          <button
                            className="btn btn-danger ml-3"
                            onClick={() => {
                              if (window.confirm("Delete the item?")) {
                                dispatch(
                                  deleteitemAction(item.intProgramTypeId)
                                );
                              }
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </>
          )}
        </>
      )}
    </div>
  );
}
