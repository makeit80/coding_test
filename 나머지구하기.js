// 정수 num1, num2가 매개변수로 주어질 때, 
// num1를 num2로 나눈 나머지를 return 하도록 
// solution 함수를 완성해주세요.
var num1 = 3
var num2 = 2

function solution (num1, num2) {
    var answer = num1 % num2;
    return answer;
}

console.log(solution(num1, num2));

// 해설
const solution = (num1, num2) => num1 % num2
// 화살표 함수가 익숙해질 필요가 있다 !!
