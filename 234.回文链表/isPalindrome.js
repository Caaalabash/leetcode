// 请判断一个链表是否为回文链表。

// 快慢指针找到中点
// 反转后半部分链表
// 比较
function isPalindrome(head) {
	if (!head) {
		return false
	}
	let slow = head
	let fast = head
	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}
	// 从中点开始反转后半部分
	let prev = null
	let cur = slow
	while (cur !== null) {
		const next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	// 此时prev成为了头节点
	while (prev !== null) {
		if (head.val !== prev.val) {
			return false
		}
		head = head.next
		prev = prev.next
	}
	return true
}