//https://school.programmers.co.kr/learn/courses/30/lessons/178871

export function solution(players: string[], callings: string[]) {
    const map = new Map();

    for (const [rank, player] of players.entries()) {
        map.set(player, rank);
    }

    const replaceRanking = (rank: number) => {
        let front = players[rank - 1];
        players[rank - 1] = players[rank];
        players[rank] = front;
        return players[rank];
    };

    for (const callName of callings) {
        const rank = map.get(callName);
        const nextPlayer = replaceRanking(rank);
        map.set(callName, rank - 1);
        map.set(nextPlayer, map.get(nextPlayer) + 1);
    }
    return players;
}
