package problem0203

type ListNode struct {
	Val  int
	Next *ListNode
}

// 要删除当前节点，需要记录上一个节点，因此需要一个prev节点，并且初始状态prev.Next = head
// 最后返回prev.Next
func removeElements(head *ListNode, val int) *ListNode {
	dummy := &ListNode{Next: head}
	prev := dummy

	for head != nil {
		if head.Val == val {
			prev.Next = head.Next
		} else {
			prev = head
		}
		head = head.Next
	}

	return dummy.Next
}
