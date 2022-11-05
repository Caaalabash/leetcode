function parseBoolExpr(expression) {
    const stack = []
    const getBoolVal = val => typeof val === 'boolean' ? val : ({ t: true, f: false })[val]

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] !== ')') {
            stack.push(expression[i])
        } else {
            const child = []
            while (stack[stack.length - 1] !== '(') {
                const item = stack.pop()
                if (item !== ',') {
                    child.push(item)
                }
            }
            stack.pop()
            const operate = stack.pop()
            if (operate === '|') {
                stack.push(child.reduce((state, c) => state || getBoolVal(c), false))
            } else if (operate === '&') {
                stack.push(child.reduce((state, c) => state && getBoolVal(c), true))
            } else {
                stack.push(!getBoolVal(child[0]))
            }
        }
    }
    return getBoolVal(stack[0])
}