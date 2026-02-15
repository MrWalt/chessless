"use strict";

import { colors } from "./config.js";
export default class Game {
  constructor() {
    this.chessboardData = [[], [], [], [], [], [], [], []];
    this.selectedPiece = null;
    this.selectedPiecePos = null;
    this.currentToPlay = colors.white;
  }
  startGame(startGameCallback) {
    startGameCallback();
  }
  switchPlayer() {
    this.currentToPlay =
      this.currentToPlay === colors.white ? colors.black : colors.white;
  }
  setSelectedPiece(piece) {
    this.selectedPiece = piece;
  }
  setSelectedPiecePos(pos) {
    this.selectedPiecePos = pos;
  }
}
