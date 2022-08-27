function minimumRecolors(blocks, k) {
    const n = blocks.length
    let bCount = 0
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'B') {
            bCount++
        }
    }
    let result = k - bCount
    for (let i = k; i < n; i++) {
        const deltaPrefix = blocks[i - k] === 'B' ? -1 : 0
        const deltaSuffix = blocks[i] === 'B' ? 1 : 0
        bCount += deltaPrefix + deltaSuffix
        result = Math.min(result, k - bCount)
    }
    return result
}