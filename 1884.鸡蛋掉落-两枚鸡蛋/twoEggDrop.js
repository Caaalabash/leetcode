function twoEggDrop(n) {
    const memo = new Map()
    function dp(k, n) {
        if (k === 1) return n
        if (n === 0) return 0
        if (memo.has(`${k} ${n}`)) {
            return memo.get(`${k} ${n}`)
        }
        let result = Infinity
        let left = 1
        let right = n

        while (left + 1 < right) {
            const mid = (left + right) >> 1
            const t1 = dp(k - 1, mid - 1) // 单增
            const t2 = dp(k, n - mid) // 单减

            if (t1 < t2) {
                left = mid
            } else if (t2 < t1) {
                right = mid
            } else {
                left = right = mid
            }
        }

        result = Math.min(
            result,
            Math.max(dp(k - 1, left - 1), dp(k, n - left)),
            Math.max(dp(k - 1, right - 1), dp(k, n - right))
        )
        memo.set(`${k} ${n}`, result)
        return result
    }
    return dp(2, n)
}