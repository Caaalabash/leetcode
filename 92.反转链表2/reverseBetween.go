package problem0092

type ListNode struct {
	Val  int
	Next *ListNode
}

// 反转从位置m到n的链表，用一趟扫描完成反转
// 小人愚钝，补上脑瘫做法
func reverseBetween(head *ListNode, m int, n int) *ListNode {
	list := []int{-1}
	t := head
	for t != nil {
		list = append(list, t.Val)
		t = t.Next
	}
	l := head
	for index := 1; l != nil; index++ {
		if m <= index && index <= n {
			l.Val = list[n+m-index]
		}
		l = l.Next
	}
	return head
}

func reverseBetween1(head *ListNode, m int, n int) *ListNode {
	dummy := &ListNode{}
	dummy.Next = head
	// 找到反转头节点的前驱节点
	prev := dummy
	for i := 1; i < m; i++ {
		prev = prev.Next
	}
	// 反转m~n
	cur := prev.Next
	for i := m; i < n; i++ {
		// 核心
		next := cur.Next
		cur.Next = next.Next
		next.Next = prev.Next
		prev.Next = next
	}
	return dummy.Next
}
