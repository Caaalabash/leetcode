// 数组arr => 所有连续子数组 => 最小值的和
// 1 <= arr.length <= 3 * 1e4
// 解法来到暴力（也可以视作动态规划）和单调栈两种

// 首先尝试 dp，超时，根据题目规模 n^2 接近 10^9，且存在MOD运算，所以必然超时
function sumSubarrayMins(arr) {
    const MOD = 1e9 + 7
    const n = arr.length
    let result = 0
    for (let i = 0; i < n; i++) {
        let min = arr[i]
        for (let j = i; j < n; j++) {
            min = Math.min(min, arr[j])
            result = (result + min) % MOD
        }
    }
    return result
}

// 单调栈 + 贡献值
// 贡献值遇到好几次了，贡献值解法和一般解法计算答案的视角是完全不同的，值得留意：
// 每个最小值都有一定的辐射范围，对于数组[3,1,2,4,1]，只要一段数字中包含1，那么这段数字的最小值肯定是1，这就是元素1的辐射范围
// 设arr[i]的辐射左边界为left, 辐射右边界为right，那么贡献值为：arr[i] * (i - left + 1) * (right - i + 1)  (这个应该好理解）
// 然后使用单调栈求左右辐射范围，再求和即可
// 值得注意的点：辐射区间需要将一边的条件改成 <=, 另一边的条件为 <，这样在存在多个最小值元素时，不会遗漏
function sumSubarrayMins(arr) {
    const MOD = 1e9 + 7
    const n = arr.length
    const left = new Array(n)
    const right = new Array(n)

    const stack = []
    for (let i = 0; i < n; i++) {
        right[i] = n
        // 注意，一侧的条件需要考虑等于的情况
        while (stack.length && arr[i] <= arr[stack[stack.length - 1]]) {
            right[stack.pop()] = i
        }
        stack.push(i)
    }
    stack.length = 0
    for (let i = n - 1; i >= 0; i--) {
        left[i] = -1
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            left[stack.pop()] = i
        }
        stack.push(i)
    }
    let result = 0
    for (let i = 0; i < n; i++) {
        // 注意 left[i] = 实际左边界 - 1，right[i] = 实际右边界 + 1
        result = (result + arr[i] * (i - (left[i] + 1) + 1) * ((right[i] - 1) + 1 - i)) % MOD
    }
    return result
}