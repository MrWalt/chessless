import { availableMoveDiv, getImagePieceDiv, pieces } from "./config.js";
import { analyzePieceMoveSet } from "./controller.js";
import { chessboardData } from "./model.js";
import { squares } from "./script.js";

let selectedPiece;

export function renderPieces(squares) {
  squares.forEach((square) => {
    const [y, x] = square.dataset.square.split(",");
    if (chessboardData[y][x] === pieces.none) {
      square.addEventListener("click", removeAvailableMoves);
      return;
    }

    const [color, piece] = chessboardData[y][x].split("-");
    square.insertAdjacentHTML("afterbegin", getImagePieceDiv(color, piece));

    square.addEventListener("click", function () {
      const availableMoves = analyzePieceMoveSet(square);
      removeAvailableMoves();
      renderAvailableMoves(availableMoves, squares);
      selectedPiece = square;
    });
  });
}

export function removePieces() {
  Array.from(squares).forEach((square) => {
    const piece = square.firstChild;

    if (!piece) return;

    piece.remove(this);
  });
}

function renderAvailableMoves(availableMoves, squares) {
  const squaresArray = Array.from(squares);
  availableMoves.forEach((move) => {
    const [y, x] = move.split(",");
    squaresArray
      .find((square) => square.dataset.square === `${y},${x}`)
      .insertAdjacentHTML("beforeend", availableMoveDiv);
  });

  Array.from(document.querySelectorAll(".available__move")).forEach((move) =>
    move.addEventListener("click", function (e) {
      e.stopPropagation();
      movePiece(move);
      removeAvailableMoves();
    }),
  );
}

function removeAvailableMoves() {
  const availableMoves = Array.from(
    document.querySelectorAll(".available__move"),
  );
  availableMoves.forEach((move) => move.remove(this));
}

export function movePiece(move) {
  const square = move.closest(".square");
  const [newY, newX] = square.dataset.square.split(",");
  const [oldY, oldX] = selectedPiece.dataset.square.split(",");
  const piece = chessboardData[oldY][oldX];

  chessboardData[oldY][oldX] = "empty";
  chessboardData[newY][newX] = piece;

  removePieces();
  renderPieces(squares);
}
