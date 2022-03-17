import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameArenaPage } from './pages/game-arena/game-arena.page';
import { GameRefereeService } from './services/game-referee.service';

// angular material
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    GameArenaPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // angular material
    MatButtonModule,
  ],
  providers: [
    GameRefereeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
