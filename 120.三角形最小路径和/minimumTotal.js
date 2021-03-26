// 给定一个三角形 triangle ，找出自顶向下的最小路径和。
// 每一步只能移动到下一行中相邻的结点上

// (i, j)下一行的相邻节点，等价于 (i+1, j), (i+1, j+1)
// [2]
// [3,4]
// [6,5,7]
// [4,1,8,3]
// 状态：dp[i][j]表示从点(i, j)到底边的最小路径和
// 状态转移方程：dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j+1])
// 初始值：最后一行dp[i][j] = triangle[i][j]
function minimumTotal(triangle) {
    // 不在原数组上修改
    const dp = Array.from({ length: triangle.length }, () => Array.from({ length: triangle.length+1 }, () => 0))
    // 从最后一行向上遍历
    for (let i = triangle.length-1; i >= 0; i--) {
        // 只和下面一行有关，倒着遍历正着遍历都可以
        for (let j = triangle.length-1; j >= 0; j--) {
            // 初始值的情况
            if (i === triangle.length-1) {
                dp[i][j] = triangle[i][j]
            } else {
                dp[i][j] = triangle[i][j] + Math.min(dp[i+1][j], dp[i+1][j+1])
            }
        }
    }
    return dp[0][0]
}

// 空间压缩
// 如何只用O(n)的dp空间完成？
function minimumTotal(triangle) {
    const dp = Array.from({ length: triangle.length+1 }, () => 0)
    // 初始值
    for (let i = 0; i < dp.length; i++) {
        dp[i] = triangle[triangle.length-1][i]
    }
    // 从倒数第二行开始遍历
    for (let i = triangle.length-2; i >= 0; i--) {
        // 为什么不能倒着遍历了：因为需要的是本列和未更新的下一列
        for (let j = 0; j < triangle.length-1; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j+1])
        }
    }
    return dp[0]
}