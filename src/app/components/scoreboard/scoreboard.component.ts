import { Component, Input } from "@angular/core";
import { GameResults } from "src/app/models/game-result.model";

@Component({
    selector: 'app-scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {

    @Input() gameResults: GameResults = {
        wonCount: 0,
        lostCount: 0,
        drawCount: 0,
    }

    progressBarValue(): number {
        const totalMatches = this.gameResults.wonCount + this.gameResults.lostCount;
        if (totalMatches === 0) return 50;
        return (this.gameResults.wonCount / totalMatches) * 100;
    }
}