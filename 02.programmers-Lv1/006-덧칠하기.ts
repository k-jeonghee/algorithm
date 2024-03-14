//https://school.programmers.co.kr/learn/courses/30/lessons/161989

export function solution(n: number, m: number, section: number[]) {
    let paintRange = 0;
    let count = 0;
    for (const wallNum of section) {
        if (wallNum > paintRange) {
            count++;
            paintRange = wallNum + m - 1; //벽 번호부터 롤러 길이만큼 칠해진다. 시작 벽 빼주기
        }
    }
    return count;
}
