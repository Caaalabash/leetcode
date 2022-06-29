// 双指针
function trap(height) {
    let result = 0
    let left = 0, right = height.length - 1
    let leftMax = 0, rightMax = 0
    while (left < right) {
        // 两侧向中间遍历时，不断更新左右两侧的最大值
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        if (height[left] < height[right]) {
            // 此时以左侧为短板
            result += leftMax - height[left]
            left++
        } else {
            // 此时以右侧为短板
            result += rightMax - height[right]
            right--
        }
    }
    return result
}