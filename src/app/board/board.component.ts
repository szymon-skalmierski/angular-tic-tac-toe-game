import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares!: any[];
  isXNext!: boolean;
  winner!: string | null;

  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }

  newGame(){
    this.squares = Array(9).fill(null)
    this.winner = null;
    this.isXNext = !!Math.round(Math.random());
  }

  get player() {
    return this.isXNext ? 'X' : 'O';
  }

  move(squareId: number){
    if(!this.winner){
      if (!this.squares[squareId]){
        this.squares[squareId] = this.player;
        this.isXNext = !this.isXNext;
      }
    }
    if(this.isFinished()){
      this.winner = this.isFinished();
    }
  }

  isFinished(){
    for(let i=0; i<9; i+=3){
      // Same values in a row
      if(this.squares[i] && this.squares[i] === this.squares[i+1] && this.squares[i] === this.squares[i+2]){
        return this.squares[i];
      }
      // Same values in a column
      if(this.squares[i] && this.squares[i] === this.squares[i+3] && this.squares[i] === this.squares[i+6]){
        return this.squares[i];
      }
    }
    // Same values in a diagonal
    if(this.squares[0] && ((this.squares[0] === this.squares[4] && this.squares[0] === this.squares[8]) || (this.squares[2] === this.squares[4] && this.squares[2] === this.squares[6]))){
      return this.squares[4];
    }
    if(this.squares.indexOf(null)==-1){
      return 'Draw';
    }
  }

}
