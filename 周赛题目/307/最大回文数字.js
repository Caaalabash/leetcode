// 贪心
function largestPalindromic(num) {
    // 计数
    const countArr = new Array(10).fill(0)
    for (let i = 0; i < num.length; i++) {
        countArr[num[i]]++
    }
    let prefix = '', mid = '', suffix = ''
    for (let i = 9; i >= 0; i--) {
        // 排除前导0
        if (!prefix && i === 0) continue
        // 取出偶数个
        if (countArr[i] >= 2) {
            const repeatCount = Math.floor(countArr[i] / 2)
            prefix += `${i}`.repeat(repeatCount)
            suffix = `${i}`.repeat(repeatCount) + suffix
            countArr[i] %= 2
        }
    }
    for (let i = 9; i >= 0; i--) {
        if (countArr[i] > 0) {
            mid = i
            break
        }
    }
    return prefix + mid + suffix
}