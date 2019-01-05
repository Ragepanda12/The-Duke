import Piece from './piece.js';

export default class King extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
  }

  isMovePossible(src, dest){
    if(!this.state.flipped){
      let mod = src % 6;
      let diff = 6 - mod;
      return (dest >= (src - mod) && dest < (src + diff));
    }
    else{
      return Math.abs(src - dest) % 6 === 0; 
    }

  }

  /**
   * always returns empty array because of one step
   * @return {[]}
   */
  getSrcToDestPath(src, dest){
    let path = [], pathStart, pathEnd, incrementBy;
    if(src > dest){
      pathStart = dest;
      pathEnd = src;
    }
    else{
      pathStart = src;
      pathEnd = dest;
    }
    if(Math.abs(src - dest) % 6 === 0){
      incrementBy = 6;
      pathStart += 6;
    }
    else{
      incrementBy = 1;
      pathStart += 1;
    }

    for(let i = pathStart; i < pathEnd; i+=incrementBy){
      path.push(i);
    }
    return path;
  }
}
