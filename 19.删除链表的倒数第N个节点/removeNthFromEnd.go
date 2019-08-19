package problem0019

type ListNode struct {
	Val int
	Next *ListNode
}
// 比较好理解的做法, 用一个数组来保存链表所有元素
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	arr := []*ListNode{head}
	for head.Next != nil {
		arr = append(arr, head.Next)
		head = head.Next
	}
	lens := len(arr)
	if lens == 1 {
		return nil
	}
	if n == lens {
		arr[0] = arr[1]
	} else if n == 1 {
		arr[lens - n - 1].Next = nil
	} else {
		arr[lens - n - 1].Next = arr[lens - n + 1]
	}
	return arr[0]
}
// 双指针做法
// 1. 设定虚拟节点dummyHead指向head
// 2. 设定双指针p, q, 初始都指向虚拟节点
// 3. 移动q, 直到p, q之间间隔的元素为n
// 4. 同时移动p, q, 直到q指向为null
// 5. 将p的下一个节点指向下下个节点
func removeNthFromEndA(head *ListNode, n int) *ListNode {
	dummyHead := &ListNode{ Next: head }
	p, q, step := dummyHead, dummyHead, 0
	for step < n {
		q = q.Next
		step++
	}
	for q.Next != nil {
		q = q.Next
		p = p.Next
	}
	p.Next = p.Next.Next
	return dummyHead.Next
}