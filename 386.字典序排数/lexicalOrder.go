package problem0386

// 给定一个整数 n, 返回从 1 到 n 的字典顺序。
// 经典，字典序 = 先序遍历10叉树
func lexicalOrder(n int) []int {
	var (
		result []int
		dfs    func(n int)
	)
	dfs = func(num int) {
		if num > n {
			return
		}
		result = append(result, num)
		for i := 0; i < 10; i++ {
			dfs(num*10 + i)
		}
	}
	for i := 1; i < 10; i++ {
		dfs(i)
	}
	return result
}
