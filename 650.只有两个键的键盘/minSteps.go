package problem0650

// 最初在一个记事本上只有一个字符 'A'。你每次可以对这个记事本进行两种操作：
// Copy All (复制全部) : 你可以复制这个记事本中的所有字符(部分的复制是不允许的)。
// Paste (粘贴) : 你可以粘贴你上一次复制的字符。
// 求生成n个A所需要的最小操作步骤，1 <= n <= 1000
// 输入：3
// 输出：3
// 解释：Copy -> Paste -> Paste

// 令dp[i]代表生成n个A所需要的最小操作数量
// 1: null
// 2: copy -> paste
// 3: copy -> paste -> paste
// 5: copy -> paste -> paste -> paste -> paste
// 7: copy -> paste -> paste -> paste -> paste -> paste -> paste
// 4: copy -> paste -> copy -> paste
// 6: copy -> paste -> paste -> copy -> paste
// 8: copy -> paste -> copy -> paste -> copy -> paste
// 如果n是一个质数，那么结果只能是n，因为只能一个一个粘贴
// 如果n是一个合数，那么它的结果是分解因式的结果之和
// dp[i] = 合数  dp[m] + dp[n] (mn = i)
//         质树  i
func minSteps(n int) int {
	dp := make([]int, n+1)

	for i := 2; i <= n; i++ {
		dp[i] = i
		for j := 2; j < i/2; j++ {
			if i%j == 0 {
				dp[i] = dp[j] + dp[i/j]
				break
			}
		}
	}

	return dp[n]
}
