//https://school.programmers.co.kr/learn/courses/30/lessons/172928

type Direction = {
    [key: string]: [number, number];
};

export function solution(park: string[], routes: string[]) {
    let x = 0;
    let y = 0;
    let maxX = park.length - 1;
    let maxY = park[0].length - 1;

    const direction: Direction = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    };

    for (const [i, v] of park.entries()) {
        const start = v.indexOf('S');
        if (start !== -1) {
            x = i;
            y = start;
        }
    }

    const isValidPosition = (x: number, y: number) => {
        if (x < 0 || x > maxX || y < 0 || y > maxY || park[x][y] === 'X')
            return false;
        return true;
    };

    for (const route of routes) {
        const [op, n] = route.split(' ');
        let [tempX, tempY] = [x, y];
        let canMove = true;

        for (let i = 0; i < Number(n); i++) {
            tempX += direction[op][0];
            tempY += direction[op][1];
            if (!isValidPosition(tempX, tempY)) {
                canMove = false;
                break;
            }
        }

        if (canMove) [x, y] = [tempX, tempY];
    }

    return [x, y];
}
