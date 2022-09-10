// 就是栈
function minOperations(logs) {
    const stack = []
    for (const log of logs) {
        if (log === './') {
            continue
        } else if (log === '../') {
            stack.pop()
        } else {
            stack.push(log)
        }
    }
    return stack.length
}

// 当然空间可以不用
function minOperations(logs) {
    let depth = 0
    for (const log of logs) {
        if (log === './') {
            continue
        } else if (log === '../') {
            if (depth > 0) depth--
        } else {
            depth++
        }
    }
    return depth
}