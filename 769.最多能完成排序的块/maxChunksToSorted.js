// 这里实际蕴含了数值与索引的关系
// 例如 [4,3,2,1,0]，中的 数值4 肯定需要回到 索引4 的位置
// 例如 [1,0,2,3,4]，中的 数值1 肯定需要回到 索引1 的位置
// 因此，遍历数组，记录当前已遍历的数值的最大值max，当max === i，则说明是一个分割点
function maxChunksToSorted(arr) {
    let result = 0
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i])
        if (max === i) {
            result++
        }
    }
    return result
}