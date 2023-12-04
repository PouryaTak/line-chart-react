export type ChartData = {
  [key: string]: number;
}

type GridProps = {
  count: null | number;
  color: string;
  strokeDasharray: string;
}

export type LineChartProps = {
  width?: string;
  height?: string;
  background?: string,
  color?: string;
  points?: {
    radius: number;
    color: string
  };
  data: ChartData;
  verticalGrids?: GridProps;
  horizontalGrids?: GridProps
};

export type Result = {
  x: number;
  y:number;
}

export type Points = Result & {
  key:string
  value:number
}
