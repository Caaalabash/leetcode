// 整数数组，删除最小5%的数字和最大5%的数字，剩余数字的均值
// 20 <= arr.length <= 1000
// arr.length是20的倍数
function trimMean(arr) {
    arr.sort((a, b) => a < b ? -1 : 1)
    const removeCount = arr.length * 0.05
    let sum = 0
    for (let i = removeCount; i < arr.length - removeCount; i++) {
        sum += arr[i]
    }
    return sum / (arr.length - removeCount * 2)
}