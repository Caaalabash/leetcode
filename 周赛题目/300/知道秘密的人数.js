// 统计第 i 天新增的人数，因为知道秘密的总人数 = 从最后一天往前推 forget 天的人数和
function peopleAwareOfSecret(n, delay, forget) {
    const MOD = 1e9 + 7
    const dp = new Array(n + 1).fill(0)
    dp[1] = 1

    for (let i = 1; i <= n; i++) {
        for (let j = i + delay; j < i + forget && j <= n; j++) {
            dp[j] = (dp[i] + dp[j]) % MOD
        }
    }
    let result = 0
    for (let i = 0; i < forget; i++) {
        result = (result + dp[n - i]) % MOD
    }
    return result
}