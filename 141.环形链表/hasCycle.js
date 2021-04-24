// 环型链表
// 给定一个链表，判断链表中是否有环。
// 链表中节点的数目范围是 [0, 104]

// 快慢指针判断是否有环：若存在环快慢指针一定会相遇，若不存在，快指针一定会到达终点
function hasCycle(head) {
	if (!head) {
		return false
	}
	let slow = head
	let fast = head.next
	while (slow !== fast) {
		if (fast === null || fast.next === null) {
			return false
		}
		slow = slow.next
		fast = fast.next.next
	}
	return true
}
