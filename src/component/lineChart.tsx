import { memo } from "react";
import { LineChartProps } from "../types/lineChart";
import "./lineChart.css";
import useSVGPath from "../hooks/useSvgPath";
import useGridGenerator from "../hooks/useGridGenerator";
const LineChart = ({
  width = "100%",
  height = "250px",
  color = "#FFB800",
  pointRadios = 10,
  data,
  h_grid = 12,
  v_grid = 12,
}: LineChartProps) => {
  const style = {
    "--chart-accent-color": color,
    height,
    width,
    color: "var(--chart-accent-color)",
  } as React.CSSProperties;
  const { path, fillPath, points } = useSVGPath(data, 250, pointRadios);
  const { horizontalGrids, verticalGrids } = useGridGenerator(h_grid, v_grid, pointRadios);
  console.log(verticalGrids);

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
          {horizontalGrids.map((i) => (
            <line
              key={i.x1 + i.y1}
              x1={i.x1}
              y1={i.y1}
              x2={i.x2}
              y2={i.y2}
              stroke={color}
              strokeWidth={0.5}
              strokeDasharray={"5,5"}
            />
          ))}
        </g>
        <g>
          {verticalGrids.map((i) => (
            <line
              key={i.x1 + i.y1}
              x1={i.x1}
              y1={i.y1}
              x2={i.x2}
              y2={i.y2}
              stroke={color}
              strokeWidth={0.5}
              strokeDasharray={"5,4"}
            />
          ))}
        </g>
        {path && (
          <g
            style={{
              transform: `translate(${pointRadios}px, ${pointRadios}px)`,
            }}
          >
            {points.length &&
              points.map((point, index) => (
                <circle cx={point.x} cy={point.y} r={pointRadios} fill={color} key={point.x + point.y + index} />
              ))}
            <path fill="none" stroke="currentColor" strokeWidth="2px" d={path} className="path" />
            <path fill="url(#myGradient)" stroke="none" strokeWidth="2px" d={fillPath || ""} className="fadeIn" />
          </g>
        )}
      </svg>
    </div>
  );
};

export default memo(LineChart);
