export default class Piece {
  constructor(player, iconUrl){
  	this.state = {
  	  player: 0,
      flipped: false
    }
    this.state.player = player;
    this.style = {backgroundImage: "url('"+iconUrl+"')", backgroundSize: "cover"};
  }

  flipPiece = () => {
  	this.state.flipped = !this.state.flipped;
  }
}
