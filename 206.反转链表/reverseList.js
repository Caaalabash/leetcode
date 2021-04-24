// 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

function reverseList(head) {
	let pre = null
	let cur = head

	while (cur !== null) {
		// record next
		const next = cur.next
		// change next
		cur.next = pre
		// move
		pre = cur
		cur = next
	}
	return pre
}