// 题目中提到："假设 b 是 a 的副本，并在末尾附加值 val"，也就是说，总是插入右子树
function insertIntoMaxTree(root, val) {
    if (!root || val > root.val) {
        return new TreeNode(val, root, null)
    }
    root.right = insertIntoMaxTree(root.right, val)
    return root
}

function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}