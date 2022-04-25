function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    if (numbers.indexOf(i) === -1) {
      answer += i;
    }
  }
  return answer;
}

let input = [[1, 2, 3, 4, 6, 7, 8, 0], 14];
console.log("answer :>> ", solution(input[0]));

input = [[5, 8, 4, 0, 6, 7, 9], 6];
console.log("answer :>> ", solution(input[0]));
