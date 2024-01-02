//https://school.programmers.co.kr/learn/courses/30/lessons/181902

export function solution(my_string: string) {
    const map = new Map();

    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = lower.toUpperCase();
    const alphabet = upper + lower;

    for (const char of my_string) {
        const data = (map.get(char) ?? 0) + 1;
        map.set(char, data);
    }

    return alphabet.split('').map((v) => map.get(v) ?? 0);
}
