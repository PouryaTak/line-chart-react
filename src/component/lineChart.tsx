import { memo } from "react";
import { LineChartProps } from "../types/lineChart";
import "./lineChart.css";
import useSVGPath from "../hooks/useSvgPath";
const LineChart = ({
  width = "100%",
  height = "250px",
  color = "#FFB800",
  data,
}: LineChartProps) => {
  const style = {
    "--chart-accent-color": color,
    height,
    width,
    color: "var(--chart-accent-color)",
  } as React.CSSProperties;
  const { path, fillPath } = useSVGPath(data, 250);

  console.count();

  return (
    <div id="pv-line-chart" style={style}>
      <svg
        id="ChartView"
        width="100%"
        height={height}
        className="chart"
        style={{ transform: "rotateX(180deg)" }}
      >
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor={`${color}00`} />
            <stop offset="100%" stopColor={`${color}22`} />
          </linearGradient>
        </defs>
        {path && (
          <g className="translate-y-3 translate-x-[40px]">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2px"
              d={path}
              className="path"
            />
            <path
              fill="url(#myGradient)"
              stroke="none"
              strokeWidth="2px"
              d={fillPath || ""}
              className="fadeIn"
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default memo(LineChart);
