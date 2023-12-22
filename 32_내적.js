// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. 
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 
// a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. 
// (n은 a, b의 길이)

const a = [-1,0,1];
const b = [1,0,-1];

const solution = (a, b) => a.reduce((acc, cur, i) => acc + (cur * b[i]), 0)

console.log(solution(a, b))