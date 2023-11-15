// 정수 n을 입력받아 
// n의 약수를 모두 더한 값을 리턴하는 
// 함수, solution을 완성해주세요.

const n = 12;

const solution = (n) => n !== 0 ?
    Array
    .from({ length: n }, (_, i) => i + 1)
    .filter(i => n % i === 0)
    .reduce((a, b) => a + b) : 0


console.log(solution(n))



function solution2(n) {
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){
        if (!(n%i)) {
            answer += (i+n/i);
        }
    }
    i--;
    return (i === n/i) ? answer-i : answer;
}