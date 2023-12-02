export type ChartData = {
  [key: string]: number;
}
export type LineChartProps = {
  width?: string;
  height?: string;
  color?: string;
  pointRadios: number;
  data: ChartData;
  v_grid: null | number
  h_grid: null | number
};

export type Result = {
  x: number;
  y:number;
}

export type Points = Result & {
  key:string
  value:number
}
