// 정수 n이 매개변수로 주어질 때, 
// n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록
// solution 함수를 완성해주세요.

// 1. 정수 n의 이하 숫자를 배열로 나열한다.
// 2. for문으로 하나하나 돌며 2로 나눠지는 수는 제외한다.
// 3. 나머지 값을 return 한다.

const n = 11;

function solution (n) {
    const answer = [];
    for (let i=0; i <= n; i++) {
        if (i % 2 === 1) {
            answer.push(i)
        }
    }
    return answer;
}


function solution2(n) {
    var answer = [];
    for (let i = 1; i<=n; i+=2) answer.push(i)
    return answer;
}


const solution3 = (n) => 
    Array
        .from({ length: n }, (_, i) => i + 1)
        .filter(i => i % 2 !== 0)


function solutio4(n) {
    return Array(n).fill(1).map((v,i)=>v+i).filter(v=>v%2===1);
}


// console.log(solution3(n));

const test = (n) => 
    Array(n).fill(1).map((_, i) => _ + i)
console.log(test(n));
