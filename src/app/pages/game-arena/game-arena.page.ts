import { Component, OnInit } from "@angular/core";
import { GameResults } from "src/app/models/game-result.model";
import { HandResultType } from "src/app/models/hand-result-type.enum";
import { HandResult } from "src/app/models/hand-result.model";
import { HandType } from "src/app/models/hand-type.enum";
import { GameRefereeService } from "src/app/services/game-referee.service";

@Component({
    templateUrl: './game-arena.page.html',
    styleUrls: ['./game-arena.page.scss']
})
export class GameArenaPage {
    constructor(
        private readonly gameRefereeService: GameRefereeService,
    ) {
    }

    HandType = HandType;

    gameResults: GameResults = {
        wonCount: 0,
        lostCount: 0,
        drawCount: 0,
    };

    handResult: HandResult | null = null;

    playHand(playerHand: HandType) {
        this.handResult = this.gameRefereeService.playHand(playerHand);

        switch (this.handResult.handResult) {
            case HandResultType.WON: this.gameResults.wonCount++; break;
            case HandResultType.LOST: this.gameResults.lostCount++; break;
            case HandResultType.DRAW: this.gameResults.drawCount++; break;
        }
    }

    resetMasterResults() {
        this.gameResults = {
            wonCount: 0,
            lostCount: 0,
            drawCount: 0,
        };
    }
}