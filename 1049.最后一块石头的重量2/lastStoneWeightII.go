package problem1049

// 有一堆石头，每块石头的重量都是正整数。
// 每一回合，从中选出任意两块石头x,y(x<=y)，碰撞的结果为y-x
// 最后，最多只会剩下一块石头。返回此石头最小的可能重量。如果没有石头剩下，就返回 0。

// 这道题可以转换为01背包问题，求两堆石头的最小差值 => 背包最多装sum/2的石头，如何能装下最多重量的石头
// 参考01背包问题的优化状态转移方程 f[v] = max{f[v], f[v-cost]+weight}求解
// dp[i]表示重量上限为i时背包所能装载的最大石头重量
func lastStoneWeightII(stones []int) int {
	total := sum(stones)
	maxCapacity := total / 2
	dp := make([]int, maxCapacity+1)

	for _, stone := range stones {
		for j := maxCapacity; j >= stone; j-- {
			dp[j] = max(dp[j], dp[j-stone]+stone)
		}
	}
	return total - 2*dp[maxCapacity]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func sum(list []int) int {
	result := 0
	for _, v := range list {
		result += v
	}
	return result
}
