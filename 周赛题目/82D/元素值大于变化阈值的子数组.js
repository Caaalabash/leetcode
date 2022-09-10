// rating 2381
// 单调栈，与907题高度相似
function validSubarraySize(nums, threshold) {
    const n = nums.length
    const left = new Array(n).fill(-1) // left[i] 为左侧小于 nums[i] 的最近元素位置（不存在时为 -1）
    const right = new Array(n).fill(n) // right[i] 为右侧小于 nums[i] 的最近元素位置（不存在时为 n）
    const stack = []

    for (let i = 0; i < n; i++) {
        // 这里还有另外一种写法
        // while (stack.length && nums[stack[stack.length - 1] >= nums[i]]) stack.pop()
        // right[i] = stack.length ? n : [stack[stack.length - 1]]
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
            right[stack.pop()] = i
        }
        stack.push(i)
    }
    stack.length = 0
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
            left[stack.pop()] = i
        }
        stack.push(i)
    }
    for (let i = 0; i < n; i++) {
        // 理解方便，不简化了
        const length = (right[i] - 1) - (left[i] + 1) + 1
        if (nums[i] > threshold / length) return length
    }
    return -1
}

// TODO：并查集 "刷新了我对并查集的认知"