// potions的顺序不重要，这里使用二分法，就能调整为 O(nlogM) 的时间复杂度
function successfulPairs(spells, potions, success) {
    // 对potions进行排序
    potions.sort((a, b) => a < b ? -1 : 1)
    const n = spells.length
    const m = potions.length
    const result = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        let left = 0
        let right = m - 1
        while (left < right) {
            const mid = (left + right) >>> 1
            const product = spells[i] * potions[mid]

            if (product >= success) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        const product = spells[i] * potions[left]

        result[i] = product >= success ? m - left : 0
    }
    return result
}