import { Player } from "./player";
import { Move } from "./move";
import { WrongNumberOfPlayersError } from "./wrong-number-of-players-error";

export class Game {

    private playerOne: Player;
    private playerTwo: Player;

    constructor(playerOne: Player, playerTwo: Player) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;

        if (playerOne == null || playerTwo == null) {
            throw new WrongNumberOfPlayersError();
        }
    }

    public rpsGameWinner(): Player {
        const firstPlayerMove: Move = this.playerOne.getMove();
        const secondPlayerMove: Move = this.playerTwo.getMove();

        return firstPlayerMove.tiesWith(secondPlayerMove) || firstPlayerMove.wins(secondPlayerMove)
                ? this.playerOne : this.playerTwo;
    }

}