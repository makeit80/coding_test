// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소의 평균값을 return하도록 
// solution 함수를 완성해주세요.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function solution (number) {
    return number.reduce((sum, cur) => sum + cur) / number.length
}

console.log(solution(number));


