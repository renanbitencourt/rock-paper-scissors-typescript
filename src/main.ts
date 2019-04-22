import { Tournament } from "./tournament";
import { Key } from "./key";
import { Game } from "./game";
import { Player } from "./player";
import { Move } from "./move";

const game = new Game(
    new Player("Armando", Move.PAPER),
    new Player("Dave", Move.SCISSORS)
);

const game2 = new Game(
    new Player("Richard", Move.ROCK),
    new Player("Michael", Move.SCISSORS)
);

const game3 = new Game(
    new Player("Allen", Move.SCISSORS),
    new Player("Omer", Move.PAPER)
);

const game4 = new Game(
    new Player("David E.", Move.ROCK),
    new Player("Richard X.", Move.PAPER)
);

const key = new Key(game, game2);
const key2 = new Key(game3, game4);

const tournament = new Tournament(key, key2);
console.log('Winner: ' + tournament.rpsTournamentWinner().getName());
console.log('Move: ' + tournament.rpsTournamentWinner().getMove().toValue());
