// 1단계 - 대문자 -> 소문자
// 2단계 - 사용불가능 특수문자 제거
// 3단계 - 2번 이상 연속된 특수문자 1개로 수정
// 4단계 - 영어 외에 다른 문자 제거
// 5단계 - 빈문자열인경우 a 입력
// 6단계 - 길이 15 제한
// 7단계 - 2자 이하인 경우 마지막 문자 반복해서 길이 3으로 마춤

// 사용가능한 특수 문자 -_.~!@#$%^&*()=+[{]}:?,<>/
function solution(new_id) {
  var answer = new_id
    .toLowerCase()
    .replace(/[^\.a-z0-9-_]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.+$/, "");

  if (answer === "") answer = "a";

  answer = answer.slice(0, 15).replace(/\.+$/, "");

  return answer.length > 2
    ? answer
    : answer.padEnd(3, answer[answer.length - 1]);
}

let input = ["...!@BaT#*..y.abcdefghijklm", "bat.y.abcdefghi"];
let answer = solution(input[0]);
console.log("answer :>> ", answer);

input = ["=.=", "aaa"];
answer = solution(input[0]);
console.log("answer :>> ", answer);

input = ["abcdefghijklmn.p", "abcdefghijklmn"];
answer = solution(input[0]);
console.log("answer :>> ", answer);

input = ["z-+.^.", "z--"];
answer = solution(input[0]);
console.log("answer :>> ", answer);

input = ["123_.def", "123_.def"];
answer = solution(input[0]);
console.log("answer :>> ", answer);
