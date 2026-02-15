"use strict";

import { chessboardData } from "./model.js";

export function analyzePieceMoveSet(piece) {
  const [y, x] = piece.dataset.square.split(",");
  if (chessboardData[y][x] === "light-pawn") {
    return [`${+y - 1},${x}`, `${+y - 2},${x}`];
  }
  if (chessboardData[y][x] === "dark-pawn")
    return [`${+y + 1},${x}`, `${+y + 2},${x}`];
}
