// 로또 6개 - 1등
// 2개 - 5등
// 1개 or 0개 - 6등

function solution(lottos, win_nums) {
  let answer = [];
  let winningArr = [6, 6, 5, 4, 3, 2, 1];
  let zeroCnt = lottos.filter((v) => v === 0).length;
  let matchedCnt = lottos.filter((v) => win_nums.includes(v)).length;
  answer[0] = winningArr[matchedCnt + zeroCnt];
  answer[1] = winningArr[matchedCnt];
  return answer;
}

let input = [
  [44, 1, 0, 0, 31, 25],
  [31, 10, 45, 1, 6, 19],
  [3, 5],
];
let answer = solution(input[0], input[1]);
console.log("answer :>> ", answer);

input = [
  [0, 0, 0, 0, 0, 0],
  [38, 19, 20, 40, 15, 25],
  [1, 6],
];
answer = solution(input[0], input[1]);
console.log("answer :>> ", answer);
