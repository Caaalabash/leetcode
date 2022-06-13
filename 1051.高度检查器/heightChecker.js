// 排序 O(nlogn) + O(n)
function heightChecker(heights) {
    const standard = [...heights]
    standard.sort((a, b) => a < b ? -1 : 1)

    let result = 0

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== standard[i]) {
            result++
        }
    }

    return result
}

// 计数排序，由于数据规模比较小，可以用计数排序
// 数组大小：可以遍历一遍确定数组最大值，或根据数据规模确定
function heightChecker(heights) {
    const max = Math.max(...heights)
    const countArr = new Array(max + 1).fill(0)
    for (let i = 0; i < heights.length; i++) {
        countArr[heights[i]]++
    }
    let idx = 0
    let result = 0
    for (let i = 1; i <= max; i++) {
        for (let j = 1; j <= countArr[i]; j++) {
            if (heights[idx] !== i) {
                result++
            }
            idx++
        }
    }
    return result
}