package problem0070

// 动态规划
// 状态转移方程 F(n) = F(n-1) + F(n-2)
// 边界        F(1), F(2)
// 最优子结构   F(8)和F(9)是F(10)的最优子结构
func climbStairs(n int) int {
	if n <= 2 {
		return n
	}
	pre1, pre2 := 1, 2
	for i := 3; i <= n; i++ {
		pre1, pre2 = pre2, pre1+pre2
	}
	return pre2
}
