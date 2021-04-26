// 删除链表中的节点

function deleteNode(node) {
	node.val = node.next.val
	node.next = node.next.next
}