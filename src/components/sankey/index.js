import React from "react";
import { Chart } from "react-google-charts";

const colors = [
  "#a6cee3",
  "#b2df8a",
  "#fb9a99",
  "#fdbf6f",
  "#cab2d6",
  "#ffff99",
  "#1f78b4",
  "#33a02c",
];

const options = {
  height: 600,
  sankey: {
    node: {
      colors: colors,
    },
    link: {
      colorMode: "gradient",
      colors: colors,
    },
  },
};
const SankeyChart = ({ data }) => {
  return (
    <Chart
      chartType="Sankey"
      data={[["From", "To", "Amount"], ...data]}
      options={options}
    />
  );
};

export default SankeyChart;
