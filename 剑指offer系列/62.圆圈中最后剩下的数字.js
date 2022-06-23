// 约瑟夫环
// https://leetcode.cn/circle/article/BOoxAL/

// 链表模拟，根本思想，超时
function lastRemaining(n, m) {
    // 如果一次一个，直接返回最后一个
    if (m === 1) return n - 1
    // 创建长度 n 的链表并成环
    let head = new Node(0, null)
    let node = head
    for (let i = 1; i < n; i++) {
        node.next = new Node(i, null)
        node = node.next
    }
    node.next = head

    let index = 0
    while (head.next !== head) {
        // m的值可能很大，这样会转圈很多次，所以可以值当前圈的长度取模，减少次数
        if (index === (m - 2) % n) {
            head.next = head.next.next
            index = 0
            n--
        } else {
            index++
        }
        head = head.next
    }
    return head.val
}

function Node(val, next) {
    this.val = val
    this.next = next
}

// 有序集合模拟链表，超时
function lastRemaining(n, m) {
    if (m === 1) return n - 1

    const list = []
    for (let i = 0; i < n; i++) {
        list.push(i)
    }

    let index = 0
    while (list.length > 1) {
        // 重点在下一个位置的计算
        index = (index + m - 1) % list.length
        list.splice(index, 1)
    }
    return list[0]
}

// 递推公式
// f(n, m) 指 n 个人报第 m 个编号的最终编号
// 有：f(n, m)  = (f(n - 1, m) + m) % n
function lastRemaining(n, m) {
    let value = 0
    for (let i = 1; i <= n; i++) {
        value = (value + m ) % i
    }
    return value
}