//https://school.programmers.co.kr/learn/courses/30/lessons/12921

export function solution(n: number) {
    const isPrimes = Array(n + 1).fill(true);
    isPrimes[0] = false;
    isPrimes[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i * i; j <= n; j += i) {
            if (isPrimes[j]) isPrimes[j] = false;
        }
    }

    return isPrimes.filter((v) => v === true).length;
}
