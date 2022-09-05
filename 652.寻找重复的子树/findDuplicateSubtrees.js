// 使用序列化进行唯一表示
// 将每一颗子树都序列化成一个字符串
// 此处选择前序遍历，序列化每一颗子树，注意树的结构也需要保存，如果只序列化节点值，是不够的
function findDuplicateSubtrees(root) {
    const repeat = new Set() // 存储重复节点
    const seen = new Map() // 存储序列化字符串-节点映射
    const dfs = node => {
        if (!node) {
            return ''
        }
        const str = `${node.val}(${dfs(node.left)})(${dfs(node.right)})`
        if (seen.has(str)) {
            repeat.add(seen.get(str))
        } else {
            seen.set(str, node)
        }
        return str
    }
    dfs(root)
    return [...repeat]
}