import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameArenaPage } from './pages/game-arena/game-arena.page';
import { GameRefereeService } from './services/game-referee.service';

// angular material
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { HandResultComponent } from './components/hand-result/hand-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GameArenaPage,
    PlayerHandComponent,
    ScoreboardComponent,
    HandResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // angular material
    MatButtonModule,
    MatProgressBarModule,
  ],
  providers: [
    GameRefereeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
