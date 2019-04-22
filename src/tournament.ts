import { Player } from "./player";
import { Game } from "./game";
import { Key } from "./key";

export class Tournament {

    private firstKey: Key;
    private secondKey: Key;

    constructor(firstKey: Key, secondKey: Key) {
        this.firstKey = firstKey;
        this.secondKey = secondKey;
    }

    public rpsTournamentWinner(): Player {
        return new Game(this.firstKey.rpsKeyWinner(), this.secondKey.rpsKeyWinner()).rpsGameWinner();
    }

}