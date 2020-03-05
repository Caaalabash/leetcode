package problem0237

type ListNode struct {
	Val  int
	Next *ListNode
}
// 与下一个节点交换
func deleteNode(node *ListNode) {
	node.Val = node.Next.Val
	node.Next = node.Next.Next
}
