class Game {
    constructor(p1, p2) {
        this.p1 = {
            name: p1,
            mark: ""
        };
        this.p2 = {
            name: p2,
            mark: ""
        };
        this.marks = [
            "o", "x", "o",
            "x", "o", "x",
            "o", "x", "o"
        ];
        this.turn = 0;
    }

    chooseMark(mark) {
        this.p1.mark = "o";
        this.p2.mark = "x";
        console.log(`${this.p1.name}'s mark is ${this.p1.mark}`);
        console.log(`${this.p2.name}'s mark is ${this.p2.mark}`);
    }
}

export default Game;