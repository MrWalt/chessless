export const NUMBER_OF_SQUARES_ON_BOARD = 64;
export const NUMBER_OF_ROWS_ON_BOARD = 8;
export const NUMBER_OF_COLUMNS_ON_BOARD = 8;

export const squareColors = {
  dark: "light",
  light: "dark",
};

export const players = {
  white: "light",
  black: "dark",
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

export const piecesColors = {
  dark: "dark",
  light: "light",
};

export const availableMoveDiv = `<div class='available__move'></div>`;

export function getImagePieceDiv(color, piece) {
  return `<img alt='${color} ${piece}' class='piece cursor-pointer' data-color='${color}' data-piece='${piece}' src='./src/public/${color}-${piece}.png' />`;
}

export function getChessSquare(
  color,
  alternateColor,
  shouldAlternate,
  column,
  row,
) {
  return `<div class='square ${shouldAlternate ? color : alternateColor}' data-square='${column},${row}'></div>`;
}
