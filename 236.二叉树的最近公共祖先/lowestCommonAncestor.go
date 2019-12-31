package problem0236

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 这下不是二叉搜索树了，不能直接判定p、q在那一边
// 如果root == p || root == q 直接返回root
// 遍历左右子树：
// 1. 如果在左边找到p和q，对左树重复上方的操作
// 2. 如果在右边找到p和q，对右树重复同样的操作
// 3. 如果左右各一个，返回当前的root节点
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root == nil || root == p || root == q {
		return root
	}
	left := lowestCommonAncestor(root.Left, p, q)
	right := lowestCommonAncestor(root.Right, p, q)
	if left != nil && right != nil {
		return root
	} else if left == nil {
		return right
	} else {
		return left
	}
}
