// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
// 贪心：从左到右，对于每一位数字，与其右侧最大的数字交换一下即可
function maximumSwap(num) {
    const numArr = String(num).split('')
    for (let i = 0; i < numArr.length; i++) {
        let maxIndex = i
        for (let j = i + 1; j < numArr.length; j++) {
            if (+numArr[j] >= +numArr[maxIndex]) {
                maxIndex = j
            }
        }
        if (maxIndex !== i && numArr[i] !== numArr[maxIndex]) {
            [numArr[i], numArr[maxIndex]] = [numArr[maxIndex], numArr[i]]
            return +numArr.join('')
        }
    }
    return num
}