"use strict";

import { initChessboard, initPieces } from "./chessboard.js";
import { renderPieces } from "./piecesView.js";

initChessboard();
initPieces();
export const squares = document.querySelectorAll(".square");
renderPieces(squares);
