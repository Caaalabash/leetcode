// sb写法
function checkZeroOnes(s) {
  let maxOneCount = 0
  let maxZeroCount = 0

  let left = 0, right = 0
  while (left < s.length && right < s.length) {
    if (s[right] === '1') {
      maxOneCount = Math.max(maxOneCount, right - left + 1)
    } else {
      left = right + 1
    }
    right++
  }
  right = 0
  left = 0
  while (left < s.length && right < s.length) {
    if (s[right] === '0') {
      maxZeroCount = Math.max(maxZeroCount, right - left + 1)
    } else {
      left = right + 1
    }
    right++
  }
  return maxOneCount > maxZeroCount
}

// 值得学习的写法
function checkZeroOnes(s) {
  let maxOne = 0
  let maxZero = 0
  let curOne = 0
  let curZero = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      curOne++
      curZero = 0
    } else {
      curZero++
      curOne = 0
    }
    maxOne = Math.max(maxOne, curOne)
    maxZero = Math.max(maxZero, curZero)
  }
  return maxOne > maxZero
}
