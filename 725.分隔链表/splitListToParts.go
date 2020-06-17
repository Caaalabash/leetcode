package problem0725

type ListNode struct {
	Val  int
	Next *ListNode
}

func splitListToParts(root *ListNode, k int) []*ListNode {
	// 取得链表长度
	length := 0
	for head := root; head != nil; head = head.Next {
		length++
	}
	// part代表每一份最低元素个数，remain代表剩余份数，给前remain个加1
	part, remain := length/k, length%k
	result := make([]*ListNode, 0)
	left, right := root, root
	// 分成k份, 每份part个，前remain个多分一个, 实现boolToNumber简化代码
	for i := 0; i < k; i++ {
		for j := 1; j < part+boolToNumber(i < remain); j++ {
			right = right.Next
		}
		if right == nil {
			result = append(result, nil)
		} else {
			next := right.Next
			right.Next = nil
			result = append(result, left)
			left, right = next, next
		}
	}
	return result
}

func boolToNumber(status bool) int {
	if status {
		return 1
	}
	return 0
}
