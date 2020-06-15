package problem0328

type ListNode struct {
	Val  int
	Next *ListNode
}

// 想法：奇节点放在一个链表里，偶节点放在一个链表里，然后把偶链表接在奇链表的尾部
func oddEvenList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	odd, even, evenHead := head, head.Next, head.Next
	for even != nil && even.Next != nil {
		odd.Next = even.Next
		odd = odd.Next
		even.Next = odd.Next
		even = even.Next
	}
	odd.Next = evenHead
	return head
}
