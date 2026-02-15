import { pieces } from "./config.js";
import { game } from "./controller.js";

export function getPosFromSquare(square) {
  return square.dataset.square.split(",");
}

export function getPieceFromPos(y, x) {
  if (game.chessboardData[y][x].piece === pieces.none) return pieces.none;
  return game.chessboardData[y][x];
}

export function getPosFromPiece(piece) {
  return piece.closest(".square").dataset.square.split(",");
}
