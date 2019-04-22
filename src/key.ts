import { Game } from "./game";
import { Player } from "./player";

export class Key {

    private firstGame: Game;
    private secondGame: Game;

    constructor(firstGame: Game, secondGame: Game) {
        this.firstGame = firstGame;
        this.secondGame = secondGame;
    }

    public rpsKeyWinner(): Player {
        return new Game(this.firstGame.rpsGameWinner(), this.secondGame.rpsGameWinner()).rpsGameWinner();
    }

}