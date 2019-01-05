import Piece from './piece.js';

export default class Pawn extends Piece {
  constructor(player){
    super(player, (player === 1?  "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
  }

  possibleSquares(src){
    if(!this.state.flipped){
      return [src-6, src-1, src+1, src+6];
    } else {
      if(this.state.player === 1){
        return [src-12, src-7, src-5, src+5, src+7];
      } else {
        return [src-7, src-5, src+5, src+7, src+12];
      }
    }
  }

  isMovePossible(src, dest){
    return this.possibleSquares(src).includes(dest);
  }

  /**
   * returns array of one if pawn moves two steps, else returns empty array  
   * @param  {[type]} src  [description]
   * @param  {[type]} dest [description]
   * @return {[type]}      [description]
   */
  getSrcToDestPath(src, dest){
    if(dest === src - 12){
      return [src - 6];
    }
    else if(dest === src + 12){
      return [src + 6];
    }
    return [];
  }
}
