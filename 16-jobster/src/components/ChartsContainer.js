import React, { useState } from "react";
import { AreaCharts, BarChart } from "./index";
import { useSelector } from "react-redux";

import classes from "../assets/css/ChartsContainer.module.css";

export const ChartsContainer = () => {
  const [isAreaChart, setIsAreaChart] = useState(false);
  const { monthlyApplications } = useSelector((store) => store.allJobs);

  return (
    <section className={classes["charts_container"]}>
      <h3>Monthly Applications</h3>
      <button
        className={`btn ${classes["btn_change_chart"]}`}
        onClick={() => setIsAreaChart(!isAreaChart)}
      >
        {isAreaChart ? "Bar Chart" : "Area Chart"}
      </button>
      {isAreaChart && <AreaCharts data={monthlyApplications} />}
      {!isAreaChart && <BarChart />}
    </section>
  );
};
