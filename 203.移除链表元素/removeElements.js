// 移除链表元素
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
// 列表中的节点在范围 [0, 104] 内

function removeElements(head, val) {
	if (!head) {
		return head
	}
	const dummy = { next: head }
	let prev = dummy

	while (head) {
		if (head.val === val) {
			prev.next = head.next
		} else {
			prev = head
		}
		head = head.next
	}

	return dummy.next
}