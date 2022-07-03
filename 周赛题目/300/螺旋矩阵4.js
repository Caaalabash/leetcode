function spiralMatrix(m, n, head) {
    const result = new Array(m).fill(0).map(() => new Array(n).fill(-1))
    let startI = 0
    let endI = m - 1
    let startJ = 0
    let endJ = n - 1
    while (head) {
        for (let i = startJ; i <= endJ; i++) {
            if (!head) break
            result[startI][i] = head.val
            head = head.next
        }
        for (let i = startI + 1; i < endI; i++) {
            if (!head) break
            result[i][endJ] = head.val
            head = head.next
        }
        for (let i = endJ; i >= startJ; i--) {
            if (!head) break
            result[endI][i] = head.val
            head = head.next
        }
        for (let i = endI - 1; i > startI; i--) {
            if (!head) break
            result[i][startJ] = head.val
            head = head.next
        }
        startI++
        endI--
        startJ++
        endJ--
    }
    return result
}