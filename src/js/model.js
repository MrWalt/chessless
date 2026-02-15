"use strict";

import { players } from "./config.js";

class Game {
  constructor() {
    this.chessboardData = [[], [], [], [], [], [], [], []];
    this.selectedPiece = null;
    this.currentToPlay = players.white;
  }
  switchPlayer() {
    this.currentToPlay =
      this.currentToPlay === players.white ? players.black : players.white;
  }
  setChessboardData(newData) {
    this.chessboardData = newData;
  }
  setSelectedPiece(piece) {
    this.selectedPiece = piece;
  }
}

export const game = new Game();
