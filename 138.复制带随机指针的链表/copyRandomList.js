// 复制带随机指针的链表
// 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。
// 构造这个链表的 深拷贝。
// 0 <= n <= 1000

function copyRandomList(head) {
	if (!head) {
		return null
	}
	// 第一次遍历，生成一个具有val属性的链表
	const map = new Map()
	let cur = head
	while (cur) {
		map.set(cur, { val: cur.val })
		cur = cur.next
	}
	// 第二次遍历，根据map映射关系，将random和next指针指向对应的节点或者null;
	cur = head
	while (cur) {
		map.get(cur).next = map.get(cur.next) || null
		map.get(cur).random = map.get(cur.random) || null
		cur = cur.next
	}
	return map.get(head)
}