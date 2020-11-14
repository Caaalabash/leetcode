package problem0116

type Node struct {
	Val   int
	Left  *Node
	Right *Node
	Next  *Node
}

// 拉拉链解法
func connect(root *Node) *Node {
	if root == nil {
		return root
	}
	left, right := root.Left, root.Right
	for left != nil {
		left.Next = right
		left = left.Right
		right = right.Left
	}
	connect(root.Left)
	connect(root.Right)
	return root
}
