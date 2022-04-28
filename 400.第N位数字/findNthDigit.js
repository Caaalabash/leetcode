// 给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位上的数字

// 1-9 9
// 10-99 180
// 100-999 2700
// 1000-9999 36000
// ....       9 * 10^(x-1) * x
function findNthDigit(n) {
    // 数字位数
    let len = 0
    while (9 * Math.pow(10, len - 1) * len < n) {
        n -= 9 * Math.pow(10, len - 1) * len
        len++
    }
    const targetNum =  Math.pow(10, len - 1) + Math.floor(n / len) - 1
    const remainder = n % len
    if (remainder === 0) return String(targetNum).slice(len - 1, len)
    return String(targetNum + 1).slice(remainder - 1, remainder)
}