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
            null, null, null,
            null, null, null,
            null, null, null
        ];
        this.turn = 0;
    }

    chooseMark(mark) {
        this.p1.mark = "o";
        this.p2.mark = "x";
        console.log(`${this.p1.name}'s mark is ${this.p1.mark}`);
        console.log(`${this.p2.name}'s mark is ${this.p2.mark}`);
    }

    addMark(index) {
        if (this.marks[index] === null) {
            if (this.turn === 0) {
                this.marks[index] = this.p1.mark;
                this.turn = 1;
            } else {
                this.marks[index] = this.p2.mark;
                this.turn = 0;
            }
        }
    }
}

export default Game;