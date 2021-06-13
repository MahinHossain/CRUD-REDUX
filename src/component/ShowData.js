import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  getApiData,
  deleteitemAction,
  singlegetApiData,
} from "../redux/Action";
export default function ShowData() {
  const getData = useSelector((state) => state.reducer.getData);
  const loader = useSelector((state) => state.reducer.isloading);
  const [data, setdata] = useState(getData);

  const dispatch = useDispatch();
  const [searchData1, setsearchData] = useState("");
  useEffect(() => {
    dispatch(getApiData());
  }, [data]);

  const routeToEdit = () => {};
  const searchData = (e) => {
    setsearchData(e);
  };
  // const deleteData = (e) => {
  //   e.preventDefault();
  //   dispatch(deleteitemAction(item.intProgramTypeId));
  // };
  const singleitem = (item) => {
    dispatch(singlegetApiData(item));
  };

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
          {" "}
          <form>
            <div class="form-group mt-5  hover">
              <input
                type="text"
                class="form-control mr-sm-2 ml-0 w-25 float-right mb-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="search by name"
                onChange={(e) => searchData(e.target.value)}
              />
            </div>
          </form>
          <table class="table table-striped table-hover  table-bordered  mt-5  table-responsive-md">
            <thead>
              <tr>
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
                .map((item) => (
                  <tr>
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
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch(deleteitemAction(item.intProgramTypeId))
                        }
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
    </div>
  );
}
