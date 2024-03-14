//https://school.programmers.co.kr/learn/courses/30/lessons/64065

export function solution(s: string) {
    const set = new Set();

    const incLength: number[][] = s
        .slice(2, s.length - 2)
        .split('},{')
        .map((v) => v.split(',').map(Number))
        .sort((a, b) => a.length - b.length);

    for (const arr of incLength) {
        for (const num of arr) {
            set.add(num);
        }
    }
    return [...set];
}
