//https://school.programmers.co.kr/learn/courses/30/lessons/42579

export function solution(genres: string[], plays: number[]) {
    const map = new Map();

    for (const [id, play] of plays.entries()) {
        const genre = genres[id];
        const sum = (map.get(genre) ?? 0) + play;
        map.set(genre, sum);
    }

    const descSum = [...map].sort((a, b) => b[1] - a[1]);
    const musics = genres
        .map((genre, id) => ({ id, genre, play: plays[id] }))
        .sort((a, b) => b.play - a.play);

    return descSum.flatMap(([targetGenre]) => {
        const musicIds: number[] = [];
        for (const { id, genre } of musics) {
            if (musicIds.length > 1) break;
            if (targetGenre === genre) musicIds.push(id);
        }
        return musicIds;
    });
}
