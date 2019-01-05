import Piece from './piece.js';

export default class King extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
  }

  possibleSquares(src){
    let mod = src % 6;
    var possibleSquares = [mod];
    if(!this.state.flipped){
      let diff = 6 - mod;  
      for(var i = (src - mod); i < (src + diff); i++){
        possibleSquares.push(i);
      }
    }
    else{
      for(var i = 0; i < 6; i++){
        possibleSquares.push(mod + i*6);
      }
    }
    return possibleSquares; 
  }

  isMovePossible(src, dest){
    return this.possibleSquares(src).includes(dest);
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
