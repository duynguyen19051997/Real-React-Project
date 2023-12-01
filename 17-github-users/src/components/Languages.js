import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import classes from "../assets/css/Languages.module.css";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  {
    label: "Venezuela",
    value: "290",
  },
  {
    label: "Saudi",
    value: "260",
  },
  {
    label: "Canada",
    value: "180",
  },
  {
    label: "Iran",
    value: "140",
  },
  {
    label: "Russia",
    value: "115",
  },
  {
    label: "UAE",
    value: "100",
  },
  {
    label: "US",
    value: "30",
  },
  {
    label: "China",
    value: "30",
  },
];

const chartConfigs = {
  type: "pie2d", // The chart type
  width: "100%", // Width of the chart
  height: "270", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    chart: {
      numberPrefix: "$",
      decimals: "0",
      theme: "fusion",
      showLegend: false,
    },
    data: chartData,
  },
};

export const Languages = () => {
  return (
    <article className={classes["languages_container"]}>
      <h2>Languages</h2>
      <div className={classes["languages_chart"]}>
        <ReactFC {...chartConfigs} />
      </div>
    </article>
  );
};
