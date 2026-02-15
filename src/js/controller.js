"use strict";

import Game from "./model.js";
import { chessboard } from "./views/chessboardView.js";

// export function analyzePieceMoveSet(piece) {
//   const [y, x] = piece.dataset.square.split(",");
//   if (chessboardData[y][x] === "light-pawn") {
//     return [`${+y - 1},${x}`, `${+y - 2},${x}`];
//   }
//   if (chessboardData[y][x] === "dark-pawn")
//     return [`${+y + 1},${x}`, `${+y + 2},${x}`];
// }

export const game = new Game();

export function startGame() {
  game.startGame(initGame);
}

function initGame() {
  chessboard.renderAll(game.chessboardData);
}
