//https://www.acmicpc.net/problem/16173

import _ from 'lodash';

const [n, ...lines]: string[] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(n);
const gameMap = lines.map((line) => line.split(' ').map(Number));

const getGameResult = (row: number, col: number) => {
    let dist = gameMap[row][col];

    if (dist === -1) return true;
    if (!dist) return false;

    const ds = [
        [dist, 0],
        [0, dist],
    ];

    return _.some(ds, ([r, c]): boolean => {
        const [curR, curC] = [row + r, col + c];
        return curR >= 0 && curC >= 0 && curR < N && curC < N && getGameResult(curR, curC);
    });
};

getGameResult(0, 0) ? console.log('HaruHaru') : console.log('Hing');
