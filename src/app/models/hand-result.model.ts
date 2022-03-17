import { HandResultType } from "./hand-result-type.enum";
import { HandType } from "./hand-type.enum";

export class HandResult {
    constructor(
        public playerHand: HandType,
        public pcHand: HandType,
        public handResult: HandResultType,
    ) {
    }
}