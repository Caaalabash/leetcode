// Q3 1599
// dp[i] = 以nums[i]为结尾的词链的最长长度, 初始值 dp[i] = 1
// dp[i] = Math.max(dp[i], canAtoB(words[i - j, words[i]) ? dp[i - j] + 1 : 1)
function longestStrChain(words) {
    // 按照字符串长度排序
    words.sort((a, b) => a.length < b.length ? -1 : 1)
    const dp = new Array(words.length).fill(1)

    for (let i = 0; i < words.length; i++) {
        for (let j = 1; j <= i; j++) {
            if (canAtoB(words[i - j], words[i])) {
                dp[i] = Math.max(dp[i], dp[i - j] + 1)
            }
        }
    }
    return Math.max(...dp)
}

function canAtoB(a, b) {
    if (a.length + 1 !== b.length) return false
    for (let i = 0; i < a.length; i++) {
        if (a.charAt(i) !== b.charAt(i)) {
            return a.slice(0, i).concat(b.charAt(i), a.slice(i)) === b
        }
    }
    return true
}
