// 由于并查集没有删除删除操作，因此我们倒序遍历removeQueries，就转换成了添加操作，
function maximumSegmentSum(nums, removeQueries) {
    const n = nums.length
    const parent = new Array(n + 1).fill(0)
    const sum = new Array(n + 1).fill(0)
    const result = new Array(n).fill(0)
    const find = x => {
        if (parent[x] !== x) parent[x] = find(parent[x])
        return parent[x]
    }

    for (let i = 0; i <= n; i++) {
        parent[i] = i
    }

    for (let i = n - 1; i > 0; i--) {
        const x = removeQueries[i]
        const to = find(x + 1)
        parent[x] = to

        sum[to] += sum[x] + nums[x]
        result[i - 1] = Math.max(result[i], sum[to])
    }
    return result
}