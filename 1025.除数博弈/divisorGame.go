package problem1025

// 除数博弈，每个回合进行如下操作：
// 1. 从（0，N）之间去一个N的约数x
// 2. 使用N - x 替换N，进行下一个回合
// 如果玩家无法执行这些操作，就会输掉游戏
// 归纳法：
// 进入下一个回合
// N为1时 ==> 输
// N为2时 ==> 赢（取1，对手得到1）
// N为3时 ==> 输 (取1，对手得到2)
// N为4时 ==> 赢 (取1，对手得到3)
// 所以偶数胜利，复习一下，按位与，都为1才为1
func divisorGame(N int) bool {
	return N&1 == 0
}

// 动态规划：将所有小于等于N的解找出来，基于前面的，递推后面的
// 设dp[N]为数字N时，Alice的输赢情况
// Alice持有的数字N胜利的条件 = dp[N - {N的所有约数}]有一个为false
func divisorGame1(N int) bool {
	if N == 1 {
		return false
	}
	dp := make([]bool, N+1)
	dp[1] = false
	dp[2] = true
	for i := 3; i < N+1; i++ {
		for j := 1; j < i; j++ {
			if i%j == 0 && dp[i-j] == false {
				dp[i] = true
				break
			}
		}
	}
	return dp[N]
}
