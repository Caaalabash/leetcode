// 方法一：内置sort方法排序，nlogn的时间和空间
// 方法二：二分查找 + 双指针，时间复杂度为 O(logN + k)
function findClosestElements(arr, k, x) {
    const n = arr.length
    if (x <= arr[0]) {
        return arr.slice(0, k)
    }
    if (x >= arr[n - 1]) {
        return arr.slice(-k)
    }
    // 在arr数组中找到第一个 >=x 的位置
    let left = 0
    let right = n - 1
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (arr[mid] < x) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    // 从这个位置开始向两边拓展
    const result = []
    let l = right - 1
    let r = right
    while (k > 0) {
        if (l >= 0 && r < n) {
             if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
                result.unshift(arr[l])
                l--
            } else {
                result.push(arr[r])
                r++
            }
        } else if (l >= 0) {
            result.unshift(arr[l])
            l--
        } else {
            result.push(arr[r])
            r++
        }
        k--
    }
    return result
}