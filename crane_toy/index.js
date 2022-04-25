function solution(board, moves) {
  var answer = 0;
  let moved = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        moved.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  for (let i = 0; i < moved.length; i++) {
    // console.log("moved :>> ", moved);
    if (moved[i] === moved[i + 1]) {
      moved.splice(i, 2);
      answer += 2;
      i = -1;
    }
  }

  return answer;
}

let input = [
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4],
  4,
];
console.log("answer :>> ", solution(input[0], input[1]));
