// 2023.10.19.

numer1 = 1;
donom1 = 2;
numer2 = 3;
donom2 = 4;

function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  var arr1 = [];
  var arr2 = [];
  let a = [];

  for (i = 1; a.length < 1; i++) {
    arr1.push(denom1 * i);
    arr2.push(denom2 * i);
    a = arr1.filter(x => arr2.includes(x))
  }

  let arr = [arr1, arr2];
  let numer = [numer1, numer2];
  let b = 0;

  for (i = 0; i < arr.length; i++) {
    n = index(arr[i], a[0], numer[i])
    console.log('n' + n)
    b += n;
  }

  answer.push(b, a[0])
  return answer;
}


function index(arr, a, numer) {
  let index = arr.indexOf(a) + 1;
  if (index > 0) {
    numer *= index;
  }
  return numer
}

console.log(solution(numer1, donom1, numer2, donom2));