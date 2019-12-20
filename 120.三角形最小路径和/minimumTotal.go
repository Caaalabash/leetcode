package problem0120

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// 这道题有2个隐藏条件！
// 1."每一步只能移动到下一行中相邻的节点上" => 题目中摆放成三角形，实际上 => (i,j)的相邻节点等于(i+1,j), (i+1,j+1)
// 2."三角形" => triangle[i]最后一个元素的索引值也是i
// 自底向上的动态规划做法
// 观察倒数两行
// -2: 6 5 7
// -1: 4 1 8 3
// 更行倒数第二行: triangle[i][j] = min(triangle[i+1][j], triangle[i+1][j+1]) + triangle[i][j]
// -2: 7 6 10
// 向上推，答案出现在triangle[0][0]
func minimumTotal(triangle [][]int) int {
	for i := len(triangle) - 2; i >= 0; i-- {
		for j := 0; j <= i; j++ {
			triangle[i][j] += min(triangle[i+1][j], triangle[i+1][j+1])
		}
	}
	return triangle[0][0]
}
