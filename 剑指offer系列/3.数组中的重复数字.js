// 2 <= nums.length <= 100000

// 找出数组中任意一个重复的数字，个人思路
// 排序 + 一次遍历 = O(nlogn)时间，O(1)空间
// 哈希表 = O(n)时间，O(n)空间

function findRepeatNumber(nums) {
  nums.sort((a, b) => a < b ? -1 : 1)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i-1]) {
      return nums[i]
    }
  }
  return -1
}
