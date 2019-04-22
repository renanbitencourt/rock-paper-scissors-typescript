export class WrongNumberOfPlayersError extends Error {

    constructor () {
        super("The game must have two players!");
    }

}