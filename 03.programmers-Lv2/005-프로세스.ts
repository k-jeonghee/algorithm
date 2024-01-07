//https://school.programmers.co.kr/learn/courses/30/lessons/42587

export function solution(priorities: number[], location: number) {
    let count = 0;
    const queue = [...priorities.entries()];
    while (queue.length > 0) {
        const value = queue.shift()!;
        if (queue.some(([, v]) => value[1] < v)) {
            queue.push(value);
        } else {
            count++;
            if (location === value[0]) return count;
        }
    }
}
