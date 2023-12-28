//https://school.programmers.co.kr/learn/courses/30/lessons/42860

function getCharDistance(str: string) {
    const min = 'A'.charCodeAt(0);
    const max = 'Z'.charCodeAt(0) + 1;
    const code = str.charCodeAt(0);
    return Math.min(code - min, max - code);
}

export function solution(name: string) {
    const distances = name.split('').map(getCharDistance);
    const chageCount = distances.reduce((a, b) => a + b);

    let minCursorCount = distances.length - 1;

    for (const charIdx of distances.keys()) {
        let cursorCount = charIdx + 1;

        while (cursorCount < distances.length && distances[cursorCount] === 0)
            cursorCount++;

        const rest = distances.length - cursorCount;
        minCursorCount = Math.min(
            minCursorCount, //정방향 이동
            charIdx * 2 + rest, //현재 문자까지 이동 거리 + 그만큼 돌아가기 + A를 제외한 나머지 문자 길이
            charIdx + 2 * rest, //A를 제외한 나머지 문자 길이로 역방향 이동 + 그만큼 돌아가기 + 현재 문자까지 이동 거리
        );
    }

    return chageCount + minCursorCount;
}
