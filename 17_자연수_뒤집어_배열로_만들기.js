// 자연수 n을 뒤집어 
// 각 자리 숫자를 원소로 가지는 
// 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

const n = 12345

const solution = (n) =>
    Array
    .from ({length : String(n).length}, (_, i) => i)
    .sort((a, b) => b - a)
    .map((value) => Number(String(n)[value]))


console.log(solution(n))


function solution2 (n) {
    return (n+'').split('').reverse().map(n => parseInt(n));
}

console.log(solution2(n))
