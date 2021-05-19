// 同154
// 二分法：平均O(nlogn)，最坏O(n)
function minArray(numbers) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const mid = (left + right) >> 1
    if (numbers[mid] < numbers[right]) {
      right = mid
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else {
      right--
    }
  }

  return numbers[left]
}
