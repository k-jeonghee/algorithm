//https://www.acmicpc.net/problem/2178

const [input, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N, M] = input.split(' ').map(Number);
const graph: number[][] = lines.map((line) => line.split('').map(Number));
const ds = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

const bfs = (row: number, col: number) => {
    const queue = [[row, col]];

    while (queue.length) {
        const [curR, curC] = queue.shift()!;

        for (const [dr, dc] of ds) {
            const [r, c] = [curR + dr, curC + dc];
            if (r < 0 || c < 0 || r >= N || c >= M) continue;
            if (graph[r][c] === 1) {
                graph[r][c] = graph[curR][curC] + 1;
                queue.push([r, c]);
            }
        }
    }
};

bfs(0, 0);
console.log(graph[N - 1][M - 1]);
