//https://school.programmers.co.kr/learn/courses/30/lessons/12906

export function solution(arr: number[]) {
    const answer = [arr[0]];
    for (const [i, v] of arr.entries()) {
        if (i === 0) continue;
        if (v !== arr[i - 1]) answer.push(v);
    }
    return answer;
}
