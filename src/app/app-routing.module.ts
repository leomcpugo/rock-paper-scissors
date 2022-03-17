import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameArenaPage } from './pages/game-arena/game-arena.page';

const routes: Routes = [
  {
    path: '',
    component: GameArenaPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
