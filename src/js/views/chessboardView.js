import {
  colors,
  NUMBER_OF_COLUMNS_ON_BOARD,
  NUMBER_OF_ROWS_ON_BOARD,
  pieceDiv,
  pieces,
  squareDiv,
} from "../config.js";
import { getPieceFromPos, getPosFromSquare } from "../utils.js";

class Chessboard {
  constructor() {
    this.chessboard = document.querySelector(".chessboard");
    this.allSquares = null;
  }
  renderChessboard() {
    for (let column = 0; column < NUMBER_OF_COLUMNS_ON_BOARD; column++) {
      for (let row = 0; row < NUMBER_OF_ROWS_ON_BOARD; row++) {
        const color = row % 2 !== 0 ? colors.black : colors.white;
        const alternateColor = row % 2 === 0 ? colors.black : colors.white;

        const shouldAlternate = (column + 1) % 2 !== 0;

        const square = squareDiv(
          color,
          alternateColor,
          shouldAlternate,
          column,
          row,
        );
        this.chessboard.insertAdjacentHTML("beforeend", square);
      }
    }

    this.allSquares = document.querySelectorAll(".square");
  }
  setBlackPieces(chessboardData) {
    chessboardData.map((column, columnIndex) => {
      for (let row = 0; row < 2; row++) {
        if (columnIndex === 0) {
          column[0] = `${colors.black}-${pieces.rook}`;
          column[1] = `${colors.black}-${pieces.knight}`;
          column[2] = `${colors.black}-${pieces.bishop}`;
          column[3] = `${colors.black}-${pieces.queen}`;
          column[4] = `${colors.black}-${pieces.king}`;
          column[5] = `${colors.black}-${pieces.bishop}`;
          column[6] = `${colors.black}-${pieces.knight}`;
          column[7] = `${colors.black}-${pieces.rook}`;
        }

        if (columnIndex === 1) {
          for (let index = 0; index < NUMBER_OF_ROWS_ON_BOARD; index++) {
            column[index] = `${colors.black}-${pieces.pawn}`;
          }
        }
      }
    });
  }
  setWhitePieces(chessboardData) {
    chessboardData.map((column, columnIndex) => {
      for (let row = 0; row < NUMBER_OF_ROWS_ON_BOARD; row++) {
        if (columnIndex === 7) {
          column[0] = `${colors.white}-${pieces.rook}`;
          column[1] = `${colors.white}-${pieces.knight}`;
          column[2] = `${colors.white}-${pieces.bishop}`;
          column[3] = `${colors.white}-${pieces.queen}`;
          column[4] = `${colors.white}-${pieces.king}`;
          column[5] = `${colors.white}-${pieces.bishop}`;
          column[6] = `${colors.white}-${pieces.knight}`;
          column[7] = `${colors.white}-${pieces.rook}`;
        }

        if (columnIndex === 6) {
          for (let index = 0; index < NUMBER_OF_ROWS_ON_BOARD; index++) {
            column[index] = `${colors.white}-${pieces.pawn}`;
          }
        }
      }
    });
  }
  setEmptySpaces(chessboardData) {
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
  renderPieces() {
    this.allSquares.forEach((square) => {
      const [y, x] = getPosFromSquare(square);
      if (getPieceFromPos(y, x) === pieces.none) return;
      const [color, piece] = getPieceFromPos(y, x);

      square.insertAdjacentHTML("afterbegin", pieceDiv(color, piece));
    });
  }
  renderAll(chessboardData) {
    this.renderChessboard();
    this.setBlackPieces(chessboardData);
    this.setWhitePieces(chessboardData);
    this.setEmptySpaces(chessboardData);
    this.renderPieces(chessboardData);
  }
}

export const chessboard = new Chessboard();
