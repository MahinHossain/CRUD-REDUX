import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowData from "./ShowData";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { updateItem, singlegetApiData, getApiData } from "../redux/Action";
export default function EditItem() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const { strProgramTypeName } = { ...id };
  // console.log(`id`, id);
  //

  const selectedData = useSelector((state) => state.reducer.singleitem);

  const getData = useSelector((state) => state.reducer.getData);

  const [updatedata, setupdateItem] = useState({});

  const handleInput = (value, name) => {
    let stateData = { ...updatedata };

    stateData[name] = value;

    setupdateItem(stateData);
  };

  useEffect(() => {
    dispatch(getApiData());
    setupdateItem(selectedData);
  }, [selectedData]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      updatedata.ysnActive == undefined ||
      updatedata.ysnActive === "Please select"
    ) {
      alert("select item");
      return false;
    }

    dispatch(updateItem(updatedata));
  };

  return (
    <div className="card bg-light w-100 m-3 p-3">
      <form onSubmit={(e) => handleUpdate(e)}>
        <h5 className=" text-center text-success">
          Id:{selectedData.intProgramTypeId}
        </h5>
        <div class="form-group ">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            value={updatedata.strProgramTypeName}
            class="form-control"
            aria-describedby="emailHelp"
            name="strProgramTypeName"
            placeholder="Enter name"
            onChange={(e) => handleInput(e.target.value, "strProgramTypeName")}
            required
          />
        </div>

        <div class="form-check"></div>
        <label> Select Active</label>
        <select
          class="form-select form-select mb-3"
          aria-label=".form-select-lg example"
          onChange={(e) => handleInput(e.target.value, "ysnActive")}
          name="ysnActive"
          required
          value={updatedata.ysnActive}
        >
          {" "}
          {/* <option selected>Please select</option>
          <option value="1">1</option>
          <option value="0">0</option> */}
          <option selected>Please select</option>
          <option value="1">1</option>
          <option value="0">0</option>
        </select>

        <button type="submit" class="btn btn-warning">
          Update
        </button>
      </form>
      <ShowData />
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ShowData from "./ShowData";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
// } from "react-router-dom";
// import { updateItem, singlegetApiData, getApiData } from "../redux/Action";
// export default function EditItem() {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   // const { strProgramTypeName } = { ...id };
//   // console.log(`id`, id);
//   //

//   const selectedData = useSelector((state) => state.reducer.singleitem);

//   console.log(`selectedData`, selectedData);

//   const getData = useSelector((state) => state.reducer.getData);

//   const [updatedata, setupdateItem] = useState({
//     strProgramTypeName: selectedData.strProgramTypeName,
//     ysnActive: selectedData.ysnActive,
//     intProgramTypeId: id,
//   });
//   console.log(`updatedata`, updatedata);

//   const handleInput = (value, name) => {
//     let stateData = { ...updatedata };

//     stateData[name] = value;

//     setupdateItem(stateData);
//   };
//   useEffect(() => {
//     dispatch(getApiData());
//   }, []);

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     if (updatedata.ysnActive == undefined) {
//       alert("select item");
//       return false;
//     }

//     dispatch(updateItem(updatedata));
//   };

//   return (
//     <div className="card bg-light w-100 m-3 p-3">
//       <form onSubmit={(e) => handleUpdate(e)}>
//         <div class="form-group ">
//           <label for="exampleInputEmail1">Name</label>
//           <input
//             type="text"
//             value={updatedata.strProgramTypeName}
//             class="form-control"
//             aria-describedby="emailHelp"
//             name="strProgramTypeName"
//             placeholder={updatedata.strProgramTypeName}
//             onChange={(e) => handleInput(e.target.value, "strProgramTypeName")}
//             required
//           />
//         </div>

//         <div class="form-check"></div>
//         <label> Select Active</label>
//         <select
//           class="form-select form-select mb-3"
//           aria-label=".form-select-lg example"
//           onChange={(e) => handleInput(e.target.value, "ysnActive")}
//           name="ysnActive"
//           required
//           value={updatedata.ysnActive}
//         >
//           <option selected required value="1">
//             1
//           </option>
//           <option required value="0">
//             0
//           </option>
//         </select>

//         <button type="submit" class="btn btn-warning">
//           Update
//         </button>
//       </form>
//       <ShowData />
//     </div>
//   );
// }
