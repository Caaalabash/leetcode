// 从链表中删去总和值为零的连续节点
// 给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。
// 删除完毕后，请你返回最终结果链表的头节点。
// 给你的链表中可能有 1 到 1000 个节点。

function removeZeroSumSublists(head) {
	// 头节点有可能被删除，需要dummy
	const dummy = { next: head, val : 0 }

	const sumMap = {}
	// 首次遍历：建立 前缀和->节点 哈希表
	let sum = 0
	for (let node = dummy; node !== null; node = node.next) {
		sum += node.val
		sumMap[sum] = node
	}
	// 第二遍遍历：若当前节点处sum在下一处出现了则表明两结点之间所有节点和为0 直接删除区间所有节点
	sum = 0
	for (let node = dummy; node !== null; node = node.next) {
		sum += node.val
		if (sum in sumMap) {
			node.next = sumMap[sum].next
		}
	}
	return dummy.next
}