// 정수를 담고 있는 배열 arr의 평균값을 
// return하는 함수, solution을 완성해보세요.

const arr = [1, 2, 3, 4];

const solution = (arr) => arr.reduce((sum, cur) => sum + cur) / arr.length;

console.log(solution(arr))