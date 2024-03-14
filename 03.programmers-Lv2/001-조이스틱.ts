//https://school.programmers.co.kr/learn/courses/30/lessons/42860

function getCharDistance(str: string) {
    const min = 'A'.charCodeAt(0);
    const max = 'Z'.charCodeAt(0) + 1;
    const code = str.charCodeAt(0);
    return Math.min(code - min, max - code);
}

export function solution(name: string) {
    const totalChangeCount = name
        .split('')
        .map(getCharDistance)
        .reduce((a, b) => a + b);

    let minMoveCount = name.length - 1; //A가 없는 경우의 최솟값

    const getMinMoveFromChar = (idx: number, cursor: number) => {
        const rest = name.length - cursor;
        const leftTurn = idx * 2 + rest;
        const rightTurn = idx + 2 * rest;
        return Math.min(minMoveCount, leftTurn, rightTurn);
    };

    for (const charIdx of [...name].keys()) {
        let cursorCount = charIdx + 1;
        while (cursorCount < name.length && name[cursorCount] === 'A')
            cursorCount++;

        //문자마다 완성할 수 있는 최솟값이 달라진다.
        //마지막 순회를 마칠 때까지의 가장 작은 값을 찾는다.
        minMoveCount = getMinMoveFromChar(charIdx, cursorCount);
    }

    return totalChangeCount + minMoveCount;
}
