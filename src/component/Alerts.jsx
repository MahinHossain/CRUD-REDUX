import React, { Component, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
function ComponentName() {
  const [DDL1, setDDL1] = useState([]);
  const [DDL2, setDDL2] = useState([]);
  const [selectddl, setselected] = useState("");
  const [selectdds, setselecteds] = useState("");
  const data = [
    { country: "Russia", area: 12 },
    { country: "Canada", area: 7 },
    { country: "USA", area: 7 },
    { country: "China", area: 7 },
    { country: "Brazil", area: 6 },
    { country: "Australia", area: 5 },
    { country: "India", area: 2 },
    { country: "Others", area: 55 },
  ];

  const selectChange = (e) => {
    setselected(e.target.value);
    const value = DDL1.filter((item) => {
      return e.target.value === item.name;
    }).map((item) => item.DDL2);

    setDDL2(value[0]);
  };
  const selectChanges = (e) => {
    console.log(`e`, e.target.value);
    setselecteds(e.target.value);
  };
  console.log(`selectdds`, selectdds);
  console.log(`selectdds`, selectddl);
  return (
    <div>
      <Paper>
        <Chart data={data}>
          <PieSeries valueField="area" argumentField="country" />
          <Title text="Area of Countries" />
          <Animation />
        </Chart>
      </Paper>
    </div>
  );
}

export default ComponentName;
