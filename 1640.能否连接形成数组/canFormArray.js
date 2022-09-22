function canFormArray(arr, pieces) {
    const n = arr.length
    const map = new Map()
    for (let i = 0; i < n; i++) {
        map.set(arr[i], i)
    }
    for (let i = 0; i < pieces.length; i++) {
        let prevIndex = -1
        for (let j = 0; j < pieces[i].length; j++) {
            // 存在没有的元素
            if (!map.has(pieces[i][j])) {
                return false
            }
            // 连续元素索引不匹配
            const curIndex = map.get(pieces[i][j])
            if (prevIndex !== -1 && curIndex - prevIndex !== 1) {
                return false
            }
            prevIndex = curIndex
        }
    }
    return true
}