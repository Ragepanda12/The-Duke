import Piece from './piece.js';

export default class Pawn extends Piece {
  constructor(player){
    super(player, (player === 1?  "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
  }

  isMovePossible(src, dest){
    if(!this.state.flipped){
      return src - 6 === dest || 
      src + 1 === dest || 
      src + 6 === dest || 
      src - 1 === dest;
    }
    else{
      if(this.state.player === 1){
        return src - 12 === dest ||
        src + 5 === dest ||
        src + 7 === dest ||
        src - 5 === dest ||
        src - 7 === dest;
      }
      else{
        return src + 12 === dest ||
        src + 5 === dest ||
        src + 7 === dest ||
        src - 5 === dest ||
        src - 7 === dest;
      }
    }
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
