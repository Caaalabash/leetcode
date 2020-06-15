package problem0019

type ListNode struct {
	Val  int
	Next *ListNode
}

// 一般思维：找到链表长度，找到n-1位置节点，删除，考虑到删除头节点的情况，需要dummyHead
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummy := &ListNode{Next: head}

	temp, length := dummy, 0
	for ; temp != nil; length++ {
		temp = temp.Next
	}
	temp = dummy
	for i := 0; i < length-n-1; i++ {
		temp = temp.Next
	}
	temp.Next = temp.Next.Next

	return dummy.Next
}

// 快慢指针：使得快慢指针相差n，当快指针移动到末尾时，慢指针正好处于倒数第n个节点
func removeNthFromEnd1(head *ListNode, n int) *ListNode {
	dummy := &ListNode{Next: head}

	slow, fast := dummy, dummy
	for i := 0; i < n; i++ {
		fast = fast.Next
	}
	for fast.Next != nil {
		slow = slow.Next
		fast = fast.Next
	}
	slow.Next = slow.Next.Next

	return dummy.Next
}
