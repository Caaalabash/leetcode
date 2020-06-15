package problem0024

type ListNode struct {
	Val  int
	Next *ListNode
}

// 递归三问：
// 1. 终止条件是什么？ - head为空指针或者next为空指针，也就是无节点或只有一个节点，无法进行交换
// 2. 返回给上一级什么信息？ - 交换完成的子链表
// 3. 本级递归应该做什么？ - 交换
func swapPairs(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	next := head.Next
	head.Next = swapPairs(next.Next)
	next.Next = head
	return next
}

func swapPairs1(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	dummy := &ListNode{Next: head}
	prev, cur := dummy, dummy.Next

	for cur != nil && cur.Next != nil {
		prev.Next = cur.Next
		cur.Next = prev.Next.Next
		prev.Next.Next = cur
		prev = cur
		cur = cur.Next
	}

	return dummy.Next
}
