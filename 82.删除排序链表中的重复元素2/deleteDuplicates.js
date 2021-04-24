// 删除排序链表中的重复元素 II
// 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
// -100 <= Node.val <= 100
// 0 <= 链表节点数 <= 300

// 因为会有删除头节点的情况，因此需要一个dummyHead

function deleteDuplicates(head) {
	if (!head) {
		return head
	}
	// or new ListNode()
	const dummy = { next: head }
	let cur = dummy
	while (cur.next && cur.next.next) {
		// 如果cur.next和cur.next.next的值相同，那么我们就需要将其删除
		if (cur.next.val === cur.next.next.val) {
			const x = cur.next.val
			while (cur.next && cur.next.val === x) {
				cur.next = cur.next.next
			}
		} else {
			cur = cur.next
		}
	}
	return dummy.next
}