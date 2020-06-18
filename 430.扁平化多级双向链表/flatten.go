package problem0430

type Node struct {
	Val   int
	Prev  *Node
	Next  *Node
	Child *Node
}

func flatten(root *Node) *Node {
	if root == nil {
		return nil
	}
	cur := root
	for cur != nil {
		if cur.Child != nil {
			next := cur.Next
			// cur和child双向链接
			child := cur.Child
			child.Prev = cur
			cur.Next = child
			cur.Child = nil
			// 找到child的tail
			tail := child
			for tail != nil && tail.Next != nil {
				tail = tail.Next
			}
			// tail和next双向链接
			if tail != nil {
				tail.Next = next
			}
			if next != nil {
				next.Prev = tail
			}
		}
		cur = cur.Next
	}
	return root
}
