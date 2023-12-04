import LineChart from "./lineChart";

export default {
  component: LineChart,
  title: "LineChart",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    width: "100%",
    height: "250px",
    background :"#242424",
    color: "#FFB800",
    points: { radius: 10, color: "var(--chart-accent-color)" },
    data: {
      Aug: 0,
      Jul: 10,
      Jun: 4,
    },
    verticalGrids: {
      count: 5,
      color: "var(--chart-accent-color)",
      strokeDasharray: "5, 5",
    },
    horizontalGrids: {
      count: 12,
      color: "var(--chart-accent-color)",
      strokeDasharray: "4, 5",
    },
  },
};

