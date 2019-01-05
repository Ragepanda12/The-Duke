import Bishop from '../pieces/bishop.js';
import King from '../pieces/king.js';
import Knight from '../pieces/knight.js';
import Pawn from '../pieces/pawn.js';
import Queen from '../pieces/queen.js';
import Rook from '../pieces/rook.js';

export default function initialiseChessBoard(){
  const squares = Array(36).fill(null);

  squares[2] = new King(2);
  squares[32] = new King(1);

  squares[1] = new Pawn(2);
  squares[3] = new Pawn(2);

  squares[31] = new Pawn(1);
  squares[33] = new Pawn(1);

  return squares;
}