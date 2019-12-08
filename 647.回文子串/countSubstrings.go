package problem0647

// 给定一个字符串，计算这个字符串有多少个回文子串
// 具有不同开始位置或结束位置的子串，即便由相同字符组成，也会被视为是不同的子串
// 第一眼的感觉是需要一个二维dp数组,dp[i][j]表示串索引[i,j]的子串是否为回文子串，是为1，不是为0，题目的最终结果等于所有值的和
// 初始值dp[i][i] = 1, 代表每个单独的字符本身就是回文子串
// 数组元素之间的关系:
//    dp[i][j] = {
//    	0  => s[i] == s[j] and s[i+1][j-1] = 0
//         => s[i] != s[j]
//      1  => s[i] == s[j] and s[i+1][j-1] = 1
//    }
func countSubstrings(s string) int {
	lenS := len(s)
	result := lenS
	dp := make([][]int, lenS)
	for i := 0; i < lenS; i++ {
		dp[i] = make([]int, lenS)
		dp[i][i] = 1
	}
	// 外层倒着遍历, 因为[i]依赖[i+1]
	for i := lenS - 1; i >= 0; i-- {
		// 内层正着遍历, 因为[j]依赖[j-1]
		for j := i + 1; j < lenS; j++ {
			if s[i] == s[j] {
				if i+1 == j || (i+1 < lenS && dp[i+1][j-1] == 1) {
					dp[i][j] = 1
					result++
				}
			}
		}
	}
	return result
}
