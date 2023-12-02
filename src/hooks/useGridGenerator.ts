import { useMemo } from "react";
import useResizeListener from "./useResizeListener";

type Grid = {
  x1: string;
  x2: string;
  y1: string;
  y2: string;
};
export default function useGridGenerator(h_grid: number | null, v_grid: number | null, pointRadios: number) {
  
  const horizontalGrids = useMemo(() => {
    const horizontalStyle: Grid[] = [];
    if (h_grid === null) return horizontalStyle;
    for (let i = 0; i < h_grid; ++i) {
      horizontalStyle.push({
        x1: String(0 + pointRadios),
        x2: `calc(100% - ${pointRadios}px)`,
        y1: `calc((${i} * ((100% - (2 * ${pointRadios}px)) / (${h_grid - 1}))) + ${pointRadios}px`,
        y2: `calc((${i} * ((100% - (2 * ${pointRadios}px)) / (${h_grid - 1}))) + ${pointRadios}px`,
      });
    }
    return horizontalStyle;
  }, [h_grid, pointRadios]);

  const verticalGrids = useMemo(() => {
    const verticalStyle: Grid[] = [];
    if (v_grid === null) return verticalStyle;
    for (let i = 0; i < v_grid; ++i) {
      verticalStyle.push({
        x1: `calc((${i} * ((100% - (2 * ${pointRadios}px)) / (${v_grid - 1}))) + ${pointRadios}px`,
        x2: `calc((${i} * ((100% - (2 * ${pointRadios}px)) / (${v_grid - 1}))) + ${pointRadios}px`,
        y1: String(0 + pointRadios),
        y2: `calc(100% - ${pointRadios}px)`,
      });
    }
    return verticalStyle;
  }, [pointRadios, v_grid]);


  return { horizontalGrids, verticalGrids };
}
