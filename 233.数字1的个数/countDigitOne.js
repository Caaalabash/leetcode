// 数位dp
function countDigitOne(n) {
    const str = String(n)
    const len = str.length
    const dfs = memo((recur, i, oneCount, limit) => {
        if (i === len) {
            return oneCount
        }
        let res = 0
        const up = limit ? Number(str[i]) : 9
        for (let k = 0; k <= up; k++) {
            res += recur(i + 1, oneCount + Number(k === 1), limit && k === up)
        }
        return res
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