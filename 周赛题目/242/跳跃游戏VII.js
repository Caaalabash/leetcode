// dfs - 超时
function canReach(s, minJump, maxJump) {
  const length = s.length
  const record = new Array(length).fill(true)

  function helper(index) {
    if (record[index] === false) {
      return false
    }
    if (index === length - 1) {
      return true
    }
    // s = '000000..1' minJump = 1 maxJump = 9999 此时退化成O(n^2)
    for (let j = index + minJump; j <= Math.min(index + maxJump, length - 1); j++) {
      if (s[j] === '0') {
        if (helper(j)) {
          return true
        } else {
          record[j] = false
        }
      }
    }
    return false
  }
  return helper(0)
}

// dp
function canReach1(s, minJump, maxJump) {
  const length = s.length
  // dp[i]表示索引i能否到达
  const dp = new Array(length).fill(false)
  dp[0] = true

  for (let i = 0; i < length; i++) {
    if (dp[i] === false) {
      continue
    }
    for (let j = i + minJump; j <= Math.min(i + maxJump, length - 1) && dp[j] === false; j++) {
      dp[j] = s[j] === '0'
    }
  }

  return dp[length - 1]
}
