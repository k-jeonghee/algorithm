//https://school.programmers.co.kr/learn/courses/30/lessons/181898

export function solution(arr: number[], idx: number) {
    const slicedArr = arr.slice(idx);
    for (const [i, v] of slicedArr.entries()) {
        if (v === 1) return i + idx;
    }
    return -1;
}
