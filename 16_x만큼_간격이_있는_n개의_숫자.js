// 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// x부터 시작해 x씩 증가하는 숫자를 
// n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고
// 조건을 만족하는 함수, solution을 완성해주세요.

const x = 2;
const n = 5;

const solution = (x, n) => 
    Array
    .from({length : n}, (_, i) => i + 1)
    // .from({length : n}, (_, i) => (i + 1) * x) 
    // 굳이 map 안쓰고 () 하나로 해결할 수 있었다..
    .map((el) => el * x)

console.log(solution(x, n))

