// 实际上可以这么写，但是题目要求原地排序
function _merge(nums1, m, nums2, n) {
  const result = []
  let i = 0, j = 0
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i])
      i++
    } else {
      result.push(nums2[j])
      j++
    }
  }
  while (i < m) {
    result.push(nums1[i])
    i++
  }
  while (j < n) {
    result.push(nums2[j])
    j++
  }
  return result
}

// 由于nums1后半部分是空的，那么倒着进行
function merge(nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let tail = m + n - 1

  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      nums1[tail--] = nums2[p2--]
    } else if (p2 === -1) {
      nums1[tail--] = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      nums1[tail--] = nums1[p1--]
    } else {
      nums1[tail--] = nums2[p2--]
    }
  }
}
