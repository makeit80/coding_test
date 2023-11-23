// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

const n = 1;

function solution (n) {
    return (n+'') 
    .split('') 
    .sort((a, b) => b - a) 
    .reduce((a, b) => [a + b])*1
    
}

console.log(solution(n))



// function solution (n) {
//     return (n+'') // String
//     .split('') // ['1', '1', '8', '3', '7', '2']
//     .sort((a, b) => b - a) // ['8', '7', '3', '2', '1', '1']
//     .reduce((a, b) => [parseInt(a + b)])[0] // [873211] => 873211
// }