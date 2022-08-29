// 超时
function removeStars(s) {
    while (/[a-z]\*/.test(s)) {
        s = s.replaceAll(/[a-z]\*/, '')
    }
    return s
}

// 栈
function removeStars(s) {
    const stack = [s[0]]
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== '*') {
            stack.push(s[i])
        } else if (stack[stack.length - 1] !== '*') {
            stack.pop()
        }
    }
    return stack.join('')
}