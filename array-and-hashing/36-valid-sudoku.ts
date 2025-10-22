function isValidSudoku(board: string[][]): boolean {
    function hasArrayDuplicates(array: string[]) {
        const numbers = array.filter((el) => el !== ".");
        return new Set(numbers).size !== numbers.length;
    }

    for (let i = 0; i < 9; i++) {
        let hasDuplicates = hasArrayDuplicates(board[i]);
        if (hasDuplicates) return false;
        hasDuplicates = hasArrayDuplicates([
            board[0][i],
            board[1][i],
            board[2][i],
            board[3][i],
            board[4][i],
            board[5][i],
            board[6][i],
            board[7][i],
            board[8][i],
        ]);
        if (hasDuplicates) return false;
    }

    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            const startI = i * 3;
            const startJ = j * 3;
            let hasDuplicates = hasArrayDuplicates([
                board[startI][startJ],
                board[startI][startJ + 1],
                board[startI][startJ + 2],
                board[startI + 1][startJ],
                board[startI + 1][startJ + 1],
                board[startI + 1][startJ + 2],
                board[startI + 2][startJ],
                board[startI + 2][startJ + 1],
                board[startI + 2][startJ + 2],
            ]);
            if (hasDuplicates) return false;
        }
    }

    return true;
}

const result = isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);

console.log(result);
