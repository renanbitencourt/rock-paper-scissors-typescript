export class Move {

    static readonly ROCK = new Move("R", "S");
    static readonly PAPER = new Move("P", "R");
    static readonly SCISSORS = new Move("S", "P");

    private constructor (private value: string, private win: string) { }

    public toValue(): string {
        return this.value;
    }

    public wins(move: Move): boolean {
        return this.win === move.toValue();
    }

    public tiesWith(move: Move): boolean {
        return this.value === move.toValue();
    }

}