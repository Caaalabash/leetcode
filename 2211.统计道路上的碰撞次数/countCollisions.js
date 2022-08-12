// Q2 1581
// 栈模拟
function countCollisions(directions) {
    let stack = [directions[0]]
    let result = 0
    let cur, last

    for (let i = 1; i < directions.length; i++) {
        cur = directions[i]
        last = stack[stack.length - 1]

        if (last === cur) {
            stack.push(cur)
            continue
        }
        if (last === 'R') {
            // RRRL -> RRRS
            if (cur === 'L') {
                result++
                cur = 'S'
            }
            // RRRS -> S
            while (last === 'R') {
                result++
                stack.pop()
                last = stack[stack.length - 1]
            }
            stack.push('S')
        } else if (last === 'S' && cur === 'L') {
            result++
            stack.push('S')
        } else {
            stack.push(cur)
        }
    }
    return result
}