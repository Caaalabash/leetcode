// 环型链表
// 给定一个链表，判断链表中是否有环。
// 链表中节点的数目范围是 [0, 104]

// 快慢指针判断是否有环：若存在环快慢指针一定会相遇，若不存在，快指针一定会到达终点
function hasCycle(head) {
	// 空链表或仅有一个节点返回false
	if (head === null || head.next === null) {
		return false
	}
	let slow = head
	let fast = head.next

	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
		if (fast === slow) {
			return true
		}
	}
	return false
}
