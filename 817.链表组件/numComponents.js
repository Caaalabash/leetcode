function numComponents(head, nums) {
    const set = new Set(nums)
    let count = 0
    while (head) {
        if (set.has(head.val) && (!head.next || !set.has(head.next.val))) {
            count++
        }
        head = head.next
    }
    return count
}