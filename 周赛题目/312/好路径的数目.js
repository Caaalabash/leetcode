// 暴力思路：先考虑节点值最大的点，x个，会形成C(x, 2)条长度大于1的好路径，然后从树中删除这些点，再考虑剩下的连通块中好路径个数
// 最坏情况时间复杂度是O(n^2)

// 把删除改为合并 ==> 并查集
// 按节点值从小到大考虑，同时用并查集时，总是从节点值小的点往节点值大的点合并，保证连通块的代表元的节点值是最大的
function numberOfGoodPaths(vals, edges) {
    // 建图
    const n = vals.length
    const graph = new Array(n).fill(0).map(() => [])
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    // 并查集模版
    const fa = new Array(n).fill(0).map((_, index) => index)
    const find = x => {
        if (fa[x] !== x) fa[x] = find(fa[x])
        return fa[x]
    }
    // rank[x]表示节点值等于vals[x]的节点个数
    const rank = new Array(n).fill(1)
    // 每个点自身为一个好路径
    let result = n
    // 将id按照权值排序，从小到大遍历
    const id = [...fa].sort((a, b) => vals[a] - vals[b])
    for (const x of id) {
        const pX = find(x)
        for (const y of graph[x]) {
            const pY = find(y) // 代表元
            if (pX === pY || vals[pY] > vals[x]) {
                continue
            }
            // 可以构成好路径
            if (vals[pY] === vals[x]) {
                result += rank[pX] * rank[pY]
                rank[pX] += rank[pY]
            }
            fa[pY] = pX
        }
    }
    return result
}
