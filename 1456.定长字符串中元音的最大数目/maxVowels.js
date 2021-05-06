// 给你字符串 s 和整数 k
// 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。
// 1 <= s.length <= 10^5
// 1 <= k <= s.length
// 滑动窗口
function maxVowels(s, k) {
  const vowelsMap = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1
  }
  let vowels = 0
  for (let i = 0; i < k; i++) {
    if (s[i] in vowelsMap) {
      vowels++
    }
  }
  let maxVowels = vowels
  for (let i = k; i < s.length; i++) {
    if (s[i] in vowelsMap) {
      vowels++
    }
    if (s[i - k] in vowelsMap) {
      vowels--
    }
    maxVowels = Math.max(maxVowels, vowels)
  }
  return maxVowels
}
