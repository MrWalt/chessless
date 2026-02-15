import {
  availableMoveDiv,
  colors,
  NUMBER_OF_COLUMNS_ON_BOARD,
  NUMBER_OF_ROWS_ON_BOARD,
  pieceDiv,
  pieces,
  squareDiv,
} from "./config.js";
import { Bishop, King, Knight, Pawn, Queen, Rook } from "./pieces.js";
import { getPieceFromPos, getPosFromSquare } from "./utils.js";

class Chessboard {
  constructor() {
    this.chessboard = document.querySelector(".chessboard");
    this.allSquares = null;
    this.allPieces = null;
    this.availableMoves = null;
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

    this.allSquares = Array.from(document.querySelectorAll(".square"));
  }
  setBlackPieces(chessboardData) {
    chessboardData.map((column, columnIndex) => {
      for (let row = 0; row < 2; row++) {
        if (columnIndex === 0) {
          column[0] = new Rook(colors.black);
          column[1] = new Knight(colors.black);
          column[2] = new Bishop(colors.black);
          column[3] = new Queen(colors.black);
          column[4] = new King(colors.black);
          column[5] = new Bishop(colors.black);
          column[6] = new Knight(colors.black);
          column[7] = new Rook(colors.black);
        }

        if (columnIndex === 1) {
          for (let index = 0; index < NUMBER_OF_ROWS_ON_BOARD; index++) {
            column[index] = new Pawn(colors.black);
          }
        }
      }
    });
  }
  setWhitePieces(chessboardData) {
    chessboardData.map((column, columnIndex) => {
      for (let row = 0; row < NUMBER_OF_ROWS_ON_BOARD; row++) {
        if (columnIndex === 7) {
          column[0] = new Rook(colors.white);
          column[1] = new Knight(colors.white);
          column[2] = new Bishop(colors.white);
          column[3] = new Queen(colors.white);
          column[4] = new King(colors.white);
          column[5] = new Bishop(colors.white);
          column[6] = new Knight(colors.white);
          column[7] = new Rook(colors.white);
        }

        if (columnIndex === 6) {
          for (let index = 0; index < NUMBER_OF_ROWS_ON_BOARD; index++) {
            column[index] = new Pawn(colors.white);
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
          column[index] = { piece: pieces.none };
        }
      }
    });
  }
  renderPieces() {
    this.allSquares.forEach((square) => {
      const [y, x] = getPosFromSquare(square);
      if (getPieceFromPos(y, x) === pieces.none) return;
      const { color, piece } = getPieceFromPos(y, x);

      square.insertAdjacentHTML("afterbegin", pieceDiv(color, piece));
    });

    this.allPieces = Array.from(document.querySelectorAll(".piece"));
  }
  removePieces() {
    if (this.allPieces) this.allPieces.forEach((piece) => piece.remove());
  }
  initialRender(chessboardData, clickCallback) {
    this.renderChessboard();
    this.setBlackPieces(chessboardData);
    this.setWhitePieces(chessboardData);
    this.setEmptySpaces(chessboardData);
    this.renderPieces(chessboardData);
    this.setAllPieces(clickCallback);
  }
  renderAvailableMoves(positionsToRender, clickCallback) {
    if (this.availableMoves) this.removeAvailableMoves();

    positionsToRender.forEach((position) =>
      this.allSquares
        .find((square) => square.dataset.square === position.join(","))
        .insertAdjacentHTML("beforeend", availableMoveDiv),
    );

    this.availableMoves = Array.from(
      document.querySelectorAll(".available__move"),
    );

    this.availableMoves.forEach((move) =>
      move.addEventListener("click", clickCallback),
    );
  }
  removeAvailableMoves() {
    if (this.availableMoves)
      this.availableMoves.forEach((move) => move.remove());
  }
  rerender(callback) {
    this.removeAvailableMoves();
    this.removePieces();
    this.renderPieces();
    this.setAllPieces(callback);
  }
  setAllPieces(callback) {
    this.allPieces = Array.from(document.querySelectorAll(".piece"));
    this.allPieces.forEach((piece) =>
      piece.addEventListener("click", callback),
    );
  }
}

export const chessboard = new Chessboard();
