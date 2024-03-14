//https://www.acmicpc.net/problem/1388

const [, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const shapeMap = lines.map((line) => line.split(''));
let count = 0;

for (const [i, row] of shapeMap.entries()) {
    for (const [j, col] of row.entries()) {
        if (col === '-' && (j === 0 || shapeMap[i][j - 1] !== '-')) count++;
        if (col === '|' && (i === 0 || shapeMap[i - 1][j] !== '|')) count++;
    }
}

console.log(count);
