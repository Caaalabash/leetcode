// 数位DP模版
// 1 <= n <= 2 * 10^9
// 定义f(i, mask, isLimit, hasFillNumber)表示构造从左往右第 i 位及其之后数位的合法方案数
// mask：前面选过数字的集合，第i位要选的数字不能在mask中
// isLimit：是否受到了 n 的约束，如果是，则第 i 位填入的数字最大位 s[i]，否则可以填写到 9
// hasFillNumber：前面的数位是否填了数字，如果是，则当前位必须填写数字且可以从0开始，如果不是，可以不填 or 至少填写 1
function countSpecialNumbers(n) {
    const s = String(n)
    const len = s.length
    // 记忆[i][mask]状态
    const memo = new Array(len).fill(0).map(() => new Array(1 << 10).fill(-1))
    // dfs 代表从左到右选第i个数字时，前面已选状态为 mask 时的合法方案数
    const dfs = (i, mask, isLimit, hasFillNumber) => {
        if (i === len) {
            return hasFillNumber ? 1 : 0
        }
        // 已经计算过该状态
        if (!isLimit && hasFillNumber && memo[i][mask] !== -1) {
            return memo[i][mask]
        }
        let result = 0
        if (!hasFillNumber) {
            // 少填了一位数字，不可能超过n了，调整为非约束状态
            result = dfs(i + 1, mask, false, false)
        }
        for (let k = hasFillNumber ? 0 : 1, end = isLimit ? s[i] - '0' : 9; k <= end; k++) {
            // 如果mask中没有数字k，就可以选中
            if (((mask >> k) & 1) === 0) {
                result += dfs(i + 1, mask | (1 << k), isLimit && k === end, true)
            }
        }
        if (!isLimit && hasFillNumber) memo[i][mask] = result
        return result
    }
    return dfs(0, 0, true, false)
}