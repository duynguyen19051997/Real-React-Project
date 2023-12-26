import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import classes from "../assets/css/MostForked.module.css";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

export const MostForked = ({ data }) => {
  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "270", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        xAxisName: "Repos",
        yAxisName: "Forks",
        numberSuffix: "",
        theme: "fusion",
      },
      data: data,
    },
  };

  return (
    <article className={classes["most_forked_container"]}>
      <h2>Most Forked</h2>
      <div className={classes["most_forked_chart"]}>
        <ReactFC {...chartConfigs} />
      </div>
    </article>
  );
};
