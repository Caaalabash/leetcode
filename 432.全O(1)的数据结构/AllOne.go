package problem0432

// todo: retry
type AllOne struct {
	data map[string]*LinkedListNode
	list *LinkedList
}

func Constructor() AllOne {
	return AllOne{
		data: make(map[string]*LinkedListNode),
		list: NewLinkedList(),
	}
}

func (ao *AllOne) Inc(key string) {
	if n, ok := ao.data[key]; ok {
		n.Val++
		ao.rightAdjust(n)
	} else {
		n := &LinkedListNode{Key: key, Val: 1}
		ao.list.LPush(n)
		ao.data[key] = n
	}
}

func (ao *AllOne) rightAdjust(n *LinkedListNode) {
	for cur := n.Next; cur != nil; cur = cur.Next {
		if cur.Val > n.Val {
			ao.list.Unlink(n)
			ao.list.InsertBefore(cur, n)
			break
		} else if cur == ao.list.tail {
			ao.list.Unlink(n)
			ao.list.RPush(n)
			break
		}
	}
}

func (ao *AllOne) Dec(key string) {
	if node, ok := ao.data[key]; ok {
		if node.Val == 1 {
			delete(ao.data, key)
			ao.list.Unlink(node)
		} else {
			node.Val--
			ao.leftAdjust(node)
		}
	}
}

func (ao *AllOne) leftAdjust(n *LinkedListNode) {
	for cur := n.Next; cur != nil; cur = cur.Prev {
		if cur.Val < n.Val {
			ao.list.Unlink(n)
			ao.list.InsertAfter(cur, n)
			break
		} else if cur == ao.list.head {
			ao.list.Unlink(n)
			ao.list.LPush(n)
			break
		}
	}
}

func (ao *AllOne) GetMaxKey() string {
	if len(ao.data) == 0 {
		return ""
	}
	return ao.list.tail.Key
}

func (ao *AllOne) GetMinKey() string {
	if len(ao.data) == 0 {
		return ""
	}
	return ao.list.head.Key
}

type LinkedList struct {
	head *LinkedListNode
	tail *LinkedListNode
	size int
}

type LinkedListNode struct {
	Key  string
	Val  int
	Next *LinkedListNode
	Prev *LinkedListNode
}

func NewLinkedList() *LinkedList {
	return &LinkedList{}
}

func (l *LinkedList) LPush(n *LinkedListNode) {
	if l.head == nil {
		l.head, l.tail = n, n
	} else {
		n.Next = l.head
		l.head.Prev = n
		l.head = n
	}
	l.size++
}

func (l *LinkedList) RPush(n *LinkedListNode) {
	if l.head == nil {
		l.head, l.tail = n, n
	} else {
		l.tail.Next = n
		n.Prev = l.tail
		l.tail = n
	}
	l.size++
}

func (l *LinkedList) LPop() *LinkedListNode {
	if l.size == 0 {
		return nil
	}

	if l.head == l.tail {
		l.tail = nil
	}

	n := l.head
	l.head = n.Next

	n.Next = nil

	l.size--
	return n
}

func (l *LinkedList) RPop() *LinkedListNode {
	if l.size == 0 {
		return nil
	}

	if l.head == l.tail {
		l.head = nil
	}

	n := l.tail
	l.tail = n.Prev

	n.Prev = nil

	l.size--
	return n
}

func (l *LinkedList) Unlink(n *LinkedListNode) {
	if n == l.head {
		l.LPop()
		return
	}

	if n == l.tail {
		l.RPop()
		return
	}

	n.Prev.Next = n.Next
	n.Next.Prev = n.Prev

	n.Prev = nil
	n.Next = nil

	l.size--
}

func (l *LinkedList) InsertBefore(pos, n *LinkedListNode) {
	if pos == l.head {
		l.LPush(n)
		return
	}

	prev := pos.Prev
	prev.Next = n
	n.Prev = prev
	n.Next = pos
	pos.Prev = n

	l.size++
}

func (l *LinkedList) InsertAfter(pos, n *LinkedListNode) {
	if pos == l.tail {
		l.RPush(n)
		return
	}

	next := pos.Next
	pos.Next = n
	n.Prev = pos
	n.Next = next
	next.Prev = n

	l.size++
}
