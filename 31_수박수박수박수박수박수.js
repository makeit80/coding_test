// 길이가 n이고, "수박수박수박수...."와 같은 
// 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
// 예를들어 n이 4이면 
// "수박수박"을 리턴하고 
// 3이라면 "수박수"를 리턴하면 됩니다.

const n = 3;

const solution = (n) =>
    Array
    .from({length: n}, (_, i) => i % 2 ? '박' : '수')
    .join("")
    
console.log(solution(n))


// 다른 사람의 풀이
var waterMelon = n =>'수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
