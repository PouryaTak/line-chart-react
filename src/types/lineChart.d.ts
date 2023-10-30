export type ChartData = {
  [key: string]: number;
}
export type LineChartProps = {
  width?: string;
  height?: string;
  color?: string;
  data: ChartData
};

export type Result = {
  x: number;
  y:number;
}

export type Points = Result & {
  key:string
  value:number
}
