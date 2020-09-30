import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game/game.component'

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TicTacToeComponent,
    BoardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
