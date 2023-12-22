// 단어 s의 가운데 글자를 
// 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 
// 가운데 두글자를 반환하면 됩니다.

const s = "aeesdadsrs";

function solution (s) {
    const i = s.length / 2
    return s.length % 2 === 0
    ? s.slice(i-1, i+1)
    : s.substring(Math.floor(i), Math.ceil(i))
}

console.log(solution(s))



// 다른 사람의 풀이
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}



