import { useEffect, useMemo, useState } from "react";
import { ChartData } from "../types/lineChart";
import {
  convertDataToPoints,
  createFillPath,
  createPath,
} from "../functions/chart";

export default function useSVGPath(data: ChartData, height: number) {
  const [space, setSpace] = useState<number | null>(null);

  const maxValue = useMemo(
    () => Object.values(data).reduce((a, b) => Math.max(a, b), -Infinity),
    [data]
  );

  function calcXSpacing() {
    const chartContainerWidth =
      document.querySelector("#ChartView")?.clientWidth;
    const spaceBetweenPoints = Math.floor(
      Number(chartContainerWidth) / (Object.keys(data).length - 1)
    );
    setSpace(spaceBetweenPoints);
  }

  const path = useMemo(() => {
    return space
      ? createPath(convertDataToPoints(data, space, height, maxValue))
      : null;
  }, [data, height, maxValue, space]);

  const fillPath = useMemo(
    () => createFillPath(space, path, Object.keys(data).length),
    [data, path, space]
  );

  useEffect(() => {
    calcXSpacing();
  }, []);

  return { path, fillPath };
}
