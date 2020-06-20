package problem0138

type Node struct {
	Val    int
	Next   *Node
	Random *Node
}

func copyRandomList(head *Node) *Node {
	m := make(map[*Node]*Node, 0)

	cur := head
	for cur != nil {
		m[cur] = &Node{
			Val:    cur.Val,
			Next:   nil,
			Random: nil,
		}
		cur = cur.Next
	}

	cur = head
	for cur != nil {
		m[cur].Next = m[cur.Next]
		m[cur].Random = m[cur.Random]
		cur = cur.Next
	}

	return m[head]
}
