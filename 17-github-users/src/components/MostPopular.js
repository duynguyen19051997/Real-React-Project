import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import classes from "../assets/css/MostPopular.module.css";

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
  type: "column2d", // The chart type
  width: "100%", // Width of the chart
  height: "270", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    chart: {
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",
    },
    data: chartData,
  },
};

export const MostPopular = () => {
  return (
    <article className={classes["most_popular_container"]}>
      <h2>Most Popular</h2>
      <div className={classes["most_popular_charts"]}>
        <ReactFC {...chartConfigs} />
      </div>
    </article>
  );
};
