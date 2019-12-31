package problem1008

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func bstFromPreorder(preorder []int) *TreeNode {
	if len(preorder) == 0 {
		return nil
	}
	t := -1
	for i := 1; i < len(preorder); i++ {
		if preorder[i] > preorder[0] {
			t = i
			break
		}
	}
	if t == -1 {
		return &TreeNode{
			Val:   preorder[0],
			Left:  bstFromPreorder(preorder[1:]),
			Right: nil,
		}
	}
	return &TreeNode{
		Val:   preorder[0],
		Left:  bstFromPreorder(preorder[1:t]),
		Right: bstFromPreorder(preorder[t:]),
	}
}
