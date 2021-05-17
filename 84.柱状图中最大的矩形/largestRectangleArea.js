// 单调栈解法
// 关于单调栈的顺序：指的都是出栈的顺序，不是栈中数据的顺序，[1,2,3]实际是单减栈

// 这道题的常规思路应该是：以柱子i为基准，向两边分别寻找首个索引left, right, 满足height[left] < height[i]; height[right] < height[i]
// 为了让所有柱子i都存在left, right, 在数组两端补0
function largestRectangleArea(heights) {
  if (heights.length === 0) {
    return 0
  }
  if (heights.length === 1) {
    return heights[0]
  }
  heights = [0, ...heights, 0]
  let result = 0
  const stack = []
  for (let i = 0; i < heights.length; i++) {
    // 单减栈
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const h = stack.pop()
      const left = stack[stack.length - 1] + 1
      const right = i - 1
      result = Math.max(result, (right - left + 1) * heights[h])
    }
    // 栈中存放的是索引
    stack.push(i)
  }
  return result
}
