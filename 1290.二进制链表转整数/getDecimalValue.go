package problem1290

type ListNode struct {
	Val  int
	Next *ListNode
}

func getDecimalValue(head *ListNode) int {
	result := 0
	for head != nil {
		result = (result << 1) | head.Val
		head = head.Next
	}
	return result
}
