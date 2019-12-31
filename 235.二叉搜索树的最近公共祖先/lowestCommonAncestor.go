package problem0235

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 因为是二叉搜索树，所以嘛通过比较root,p,q的值，就知道在不在一边了
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}
	if p.Val < root.Val && q.Val < root.Val {
		return lowestCommonAncestor(root.Left, p, q)
	}
	if p.Val > root.Val && q.Val > root.Val {
		return lowestCommonAncestor(root.Right, p, q)
	} else {
		return root
	}
}
