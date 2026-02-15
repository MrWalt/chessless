export const NUMBER_OF_SQUARES_ON_BOARD = 64;
export const NUMBER_OF_ROWS_ON_BOARD = 8;
export const NUMBER_OF_COLUMNS_ON_BOARD = 8;

export const colors = {
  white: "white",
  black: "black",
};

export const pieces = {
  pawn: "pawn",
  bishop: "bishop",
  rook: "rook",
  queen: "queen",
  king: "king",
  knight: "knight",
  none: "empty",
};

export const availableMoveDiv = `<div class='available__move cursor-pointer'></div>`;

export function pieceDiv(color, piece) {
  return `<img alt='${color} ${piece}' class='piece cursor-pointer' data-color='${color}' data-piece='${piece}' src='./src/public/${color}-${piece}.svg' />`;
}

export function squareDiv(color, alternateColor, shouldAlternate, column, row) {
  return `<div class='square ${shouldAlternate ? color : alternateColor}' data-square='${column},${row}'></div>`;
}
