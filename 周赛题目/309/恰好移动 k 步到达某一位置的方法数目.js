// 记忆化搜索
// 定义f(x,left)表示当前在x，还剩left步时，走到终点的方案数
function numberOfWays(startPos, endPos, k) {
    const cache = {}
    const mod = 1e9 + 7
    const helper = (x, k) => {
        const key = `${x}-${k}`
        if (key in cache) return cache[key]
        // 无法走到终点
        if (Math.abs(x - endPos) > k) return 0
        // 到达终点
        if (k === 0) return 1
        // 向左或向右
        cache[key] = (helper(x - 1, k - 1) + helper(x + 1, k - 1)) % mod
        return cache[key]
    }

    return helper(startPos, k)
}