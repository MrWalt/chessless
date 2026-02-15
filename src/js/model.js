"use strict";

import { players } from "./config.js";

export const chessboardData = [[], [], [], [], [], [], [], []];
export let selectedPiece;
export let currentToPlay = players.white;

export function switchPlayer() {
  if (currentToPlay === players.white) {
    currentToPlay = players.black;
    return;
  }

  currentToPlay = players.white;
}

export function setSelectedPiece(piece) {
  selectedPiece = piece;
}
