// 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。你能尝试使用一趟扫描实现吗？
// 1 <= 链表长度 <= 30
// 1 <= n <= 链表长度

// 因为会有删除头节点的情况，因此需要一个dummyHead
// 快慢指针：使得快慢指针保持n的距离，当快指针移动到末尾时，慢指针正好处于倒数第n个节点
function removeNthFromEnd(head, n) {
    const dummy = { next: head }
    let slow = dummy
    let fast = dummy

    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    while (fast.next !== null) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
}