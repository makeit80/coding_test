// 두 정수 a, b가 주어졌을 때 
// a와 b 사이에 속한 모든 정수의 합을 
// 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 
// 3 + 4 + 5 = 12이므로 12를 리턴합니다.

const a = 3;
const b = 5;
// Math.abs()
const solution = (a, b) => {
    return Array
    .from({length: Math.abs(a-b)+1}, (_, i) => i + Math.min(a, b))
    .reduce((a, b) => a + b)
}


console.log(solution(a, b))

// 다른 사람의 풀이
function adder(a, b, s = 0){
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
}


function adder2(a, b){
    var result = (a<b)?a:b;
    while(a!=b){
      result += (a<b)?++a:++b;
    }    
    return result;
}