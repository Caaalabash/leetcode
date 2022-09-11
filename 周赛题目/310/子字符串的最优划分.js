// 数据规模1e5
function partitionString(s) {
    const n = s.length
    let minPartition = n

    const backTrack = (index, count) => {
        if (index === n) {
            minPartition = Math.min(minPartition, count)
            return
        }
        // 找到endIndex
        const cache = new Set()
        let endIndex = index
        for (let i = index; i < n; i++) {
            if (cache.has(s[i])) {
                endIndex = i - 1
                break
            }
            cache.add(s[i])
            endIndex = i
        }
        // 回溯超时，且不需要回溯，临时调整
        // for (let i = index; i <= endIndex; i++) {
        //     backTrack(i + 1, count + 1)
        // }
        backTrack(endIndex + 1, count + 1)
    }

    backTrack(0, 0)

    return minPartition
}

// 贪心即可，能分一起就分一起
function partitionString(s) {
    const cache = new Set()
    let result = 1

    for (let i = 0; i < s.length; i++) {
        if (cache.has(s[i])) {
            cache.clear()
            result++
        }
        cache.add(s[i])
    }

    return result
}