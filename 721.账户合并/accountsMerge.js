// 并查集
function accountsMerge(accounts) {
    const m = accounts.length
    const fa = new Array(m).fill(0).map((_, index) => index)
    const find = x => {
        if (fa[x] !== x) {
            fa[x] = find(fa[x])
        }
        return fa[x]
    }
    const union = (x, y) => {
        const fx = find(x)
        const fy = find(y)
        if (fx === fy) {
            return
        }
        fa[fx] = fy
    }
    // 遍历所有邮箱，存储每个邮箱的账户索引，当某个邮箱已经存在于map中时，说明可以将账户 i 与 账户 map[account[i][j]] 进行合并
    const map = {}
    for (let i = 0; i < m; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            if (accounts[i][j] in map) {
                union(i, map[accounts[i][j]])
                continue
            }
            map[accounts[i][j]] = i
        }
    }
    // 构建答案
    const resultMap = {}
    for (let i = 0; i < m; i++) {
        const fi = find(i)
        if (!(fi in resultMap)) {
            resultMap[fi] = { account: accounts[i][0], email: new Set() }
        }
        for (let j = 1; j < accounts[i].length; j++) {
            resultMap[fi].email.add(accounts[i][j])
        }   
    }
    return Object.values(resultMap).map(({ account, email }) => {
        return [account, ...[...email].sort((a, b) => a < b ? -1 : 1)]
    })
}
