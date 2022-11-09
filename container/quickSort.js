function quickSort(arr, l, r) {
    if (arr.length <= 1 || l >= r) return
    const pivot = arr[l]
    let left = l
    let right = r
    while (left < right) {
        while (left < right && arr[right] >= pivot) right--
        while (left < right && arr[left] <= pivot) left++
        if (left < right) {
            swap(arr, left, right)
        }
    }
    swap(arr, l, left)
    quickSort(arr, right + 1, r)
    quickSort(arr, l, left - 1)
}

// 相较于[a, b] = [b, a]更有优势
function swap(arr, i, j) {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

module.exports = quickSort