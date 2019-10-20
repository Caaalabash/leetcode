package problem0082

type ListNode struct {
	Val  int
	Next *ListNode
}

// 迭代: 快慢指针, 快指针跳过有重复的部分, 慢指针负责和快指针拼接
func deleteDuplicates(head *ListNode) *ListNode {
	virtual := &ListNode{0, head}
	slow, fast := virtual, head
	// 遍历链表
	for fast != nil {
		for fast.Next != nil && fast.Val == fast.Next.Val {
			fast = fast.Next
		}
		// 移动慢指针 / 拼接快指针
		if slow.Next == fast {
			slow = fast
		} else {
			slow.Next = fast.Next
		}
		fast = fast.Next
	}
	return virtual.Next
}
