import { memo } from "react";
import { LineChartProps } from "../types/lineChart";
import "./lineChart.css";
import useSVGPath from "../hooks/useSvgPath";
import useGridGenerator from "../hooks/useGridGenerator";
const LineChart = ({
  width = "100%",
  height = "250px",
  background ="#242424",
  color = "#FFB800",
  points = { radius: 10, color: "var(--chart-accent-color)" },
  data,
  verticalGrids = {
    count: 5,
    color: "var(--chart-accent-color)",
    strokeDasharray: "5, 5",
  },
  horizontalGrids = {
    count: 12,
    color: "var(--chart-accent-color)",
    strokeDasharray: "4, 5",
  },
}: LineChartProps) => {
  const style = {
    "--chart-accent-color": color,
    height,
    width,
    color: "var(--chart-accent-color)",
    background
  } as React.CSSProperties;
  const { path, fillPath, points:pointPosition, width: containerCurrentWidth } = useSVGPath(data, 250, points.radius, width);
  const { horizontalGridsPoints, verticalGridsPoints } = useGridGenerator(
    horizontalGrids.count,
    verticalGrids.count,
    points.radius,
    containerCurrentWidth
  );

  return (
    <div id="pv-line-chart" style={style}>
      <svg id="ChartView" width="100%" height={height} className="chart" style={{ transform: "rotateX(180deg)" }}>
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor={`${color}00`} />
            <stop offset="100%" stopColor={`${color}22`} />
          </linearGradient>
        </defs>
        <g>
          {horizontalGridsPoints.map((i) => (
            <line
              key={i.x1 + i.y1}
              x1={i.x1}
              y1={i.y1}
              x2={i.x2}
              y2={i.y2}
              stroke={horizontalGrids.color}
              strokeWidth={0.5}
              strokeDasharray={horizontalGrids.strokeDasharray}
            />
          ))}
        </g>
        <g>
          {verticalGridsPoints.map((i) => (
            <line
              key={i.x1 + i.y1}
              x1={i.x1}
              y1={i.y1}
              x2={i.x2}
              y2={i.y2}
              stroke={verticalGrids.color}
              strokeWidth={0.5}
              strokeDasharray={verticalGrids.strokeDasharray}
            />
          ))}
        </g>
        {path && (
          <g
            style={{
              transform: `translate(${points.radius}px, ${points.radius}px)`,
            }}
          >
            <path fill="none" stroke="currentColor" strokeWidth="2px" d={path} className="path" />
            <path fill="url(#myGradient)" stroke="none" strokeWidth="2px" d={fillPath || ""} className="fadeIn" />
            {pointPosition.length &&
              pointPosition.map((point, index) => (
                <circle cx={point.x} cy={point.y} r={points.radius} fill={points.color} key={point.x + point.y + index} />
              ))}
          </g>
        )}
      </svg>
    </div>
  );
};

export default memo(LineChart);
