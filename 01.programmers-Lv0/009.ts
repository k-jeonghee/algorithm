//https://school.programmers.co.kr/learn/courses/30/lessons/181944

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input: string[] = [];

rl.on('line', function (line: string) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    if (n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`);
    }
});
