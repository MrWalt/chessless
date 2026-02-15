"use strict";

import { colors } from "./config.js";
export default class Game {
  constructor() {
    this.chessboardData = [[], [], [], [], [], [], [], []];
    this.selectedPiece = null;
    this.currentToPlay = colors.white;
  }
  startGame(startGameCallback) {
    startGameCallback();
  }
  switchPlayer() {
    this.currentToPlay =
      this.currentToPlay === colors.white ? colors.black : colors.white;
  }
  setChessboardData(newData) {
    this.chessboardData = newData;
  }
  setSelectedPiece(piece) {
    this.selectedPiece = piece;
  }
}
