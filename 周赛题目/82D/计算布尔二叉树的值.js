// wrnm 真的一分钟做出来的，结果他妈 val 一直写成 value 还找不到错误
function evaluateTree(root) {
    if (root.val === 0 || root.val === 1) {
        return Boolean(root.val)
    }
    if (root.val === 2) {
        return evaluateTree(root.left) || evaluateTree(root.right)
    }
    return evaluateTree(root.left) && evaluateTree(root.right)
}