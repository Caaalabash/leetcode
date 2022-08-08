// Q2 1581
// 栈模拟
function countCollisions(directions) {
    const length = directions.length
    let stack = [directions.charAt(0)]
    let result = 0

    for (let i = 1; i < length; i++) {
        let cur = directions.charAt(i)
        let last = stack[stack.length - 1]

        if (last === cur) {
            if (cur !== 'S') {
                stack.push(cur)
            }
            continue
        }
        if (last === 'R') {
            // RRRL -> RRRS
            if (cur === 'L') {
                result += 1
                cur = 'S'
            }
            // RRRS -> S
            while (last === 'R') {
                result += 1
                stack.pop()
                last = stack[stack.length - 1]
            }
            stack = ['S']
        } else if (last === 'S' && cur === 'L') {
            result += 1
            stack = ['S']
        } else {
            stack = [cur]
        }
    }

    return result
}