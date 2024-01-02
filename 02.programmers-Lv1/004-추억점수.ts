//https://school.programmers.co.kr/learn/courses/30/lessons/176963

export function solution(
    name: string[],
    yearning: number[],
    photo: string[][],
) {
    const map = new Map();
    for (const [i, person] of name.entries()) {
        map.set(person, yearning[i]);
    }

    return photo.map((group) => {
        let sum = 0;
        for (const person of group) {
            sum += map.get(person) ?? 0;
        }
        return sum;
    });
}
