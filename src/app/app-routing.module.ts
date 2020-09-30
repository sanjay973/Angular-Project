import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import {BoardComponent} from './board/board.component'
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path:'',component:ExampleComponent},
  
  {path:'game',component:GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
