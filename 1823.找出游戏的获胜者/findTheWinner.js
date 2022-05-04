// 约瑟夫环
// 模拟 + 队列
// 空间复杂度 O(n), 时间复杂度O(nk)
function findTheWinner(n, k) {
    const queue = []
    for (let i = 1; i <= n; i++) {
        queue.push(i)
    }
    while (queue.length > 1) {
        // 前k-1名小伙伴添加到队尾，模拟环
        for (let i = 1; i < k; i++) {
            queue.push(queue.shift())
        }
        // 第k名小伙伴寄了
        queue.shift()
    }
    return queue[0]
}
