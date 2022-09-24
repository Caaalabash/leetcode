// 暴力， O(n)空间，O(nk)时间
// 优化代码可读性差了，就这样分情况讨论吧
function decrypt(code, k) {
    const n = code.length
    const result = new Array(n).fill(0)
    if (k === 0) return result
    if (k > 0) {
        for (let i = 0; i < n; i++) {
            for (let j = 1; j <= k; j++) {
                result[i] += code[(i + j) % n]
            }
        }
    } else {
        for (let i = 0; i < n; i++) {
            for (let j = 1; j <= Math.abs(k); j++) {
                result[i] += code[(n + (i - j)) % n]
            }
        }
    }
    return result
}