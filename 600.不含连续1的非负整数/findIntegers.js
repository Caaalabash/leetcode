// 数位DP
function findIntegers(n) {
    const str = Number(n).toString(2)
    const len = str.length
    const dfs = memo((recur, i, status, isLimit) => {
        if (i === len) {
            return 1
        }
        let result = 0
        const end = isLimit ? Number(str[i]) : 1
        for (let k = 0; k <= end; k++) {
            if (status === 1 && k === 1) continue
            result += recur(i + 1, k, isLimit && k === end)
        }
        return result
    })
    return dfs(0, 0, true)
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