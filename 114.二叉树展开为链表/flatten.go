package problem0114

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 过程:
// 1. 将左右子树分别递归展开
// 2. 将左子树变为右子树，原左子树置空
// 3. 将原右子树变为当前右子树最右节点的右子树
func flatten(root *TreeNode) {
	if root == nil {
		return
	}
	flatten(root.Left)
	flatten(root.Right)
	temp := root.Right
	root.Right, root.Left = root.Left, nil

	for root.Right != nil {
		root = root.Right
	}
	root.Right = temp
}
