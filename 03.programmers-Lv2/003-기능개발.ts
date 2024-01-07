//https://school.programmers.co.kr/learn/courses/30/lessons/42586

export function solution(progresses: number[], speeds: number[]) {
    const answer = [];
    const requiredDays = progresses.map((v, i) =>
        Math.ceil((100 - v) / speeds[i]),
    );

    let target = requiredDays[0];
    let count = 0;
    for (const day of requiredDays) {
        if (target >= day) count += 1;
        else {
            answer.push(count);
            count = 1;
            target = day;
        }
    }
    answer.push(count);
    return answer;
}
