import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

@Input() value: string;
@Output('playerClick') click=new EventEmitter<string>();
@HostListener('click')
clickHandler(){
    this.click.emit('')
}
  constructor() { }

  ngOnInit(): void {
   
  }

}
