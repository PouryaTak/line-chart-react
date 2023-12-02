import { ChartData, Points } from "../types/lineChart";

export function normalizer(val: number, min = 0, max = 10) {
  return (val - min) / (max - min);
}

export function convertDataToPoints(
  data: ChartData,
  space: number,
  height: number,
  maxValue: number,
  pointRadios: number
) {
  const increaserValue = (10 / maxValue) * 10;
  return Object.keys(data).map((key, index) => ({
    x: space * index,
    y: normalizer(data[key]) * increaserValue * ((height - pointRadios*2) / 10),
    key,
    value: data[key],
  }));
}

export const catmullRom2bezier = (points: Points[]) => {
  const result = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p = [];
    p.push({
      x: points[Math.max(i - 1, 0)].x,
      y: points[Math.max(i - 1, 0)].y,
    });
    p.push({
      x: points[i].x,
      y: points[i].y,
    });
    p.push({
      x: points[i + 1].x,
      y: points[i + 1].y,
    });
    p.push({
      x: points[Math.min(i + 2, points.length - 1)].x,
      y: points[Math.min(i + 2, points.length - 1)].y,
    });
    const bp = [];
    bp.push({
      x: (-p[0].x + 6 * p[1].x + p[2].x) / 6,
      y: (-p[0].y + 6 * p[1].y + p[2].y) / 6,
    });
    bp.push({
      x: (p[1].x + 6 * p[2].x - p[3].x) / 6,
      y: (p[1].y + 6 * p[2].y - p[3].y) / 6,
    });
    bp.push({
      x: p[2].x,
      y: p[2].y,
    });
    // result.push(bp);
    const pos = bp.map((i) => {
      return {
        x: i.x < 0 ? 0 : i.x,
        y: i.y < 0 ? 0 : i.y,
      };
    });
    result.push(pos);
  }
  return result;
};

export function createPath(points: Points[]) {
  let path = "M" + points[0].x + "," + points[0].y + " ";
  const catmull = catmullRom2bezier(points);
  for (let i = 0; i < catmull.length; i++) {
    path +=
      "C" +
      catmull[i][0].x +
      "," +
      catmull[i][0].y +
      " " +
      catmull[i][1].x +
      "," +
      catmull[i][1].y +
      " " +
      catmull[i][2].x +
      "," +
      catmull[i][2].y +
      " ";
  }
  return path;
}

const createPostFillPath = (space: number, startPoint: number) => {
  return `L${space * (startPoint - 1)},${0}`;
};

export function createFillPath(
  space: number | null,
  path: string | null,
  dataLength: number
) {
  if (!space) return null;
  const initialFillPath = path?.substring(1);
  return (
    `M${0},${0} ` + initialFillPath + createPostFillPath(space, dataLength)
  );
}
