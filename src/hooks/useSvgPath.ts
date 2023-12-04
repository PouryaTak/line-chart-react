import { useMemo, useRef, useState } from "react";
import { ChartData, Points } from "../types/lineChart";
import {
  convertDataToPoints,
  createFillPath,
  createPath,
} from "../functions/chart";
import useResizeListener from "./useResizeListener";

export default function useSVGPath(
  data: ChartData,
  height: number,
  pointRadios: number,
  container: string
) {
  const [space, setSpace] = useState<number | null>(null);
  const [width, setWidth] = useState<number>(document.querySelector("#ChartView")?.clientWidth || 0);
  const points = useRef<Points[]>([]);

  const maxValue = useMemo(
    () => Object.values(data).reduce((a, b) => Math.max(a, b), -Infinity),
    [data]
  );
  const minValue = useMemo(
    () => Object.values(data).reduce((a, b) => Math.min(a, b), -Infinity),
    [data]
  );

  const calcXSpacing = () => {
    const chartContainerWidth =
      document.querySelector("#ChartView")?.clientWidth;
    const pointsSpace = pointRadios * 2;
    const spaceBetweenPoints = Math.floor(
      (Number(chartContainerWidth) - pointsSpace) /
        (Object.keys(data).length - 1)
    );
    setWidth(Number(chartContainerWidth))
    setSpace(spaceBetweenPoints);
  };

  const path = useMemo(() => {
    if (space) {
      points.current = convertDataToPoints(
        data,
        space,
        height,
        maxValue,
        pointRadios
      );
      return createPath(points.current);
    }
    return null;
  }, [data, height, maxValue, pointRadios, space]);

  const fillPath = useMemo(
    () => createFillPath(space, path, Object.keys(data).length),
    [data, path, space]
  );

  useResizeListener(calcXSpacing,[container]);

  return { path, fillPath, points: points.current, maxValue, minValue, width };
}
