function verifyPreorder(preorder) {
    // 构建一个 nextGreater 数组，记录当前索引 i 的下一个更大元素的索引位置，如果没有填充为 n
    const n = preorder.length
    const nextGreater = new Array(n).fill(n)
    const stack = []
    for (let i = 0; i < n; i++) {
        while (stack.length && preorder[stack[stack.length - 1]] < preorder[i]) {
            nextGreater[stack.pop()] = i
        }
        stack.push(i)
    }
    // 递归检查一个范围
    const check = (start, end) => {
        if (start > end) {
            return true
        }
        const rightIndex = nextGreater[start]
        for (let i = start + 1; i <= rightIndex - 1; i++) {
            if (preorder[i] > preorder[start]) return false
        }
        for (let i = rightIndex; i <= end; i++) {
            if (preorder[i] < preorder[start]) return false
        }
        return check(start + 1, rightIndex - 1) && check(rightIndex, end)
    }
    return check(0, n - 1)
}

// 单调栈与二叉搜索树的联系：
// 在向左子树遍历的过程中，value是越来越小的, 一旦出现value大于栈顶元素时，就意味着进入右子树了
function verifyPreorder(preorder) {
    const stack = []
    let parentVal = 0
    for (const n of preorder) {
        while (stack.length && n > stack[stack.length - 1]) {
            parentVal = stack.pop()
        }
        // 右子树的值小于父节点
        if (n < parentVal) {
            return false
        }
        stack.push(n)
    }
    return true
}