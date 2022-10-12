// 即判断 source、destination是否处在一个连通块中
function validPath(n, edges, source, destination) {
    const fa = new Array(n).fill(0).map((_, index) => index)
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
    for (const [u, v] of edges) {
        union(u, v)
    }
    return find(source) === find(destination)
}