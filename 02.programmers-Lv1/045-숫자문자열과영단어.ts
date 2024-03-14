//https://school.programmers.co.kr/learn/courses/30/lessons/81301

export function solution(s: string) {
    const words: Record<string, string> = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };

    for (const word in words) {
        s = s.replace(word, words[word]);
    }
    return Number(s);
}

console.log(solution('one4seveneight'));
