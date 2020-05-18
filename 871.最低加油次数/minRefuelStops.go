package problem0871

// 汽车从起点向东出发，需要抵达target英里外的目标地点
// 沿途有加油站，每个 station[i] 代表一个加油站，它位于出发位置东面 station[i][0] 英里处，并且有 station[i][1] 升汽油。
// 假设汽车油箱的容量是无限的，其中最初有 startFuel 升燃料。它每行驶 1 英里就会用掉 1 升汽油。
// 为了到达目的地，汽车所必要的最低加油次数是多少？如果无法到达目的地，则返回 -1 。
// 注意：到达加油站时剩余燃料为0，仍然可以加油；到达目的地时剩余燃料为0，仍然可以算作抵达。

// 输入：target = 100, startFuel = 1, stations = [[10,100]]
// 输出：-1
// 解释：无法抵达目的地

// 求最低加油次数，那么用dp[i]表示加i次油能走的最远距离，存在dp[i] > target即可返回，否则返回-1
// dp[0] = startFuel
// 每多一个加油站station[i] = (location, capacity), 如果之前可以通过t次加油到达这个加油站，现在就可以加t+1次油得到capacity的油量
func minRefuelStops(target int, startFuel int, stations [][]int) int {
	dp := make([]int, len(stations)+1)
	dp[0] = startFuel

	for i := 0; i < len(stations); i++ {
		// 在能到达的情况下，从后向前更新每个位置的最大值
		for j := i; j >= 0; j-- {
			if dp[j] >= stations[i][0] {
				dp[j+1] = max(dp[j+1], dp[j]+stations[i][1])
			}
		}
	}

	for i := 0; i <= len(stations); i++ {
		if dp[i] >= target {
			return i
		}
	}
	return -1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
