// Q2 1590
// 对于下标index，可以经过两次排序将其放到尾部：
// 第一步选择 index + 1，然后反转子数组，此时该元素已经被放到首部
// 第二部选择 n，反转整个数组，此时该元素已经被放到尾部
// 因此每步寻找数组最大值，执行上面的操作即可
function pancakeSort(arr) {
    const result = []
    const n = arr.length

    // arr值范围为[1, n]，所以需要调整的范围为[2, n]
    // 倒着遍历，i代表本轮要寻找的最大值
    for (let i = n; i > 1; i--) {
        // 寻找最大值位置
        let maxIndex = 0
        for (let j = 0; j <= i; j++) {
            if (arr[j] === i) {
                maxIndex = j
                break
            }
        }
        // 该值位置正确
        if (maxIndex === i - 1) {
            continue
        }
        reverse(arr, maxIndex)
        reverse(arr, i - 1)
        result.push(maxIndex + 1, i)
    }
    return result
}

function reverse(arr, endIndex) {
    for (let i = 0, j = endIndex; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}