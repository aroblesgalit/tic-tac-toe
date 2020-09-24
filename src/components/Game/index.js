class Game {
    constructor(p1, p2) {
        this.p1 = {
            name: p1,
            mark: null
        };
        this.p2 = {
            name: p2,
            mark: null
        };
        this.marks = [
            null, null, null,
            null, null, null,
            null, null, null
        ];
        this.turn = 0;
    }

    chooseMark(mark) {
        this.p1.mark = mark;
        if (mark === "x") {
            this.p2.mark = "o";
        } else {
            this.p2.mark = "x";
        }
        console.log(`${this.p1.name}'s mark is ${this.p1.mark}`);
        console.log(`${this.p2.name}'s mark is ${this.p2.mark}`);
    }

    addMark(index) {
        let marksTemp = [...this.marks];
        if (marksTemp[index] === null) {
            if (this.turn === 0) {
                marksTemp[index] = this.p1.mark;
                this.turn = 1;
            } else {
                marksTemp[index] = this.p2.mark;
                this.turn = 0;
            }
            this.marks = marksTemp;
        }
        this.checkForWin();
    }

    checkForWin() {
        let cell1 = this.marks[0];
        let cell2 = this.marks[1];
        let cell3 = this.marks[2];
        let cell4 = this.marks[3];
        let cell5 = this.marks[4];
        let cell6 = this.marks[5];
        let cell7 = this.marks[6];
        let cell8 = this.marks[7];
        let cell9 = this.marks[8];
        if ((cell1 === cell2 && cell1 === cell3 && cell1 !== null)
            || (cell4 === cell5 && cell4 === cell6 && cell4 !== null)
            || (cell7 === cell8 && cell7 === cell9 && cell7 !== null)
            || (cell1 === cell4 && cell1 === cell7 && cell1 !== null)
            || (cell2 === cell5 && cell2 === cell8 && cell2 !== null)
            || (cell3 === cell6 && cell3 === cell9 && cell3 !== null)
            || (cell1 === cell5 && cell1 === cell9 && cell1 !== null)
            || (cell3 === cell5 && cell3 === cell7 && cell3 !== null)) {
                alert("Game over!")
            }
    }
}

export default Game;