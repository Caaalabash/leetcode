package problem0817

type ListNode struct {
	Val  int
	Next *ListNode
}

// 因为G是链表中所有节点的一个子集，所以可以找到不在G中的节点，看能把链表分成几段
// 因此如果当前的节点在列表 G 中，并且下一个节点不在列表 G 中，我们就找到了一个组件的尾节点
func numComponents(head *ListNode, G []int) int {
	gMap := make(map[int]bool, 0)
	for _, val := range G {
		gMap[val] = true
	}
	result := 0
	cur := head

	for cur != nil {
		if gMap[cur.Val] && (cur.Next == nil || !gMap[cur.Next.Val]) {
			result++
		}
		cur = cur.Next
	}

	return result
}
