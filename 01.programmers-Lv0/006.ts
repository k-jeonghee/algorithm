//https://school.programmers.co.kr/learn/courses/30/lessons/181947

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input: string[] = [];

rl.on('line', function (line: string) {
    input = line.split(' ');
}).on('close', function () {
    const a = Number(input[0]);
    const b = Number(input[1]);
    console.log(`${a} + ${b} = ${a + b}`);
});
