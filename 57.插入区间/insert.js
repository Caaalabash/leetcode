// intervals被newInterval分成三段，按题意模拟即可
function insert(intervals, newInterval) {
    const length = intervals.length
    const result = []
    let index = 0

    while (index < length && intervals[index][1] < newInterval[0]) {
        result.push(intervals[index])
        index++
    }
    // intervals左端在newInterval右端之前
    while (index < length && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[index][0], newInterval[0])
        newInterval[1] = Math.max(intervals[index][1], newInterval[1])
        index++
    }
    result.push(newInterval)
    while (index < length) {
        result.push(intervals[index])
        index++
    }
    return result
}