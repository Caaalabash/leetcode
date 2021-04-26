// 删除排序链表中的重复元素
// 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
// 链表中节点数目在范围 [0, 300] 内

function deleteDuplicates(head) {
	let prev = null
	let cur = head

	while (cur) {
		if (prev && prev.val === cur.val) {
			prev.next = cur.next
		} else {
			prev = cur
		}
		cur = cur.next
	}

	return head
}