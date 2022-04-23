function solution(s) {
  const alphabet = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  while (isNaN(s)) {
    for (let i = 0; i < alphabet.length; i++) {
      s = s.replace(alphabet[i], numbers[i]);
    }
  }
  return Number(s);
}

let input = ["one4seveneight", 1478];
console.log("answer :>> ", solution(input[0]));

input = ["23four5six7", 1478];
console.log("answer :>> ", solution(input[0]));
