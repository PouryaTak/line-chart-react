import { memo } from "react";
import { LineChartProps } from "../types/lineChart";
import "./lineChart.css";
import useSVGPath from "../hooks/useSvgPath";
const LineChart = ({
  width = "100%",
  height = "250px",
  color = "#FFB800",
  pointRadios = 10,
  data,
}: LineChartProps) => {
  const style = {
    "--chart-accent-color": color,
    height,
    width,
    color: "var(--chart-accent-color)",
  } as React.CSSProperties;
  const { path, fillPath, points } = useSVGPath(data, 250, pointRadios);

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
          <g style={{transform:`translate(${pointRadios}px, ${pointRadios}px)`}}>
            {points.length &&
              points.map((point) => (
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={pointRadios}
                  fill={color}
                />
              ))}
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
