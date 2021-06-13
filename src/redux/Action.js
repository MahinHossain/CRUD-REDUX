import axios from "axios";
import * as Types from "./Types";
export const getApiData = () => async (dispatch) => {
  let data = [];
  let isloading1 = false;

  await axios
    .get("https://iapps.akij.net/asll/public/api/v1/psd/getProgramType")
    .then((res) => {
      data = res.data.data;
      isloading1 = true;

      data.sort();
      data.reverse();
      dispatch({ type: Types.GET_API_DATA, payload: data });
      dispatch({ type: Types.isloading, payload: isloading1 });
    });
};
export const getUserData = (value) => (dispatch) => {
  dispatch({ type: Types.GET_USER_INPUT_DATA, payload: value });
};
export const submitUserData = (value) => (dispatch) => {
  // value.ysnActive = +value["ysnActive"];

  axios
    .post(
      "https://iapps.akij.net/asll/public/api/v1/psd/programTypeStore",
      value
    )
    .then((res) => {
      dispatch({ type: Types.SUBMIT_DATA, payload: res.data.data });
    })
    .catch((err) => {
      console.log("error => ", err);
    });
};
export const deleteitemAction = (intProgramTypeId) => (dispatch) => {
  axios
    .delete(
      `https://iapps.akij.net/asll/public/api/v1/psd/programTypeDelete/${intProgramTypeId}`
    )
    .then((res) => {
      alert("Deleted");
      dispatch(getApiData());
    });
};
export const updateItem = (updatedata) => (dispatch) => {
  if (updatedata.ysnActive.length == 0) {
    alert("please select activity,");
    return false;
  }

  axios
    .put(
      `https://iapps.akij.net/asll/public/api/v1/psd/programTypeUpdate`,
      updatedata
    )
    .then((res) => {
      alert("Data Updated");
    });
};

export const singlegetApiData = (item) => (dispatch) => {
  dispatch({ type: Types.GET_SINGLE_API_DATA, payload: item });
};
