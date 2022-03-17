import { Component, OnInit } from "@angular/core";
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

    masterResults: MasterResults = {
        wonCount: 0,
        lostCount: 0,
        drawCount: 0,
    };

    handResult: HandResult | null = null

    async playHand(playerHand: HandType) {
        this.handResult = null;

        await new Promise(f => setTimeout(f, 100));

        this.handResult = this.gameRefereeService.playHand(playerHand);

        switch (this.handResult.handResult) {
            case HandResultType.WON: this.masterResults.wonCount++; break;
            case HandResultType.LOST: this.masterResults.lostCount++; break;
            case HandResultType.DRAW: this.masterResults.drawCount++; break;
        }
    }

    resetMasterResults() {
        this.masterResults = {
            wonCount: 0,
            lostCount: 0,
            drawCount: 0,
        };
    }
}

interface MasterResults {
    wonCount: number;
    lostCount: number;
    drawCount: number;
}