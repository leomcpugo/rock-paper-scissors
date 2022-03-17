import { Injectable } from "@angular/core";
import { HandResultType } from "../models/hand-result-type.enum";
import { HandResult } from "../models/hand-result.model";
import { HandType } from "../models/hand-type.enum";

const handTypes = [HandType.ROCK, HandType.PAPER, HandType.SCISSORS];

@Injectable()
export class GameRefereeService {

    playHand(playerHand: HandType): HandResult {
        const pcHand = handTypes[Math.floor(Math.random() * handTypes.length)];
        const handResult = this.calculateHandResult(playerHand, pcHand);
        return new HandResult(playerHand, pcHand, handResult);
    }

    private calculateHandResult(playerHand: HandType, pcHand: HandType): HandResultType {
        if (playerHand === pcHand) return HandResultType.DRAW;

        switch (playerHand) {
            case HandType.ROCK: return pcHand === HandType.SCISSORS ? HandResultType.WON : HandResultType.LOST;
            case HandType.SCISSORS: return pcHand === HandType.PAPER ? HandResultType.WON : HandResultType.LOST;
            case HandType.PAPER: return pcHand === HandType.ROCK ? HandResultType.WON : HandResultType.LOST;
        }
    }
}