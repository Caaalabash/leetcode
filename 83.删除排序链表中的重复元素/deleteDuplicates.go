package problem0083

type ListNode struct {
	Val  int
	Next *ListNode
}

// 1. 终止条件是什么？ - head为空指针或者next为空指针，也就是无节点或只有一个节点
// 2. 返回给上一级什么信息？ - 已经去重的链表头节点
// 3. 本级递归应该做什么？ - 判断head与head.Next
func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	head.Next = deleteDuplicates(head.Next)
	if head.Val == head.Next.Val {
		head = head.Next
	}
	return head
}

func deleteDuplicates1(head *ListNode) *ListNode {
	cur := head
	for cur != nil && cur.Next != nil {
		if cur.Val == cur.Next.Val {
			cur.Next = cur.Next.Next
		} else {
			cur = cur.Next
		}
	}
	return head
}
