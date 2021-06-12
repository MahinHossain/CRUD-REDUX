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
  console.log(`submitUserData`, value.ysnActive);
  // value.ysnActive = +value["ysnActive"];
  if (value.ysnActive.length == 0) {
    alert("please inser data ");
    return false;
  }
  axios
    .post(
      "https://iapps.akij.net/asll/public/api/v1/psd/programTypeStore",
      value
    )
    .then((res) => {
      console.log("inside then block");
      dispatch({ type: Types.SUBMIT_DATA, payload: res.data.data });
      // dispatch(getApiData());
      console.log("res => ", res);
    })
    .catch((err) => {
      console.log("error => ", err);
    });
};
