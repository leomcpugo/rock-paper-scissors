import { Component, Input } from "@angular/core";
import { HandResult } from "src/app/models/hand-result.model";

@Component({
    selector: 'app-hand-result',
    templateUrl: './hand-result.component.html',
    styleUrls: ['./hand-result.component.scss']
})
export class HandResultComponent {

    private _gameResults: HandResult | null = null;
    @Input() set handResult(value: HandResult | null) {
        this._gameResults = null;
        setTimeout(() => {
            this._gameResults = value;
        }, 100);
    }
    get handResult(): HandResult | null { return this._gameResults; }
}