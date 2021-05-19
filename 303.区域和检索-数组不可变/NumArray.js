// 显然是求前缀和的做法
// 0 <= nums.length <= 104

class NumArray {
  constructor(nums) {
    this.preSum = new Array(nums.length + 1)
    this.preSum[0] = 0
    for (let i = 0; i < nums.length; i++) {
      this.preSum[i+1] = this.preSum[i] + nums[i]
    }
  }
  sumRange(left, right) {
    return this.preSum[right+1] - this.preSum[left]
  }
}
