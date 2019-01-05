export default class Piece {
  constructor(player, iconUrl){
  	this.state = {
      flipped: false
    }
    this.player = player;
    this.style = {backgroundImage: "url('"+iconUrl+"')"};
  }

  flipPiece = () => {
  	this.state.flipped = !this.state.flipped;
  }
}
