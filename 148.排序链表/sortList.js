// 排序链表
// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
// 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
// 链表中节点的数目在范围 [0, 5 * 104] 内

// 自顶向下归并排序：
// 1. 找到链表的中点，以中点为分界，将链表拆分成两个子链表
// 2. 对两个子链表分别排序。
// 3. 将两个排序后的子链表合并  ==> sort(head) => return merge(sort(head), sort(right))
// 由于涉及到递归，空间复杂度显然不是常数级别的
// 因此，需要使用自底向上的归并排序：
function sortList(head) {
	if (!head) {
		return head
	}
	// 得到链表长度
	let length = 0
	let node = head
	while (node) {
		length++
		node = node.next
	}
	const dummy = { next: head }
	// 每次将链表拆分成若干个长度为subLen的子链表, 并按照每两个子链表一组进行合并
	// 合并完之后，subLen翻倍，继续合并
	for (let subLength = 1; subLength < length; subLength <<= 1) {
		let prev = dummy
		let cur = dummy.next
		while (cur) {
			// 拆分subLen长度的链表1，根据上面的定义，一定不会出现cur为null的情况
			let head1 = cur
			for (let i = 1; i < subLength && cur.next !== null; i++) {
				cur = cur.next
			}
			// 拆分subLen长度的链表2
			let head2 = cur.next
			// 断开链表1的next
			cur.next = null
			// 移动cur到链表2的头部，根据上面定义，可能回出现cur为null的情况
			cur = head2
			for (let i = 1; i < subLength && cur != null && cur.next !== null; i++) {
				cur = cur.next
			}
			let next = null
			if (cur) {
				next = cur.next
				cur.next = null
			}
			prev.next = mergeTwoLists(head1, head2)
			while (prev.next) {
				prev = prev.next
			}
			cur = next
		}
	}
	return dummy.next
}

// 21题
function mergeTwoLists(l1, l2) {
	const dummy = { next: null }
	let cur = dummy

	while (l1 && l2) {
		if (l1.val < l2.val) {
			cur.next = { val: l1.val, next: null }
			l1 = l1.next
		} else {
			cur.next = { val: l2.val, next: null }
			l2 = l2.next
		}
		cur = cur.next
	}
	if (l1) {
		cur.next = l1
	} else if (l2) {
		cur.next = l2
	}

	return dummy.next
}