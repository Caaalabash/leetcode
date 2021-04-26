// 扁平化多级双向链表
// 我们可能会疑问什么情况下会使用这样的数据结构。其中一个场景就是 git 分支的简化版本。通过扁平化多级列表，可以认为将所有 git 的分支合并在一起。

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function flatten(head) {
    if (!head) {
        return head
    }
    let cur = head
    while (cur) {
        if (cur.child) {
            // 保存原来的next
            const next = cur.next
            // 将cur.next修改为cur.children
            cur.next = cur.child
            cur.child.prev = cur
            cur.child = null
            // 找到原来cur.child得到末尾节点tail
            let tail = cur.next
            while (tail.next) {
                tail = tail.next
            }
            // 将tail和next双向连接
            if (tail) {
                tail.next = next
            }
            if (next) {
                next.prev = tail
            }
        }
        cur = cur.next
    }
    return head
}