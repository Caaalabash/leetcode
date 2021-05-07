function maxTurbulenceSize(arr) {
  let result = 1
  let left = 0
  let right = 0

  while (right < arr.length - 1) {
    // 窗口长度为1的情况
    if (left === right) {
      if (arr[left] === arr[left+1]) {
        left++
      }
      right++
    } else {
      if (arr[right-1] < arr[right] && arr[right] > arr[right+1]) {
        right++
      } else if (arr[right-1] > arr[right] && arr[right] < arr[right+1]) {
        right++
      } else {
        left = right
      }
    }
    result = Math.max(result, right - left + 1)
  }
  return result
}
