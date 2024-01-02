//https://school.programmers.co.kr/learn/courses/30/lessons/181901
import _ from 'lodash';

export function solution(n: number, k: number) {
    return _.range(0, n + 1, k).splice(1);
}
