// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 '
// return 하도록 solution 함수를 작성해주세요.

const n = 1;

const solution = (n) => n !== 1 ? 
    Array
        .from({ length: n }, (_, i) => i + 1)
        .filter(i => i % 2 === 0)
        .reduce((a, b) => a + b) : 0

        

console.log(solution(n));


