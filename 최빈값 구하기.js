// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
// 정수 배열 array가 매개변수로 주어질 때, 
// 최빈값을 return 하도록 solution 함수를 완성해보세요. 
// 최빈값이 여러 개면 -1을 return 합니다.

const array = [1];

  // 1. 위 배열에서 중복 값을 세어본다.
  // 2. 중복 값과 배열 안의 숫자를 한 객체로 묶는다.
  // 3. 객체들을 리스트로 변환한다.
  // 4. 리스트 중 카운트가 큰 순으로 나열한다.
  // 5. 인덱스 0, 1번의 카운트를 비교하여
  // 같지 않으면 index 0 리턴, 같으면 -1을 리턴한다.

function solution (array) {
  const data = [];
  // 중복값이 들어갈 빈 배열을 만들어주고,
  for (let i = 0; i < array.length; i++) {
    const existingEl = data.find((x) => x[0] === array[i])
    // 'data 배열에서 한 번씩 돌며 x의 0번째 인덱스와 array의 i번째 인덱스와
    // 일치하는지 확인해줘. (ex. x[0]은 [3, 1] 이 값에서 3을 뜻한다.)' 
      if (existingEl) {
        // '만약 existingEl 값이 있으면 (ex. [3, 1] 3의 숫자가 1번 반복됐다.)
        // existingEl의 1번째 인덱스에 +1을 해줘.'
        existingEl[1] = existingEl[1] + 1;
      }  else {
        // '만약 없으면 array[i]번째의 값과 1을 넣어줘.'
          data.push([array[i], 1])
      }  
    }
    data.sort((a, b) => b[1] - a[1]);
    console.log(data.length);
    if (data.length === 1) {
      return data[0][0]
    } else if (data[0][1] === data[1][1]) {
      return -1;
    } else {
      return data[0][0]
    }

}


console.log(sol(array));






function solution2 (array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0)+1);
  m = [...m].sort((a,b)=>b[1]-a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}



const solution3 = (array) => {
    const counter = array.reduce((acc, cur) => ({
        ...acc,
        [cur]: (acc[cur] || 0) + 1
    }), {})

    const items = Object.keys(counter).map((key) => [
        Number(key), counter[key]
    ]).sort((a, b) => b[1] - a[1])

    if (items[0][1] === items?.[1]?.[1]) {
        return -1
    }

    return items[0][0];
}



