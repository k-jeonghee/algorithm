//https://school.programmers.co.kr/learn/courses/30/lessons/12909

export function solution(s: string) {
    const brackets = s.split('');
    const stack: string[] = [];
    for (const bracket of brackets) {
        if (bracket === ')' && stack.at(-1) === '(') stack.pop();
        else stack.push(bracket);
    }
    return stack.length === 0;
}
