"use strict";

import {
  NUMBER_OF_COLUMNS_ON_BOARD,
  NUMBER_OF_ROWS_ON_BOARD,
  pieces,
  piecesColors,
  squareColors,
} from "./config.js";
import { chessboardData } from "./model.js";

const chessBoard = document.querySelector(".chessboard");

export function initChessboard() {
  for (let column = 0; column < NUMBER_OF_COLUMNS_ON_BOARD; column++) {
    for (let row = 0; row < NUMBER_OF_ROWS_ON_BOARD; row++) {
      const color = row % 2 !== 0 ? squareColors.light : squareColors.dark;
      const alternateColor =
        row % 2 === 0 ? squareColors.light : squareColors.dark;

      const shouldAlternate = (column + 1) % 2 !== 0;

      const square = `<div class='square ${shouldAlternate ? alternateColor : color}' data-square='${column},${row}'></div>`;
      chessBoard.insertAdjacentHTML("beforeend", square);
    }
  }
}

export function initPieces() {
  setDarkPieces();
  setLightPieces();
  setEmptySpaces();
}

function setDarkPieces() {
  chessboardData.map((column, columnIndex) => {
    for (let row = 0; row < 2; row++) {
      if (columnIndex === 0) {
        column[0] = `${piecesColors.dark}-${pieces.rook}`;
        column[1] = `${piecesColors.dark}-${pieces.knight}`;
        column[2] = `${piecesColors.dark}-${pieces.bishop}`;
        column[3] = `${piecesColors.dark}-${pieces.king}`;
        column[4] = `${piecesColors.dark}-${pieces.queen}`;
        column[5] = `${piecesColors.dark}-${pieces.bishop}`;
        column[6] = `${piecesColors.dark}-${pieces.knight}`;
        column[7] = `${piecesColors.dark}-${pieces.rook}`;
      }

      if (columnIndex === 1) {
        for (let index = 0; index < NUMBER_OF_ROWS_ON_BOARD; index++) {
          column[index] = `${piecesColors.dark}-${pieces.pawn}`;
        }
      }
    }
  });
}

function setLightPieces() {
  chessboardData.map((column, columnIndex) => {
    for (let row = 0; row < NUMBER_OF_ROWS_ON_BOARD; row++) {
      if (columnIndex === 7) {
        column[0] = `${piecesColors.light}-${pieces.rook}`;
        column[1] = `${piecesColors.light}-${pieces.knight}`;
        column[2] = `${piecesColors.light}-${pieces.bishop}`;
        column[3] = `${piecesColors.light}-${pieces.king}`;
        column[4] = `${piecesColors.light}-${pieces.queen}`;
        column[5] = `${piecesColors.light}-${pieces.bishop}`;
        column[6] = `${piecesColors.light}-${pieces.knight}`;
        column[7] = `${piecesColors.light}-${pieces.rook}`;
      }

      if (columnIndex === 6) {
        for (let index = 0; index < NUMBER_OF_ROWS_ON_BOARD; index++) {
          column[index] = `${piecesColors.light}-${pieces.pawn}`;
        }
      }
    }
  });
}

function setEmptySpaces() {
  chessboardData.map((column, columnIndex) => {
    if (
      columnIndex !== 0 &&
      columnIndex !== 1 &&
      columnIndex !== 6 &&
      columnIndex !== 7
    ) {
      for (let index = 0; index < NUMBER_OF_COLUMNS_ON_BOARD; index++) {
        column[index] = pieces.none;
      }
    }
  });
}
