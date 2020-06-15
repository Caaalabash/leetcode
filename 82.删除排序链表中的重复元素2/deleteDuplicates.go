package problem0082

type ListNode struct {
	Val  int
	Next *ListNode
}

// 迭代: 快慢指针, 快指针跳过有重复的部分, 慢指针负责和快指针拼接
func deleteDuplicates(head *ListNode) *ListNode {
	dummy := &ListNode{Next: head}
	slow, fast := dummy, dummy.Next

	for fast != nil {
		// 找到最后一个相等值
		for fast.Next != nil && fast.Next.Val == fast.Val {
			fast = fast.Next
		}
		if slow.Next == fast {
			slow = fast
		} else {
			slow.Next = fast.Next
		}
		fast = fast.Next
	}

	return dummy.Next
}
