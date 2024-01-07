//https://school.programmers.co.kr/learn/courses/30/lessons/178871

export function solution(players: string[], callings: string[]) {
    const rankedList: { [key: string]: number } = {};

    for (const [rank, player] of players.entries()) {
        rankedList[player] = rank;
    }

    const replacePlayer = (backRank: number, frontRank: number) => {
        const calledPlayer = players[backRank];
        const frontPlayer = players[frontRank];

        players[frontRank] = calledPlayer;
        players[backRank] = frontPlayer;
        rankedList[calledPlayer] -= 1;
        rankedList[frontPlayer] += 1;
    };

    for (const callName of callings) {
        let backRank = rankedList[callName];
        replacePlayer(backRank, backRank - 1);
    }

    return players;
}
