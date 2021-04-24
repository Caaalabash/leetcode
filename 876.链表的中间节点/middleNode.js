// 链表的中间节点
// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。

function middleNode(head) {
    let slow = head
    let fast = head
    // 快指针能够前进的条件：当前节点和下一个节点都为空
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

// 如果有两个中间节点时，返回第一个中间节点的解决办法：在链表头添加一个dummy节点
function middleNode2(head) {
    // or new ListNode()
    const dummy = { next: head }
    let slow = dummy
    let fast = dummy
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}