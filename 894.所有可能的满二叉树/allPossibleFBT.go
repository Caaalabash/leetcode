package problem0894

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 观察题目需要发现的是，本题的将用到的递归函数就是自身
func allPossibleFBT(N int) []*TreeNode {
	// 满二叉树只可能是奇数
	if N%2 == 0 {
		return nil
	}
	if N == 1 {
		return []*TreeNode{{Val: 0}}
	}
	result := make([]*TreeNode, 0)
	// 理清楚i的范围 [1, N-2]
	for i := 1; i < N-1; i = i + 2 {
		l := allPossibleFBT(i)
		r := allPossibleFBT(N - 1 - i)
		for _, left := range l {
			for _, right := range r {
				head := &TreeNode{Val: 0}
				head.Left = left
				head.Right = right
				result = append(result, head)
			}
		}
	}
	return result
}
