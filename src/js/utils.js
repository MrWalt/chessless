import { pieces } from "./config.js";
import { game } from "./controller.js";

export function getPosFromSquare(square) {
  return square.dataset.square.split(",");
}

export function getPieceFromPos(y, x) {
  if (game.chessboardData[y][x] === pieces.none) return pieces.none;
  return game.chessboardData[y][x].split("-");
}
