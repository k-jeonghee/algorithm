//https://school.programmers.co.kr/learn/courses/30/lessons/176963

import _ from 'lodash';

export function solution(
    name: string[],
    yearning: number[],
    photo: string[][],
) {
    const map = new Map();
    for (const [i, person] of name.entries()) {
        map.set(person, yearning[i]);
    }

    const yearnings = photo.map((v) => v.map((person) => map.get(person) ?? 0));

    return yearnings.map(_.sum);
}
