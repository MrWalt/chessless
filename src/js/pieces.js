import { pieces } from "./config.js";

export class Pawn {
  constructor(color) {
    this.color = color;
    this.piece = pieces.pawn;
    this.firstMove = true;
  }
}

export class Rook {
  constructor(color) {
    this.color = color;
    this.piece = pieces.rook;
  }
}

export class Bishop {
  constructor(color) {
    this.color = color;
    this.piece = pieces.bishop;
  }
}

export class Knight {
  constructor(color) {
    this.color = color;
    this.piece = pieces.knight;
  }
}

export class Queen {
  constructor(color) {
    this.color = color;
    this.piece = pieces.queen;
  }
}

export class King {
  constructor(color) {
    this.color = color;
    this.piece = pieces.king;
  }
}

export class Empty {
  constructor() {
    this.piece = pieces.none;
  }
}
