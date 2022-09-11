// 数据规模 1e5，目测需要二分，额直接通过了
function minGroups(intervals) {
    // 先排序
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })
    // 分组列表，记录所有分组的结束值
    const groupEndValueList = [intervals[0][1]]
    // 从第一个开始遍历，遍历分组列表，如果能放进去就放，并且更新结束值，如果不能就新开一组
    for (let i = 1; i < intervals.length; i++) {
        let hasMatch = false
        for (let j = 0; j < groupEndValueList.length; j++) {
            if (intervals[i][0] > groupEndValueList[j]) {
                groupEndValueList[j] = intervals[i][1]
                hasMatch = true
                break
            }
        }
        if (!hasMatch) {
            groupEndValueList.push(intervals[i][1])
        }
    }

    return groupEndValueList.length
}
// TODO 同题目253，比较快的解法是差分数组，还需要了解
