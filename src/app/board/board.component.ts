import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
squares:string[]=[]
turn: string='X'
gameover=false;
winner=null
  constructor() { }

  ngOnInit() {
  for(let i=0;i<9;i++){
   this.squares[i]=null;
  }
  }

  clickHandler(id:number){
    if(!this.gameover){
      if(this.squares[id]===null){
        this.squares[id]=this.turn;
        this.changeTurn();
        this.checkWinner();
      }
    }
  }
  changeTurn(){
    if(this.turn==='X'){
      this.turn='O'
    }else{
      this.turn='X'
    }
  }

  restart(){
    for(let i=0;i<9;i++){
      this.squares[i]=null;
     }
     this.winner=null
     this.turn='X'
     this.gameover=false
  }
  checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let line of lines){
      if(this.squares[line[0]]===this.squares[line[1]]
        && this.squares[line[1]]===this.squares[line[2]]
        &&this.squares[line[0]]!==null
        ){
          this.gameover=true;
          this.winner=this.squares[line[0]]
          return;
        }
    }
    let cell=0;
    this.squares.forEach((e)=>{
      cell+=(
      e!==null?1:0
      )
    })
    if(cell==9){
      this.gameover=true;
      this.winner='tie'
    }
    return null;
  }
}