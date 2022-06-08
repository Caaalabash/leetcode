// 这次偷一颗二叉树，相邻节点被偷将触发报警
// 进行树的层次遍历，并存储每一层的和，然后对每层的和进行动态规划求解 => 即一次偷一层
// 对于如下的树，是可以偷3和4的
//        2
//       / \
//      1   3
//     /
//    4

// f(node)表示选择node节点的情况下，node节点的子树上被选择的节点的最大权重值
// g(node)表示不选择node节点的情况下，node节点的子树上被选择的节点的最大权重值
// 选中node时，node.left、node.right一定不能选
// => f(node) = node.val + g(node.left) + g(node.right)
// 不选中node时，可以选中node.left(right)，也可以不选中node.left(right)
// => g(node) = Max(f(node.left), g(node.left)) + Max(f(node.right), g(node.right))
// 太猛了这
function rob(root) {
    const f = new Map()
    const g = new Map()
    // 采取后序遍历
    const dfs = node => {
        if (node === null) {
            return
        }
        dfs(node.left)
        dfs(node.right)
        f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0))
        g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0))
    }
    dfs(root)
    return Math.max(f.get(root) || 0, g.get(root) || 0)
}

// 优化：观察发现，对一个几点，我们只关系他的孩子节点的f和g，可以通过调整dfs函数，省去map的空间
function rob(root) {
    const dfs = (node) => {
        if (node === null) {
            return [0, 0];
        }
        const l = dfs(node.left);
        const r = dfs(node.right);
        const selected = node.val + l[1] + r[1];
        const notSelected = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
        return [selected, notSelected];
    }

    const rootStatus = dfs(root);
    return Math.max(rootStatus[0], rootStatus[1]);
};
