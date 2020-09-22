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
    }

    chooseMark(mark) {
        this.p1.mark = mark;
        if (mark === "o") {
            this.p2.mark = "x";
        } else {
            this.p2.mark = "o";
        }
        console.log(`${this.p1.name}'s mark is ${this.p1.mark}`);
        console.log(`${this.p2.name}'s mark is ${this.p2.mark}`);
    }
}

export default Game;