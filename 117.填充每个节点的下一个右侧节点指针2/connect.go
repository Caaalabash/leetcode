package problem0117

type Node struct {
	Val   int
	Left  *Node
	Right *Node
	Next  *Node
}

// 和116的满二叉树不同，会有部分节点缺失，因此定义一个getNext函数获取下一个节点
func getNext(node *Node) *Node {
	if node == nil {
		return nil
	}
	if node.Left != nil {
		return node.Left
	}
	if node.Right != nil {
		return node.Right
	}
	if node.Next != nil {
		return getNext(node.Next)
	}
	return nil
}

func connect(root *Node) *Node {
	if root == nil {
		return root
	}
	if root.Left != nil && root.Right != nil {
		root.Left.Next = root.Right
	} else if root.Left != nil && root.Right == nil {
		root.Left.Next = getNext(root.Next)
	}
	if root.Right != nil {
		root.Right.Next = getNext(root.Next)
	}
	connect(root.Right)
	connect(root.Left)
	return root
}
