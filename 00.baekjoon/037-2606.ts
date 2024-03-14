//https://www.acmicpc.net/problem/2606

const [$n, , ...$computers]: string[] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const computerCnt = Number($n);
const computers = $computers.map((v) => v.split(' ').map(Number));
const graph: number[][] = Array.from(Array(computerCnt + 1), () => []);
const visited = Array(computerCnt + 1).fill(false);
let count = 0;

for (const [x, y] of computers) {
    graph[x].push(y);
    graph[y].push(x);
}

function dfs(x: number) {
    visited[x] = true;
    count++;
    for (const y of graph[x]) {
        if (!visited[y]) dfs(y);
    }
}

dfs(1);
console.log(count - 1);
