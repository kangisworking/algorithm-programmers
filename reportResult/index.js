// 2 ≤ id_list의 길이 ≤ 1,000
// 1 ≤ id_list의 원소 길이 ≤ 10
// id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
// id_list에는 같은 아이디가 중복해서 들어있지 않습니다.
// 1 ≤ report의 길이 ≤ 200,000
// 3 ≤ report의 원소 길이 ≤ 21
// report의 원소는 "이용자id 신고한id"형태의 문자열입니다.
// 예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
// id는 알파벳 소문자로만 이루어져 있습니다.
// 이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
// 자기 자신을 신고하는 경우는 없습니다.
// 1 ≤ k ≤ 200, k는 자연수입니다.
// return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.

function solution(id_list, report, k) {
  let answer = [];
  let answerData = {};
  let totalReportCnt = {};

  // id_list validation
  //   if (id_list.length < 2 || id_list.length > 1000) return;
  //   if (id_list.filter((id) => id.length < 3 || id.length > 10).length > 0)
  //     return;
  // report validation
  //   if (report.length < 1 || report.length > 200000) return;
  //   if (report.filter((r) => r.length < 3 || r.length > 21).length > 0) return;
  // k validation
  //   if (k > 1 && k > 200) return;

  report.map((r) => {
    let reportArr = r.split(" ");
    let [key, value] = reportArr;
    if (!answerData[key]) answerData[key] = [];

    if (answerData[key].indexOf(value) === -1) {
      answerData[key].push(value);
      if (!totalReportCnt.hasOwnProperty(value)) totalReportCnt[value] = 1;
      else totalReportCnt[value] = totalReportCnt[value] + 1;
    }
  });

  answer = id_list.map((i) => {
    let target = answerData[i];
    if (!target) return 0;

    let tmpSum = 0;
    target.map((t) => {
      if (totalReportCnt[t] >= k) tmpSum++;
    });
    return tmpSum;
  });
  return answer;
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;
let answer = solution(id_list, report, k);
console.log("answer :>> ", answer);

let input = [
  ["con", "ryan"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
  3,
];
answer = solution(input[0], input[1], input[2]);
console.log("answer :>> ", answer);
