package problem0147

type ListNode struct {
	Val  int
	Next *ListNode
}

func insertionSortList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	sorted := &ListNode{}
	unsorted := head

	for unsorted != nil {
		target := unsorted
		unsorted = unsorted.Next

		cur := sorted
		for cur.Next != nil && cur.Next.Val < target.Val {
			cur = cur.Next
		}

		next := cur.Next
		cur.Next = target
		target.Next = next
	}

	return sorted.Next
}
