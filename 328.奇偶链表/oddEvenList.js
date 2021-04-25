// 奇偶链表
// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

// 将奇数节点和偶数节点分离成奇数链表和偶数链表，然后将偶数链表连接在奇数链表之后，合并后的链表即为结果链表。
function oddEvenList(head) {
	if (head === null) {
		return head
	}
	// head是奇数节点的头节点 evenHead是偶数节点的头节点
	let evenHead = head.next
	let odd = head
	let even = evenHead
	while (even !== null && even.next !== null) {
		// 斩断odd -> even，前进
		odd.next = even.next
		odd = odd.next
		// 斩断even -> odd，前进
		even.next = odd.next
		even = even.next
	}
	// 奇偶相连
	odd.next = evenHead
	return head
}