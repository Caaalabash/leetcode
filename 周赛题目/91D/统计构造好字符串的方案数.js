// 记忆化，其实是典型的动态规划问题
function countGoodStrings(low, high, zero, one) {
    const MOD = 1e9 + 7
    const backTrack = memo((recur, strLength) => {
        if (strLength > high) {
            return 0
        }
        let result = (low <= strLength && strLength <= high) ? 1 : 0
        return (result + recur(strLength + zero) + recur(strLength + one)) % MOD
    })

    return backTrack(0)
}

function memo(fn) {
    const cache = new Map()
    return function recur(...args) {
        const key = args.toString()
        if (cache.has(key)) {
            return cache.get(key)
        }
        return cache.set(key, fn(recur, ...args)).get(key)
    }
}