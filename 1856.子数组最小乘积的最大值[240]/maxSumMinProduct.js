// 84题
// 对于nums[i], 向左向右拓展，找到left, right, 确保nums[i]在区间(left, right)内是最小值，此时有： nums[left] < nums[i] &&  nums[right] < nums[i]
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 107
function maxSumMinProduct(nums) {
  nums = [0, ...nums, 0]
  // 前缀和
  const preSum = [nums[0]]
  const mod = BigInt(1e9 + 7)
  for (let i = 1; i < nums.length; i++) {
    preSum[i] = (preSum[i - 1] + nums[i])
  }
  // 单调栈
  let result = 0n
  const stack = []

  for (let i = 0; i < nums.length; i++) {
    // 单减栈
    while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
      const min = stack.pop()
      const left = stack[stack.length - 1]
      const right = i
      const sum = preSum[right - 1] - preSum[left]
      // 此处需要使用BigInt
      const r = BigInt(nums[min]) * BigInt(sum)
      if (r > result) {
        result = r
      }
    }
    stack.push(i)
  }

  return result % mod
}

