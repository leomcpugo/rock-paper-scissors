import { Component, EventEmitter, Output } from "@angular/core";
import { HandType } from "src/app/models/hand-type.enum";

@Component({
    selector: 'app-player-hand',
    templateUrl: './player-hand.component.html',
    styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent {
    HandType = HandType;
    @Output() onHandPlayed = new EventEmitter<HandType>();
}