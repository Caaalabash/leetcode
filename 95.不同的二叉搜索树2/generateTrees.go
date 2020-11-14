package problem0095

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 二叉搜索树关键的性质是根节点的值大于左子树所有节点的值，小于右子树所有节点的值，且左子树和右子树也同样为二叉搜索树
// 假设当前序列长度为n，如果枚举节点为i，那么左子树的节点值集合为[1...i-1], 右子树节点值集合为[i+1...n]
// 因此定义generate(start, end)函数来返回序列[start, end]生成的所有可行的二叉搜索树
func generate(start int, end int) []*TreeNode {
	if start > end {
		return []*TreeNode{nil}
	}
	var result []*TreeNode
	for i := start; i <= end; i++ {
		leftTrees := generate(start, i-1)
		rightTrees := generate(i+1, end)
		for _, left := range leftTrees {
			for _, right := range rightTrees {
				node := &TreeNode{i, nil, nil}
				node.Left = left
				node.Right = right
				result = append(result, node)
			}
		}
	}
	return result
}
func generateTrees(n int) []*TreeNode {
	if n == 0 {
		return nil
	}
	return generate(1, n)
}
