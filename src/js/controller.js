"use strict";

import { pieces as piecesConfig } from "./config.js";
import Game from "./model.js";
import { getPosFromPiece, getPosFromSquare } from "./utils.js";
import { chessboard } from "./chessboardView.js";

export const game = new Game();

export function startGame() {
  game.startGame(renderChessboard);
}

function renderChessboard() {
  chessboard.initialRender(game.chessboardData, clickPiece);
}

function clickPiece(e) {
  const [y, x] = getPosFromPiece(e.target);

  if (game.chessboardData[y][x].color !== game.currentToPlay) return;
  game.setSelectedPiece(game.chessboardData[y][x]);
  game.setSelectedPiecePos([y, x]);

  const availableMoves = game.selectedPiece.getMoves([y, x]);
  chessboard.renderAvailableMoves(availableMoves, clickAvailableMove);
}

function clickAvailableMove(e) {
  const [newY, newX] = getPosFromSquare(e.target.closest(".square"));
  const [oldY, oldX] = game.selectedPiecePos;
  if (game.selectedPiece.piece === piecesConfig.pawn) {
    game.selectedPiece.usedFirstMove();
  }
  game.chessboardData[newY][newX] = game.selectedPiece;
  game.chessboardData[oldY][oldX] = { piece: piecesConfig.none };

  chessboard.rerender(clickPiece);
  game.switchPlayer();
}
