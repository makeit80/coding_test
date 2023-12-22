// 두 정수 left와 right가 매개변수로 주어집니다. 
// left부터 right까지의 모든 수들 중에서, 
// 약수의 개수가 짝수인 수는 더하고, 
// 약수의 개수가 홀수인 수는 뺀 수를 
// return 하도록 solution 함수를 완성해주세요.

const left = 13;
const right = 17;

function solution (left, right) {
    const arr = []
    return Array
    .from({length : (right - left) + 1}, (_, i) => left + i)
    .map((item, i) => {
        const length = []
        arr.push(item)
        for (let i = 0; i <= item; i++) {
            if (item % i === 0) {
                length.push(i)
            }
        }
        return length.length;
    })
    .reduce((acc, cur, i) => cur % 2 ? acc - arr[i] : acc + arr[i], 0)
}

console.log(solution(left, right))


// 다른 사람의 풀이
function solution2 (left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}


function solution3 (left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2) answer -= i;
    else answer += i;
  }

  return answer;
}