//https://school.programmers.co.kr/learn/courses/30/lessons/161990

export function solution(wallpaper: string[]) {
    const row: number[] = [];
    const col: number[] = [];
    for (const [rowIdx, rowVal] of wallpaper.entries()) {
        for (const [colIdx, colVal] of [...rowVal].entries()) {
            if (colVal === '#') {
                row.push(rowIdx);
                col.push(colIdx);
            }
        }
    }

    return [
        Math.min(...row),
        Math.min(...col),
        Math.max(...row) + 1,
        Math.max(...col) + 1,
    ];
}
