// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 각 원소에 두배한 원소를 가진 배열을 
// return하도록 solution 함수를 완성해주세요.

let numbers = [1, 2, 3, 4, 5]

function solution1(numbers) {
    var answer = [];

    for (let i = 0; i < numbers.length; i++) {
        let x = numbers[i] * 2;
        answer.push(x)
    }
    return answer;
}



// reduce 사용법
function solution2(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}
// 초기값을 [] 배열로 만들고
// a (accmulator)에 누적
// b (currentValue)는 기존 배열을 받아와서 
// 차례대로 * 2를 한다.
// 나온 값을 ...(spread operator)로 풀어서
// 초기값 [] 배열에 전달

// map 사용법
const solution3 = numbers.map((number) => number * 2)
// map() 함수는 값과 인덱스를 받아
// 자동으로 for문을 돌려 값을 빼도록 해준다.
// map 함수는 기존 배열을 변경하지 않고 새로운 배열을 생성한다

console.log(solution3);
