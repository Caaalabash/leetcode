// Q2 1581
// 栈模拟，stack空间懒得优化了
function countCollisions(directions) {
    const length = directions.length
    const stack = [directions.charAt(0)]
    let result = 0

    for (let i = 1; i < length; i++) {
        let cur = directions.charAt(i)
        let last = stack[stack.length - 1]

        if (last === cur) {
            stack.push(cur)
            continue
        }
        if (last === 'R') {
            // RRRL -> RRS
            if (cur === 'L') {
                result += 1
                cur = 'S'
            }
            while (last === 'R') {
                result += 1
                stack.pop()
                last = stack[stack.length - 1]
            }
            stack.push('S')
        } else if (last === 'S' && cur === 'L') {
            result += 1
            stack.push('S')
        } else {
            stack.push(cur)
        }
    }

    return result
}