import { pieces } from "./config.js";
import { chessboardData } from "./model.js";

export function renderPieces(squares) {
  squares.forEach((square) => {
    const [y, x] = square.dataset.square.split(",");

    if (chessboardData[y][x] !== pieces.none) {
      const [color, piece] = chessboardData[y][x].split("-");
      square.insertAdjacentHTML(
        "afterbegin",
        `<img alt='${color} ${piece}' class='piece' data-color='${color}' data-piece='${piece}' src='./src/public/${color}-${piece}.png' />`,
      );
    }

    square.addEventListener("click", function () {
      console.log(
        `You clicked on square ${square.dataset.square} and that square is ${chessboardData[y][x]}`,
      );
    });
  });
}
