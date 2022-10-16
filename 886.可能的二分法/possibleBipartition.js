// 并查集
function possibleBipartition(n, dislikes) {
    const fa = new Array(n + 1).fill(0).map((_, index) => index)
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
    // 将某人不喜欢的放在同一组
    const dislikeArr = new Array(n + 1).fill(0).map(() => [])
    for (const [u, v] of dislikes) {
        dislikeArr[u].push(v)
        dislikeArr[v].push(u)
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < dislikeArr[i].length; j++) {
            union(dislikeArr[i][0], dislikeArr[i][j])
            const fi = find(i)
            const fj = find(dislikeArr[i][j])
            if (fi === fj) {
                return false
            }
        }
    }
    return true
}