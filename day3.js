// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 각 원소에 두배한 원소를 가진 배열을 
// return하도록 solution 함수를 완성해주세요.

let numbers = [1, 2, 3, 4, 5]

function solution(numbers) {
    var answer = [];

    for (let i = 0; i < numbers.length; i++) {
        let x = numbers[i] * 2;
        answer.push(x)
    }
    return answer;
}

console.log(solution(numbers));
