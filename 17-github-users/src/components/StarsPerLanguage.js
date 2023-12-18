import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import classes from "../assets/css/StarsPerLanguage.module.css";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

export const StarsPerLanguage = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "270", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        decimals: "0",
        theme: "fusion",
        showLegend: false,
        showPercentValues: 0,
      },
      data: data,
    },
  };

  return (
    <article className={classes["starts_container"]}>
      <h2>Stars Per Language</h2>
      <div className={classes["starts_chart"]}>
        <ReactFC {...chartConfigs} />
      </div>
    </article>
  );
};
