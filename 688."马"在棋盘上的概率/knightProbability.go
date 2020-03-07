package problem0688

// 此题属于动态规划中的"到达目标的不同方式总数"
// 计算留在棋盘上的概率 = 走k步留在棋盘上的总数 / 走k步的走法(8^k)
// 状态定义：dp[i][j][k] 表示从(i,j)走k步，马在棋盘上的概率，从k-1步到k步可以选择8个方向
// 8个方向"矢量变化"用(dx, dy)表示: 即(2,1),(2,-1),(-2,1)(-2,-1)(1,2)(1,-2)(-1,2)(-1,-2)
// 所以状态转移方程： dp[i][j][k] = ∑(dp[i+dx][j+dy][k-1]) / 8.0
// 初始值：如果k=0(走0步)，那概率肯定是100%, 即dp[i][j][0] = 1
func knightProbability(N int, K int, r int, c int) float64 {
	steps := [][]int{
		{2, 1},
		{2, -1},
		{-2, 1},
		{-2, -1},
		{1, 2},
		{1, -2},
		{-1, 2},
		{-1, -2},
	}
	// 初始化三维数组
	dp := make([][][]float64, N)
	for i := 0; i < N; i++ {
		dp[i] = make([][]float64, N)
		for j := 0; j < N; j++ {
			dp[i][j] = make([]float64, K+1)
		}
	}
	// 三维数组的时间复杂度，此处为O(n^2*K)
	for k := 0; k <= K; k++ {
		for i := 0; i < N; i++ {
			for j := 0; j < N; j++ {
				if k == 0 {
					// 初始状态
					dp[i][j][0] = 1
				} else {
					// 使用状态转移方程
					for _, step := range steps {
						prevI, prevJ := i+step[0], j+step[1]
						if prevI < 0 || prevI >= N || prevJ < 0 || prevJ >= N {
							continue
						}
						dp[i][j][k] += dp[prevI][prevJ][k-1]
					}
					dp[i][j][k] /= 8
				}
			}
		}
	}
	return dp[r][c][K]
}
