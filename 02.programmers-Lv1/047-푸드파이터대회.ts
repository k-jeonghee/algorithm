//https://school.programmers.co.kr/learn/courses/30/lessons/134240

export function solution(food: number[]) {
    const str = food
        .slice(1)
        .map((v, i) => String(i + 1).repeat(Math.floor(v / 2)))
        .join('');
    return str + '0' + [...str].reverse().join('');
}
