"use strict";

import Game from "./model.js";
import { chessboard } from "./views/chessboardView.js";

export const game = new Game();

export function startGame() {
  game.startGame(renderChessboard);

  console.log(game.chessboardData);
}

function renderChessboard() {
  chessboard.renderAll(game.chessboardData);
}
