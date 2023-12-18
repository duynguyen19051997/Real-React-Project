import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import classes from "../assets/css/Languages.module.css";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

export const Languages = ({ data }) => {
  const chartConfigs = {
    type: "pie2d", // The chart type
    width: "100%", // Width of the chart
    height: "270", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        decimals: "0",
        theme: "fusion",
        showLegend: false,
      },
      data: data,
    },
  };

  return (
    <article className={classes["languages_container"]}>
      <h2>Languages</h2>
      <div className={classes["languages_chart"]}>
        <ReactFC {...chartConfigs} />
      </div>
    </article>
  );
};
