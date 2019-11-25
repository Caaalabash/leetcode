package problem0872

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是叶相似的。
// 叶相似和两个树的层次结构无关联，因此需要求出每棵树的叶子节点序列
func leafSimilar(root1 *TreeNode, root2 *TreeNode) bool {
	var list1, list2 []int
	var getLeaf func(node *TreeNode, container *[]int)

	getLeaf = func(node *TreeNode, container *[]int) {
		if node == nil {
			return
		}
		if node.Left == nil && node.Right == nil {
			*container = append(*container, node.Val)
			return
		}
		getLeaf(node.Left, container)
		getLeaf(node.Right, container)
	}
	getLeaf(root1, &list1)
	getLeaf(root2, &list2)

	if len(list1) != len(list2) {
		return false
	}

	for i := 0; i < len(list1); i++ {
		if list1[i] != list2[i] {
			return false
		}
	}
	return true
}
