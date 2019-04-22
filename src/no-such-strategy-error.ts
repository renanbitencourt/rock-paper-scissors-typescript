export class NoSuchStrategyError extends Error {

    constructor() {
        super("The move is invalid!");
    }

}