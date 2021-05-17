// 二分法
function maxDistance(nums1, nums2) {
  let result = Number.MIN_VALUE
  for (let i = 0; i < nums1.length; i++) {
    // 剪支
    if (nums2[i] < nums1[i]) {
      continue
    }
    // 二分法找到最右侧的可行位置
    let left = i
    let right = nums2.length - 1
    while (left < right) {
      // 右中位数
      const mid = (left + right + 1) >> 1
      if (nums2[mid] >= nums1[i]) {
        left = mid
      } else {
        right = mid - 1
      }
    }
    if (nums2[left] >= nums1[i]) {
      result = Math.max(result, left - i)
    }
  }
  if (result === Number.MIN_VALUE) {
    return 0
  }
  return result
}

// 滑动窗口
function maxDistance(nums1, nums2) {
  let left = 0
  let right = 0
  let result = 0

  while (left < nums1.length && right < nums2.length) {
    while (nums1[left] > nums2[right]) {
      left++
    }
    result = Math.max(result, right - left)
    right++
  }

  return result
}
