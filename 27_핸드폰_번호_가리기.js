// 프로그래머스 모바일은 
// 개인정보 보호를 위해 고지서를 보낼 때 
// 고객들의 전화번호의 일부를 가립니다.

// 전화번호가 문자열 phone_number로 주어졌을 때, 
// 전화번호의 뒷 4자리를 제외한 
// 나머지 숫자를 전부 *으로 가린 문자열을 
// 리턴하는 함수, solution을 완성해주세요.

const phone_number = "01033334444"

function solution (phone_number) {
    return phone_number
    .slice(0, -4)
    .replace(/[0-9]/g,"*")
    + phone_number
    .substring(phone_number.length - 4)
}

console.log(solution(phone_number))


// 다른 사람의 풀이
const solution2 = n => [...n].fill("*",0,n.length-4).join("")

function solution3(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
}

function solution4(s){
    return s.replace(/\d(?=\d{4})/g, "*");
}
// 전/후방 탐색 (?=g) : 특정 문자 앞까지만 조회 (모든 문자열 3개를 선택할 건데 g앞에 붙은 것만 조회)
// {} : 숫자로 단위를 표현하여 선택
// {n, m} 앞에 입력된 문자가 n개 이상 m개 미만
// {n,} 뒤의 인자를 비워두면 n개 이상을 의미
// \d : 숫자를 의미 (\D는 반대의 의미)

