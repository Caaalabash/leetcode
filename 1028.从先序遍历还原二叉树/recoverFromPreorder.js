// Q4 1797
function recoverFromPreorder(traversal) {
    const arr = formatStr(traversal)
    const helper = depth => {
        if (!arr.length) return null
        if (arr[0].depth === depth) {
            const top = arr.shift()
            const node = new TreeNode(top.num)
            node.left = helper(depth + 1)
            node.right = helper(depth + 1)
            return node
        }
        return null
    }
    return helper(0)
}

// '1-2--3' ==> [{ num: 1, depth: 0 }, { num: 2, depth: 1 }, { num: 3, depth: 2 }]
function formatStr(s) {
    if (!s.length) return []
    const result = []
    let depth = 0
    let num = ''

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            num += s[i]
        } else {
            if (num) {
                result.push({ num: +num, depth })
                depth = 0
                num = ''
            }
            depth++
        }
    }
    result.push({ num: +num, depth })

    return result
}