// 양의 정수 x가 하샤드 수이려면 
// x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 
// 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 
// x가 하샤드 수인지 아닌지 검사하는 함수, 
// solution을 완성해주세요.

const x = 10;

function solution (x) {
    const answer = (x+'')
    .split('')
    .map((e) => e*1)
    .reduce((_, e) => _ + e);
    return x % answer === 0 ? true : false;
}


console.log(solution(x))


// 다른 사람의 풀이
function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
  }

  

