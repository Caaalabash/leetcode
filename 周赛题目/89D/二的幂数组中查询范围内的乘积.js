function productQueries(n, queries) {
    const MOD = 1e9 + 7
    // 求解powers
    // 对于 n = 15 = 0b1111，其最少的2的幂就是 0b1000、0b0100、0b0010、0b0001
    const powers = []
    while (n) {
        // 两个互为相反数的按位与操作，将得到最低位
        powers.push(n & -n)
        // 更新最低位
        n &= n - 1
    }
    // 暴力
    const result = []
    for (const [left, right] of queries) {
        let sum = 1
        for (let i = left; i <= right; i++) {
            sum = (sum * powers[i]) % MOD
        }
        result.push(sum)
    }
    return result
}