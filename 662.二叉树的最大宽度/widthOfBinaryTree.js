// 每一层的宽度 = 该层作用两个端点之间的长度（含null）
// 树中节点数目范围是[1, 3000]

// NT做法，超时了
// 思路是层序遍历，找到每一层的左右端点，将中间空节点也纳入计数
function widthOfBinaryTree(root) {
    const levelList = []
    let stack = [root]
    let val = 1

    while (stack.length) {
        const len = stack.length
        let left = -1
        let right = -1
        for (let i = 0; i < len; i++) {
            if (stack[i]) {
                left = i
                break
            }
        }
        for (let i = len - 1; i >= 0; i--) {
            if (stack[i]) {
                right = i
                break
            }
        }
        if (left === -1 && right === -1) {
            break
        }
        levelList.push([])
        const nextStack = stack.slice(left, right + 1)
        for (let i = left; i <= right; i++) {
            const item = nextStack.shift() || { left: null, right: null } // 如果是空节点，依旧参与下一层的计算
            nextStack.push(item.left)
            nextStack.push(item.right)
            levelList[levelList.length - 1].push(val++)
        }
        stack = nextStack
    }
    return Math.max(...levelList.map(i => i.length))
}

// BFS: 重新编号，需要注意节点编号值溢出的问题，所以要使用BigInt
function widthOfBinaryTree(root) {
    const stack = [new Pair(root, 1n)]
    let res = 1

    while (stack.length) {
        const length = stack.length
        res = Math.max(res, Number(stack[length - 1].val - stack[0].val + 1n))

        for (let i = 0; i < length; i++) {
            const pair = stack.shift()
            pair.node.left && stack.push(new Pair(pair.node.left, pair.val * 2n))
            pair.node.right && stack.push(new Pair(pair.node.right, pair.val * 2n + 1n))
        }
    }

    return res
}

function Pair(node, val) {
    this.node = node
    this.val = val
}