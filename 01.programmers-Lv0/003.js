//https://school.programmers.co.kr/learn/courses/30/lessons/181950

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const str = input[0];
  const n = Number(input[1]);
  const strArr = [];
  for (let i = 0; i < n; i++) {
    strArr.push(str);
  }
  console.log(strArr.join(""));
});
