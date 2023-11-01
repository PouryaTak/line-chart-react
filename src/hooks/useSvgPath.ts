import { useEffect, useMemo, useRef, useState } from "react";
import { ChartData, Points } from "../types/lineChart";
import {
  convertDataToPoints,
  createFillPath,
  createPath,
} from "../functions/chart";

export default function useSVGPath(
  data: ChartData,
  height: number,
  pointRadios: number
) {
  const [space, setSpace] = useState<number | null>(null);
  const points = useRef<Points[]>([]);

  const maxValue = useMemo(
    () => Object.values(data).reduce((a, b) => Math.max(a, b), -Infinity),
    [data]
  );

  function calcXSpacing() {
    const chartContainerWidth =
      document.querySelector("#ChartView")?.clientWidth;
    const pointsSpace = pointRadios * 2;
    const spaceBetweenPoints = Math.floor(
      (Number(chartContainerWidth) - pointsSpace) /
        (Object.keys(data).length - 1)
    );
    setSpace(spaceBetweenPoints);
  }

  const path = useMemo(() => {
    if (space) {
      points.current = convertDataToPoints(
        data,
        space,
        height - pointRadios,
        maxValue
      );
      return createPath(points.current);
    }
    return null;
  }, [data, height, maxValue, space]);

  const fillPath = useMemo(
    () => createFillPath(space, path, Object.keys(data).length),
    [data, path, space]
  );

  useEffect(() => {
    calcXSpacing();
  }, []);

  return { path, fillPath, points: points.current };
}
