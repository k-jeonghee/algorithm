//https://school.programmers.co.kr/learn/courses/30/lessons/181899

import _ from 'lodash';

export function solution(start: number, end_num: number) {
    return _.range(start, end_num - 1, -1);
}

//01
// return Array(start - end_num + 1)
//     .fill(start)
//     .map((v, i) => v - i);

//02
// const answer = [];
// while (start >= end_num) {
//     answer.push(start);
//     start--;
// }
// return answer;
