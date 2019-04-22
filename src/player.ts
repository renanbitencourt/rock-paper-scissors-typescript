import { Move } from "./move";
import { NoSuchStrategyError } from "./no-such-strategy-error";

export class Player {

    private name: string;
    private move: Move;

    constructor(name: string, move: Move) {
        this.name = name;
        this.move = move;

        if (this.move == null) {
            throw new NoSuchStrategyError();
        }
    }

    public getName(): string {
        return this.name;
    }

    public getMove(): Move {
        return this.move;
    }
}